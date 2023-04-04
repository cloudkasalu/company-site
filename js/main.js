




const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar-nav');
navbarToggler.addEventListener('click', (e)=>{

    const value = navbarToggler.getAttribute('aria-expanded')

    if(value === 'false'){
      document.body.classList.add('no-scroll');
      navbar.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', "true");


    } else if (value === 'true'){
     document.body.classList.remove('no-scroll');
      navbar.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', "false");
    }
       

})


$(document).ready(function(){
   
$('.testimonial-slider').slick({
    dots: true,
    autoplay:true,
    infinite: true,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

})
