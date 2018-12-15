function facilities_ready() {
	
	
	
		$v_blocklist = false;
		
		$('.top_img img').imagesLoaded(function(){
			$('.top_img .cover, .top_img .content').removeClass('hidden');
	
			setTimeout(function(){
			 $('.top_bars .left').removeClass('no_width');
			},150)		
			setTimeout(function(){
				 $('.right_title_offset').removeClass('hidden');
	
			},800)
			
			setTimeout(function(){
				 $('.right_title_offset h2 ._1').removeClass('top_translated_less');
	
			},900)
			setTimeout(function(){
				 $('.right_title_offset h2 ._2').removeClass('top_translated_less');
	
			},1200)
			setTimeout(function(){
				 $('.right_title_offset h2 ._3').removeClass('top_translated_less');
	
			},1000)
			setTimeout(function(){
				 $('.right_title_offset h2 ._4').removeClass('top_translated_less');
	
			},1300)
		 });
		
	
	
	
	if(action == "detail"){
		$('.top_img img').imagesLoaded(function(){
		setTimeout(function(){
			$('.title_macro').removeClass('hidden_from_left');
			$('.title_section').removeClass('hidden_from_right');
		},1800)
		});
	}
}


function facilities_load () {
	
}

function set_offset() {
	
	$o_blocklist = $('.block_container').position().top - scrollThreshold_1_3;

}


function facilities_scroll (){
	

		if(!$v_blocklist && pageY > $o_blocklist){
			$v_blocklist = true;
			$('.block').each(function(b){
				setTimeout(function(){
					$('.block:eq('+b+') .block_pic .cover').removeClass('hidden');
				},100*b)
				
				setTimeout(function(){
					$('.block:eq('+b+') .block_copy').removeClass('hidden_by_scaling_low');
				},600+(100*b))
				
				setTimeout(function(){
					$('.block:eq('+b+') .block_copy .block_text').removeClass('top_double');
				},800+(100*b))
			})
		}
	
	
}



function set_offset_detail() {
	$o_blocklist = $('.block_container').position().top - scrollThreshold_1_3;

}

