
//var overlays = ["#overlay1", "#overlay2", "#overlay3", "#overlay4"];
var margin = 10;//5;
var textBoxPadding = 5;
var totalPics = 4;
var bigToSmallPixelSplit = 600;

$(document).ready(function(){
	setElementSizes(0);

	$( window ).resize(function(){ 
		setElementSizes(0); 
		$("#exBox1").removeClass("pic1").removeClass("pic2").removeClass("pic3");
		$("#exBox2").removeClass("pic1").removeClass("pic2").removeClass("pic3");
		$("#exBox3").removeClass("pic1").removeClass("pic2").removeClass("pic3");
		setElementSizes(0); 
	});

	$("#box1").click(function() {
//		$("#box1TextBoxes").toggleClass("active");
		$("#box2TextBoxes").removeClass("active");
		$("#box3TextBoxes").removeClass("active");
		$("#box4TextBoxes").removeClass("active");

		$("#overlay1").toggleClass("active");
		$("#overlay2").removeClass("active");
		$("#overlay3").removeClass("active");
		$("#overlay4").removeClass("active");

		toggleActive($("#box1TextBoxes"), "#box1");
//		window.location.href = "#box1";
	});
	$("#box2").click(function() {
		$("#box1TextBoxes").removeClass("active");
//		$("#box2TextBoxes").toggleClass("active");
		$("#box3TextBoxes").removeClass("active");
		$("#box4TextBoxes").removeClass("active");

		$("#overlay1").removeClass("active");
		$("#overlay2").toggleClass("active");
		$("#overlay3").removeClass("active");
		$("#overlay4").removeClass("active");
		toggleActive($("#box2TextBoxes"), "#box2");

//		setElementSizes();
//		window.location.href = "#box2";
	});
	$("#box3").click(function() {
		$("#box1TextBoxes").removeClass("active");
		$("#box2TextBoxes").removeClass("active");
//		$("#box3TextBoxes").toggleClass("active");
		$("#box4TextBoxes").removeClass("active");

		$("#overlay1").removeClass("active");
		$("#overlay2").removeClass("active");
		$("#overlay3").toggleClass("active");
		$("#overlay4").removeClass("active");
		toggleActive($("#box3TextBoxes"), "#box3");

//		setElementSizes();
//		window.location.href = "#box3";
	});
	$("#box4").click(function() {
		$("#box1TextBoxes").removeClass("active");
		$("#box2TextBoxes").removeClass("active");
		$("#box3TextBoxes").removeClass("active");
//		$("#box4TextBoxes").toggleClass("active");

		$("#overlay1").removeClass("active");
		$("#overlay2").removeClass("active");
		$("#overlay3").removeClass("active");
		$("#overlay4").toggleClass("active");
		toggleActive($("#box4TextBoxes"), "#box4");

//		setElementSizes();
//		window.location.href = "#box4";
	});

	$(".close").click(function() {
		$("#box1TextBoxes").removeClass("active");
		$("#box2TextBoxes").removeClass("active");
		$("#box3TextBoxes").removeClass("active");
		$("#box4TextBoxes").removeClass("active");

		$("#overlay1").removeClass("active");
		$("#overlay2").removeClass("active");
		$("#overlay3").removeClass("active");
		$("#overlay4").removeClass("active");
		setElementSizes(0);

		window.location.href = "#";
	});

	if (isMobile()) {
		$("#overlay1 > div > h1").addClass("active");
		$("#overlay2 > div > h1").addClass("active");
		$("#overlay3 > div > h1").addClass("active");
		$("#overlay4 > div > h1").addClass("active");
		$("#overlay1").addClass("semi");
		$("#overlay2").addClass("semi");
		$("#overlay3").addClass("semi");
		$("#overlay4").addClass("semi");
	} else {
		$("#box1").hover(function() { hoverIn($(this)); }, function() { hoverOut($(this)); });
		$("#box2").hover(function() { hoverIn($(this)); }, function() { hoverOut($(this)); });
		$("#box3").hover(function() { hoverIn($(this)); }, function() { hoverOut($(this)); });
		$("#box4").hover(function() { hoverIn($(this)); }, function() { hoverOut($(this)); });
	}

//	$("html").find(".color").css("color", "darkblue");
//	$("html").find(".color").css("color", "rgba(1, 119, 141, 1)");
//	$("html").find(".color").css("color", "rgba(3, 110, 130, 1)");
	$("html").find(".color").css("color", "rgba(7, 21, 158, 1)");

//	$("#box1TextBoxes").find(".color").css("color", "darkblue");
////	$("#box2TextBoxes").find(".color").css("color", "darkgreen");
////	$("#box3TextBoxes").find(".color").css("color", "darkgreen");
//	$("#box2TextBoxes").find(".color").css("color", "darkblue");
//	$("#box3TextBoxes").find(".color").css("color", "darkblue");
//	$("#box4TextBoxes").find(".color").css("color", "darkblue");

	if (isMobile()) {
		animateBackgroundBoxImages([2,2,2], 0, false);
	} else {
		animateBackgroundBoxImages(randArr(), 0, true);
	}

	hash = window.location.hash;
	if (hash == "#box1") {
		$("#box1").trigger("click");
	} else if (hash == "#box2") {
		$("#box2").trigger("click");
	} else if (hash == "#box3") {
		$("#box3").trigger("click");
	} else if (hash == "#box4") {
		$("#box4").trigger("click");
	}
}); 

