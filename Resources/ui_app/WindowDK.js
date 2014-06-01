module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();
	return sv.ui.WindowDK;
};

///tao bien
function tao_bien(sv) {
	sv.vari.wd_dn = require('/ui_app/DangNhap');
	// sv.vari.txt1 = 'Nhập tài khoản';
	// sv.vari.txt2 = 'Nhập mật khẩu';
	// if(Ti.Platform.osname=="iPad"||Ti.Platform.osname=="iPhone OS"){
	// sv.vari.attr1 = Titanium.UI.iOS.createAttributedString({
	// text : sv.vari.txt1,
	// attributes :[{
	// type : Titanium.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
	// value : 'white',
	// range : [0, sv.vari.txt1.length]
	// },]
	// });
	// sv.vari.attr2 = Titanium.UI.iOS.createAttributedString({
	// text : sv.vari.txt2,
	// attributes :[{
	// type : Titanium.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
	// value : 'white',
	// range : [0, sv.vari.txt2.length]
	// },]
	//
	// });
	// }

};

/*khoi tao UI
 */
function tao_ui(sv) {
	sv.ui.WindowDK = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.red,
		navBarHidden : true,
		exitOnClose : true,
		orientationModes : [Ti.UI.PORTRAIT],
		keepScreenOn : true,

	});
	sv.ui.scrollView = Ti.UI.createScrollView({
		left : 0,
		top : 0,
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
	sv.ui.lbl_Login = Ti.UI.createLabel({
		width : Ti.App.size(280),
		text : 'ĐĂNG KÝ',
		color : Ti.App.Color.white,
		font : {
			fontSize : Ti.App.size(50)
		},
		top : Ti.App.size(30),
		touchEnabled : false
	});
	sv.ui.scrollView.add(sv.ui.lbl_Login);
	sv.ui.view_avatar = Titanium.UI.createView({
		width : Ti.App.size(456),
		height : Ti.App.size(456),
		backgroundImage : "/assets/images/icon/xxxjav.png",
		top : Ti.App.size(30),
		touchEnabled : false
	});
	sv.ui.scrollView.add(sv.ui.view_avatar);
	sv.ui.avatar = Ti.UI.createImageView({
		width : Ti.App.size(180),
		height : Ti.App.size(180),
		image : '/assets/images/icon/avatar-defaut.png',
		touchEnabled : false
	});
	sv.ui.view_avatar.add(sv.ui.avatar);
	sv.ui.txtUser = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : Ti.App.size(5),
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(100),
		autocorrect : false,
		hintText : 'Nhập tài khoản',
	});

	sv.ui.scrollView.add(sv.ui.txtUser);
	sv.ui.txtPassword = Ti.UI.createTextField({
		width : Ti.App.size(680),
		height : Ti.App.size(90),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : Ti.App.size(5),
		textAlign : 'center',
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.superwhite,
		font : {
			fontSize : Ti.App.size(40)
		},
		top : Ti.App.size(30),
		autocorrect : false,
		hintText : 'Nhập mật khẩu'
	});

	sv.ui.scrollView.add(sv.ui.txtPassword);
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
	tao_event(sv);
	sv.ui.btn_dangki.addEventListener('click', sv.fu.event_dk);
	sv.ui.WindowDK.addEventListener('open', sv.fu.openWindow);
	sv.ui.WindowDK.addEventListener('close', sv.fu.closeWindow);
	////////////////
}

function tao_event(sv) {
	sv.fu.openWindow = function(e) {
		Ti.API.info('open window');
	};
	sv.fu.event_dk = function(e) {
		if (sv.ui.txtUser.value == "" || sv.ui.txtPassword.value == "") {
			alert("Bạn chưa nhập username hoặc password");
		} else {
			fn_updateImage2Server("register", {
				"username" : sv.ui.txtUser.value,
				"password" : sv.ui.txtPassword.value
			}, sv);
		}

	};
	sv.fu.closeWindow = function(e) {
		Ti.API.info('close wd dang ki');
		sv.ui.btn_dangki.removeEventListener('click', sv.fu.event_dk);
		sv.ui.WindowDK.removeEventListener('open', sv.fu.openWindow);
		sv.ui.WindowDK.removeEventListener('close', sv.fu.closeWindow);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

function fn_updateImage2Server(_cmd, data, sv) {
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
				sv.vari.wd_dangnhap = new sv.vari.wd_dn();
				sv.vari.wd_dangnhap.open();
				sv.ui.WindowDK.close();
				Ti.API.info('dang ki thanh cong');
			} else {
				alert('Username đã bị sử dụng');
			}
		};
	}
};