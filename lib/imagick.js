/*
	Imagick JQuery Library to preview Client Side HTMl5 Images on FileInput 
	Requirements: JQuery 2.1+, HTML5 compatible Browser with enabled FileReader API 
	Version: 0.01
	Src: https://github.com/KnufflPuffl/Imagick
 	Author: Daniel Resch
	Contact: danielresch8@gmail.com
*/ 


// Adjust to YOUR needs 
var inputSelector = 'input[type="file"]'; // if you have multiple file input elements change accordingly 
var previewSelector = '#preview'; // container in which the preview Image Files will appear in

var autoload = true; // if you don't want auto init you can set this to false



var Imagick = 
{
 	
	init:function() 
	{
		console.log('initializing Imagick...'); 
		
		jQuery(inputSelector).off('change').change(function() 
		{
			console.log('on Change Handler Triggered'); 
			var content = ''; // our content string which will pre-add Thumbnail Class Images, which the src attribute will be put on after FileRead 


			// Iterate Through all Files and append a thumbnail img element to DOM, for each Image File
			for (var i = 0; i < jQuery(this).get(0).files.length; ++i) 
			{
				
				content += '<img class="thumbnail" id="thumbnail_'+jQuery(this).get(0).files[i].name.replace('.jpg','').replace('.png','').replace('.gif','')+'" src=""/>'; 	
					
			}
			
			jQuery(previewSelector).empty().html(content); 


			// Try to display thumbnails (experimental Feature, FF 3.6+, Opera10+, HTML5 Required) 
        	var files = !!this.files ? this.files : [];
        	if (!files.length || !window.FileReader) 
			{	
				console.log('FileReader API unsupported by Client, Imagick is therefore unable to initialize.'); 
				return; // no file selected, or no FileReader support
			}


       		for(var c=0; c<files.length; c++) 
       		{

				if (/^image/.test( files[c].type)) // only image file
				{ 
					var current_file = files[c]; // this is the current ImageFile
					var reader = new FileReader(); // instance of the FileReader
					reader.file = current_file; // store so we can read the File in onloadend callback
					reader.readAsDataURL(files[c]); // read the local file
	 
					reader.onloadend = function() // set image data as background of div
					{ 
						var selector = '#thumbnail_'+this.file.name.replace('.jpg','').replace('.png','').replace('.gif','');
						jQuery(selector).attr('src',this.result); 
					}
				}

			}

	});   
		
	},
	destroy:function() 
	{
		
		
	}

}



if(autoload) 
{
	// Auto Initializer if Jquery is loaded 
	jQuery(document).ready(function(e) 
	{
		// create Instance of Imagick and auto load it 		 
		Imagick.init();
	});

}


		
