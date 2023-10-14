const {contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api',{
	selectFile: async ()=>{
		return await ipcRenderer.invoke('selectFiles')
	},
	saveFile: (content)=>{
		ipcRenderer.send('saveFile',content)
	}
})
