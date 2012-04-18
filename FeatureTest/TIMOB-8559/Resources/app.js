var rootWin   = Ti.UI.createWindow({layout:'vertical'});
 
 
var lbl1 = Ti.UI.createLabel({text:'Should be immediately below the navbar',
                              color:'blue',
                              backgroundColor:'white',
                                });
                                 
rootWin.add(lbl1);
  
var btnOpenWin = Ti.UI.createButton({
  title : "open new window",
  width : 200,
  height  : 35
});
  
btnOpenWin.addEventListener('click', function()
{
  var win2 = Ti.UI.createWindow({layout:'vertical'});
  var lbl2 = Ti.UI.createLabel({text:'I am second window',
                              color:'blue',
                              backgroundColor:'white',
                             });
                             win2.add(lbl2);
  ng.open(win2, {animated:true});
   
});
  
rootWin.add(btnOpenWin);
  
ng = Ti.UI.iPhone.createNavigationGroup({window:rootWin});
var NavBase = Ti.UI.createWindow();
NavBase.add(ng);
NavBase.open(); // this opens the "root" window, automatically