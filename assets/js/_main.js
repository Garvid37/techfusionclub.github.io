// @prepros-prepend velocity.js
// @prepros-prepend velocity.ui.js

var tfNav = document.getElementById("tf-nav");
var tfMobNav = document.getElementById("tf-mob-nav");
var tfNavLinks = document.getElementsByClassName("tf-nav-link");
 var mobNavFlag = false;

tfMobNav.addEventListener('click', mobNav);

function mobNav() {

 if(mobNavFlag){
  tfMobNav.classList.remove("active");
  Velocity(tfNavLinks, 'transition.slideDownOut', {stagger : 150});
  Velocity(tfNav, { opacity: 0 }, { display: "none" });
  mobNavFlag = false;
 } else{
  tfMobNav.classList.add("active");
  Velocity(tfNav, { opacity: 1 }, { display: "flex" });
  Velocity(tfNavLinks, 'transition.slideUpIn', {stagger : 150});
  mobNavFlag = true;
 }

}
