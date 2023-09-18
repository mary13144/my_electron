const {Menu} = require('electron')

const createMenu = (win) => {
  const menu = [
    {
      label: '菜单',
      submenu: [
        {
          label: '增加',
          click: () => {
            win.webContents.send('add',10)
          }
        }
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

module.exports = {
  createMenu
}
