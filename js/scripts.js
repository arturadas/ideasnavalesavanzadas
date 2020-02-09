$(document).ready(function() {
    $(window).resize(function(){
        setWidthSizeStyles();
    });
    setWidthSizeStyles($(window).width());
    carrouselAnimated();
    $("#logosCarousel").carousel({
  interval: false
});
    setSubmitForm();
    setEmailSubmitForm();
    $('.arroba').each(function(){
		$(this).html('@');
	});
    addNavigation();
});
function toggleCollapse(){
    $(".collapse").collapse('toggle');
}
function addNavigation(){
    $(".home").click(function() {
		var position=$("#area1-section").offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
        var w  = $(window).width();
        if(w<754){
            toggleCollapse();
        }
    });
    $(".area1").click(function() {
    	var position=$("#area2Section").offset().top-$("#area2-section").outerHeight(true)-80;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
        var w  = $(window).width();
        if(w<754){
            toggleCollapse();
        }
    });
    $(".area2").click(function() {
    	var position=$("#area3Section").offset().top-$("#area3-section").outerHeight(true)-80;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
        var w  = $(window).width();
        if(w<754){
            toggleCollapse();
        }
    });
    $(".area3").click(function() {
    	var position=$("#area4Section").offset().top-$("#area4-section").outerHeight(true)-80;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
        var w  = $(window).width();
        if(w<754){
            toggleCollapse();
        }
    });
    $(".area4").click(function() {
    	var position=$("#foot-info").offset().top;
        $('html, body').animate({
            scrollTop: position
        }, 2000);
        var w  = $(window).width();
        if(w<754){
            toggleCollapse();
        }
    });
}
function setWidthSizeStyles(){
    var w  = $(window).width();
    if(w<754){
        removelinenav();
    }
    if(w>753){
        addlinenav();
    }
}
function removelinenav(){
    $(".navbar-nav>li>a").each(function(){
        $(this).removeClass("sliding-middle-out");
    });
}
function addlinenav(){
    $(".navbar-nav>li>a").each(function(){
        $(this).addClass("sliding-middle-out");
    });
}
function carrouselAnimated(){
    setTimeout(function(){
        $(".carousel-fade .carousel-caption").css("display","block");
        $('.carousel-fade').carousel({
            pause: "false",
        }).bind('slide.bs.carousel', function (e) {
            $('.p-caption-animate').fadeOut(300);
            $('.a-caption-animate').fadeOut(300);
          $('.caption-animate').fadeOut(400);
        }).bind('slid.bs.carousel', function (e) {
            $('.header-image-0').fadeIn(0);
            $('.p-caption-animate').css({"margin-top":"2%"});
            $('.p-caption-animate').css({"margin-bottom":".5%"});
            $('.a-caption-animate').css({"margin-top":"1%"});
            $('.a-caption-animate').css({"margin-bottom":"-1%"});
            $('.a-caption-animate').css({"padding":"0%"});
            $('.caption-animate').fadeIn(10);
            $('.a-caption-animate').fadeIn(130);
            $('.p-caption-animate').fadeIn(130).animate({marginTop:"-1.2%"},700);
            $('.a-caption-animate').animate({marginBottom:"1.5%"},700);
            //$('.a-caption-animate').animate({padding:'1% 1.5% 2%'},1000);
        });
        $('.carousel-fade').trigger('slid');
    },1200);
}
function setSubmitForm(){
    $("#submit").unbind().click(function(e){
		e.preventDefault();
		if(validateEmail($("#email").val())){
			$.ajax({
				method: "POST",
				url: "forms.php",
				dataType: "text",
				async: true,
				data: $("#contactForm").serialize()
			}).done(function(response){
				alert(response);
			}).fail(function(response){
				alert("No se ha podido establecer el contacto");
			});
			return false;
		}else{
			alert("Compruebe su email, parece que no es válido");
		}
	});
}
function setEmailSubmitForm(){
    $(".ina-submit").unbind().click(function(e){
		e.preventDefault();
		if(validateEmail($("#email").val())){
			$.ajax({
				method: "POST",
				url: "../formsEmail.php",
				dataType: "text",
				async: true,
				data: $("#enviarAEmail").serialize()
			}).done(function(response){
				alert(response);
			}).fail(function(response){
				alert("No se ha podido establecer el contacto");
			});
			return false;
		}else{
			alert("Compruebe su email, parece que no es válido");
		}
	});
}
function validateEmail(email) {
    var reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}
