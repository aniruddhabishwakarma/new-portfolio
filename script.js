const openButton1 = document.getElementById("open-button1");
const openButton2 = document.getElementById("open-button2");
const openButton3 = document.getElementById("open-button3");
const openRegister= document.getElementById("signup")

const closeButton1 = document.getElementById("close-button1");
const closeButton2 = document.getElementById("close-button2");
const closeButton3 = document.getElementById("close-button3");
const closeButton4 = document.getElementById("close-button4");


const votingPanel= document.getElementById("voting");
const musicPanel= document.getElementById("music");
const cvPanel=document.getElementById("cv");
const registerPanel = document.getElementById("register")

const uname=document.getElementById("username");
const password = document.getElementById("password");
const submit=document.getElementById("submit");
console.log(submit);
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

submit.disabled = true;
uname.addEventListener("change",enableSubmit);

function enableSubmit(){
    if(uname.value==null){
        submit.disabled=true;
    } else{
        submit.disabled=false;
    }       
}
// const sections = document.querySelectorAll("section[id]");
// console.log(sections);

// // Add an event listener listening for scroll
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
  
//   // Get current scroll position
//   let scrollY = window.pageYOffset;
  
//   // Now we loop through sections to get height, top and ID values for each
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute("id");
    
//     /*
//     - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//     - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//     */
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     )
//     {
//       document.querySelector(".nav-link a[href*=" + sectionId + "]").classList.add("active");
//     } 
//     else {
//       document.querySelector(".nav-link a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }

votingPanel.style.display="none";
musicPanel.style.display="none";
cvPanel.style.display="none";
registerPanel.style.display="none";

function visible(button){
    if(button== openButton1){
        votingPanel.style.display="block";
    }
    if(button==openButton2){
        musicPanel.style.display="block";
    }
    if(button==openButton3){
        cvPanel.style.display="block";
    }
    if(button==signup){
        registerPanel.style.display="block";
    }
}


function hide(button){
    if(button==closeButton1){
        closeButton1.parentElement.style.display="none";
    }
    if(button==closeButton2){
        closeButton2.parentElement.style.display="none";
    }
    if(button==closeButton3){
        closeButton3.parentElement.style.display="none";
    }
    if(button==closeButton4){
        closeButton4.parentElement.style.display="none";
    }

}
