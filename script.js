// burger
const burger = document.querySelector('.menu')
const list = document.querySelector('.nav_list')

burger.addEventListener('click', () => {
    list.classList.toggle('active')
})
// burger