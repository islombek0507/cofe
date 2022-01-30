const BurgerTogler = document.querySelector(".header__btn");
const Navigatsion = document.querySelector(".header__nav");

BurgerTogler.addEventListener("click", function() {
    if(!BurgerTogler.classList.contains("header__btn--open")){

        BurgerTogler.classList.add("header__btn--open");
        Navigatsion.classList.add("header__nav--open");
    }else{
        BurgerTogler.classList.remove("header__btn--open");
        Navigatsion.classList.add("header__nav--closing");
    }

});
Navigatsion.addEventListener("animationend", function(evt){
    if(evt.animationName==="close"){
        
        Navigatsion.classList.remove("header__nav--open");
        Navigatsion.classList.remove("header__nav--closing");
    }
})