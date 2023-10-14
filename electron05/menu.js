const isMac = process.platform === 'darwin'
const { app, Menu } = require('electron')

const createMenu = (win)=>{
    const menuConfig = [
        ...(isMac ? [
            {
                label: app.name
            }
        ] : []),
        {
            label:"操作",
            submenu:[
                {
                    label:"关闭",
                    role:"close"
                },
                {
                    type: "separator"
                },
                {
                    label: "最小化",
                    role: "minimize"
                },
                {
                    label:"进程通信",
                    accelerator: "CommandOrControl+A",
                    click:()=>{
                        win.webContents.send("message")
                    }
                }
            ]
        }
    ]
    
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuConfig))
}

module.exports = {
    createMenu
}

