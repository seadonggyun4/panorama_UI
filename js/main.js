const circle = document.querySelector('.wrap #circle')
const els = document.querySelectorAll('.wrap #circle article .inner div')


els.forEach(el => {
    el.addEventListener('mouseover', () => {
        console.log(circle)
    })
})
