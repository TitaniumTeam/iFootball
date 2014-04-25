module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
		createRemove(sv);
	})();

	return sv;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
};
function tao_ui(sv) {
	sv.ui.view_keo = require('/ui/view_keo');
	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : 0,
		left : 0
	});
	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	sv.ui.ViewTong.add(sv.ui.vChua);
	for (var i = 0; i < 5; i++) {
		sv.ui.vTong = new sv.ui.view_keo(Ti.App.size(400) * (i), 55, ["Manchester", "Chealse"], ["1.5", "1.09", "0.84"], ["1.5", "1.09", "0.84", "u"], ["1.5", "1.09", "0.84"]);
		sv.ui.vChua.add(sv.ui.vTong);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('remove event thong tin tran dau');
	};
}

