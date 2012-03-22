// Test for TC1108-1111 for updating layouts with one re-layout

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var buttonStart = Ti.UI.createButton({
	title: 'Start',
	top: 20,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE

});
var buttonFinish = Ti.UI.createButton({
	title: 'Finish',
	top: 80,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE	
});
var buttonUpdate = Ti.UI.createButton({
	title: 'Update',
	top: 140,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE
});

buttonStart.addEventListener('click', function()
{	
	view.startLayout();
	view.width = 75;
	view.height = 75;
	view.backgroundColor = 'blue'; 
});

buttonFinish.addEventListener('click', function()
{	
	view.finishLayout();
});


buttonUpdate.addEventListener('click', function()
{	
	view.updateLayout({
		backgroundColor: 'yellow',
		height: 100,
		width:100
	});
});


var view = Ti.UI.createView({
	backgroundColor: 'red',
	height: 50,
	width: 50,
	top: 200
})


win.add(buttonStart);
win.add(buttonFinish);
win.add(buttonUpdate);
win.add(view);
