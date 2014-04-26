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
	sv.vari.view_keo = require('/ui/view_keo');
};
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.SIZE
	});
	sv.ui.vHeader = Titanium.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.App.size(118),
		backgroundColor : 'red'
	});
	sv.ui.ngay = Ti.UI.createView({
		top : Ti.App.size(28),
		width : Ti.App.size(640),
		height : Ti.App.size(80),
		borderColor : Ti.App.Color.superwhite,
		borderWidth : 1,
		borderRadius : 3,
		backgroundColor : 'transparent'
	});
	sv.ui.vHeader.add(sv.ui.ngay);
	sv.ui.lbl_hqa = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		text : 'Hôm qua',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		width : Ti.App.size(220),
		left : 0,
		font : {
			fontSize : Ti.App.size(30)
		},
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_hqa);

	sv.ui.lbl_hnay = Ti.UI.createLabel({
		backgroundColor : Ti.App.Color.superwhite,
		text : 'Hôm nay',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		width : Ti.App.size(220),
		left : Ti.App.size(220),
		font : {
			fontSize : Ti.App.size(30)
		},
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_hnay);

	sv.ui.lbl_mai = Ti.UI.createLabel({
		backgroundColor : 'transparent',
		text : 'Ngày mai',
		backgroundSelectedColor : Ti.App.Color.superwhite,
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		width : Ti.App.size(220),
		font : {
			fontSize : Ti.App.size(30)
		},
		right : 0,
		height : Ti.App.size(80),
		highlightedColor : 'yellow'
	});
	sv.ui.ngay.add(sv.ui.lbl_mai);

	sv.ui.ViewTong.add(sv.ui.vHeader);

	////////
	sv.ui.scrollview = Ti.UI.createScrollView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(118),
		left : 0,
		showVerticalScrollIndicator : true
	});
	sv.ui.ViewTong.add(sv.ui.scrollview);
	sv.ui.vChua = Ti.UI.createView({
		top : Ti.App.size(20),
		left : 0,
		right : 0,
		backgroundColor : 'transparent',
		height : Ti.UI.SIZE
	});
	sv.ui.scrollview.add(sv.ui.vChua);
	for (var i = 0; i < 1; i++) {
		sv.ui.vTong = new sv.vari.view_keo(Ti.App.size(400) * (i), 55, ["Manchester", "Chealse"], ["1.5", "1.09", "0.84"], ["1.5", "1.09", "0.84", "u"], ["1.5", "1.09", "0.84"]);
		sv.ui.vChua.add(sv.ui.vTong);
	};
}

function createRemove(sv) {
	sv.removeAllEvent = function() {
		Ti.API.info('da remove xong ');
	};
}
