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

// Checks current path name and matches it to li class name to add class active
(function underlineCurrentTab(){
  var navLinks = document.querySelector('.site__nav--links').children
  var pathName = location.pathname.split('/')[1]

  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].id) {
      navLinks[i].classList.add('active')
    }
    if (pathName === '' && navLinks[i].id === "home") {
      navLinks[i].classList.add('active')
    }
  }
})();

console.log('Hire me :)')
