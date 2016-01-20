(function rotateHamburger(){
   var burger = document.querySelector(".burger")
   var first = document.querySelector(".first")
   var second = document.querySelector(".second")
   var ul = document.querySelector(".nav-links")
   burger.onclick = function(){
     first.classList.toggle("rotate-down")
     second.classList.toggle("rotate-up")
     ul.classList.toggle("visible")
   }
})()
