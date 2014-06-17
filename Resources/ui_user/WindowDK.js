module.exports = function(_currWin) {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv,_currWin);
	})();
	return sv.ui.WindowDK;
};

///tao bien
function tao_bien(sv) {
	sv.vari.wd_dn = require('/ui_user/DangNhap');
	sv.vari.wd_home = require('/ui_app/MenuTong');

};

/*khoi tao UI
 */
function tao_ui(sv,_currWin) {
	sv.ui.WindowDK = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.red,
		navBarHidden : true,
		// exitOnClose : true,
		orientationModes : [Ti.UI.PORTRAIT],
		keepScreenOn : true,

	});
	sv.ui.ViewHeader = Titanium.UI.createView({
		left : 0,
		backgroundColor : 'transparent',
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		top : 0
	});
	sv.ui.WindowDK.add(sv.ui.ViewHeader);
	sv.ui.ViewBack = Titanium.UI.createView({
		width : Ti.App.size(100),
		height : Ti.App.size(100),
		left : 0,
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat
	});
	sv.ui.ViewHeader.add(sv.ui.ViewBack);
	sv.ui.iconBack = Titanium.UI.createImageView({
		width : Ti.App.size(22),
		height : Ti.App.size(42),
		touchEnabled : false,
		backgroundImage : '/assets/images/icon/arrow.png'
	});
	sv.ui.ViewBack.add(sv.ui.iconBack);
	sv.ui.lbl_Login = Ti.UI.createLabel({
		width : Ti.App.size(280),
		text : 'ĐĂNG KÝ',
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(50)
		},
		touchEnabled : false,
		textAlign : 'center'
	});
	sv.ui.ViewHeader.add(sv.ui.lbl_Login);
	sv.ui.scrollView = Ti.UI.createScrollView({
		left : 0,
		top : Ti.App.size(100),
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : 'red',
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : false,
		disableBounce : true,
		scrollsToTop : false,
		horizontalBounce : true,
	});

	sv.ui.WindowDK.add(sv.ui.scrollView);
	sv.ui.view_avatar = Titanium.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(320),
		backgroundImage : "/assets/images/icon/xxxjav.png",
		top : Ti.App.size(30),
		touchEnabled : false
	});
	sv.ui.scrollView.add(sv.ui.view_avatar);
	sv.ui.avatar = Ti.UI.createImageView({
		height : Ti.App.size(150),
		width : Ti.App.size(150),
		image : '/assets/images/icon/avatar-defaut.png',
		touchEnabled : false
	});
	sv.ui.view_avatar.add(sv.ui.avatar);
	sv.ui.txtUser = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(30),
		autocorrect : false,
		hintText : 'Nhập tài khoản',
	});

	sv.ui.scrollView.add(sv.ui.txtUser);
	sv.ui.txtPassword = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(30),
		autocorrect : false,
		hintText : 'Nhập mật khẩu',
		passwordMask : true
	});

	sv.ui.scrollView.add(sv.ui.txtPassword);
	sv.ui.txtEmail = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(30),
		autocorrect : false,
		hintText : 'Nhập Email (không bắt buộc)'
	});

	sv.ui.scrollView.add(sv.ui.txtEmail);
	sv.ui.txtMobile = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(30),
		autocorrect : false,
		hintText : 'Nhập số điện thoại (không bắt buộc)'
	});

	sv.ui.scrollView.add(sv.ui.txtMobile);
	sv.ui.btn_dangki = Ti.UI.createLabel({
		width : Ti.App.size(680),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.gray,
		text : 'Đăng kí',
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(50)
		},
		top : Ti.App.size(50),
		backgroundSelectedColor : Ti.App.Color.xanhnhat
	});
	sv.ui.scrollView.add(sv.ui.btn_dangki);
	/////////////
	tao_event(sv,_currWin);
	sv.ui.btn_dangki.addEventListener('click', sv.fu.event_dk);
	sv.ui.WindowDK.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowDK.addEventListener('close', sv.fu.closeWindow);
	sv.ui.ViewBack.addEventListener('click', sv.fu.openMenuTong);
	sv.ui.WindowDK.addEventListener('android:back',sv.fu.fn_BackDevicePress);
	////////////////
}

