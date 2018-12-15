function events_ready() {
	
	
	$('.top_img img').imagesLoaded(function(){
		autosize($('.top_img img'));
	})
	$('.fullscreen_pic img').imagesLoaded(function(){
		autosize($('.fullscreen_pic img'));
	});
	
	set_offset();

	
    
}


function events_load () {
	
	
set_offset()	

	
	
	
}

function set_offset() {
	
	autosize($('.top_img img'));	
	autosize($('.fullscreen_pic img'));
	


}


function events_scroll (){

}


