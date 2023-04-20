const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach(elem => {
    let tooltip = document.createElement("div");
    tooltip.innerText = elem.getAttribute("title");
    tooltip.classList.add("tooltip");
    elem.addEventListener('click', elm => {
        const activ = document.querySelector(".tooltip_active");
        if (activ && (activ !== tooltip)) {
            activ.classList.toggle("tooltip_active");
        } else {
            tooltip.classList.toggle("tooltip_active");
            let tooltipElem = Math.round(elem.getBoundingClientRect().left).toString();
            tooltip.style.left = tooltipElem + "px";
            elem.insertAdjacentElement("afterend", tooltip);
            elm.preventDefault();
        }
    })
})