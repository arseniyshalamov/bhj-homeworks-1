const fontSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");
const colors = Array.from(document.querySelectorAll(".book__control_color .color"));
const backgrounds = Array.from(document.querySelectorAll(".book__control_background .color"));

fontSize.forEach(elem => {
    elem.onclick = () => {
        fontSize.forEach(item => item.classList.remove("font-size_active"));
        elem.classList.add("font-size_active");
        if (elem.classList.contains("font-size_small")) {
            book.classList.remove("font-size_big");
            book.classList.add("font-size_small");
        } else if (elem.classList.contains("font-size_big")) {
            book.classList.remove("font-size_small");
            book.classList.add("font-size_big");
        } else {
            book.classList.remove("font-size_small");
            book.classList.remove("font-size_big");
        }
        return false;
    }
})

colors.forEach(color => {
    color.onclick = () => {
        colors.forEach(elm => elm.classList.remove("color_active"));
        color.classList.add("color_active");
        if (color.classList.contains("text_color_gray")) {
            book.classList.remove("book_color-black");
            book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-gray");
        } else if (color.classList.contains("text_color_black")) {
            book.classList.remove("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-black");
        } else {
            book.classList.remove("book_color-black");
            book.classList.remove("book_color-gray");
            book.classList.add("book_color-whitesmoke")
        }
        return false;
    }
})

backgrounds.forEach(background => {
    background.onclick = () => {
        backgrounds.forEach(elem => elem.classList.remove("color_active"));
        background.classList.add("color_active");
        if (background.classList.contains("bg_color_gray")) {
            book.classList.remove("book_bg-black");
            book.classList.remove("book_bg-white");
            book.classList.add("book_bg-gray");
        } else if (background.classList.contains("bg_color_black")) {
            book.classList.add("book_bg-black");
            book.classList.remove("book_bg-white");
            book.classList.remove("book_bg-gray");
        } else {
            book.classList.remove("book_bg-gray");
            book.classList.remove("book_bg-black");
            book.classList.add("book_bg-white");
        }
        return false;
    };

})