function min(size) {
	if (size < minSize) return minSize * sizeCoef;
	return size * sizeCoef;
}

function isScreenSmall() {
	var width = $("body").width();
	if (width <= bigToSmallPixelSplit || isMobile()) {
		return true;
	} else return false;
}

function isMobile() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		return true;
	} else return false;
}

function setElementSizes(mult) {
	if (isScreenSmall()) {
		setElementSizes_small(mult);
	} else {
		setElementSizes_big(mult);
	}

	var b1Top = $("#box1").offset().top;
	if ((b1Top + 10 < $("#exBox2").offset().top
			|| b1Top + 10 < $("#exBox3").offset().top)
			&& mult < 10) {
//		alert($("#box1").offset().top + ", " + $("#exBox2").offset().top);
		setElementSizes(mult + 1)
	}
}

function setElementSizes_big(mult) {
	var width = $("#main").width();
	$("#exBox1").css("display", "block");
	$("#exBox3").css("display", "block");
	$("#exBox5").css("display", "block");
//	$("#box1").css("margin-left", "5px");
	var edgeDist = 5 * mult;

	//Top row
	var exBox1W = width / 6;
	var exBox1H = width / 4;
	var box1W = exBox1H;
	var box1H = exBox1H;
	var box2W = width / 5.5; //width / 5;
	var box2H = box2W;//width / 6;//box2W;//exBox1H;
	var exBox2W = width / 3;
	var exBox2H = exBox1H;
	var exBox3W = Math.max(0, width - exBox1W - box1W - box2W - exBox2W - 10 * margin - edgeDist);// - 10;
	var exBox3H = exBox1H;
	if (exBox3W <= 10) {
		exBox3W = 0;
		exBox2W = Math.max(0, width - exBox1W - box1W - box2W - 8 * margin - edgeDist);// - 10;
//		alert(width + ", " + (exBox2W + exBox1W + box1W + box2W + 8 * margin));
//		alert(width + ", " + (exBox1W + box1W + box2W + exBox3W + 6 * margin));
		$("#exBox3").css("display", "none");
	} else {
		$("#exBox3").css("display", "block");
	}

	//Bottom row
	var exBox4W = exBox1W + box1W - box2W;//width / 6 + (box1W - (width / 6));
	var exBox4H = box2W;//width / 6;
	var box3W = exBox4H;//width / 6;
	var box3H = exBox4H;
	var box4W = exBox4H * 2;//box2W + exBox2W + 2 * margin;//width * 2 / 6;
	var box4H = exBox4H;
	var exBox5W = Math.max(0, width - exBox4W - box3W - box4W - 8 * margin - edgeDist);// - 10;
	var exBox5H = exBox4H;
//	if (exBox5W <= 0) box4W = width - exBox4W - box3W - box4W - 4 * margin - 10;

	$("#exBox1").width(exBox1W);
	$("#exBox1").height(exBox1H);
	$("#box1").width(box1W);
	$("#box1").height(box1H);
	$("#box2").width(box2W);
	$("#box2").height(box2H);
	$("#exBox2").width(exBox2W);
	$("#exBox2").height(exBox2H);
	$("#exBox3").width(exBox3W);
	$("#exBox3").height(exBox3H);

	$("#exBox4").width(exBox4W);
	$("#exBox4").height(exBox4H);
	$("#box3").width(box3W);
	$("#box3").height(box3H);
	$("#box4").width(box4W);
	$("#box4").height(box4H);
	$("#exBox5").width(exBox5W);
	$("#exBox5").height(exBox5H);

	$("#exBox6").width(box2W);
	$("#exBox6").height(exBox1H - box2H - 2 * margin);

	var mainTopMargin = ($("body").height() - $("#main").outerHeight()) / 2;
	if (mainTopMargin < 0) mainTopMargin = 0;
	$("#main").css("margin-top", mainTopMargin + "px");

	setTextBoxes_big(box1W, box2W, box3W, box4W, 0);
	setImages(box1W, box1H, box2W, box2H, box3W, box3H, box4W, box4H, 0);
}


