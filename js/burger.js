const menuMobile = () => {

    const mq = window.matchMedia("(max-width:1000px)");

   if(mq.matches){

        const burger = document.querySelector(".fa-bars");
        const burgerCross = document.querySelector(".fa-times")
        const menu = document.querySelector(".menu");
        const listOptions = document.querySelectorAll('.list-options');
        const $listOptions = $('.list-options');
        const $genderItems = $('.gender-items');
        const $genderItems1 = $('.gender-items1');
        const $genderItems2 = $('.gender-items2');
        const genderItems = document.querySelectorAll('.gender-items')
        const $category = $('.category');

        $listOptions.find('ul, li:lt(1)').hide();


        $listOptions.each(function (i, value){
            $(this).children().on('click', () =>{
                $(this).find(`ul`).slideToggle();
                console.log(value);
            });
        });
    
    
    
        burger.addEventListener("click", () => {
            burger.classList.toggle('disabled');
            burgerCross.classList.toggle('disabled');
            menu.classList.toggle("nav-active");
        });
    
    
        burgerCross.addEventListener("click", () => {
            burgerCross.classList.toggle('disabled');
            burger.classList.toggle('disabled');
            menu.classList.toggle("nav-active");
        });
    
    
        $genderItems1.find('p').on('click', ()=>{
            $genderItems1
                .children('.list-options')
                .slideToggle();
            //$genderItems1.children('.list-options li:nth-child(1)').hide();
        });
    
        $genderItems2.find('p').on('click', () =>{
            $genderItems2
                .children('.list-options')
                .slideToggle();
                
        })
    }

}    
menuMobile();