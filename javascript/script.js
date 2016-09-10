(function openNav(){
   var burger = document.querySelector('#menu')
   var nav = document.querySelector('.site__nav')
   burger.onclick = function() {
     nav.classList.toggle('visible')
   }
})();

// Checks current path name(url) and matches it current a's href
(function underlineCurrentTab(){
  var navLinks = document.querySelectorAll('.site__nav--links li a')
  var pathName = location.pathname.split('/')[1]

  for (var i = 0; i < navLinks.length; i++) {
    if (pathName === navLinks[i].pathname.split('/')[1]) {
      navLinks[i].classList.add('active')
    }
  }
})();

// Add shadow to site header on scroll
// (function boxShadow(){
//   var header = document.querySelectorAll('.site__header')
//   window.onscroll = function(){
//     if (document.body.scrollTop > 16) {
//       header[0].style.boxShadow = '0 0 4px rgba(0, 0, 0, .28)'
//     } else {
//       header[0].style.boxShadow = 'none'
//     }
//   }
// })();



console.log(':)')
