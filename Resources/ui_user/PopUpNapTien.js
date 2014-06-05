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
}

function createUI(sv) {
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
		width : Ti.App.size(560),
		top : Ti.App.size(200)
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
		bottom : Ti.App.size(45),
		backgroundSelectedColor : Ti.App.Color.nauden
	});

	sv.ui.ThongBao1 = Ti.UI.createLabel({
		text : 'NẠP TIỀN',
		top : Ti.App.size(230),
		font : {
			fontSize : Ti.App.size(35),
			fontWeight : 'bold',
		},
		textAlign : 'center',
		color : Ti.App.Color.nauden,
	});

	sv.ui.txt_sotien = Ti.UI.createTextField({
		backgroundColor : Ti.App.Color.superwhite,
		hintText : 'Nhập số tiền muốn nạp',
		width : Ti.App.size(400),
		height : Ti.App.size(100),
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(30)
		},
		center : 'true',
		keyboardType : Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION,
		top : Ti.App.size(300),
		textAlign : 'center',
		borderColor:Ti.App.Color.xanhnhat
	});
	sv.ui.btn_nap = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.xanhnhat,
		width : Ti.App.size(300),
		height : Ti.App.size(95),
		text : "NẠP",
		textAlign : "center",
		bottom : Ti.App.size(30),
		font : {
			fontSize : Ti.App.size(30)
		},
		borderRadius : Ti.App.size(5),
		color : Ti.App.Color.nauden,
		backgroundSelectedColor : Ti.App.Color.nauden
	});
	createUI_Event(sv);

	sv.ui.Window.addEventListener('open', sv.fu.eventOpenWindow);
	sv.ui.Window.addEventListener('close', sv.fu.eventCloseWindow);
	sv.ui.Icon.addEventListener('click', sv.fu.eventClickIcon);
	sv.ui.btn_nap.addEventListener('click', sv.fu.eventClicknaptien);
	sv.ui.Window.add(sv.ui.ViewPopUp);

	sv.ui.ViewPopUp.add(sv.ui.ViewIcon);
	sv.ui.ViewPopUp.add(sv.ui.txt_sotien);
	sv.ui.ViewPopUp.add(sv.ui.btn_nap);
	sv.ui.ViewIcon.add(sv.ui.Icon);
	sv.ui.ViewPopUp.add(sv.ui.ThongBao1);
}

function createUI_Event(sv) {
	sv.fu.eventClicknaptien = function(e) {
		sv.vari.db = Ti.Database.open('userinfo');
		sv.vari.sql = sv.vari.db.execute('SELECT * FROM SaveInfo');
		sv.vari.username = sv.vari.sql.fieldByName("username");
		sv.vari.type = sv.vari.sql.fieldByName("type");
		naptien({
			"username" : sv.vari.username,
			"type" : sv.vari.type,
			"amount" : sv.ui.txt_sotien.value
		}, sv);
	};
	sv.fu.eventClickIcon = function(e) {
		sv.ui.Window.close();
	};

	sv.fu.eventOpenWindow = function(e) {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		sv.ui.Window.removeEventListener('open', sv.fu.eventOpenWindow);
		sv.ui.Window.removeEventListener('close', sv.fu.eventCloseWindow);
		sv.ui.Icon.removeEventListener('click', sv.fu.eventClickIcon);
		sv.ui.btn_nap.removeEventListener('click', sv.fu.eventClicknaptien);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
}

function naptien(data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=chargebalance');
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('code'+dl.code);
		// var jsonResuilt = JSON.parse(dl);
		if (dl.code == 0) {
			sv.vari.db.execute('UPDATE SaveInfo SET balance+=? WHERE username=?',dl.balance,sv.vari.username);
			sv.vari.sql.close();
			sv.vari.db.close();
			sv.ui.Window.close();
			sv.vari.popup_success = new (require('/ui_user/PopUpTrue'))();
			sv.vari.popup_success.ui.Window.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		} else {
			sv.vari.sql.close();
			sv.vari.db.close();
			sv.ui.Window.close();
			sv.vari.popup_success = new (require('/ui_user/PopUpFalse'))();
			sv.vari.popup_success.ui.Window.open({
				modal : Ti.Platform.osname == 'android' ? true : false
			});
		}

	};

};
