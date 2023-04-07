const tab = Array.from(document.querySelectorAll(".tab"));
//tab_active
const tabContent = Array.from(document.querySelectorAll(".tab__content"));
//tab__content_active

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', event => {
        let t = event.target;

        for (let i = 0; i < tab.length; i++) {
            tab[i].classList.remove("tab_active");
        }

        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove("tab__content_active");            
        }

        t.classList.add("tab_active");
        let index = tab.indexOf(document.querySelector(".tab_active"));
        tabContent[index].classList.add("tab__content_active");
    })
}

