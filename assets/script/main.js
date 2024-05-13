// let menubar = document.querySelector('#menubar');
// let mynav = document.querySelector('.navbar');
// menubar.onclick = () =>{
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        490:{
            slidesPerView: 1, 
        },
      },
    });
  });


  // closed buttons




  function startCounter(element) {
    let target = parseInt(element.getAttribute('data-count'));
    let current = 0;
    let step = Math.ceil(target / 100); 
    let interval = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current;
    }, 10); 
}
document.querySelectorAll('.counters [data-count]').forEach(counter => {
    startCounter(counter);
});