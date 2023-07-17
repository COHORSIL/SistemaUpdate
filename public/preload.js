const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  closebtn: () => ipcRenderer.invoke("closebtn"),
  minimizebtn: () => ipcRenderer.invoke("minimizebtn"),
  maximizebtn: () => ipcRenderer.invoke("maximizebtn"),
});

// Permitir el acceso selectivo a métodos y eventos de Electron
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer
});

