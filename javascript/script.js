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
})()

$(document).ready(function(){
  var home = $(".home")
  var journal = $(".journal")
  var resources = $(".resources")

  if (window.location.pathname === "/journal/") {
    home.removeClass("active")
    resources.removeClass("active")
    journal.addClass("active")
  } else if (window.location.pathname === "/resources/") {
    home.removeClass("active")
    resources.addClass("active")
  } else {
    home.addClass("active")
  }
})