function setElementSizes_small(mult) {
	var width = $("body").width();
	$("#exBox1").css("display", "none");
	$("#exBox3").css("display", "none");
	$("#exBox5").css("display", "none");
//	$("#box1").css("margin-left", "10px");
	var edgeDist = 5 * mult;

	var box1W = width / 4;
	var box2W = width / 5.5;

//	var w = width / 4 + width / 5.5 * 2 + 20 +20;
	var w = box1W + 2 * box2W + 3 * margin + edgeDist;
	var factor = width / w;
	//Top row
	box1W *= factor;
	var box1H = box1W;
	box2W *= factor;
	var box2H = box2W;

	var exBox2W = box2W - 2 * margin;
	var exBox2H = box1H;

	var exBox3W = 0;
	var exBox3H = box1H;

	//Bottom row
	var exBox4W = box1W - box2W - 2 * margin;
	var exBox4H = box2W;
	var box3W = exBox4H;
	var box3H = exBox4H;
	var box4W = exBox4H * 2;
	var box4H = exBox4H;
	var exBox5W = 0;
	var exBox5H = exBox4H;

	$("#box1").width(box1W);
	$("#box1").height(box1H);
	$("#box2").width(box2W);
	$("#box2").height(box2H);
	$("#exBox2").width(exBox2W);
	$("#exBox2").height(exBox2H);
	$("#exBox3").width(exBox3W);
	$("#exBox3").height(exBox3H);

	$("#exBox4").width(exBox4W);
	$("#exBox4").height(exBox4H);
	$("#box3").width(box3W);
	$("#box3").height(box3H);
	$("#box4").width(box4W);
	$("#box4").height(box4H);
	$("#exBox5").width(exBox5W);
	$("#exBox5").height(exBox5H);

	$("#exBox6").width(box2W);
	$("#exBox6").height(box1H - box2H - 2 * margin);

	var mainTopMargin = ($("body").height() - $("#main").outerHeight()) / 2;
	if (mainTopMargin < 0) mainTopMargin = 0;
	$("#main").css("margin-top", mainTopMargin + "px");

	setTextBoxes_small(box1W, box2W, box3W, box4W, 0);
	setImages(box1W, box1H, box2W, box2H, box3W, box3H, box4W, box4H, 0);
}

