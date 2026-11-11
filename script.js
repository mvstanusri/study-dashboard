function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
let time = 25 * 60;
let timerInterval;

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(function () {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

        if (time === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            return;
        }

        time--;
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 25 * 60;
    document.getElementById("timer").innerText = "25:00";
}