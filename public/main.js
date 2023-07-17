require("v8-compile-cache");
const { app, BrowserWindow, ipcMain, screen, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
const axios = require("axios");

let mainWindow;
let loadingWindow;

app.commandLine.appendSwitch("ignore-certificate-errors"); //ignora los certificados

function createLoadingWindow() {
  loadingWindow = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  loadingWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "loading.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  loadingWindow.on("closed", () => {
    loadingWindow = null;
  });
}

function createWindow(res) {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  autoUpdater.setFeedURL({
    provider: "github",
    owner: "COHORSIL",
    repo: "UpdateV2",
    token: res.token,
  });

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    autoHideMenuBar: true,
    title: "COHORSIL",
    show: false,
    frame: false,
    backgroundColor: "#5A5A5A",
    titleBarStyle: "customButtonsOnHover",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    if (loadingWindow) {
      loadingWindow.close();
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Registra los eventos en el ipcMain
  ipcMain.handle("closebtn", () => {
    // Lógica para el botón cerrar
    app.quit();
  });

  ipcMain.handle("minimizebtn", () => {
    // Lógica para el botón minimizar
    mainWindow.minimize();
  });

  ipcMain.handle("maximizebtn", () => {
    // Lógica para el botón maximizar
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  });

  mainWindow.webContents.send("totaldescargado", 0);
  mainWindow.webContents.send("descargado", 0);
  mainWindow.webContents.send("mensaje", "descarga");
  const version = app.getVersion();
  mainWindow.webContents.send("version", `V ${version} TS`);
  autoUpdater.checkForUpdates();

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

async function getToken() {
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2hvcnNpbCIsImlhdCI6MTY2NDMwNjcyMiwiZXhwIjoxOTE2NzY3NTIyLCJhdWQiOiJ3d3cuY29ob3JzaWwuaG4iLCJzdWIiOiJramNvbnRyZXJhc0Bjb2hvcnNpbC5obiJ9.6p8GaTJ_J2Vafo-YeHDmDe6-U4m5CitlndTLhWTHB1Y",
    },
  };

  try {
    const res = await axios.get("http://192.168.101.3/rest/token.php", header);
    createWindow(res.data);
  } catch (err) {
    createWindow();
    console.error("err: ", err);
  }
}

app.on("ready", () => {
  createLoadingWindow();
  getToken();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: "info",
    buttons: ["Ok"],
    title: "Actualización",
    message: process.platform === "win32" ? releaseNotes : releaseName,
    detail: "Una nueva versión disponible, se descargara en sengundo plano",
  };
  dialog.showMessageBox(dialogOpts);
  mainWindow.webContents.send("mensaje", "Descifrando la descarga...");
});

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: "info",
    buttons: ["Reiniciar"],
    title: "Actualización",
    message: process.platform === "win32" ? releaseNotes : releaseName,
    detail: "Version descargada. Reinicie la aplicación para aplicar cambios.",
  };
  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall();
  });
});

autoUpdater.on("download-progress", (progressObj) => {
  let log_message = "";
  log_message = "Descargado " + progressObj.percent.toFixed(2) + "%";
  log_message =
    log_message +
    " (" +
    progressObj.transferred +
    "/" +
    progressObj.total +
    ")";

  let Descargado = (progressObj.transferred / 1048576).toFixed(2);
  let TotaDescarga = (progressObj.total / 1048576).toFixed(2);

  sendStatusToWindow(Descargado, TotaDescarga, log_message);
});

function sendStatusToWindow(Descargado, TotaDescarga, log_message) {
  mainWindow.webContents.send("mensaje", log_message);
  mainWindow.webContents.send("descargado", Descargado);
  mainWindow.webContents.send("totaldescargado", TotaDescarga);
}
