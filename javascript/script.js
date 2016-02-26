(function rotateHamburger(){
   var burger = document.querySelector(".burger")
   var first = document.querySelector(".first")
   var second = document.querySelector(".second")
   var contact = document.querySelector(".contact")
   burger.onclick = function(){
     first.classList.toggle("rotate-down")
     second.classList.toggle("rotate-up")
     contact.classList.toggle("visible")
   }
})();

(function underlineTab(){
  var home = document.querySelector(".home")
  var journal = document.querySelector(".journal")
  var resources = document.querySelector(".other")

  if (window.location.pathname.indexOf("/journal/") === 0){
    home.classList.remove("active")
    resources.classList.remove("active")
    journal.classList.add("active")
  } else if (window.location.pathname.indexOf("/other/") === 0){
    home.classList.remove("active")
    resources.classList.add("active")
  } else {
    home.classList.add("active")
  }
})();
