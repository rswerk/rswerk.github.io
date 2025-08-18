$('.heroslider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 8000, //slide duration
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      }
    }
  ]
});




$('.toutslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      }
    }
  ]
});



//play video inline
document.addEventListener("DOMContentLoaded", function(event) {

  // Get all videos
  var videos = document.getElementsByClassName("video__play-button");
  var video_fullscreen = document.getElementsByClassName("video__fullscreen-button");

  // Loop through all videos
  for (var i = 0; i < videos.length; i++) {
    // On click play button
    videos[i].onclick = function() {

      // Find video element
      video = this.nextElementSibling;
      video_wrapper = this.parentElement;
      console.log(video_wrapper);
      console.log(video);

      // Play video
      if (video.paused == true) {
        // Play the video
        video.play();
        video.setAttribute('data-state','play');
        video.setAttribute('data-state-reload','false');
        video_wrapper.setAttribute('data-state','play');

        // Update the button text to 'Pause'
        // this.innerHTML = "Pause";
        this.setAttribute('data-button-state','play');
        this.setAttribute('data-button-state-reload','false');
      } else {
        // Pause the video
        video.pause();
        video.setAttribute('data-state','pause');
        video_wrapper.setAttribute('data-state','pause');

        // Update the button text to 'Play'
        // this.innerHTML = "Play";
        this.setAttribute('data-button-state','pause');
      }

      // When video is ended
      video.onended = (event) => {
        // Pause the video
        video.setAttribute('data-state','pause');
        video.setAttribute('data-state-reload','true');

        // Update the button text to 'Play'
        this.setAttribute('data-button-state','pause');
        this.setAttribute('data-button-state-reload','true');
      };

    }

  }


  // Loop through all videos
  for (var i = 0; i < video_fullscreen.length; i++) {
    // On click play button
    video_fullscreen[i].onclick = function() {

      // Find video element
      video = this.nextElementSibling.nextElementSibling;

      if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      }

    }

  }

});









//play video when visible to the DOM
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('.playvisible');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
          }
      });
  });
  videos.forEach(video => {
      observer.observe(video);
  });
});






 

// Bootstrap open tab from url hash
// $(function(){
//   var hash = window.location.hash;
//   hash && $('ul.nav a[href="' + hash + '"]').tab('show');

//   $('.nav-tabs a').click(function (e) {
//     $(this).tab('show');
//     var scrollmem = $('body').scrollTop();
//     window.location.hash = this.hash;
//     $('html,body').scrollTop(scrollmem);
//   });
// });









//ANCHOR WITH SMOOTH SCROLL + OFFSET - GENERAL USE
$(".anchors a[href^='#']").on('click', function(e) {
  // prevent default anchor click behavior
  e.preventDefault();

  // animate
  $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 60
    }, 300, function(){
    });
});


// Stabalize slick slider inside bootstrap tabs
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.slick-carousel-products').slick('setPosition');
});








// BOOTSTRAP MEGAMENU
$(document).ready(function() {
  $(".bootmega").on("click", function(e) {
      e.stopPropagation();
  });


  $( '.navbar-nav a' ).on( 'click', function () {
      $( '.navbar-nav' ).find( 'a.active' ).removeClass( 'active' );
      $( this ).parent( '.dropdown-menu' ).addClass( 'active' );
  });
});


// BOOTSTRAP TABS
jQuery(document).ready(function($) {
  //var hash = window.location.hash; //get hash url
  $('.nav-tabs a').click(function(e) {
      e.preventDefault()
      $(this).tab('show')
  })

  $('a.nav-link').on('click', function(e) {
      var href = $(this).attr('href');
      //window.location.hash = this.hash; //get hash url
      $('html, body').animate({
          //scrollTop: $(href).offset().top
          scrollTop: $("#sticky").offset().top
          //scrollTop: $(href).offset().top - 200 // adds XXX px
      }, 'slow');
      e.preventDefault();
  });


  $(function() {
      // Javascript to enable link to tab
      var hash = document.location.hash;
      if (hash) {
          //console.log(hash);
          $('.nav-tabs a[href=\\' + hash + ']').tab('show');
      }

      // Change hash for page-reload
      $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
          window.location.hash = e.target.hash;
      });
  });
});


// BOOTSTRAP 4 CLOSE MOBILE MENU AFTER CLICK
$('a.nav-link').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});