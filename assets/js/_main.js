// @prepros-prepend velocity.js
// @prepros-prepend velocity.ui.js
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
 updates : "linear-gradient(90deg, #1488CC 0%, #2B32B2 100%)",
 showcase : "linear-gradient(90deg, #F2994A 0%, #F2C94C 100%)",
 competition : "linear-gradient(90deg, #9C27B0 0%, #E91E63 100%)",
 teams : "linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)",
 techveda : "linear-gradient(90deg, #607D8B 0%, #9E9E9E 100%)"
};

var tfColors = {
 updates : "#2B32B2",
 showcase : "#F2994A",
 competition : "#9C27B0",
 teams : "#8BC34A",
 techveda : "#607D8B"
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
