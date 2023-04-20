const productQuantityControl = Array.from(document.getElementsByClassName("product__quantity-control"));
const productAdd = Array.from(document.getElementsByClassName("product__add"));
const cartProducts = document.querySelector(".cart__products");

productQuantityControl.forEach(elem => {
    elem.addEventListener('click', () => {
        const one = elem.closest('.product__quantity-controls');
        const count = one.querySelector('.product__quantity-value');

        if (elem.classList.contains("product__quantity-control_inc")) {
            count.textContent++;
        } else if (elem.classList.contains("product__quantity-control_dec") && count.textContent > 0) {
            count.textContent--;
        }
    })
})

productAdd.forEach(elem => {
    elem.addEventListener('click', () => {
        const check = elem.closest(".product");
        const sum = check.querySelector(".product__quantity-value");
        const image = check.querySelector(".product__image").src;
        const id = check.getAttribute("data-id");
        const arratId = Array.from(cartProducts.children).find(i => i.getAttribute("data-id") === id);

        if (!arratId) {
            cartProducts.insertAdjacentHTML(
                'beforeend',
                `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src=${image}><div class="cart__product-count">${sum.textContent}</div></div>`);
        } else {
            const cartProductsAdd = arratId.querySelector(".cart__product-count");

            cartProductsAdd.textContent = +cartProductsAdd.textContent + +sum.textContent;
        }
    })
})