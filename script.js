// const increaseBtn = document.querySelector("#increase")
// const decreaseBtn = document.querySelector("#decrease")
// const ZeroBtn = document.querySelector("#zero")
// const counter = document.querySelector("h1")


// increaseBtn.addEventListener("click", () => {counter.innerHTML = +counter.innerHTML +1})
// decreaseBtn.addEventListener("click", () => {counter.innerHTML = +counter.innerHTML -1})
// ZeroBtn.addEventListener("click", () => {counter.innerHTML = 0})

let current = 0
const counter = document.querySelector(".counter__current")
const item = document.querySelector(".playerea__clicker")

item.addEventListener("click", () => {
    current += 1
    counter.innerHTML = current
})

