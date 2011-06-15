// Create a video view on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
//var video = win.video;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if video fills the screen',
	top: 40,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});

var video = Ti.Media.createVideoPlayer({
	url: '../movie.mp4',
	movieControlMode:Titanium.Media.VIDEO_CONTROL_FULLSCREEN,
    scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
});

win.add(video);
video.play();
win.add(label);
