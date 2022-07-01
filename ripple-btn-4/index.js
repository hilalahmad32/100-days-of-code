const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', function (e) {
    const x = (e.pageX - btn.offsetLeft)
    const y = (e.pageY - btn.offsetTop)
    console.log(y, x);
    btn.style.setProperty('--xPos', x + 'px');
    btn.style.setProperty('--yPos', y + 'px');
})