function setImages(b1Width, b1Height, b2Width, b2Height, b3Width, b3Height, b4Width, b4Height, b2Offset) {
	//TODO - do something so that it doesn't stretch, eg auto, min width/height
//	$(".background").css({ "width": "100%", "height": "100%"});
	$("#box1").css("background-size", (b1Width + b4Width + 2 * margin) + "px " +  (b1Height + b4Height + 2 * margin) + "px");
	$("#box2").css("background-size", (b1Width + b4Width + 2 * margin) + "px " +  (b1Height + b4Height + 2 * margin) + "px");
	$("#box3").css("background-size", (b1Width + b4Width + 2 * margin) + "px " +  (b1Height + b4Height + 2 * margin) + "px");
	$("#box4").css("background-size", (b1Width + b4Width + 2 * margin) + "px " +  (b1Height + b4Height + 2 * margin) + "px");
//	$("#r2c1").css("background-repeat", "no-repeat");

	$("#box2").css("background-position", (-b1Width - b2Offset - margin) + "px " +  (-(b1Height - b2Height - b2Offset)) + "px");
	$("#box3").css("background-position", (-(b1Width - b3Width)) + "px " +  (-b1Height - margin) + "px");
	$("#box4").css("background-position", (-b1Width - margin) + "px " +  (-b1Height - margin) + "px");
}

function toggleActive(item, goToOnActive) {
	if (item.hasClass("active")) {
		item.removeClass("active");
		setElementSizes(0);
		window.location.href = "#";
	} else {
		item.addClass("active");
		setElementSizes(0);
		window.location.href = goToOnActive;
	}
}

function setTextBoxes_big(box1W, box2W, box3W, box4W, b2Offset) {
	var xPaddingTotal = 10 + 2 * textBoxPadding;
	var b1TextWidth = box1W - xPaddingTotal;
	$("#box1TextBoxes").width(b1TextWidth);
	$("#box1TextBoxes").css("margin-left", ($("#box1").offset().left) + "px");

	var b2TextWidth = box1W + box2W + 2 * margin - xPaddingTotal;
	$("#box2TextBoxes").width(b2TextWidth);
	$("#box2TextBoxes").css("margin-left", ($("#box1").offset().left) + "px");

	var b3TextWidth = box3W - xPaddingTotal;
	$("#box3TextBoxes").width(b3TextWidth);
	$("#box3TextBoxes").css("margin-left", ($("#box3").offset().left) + "px");

	var b4TextWidth = box3W + box4W + 2 * margin - xPaddingTotal;
	$("#box4TextBoxes").width(b4TextWidth);
	$("#box4TextBoxes").css("margin-left", ($("#box3").offset().left) + "px");

	var tb1 = $("#box1TextBoxes").find(".arrow1");
	tb1.removeClass("arrow1").addClass("topLeftArrow");

	var tb2 = $("#box2TextBoxes").find(".arrow2");
	tb2.removeClass("arrow2").addClass("topRightArrow");

	var tb3 = $("#box3TextBoxes").find(".arrow3");
	tb3.removeClass("arrow3").addClass("topLeftArrow");

	var tb4 = $("#box4TextBoxes").find(".arrow4");
	tb4.removeClass("arrow4").addClass("topRightArrow");
}

function setTextBoxes_small(box1W, box2W, box3W, box4W, b2Offset) {
	var w = box1W + box4W;

	$("#box1TextBoxes").width(w);
	$("#box1TextBoxes").css("margin-left", margin + "px");

	$("#box2TextBoxes").width(w);
	$("#box2TextBoxes").css("margin-left", margin + "px");

	$("#box3TextBoxes").width(w);
	$("#box3TextBoxes").css("margin-left", margin + "px");

	$("#box4TextBoxes").width(w);
	$("#box4TextBoxes").css("margin-left", margin + "px");

	var tb1 = $("#box1TextBoxes").find(".topLeftArrow");
	tb1.removeClass("topLeftArrow").addClass("arrow1");

	var tb2 = $("#box2TextBoxes").find(".topRightArrow");
	tb2.removeClass("topRightArrow").addClass("arrow2");

	var tb3 = $("#box3TextBoxes").find(".topLeftArrow");
	tb3.removeClass("topLeftArrow").addClass("arrow3");

	var tb4 = $("#box4TextBoxes").find(".topRightArrow");
	tb4.removeClass("topRightArrow").addClass("arrow4");
}

