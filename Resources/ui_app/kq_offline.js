module.exports = function(_dauso) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv, _dauso);
	})();

	return sv.ui.Window;
};

function createVariable(sv) {

}

function createUI(sv, _dauso) {
	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		keepScreenOn : true,
	});
	sv.ui.Window.add(Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		opacity : 0.3,
		width : "100%",
		height : "100%"
	}));

	sv.ui.ViewPopUp = Ti.UI.createView({
		height : Ti.App.size(560),
		backgroundColor : Ti.App.Color.superwhite,
		width : Ti.App.size(560)
	});

	sv.ui.ViewIcon = Ti.UI.createView({
		top : Ti.App.size(0),
		height : Ti.App.size(215),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor : Ti.App.Color.red,
		
	});

	sv.ui.Icon = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-close.png',
		top : Ti.App.size(45),
		left : Ti.App.size(215),
		right : Ti.App.size(215),
		bottom : Ti.App.size(45),backgroundSelectedColor : Ti.App.Color.nauden
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		text : 'KHÔNG CÓ KẾT NỐI',
		top : Ti.App.size(230),
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
		},
		textAlign : 'center'
	});

	sv.ui.ThongBao2 = Ti.UI.createLabel({
		text : 'Gửi sms để nhận kết quả sổ xố',
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		width : Ti.UI.SIZE,
		top : Ti.App.size(330)
	});
	sv.ui.button = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.magenta,
		width : Ti.App.size(300),
		height : Ti.App.size(95),
		text : "GỬI",
		textAlign : "center",
		bottom : Ti.App.size(30),
		font : {
			fontSize : Ti.App.size(30)
		},
		borderRadius : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundSelectedColor:Ti.App.Color.nauden
	});

	createUI_Event(sv, _dauso);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.button.addEventListener('click', sv.fu.evt_sms);
	sv.ui.Window.add(sv.ui.ViewPopUp);

	sv.ui.ViewPopUp.add(sv.ui.ViewIcon);

	sv.ui.ViewIcon.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.button);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao2);

	sv.ui.ViewPopUp.add(sv.ui.ThongBao2);

}

function createUI_Event(sv, _dauso) {
	sv.fu.evt_sms = function(e) {
		var showSmsDialog = new (require('/ui-controller/showSmsDialog'))('88xx', _dauso);
	};

	sv.fu.eventClickIcon = function() {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.button.removeEventListener('click', sv.fu.evt_sms);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

