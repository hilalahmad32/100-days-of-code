const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

setInterval(() => {
    const date = new Date()
    hour.innerText = date.getHours()
    minute.innerText = date.getMinutes()
    second.innerText = date.getSeconds()
}, 1000);