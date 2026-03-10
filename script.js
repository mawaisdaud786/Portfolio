document.addEventListener("DOMContentLoaded", () => {
  const texts = ["Front-End ", "Web Designer & "];
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

const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const sendMessageButton = document.querySelector(".sendmessage");
// const whatsapplink = document.querySelector(".sendmessage");
sendMessageButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = username.value.trim();
  const emailAddress = email.value.trim();
  const userMessage = message.value.trim();
  if (name && emailAddress && userMessage) {
    const whatsappLink = `https://api.whatsapp.com/send?phone=923197612417&text=Hi%20Awais%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Here%20are%20the%20details:%0A${encodeURIComponent(userMessage)}%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(emailAddress)}`;
    window.open(whatsappLink);
  }});