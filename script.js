function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 120;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

const scroller = document.querySelector('.scroller');
const section1 = document.querySelector('.person'); // Assuming '.person' is the class for the element you want to modify
const scrollerOffset = scroller.offsetHeight;
const scrollerOffsetTop = scrollerOffset - window.innerHeight;

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY / 100;

    const count = (scrollPosition / scrollerOffsetTop)*5 ;

    const unit = count *100;
    section1.style.clipPath = 'circle(' + unit + '%)';
});


