$(document).ready(function(){
	$(".content").slice(0, 16).show();
	$("#loadMore").on("click", function(e){
	  e.preventDefault();
	  $(".content:hidden").slice(0,6
	   ).slideDown();
	  if($(".content:hidden").length == 0) {
		$("#loadMore").text("No Content").addClass("noContent");
	  }
	});
	
  })
  $('.fade').slick({
	dots: false,
	infinite: true,
	speed: 500,
	fade: false,
	cssEase: 'linear'
  });
  
  $('.one-time').slick({
	dots: false,
	infinite: false,
	prevArrow: false,
	nextArrow: false,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
  });
  
  $('.responsive').slick({
			dots: false,
			infinite: false,
			speed: 300,
			prevArrow: false,
		  nextArrow: false,
  
			slidesToShow: 3,
			slidesToScroll: 2,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: false
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
  
  
  $('.responsive1').slick({
			dots: false ,
			infinite: false ,
			speed: 300,
			prevArrow: false,
		  nextArrow: false,
			slidesToShow: 5.5,
			slidesToScroll: 5,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  infinite: true,
				  dots: false
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
  $('.responsive2').slick({
			dots: false ,
			infinite: false ,
			speed: 300,
			prevArrow: false,
		  nextArrow: false,
		  adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  infinite: true,
				  dots: false
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
// for description part 
		  function myFunction() {
			var dots = document.getElementById("dots");
			var moreText = document.getElementById("more");
			var btnText = document.getElementById("myBtn");
		  
			if (dots.style.display === "none") {
			  dots.style.display = "inline";
			  btnText.innerHTML = "Read more"; 
			  moreText.style.display = "none";
			} else {
			  dots.style.display = "none";
			  btnText.innerHTML = "Read less"; 
			  moreText.style.display = "inline";
			}
		  }
