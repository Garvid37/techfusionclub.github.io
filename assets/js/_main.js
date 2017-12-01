// @prepros-prepend velocity.js
// @prepros-prepend velocity.ui.js
// @prepros-prepend typed.js
//@prepros-append tabs.js

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

var getSiblings = function (elem) {
 var siblings = [];
 var sibling = elem.parentNode.firstChild;
 for (; sibling; sibling = sibling.nextSibling) {
  if (sibling.nodeType !== 1 || sibling === elem) continue;
  siblings.push(sibling);
 }
 return siblings;
};

var tfGradients = {
 updates : "linear-gradient(to right, #0575e6, #021b79)",
 showcase : "linear-gradient(to right, #ffb347, #ffcc33)",
 competition : "linear-gradient(to right, #fc466b, #3f5efb)",
 teams : "linear-gradient(to right, #00b09b, #96c93d)",
 techveda : "linear-gradient(to right, #f85032, #e73827)"
};

var tfColors = {
 updates : "#021b79",
 showcase : "#ffcc33",
 competition : "#fc466b",
 teams : "#96c93d",
 techveda : "#e73827"
};

var metaThemeColor = document.querySelector("meta[name=theme-color]");

function colorMadness(tfShit) {
 var target = document.querySelectorAll(".tf-gradient");
 var tfChange = tfShit.getAttribute("data-tab");
 var tfShitSiblings = getSiblings(tfShit);

 metaThemeColor.setAttribute("content", tfColors[tfChange]);

 for (var i = 0; i < tfShitSiblings.length; i++) {
  tfShitSiblings[i].style.background = "";
 }
 for (var i = 0; i < target.length; i++) {
  target[i].style.background = " " + tfGradients[tfChange];
 }
}

var typed = new Typed(".tf-hero-text-alter", {
  strings : ["We are <b>geeks</b>.", "We are <b>nerds</b>.", "We are tech <b>enthusiasts</b>.", "We are solution to many problems.", "We are <b>TechFusion</b>."],
  typeSpeed: 50,
	contentType: 'html',
	loop: true,
  fadeOut: true,
	backDelay: 2000,
  startDelay: 2000,
});
