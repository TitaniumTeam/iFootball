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

	return sv.ui.windowkqsx;
};

function createVariable(sv) {
}

function createUI(sv) {
	sv.ui.windowkqsx = Titanium.UI.createWindow({
		navBarHidden : true,
		keepScreenOn : true,
		top : 0,
		orientationModes : [Ti.UI.PORTRAIT],

	});
	sv.ui.ViewHeader = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.size(720),
		height : Ti.App.size(120),
		top : 0
	});

	sv.ui.ViewIconLeft = Ti.UI.createView({
		width : Ti.App.size(120),
		height : Ti.App.size(120),
		left : Ti.App.size(0),
		top : Ti.App.size(0)
	});

	sv.ui.IconLeft = Ti.UI.createImageView({
		image : '/assets/images/icon/arrow.png',
		top : Ti.App.size(35),
		left : Ti.App.size(30),
		right : Ti.App.size(30),
		bottom : Ti.App.size(35)
	});

	sv.ui.ViewLabelHeader = Ti.UI.createView({
		height : Ti.App.size(120),
		top : Ti.App.size(0),
		left : Ti.App.size(120),
		right : Ti.App.size(120)
	});

	sv.ui.LabelHeader = Ti.UI.createLabel({
		text : 'Thông tin cá nhân',
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.superwhite,
	});

	sv.ui.windowkqsx.add(sv.ui.ViewHeader);
	sv.ui.ViewHeader.add(sv.ui.ViewIconLeft);
	sv.ui.ViewHeader.add(sv.ui.ViewLabelHeader);

	sv.ui.ViewIconLeft.add(sv.ui.IconLeft);
	sv.ui.ViewLabelHeader.add(sv.ui.LabelHeader);

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		top : Ti.App.size(120),
		left : 0,
		showVerticalScrollIndicator : true,
		height : Ti.UI.FILL
	});

	//Tao view Email
	sv.ui.ViewEmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(40),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelEmail = Ti.UI.createLabel({
		text : 'Email',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfEmail = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'gamevsgai@gmail.com',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center',
		},
	});

	//Tao view Tai Khoan
	sv.ui.ViewTaiKhoan = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(155),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelTaiKhoan = Ti.UI.createLabel({
		text : 'Tài khoản',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfTaiKhoan = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'LinhSon93',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
		},
	});

	//Tao view Mat Khau
	sv.ui.ViewMatKhau = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(270),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelMatKhau = Ti.UI.createLabel({
		text : 'Mật Khẩu',
		font : {
			fontSize : Ti.App.size(20),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
	});

	sv.ui.TfMatKhau = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		passwordMask : true,
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		value : 'chuthilinh',
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontWeight : 'bold',
		},
	});

	//tao view xac nhan
	sv.ui.ViewXacNhan = Ti.UI.createView({
		top : Ti.App.size(765),
		height : Ti.App.size(190),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.XacNhan = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(0),
		height : Ti.App.size(95),
		left : Ti.App.size(0),
		right : Ti.App.size(0)
	});

	sv.ui.LabelXacNhan = Ti.UI.createLabel({
		text : 'Xác nhận',
		font : {
			fontSize : Ti.App.size(22),
			fontFamily : 'Aria',
			fontColor : Ti.App.Color.white,
			fontWeight : 'bold',
		},
	});

	createUI_Event(sv);
	sv.ui.ViewIconLeft.addEventListener('click', sv.fu.event_btnclose);
	sv.ui.windowkqsx.addEventListener('open', sv.fu.event_openwin);
	sv.ui.windowkqsx.addEventListener('close', sv.fu.event_closewin);

	sv.ui.ViewTong.add(sv.ui.ViewEmail);
	sv.ui.ViewTong.add(sv.ui.ViewTaiKhoan);
	sv.ui.ViewTong.add(sv.ui.ViewMatKhau);
	sv.ui.ViewTong.add(sv.ui.ViewXacNhan);

	sv.ui.ViewEmail.add(sv.ui.LabelEmail);
	sv.ui.ViewEmail.add(sv.ui.TfEmail);

	sv.ui.ViewTaiKhoan.add(sv.ui.LabelTaiKhoan);
	sv.ui.ViewTaiKhoan.add(sv.ui.TfTaiKhoan);

	sv.ui.ViewMatKhau.add(sv.ui.LabelMatKhau);
	sv.ui.ViewMatKhau.add(sv.ui.TfMatKhau);

	sv.ui.ViewXacNhan.add(sv.ui.XacNhan);

	sv.ui.XacNhan.add(sv.ui.LabelXacNhan);
	sv.ui.windowkqsx.add(sv.ui.ViewTong);
}

function createUI_Event(sv) {
	sv.fu.event_btnclose = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open');
	};
	sv.fu.event_closewin = function(e) {
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.event_btnclose);
		sv.ui.windowkqsx.removeEventListener('open', sv.fu.event_openwin);
		sv.ui.windowkqsx.removeEventListener('close', sv.fu.event_closewin);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}
