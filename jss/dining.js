function dining_ready() {
	
	set_offset();
	

	
	if(action == "index") {
		$ziquPicVisible = false;
		$cupsVisible = false;
		
		$(".glide").glide({
	        type: "carousel",
	        autoheight:false,
	        autoplay:false,
	        animationDuration:500,
	        animationTimingFunc:'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
	        
	        
	    })
	}

	
    
}


function dining_load () {
		
}

function set_offset() {
	
	if(action == "index") {
	$ziquPicOffset = $('.ziqu_pic').position().top - scrollThreshold_1_3;
	$cupsPicOffset =  $('.cups_section').position().top - scrollThreshold_1_3;
	
	}

}


function dining_scroll (){
	
	if(action == "index") {
	if(!$cupsVisible && pageY > $cupsPicOffset){
		$cupsVisible = true;
		$('.cups_section .left_col .content, .cups_section  .left_col .cover').removeClass('hidden');
		$('.cups_section .right_col .quote').removeClass('top_translated');
		setTimeout(function(){
			$('.cups_section .right_col .body_text').removeClass('top_translated');
		},200)
	}
	
	if(!$ziquPicVisible && pageY > $ziquPicOffset){
		$ziquPicVisible = true;
		$('.ziqu_pic .content, .ziqu_pic .cover').removeClass('hidden');
		
	}
	}
	
	
}


