let carousel = document.querySelector('.carousel');
let [carouselLeftArrow, carouselRightArrow] = document.querySelectorAll('.tc-arrow');
let carouselNav = document.querySelectorAll('.carousel-navigation i');

let inInitPos = true;

carouselNav.forEach( i => {
    i.addEventListener('click', SwitchCarouselPage)
});

carouselLeftArrow.addEventListener('click', SwitchCarouselPage);
carouselRightArrow.addEventListener('click', SwitchCarouselPage);


function SwitchCarouselPage(){
    if(inInitPos && carousel)
        {
            carouselNav[0].classList.remove('fa-circle');
            carouselNav[0].classList.add('fa-spinner');

            carouselNav[1].classList.remove('fa-spinner');
            carouselNav[1].classList.add('fa-circle');

            carousel.scrollTo({
                top: 0,
                left: 10000,
                behavior: "smooth",
            });

            inInitPos = false;
        }
        else
        {
            carouselNav[1].classList.remove('fa-circle');
            carouselNav[1].classList.add('fa-spinner');

            carouselNav[0].classList.remove('fa-spinner');
            carouselNav[0].classList.add('fa-circle');

            carousel.scrollTo({
                top: 0,
                left: -10000,
                behavior: "smooth",
            });

            inInitPos = true;
        }
}