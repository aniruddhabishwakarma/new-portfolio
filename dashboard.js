const users= [{
  id:1,
  name:'Aniruddha Bishwakarma',
  username:'aniruddha123',
  contact:'9864995686',
},{
  id:2,
  name:'Ramesh Dhami',
  username:'ramesh123',
  contact:'9864995686',
},{
  id:3,
  name:'Dinesh Paudel',
  username:'dinesh123',
  contact:'9847503434',
},{
  id:4,
  name:'Arun Sharma',
  username:'arun123',
  contact:'9840243987',
},{
  id:5,
  name:'Sushant Kc',
  username:'sushant123',
  contact:'9860213607',
},{
  id:6,
  name:'Vivek Karki',
  username:'vivek123',
  contact:'9860134237',
},{
  id:7,
  name:'Chiranjeet Mandal',
  username:'chiranjeet123',
  contact:'9828558126',
}];


const modal= document.getElementById("modal");
const overlay= document.getElementById("#overlay");
const registerPanel = document.getElementById("register");
const approve = document.getElementById("approve1");



const table=document.getElementById("table");


// console.log(delButton1.parentElement.parentElement)

window.addEventListener("DOMContentLoaded",function(){
  tableData(users);
});

function tableData(names){
  let newData= names.map(function(name){
    return ` <tbody>
    <tr>
        <th scope="row">${name.id}</th>
        <td>${name.name}</td>
        <td>${name.username}</td>
        <td>${name.contact}</td>
        <td><button type="button" class="btn btn-secondary delete-button" id="delete-button" onclick="show(this)">Delete</button></td>
        <td><button type="button" class="btn btn-secondary" onclick="showModal()">Edit</button></td>
    </tr>
    </tbody>`;
  })
  newData=newData.join("");
  table.innerHTML=newData;
}

const delButton = document.querySelectorAll(".delete-button");
console.log(delButton);
function show(){
    modal.style.display="block";
   
}

function hide(){
    modal.style.display="none";
}

function notify(){
 
    
    
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