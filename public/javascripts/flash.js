//flash message
function flash(msg, delay){
	$('.satus').hide().html(msg)
				.fadeIn(200).delay(delay)
				.fadeOut(300);
}

//custom written ajax function to animate progress bar
function ajax(config){
	this.method = config.method || 'GET';
	this.payload = config.payload || null;
	var xhr = new XMLHttpRequest();
	xhr.open(this.method, config.url, true);
	xhr.upload.addEventListner('progress',
		function(e){
			config.progress(e);
		});
	xhr.addEventListner('load', 
		function(){
			config.sucess(xhr);
		});
	xhr.addEventListner('error', config.error);
	xhr.send(this.payload);
}

/*form validator check the file extension
(currently looking for imf file)*/

$(function(){
	$(document).on('change','.uploadPic', 
		function(e){
			var ext = this.value.match
						(/\.([^\.]+)$/)[1]
						.toLowerCase();
			var permit = ['jpg','jpeg','png'];
			if(permit.indexOf(ext)>-1){
				flash('Ready to upload', 600);
			}
			else{
				flash('error unable to upload', 1000);
				$(this).val('');
			}
					});
})

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
