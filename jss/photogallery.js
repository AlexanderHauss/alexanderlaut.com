$itemListVisible = [];
$itemListScroll = false;

function photogallery_ready() {
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
	
			},1000)
			setTimeout(function(){
				 $('.right_title_offset h2 ._4').removeClass('top_translated_less');
	
			},1300)
		 });
		
		$('.item_list .item').each(function(rb){
			$itemListVisible.push(false);
		})
	}
	
	if(action == "detail"){
		$('.pic_big:eq(0) img').imagesLoaded(function(){
			$('#top .cover, #top .content').removeClass('hidden');
			
			setTimeout(function(){
				$('#photogallery_controller').removeClass('top_translated')
			},1000)
		});
	}
	
}


function photogallery_load () {
	
}

function set_offset() {
	
	$itemListOffset = [];
	
	if($('.item_list .item').length != 0){
		$itemListScroll = true;
		$itemListLength = $('.item_list .item').length;
		
		$('.item_list .item').each(function(rb){
			$itemListOffset.push($('.item_list .item:eq('+rb+')').position().top - scrollThreshold_1_3);
		})
		
	}

}


function photogallery_scroll (){
	
	if(action == "index"){
		if($itemListScroll) {
			for(rb=0;rb<$itemListLength;rb++){
				if(!$itemListVisible[rb] && pageY > $itemListOffset[rb]){
					$itemListVisible[rb] = true;
					showItemList($('.item_list .item:eq('+rb+')'));
				}
			}
		}
	}
	
	
}

function showItemList(elem) {
	$('h2',elem).removeClass('top_hidden');
	showSingleLine($('.line_set.horizontal',elem));
	setTimeout(function(){
		$('.item_pic img',elem).removeClass('hidden_by_scaling_low');
	},200);
	setTimeout(function(){
		$('.item_mirror',elem).removeClass('no_width');
	},500);
	setTimeout(function(){
		$('.item_mirror .cover,.item_mirror .content',elem).removeClass('hidden');
	},1000);

}

function set_offset_detail() {

}
