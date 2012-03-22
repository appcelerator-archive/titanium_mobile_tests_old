//Create a double tab group on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'red';

var label = Ti.UI.createLabel({
	text: 'Pass if the tab group fills the screen width with the last tab being "More"',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#336699'
});

// Create new window for each tab
var win1 = Titanium.UI.createWindow({title:'Testing1'});
var win2 = Titanium.UI.createWindow({title:'Testing2'});
var win3 = Titanium.UI.createWindow({title:'Testing3'});
var win4 = Titanium.UI.createWindow({title:'Testing4'});
var win5 = Titanium.UI.createWindow({title:'Testing5'});
var win6 = Titanium.UI.createWindow({title:'Testing6'});
var win7 = Titanium.UI.createWindow({title:'Testing7'});
var win8 = Titanium.UI.createWindow({title:'Testing8'});
var win9 = Titanium.UI.createWindow({title:'Testing9'});
var win10 = Titanium.UI.createWindow({title:'Testing10'});

// Create 10 tabs for testing

var tab1 = Titanium.UI.createTab({title: 'Testing1', window:win1});
var tab2 = Titanium.UI.createTab({title: 'Testing2', window:win2});
var tab3 = Titanium.UI.createTab({title: 'Testing3', window:win3});
var tab4 = Titanium.UI.createTab({title: 'Testing4', window:win4});
var tab5 = Titanium.UI.createTab({title: 'Testing5', window:win5});
var tab6 = Titanium.UI.createTab({title: 'Testing6', window:win6});
var tab7 = Titanium.UI.createTab({title: 'Testing7', window:win7});
var tab8 = Titanium.UI.createTab({title: 'Testing8', window:win8});
var tab9 = Titanium.UI.createTab({title: 'Testing9', window:win9});
var tab10 = Titanium.UI.createTab({title: 'Testing10', window:win10});

//  add tabs

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);
tabGroup.addTab(tab5);
tabGroup.addTab(tab6);
tabGroup.addTab(tab7);
tabGroup.addTab(tab8);
tabGroup.addTab(tab9);
tabGroup.addTab(tab10);

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