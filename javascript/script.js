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

// Checks current path name and matches it to li class name to add class active
(function underlineCurrentTab(){
  var navLinks = document.querySelector('.nav-links').children
  var pathNameStrip = window.location.pathname.replace(/\//g, '')

  for (var i = 0; i < navLinks.length; i++) {
    if (pathNameStrip === navLinks[i].id) {
      navLinks[i].classList.add('active')
    }
    if (pathNameStrip === '' && navLinks[i].id === 'home') {
      navLinks[i].classList.add('active')
    }
  }
})();

console.log('Hire me :)')
