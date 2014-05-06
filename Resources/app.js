//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

//(function() {
new (require('ui-controller/AllData'));
if(Ti.Platform.osname=="iphone"){
	var home = new (require('/ui/slide_menu'))();
home.open();
}
else{
	if(Ti.Platform.osname=="android"){
		var home_android=new (require('ui/slide_menu_android'))();
		home_android.open();
	}
}

/*
var Win = Ti.UI.createWindow({
//backgroundColor : Ti.App.Color.nauden,
navBarHidden : true,
fullscreen : true,
keepScreenOn : true,
top : 0,
});

var ViewHeader = Ti.UI.createView({
backgroundImage : '/assets/images/icon/header.jpg',
width : Ti.App.WidthScreen,
height : Ti.App.size(120),
top : 0
});

var ViewIconLeft = Ti.UI.createView({
width : Ti.App.size(120),
height : Ti.App.size(120),
left : Ti.App.size(0),
top : Ti.App.size(0)
});

var IconLeft = Ti.UI.createImageView({
image : '/assets/images/icon/menu.png',
top : Ti.App.size(35),
left : Ti.App.size(30),
right : Ti.App.size(30),
bottom : Ti.App.size(35)
});
Win.getIconLeft = function() {
return IconLeft;
};

var ViewIconRight = Ti.UI.createView({
width : Ti.App.size(120),
height : Ti.App.size(120),
right : Ti.App.size(0),
top : Ti.App.size(0)
});

var IconRight = Ti.UI.createImageView({
image : '/assets/images/icon/user.png',
top : Ti.App.size(30),
bottom : Ti.App.size(30),
right : Ti.App.size(35),
left : Ti.App.size(35)
});

Win.getIconRight = function() {
return IconRight;
};

var ViewLabelHeader = Ti.UI.createView({
height : Ti.App.size(120),
top : Ti.App.size(0),
left : Ti.App.size(120),
right : Ti.App.size(120)
});

var LabelHeader = Ti.UI.createLabel({
text : 'Đăng Nhập',
font : {
fontSize : Ti.App.size(40),
fontWeight : 'bold',
fontFamily : 'Aria'
},
color : Ti.App.Color.white,
});
Win.getLabelHeader = function() {
return LabelHeader;
};

Win.add(ViewHeader);

ViewHeader.add(ViewIconLeft);
ViewHeader.add(ViewIconRight);
ViewHeader.add(ViewLabelHeader);

ViewIconLeft.add(IconLeft);

ViewIconRight.add(IconRight);

ViewLabelHeader.add(LabelHeader);

var NewView = new (require('ui/WindowMain'))();
Win.add(NewView);

Win.open();*/
// var Window=new(require('ui/DangNhap'))();
// Window.open();
//})();
