$(document).ready(function() {

	/*new pages*/
	$('.slider-categories').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 7,
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 768,
			settings: {
				variableWidth: true,
				slidesToShow: 1,
			}
		}
		]
	});

	$(".title-wholesaler").click(function(e) {
		e.preventDefault();
		var wh_img =  $(this).attr('href');
		var wh_text =  $(this).attr('date-text');
		$(".wholesaler-block__image img").attr("src", wh_img);
		$(".wholesaler-block__text p").html(wh_text);
	});

	$('.tabs-login a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-login").fadeOut(0);
		var selectTab2 = $(this).attr("href");
		$(selectTab2).fadeIn(200);
	});



	//плавный скролл
	$(".navigat li a").mPageScroll2id();

 
	$(".item-color").click(function() {
		$(this).parent().siblings().find(".item-color").removeClass("active");
		$(this).toggleClass("active");
	});

	$(".item-size:not('.disabled')").click(function(e) {
		e.preventDefault();
		$(this).parent().siblings().find(".item-size").removeClass("active");
		$(this).toggleClass("active");
	});


/*input file*/
  $("input[type='file']").change(function(){
    var filename_text = $(this).parent().siblings(".name-upload");
    var filename = $(this).val().replace(/.*\\/, "");
    filename_text.html(filename);
  });

	//кнопка sandwich
	/*
	$(".btn-menu").click(function() {
		$(this).toggleClass("active");
		if ($(".header-bottom").is(":hidden")) {
			$(".header-bottom").slideDown(200);
		} else {
			$(".header-bottom").slideUp(200);
			$(".btn-menu").removeClass("active");
		}
		
	});

	$(".header-bottom a").click(function() {
		$(".header-bottom").slideUp(200);
		$(".btn-menu").removeClass("active");
	});
	*/

	$(".btn-menu").click(function() {
		$("body").toggleClass("body-menu");
		$("html").toggleClass("html-menu");
		$(".menu-overlay").fadeIn("active");
	});

	$(".menu-mobile a").click(function() {
		$("body").removeClass("body-menu");
		$("html").removeClass("html-menu");
		$(".menu-overlay").fadeOut("active");
	});

	$(".menu-overlay").click(function() {
		$("body").removeClass("body-menu");
		$("html").removeClass("html-menu");
		$(".menu-overlay").fadeOut("active");
	});


	/*range slider*/

	$(function() {
var $range = $(".range-catalog_price .range-catalog__input"),
$from = $(".range-catalog_price .control-input__from"),
$to = $(".range-catalog_price .control-input__to"),
min = 0,
max = 400;
$range.ionRangeSlider({
	type: "double",
	min: min,
	max: max,
	from: 27,
	to: 150,
	prettify_enabled: true,
	onChange: function(data) {
		updateValues()
	}
});


 function number_format(num, format) {
        num = (num + "").replace(/(\s)+/g, "");
        return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
    }
    $range = $range.data("ionRangeSlider");
    var updateValues = function() {
        var res = $range.result;
        $from.val(number_format(res.from, true) + ".00");
        $to.val(number_format(res.to,true) + ".00")
    };
    $from.on("focus", function() {
        this.value = number_format(this.value);
        this.focus();
        this.selectionStart = this.value.length
    }).on("input", function() {
        $range.update({
            from: this.value
        })
    }).on("blur", updateValues);
    $to.on("focus", function() {
        this.value = number_format(this.value);
        this.focus();
        this.selectionStart = this.value.length
    }).on("input", function() {
        $range.update({
            to: this.value
        })
    }).on("blur", updateValues)


});

$(".item-filter__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings(".item-filter__content").slideToggle(200);
	});

$(".sidebar-open").click(function() {
		$(".sidebar-catalog").slideToggle(200);
	});


	$(".btn-like").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	/*высота меню*/
	function heightDetect() {
		$('.header-bottom').css("height", $(window).height() - $(".header").height() - $(".buttons-header").height() + 60);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});


/*new pages*/
	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.siblings(".item-quantity__value").html(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.siblings(".item-quantity__value").html(newVal);
			spinner.find("input").trigger("change");
		});

	});


	//слайдер

	$('.slider-catalog').slick({
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
			}
		}
		]
	});

	$('.slider-reviews').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
		}
		]
	});

	$('.row_advantages').slick({
		dots: false,
		arrows: false,
		slidesToShow:1,
		variableWidth: true,
		infinite: true,
		arrows: false,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 992,
			settings: 'unslick'
		}
		]
	});

	$('.row_category').slick({
		dots: false,
		arrows: false,
		slidesToShow:1,
		variableWidth: true,
		infinite: false,
		arrows: false,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 992,
			settings: 'unslick'
		}
		]
	});

	$('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		touchThreshold: 1000,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: true,
				arrows: false
			}
		}
		]
	});

	$('.slider-nav').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		verticalSwiping: true,
		vertical: true,
		asNavFor: '.slider-for',
		touchThreshold: 1000,
		focusOnSelect: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-up"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-down"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				
			}
		}
		]
	});

	$('.list-colors').slick({
		arrows: true,
		dots: false,
		slidesToShow:12,
		infinite: false,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow:9,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:8,
			}
		},
		{
			breakpoint: 399,
			settings: {
				slidesToShow:7,
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow:6,
			}
		}
		]
	});

	$('.list-colors-modal').slick({
		arrows: true,
		dots: false,
		slidesToShow:10,
		infinite: false,
		variableWidth: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow:9,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow:8,
			}
		},
		{
			breakpoint: 399,
			settings: {
				slidesToShow:7,
			}
		},
		{
			breakpoint: 370,
			settings: {
				slidesToShow:6,
			}
		}
		]
	});

	$('.slider-reviews-card').slick({
		dots: true,
		arrows: false,
		slidesToShow:1,
		infinite: false,
		arrows: false,
		slidesToScroll: 1,
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 992,
			settings: 'unslick'
		}
		]
	});

	$('.tabs a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	{
		if ($(window).width() < 768) { 

			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).siblings(".footer__content").slideToggle(200);
			});


		}
	}

	$(".language-block__value").click(function() {
		$(this).toggleClass("active");
		$(".language-block__dropdown").slideToggle(200);
	});

	$(".item-question__head").click(function(e) {
		e.preventDefault();
		$(".item-question").removeClass("active");
		$(".item-question__content").slideUp(200);
		if ($(this).siblings(".item-question__content").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".item-question__content").slideDown(200);

		} else {
			$(this).parent().removeClass("active");
			$(this).siblings(".item-question__content").slideUp(200);

		}
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		 beforeShow : function(){
      $('.slider-for').slick('setPosition');
        $('.slider-nav').slick('setPosition');
         $('.list-colors-modal').slick('setPosition');
    }
	});

	$(".fancybox-table").fancybox({
    beforeShow : function(){
      $(".fancybox-wrap").addClass("fancybox-wrap_table");
      
    }
  });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

