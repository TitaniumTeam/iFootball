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
		setText(sv);
	})();

	return sv;
};

function createVariable(sv) {

}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		//backgroundColor : Ti.App.Color.nauden,
		navBarHidden : true,
		keepScreenOn : true,
	});

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.nauden,
		top : 0,
		opacity : 0.5,
	});

	sv.ui.ViewPopUp = Ti.UI.createView({
		top : Ti.App.size(320),
		height : Ti.App.size(440),
		left : Ti.App.size(80),
		right : Ti.App.size(80),
	});

	sv.ui.ViewIcon = Ti.UI.createView({
		top : Ti.App.size(0),
		height : Ti.App.size(215),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor:Ti.App.Color.red,
		backgroundSelectedColor:Ti.App.Color.xanhnhat
	});

	sv.ui.Icon = Ti.UI.createImageView({
		top : Ti.App.size(45),
		left : Ti.App.size(215),
		right : Ti.App.size(215),
		bottom : Ti.App.size(45),
		image:'/assets/images/icon/icon-close.png'
	});

	sv.ui.ViewThongBao = Ti.UI.createView({
		height : Ti.App.size(225),
		bottom : Ti.App.size(0),
		left : Ti.App.size(0),
		right : Ti.App.size(0),
		backgroundColor : Ti.App.Color.white,
		touchEnabled : false
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		top : Ti.App.size(50),
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold',
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		text:'THẤT BẠI',
	});
	sv.ui.ViewThongBao2 = Ti.UI.createView({
		top : Ti.App.size(110),
		left : Ti.App.size(75),
		right : Ti.App.size(75)
	});

	sv.ui.ThongBao2 = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(30),
			textAlign : 'center'
		},
		color : Ti.App.Color.nauden,
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		backgroundColor : 'transparent',
		text:'Giao dịch thất bai. Bạn hãy thử lại'
	});

	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);

	sv.ui.Window.add(sv.ui.ViewTong);
	sv.ui.Window.add(sv.ui.ViewPopUp);

	sv.ui.ViewPopUp.add(sv.ui.ViewThongBao);
	sv.ui.ViewPopUp.add(sv.ui.ViewIcon);

	sv.ui.ViewIcon.add(sv.ui.Icon);

	sv.ui.ViewThongBao.add(sv.ui.ThongBao1);
	sv.ui.ViewThongBao.add(sv.ui.ViewThongBao2);

	sv.ui.ViewThongBao2.add(sv.ui.ThongBao2);

}

function createUI_Event(sv) {

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

function setText(sv){
	sv.setText=function(_txt){
		sv.ui.ThongBao2.text=_txt;
	};
};
