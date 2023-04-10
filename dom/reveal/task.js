const reveal = document.querySelectorAll(".reveal");

document.addEventListener('scroll', () => {
    reveal.forEach(lm => {
        const inHeight = window.innerHeight;
        const topLm = lm.getBoundingClientRect().top;
        topLm < inHeight ? lm.classList.add("reveal_active") : lm.classList.remove("reveal_active");
    });
});

//reveal
//reveal_active