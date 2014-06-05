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
		createRemove(sv);
	})();

	return sv;
};

function createVariable(sv) {
}

function createUI(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		// height : Ti.App.heightScreen,
		top : 0,
		left : 0,
		showVerticalScrollIndicator : true
	});
	sv.ui.lblHeader = Titanium.UI.createLabel({
		backgroundColor : 'transparent',
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : Ti.App.Color.nauden,
		top : Ti.App.size(30),
		text : "THAY ĐỔI MẬT KHẨU",
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		touchEnabled : false
	});
	sv.ui.ViewTong.add(sv.ui.lblHeader);
	sv.ui.LabelName = Ti.UI.createLabel({
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.nauden,
		top : Ti.App.size(100),
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		touchEnabled : false,
	});
	sv.ui.ViewTong.add(sv.ui.LabelName);
	sv.vari.db = Ti.Database.open('userinfo');
	sv.vari.sql = sv.vari.db.execute("SELECT * FROM SaveInfo");
	sv.ui.LabelName.text = sv.vari.sql.fieldByName("username");
	sv.vari.sql.close();
	sv.vari.db.close();
	//Tao view Email
	sv.ui.ViewMKCu = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(150),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelMKCu = Ti.UI.createLabel({
		text : 'Mật khẩu cũ',
		font : {
			fontSize : Ti.App.size(25),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
		color : Ti.App.Color.nauden
	});

	sv.ui.TftMKCu = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(25),
			fontFamily : 'Aria',
			fontWeight : 'bold',
			textAlign : 'center',
		},
	});

	//Tao view Tai Khoan
	sv.ui.ViewMKMoi = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(270),
		height : Ti.App.size(95),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});

	sv.ui.LabelMKMoi = Ti.UI.createLabel({
		text : 'Mật khẩu mới',
		font : {
			fontSize : Ti.App.size(25),
			fontFamily : 'Aria',
			textAlign : 'left'
		},
		right : Ti.App.size(490),
		left : Ti.App.size(10),
		color : Ti.App.Color.nauden
	});

	sv.ui.TftMKMoi = Ti.UI.createTextField({
		//bottom : Ti.App.size(580),
		bottom : Ti.App.size(15),
		top : Ti.App.size(15),
		left : Ti.App.size(190),
		right : Ti.App.size(10),
		color : Ti.App.Color.white,
		backgroundColor : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(25),
			fontFamily : 'Aria',
			fontWeight : 'bold',
		},
	});

	sv.ui.XacNhan = Ti.UI.createLabel({
		text : 'XÁC NHẬN',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold',
		},
		color : Ti.App.Color.nauden,
		backgroundColor : Ti.App.Color.green,
		width : Ti.App.size(480),
		height : Ti.App.size(100),
		textAlign : 'center',
		borderColor : Ti.App.Color.magenta,
		borderWidth : Ti.App.size(3),
		top : Ti.App.size(420)
	});

	createUI_Event(sv);

	sv.ui.XacNhan.addEventListener('click', sv.fu.event_xacnhan);

	sv.ui.ViewTong.add(sv.ui.ViewMKMoi);
	sv.ui.ViewTong.add(sv.ui.ViewMKCu);
	sv.ui.ViewTong.add(sv.ui.XacNhan);

	sv.ui.ViewMKMoi.add(sv.ui.LabelMKMoi);
	sv.ui.ViewMKMoi.add(sv.ui.TftMKMoi);

	sv.ui.ViewMKCu.add(sv.ui.LabelMKCu);
	sv.ui.ViewMKCu.add(sv.ui.TftMKCu);

}

function createUI_Event(sv) {
	sv.fu.event_xacnhan = function(e) {
		thaydoi_info({
			"username" : sv.ui.LabelName.text,
			"pass" : sv.ui.TftMKCu.value,
			"newpass" : sv.ui.TftMKMoi.value,
		}, sv);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;
		Ti.API.info('da remove xong ');
	};
}

function thaydoi_info(data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=changepass');
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
		Ti.API.info('code'+jsonResuilt.code);
		if (jsonResuilt.code == 0) {
			sv.vari.popup_success = new (require('/ui_user/PopUpTrue'))();
			sv.vari.popup_success.setText('Thay đổi mật khẩu thành công');
			sv.vari.popup_success.ui.Window.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		} else {
			sv.vari.popupfalse = new (require('/ui_user/PopUpFalse'))();
			sv.vari.popupfalse.setText('Thay đổi mật khẩu thất bại');
			sv.vari.popupfalse.ui.Window.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		}

	};

};
