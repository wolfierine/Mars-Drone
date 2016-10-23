$(document).ready(function(){

	smoothScroll();

	//load animations for header when page is ready and >960px
	if($(window).width() >= 960){
		$('.revealOnLoad:not(.animated)').each(function(){
			var $this = $(this);
			$this.css("opacity", 1);
			$this.addClass('animated ' + $this.data('animation'));
			}
		);
	}

	//load animations for rest elements on page
	$(window).on("scroll", function(){

		if($(window).width() >= 960){
			revealOnScroll();
		}
	})

	//variables
	var dott = $(".slider-nav li"),
		content = $(".slider-content").children(),
		hamburger = $(".hamburger"),
		menu = $("nav ul"),
		links = $("nav a"),
		slider_nav = $(".slider-nav li");
		
	//slider
	dott.on("click", function(){
		var $this = $(this),
			idx = $this.index();
		content.fadeOut("fast");
		content.eq(idx).fadeIn("slow");	
	});	

	//hamburger menu
	hamburger.on("click", function(){
		$(this).toggleClass("active");
		menu.toggleClass("active");
	});

	links.on("click", function(){
		hamburger.removeClass("active")
		menu.removeClass("active");
	});

	//slider navigation
	slider_nav.on("click", function(){
		slider_nav.removeClass("active");
		$(this).addClass("active");
	});

});

function smoothScroll(){
	$("header a").click(function(e){
		e.preventDefault();
		var target = $(this).data("target");
		
		$("html body").animate({
			scrollTop: $("#" + target).offset().top}, 1000);
	});
}	

function revealOnScroll(){

var $window = $(window),
	scrolled = $window.scrollTop(), 
	win_height_padded = $window.height() * 1.1;

	$('.revealOnScroll:not(.animated)').each(function(){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded > offsetTop){
			if($this.data('timeout')){
				window.setTimeout(function(){
					$this.addClass('animated ' + $this.data('animation'));
				}, parseInt($this.data('timeout'), 10));
			}else{
				$this.addClass('animated ' + $this.data('animation'));
			}
		}
	});
	$('.revealOnScroll.animated').each(function(index){
		var $this = $(this), offsetTop = $this.offset().top;
		if(scrolled + win_height_padded < offsetTop){
			$(this).removeClass('animated tada pulse bounceInRight flipInY flipInX flip bounceInUp slideInUp lightSpeedIn');
		}
	})
}	
