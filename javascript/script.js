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
  var resources = $(".other")

  if (window.location.pathname.indexOf("/journal/") === 0) {
    home.removeClass("active")
    resources.removeClass("active")
    journal.addClass("active")
  } else if (window.location.pathname.indexOf("/other/") === 0) {
    home.removeClass("active")
    resources.addClass("active")
  } else {
    home.addClass("active")
  }
})
