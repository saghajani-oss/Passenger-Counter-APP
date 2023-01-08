let count = 0
let counter = document.getElementById("counter");
const increment = document.getElementById("increment-btn");
const save = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");

increment.addEventListener("click", () => {
    count = count + 1;
    counter.innerHTML = count;
})

save.addEventListener("click", () => {
    saveEl.innerHTML += count + " - ";
    count = 0;
    counter.innerHTML = count;
})

