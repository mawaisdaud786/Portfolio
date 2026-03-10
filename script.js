document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Front-End ", "Back-End "];
  const typingElement = document.querySelector(".highlight");
  const typingSpeed = 100;
  const erasingSpeed= 50;
  const delayBetween= 1000;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect(){
    const currentText = texts [textIndex];
    if(!isDeleting){
        typingElement.textContent = currentText.substring(0, charIndex +1);
        charIndex++;
        if(charIndex === currentText.length){
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
            return;
        }
    }else{
        typingElement.textContent = currentText.substring(0, charIndex -1);
        charIndex--;
        if(charIndex === 0){
            isDeleting = false;
            textIndex = (textIndex +1) % texts.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
  }
  typeEffect();



   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  AOS.init();

});
