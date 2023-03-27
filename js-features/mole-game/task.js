const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
// const holee = document.getElementById("hole");
const clear = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}

function getHole(i) {
    return document.getElementById("hole" + i);
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    function game() {
        hole.classList.contains("hole_has-mole") ? dead.textContent ++ : lost.textContent ++;
        // if (hole.classList.contains("hole_has-mole")) {
        //     dead.textContent ++;
        // } else {
        //     lost.textContent ++;
        // }

        if (dead.textContent == 10) {
            alert("Победа!");
            clear();
        }
        if (lost.textContent == 5) {
            alert("Поражение!");
            clear();
        }
    }
    hole.onclick = game;
}