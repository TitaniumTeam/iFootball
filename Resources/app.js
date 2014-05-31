if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
var menutong = (require('ui_app/MenuTong'));
new (require('ui-controller/AllData'));
fn_updateImage2Server("getmenu", {
	"username" : ""
});
function fn_updateImage2Server(_cmd, data) {
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
		mangdauso = ["", "", ""];
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
		var home = new menutong("free", mang_dauso);
		home.ui.win.open();
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
			url : '/ui_app/bg-service1.js'
		});
		Ti.API.info("registered background service = " + service);

	});
}
if (Ti.Platform.osname == "android") {
	var intent = Ti.Android.createServiceIntent({
		url : '/ui_app/android_bgservice.js'
	});
	var now = new Date().getTime();
	var delta = new Date(now + 1000);
	var deltaMS = delta - now;
	var curhour = new Date().getHours();
	var service = Titanium.Android.createService(intent);
	service.start();
	service.addEventListener('pause', function(e) {
		intent.putExtra('interval', deltaMS);
		intent.putExtra('message', 'This is that little extra');
	});

}
