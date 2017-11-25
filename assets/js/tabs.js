var tabLink = document.getElementsByClassName("tf-tab-link");
var tabFlag = 0;

for (var i = 0; i < tabLink.length; i++) {
 tabLink[i].addEventListener('click', tfTabLink);
}

function tfTabLink() {

 var tabActive = document.getElementsByClassName("tab-active");

 tabActive[0].classList.remove("tf-gradient");
 document.getElementById(tabActive[0].getAttribute("data-tab")).classList.add("tf-tabs-c");
 tabActive[0].classList.remove("tab-active");

 this.classList.add("tab-active");
 this.classList.add("tf-gradient");
 document.getElementById(this.getAttribute('data-tab')).classList.remove("tf-tabs-c");

 colorMadness(this);

}
