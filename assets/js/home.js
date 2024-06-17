$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $("#header"),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) {
            sticky.addClass('fixed');
            $(".top-header").addClass('display-none');
        }else {
            sticky.removeClass('fixed');
            $(".top-header").removeClass('display-none');
        }
      });
    
    const slidesContainer = $("slides-container ");
    const slide = document.querySelector(".slide-crosell ");
    const prevButton = $("slide-arrow-prev ");
    const nextButton = $("slide-arrow-next ");
    
    nextButton.addEventListener("click ", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click ", () => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
})