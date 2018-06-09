/*TILES*/
tiles = function(){ /*Insert your own tiles here*/

	/* READ THE TUTORIAL AT METRO-WEBDESIGN.INFO */
	tileTitleText(0,0,0,2,1,'#789600','','Welcome','This is the Ngaka Kelechi\'s personal website. It\'s about a freelance coder (Non-Geek), who enjoys Sci-Fi and practices Binary Magic. This site is his medium to express opinions or creative endeavors',['','',''],'');
	tileLive(0,2,0,1,1,"#C33","","One","","","","",3000,["#musicFreak",
														   "#coder",
														   "#proudBoy",
														   "#designer",
														   "#gameWhiz",
														   "#blogger",
														   ],['','',''],"noClick");

	tileTitleText(0,0,1,1,1,"#F90","About","<h3 class='white' style='font-weight:lighter'>About Me</h3>","",['','',''],'');
	
	
	tileImageSlider(0,0,2,2,1,'#854C8F','2013 Goals','img/bg/img_300x145_a.jpg',1,"<h4 class='white'>2013 Goals! Must read!</h4>",0.4,'');
	
	tileCustom(0,2,2,1,1,"#BBB","#&Links","<img src='img/arrows/arrowRight.png' style='margin-top:42px;margin-left:52px;padding-bottom:15px;' height='41'><h4 class='align-center'>Links</h4>",['','',''],'');
	
	
	tileLive(0,1,1,2,1,"#3B659C","","If not Coding","img/icons/box_hint.png",50,2,5,6000,['Juggling Objects - Throwing and catching breakable, sharp and expensive objects',
																									'Mad Ass Comic Strip Artist - Drawing Caricatures',																		'E Learning - Reading and playing around online',																		'Sudoku - Beating the highscore on my mobile Sudoku',																		'LMAO - Seriously, LMAO',
'Kels Angel - Perfecting new magic tricks i learnt',																									'Sit-alone Cinema - Watching HD Movies',																							
																									'Gaming - FIFA or PES',
																									
'Private Practise - Increasing the amount of zeros in the bank',

'Trying random things - More like doing some funny, out-of-this-world kind of things',

],['Like A Boss','#789600','bottom'],'');
	
	/*GROUP 2 */
	
	tileTitleText(3,0,0,2,1,'#789600','','Social Me','Kelechizy is one person who shares random stuff whenever he\'s online. You can follow him on Social Networks like Facebook, Twitter and Google+',['','',''],'');
	
	tileImageSlider(3,2,0,3,2,'#3B5998','http://facebook.com/kelechizy','img/bg/face.png',1,"<h4 class='white'>Facebook</h4><h4 class='white'>facebook.com/kelechizy</h4>",0.4,'');
	tileImageSlider(3,5,0,2,2,'#4099FF','http://twitter.com/kcheezi','img/bg/twitter.jpg',1,"<h4 class='white'>Twitter</h4> <h4 class='white'>@kcheezi</h4>",0.4,'');
	tileImageSlider(3,0,1,2,2,'#000000','https://plus.google.com/105355714932519842411/','img/bg/google+.jpg',1,"<h4 class='white'>Google+</h4><h4 class='white'>Ngaka Kelechi</h4>",0.4,'');
	tileCustom(3,2,2,1,1,"#BBB","#&home","<img src='img/arrows/arrowLeft.png' style='margin-top:42px;margin-left:52px;padding-bottom:15px;' height='41'><h4 class='align-center'>Go home</h4>",['','',''],'');
	
	
	/*GROUP 3 */
	/*Fadeslide and fliphorizontal are effects, other options are 'fade','flipvertical'*/
	
	
	tileImg(2,0,0,1,1,"#F60","","img/bg/internet.jpg",1,1,['Internet','#789600','bottom','where i learn and do stuff',true],'');
	tileImg(2,1,0,1,1,"#F90","","img/bg/magic.jpg",1,1,['Magic','#F90','bottom','mindfreak & card tricks ',true],'');
	tileImg(2,2,0,1,1,"#C33","","img/bg/games.jpg",1,1,['Games','#C33','bottom','you know the drill. All work and no play ...',true],'');

	
	tileImg(2,0,1,1,1,"#F60","","img/bg/blogging.jpg",1,1,['Blogging','#C33','bottom','where i share to the world',true],'');	
	tileImg(2,1,1,1,1,"#F60","","img/bg/eating.jpg",1,1,['Eating','#789600','bottom','Great meal = Problem Solved',true],'');	
	tileImg(2,2,1,1,1,"#F60","","img/bg/coding.jpg",1,1,['Coding','#F90','bottom','We cannot runaway from it -> Its our Cross',true],'');
	
	tileImg(2,0,2,1,1,"#F60","","img/bg/music.jpg",1,1,['Music','#F90','bottom','No music = no life',true],'');	
	tileImg(2,1,2,1,1,"#F60","","img/bg/movies.jpg",1,1,['Movies','#C33','bottom','Start watching movies ... Don\'t ask why',true],'');	
	tileImg(2,2,2,1,1,"#F60","","img/bg/puzzles.jpg",1,1,['Puzzles','#789600','bottom','where i solve normal to N-P hard problems ',true],'');
	
	
	/*
	tileCustom(3,1,2,1,1,"#BBB","#&home","<h4 class='align-center'>kelstagram</h4>",['','',''],''); */
	
	
	/*GROUP 4 */
	/*Fadeslide and fliphorizontal are effects, other options are 'fade','flipvertical'*/
	tileSlideshow(1,0,0,2,2,"","",5000,true,"fade",["img/bg/0.jpg","img/bg/1.jpg","img/bg/2.jpg", "img/bg/3.jpg","img/bg/4.jpg"],['Me :)','#789600','top'],'noClick');
	tileSlideshow(1,0,2,1,1,"","",25000,false,"fliphorizontal",["img/bg/i1.jpg","img/bg/i2.jpg","img/bg/i3.jpg","img/bg/i4.jpg"],['','',''],'noClick');
	
	tileCustom(1,2,0,1,1,"#ff6","","<h4 class='align-center'> _</h4><h4 class='align-center'>More</h4><h4 class='align-center'>Like</h4><h4 class='align-center'>Kelstagram</h4>",['','',''],'');
	
}