function hoverIn(item) {
//	item.addClass("skew");
//	setTimeout( function() {
//	item.removeClass("skew");
//	}, 300);
	toggleLabels(item); 
}
function hoverOut(item) {
//	item.removeClass("skew");
	toggleLabels(item); 
}

function toggleLabels(item) {
	$("#overlay1 > div > h1").toggleClass("active");
	$("#overlay2 > div > h1").toggleClass("active");
	$("#overlay3 > div > h1").toggleClass("active");
	$("#overlay4 > div > h1").toggleClass("active");

	$("#overlay1").toggleClass("semi");
	$("#overlay2").toggleClass("semi");
	$("#overlay3").toggleClass("semi");
	$("#overlay4").toggleClass("semi");

//	$("#overlay1 > h1").fadeToggle("active");
//	$("#overlay2 > h1").fadeToggle("active");
//	$("#overlay3 > h1").fadeToggle("active");
//	$("#overlay4 > h1").fadeToggle("active");
}

function animateBackgroundBoxImages(picNumArr, startPicNum, useRandArr) {
	animateBackgroundBoxImage($("#exBox" + picNumArr[0]), "pic" + (startPicNum % totalPics), function() {
		animateBackgroundBoxImage($("#exBox" + picNumArr[1]), "pic" + (++startPicNum % totalPics), function() {
			animateBackgroundBoxImage($("#exBox" + picNumArr[2]), "pic" + (++startPicNum % totalPics), function() { 
				var arr = (useRandArr) ? randArr() : picNumArr;
				if (useRandArr && picNumArr[2] == arr[0]) {
					var randIdx = Math.floor((Math.random() * 2) + 1); 
					arr[0] = arr[randIdx];
					arr[randIdx] = picNumArr[2];
				}
				animateBackgroundBoxImages(arr, ++startPicNum % totalPics, useRandArr);
			});
		});
	});
}

function animateBackgroundBoxImage(elem, picClass, callback) {
	if (isScreenSmall()) elem = $("#exBox2");
	elem.removeClass("picSlide1").removeClass("picSlide2")
	.css({"background-position": (elem.width()) + "px 0px" })
	.addClass(picClass);
	setTimeout( function() {
		elem.addClass("picSlide2").css("background-position", "0px 0px");
		setTimeout( function() {

			getBackgroundImageSize(elem, function(imgW, imgH){
				var imgLoadedW = imgW * elem.height() / imgH;

				elem.removeClass("picSlide2").addClass("picSlide1")
				.css("background-position", (-1 * (imgLoadedW - elem.width())) + "px 0px");
				setTimeout( function() {
					elem.removeClass("picSlide1").addClass("picSlide2")
					.css("background-position", "-" + imgLoadedW + "px 0px");

					setTimeout( function() {
						elem.removeClass(picClass)
						.removeClass("picSlide1").removeClass("picSlide2")
						.css({"background-position": (elem.width()) + "px 0px" });
						if (typeof callback == "function") {
							callback();
						}
					}, 800); //let image slide out
				}, 12000); //let image scroll
			});
		}, 2000); //let image slide in
	}, 1000); //let image load
}

//Gets the file img size
function getBackgroundImageSize(elem, callback) {
	var image_url = elem.css('background-image'), image;
//	Remove url() or in case of Chrome url("")
	image_url = image_url.match(/^url\("?(.+?)"?\)$/);

	if (image_url[1]) {
		image_url = image_url[1];
		image = new Image();
		// just in case it is not already loaded
		$(image).load(function () {
			if (typeof callback == "function") {
				callback(image.width, image.height);
			}
		});
		image.src = image_url;
	}
}

function randArr() {
	arr = [1, 2, 4];
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;
}
