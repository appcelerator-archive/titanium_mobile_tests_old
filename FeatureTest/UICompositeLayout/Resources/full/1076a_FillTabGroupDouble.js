//Create a double tab group on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'red';

var label = Ti.UI.createLabel({
	text: 'Pass if the tab group fills the screen width',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#336699'
});


//
// create tab and root window
//
var win1 = Titanium.UI.createWindow({
    title:'Testing'
});

var tab1 = Titanium.UI.createTab({
	title: 'Testing',
    window:win1
});

//
// create tab and root window
//
var win2 = Titanium.UI.createWindow({
    title:'TabGroup'
});
var tab2 = Titanium.UI.createTab({
    title: 'TabGroup',
    window:win2
});



//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
win.add(tabGroup);
win1.add(label);

tabGroup.setActiveTab(0); 

tabGroup.addEventListener('open',function()
{
	// set background color back to white after tab group transition
	Titanium.UI.setBackgroundColor('#fff');
});

// open tab group with a transition animation
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});