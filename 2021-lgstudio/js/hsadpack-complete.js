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



//FLEXSLIDER
(function() {
		// store the slider in a local variable
        var $window = $(window),
            flexslider = {
                vars: {}
            };

        // tiny helper function to add breakpoints
        function getGridSize() {
            return (window.innerWidth < 600) ? 1 :
                (window.innerWidth < 900) ? 3 : 4;
        }

       
        $window.ready(function() {
                //heroslide
                $('#hero-slider').flexslider({
                animation: "slide",
                controlNav: true,
                animationLoop: true,
                slideshow: false,
                });

                //review-slider
                $('#review-slider').flexslider({
                animation: "slide",
                controlNav: true,
                animationLoop: true,
                slideshow: false,
                });
			
				//other-slider
                $('#other-slider').flexslider({
                animation: "slide",
                controlNav: true,
                animationLoop: true,
                slideshow: false,
                });

                //product-slider 
                $('#product-slider').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 210,
                itemMargin: 20,
                minItems: getGridSize(), // use function to pull in initial value
                maxItems: getGridSize(),
          		start: function(slider){
                //set slider instance to flexslider variable
            	flexslider = slider;
          	}
            });
        });

        // check grid size on resize event
        $window.resize(function() {
            var gridSize = getGridSize();
            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
        
    }());


		
//FLEXSLIDER HIDDEN TAB SUPPORT
$('a.nav-link').click(function(){
	$(this).tab('show');
    $('.flexslider').resize();
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







