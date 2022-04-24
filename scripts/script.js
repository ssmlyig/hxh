let switchMode = document.getElementById("switchMode");
switchMode.onclick = function(){
	let theme = document.getElementById("theme");
	if(theme.getAttribute('href') == "css/light-mode.css"){
		theme.href = "css/dark-mode.css";
	}else{
		theme.href = "css/light-mode.css";
	}
}
function panelCl(){
	let el = document.getElementById("panel");
	let elcontent = document.getElementById("content");
		if ( el.getAttribute("class") == 'close' )
		{
			elcontent.style = 'display:block;';
			el.setAttribute("class", 'open');
		}
		else
		{
			elcontent.style = 'display:none;';
			el.setAttribute("class", 'close');
		}
}
let imageArray =
[
"images/1-slider.png",
"images/2-slider.png",
"images/3-slider.png",
"images/4-slider.png",
"images/5-slider.png",
"images/6-slider.png",
"images/7-slider.png",
"images/8-slider.png",
"images/9-slider.png",
"images/10-slider.png"
];

let number = 0;

let imageCount = imageArray.length;

function image(num){

	if (num == 1){
		if (number < imageCount - 1){
			number++;
			document.querySelector('#images').src = imageArray[number];
			document.querySelector('#num_img').innerHTML= number + 1 + '/' + imageCount;

		}
	}
	else{
		if(number > 0){
			number--;
			document.getElementById('images').src = imageArray[number];
			document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
		}
	}
}
function btn_show(){
	if(number != 0)
	{
		document.querySelector('#left').style.display='block'
	}
	if(number != imageCount - 1)
		document.querySelector('#right').style.display='block'
}
function btn_noshow(){
	document.querySelector('#left').style.display='none';
	document.querySelector('#right').style.display='none';
}

document.getElementById('images').src = imageArray[0];

function show4(state)
{
	document.getElementById('window4').style.display = state;
	document.getElementById('wrap4').style.display = state;
}
function show5(state)
{
	document.getElementById('window5').style.display = state;
	document.getElementById('wrap5').style.display = state;
}
function show6(state)
{
	document.getElementById('window6').style.display = state;
	document.getElementById('wrap6').style.display = state;
}
function show7(state)
{
	document.getElementById('window7').style.display = state;
	document.getElementById('wrap7').style.display = state;
}

$(document).ready(function(){

	let image_array = [
	'images/gon_right.png',
	'images/2.png',
	'images/3.png',
	'images/4.png',
	'images/5.png',
	'images/6.png'
	];
	let image_num = 1;
	function slide() {
		$('.slideshow img')
		.animate({	opacity: 0.4}, 500)
		.attr('src',image_array[image_num])
		.animate({opacity: 1}, 500);
		image_num++;

		if (image_num == image_array.length ){
			image_num = 0;
		}
	}
	setInterval(slide, 8000);
});
$(document).ready(function(){
	let img = $('#img_img1');
	img.on('mouseover',function()
	{
		$(this).animate({
			'border-radius':'20px',
			'width' : '300',
			'height' : '164',
			'opacity' : '1',
			'margin-left' : '3px'},500);
		$(this).css({'box-shadow' : '0 0 10px rgba(0, 0, 0, 0.5)'});
	});
	img.on('mouseleave',function(){
		$(this).animate({
			'border-radius':'0',
			'width' : '290',
			'height' : '154',
			'margin-top' : '0',
			'margin-left' : '0'},500);
		$(this).css({'box-shadow' : '0'});
	});
});
$(document).ready(function(){
	let img = $('#img_img');
	img.on('mouseover',function()
	{
		$(this).animate({
			'border-radius':'20px',
			'width' : '300',
			'height' : '164',
			'opacity' : '1',
			'margin-left' : '3px'},500);
		$(this).css({'box-shadow' : '0 0 10px rgba(0, 0, 0, 0.5)'});
	});
	img.on('mouseleave',function(){
		$(this).animate({
			'border-radius':'0',
			'width' : '290',
			'height' : '154',
			'margin-top' : '0',
			'margin-left' : '0'},500);
		$(this).css({'box-shadow' : '0'});
	});
});

$(document).ready(function(){
	let img = $('#img_img2');
	img.on('mouseover',function()
	{
		$(this).animate({
			'border-radius':'20px',
			'width' : '300',
			'height' : '164',
			'opacity' : '1',
			'margin-left' : '3px'},500);
		$(this).css({'box-shadow' : '0 0 10px rgba(0, 0, 0, 0.5)'});
	});
	img.on('mouseleave',function(){
		$(this).animate({
			'border-radius':'0',
			'width' : '290',
			'height' : '154',
			'margin-top' : '0',
			'margin-left' : '0'},500);
		$(this).css({'box-shadow' : '0'});
	});
});

$(document).ready(function(){
	let img = $('#img_img3');
	img.on('mouseover',function()
	{
		$(this).animate({
			'border-radius':'20px',
			'width' : '300',
			'height' : '164',
			'opacity' : '1',
			'margin-left' : '3px'},500);
		$(this).css({'box-shadow' : '0 0 10px rgba(0, 0, 0, 0.5)'});
	});
	img.on('mouseleave',function(){
		$(this).animate({
			'border-radius':'0',
			'width' : '290',
			'height' : '154',
			'margin-top' : '0',
			'margin-left' : '0'},500);
		$(this).css({'box-shadow' : '0'});
	});
});
