//  $(function() {
//     $('.scroll-down').click (function() {
//       $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
//       return false;
//     });
//   });



// // ------- back to top ------ //
// $(function(){

//   //Scroll event
//   $(window).scroll(function(){
//     var scrolled = $(window).scrollTop();
//     if (scrolled > 200) $('.go-top').fadeIn('slow');
//     if (scrolled < 200) $('.go-top').fadeOut('slow');
//   });
  
//   //Click event
//   $('.go-top').click(function () {
//     $("html, body").animate({ scrollTop: "0" },  500);
//   });

// });



// $(document).ready(function(){
//   // navbar-toggle //
//     // --------------------------------------------//
//     $(".navbar-toggle").click(function(){    
//       $(this).toggleClass("rotare");
//         $(".mobile-nav").toggleClass("open");
//         $("body").toggleClass("scroll-disabled");
//     });

//     // moreless-button
//     $(".moreless-button").click(function(){
//         $(".more-slide").slideToggle("slow");
//     });

//   });




// //----- animate scroll script -----//
// $(window).on("load scroll ready",function(){

//   var win_height = $(window).height();
//   var count_height = win_height/1.9;

//   if($('.waypoint').length) {
//     $('.waypoint').each(function (i) {
//       var $li = $(this);
//       var figure_top_block = $li.offset().top - count_height;
//       if ($(window).scrollTop() >= figure_top_block) {
//         $li.addClass('waypoint-reveal');
//       }
//     })
//   }
  
//   if($('.waypoint-step-up').length) {
//     $('.waypoint-step-up').each(function (i) {
//       var $li = $(this);
//       var figure_top_block = $li.offset().top - count_height;
//       if ($(window).scrollTop() >= figure_top_block) {
//         $li.addClass('stepup');
//       }
//     })
//   }
// });



// document.addEventListener("DOMContentLoaded", function () {
//   var navbar = document.querySelector('.navbar');
//   var masterheadSec = document.querySelector('.masterhead-sec');
//   var masterheadSecHeight = masterheadSec.offsetHeight;

//   window.addEventListener('scroll', function () {
//       if (window.scrollY >= masterheadSecHeight) {
//           navbar.classList.add('fixed');
//       } else {
//           navbar.classList.remove('fixed');
//       }
//   });
// });





// =================================================
// ---------------my code-----------
// ==================================================

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});



// ------- back to top ------ //
$(function(){

  var goTop = $('.go-top');

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });

  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});





$(document).ready(function(){
// navbar-toggle //
  // --------------------------------------------//
  $(".navbar-toggle").click(function(){    
    $(this).toggleClass("rotare");
      $(".mobile-nav").toggleClass("open");
      $("body").toggleClass("scroll-disabled");
  });

  // moreless-button
  $(".moreless-button").click(function(){
      $(".more-slide").slideToggle("slow");
  });

});




//----- animate scroll script -----//
$(window).on("load scroll ready",function(){

var win_height = $(window).height();
var count_height = win_height/1.9;

if($('.waypoint').length) {
  $('.waypoint').each(function (i) {
    var $li = $(this);
    var figure_top_block = $li.offset().top - count_height;
    if ($(window).scrollTop() >= figure_top_block) {
      $li.addClass('waypoint-reveal');
    }
  })
}

if($('.waypoint-step-up').length) {
  $('.waypoint-step-up').each(function (i) {
    var $li = $(this);
    var figure_top_block = $li.offset().top - count_height;
    if ($(window).scrollTop() >= figure_top_block) {
      $li.addClass('stepup');
    }
  })
}
});



document.addEventListener("DOMContentLoaded", function () {
var navbar = document.querySelector('.navbar');
var masterheadSec = document.querySelector('.masterhead-sec');
var masterheadSecHeight = masterheadSec.offsetHeight;

window.addEventListener('scroll', function () {
    if (window.scrollY >= masterheadSecHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
});

// ==== VALUES ========
$(document).ready(function() {
  $('.values__grid-item').hover(
    function() {
      // Наведение мыши
      $(this).addClass('highlight');
    },
    function() {
      // Уход мыши
      $(this).removeClass('highlight');
    }
  );
});






