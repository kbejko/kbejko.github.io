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
