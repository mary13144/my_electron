
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const container = document.getElementById('container')
    btn.onclick = async ()=>{
        const files = await window.api.selectFile()
        console.log(files)
        for (const file of files) {
            const div = document.createElement('div')
            div.innerText = file
            container.appendChild(div)
        }
    }

    const saveBtn = document.getElementById('saveBtn')
    const content = document.getElementById('content')
    saveBtn.onclick = ()=>{
        if (content.value !== ""){
            window.api.saveFile(content.value)
        }
    }
})