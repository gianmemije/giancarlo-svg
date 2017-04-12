
TweenMax.staggerFrom(".handpiece", 1, {scale:0.5, opacity:0, delay:0.05, ease:Expo.easeOut}, 0.2);


$(".button1").click(function(){
	TweenMax.staggerTo(".handpiece", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
});