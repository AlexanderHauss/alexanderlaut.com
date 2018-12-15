function __pageX(e) {
    if (Modernizr.touchevents) {
        return e.originalEvent.touches[0].pageX
    } else {
        return e.pageX
    }
}

function __pageY(e) {
    if (Modernizr.touchevents) {
        return e.originalEvent.touches[0].pageY
    } else {
        return e.pageY
    }
}

var mouse_initialX;
var mouse_deltaX;
var directionX;
var sections_initial_position;
var page_bind = false;
var treshold_gallery = 100;
var $url;
var containerWidth;


function gallery_ready(){
	
	containerWidth = $("#gallery_container").width();
	
	img_loaded = 0;
	$('.arrow_container .arrow_right').bind('click',go_next);
	$('.arrow_container .arrow_left').bind('click',go_prev);
	//$('#gallery_sections .section:eq(0)').addClass('active');
	//$('#gallery_sections .section').bind('click',change_set);
	  $("#gallery_container .gallery_slider").bind(_mousedown, start_gallery_drag);
	  
	load_others();
	
	if(!isHandheld){
		
		$(window).bind('mousemove', move_arrow);
		
		$('#gallery_container .gallery_slider').dblclick(function(){
			if(!$fullscreen){
				launchIntoFullscreen(document.getElementById('gallery_container'));
				//$(window).trigger('resize');
			} else if($fullscreen){
				exitFullScreen();
				//$(window).trigger('resize');
			}
		})
		
		$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){
			if(document.webkitFullscreenElement || document.fullscreenElement || document.msFullscreenElement){
				$('#gallery_container .gallery_slider').addClass('no_transform');
				$('#main_scroller').addClass('no_transition');
				$('body').addClass('isFullscreen');
				$fullscreen = true;
				setTimeout(function(){
					$('.drag_icon_label').addClass('no_opacity');
				},5000)
			} else {
				$('#gallery_container .gallery_slider').removeClass('no_transform');
				$('#main_scroller').removeClass('no_transition');
				$('body').removeClass('isFullscreen');
				$('.drag_icon_label').removeClass('no_opacity');
				$fullscreen = false;



			}
		});
	} else {
		$('#gallery_container .gallery_slider').on('doubletap',function(event){
		if(!$fullscreen){
			launchIntoFullscreen(document.getElementById('gallery_container'));
		} else if($fullscreen){
			exitFullScreen();
		}
		
	});
		
		$(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){
			if(document.webkitFullscreenElement || document.fullscreenElement || document.msFullscreenElement){
				
				$('body').addClass('isFullscreen');
				$(window).trigger('resize');
				$fullscreen = true;
			
			} else {
				
				$('body').removeClass('isFullscreen');
				$(window).trigger('resize');

				$fullscreen = false;



			}
	});
}
}


function gallery_resize () {
	containerWidth = $("#gallery_container").width();
	
	  $("#gallery_container .pic_big:not(.active)").addClass('no_transition');
	  $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");
      $("#gallery_container .pic_big.active").nextAll().css("transform","translate3d("+containerWidth+"px, 0, 0)");
      $("#gallery_container .pic_big.active").prevAll().css("transform","translate3d("+(-containerWidth)+"px, 0, 0)");

}

function load_others(){
	
	img_loaded++;
	if( $('.gallery_slider .pic_big:eq('+img_loaded+') img').is("[data-src]")){
		$('.gallery_slider .pic_big:eq('+img_loaded+') img').attr('src',$('.gallery_slider .pic_big:eq('+img_loaded+') img').attr('data-src')).removeAttr('data-src');
		$('.gallery_slider .pic_big:eq('+img_loaded+') img').imagesLoaded(function() {
			autosize($('.gallery_slider .pic_big:eq('+img_loaded+') img'));
			load_others();
		});
		
	} else if($('.gallery_slider .pic_big:eq('+img_loaded+') img').is("[src]")){ 
		autosize($('.gallery_slider .pic_big:eq('+img_loaded+') img'));
		load_others();
	}
	
	
}


var galleryReady = true;

