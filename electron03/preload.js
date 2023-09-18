// const fs = require('fs');

const { contextBridge, ipcRenderer } = require("electron")

// const content = fs.readFileSync('package.json', 'utf-8');

// console.log(content);

// window.addEventListener('DOMContentLoaded', () => {
//   console.log(document.querySelector('h1'));
// });

// ipcRenderer.send('saveFile')

// contextBridge.exposeInMainWorld('api',{
//   test: ()=>{
//     ipcRenderer.send('saveFile')
//   }
// })


window.addEventListener('DOMContentLoaded', () => {
  // document.getElementById('btn').addEventListener('click', () => {
  //   window.api.test();
  // })

  let elList = ['node','chrome','electron']
  for (const el of elList) {
    const ele = document.getElementById(`${el}`)
    ele.textContent = `${el}:${process.versions[el]}`
  }
});

// ipcRenderer.on('add',(e)=>{
//   const counter = document.getElementById('counter')
//   counter.textContent = parseInt(counter.textContent)+1
// })


contextBridge.exposeInMainWorld('api',{
  add: (callback)=>{
    ipcRenderer.on('add',(event,value)=>{
        callback(value)
    })
  },
  changeTitle: async (title)=>{
    return await ipcRenderer.invoke('changeTitle', title)
  },
  // msg: (callback)=>{
  //   ipcRenderer.on('msg',(event,value)=>{
  //       callback(value)
  //   })
  // },
  uploadFile: async (callback)=>{
    const files = await ipcRenderer.invoke('selectFile')
    callback(files)
  }
})


