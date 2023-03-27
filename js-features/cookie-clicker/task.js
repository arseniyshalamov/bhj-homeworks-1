const clickerCounter = document.getElementById("clicker__counter");
const cookieBig = document.getElementById("cookie");
//2 задание
const speedCounter = document.getElementById("speed__counter");
let timeStart = new Date().getTime();

cookieBig.onclick = function() {
    clickerCounter.textContent++;
    cookieBig.width === 200 ? cookieBig.width = 250 : cookieBig.width = 200;
    //2 задание
    let timeNow = new Date().getTime();
    speedCounter.textContent = (1 / ((timeNow - timeStart) / 1000)).toFixed(2);
    timeStart = new Date();
}