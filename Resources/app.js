if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
var menutong = (require('ui_app/MenuTong'));
new (require('ui-controller/AllData'));
var db = Ti.Database.open('userinfo');
db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type TEXT,balance TEXT,action1 TEXT,action2 TEXT);');
var sql = db.execute("SELECT * FROM SaveInfo");
Ti.API.info('du lieu' + sql.getRowCount());
if (sql.isValidRow()) {
	var username = sql.fieldByName("username");
	fn_updateImage2Server("getmenu", {
		"username" : username.toString()
	}, username.toString());
	sql.close();
	db.close();
} else {
	fn_updateImage2Server("getmenu", {
		"username" : ""
	}, "free");
	sql.close();
	db.close();
}

function fn_updateImage2Server(_cmd, data, _quyen) {
	var xhr = Titanium.Network.createHTTPClient();
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

		var mangdauso = ["b2", "kq"];
		var home = new menutong("free", mangdauso);
		home.ui.win.open();

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		var mang_dauso = [];
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			mang_dauso.push(jsonResuilt.menus[i].action);
		}
		for (var i = 0; i < (mang_dauso.length); i++) {
			Ti.API.info('dau so: ' + mang_dauso[i]);
		};
		var home = new menutong(_quyen, mang_dauso);
		home.ui.win.open();
		if (sql.isValidRow()) {
			db.execute('INSERT INTO SaveInfo(action1,action2) VALUES(?,?)', mang_dauso[0], mang_dauso[1]);
		}
	};

};

function isiOS4Plus() {
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0]);
		if (major >= 4) {
			return true;
		}
	}
	return false;
}

if (isiOS4Plus()) {

	var service;
	Ti.App.addEventListener('resume', function(e) {
		Ti.API.info("app is resuming from the background");
	});
	Ti.App.addEventListener('resumed', function(e) {

		Ti.API.info("app has resumed from the background");
		// this will unregister the service if the user just opened the app
		// is: not via the notification 'OK' button..
		if (service != null) {
			service.stop();
			service.unregister();
		}
		Titanium.UI.iPhone.appBadge = null;
	});
	Ti.App.addEventListener('pause', function(e) {
		Ti.API.info("app was paused from the foreground");
		service = Ti.App.iOS.registerBackgroundService({
			url : 'ios_bgservice.js'
		});
		Ti.API.info("registered background service = " + service);

	});
}
if (Ti.Platform.osname == "android") {
	var intent = Ti.Android.createServiceIntent({
		url : 'android_bgservice.js'
	});
	var now = new Date().getTime();
	var delta = new Date(now + 1000);
	var deltaMS = delta - now;
	var service = Titanium.Android.createService(intent);
	var curhour = new Date().getHours();
	var currmin=new Date().getMinutes();
	// if ((curhour == 18)&&(30>=currmin>=0)) {
		service.start();
	// }
	service.addEventListener('pause', function(e) {
		intent.putExtra('interval', deltaMS);
		intent.putExtra('message', 'This is that little extra');
	});

}
