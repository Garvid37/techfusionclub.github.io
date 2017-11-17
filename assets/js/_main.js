//@prepros-prepend velocity.js

var tfNav = document.getElementById("tf-nav");
var tfMobNav = document.getElementById("tf-mob-nav");
var tfNavLinks = document.getElementsByClassName("tf-nav-link");
var flag = false;

tfMobNav.addEventListener('click', function() {
 if(flag){
  tfMobNav.classList.remove("active");
  Velocity(tfNav, { opacity: 0 }, { display: "none" });
  Velocity(tfNavLinks, "slideUp", { delay: 50, duration: 400 });
  flag = false;
 } else{
  tfMobNav.classList.add("active");
  Velocity(tfNav, { opacity: 1 }, { display: "flex" });
  Velocity(tfNavLinks, "slideDown", { delay: 50, duration: 400 });
  flag = true;
 }
});
