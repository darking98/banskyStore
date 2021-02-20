const shoes = document.getElementById('shoes');
const shoesElements = document.getElementById('shoesElements');
const shirt = document.getElementById('shirt');
const shirtElements = document.getElementById('shirtElements');
const vintage = document.getElementById('vintage');
const vintageElements = document.getElementById('vintageElements');


function swapOptions(option, optionElements) {

    const productArray = [shoes, shirt, vintage];
    const elementsArray = [shoesElements, shirtElements, vintageElements]
    
    option.addEventListener('click', function () {
        option.classList.add('active');


        productArray.forEach(element => {
            if (element != option) {
                element.classList.remove('active');
            }
        });

        elementsArray.forEach(element => {

            if (element != optionElements) {
                element.classList.add('disabled-grid');
            } else {
                optionElements.classList.remove('disabled-grid');
            }

        });

    });

}

swapOptions(shoes, shoesElements);
swapOptions(shirt, shirtElements);
swapOptions(vintage, vintageElements);