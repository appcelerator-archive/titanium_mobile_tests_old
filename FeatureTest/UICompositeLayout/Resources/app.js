// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	barColor:'#336699'
});


//
// create Smoke tab and root window
//
var win1 = Titanium.UI.createWindow({
	url:'smoke.js',
    title:'Smoke'
});

var tab1 = Titanium.UI.createTab({
	icon: 'images/tabs/KS_nav_ui.png',
	title: 'Smoke',
    window:win1
});

//
// create Acceptance tab and root window
//
var win2 = Titanium.UI.createWindow({
    url:'acceptance.js',
    title:'Acceptance'
});
var tab2 = Titanium.UI.createTab({
    icon: 'images/tabs/KS_nav_ui.png',
    title: 'Acceptance',
    window:win2
});


//
// create Full tab and root window
//
var win3 = Titanium.UI.createWindow({
    url:'full.js',
    title:'Full'
});
var tab3 = Titanium.UI.createTab({
    icon:'images/tabs/KS_nav_phone.png',
    title:'Full',
    window:win3
});


//
// create platform tab and root window
//
var win4 = Titanium.UI.createWindow({
    url:'environment.js',
    title:'Environment'
});
var tab4 = Titanium.UI.createTab({
    icon:'images/tabs/KS_nav_platform.png',
    title:'Environment',
    window:win4
});


//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

tabGroup.addEventListener('open',function()
{
	// set background color back to white after tab group transition
	Titanium.UI.setBackgroundColor('#fff');
});

tabGroup.setActiveTab(3); 
// open tab group with a transition animation
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});