function tao_event(sv,_currWin) {
	sv.fu.fn_BackDevicePress = function() {
		sv.ui.WindowDK.close();
	};
	sv.fu.openMenuTong = function(e) {
		sv.ui.WindowDK.close();
			// back_home(sv);
	};

	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.event_dk = function(e) {
		if (sv.ui.txtUser.value == "" || sv.ui.txtPassword.value == "") {
			alert("Bạn chưa nhập username hoặc password");
		} else {
			fn_updateImage2Server("register", {
				"username" : sv.ui.txtUser.value,
				"password" : sv.ui.txtPassword.value,
				"email" : sv.ui.txtEmail.value,
				"mobile" : sv.ui.txtMobile.value
			}, sv,_currWin);
		}

	};
	sv.fu.closeWindow = function(e) {
		Ti.API.info('close wd dang ki');
		sv.ui.btn_dangki.removeEventListener('click', sv.fu.event_dk);
		sv.ui.WindowDK.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowDK.removeEventListener('close', sv.fu.closeWindow);
		sv.ui.ViewBack.removeEventListener('click', sv.fu.openMenuTong);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

function fn_updateImage2Server(_cmd, data, sv,_currWin) {
	var xhr = Titanium.Network.createHTTPClient();
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		alert('Kiểm tra kết nối mạng');
	} else {
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
		xhr.setRequestHeader("Content-Type", "application/json-rpc");
		Ti.API.info(JSON.stringify(data));
		xhr.send(JSON.stringify(data));
		xhr.onerror = function(e) {
			Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
		};
		xhr.onload = function() {
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
			var dl = JSON.parse(this.responseText);
			var jsonResuilt = JSON.parse(dl);
			Ti.API.info('ket qua' + dl);
			Ti.API.info('json' + jsonResuilt.code);
			if (jsonResuilt.code == "0") {
				sv.vari.wd_dangnhap = new sv.vari.wd_dn(_currWin);
				sv.vari.wd_dangnhap.open();
				sv.ui.WindowDK.close();
				Ti.API.info('dang ki thanh cong');
			} else {
				alert('Username đã bị sử dụng');
			}
		};
	}
};
function back_home(sv) {
	var menutong = require('/ui_app/MenuTong');
	var xhr = Titanium.Network.createHTTPClient();
	data = {
		"username" : ""
	};
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=getmenu');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		// Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
		// var home = new menutong();
		// home.ui.win.open();

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		var dichvu = {};
		dichvu.param = [];
		dichvu.tendv = [];
		dichvu.dauso = [];
		dichvu.servicenumber = [];
		dichvu.gia = [];
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			if (jsonResuilt.menus[i].params) {
				dichvu.tendv.push(jsonResuilt.menus[i].name);
				dichvu.dauso.push(jsonResuilt.menus[i].action);
				dichvu.servicenumber.push(jsonResuilt.menus[i].servicenumber);
				dichvu.param.push(jsonResuilt.menus[i].params);
				dichvu.gia.push(jsonResuilt.menus[i].price);
			} else {
				dichvu.tendv.push(jsonResuilt.menus[i].name);
				dichvu.dauso.push(jsonResuilt.menus[i].action);
				dichvu.servicenumber.push(jsonResuilt.menus[i].servicenumber);
				dichvu.param.push("");
				dichvu.gia.push(jsonResuilt.menus[i].price);
			}
		}
		var home = new menutong(dichvu);
		home.ui.win.open();
		if (Ti.Platform.osname == 'android') {
			
		}
		else{
			sv.ui.WindowDK.close();
		}

	};
}
