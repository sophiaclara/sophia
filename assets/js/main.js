/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Get the modal
var modal = document.getElementById("myModal");
var aset = document.getElementById("aset_mng");
var legal = document.getElementById("legal");
var logistic = document.getElementById("logistic");
var wms = document.getElementById("wms");
var poring = document.getElementById("poring");
var monitoring = document.getElementById("monitoring");
var sampling = document.getElementById("sampling");
var exim = document.getElementById("exim");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn_aset = document.getElementById("btn-aset");
var btn_legal = document.getElementById("btn-legal");
var btn_logistic = document.getElementById("btn-logistic");
var btn_wms = document.getElementById("btn-wms");
var btn_poring = document.getElementById("btn-poring");
var btn_monitoring = document.getElementById("btn-monitoring");
var btn_sampling = document.getElementById("btn-sampling");
var btn_exim = document.getElementById("btn-exim");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0] ;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn_aset.onclick = function() {
  aset.style.display = "block";
}


btn_legal.onclick = function() {
  legal.style.display = "block";
}

btn_logistic.onclick = function() {
  logistic.style.display = "block";
}

btn_wms.onclick = function() {
  wms.style.display = "block";
}

btn_poring.onclick = function() {
  poring.style.display = "block";
}

btn_monitoring.onclick = function() {
  monitoring.style.display = "block";
}

btn_sampling.onclick = function() {
  sampling.style.display = "block";
}

btn_exim.onclick = function() {
  exim.style.display = "block";
}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == aset || event.target == legal || event.target == logistic || event.target == wms || event.target == poring || event.target == monitoring || event.target == sampling || event.target == exim) {
    modal.style.display = "none";
    aset.style.display = "none";
    legal.style.display = "none";
    logistic.style.display = "none";
    poring.style.display = "none";
    wms.style.display = "none";
    monitoring.style.display = "none";
    sampling.style.display = "none";
    exim.style.display = "none";
  }
}