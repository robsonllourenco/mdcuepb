
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


const countdown = () => {

  const finalDate = new Date("Oct 25, 2022 00:00:00").getTime()
  const nowDate = new Date().getTime()

  const diference = finalDate - nowDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diference / days);
  let timeHours = Math.floor((diference % days) / hours);
  let timeMinutes = Math.floor((diference % hours) / minutes);
  let timeSeconds = Math.floor((diference % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;


  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
}

setInterval(countdown, 1000)


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        

        const icon = faq.querySelector('faq-icon i');
        if(icon.className === 'uil uil-plus') 
        {
            icon.className = 'uil uil-minus';
        }
        else 
        {
            icon.className = 'uil uil-plus';
        }
    })
})


const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener('click', () => {
menu.style.display = "flex";
menu.style.position = "fixed";
menu.style.top = "100";
menu.style.left = "0";
menu.style.width = "100%";
menu.style.height = "100%";
menu.style.overflow = "auto";
closeBtn.style.display = "inline-block";
menuBtn.style.display = "none";
document.body.style.overflow = "hidden";
})

const closeNav = () => {
menu.style.display = "none";
closeBtn.style.display = "none";
menuBtn.style.display = "inline-block";
document.body.style.overflow = "auto";
}

closeBtn.addEventListener('click', closeNav);





