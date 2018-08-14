// $(document).ready(function() {
//
//   $(".burger-nav").on("click", function() {
//     $(".navigation.menu").toggleClass("open");
//   })
//
// })

// $(document).ready(function(){
//   $('.icon').click(function(){
//     $('.icon').toggleClass('active');
//   })
// })

function menu() {
   var element = document.getElementById("icon");
   element.classList.toggle("icon-active");
}

function open_menu() {
   var element = document.getElementById("navigation-menu");
   element.classList.toggle("open");
}

function open_menu_sec() {
   var element = document.getElementById("sec-navigation-menu");
   element.classList.toggle("open");
}
