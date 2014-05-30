module.exports = function() {
	if (Ti.Platform.osname == "android") {
		push_android();
	} else {
		if (Ti.Platform.osname == "iPhone OS" || Ti.Platform.osname == "iPad") {
			push_ios();
		}
	}
	///function push android
	function push_android() {
		var deviceToken;
		var CloudPush = require('ti.cloudpush');
		//fetch device token
		(function token() {
			CloudPush.retrieveDeviceToken({
				success : function deviceTokenSuccess(e) {
					deviceToken = e.deviceToken;
					Ti.API.info('Device Token: ' + deviceToken);
					Ti.API.info('Device Token: ' + e.deviceToken);
				},
				error : function deviceTokenError(e) {
					Ti.API.info('Failed to register for push! ' + e.error);
				}
			});
		})();

		CloudPush.debug = true;
		CloudPush.enabled = true;
		CloudPush.showTrayNotificationsWhenFocused = true;
		CloudPush.focusAppOnPush = false;
		var Cloud = require('ti.cloud');
		Cloud.debug = true;
		function defaultSubscribe() {
			Cloud.PushNotifications.subscribe({
				channel : 'bestteam', //'alert' is channel name
				device_token : deviceToken,
				type : 'gcm' //here i am using gcm, it is recomended one
			}, function(e) {
				if (e.success) {
					alert('Subscribed for Push Notification!');
				} else {
					alert('Subscrib error:' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		}

		(function loginDefault(e) {
			//Create a Default User in Cloud Console, and login with same credential
			Cloud.Users.login({
				login : 'kimnamcham',
				password : 'mjnhmap1392'
			}, function(e) {
				if (e.success) {
					alert("Login success");
					defaultSubscribe();
				} else {
					alert('Login error: ' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		})();
		CloudPush.addEventListener('callback', function(evt) {
			alert(evt.payload);
		});
		CloudPush.addEventListener('trayClickLaunchedApp', function(evt) {
			Ti.API.info('@@## Tray Click Launched App (app was not running)');
		});
		CloudPush.addEventListener('trayClickFocusedApp', function(evt) {
			Ti.API.info('@@## Tray Click Focused App (app was already running)');
		});
	};
	function push_ios() {
		var Cloud = require('ti.cloud');
		var deviceToken;

		(function login() {
			Cloud.Users.login({
				login : 'kimnamcham',
				password : 'mjnhmap1392'
			}, function(e) {
				if (e.success) {
					var user = e.users[0];
					alert("Loggin successfully");
				} else {
					alert("Error :" + e.message);
				}
			});
		})();

		(function registerForPush() {
			Cloud.PushNotifications.subscribe({
				channel : 'demo_alert',
				type : 'ios',
				device_token : deviceToken
			}, function(e) {
				if (e.success) {
					alert('Success :' + ((e.error && e.message) || JSON.stringify(e)));
				} else {
					alert('Error:' + ((e.error && e.message) || JSON.stringify(e)));
				}
			});
		})();

	};
};
