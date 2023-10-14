const { Menu, shell,dialog,app } = require('electron')

const isMac = process.platform === 'darwin'

const template = [
    ...(isMac ? [{
        label: app.name,
    }] : []),
    {
        label:"操作",
        submenu:[
            {
                label: '访问官网',
                click: ()=>{
                    shell.openExternal('https://mwxblog.com')
                }
            },
            {
                label: '退出',
                click: async ()=>{
                    const res = await dialog.showMessageBox({
                        title:"退出",
                        message:"是否退出?",
                        buttons: ["取消","确定"],
                    })
                    console.log(res);
                    if(res.response === 1){
                        app.quit()
                    }
                }
            }
        ]
       
    }
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))