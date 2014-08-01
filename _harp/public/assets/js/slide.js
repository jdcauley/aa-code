function theSlideShow(carouselId){
  var slider = document.getElementById(carouselId);
  var theSlides = slider.getElementsByClassName('slide');
  var allSlides = []
  for (var i = 0; i < theSlides.length; i++){
    theSlides[i].setAttribute('data-index', i);
    var slideNumber = theSlides[i];
    allSlides.push(slideNumber);
  }
  function slideRight() {
    var activeSlide = slider.querySelectorAll('.slide.active');
    for (var i = 0; i < activeSlide.length; i++){
      var currentSlide = activeSlide[i];
      var slideIndex = activeSlide[i].getAttribute('data-index');
    }
    var nextSlideIndex = new Number(slideIndex) + 1;
    for (var i = 0; i < allSlides.length; i++){
      slideNumber = allSlides[i].getAttribute('data-index');

      if( nextSlideIndex == slideNumber){
        var nextSlide = allSlides[i]
      }
    }
    currentSlide.className = 'slide active prev';
    nextSlide.className = nextSlide.className + ' slide-next';
    function nextActiveClasses(){
      nextSlide.className = nextSlide.className + ' next active';
      currentSlide.className = 'slide slide-prev';
    }
    window.setTimeout(nextActiveClasses, 25);
  }
  function slideLeft() {
    var activeSlide = slider.querySelectorAll('.slide.active');
    for (var i = 0; i < activeSlide.length; i++){
      var currentSlide = activeSlide[i];
      var slideIndex = activeSlide[i].getAttribute('data-index');
    }
    var prevSlideIndex = new Number(slideIndex) - 1;
    for (var i = 0; i < allSlides.length; i++){
      slideNumber = allSlides[i].getAttribute('data-index');

      if( prevSlideIndex == slideNumber){
        var prevSlide = allSlides[i]
      }
    }
    currentSlide.className = 'slide active next';
    prevSlide.className = prevSlide.className + ' slide-prev';
    function prevActiveClasses(){
      prevSlide.className = prevSlide.className + ' prev active';
      currentSlide.className = 'slide slide-next';
    }
    window.setTimeout(prevActiveClasses, 25);
  }
  document.getElementById('left-control').addEventListener("click", slideLeft, false);
  document.getElementById('right-control').addEventListener("click", slideRight, false);
}

function mobileNav(navId){
  var nav = document.getElementById(navId);

  function toggle(){
    console.log(nav.className);
    if(nav.className == 'main-nav active'){
      console.log('if');
      nav.className = nav.className.replace(" active", "");
    } else {
      console.log('else');
      nav.className = nav.className + ' active';
    }

  }

  document.getElementById('toggle').addEventListener("click", toggle, false);
}
// initialize the slider with the slider id
theSlideShow('slider');

// initialize the mobile nav with the mobile nav id
mobileNav('nav')
