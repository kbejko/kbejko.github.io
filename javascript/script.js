(function rotateHamburger(){
   var burger = document.querySelector("#burger")
   var first = document.querySelector(".line-top")
   var second = document.querySelector(".line-bottom")
   var nav = document.querySelector(".site__nav")
   burger.onclick = function(){
     first.classList.toggle("rotate-down")
     second.classList.toggle("rotate-up")
     nav.classList.toggle("visible")
   }
})();

// Checks current path name(url) and matches it current a's href
(function underlineCurrentTab(){
  var navLinks = document.querySelectorAll('.site__nav--links li a')
  var pathName = location.pathname

  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].pathname) {
      navLinks[i].classList.add('active')
    }
  }
})();

console.log('Hire me :)')
