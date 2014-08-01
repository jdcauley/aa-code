  var slider = document.getElementById('slider');
  /*
  slideHeights = []
  for (var i = 0; i < slides.length; i++){
    slides[i].setAttribute('data-index', i);
    height = window.getComputedStyle(slides[i], null).getPropertyValue('height').replace("px", "")
    slideHeights.push(height);
  }
	var tallest = Math.max.apply( null, slideHeights );
  slider.style.height=tallest+'px' ;
  */
  var theSlides = document.getElementsByClassName('slide');
  var allSlides = []
  for (var i = 0; i < theSlides.length; i++){
    var slideNumber = theSlides[i];
    allSlides.push(slideNumber);
  }
  function slideRight() {
    console.log('right-click');

    var activeSlide = document.querySelectorAll('.slide.active');
    console.log(activeSlide);

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
    var activeSlide = document.querySelectorAll('.slide.active');
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
