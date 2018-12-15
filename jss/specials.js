$roomBlockVisible = [];
$roomBlockScroll = false;

function specials_ready() {
	$v_blocklist = false;
	
	if(action == "index"){ 
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
	
			},1500)
			setTimeout(function(){
				 $('.right_title_offset h2 ._4').removeClass('top_translated_less');
	
			},1000)
			setTimeout(function(){
				 $('.right_title_offset h2 ._5').removeClass('top_translated_less');
	
			},1300)
			
			setTimeout(function(){
				 $('.right_title_offset h2 ._6').removeClass('top_translated_less');
	
			},1600)
		 });
		
		$('.item_list .item').each(function(rb){
			$roomBlockVisible.push(false);
		})
	}
	
	if(action == "detail"){
		$('.top_img img').imagesLoaded(function(){
			setTimeout(function(){
				$('.title_macro').removeClass('hidden_from_left');
				$('.title_section').removeClass('hidden_from_right');
			},1800)
			});
	}
}


function specials_load () {
	
}

function set_offset() {
	
	$roomBlockOffset = [];
	
	if($('.item_list .item').length != 0){
		$roomBlockScroll = true;
		$roomBlockLength = $('.item_list .item').length;
		
		$('.item_list .item').each(function(rb){
			$roomBlockOffset.push($('.item_list .item:eq('+rb+')').position().top - scrollThreshold_1_3);
		})
		
	}

}


function specials_scroll (){
	
	if(action == "index"){
		if($roomBlockScroll) {
			for(rb=0;rb<$roomBlockLength;rb++){
				if(!$roomBlockVisible[rb] && pageY > $roomBlockOffset[rb]){
					$roomBlockVisible[rb] = true;
					showRoomBlock($('.item_list .item:eq('+rb+')'));
				}
			}
		}
	}
	
	if(action == "detail"){
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
}

function showRoomBlock(elem) {
	$('h2',elem).removeClass('top_hidden');
	showSingleLine($('.line_set.horizontal',elem));
	setTimeout(function(){
		$('.item_pic img',elem).removeClass('hidden_by_scaling_low');
		$('h3',elem).removeClass('top_double');

	},200);
	setTimeout(function(){
		$('.item_mirror',elem).removeClass('no_width');
	},500);
	setTimeout(function(){
		$('.item_mirror .cover,.item_mirror .content',elem).removeClass('hidden');
	},1000);

}

function set_offset_detail() {
	$o_blocklist = $('.block_container').position().top - scrollThreshold_1_3;
	
}