function start_gallery_drag(e) {
	if(!isHandheld){
		e.preventDefault();
	}
	if(galleryReady){
		galleryReady = false;
	    $('.pic_big').addClass('no_transition');

	    $('.pic_big.active').css('z-index',1).siblings().css('z-index',2);
	    $(".pic_big.active").nextAll().css("transform","translate3d("+containerWidth+"px, 0, 0)");
	    $(".pic_big.active").prevAll().css("transform","translate3d("+(-containerWidth)+"px, 0, 0)");
	
	    $(window).bind(_mouseup, stop_gallery_drag);
	    mouse_deltaX = 0;
	    mouse_deltaY = 0;
	    $("#gallery_container .gallery_slider").bind(_mousemove, move_gallery);
	    mouse_initialX = __pageX(e);
	    mouse_initialY = __pageY(e);
	    
	    initialPageY = pageY;
	   
	    sections_initial_position = 0;
	}
}

function stop_gallery_drag(e) {
    $(window).unbind(_mouseup);
    $('.pic_big').removeClass('no_transition');
    $("#gallery_container .gallery_slider").unbind(_mousemove);
    $("#gallery_container .gallery_slider").stop();
    if (mouse_deltaX > treshold_gallery && directionX == "left") {
        if ($("#gallery_container .pic_big.active").next().length != 0) {
            slide_next();
        } else {
            $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");

        }
    }
    if (mouse_deltaX > treshold_gallery && directionX == "right") {
        if ($("#gallery_container .pic_big.active").prev().length != 0) {
           slide_prev();
        } else {
            $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");

        }
    } else if (mouse_deltaX < treshold_gallery) {
        $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");
        $("#gallery_container .pic_big.active").next().css("transform","translate3d("+containerWidth+"px, 0, 0)");
        $("#gallery_container .pic_big.active").prev().css("transform","translate3d("+(-containerWidth)+"px, 0, 0)");
    }
    
    setTimeout(function(){
    	galleryReady = true;
    },500)

}

function move_gallery(e) {
    if (__pageX(e) > mouse_initialX) {
        mouse_deltaX = __pageX(e) - mouse_initialX;
        directionX = "right";
    } else if (__pageX(e) < mouse_initialX) {
        directionX = "left";
        mouse_deltaX = mouse_initialX - __pageX(e)
    }
    
    if (__pageY(e) > mouse_initialY) {
    	mouse_deltaY = __pageY(e) - mouse_initialY;
    	if(mouse_deltaY<50){
    		e.preventDefault();
	    	
    	}
    }
    
    if (__pageY(e) < mouse_initialY) {
    	mouse_deltaY = mouse_initialY - __pageY(e);
    	if(mouse_deltaY<50){
    		e.preventDefault();
	    	
    	}
    	
    	
    }
    
    
    if (directionX == "right") {
        sections_current_position = sections_initial_position + mouse_deltaX
        $("#gallery_container .pic_big.active").prev().css("transform","translate3d("+(-containerWidth+mouse_deltaX/1.5) + "px, 0, 0)");
        $("#gallery_container .pic_big.active").next().css("transform","translate3d("+(containerWidth+mouse_deltaX/1.5) + "px, 0, 0)");
     


    } else {
        sections_current_position = sections_initial_position - mouse_deltaX
        $("#gallery_container .pic_big.active").next().css("transform","translate3d("+(containerWidth-mouse_deltaX/1.5) + "px, 0, 0)");
        $("#gallery_container .pic_big.active").prev().css("transform","translate3d("+(-containerWidth-mouse_deltaX/1.5) + "px, 0, 0)");
      



    }
    $("#gallery_container .pic_big.active").css("transform","translate3d("+sections_current_position/3 + "px, 0, 0)");

}

function slide_next() {
    if ($(".gallery_slider .pic_big.active").next().length != 0) {
        $(".gallery_slider .pic_big.active").css("transform","translate3d("+(-containerWidth/3)+"px, 0, 0)").removeClass("active").next().addClass("active");
        $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");
    }
    
    
    $(".arrow_container .arrow_left").removeClass('no_opacity');
    if ($(".gallery_slider .pic_big.active").index() == $(".gallery_slider .pic_big").length - 1) {
    	 $(".arrow_container .arrow_right").addClass('no_opacity');
    }
    
    $('#gallery_container .counter').text($(".gallery_slider .pic_big.active").index()+1);
    
  
    
   
    
    
  
}

