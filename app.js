let count = document.getElementById("count");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let number = 0;

decreaseBtn.addEventListener('click', decreaseCount);
resetBtn.addEventListener('click', resetCount);
increaseBtn.addEventListener('click', increaseCount);


function decreaseCount() {
    number--;
    setNumber(number);
}

function increaseCount() {
    number++;
    setNumber(number);
}

function resetCount() {
    number = 0;
    setNumber(number);
}

function setNumber(number) {
    count.innerText = number.toString();
    // Set Number Color
    if (number < 0) {
        count.style.color = "red";
    }
    if (number > 0) {
        count.style.color = "green";
    }
    if (number == 0) {
        count.style.color = "black";
    }
}