// Create a table view row on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if table view row fills the screen',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var row = Titanium.UI.createTableViewRow({
	height: 'auto'	
});
var view = Titanium.UI.createView({backgroundColor:'red',width:20,height:20});
row.add(view);


win.add(row);
win.add(label);