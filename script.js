
var acc = document.getElementsByClassName("accordion");
let btnLogin=document.getElementById("myBtn")
let inputLoginemail=document.getElementsByClassName("ea")
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }

// //-------------------------
// let subscriber1={
//     email:"zoyas3423gmail.com",
//     password:"zoya",
// };
// let subscriber2={
//     email:"saniya3423gmail.com",
//     password:"zoya",
// };
// let subscriber3={
//     email:"soni3423gmail.com",
//     password:"zoya",
// };
// let subscriber4={
//     email:"noori3423gmail.com",
//     password:"zoya",
// };
// let subscribers=[subscriber1,subscriber2,subscriber3,subscriber4]

// let currentuser;
// btnLogin.addEventListener("click", function (e) {
//     // Prevent form from submitting
//     e.preventDefault();
  
//     currentuser = subscribers.find(function (acc) {
//       return acc.email === inputLoginemail.value;
//     });
  
//     console.log(currentuser);

// })
// btnLogin.addEventListener("click", myfunction ) ;
// function myfunction(){

//       window.open("C:/html/html/javascript_hrishabh sir_ batch/netflix/index2.html")
 
// }

//search
const search=document.querySelector(".search input");
const images=document.querySelectorAll(".movi");

search.addEventListener("keyup" ,e =>{
  if(e.key=="Enter"){
    let searcValue=search.value,
    value=searcValue.toLowerCase();
    images.forEach(image=>{
      if(value===image.dataset.name){
        return image.style.display="block"
      }
      image.style.display="none"
    })
  }
})

search.addEventListener("keyup",()=>{
  if(search.value != "") return;
  images.forEach(image=>{
    image.style.display="block"
  })
})

// setTimeout(function (){alert("click on subscribe button to reach next page")},5000)
 

