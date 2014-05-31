

Ti.API.info("hello from a background service!");

var alertCount = 0;
var notification = null;

function notify(resp) {
	// This creates the notification alert on a 'paused' app
	notification = Ti.App.iOS.scheduleLocalNotification({
		alertBody : resp,
		alertAction : "OK",
		userInfo : {
			"hello" : "world"
		},
		badge : alertCount,
		date : new Date(new Date().getTime() + 10)
	});
}

function checkFeed() {
	var curhour = new Date().getHours();
	if (curhour == 16) {
		notify("Dang quay so xo mien Nam");

	}
	if (curhour == 18) {
		notify("Dang quay so xo mien Bac");
	}
}

Ti.App.iOS.addEventListener('notification', function() {
	Ti.API.info('background event received = ' + notification);
	Ti.App.currentService.stop();
	Ti.App.currentService.unregister();
});
checkFeed();
// Kick off a timer to trigger a function called 'checkFeed' every 10 seconds (= 10000 ms)
//var timer = setInterval(checkFeed, 10000);

