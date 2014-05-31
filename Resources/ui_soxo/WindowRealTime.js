module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		taobien(sv);
		tao_ui(sv);
		setParam(sv);
	})();
	return sv;
};

function taobien(sv) {
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.vari.bangkq = require('/ui_soxo/bangketquasx');
}

/*
 * khoi tao ui
 */
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top : 0,
		lef : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader = Ti.UI.createLabel({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : 0,
		top : 0,
		touchEnabled : false,
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'center',
		color : 'black'
	});
	sv.ui.ViewTong.add(sv.ui.ViewHeader);
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(70),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : Ti.App.Color.superwhite,
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
		height : Ti.UI.FILL
	});
	sv.ui.ViewTong.add(sv.ui.scrollView);
	sv.ui.bangkq = new sv.vari.bangkq(1);
	sv.ui.scrollView.add(sv.ui.bangkq);

};
function setParam(sv) {
	sv.setParam = function(param) {
		sv.ui.bangkq.setKQ(param);
	};
}

function setbg(i, _bg) {
	if (i == _bg) {
		return true;
	} else
		return false;
};
function setleft(j, _left) {
	if (j == _left) {
		return Ti.App.size(1);
	} else
		return Ti.App.size(74 * j);
};


