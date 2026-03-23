let count = 0;

const counter = document.getElementById("count");

function decrement() {
    count = count - 1;
    counter.textContent = count;
}

function reset() {
    count = 0;
    counter.textContent = count;
}

function increment() {
    count = count + 1;
    counter.textContent = count;
}