/*Tile Templates */
tileTitleText = function(group,x,y,width,height,bg,linkPage,title,text,labelSettings,optClass){ /* Tile with only a title and description */	
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px; margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<div class='tileTitle'>"+title+"</div>\
	<div class='tileDesc'>"+text+"</div>\
	"+labelText+"\
	</a>");
}
tileImg = function(group,x,y,width,height,bg,linkPage,img,imgSizeWidth,imgSizeHeight,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var id= "tileimg_"+(group+''+x+''+y).replace(/\./g,'_')
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		var desc=labelSettings[3];
		var showDescOnHover=labelSettings[4];		
		var displayLabel = (showDescOnHover) ? " showOnHover": ""; 
		var labelDescText = (desc!='') ? "<div class='tileLabelDesc "+displayLabel+"'>"+desc+"</div>" : '';	
		if(labelposition=='top'){
			var totalLabel ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div>"+labelDescText+"</div>";
		}else{
			
			var totalLabel ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div>"+labelDescText+"</div>";
		}		
		$(function(){
			$.plugin($afterTilesAppend,{
				tileImg:function(){
					var id2 = id;
					if(labelposition=='top'){
						$("."+id2).bind("mouseenter",function(){$(this).find("div.showOnHover").show(200);});
						$("."+id2).bind("mouseleave",function(){$(this).find("div.showOnHover").stop().hide(200);});
					}else{
						$("."+id2).bind("mouseenter",function(){$(this).find("div.showOnHover").css("bottom",0).slideDown(200);});
						$("."+id2).bind("mouseleave",function(){$(this).find("div.showOnHover").css("top",0).stop().slideUp(200);});	
					}
				}
			});
		});
	}else{
		var id="";
		var totalLabel = "";
	}
	var drawHeight = (imgSizeWidth*$tile.scalespacing-$tile.spacing)
	var drawWidth = (imgSizeHeight*$tile.scalespacing-$tile.spacing)
	var tileHeight = (height*$tile.scalespacing-$tile.spacing)
	var tileWidth = (width*$tile.scalespacing-$tile.spacing)
	$page.content += ("<a "+makeLink(linkPage)+" class='tile tileImg group"+group+" "+id+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px ;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+tileWidth+"px; height:"+tileHeight+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' width="+drawWidth+" height="+drawHeight+" \
	style='margin-left: "+((tileWidth-drawWidth)*0.5)+"px; \
	margin-top: "+((tileHeight-drawHeight)*0.5)+"px'/>\
	"+totalLabel+"\
	</a>");
}

tileTitleTextImage = function(group,x,y,width,height,bg,linkPage,title,text,img,imgSize,imgToTop,imgToLeft,labelSettings,optClass){ // Tile with an image on the left side, a title, and a description, width is always 2
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/> \
	<div class='tileTitle' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='tileDesc' style='margin-left:"+(imgSize+6+imgToLeft)+"px;'>"+text+"</div>\
	"+labelText+"\
	</a>");
}
tileLive = function(group,x,y,width,height,bg,linkPage,title,img,imgSize,imgToTop,imgToLeft,speed,textArray,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	var id= "livetile_"+(group+''+x+''+y).replace(/\./g,'_')
	if(img!=''){
		imgInsert = "<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/>"
	}else{
		imgInsert = '';
		imgSize = 0;
		imgToLeft = 0;
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px; margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	"+imgInsert+"\
	<div class='tileTitle' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='livetile' style='margin-left:"+(imgSize+10+imgToLeft)+"px;' id='"+id+"' >"+textArray[0]+"</div>\
	"+labelText+"\
	</a>");
	setTimeout(function(){newLiveTile(id,group,textArray,speed,0)},speed); // init this tile
}
tileImageSlider = function(group,x,y,width,height,bg,linkPage,img,imgsize, text,slideDistance,labelSettings,optClass){
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	tileWidth = width*$tile.scalespacing-$tile.spacing
	tileHeight = height*$tile.scalespacing-$tile.spacing
	$page.content += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+" tileImageSlider' id='"+slideDistance+" ' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+tileWidth+"px; height:"+tileHeight+"px; \
	background:"+bg+"; text-align:center;'>\
	<div class='tileImageSliderWrapper' style='position:absolute;'>\
	<div style='width: "+tileWidth+"px; height:"+tileHeight+"px;'>\
	<img src='"+img+"' height="+tileHeight*imgsize+" style='margin-top: "+((tileHeight-tileHeight*imgsize)*0.5)+"px'/>\
	</div>\
	<div text='tileImageSliderText'>"+text+"</div>\
	"+labelText+"\
	</div>\
	</a>");
	$(document).on("mouseover",'.tileImageSlider',function(){
		$(this).find(".tileImageSliderWrapper").stop(true,false).animate({"margin-top":-$(this).height()*$(this).attr("id")},250,"linear");
	}).on("mouseleave",'.tileImageSlider',function(){
		$(this).find(".tileImageSliderWrapper").stop(true,false).animate({'margin-top':0},300,"linear");
	});
}
tileCustom = function(group,x,y,width,height,bg,linkPage,content,labelSettings,optClass){ // make your own tiles
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	"+content+"\
	"+labelText+"\
	</a>");
}