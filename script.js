function _(element){
	return document.getElementById(element);
}

function pack(){
	_("therest").style.left = _("sidething").offsetWidth + 32;
	_("propic").height = _("propic").offsetWidth;
	_("dividyguy").style.marginRight = -(window.innerWidth - _("sidething").offsetWidth - _("titletext").offsetWidth - 49);
}

pack();
window.onresize = function(event) {pack();};

$("#slice1,#slice2,#slice3,#slice4, #sliceL").mouseenter(function(){
	slice = $(this).attr("id");
	pslice = "#p" + slice;
	$(pslice).animate({left: '15%'}, 50); 	
	$(pslice).clearQueue();
});

$("#slice1,#slice2,#slice3,#slice4, #sliceL").mouseleave(function(){
	slice = $(this).attr("id")
	pslice = "#p" + slice;
	$(pslice).animate({left: '10%'}, 100); 
});

$("a").click(function(){

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 500);
    $('html, body').clearQueue();
    return false;
});