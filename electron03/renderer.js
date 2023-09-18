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
    window.api.msg((value)=>{
        alert(value)
    })

    const btn = document.getElementById('btn')
    const input = document.getElementById('input')
    btn.onclick = ()=>{
        window.api.changeTitle(input.value)
    }
})