function slide_prev() {
    if ($(".gallery_slider .pic_big.active").prev().length != 0) {
    	 $(".gallery_slider .pic_big.active").css("transform","translate3d("+containerWidth/3+"px, 0, 0)").removeClass("active").prev().addClass("active");
         $("#gallery_container .pic_big.active").css("transform","translate3d(0, 0, 0)");
           
    }
    
	 $(".arrow_container .arrow_right").removeClass('no_opacity');

    
    if ($(".gallery_slider .pic_big.active").index() == 0) {
    	$(".arrow_container .arrow_left").addClass('no_opacity');

    }
    
    $('#gallery_container .counter').text($(".gallery_slider .pic_big.active").index()+1);

   
    
}

function go_next(){
	
	if(galleryReady){
		galleryReady = false;
	$('.pic_big').addClass('no_transition');
	    $('.pic_big.active').css('z-index',1).siblings().css('z-index',2);
	    $(".pic_big.active").nextAll().css("transform","translate3d("+containerWidth+"px, 0, 0)");
	    $(".pic_big.active").prevAll().css("transform","translate3d("+(-containerWidth)+"px, 0, 0)");
	    setTimeout(function(){
	    	$('.pic_big').removeClass('no_transition');
	    	  slide_next();
	    },20);
	    
	    setTimeout(function(){
	    	galleryReady = true;
	    },500)
	}
}

function go_prev() {
	if(galleryReady){
		galleryReady = false;
	$('.pic_big').addClass('no_transition');
    $('.pic_big.active').css('z-index',1).siblings().css('z-index',2);
    $(".pic_big.active").nextAll().css("transform","translate3d("+containerWidth+"px, 0, 0)");
    $(".pic_big.active").prevAll().css("transform","translate3d("+(-containerWidth)+"px, 0, 0)");
    setTimeout(function(){
	    $('.pic_big').removeClass('no_transition');
	    slide_prev();
    },20);
    
    setTimeout(function(){
    	galleryReady = true;
    },500)
	}
}

$galleryArrow = document.getElementById("gallery_arrow");

function move_arrow (e){
	$galleryArrow.style[$$transform] = 'translate3d('+(__pageX(e)-32-$('#gallery_container').offset().left)+'px,'+(__pageY(e)-10-$('#gallery_container').offset().top)+'px, 0)';
	
	
	
	

}

(function($){

	  $.event.special.doubletap = {
	    bindType: 'touchend',
	    delegateType: 'touchend',

	    handle: function(event) {
	      var handleObj   = event.handleObj,
	          targetData  = jQuery.data(event.target),
	          now         = new Date().getTime(),
	          delta       = targetData.lastTouch ? now - targetData.lastTouch : 0,
	          delay       = delay == null ? 300 : delay;

	      if (delta < delay && delta > 30) {
	        targetData.lastTouch = null;
	        event.type = handleObj.origType;
	        ['clientX', 'clientY', 'pageX', 'pageY'].forEach(function(property) {
	          event[property] = event.originalEvent.changedTouches[0][property];
	        })

	        // let jQuery handle the triggering of "doubletap" event handlers
	        handleObj.handler.apply(this, arguments);
	      } else {
	        targetData.lastTouch = now;
	      }
	    }
	  };

	})(jQuery);


var _mousemove;
var _click;
var _mouseenter;
var _mouseleve;
var _mousedown;
var _mouseup;

if (Modernizr.touchevents) {
	
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
    _mouseenter = "mouseenter";
    _mouseleave = "mouseleave"
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
    _mouseenter = "mouseenter";
    _mouseleave = "mouseleave"
}

var $fullscreen = false;

   function launchIntoFullscreen(element) {
   	  if(element.requestFullscreen) {
   	    element.requestFullscreen();
   	  } else if(element.mozRequestFullScreen) {
   	    element.mozRequestFullScreen();
   	  } else if(element.webkitRequestFullscreen) {
   	    element.webkitRequestFullscreen();
   	  } else if(element.msRequestFullscreen) {
   	    element.msRequestFullscreen();
   	  }
   	}


   function exitFullScreen()
   {
       if (document.exitFullscreen)
           document.exitFullscreen();
       else if (document.msExitFullscreen)
           document.msExitFullscreen();
       else if (document.mozCancelFullScreen)
           document.mozCancelFullScreen();
       else if (document.webkitExitFullscreen)
           document.webkitExitFullscreen();
   }