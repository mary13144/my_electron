const {ipcMain,dialog} = require('electron')
const fs = require("fs");

ipcMain.handle('selectFiles',async ()=>{
	const res = await dialog.showOpenDialog({
		title:'选择图片',
		properties: ['openFile','multiSelections'],
		filters: [{
			name:'images',
			extensions: ['jpg']
		}]
	})
	return res.filePaths
})

ipcMain.on('saveFile',async (event,content)=>{
	const res = await dialog.showSaveDialog({
		title:'保存文件',
	})
	fs.writeFileSync(res.filePath,content)
})