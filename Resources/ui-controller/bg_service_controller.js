function bg_service_controller() {
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
		var currmin = new Date().getMinutes();
		if ((curhour == 18) && (30 >= currmin >= 0)) {
			service.start();
		}
		service.addEventListener('pause', function(e) {
			intent.putExtra('interval', deltaMS);
			intent.putExtra('message', 'Back ground service');
		});

	}
};
module.exports=bg_service_controller;
