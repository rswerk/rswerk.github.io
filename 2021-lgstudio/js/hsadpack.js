// ----- HSAD SCRIPTS ----- //

// FORM SUBMISSION XXXX



/*!
 * BOOTSTRAP MEGAMENU
 * add url
 *
 */
$(document).ready(function() {
    $(".bootmega").on("click", function(e) {
        e.stopPropagation();
    });
	
	//add active state to bootfour anchors	
    $( '#bootfour .navbar-nav a' ).on( 'click', function () {
        $( '#bootfour .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });
});


//SLICK SLIDERS
$(function(){
  $(".slick-hero").slick({
    speed: 1000,
    dots: false,
	autoplay: true,
	infinite: true,
	accessibility: true,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next slide"></button>'
  });
});

$(function(){
  $(".slick-reviews").slick({
    speed: 1000,
    dots: true,
	autoplay: true,
	accessibility: true,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next slide"></button>'
  });
});

$(function(){
  $(".slick-other").slick({
    speed: 1000,
    dots: true,
	autoplay: true,
	accessibility: true,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next slide"></button>'
  });
});

$(function(){
  $(".slick-prod1").slick({
    speed: 1000,
    dots: false,
	autoplay: true,
	infinite: true,
	accessibility: true,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next slide"></button>'
  });
});

$(function(){
  $(".slick-prod2").slick({
    speed: 1000,
    dots: false,
	autoplay: true,
	infinite: true,
	accessibility: true,
    prevArrow: '<button class="slide-arrow prev-arrow" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slide-arrow next-arrow" aria-label="Next slide"></button>'
  });
});



$(function(){
  $('.slick-responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
});

		


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

	



//SUBMENU - CHANGE TITLE WHEN SELECTED
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul#menu > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            //obj.placeholder.text('CTA: ' + obj.val);
            obj.placeholder.text('' + obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
}

$(function() {
    var dd = new DropDown( $('#submenu-title-change') );
    $(document).click(function() {
        // all dropdowns
        $('.submenu-mobile').removeClass('active');
    });
});


			
// BOOTSTRAP TABS
  jQuery(document).ready(function ($) {
      //var hash = window.location.hash; //get hash url
      $('.nav-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })  

      $('a.nav-link').on('click', function (e) {
          var href = $(this).attr('href');
           //window.location.hash = this.hash; //get hash url
          $('html, body').animate({
              //scrollTop: $(href).offset().top
                scrollTop: $(href).offset().top - 200 // adds XXX px
          }, 'slow');
          e.preventDefault();
      });

   
	 $(function() {
     // Javascript to enable link to tab
     var hash = document.location.hash;
     if (hash) {
       //console.log(hash);
       $('.nav-tabs a[href=\\'+hash+']').tab('show');
     }

     // Change hash for page-reload
     $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
      window.location.hash = e.target.hash;
      });
      });
  });






