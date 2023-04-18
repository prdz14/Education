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

// scroll card
class ScrollCard {
    constructor(obj) {
        this.section = document.querySelector(obj);
        window.addEventListener("scroll", () => this.fadeAnim(this.section, 2));
    }
    fadeAnim(section, coordinate) {
        const fadeRight = section.querySelectorAll(".fade-right");

        fadeRight.forEach((item) => {
            const speed = item.getAttribute("data-speed");
            item.style.transition = `${speed}ms`;

            if (scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }
}
const scrollCard = new ScrollCard('.services')
// scroll card