// burger
const burger = document.querySelector('.menu')
const list = document.querySelector('.nav_list')

burger.addEventListener('click', () => {
    list.classList.toggle('active')
})
// burger

// count
class Timer {
    constructor(obj) {
        this.timerNum = document.querySelectorAll(obj.timerNums)
        this.timerSection = document.querySelector(obj.timerSection)
        this.state = true
        window.addEventListener('scroll', () => this.scrollTimer())
    }
    scrollTimer() {
        if (this.state) {
            if ((scrollY + window.innerHeight) >= this.timerSection.offsetTop) {
                this.timerSet();
                this.state = false;
            }
        }
    }
    timerSet() {
        this.timerNum.forEach((nums) => {
            const count = +nums.getAttribute("data-num");
            nums.innerHTML = 0;

            function timer(k = 0) {
                nums.innerHTML = k
                k++
                if (k <= count) {
                    setTimeout(() => {
                        timer(k)
                    }, 1);
                }
            }
            timer()
        });
    }
}

const timer = new Timer({
    timerSection: '.about',
    timerNums: '.about_item-title'
})
// count

// 