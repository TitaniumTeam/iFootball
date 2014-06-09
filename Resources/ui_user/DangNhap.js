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
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.vari.wd_home = require('/ui_app/MenuTong');
	sv.vari.windk = require('/ui_user/WindowDK');
}

function createUI(sv) {
	sv.ui.Window = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.white,
		navBarHidden : true,
		exitOnClose : true,
		orientationModes : [Ti.UI.PORTRAIT],
		keepScreenOn : true,
	});
	sv.ui.ViewHeader = Titanium.UI.createView({
		left : 0,
		backgroundColor : Ti.App.Color.red,
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		top : 0
	});
	sv.ui.Window.add(sv.ui.ViewHeader);

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

	sv.ui.viewtong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : Ti.App.size(100),
		left : 0
	});

	//tao view header

	sv.ui.headerdangnhap = Ti.UI.createLabel({
		text : 'ĐĂNG NHẬP',
		font : {
			fontSize : Ti.App.size(32),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.white,
		touchEnabled : false
		// top : Ti.App.size(40),
		// bottom : Ti.App.size(40),
	});
	sv.ui.ViewHeader.add(sv.ui.headerdangnhap);
	//tao view dang nhap bang facebook
	sv.ui.viewdnface = Ti.UI.createView({
		backgroundColor : Ti.App.Color.blue,
		height : Ti.App.size(95),
		top : Ti.App.size(50),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		backgroundSelectedColor : Ti.App.Color.magenta
	});

	sv.ui.iconface = Ti.UI.createImageView({
		left : Ti.App.size(30),
		height : Ti.App.size(48),
		width : Ti.App.size(40),
		image : '/assets/images/icon/icon-fb.png',
		touchEnabled : false
	});

	sv.ui.iconlinednface = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.labeldnface = Ti.UI.createLabel({
		text : 'Đăng nhập bằng facebook',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		left : Ti.App.size(210),
		right : Ti.App.size(120),
		bottom : Ti.App.size(30),
	});

	//tao view dang nhap bang gmail
	sv.ui.viewdngmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.red,
		height : Ti.App.size(95),
		top : Ti.App.size(165),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		backgroundSelectedColor : Ti.App.Color.xanhnhat
	});

	sv.ui.icongmail = Ti.UI.createImageView({
		left : Ti.App.size(30),
		height : Ti.App.size(48),
		width : Ti.App.size(40),
		image : '/assets/images/icon/icon-gmail.png',
		touchEnabled : false
	});

	sv.ui.iconlinedngmail = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		width : Ti.App.size(2),
		right : Ti.App.size(588),
		top : Ti.App.size(15),
		bottom : Ti.App.size(15),
	});

	sv.ui.labeldngmail = Ti.UI.createLabel({
		text : 'Đăng nhập bằng gmail',
		font : {
			fontSize : Ti.App.size(26),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.white,
		top : Ti.App.size(30),
		left : Ti.App.size(235),
		right : Ti.App.size(140),
		bottom : Ti.App.size(30),
	});

	//tao view hoac
	sv.ui.viewhoac = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(260),
		height : Ti.App.size(100),
		//bottom : Ti.App.size(675),
	});

	sv.ui.linetrai = Ti.UI.createView({
		height : Ti.App.size(2),
		left : 0,
		right : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});

	sv.ui.linephai = Ti.UI.createView({
		height : Ti.App.size(2),
		right : 0,
		left : Ti.App.size(415),
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.labelhoac = Ti.UI.createLabel({
		text : 'hoặc',
		font : {
			fontSize : Ti.App.size(23),
			fontFamily : 'Aria'
		},
	});

	//nhap tai khoan, mat khau

	sv.ui.tfid = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		height : Ti.App.size(95),
		top : Ti.App.size(380),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		hintText : 'Nhập tài khoản',
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(1),
		font : {
			fontSize : Ti.App.size(40),
		},
		autocorrect : false,
		color : Ti.App.Color.nauden
	});

	sv.ui.tfpass = Ti.UI.createTextField({
		height : Ti.App.size(95),
		top : Ti.App.size(500),
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		hintText : 'Nhập mật khẩu',
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(1),
		font : {
			fontSize : Ti.App.size(40),
		},
		autocorrect : false,
		color : Ti.App.Color.nauden,
		passwordMask : true
	});
	//tao view dang nhap, view dang ky
	sv.ui.viewdangnhap = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(635),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.gray,
		backgroundSelectedColor : Ti.App.Color.magenta
	});

	sv.ui.labelviewdn = Ti.UI.createLabel({
		text : 'Đăng nhập',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false
	});

	sv.ui.viewdangky = Ti.UI.createView({
		left : Ti.App.size(20),
		right : Ti.App.size(20),
		top : Ti.App.size(750),
		height : Ti.App.size(95),
		backgroundColor : Ti.App.Color.nauden,
		backgroundSelectedColor : Ti.App.Color.green
	});

	sv.ui.labelviewdk = Ti.UI.createLabel({
		text : 'Đăng ký',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.superwhite,
		touchEnabled : false
	});

	//tao quen mat khau

	sv.ui.viewquenpass = Ti.UI.createView({
		top : Ti.App.size(880),
		height : Ti.App.size(195),
		left : 0,
		right : 0
	});

	sv.ui.lablequenpass = Ti.UI.createLabel({
		text : 'Bạn quên mật khẩu?',
		font : {
			fontSize : Ti.App.size(30),
		},
		color : Ti.App.Color.nauden,
		top : Ti.App.size(5),
		backgroundColor : 'transparent',
		width : Ti.App.size(340),
		height : Ti.App.size(95),
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		textAlign : 'center'
	});

	createUI_Event(sv);

	sv.ui.viewdnface.addEventListener('click', sv.fu.eventClickviewdnface);
	sv.ui.viewdngmail.addEventListener('click', sv.fu.eventClickviewdngmail);
	sv.ui.viewdangnhap.addEventListener('click', sv.fu.eventClickviewdangnhap);
	sv.ui.viewdangky.addEventListener('click', sv.fu.eventClickviewdangky);
	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.ViewBack.addEventListener('click', sv.fu.openMenuTong);
	sv.ui.Window.add(sv.ui.viewtong);

	sv.ui.viewtong.add(sv.ui.viewdnface);
	sv.ui.viewtong.add(sv.ui.viewdngmail);
	sv.ui.viewtong.add(sv.ui.viewhoac);
	sv.ui.viewtong.add(sv.ui.tfid);
	sv.ui.viewtong.add(sv.ui.tfpass);
	sv.ui.viewtong.add(sv.ui.viewdangnhap);
	sv.ui.viewtong.add(sv.ui.viewdangky);
	sv.ui.viewtong.add(sv.ui.viewquenpass);

	sv.ui.viewdnface.add(sv.ui.iconface);
	sv.ui.viewdnface.add(sv.ui.iconlinednface);
	sv.ui.viewdnface.add(sv.ui.labeldnface);

	sv.ui.viewdngmail.add(sv.ui.icongmail);
	sv.ui.viewdngmail.add(sv.ui.iconlinedngmail);
	sv.ui.viewdngmail.add(sv.ui.labeldngmail);

	sv.ui.viewhoac.add(sv.ui.linetrai);
	sv.ui.viewhoac.add(sv.ui.linephai);
	sv.ui.viewhoac.add(sv.ui.labelhoac);

	sv.ui.viewdangnhap.add(sv.ui.labelviewdn);

	sv.ui.viewdangky.add(sv.ui.labelviewdk);

	sv.ui.viewquenpass.add(sv.ui.lablequenpass);
}

