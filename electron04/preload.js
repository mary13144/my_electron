const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('api', {
	toMain: (width,height)=>{
		console.log('test')
		ipcRenderer.send('toMain', width,height);
	}
});