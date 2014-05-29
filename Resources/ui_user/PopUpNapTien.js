module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {
	sv.vari.sms = require('/ui-controller/showSmsDialog');
}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		fullscreen : true,
		keepScreenOn : true,
		top : 0,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : 0,
		opacity : 0.78,
	});

	sv.ui.ViewPopUp = Ti.UI.createView({
		top : Ti.App.size(320),
		height : Ti.App.size(560),
		left : Ti.App.size(80),
		right : Ti.App.size(80),
	});

	sv.ui.ViewTieuDe = Ti.UI.createView({
		top : Ti.App.size(0),
		height : Ti.App.size(215),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor : Ti.App.Color.red
	});

	sv.ui.LabelTieuDe = Ti.UI.createLabel({
		text : 'NAP TIỀN',
		font : {
			fontSize : Ti.App.size(36),
			fontFamily : 'Aria',
		},
		color : Ti.App.Color.nauden,
	});

	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/images/icon/close.png',
		top : Ti.App.size(290),
		width : Ti.App.size(60),
		right : Ti.App.size(50),
		height : Ti.App.size(60),
	});

	sv.ui.ViewNapTien = Ti.UI.createView({
		height : Ti.App.size(345),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor : Ti.App.Color.white
	});

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);

	sv.ui.Window.add(sv.ui.ViewTong);
	sv.ui.Window.add(sv.ui.ViewPopUp);

	sv.ui.ViewPopUp.add(sv.ui.ViewNapTien);
	sv.ui.ViewPopUp.add(sv.ui.ViewTieuDe);

	sv.ui.Window.add(sv.ui.Icon);

	sv.ui.ViewTieuDe.add(sv.ui.LabelTieuDe);

}

function createUI_Event(sv) {
	sv.fu = {};

	sv.fu.eventClickIcon = function() {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}