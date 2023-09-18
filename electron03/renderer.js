// window.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btn').addEventListener('click', () => {
//     window.api.test();
//   })
// });

window.addEventListener('DOMContentLoaded', () => {
    window.api.add((value)=>{
        const counter = document.getElementById('counter')
        counter.textContent = parseInt(counter.textContent)+value
    })
    // window.api.msg((value)=>{
    //     alert(value)
    // })
    const btn1 = document.getElementById('btn1')
    const input1 = document.getElementById('input1')
    btn1.onclick = ()=>{
        window.api.uploadFile((files)=>{
            input1.value = files[0]
        })
    }



    const btn = document.getElementById('btn')
    const input = document.getElementById('input')
    btn.onclick = async ()=>{
        const msg = await window.api.changeTitle(input.value)
        alert(msg)
    }
})
