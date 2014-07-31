  var slider = document.getElementById('slider');
  var slides = document.getElementsByClassName('slide');
  slideHeights = []
  console.log(slides.length);
  for (var i = 0; i < slides.length; i++){
    console.log(i);
    slides[i].setAttribute('data-index', i);
    height = window.getComputedStyle(slides[i], null).getPropertyValue('height').replace("px", "")
    slideHeights.push(height);
  }
	var tallest = Math.max.apply( null, slideHeights );
  slider.style.height=tallest+'px' ;

  console.log(slideHeights);




  var theSlides = document.getElementsByClassName('slide');
  var allSlides = []

  for (var i = 0; i < theSlides.length; i++){
    var slideNumber = theSlides[i];
    allSlides.push(slideNumber);
  }
  console.log(allSlides);


  function slideRight() {
    console.log('right-click');

    var activeSlide = document.querySelectorAll('.slide.active');
    console.log(activeSlide);

    for (var i = 0; i < activeSlide.length; i++){
      var currentSlide = activeSlide[i];
      var slideIndex = activeSlide[i].getAttribute('data-index');
    }
    var nextSlideIndex = new Number(slideIndex) + 1;
    console.log(nextSlide);

    for (var i = 0; i < allSlides.length; i++){
      slideNumber = allSlides[i].getAttribute('data-index');

      if( nextSlideIndex == slideNumber){
        console.log(allSlides[i].className);
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
    console.log('right-click');

    var activeSlide = document.querySelectorAll('.slide.active');
    console.log(activeSlide);

    for (var i = 0; i < activeSlide.length; i++){
      var currentSlide = activeSlide[i];
      var slideIndex = activeSlide[i].getAttribute('data-index');
    }
    var prevSlideIndex = new Number(slideIndex) - 1;
    console.log(prevSlide);

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
