//задание 1.1 
// function startTimer() {
//     const timer = document.getElementById("timer");
//     if (-timer.textContent === 0) {
//         window.alert("Вы победили в конкурсе!");
//         clearInterval(timerId);
//     } else {
//         timer.textContent--;
//     }
// }
// let timerId = setInterval(startTimer, 1000);

//задание 1.2
const ss = document.getElementById("seconds");
const mm = document.getElementById("minutes");
const hh = document.getElementById("hours");
const timeId = setInterval(function() {
    ss.textContent--;
    if (ss.textContent < 1 && mm.textContent < 1 && hh.textContent < 1) {
        alert("Вы победили в конкурсе!");
        location.assign("http://hello.kitty");
        // location.onclick("")
        clearInterval(timeId);
    }
    if (ss.textContent < 0) {
        mm.textContent--;
        ss.textContent = "59";
    }
    if (mm.textContent < 0) {
        hh.textContent--;
        mm.textContent = "59";
    }
    ss.textContent = ss.textContent.length < 2 ? '0' + ss.textContent : ss.textContent;
    mm.textContent = mm.textContent.length < 2 ? '0' + mm.textContent : mm.textContent;
    hh.textContent = hh.textContent.length < 2 ? '0' + hh.textContent : hh.textContent;
}, 1000)
