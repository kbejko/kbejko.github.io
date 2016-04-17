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
  var pathName = location.pathname.split('/')[1]
  console.log(pathName)
  console.log(navLinks)

  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].pathname.split('/')[1]) {
      navLinks[i].classList.add('active')
    }
  }
})();

(function pageTransition(){
  var navLinks = document.querySelectorAll('.site__nav--links li a')
  var nav = document.querySelector('.site__nav')
  var pageContent = document.querySelector('.page__content')

  for (var i = 0; i < navLinks.length; i++) {
    (function(){
      var hrefRef = navLinks[i].href
      navLinks[i].addEventListener('click', function(evt){
        evt.preventDefault()
        nav.classList.remove('visible')
        pageContent.classList.remove('show')
        setTimeout(function() {
          location.href = hrefRef
        }, 1000)

      })

      window.onload = function() {
        pageContent.classList.add('show')
      }
    })();
  }

})();

(function postTransition(){
  var postLinks = document.querySelectorAll('.journal__post a')
  var page = document.querySelector('.page__content')
  var body = document.querySelector('body')

  for (var i = 0; i < postLinks.length; i++) {
    (function(){
      var hrefRef = postLinks[i].href
      postLinks[i].addEventListener('click', function(evt){
        evt.preventDefault()
        page.classList.remove('show')
        setTimeout(function() {
          location.href = hrefRef
        }, 1000)

      })

      window.onload = function() {
        page.classList.add('show')
      }
    })();
  }

})();


console.log('Hire me :)')
