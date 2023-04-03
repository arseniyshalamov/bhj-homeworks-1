const menuSub = Array.from(document.querySelectorAll(".menu_sub"));
menuSub.forEach(item => {
  const menuLink = item.parentElement.querySelector(".menu__link");
  menuLink.onclick = (event) => {
    if (item.classList.contains("menu_active")) {
      item.classList.remove("menu_active");
    } else {
      menuSub.forEach((list) => {
        if (item.closest(".menu_main") === list.closest(".menu_main")) {
          list.classList.remove("menu_active");
        }
      });
      item.classList.add("menu_active");
    }
    event.stopPropagation();
    return false;
  }
});