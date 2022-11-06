
const modal= document.getElementById("modal");
const overlay= document.getElementById("#overlay");
const registerPanel = document.getElementById("register");
const approve = document.getElementById("approve1");

const delButton1 = document.getElementById("delete-button1");
const delButton2 = document.getElementById("delete-button2");
const delButton3 = document.getElementById("delete-button3");
const delButton4 = document.getElementById("delete-button4");
const delButton5 = document.getElementById("delete-button5");
const delButton6 = document.getElementById("delete-button6");
// console.log(delButton1.parentElement.parentElement)


function show(){
    modal.style.display="block";
   
}

function hide(){
    modal.style.display="none";
}

function notify(){
    alert("succesfully deleted");
    modal.style.display="none";
}
function showModal(){
    registerPanel.style.display="block";
}
function hideModal(){
    registerPanel.style.display="none";
}
function message(){
    alert("Edit Succesful");
    registerPanel.style.display="none"; 
}
function approved(){
    alert("succesfully approved");
    approve.parentElement.parentElement.parentElement.style.display="none";

    // approve.parentElement.innerText="User has been approved";
    
}
const sections = document.querySelectorAll("section[id]");
console.log(sections);

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    )
    {
      document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.add("active");
    } 
    else {
      document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}