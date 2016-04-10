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
  console.log(navLinks)
  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].pathname) {
      navLinks[i].classList.add('active')
    }
  }
})();

(function pageTransition(){
  var navLinks = document.querySelectorAll('.site__nav--links li a')
  var nav = document.querySelector('.site__nav')
  var img = document.querySelector('.page__content')

  // setTimeout(function(){
  //   navLinks[1].addEventListener('click', function(){
  //     nav.removeClass('active')
  //     console.log('blah')
  //   }, 3000)
  // })
  navLinks[0].addEventListener('click', function(evt){

    evt.preventDefault()
    nav.classList.remove('visible')
    setTimeout(function(){
      img.classList.add('show')
    }, 1500)
  })

})();

console.log('Hire me :)')
