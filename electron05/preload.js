const { ipcRenderer, contextBridge } = require("electron");

ipcRenderer.on("message", () => {
    console.log('test');
})

contextBridge.exposeInMainWorld('api',{
    toMain:()=>{
        ipcRenderer.send("context-menu")
    }
})