function createUI_Event(sv) {
	sv.fu.openMenuTong = function(e) {
			back_home(sv);
	};
	sv.fu.eventClickviewdnface = function(e) {
	};

	sv.fu.eventClickviewdngmail = function(e) {
	};
	sv.fu.eventClickviewdangnhap = function(e) {
		if (sv.ui.tfpass.value == "" || sv.ui.tfid == "") {
			alert("Bạn chưa nhập username và password");

		} else {
			dangnhap({
				"username" : sv.ui.tfid.value,
				"password" : sv.ui.tfpass.value
			}, sv);
		}

	};

	sv.fu.eventClickviewdangky = function(e) {
		sv.vari.windangki = new sv.vari.windk();
		sv.vari.windangki.open();
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.viewdnface.removeEventListener('click', sv.fu.eventClickviewdnface);
		sv.ui.viewdngmail.removeEventListener('click', sv.fu.eventClickviewdngmail);
		sv.ui.viewdangnhap.removeEventListener('click', sv.fu.eventClickviewdangnhap);
		sv.ui.viewdangky.removeEventListener('click', sv.fu.eventClickviewdangky);
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.ViewBack.removeEventListener('click', sv.fu.openMenuTong);

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window dang nhap');
	};
}

function dangnhap(data, sv) {

	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		alert('Kiểm tra kết nối mạng');
	} else {

		var xhr = Titanium.Network.createHTTPClient();
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=login');
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
			Ti.API.info('json' + jsonResuilt.result.code);
			if (jsonResuilt.result.code == "0") {
				var db = Ti.Database.open('userinfo');
				var sql = db.execute("SELECT * FROM SaveInfo");

				var username = jsonResuilt.info.username;
				var type = jsonResuilt.info.type;
				var balance = jsonResuilt.info.balance;
				Ti.API.info('dang nhap thanh cong');
				db.execute('INSERT INTO SaveInfo(username,type,balance) VALUES(?,?,?)', username, type, balance);
				get_menu({
					"username" : username
				}, sv);
				sql.close();
				db.close();
			} else {
				alert('Sai username hoặc password');
			}
		};

	}
};
function get_menu(data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
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
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		var db = Ti.Database.open('userinfo');
		var sql = db.execute("SELECT * FROM SaveInfo");
		var username = sql.fieldByName("username");
		Ti.API.info('username' + username);
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			if (jsonResuilt.menus[i].params) {
				Ti.API.info('tendv' + jsonResuilt.menus[i].action);
				Ti.API.info('name' + jsonResuilt.menus[i].name);
				Ti.API.info('gia' + jsonResuilt.menus[i].price);
				Ti.API.info('param' + jsonResuilt.menus[i].params);
				Ti.API.info('param' + jsonResuilt.menus[i].servicenumber);
				db.execute('INSERT INTO DichVu(tendv,dauso,servicenumber,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, jsonResuilt.menus[i].params, jsonResuilt.menus[i].price);
			} else {
				db.execute('INSERT INTO DichVu(tendv,dauso,servicenumber,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, "", jsonResuilt.menus[i].price);
			}

		}
		var menutong = require('/ui_app/MenuTong');
		var home = new menutong();
		home.ui.win.open();
		sv.ui.Window.close();
		sql.close();
		db.close();
	};
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

		} else {
			sv.ui.Window.close();
		}

	};
}
