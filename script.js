// burger
const burger = document.querySelector('.menu')
const list = document.querySelector('.nav_list')

burger.addEventListener('click', () => {
    list.classList.toggle('active')
})
// burger

// count
class Count {
    constructor(obj) {
        const countNumb = document.querySelectorAll('.about_item-title')
        countNumb.forEach(numb => {
            const count = +numb.getAttribute('data-num')
            numb.innerHTML = 0
            function timer(k = 0) {
                numb.innerHTML = k
                k++``
                if (k <= count) {
                    setTimeout(() => {
                        timer(k)
                    }, 5);
                }
            }
            timer()

        })
        console.log(countNumb);
    }
}

const count = new Count()
// count