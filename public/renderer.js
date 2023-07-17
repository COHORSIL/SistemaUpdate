const { ipcRenderer } = require("electron");
const closeb = document.getElementById("close-btn");
const minimizeb = document.getElementById("minimize-btn");
const maximizeb = document.getElementById("maximize-btn");

const progressBar = document.getElementById("progress-bar");
const mensaje = document.getElementById("mensaje");

closeb.addEventListener("click", () => {
  ipcRenderer.invoke("closebtn");
});

minimizeb.addEventListener("click", () => {
  ipcRenderer.invoke("minimizebtn");
});

maximizeb.addEventListener("click", () => {
  ipcRenderer.invoke("maximizebtn");
});

ipcRenderer.on("mensaje", (event, arg) => {
  const mensajeElement = document.getElementById("mensaje");
  mensajeElement.innerText = arg;

  if (arg === "descarga") {
    mensaje.style.display = "none";
  } else {
    mensaje.style.display = "block";
  }
});

ipcRenderer.on("totaldescargado", (event, totalDescarga) => {
  progressBar.max = totalDescarga;
  if (totalDescarga) {
    progressBar.style.visibility = "visible";
  } else {
    progressBar.style.visibility = "hidden";
  }
});

ipcRenderer.on("descargado", (event, descargado) => {
  progressBar.value = descargado;
});

ipcRenderer.on("version", (event, version) => {
  const appVersionElement = document.getElementById("version");
  appVersionElement.innerText = version;
});
