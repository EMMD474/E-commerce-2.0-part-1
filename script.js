// const ham = document.querySelector(".menu");
// const tablet = document.querySelector(".bottom-nav");
// const shadow = document.querySelector(".shadow");
// ham.addEventListener("click", () => {
//    ham.classList.toggle("is-active");
//    ham.classList.toggle("slide");
//    tablet.classList.toggle("active");
//    shadow.classList.toggle("active");
// })

const cart = document.querySelector(".view-cart");
const openCart = document.querySelector(".fa-shopping-cart");
const closeCart = document.querySelector(".cancel-cart");

openCart.addEventListener("click", () => {
   cart.classList.add("active");
   closeCart.classList.add("active");
})
closeCart.addEventListener("click", () => {
   cart.classList.remove("active");
   closeCart.classList.remove("active");
})