module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_ui(sv);
		setParam(sv);
		setTuVan(sv);
	})();

	return sv;
};
function tao_ui(sv) {
	sv.ui.Vcontent = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(140),
		backgroundColor : 'transparent',
		left : 0,
	});
	sv.ui.vLine = Titanium.UI.createView({
		width : Ti.App.size(720),
		bottom : 0,
		height : Ti.App.size(3),
		left : 0,
		touchEnabled : false,
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.xanhnhat,
				position : 0.5
			}, {
				color :Ti.App.Color.xanhnhat,
				position : 0.5
			}]
		},
	});
	sv.ui.Vcontent.add(sv.ui.vLine);
	sv.ui.ViewTuVan=Titanium.UI.createView({
		width : Ti.App.size(140),
		height : Ti.App.size(140),
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		top : 0,
		right:0,
	});
	sv.ui.Vcontent.add(sv.ui.ViewTuVan);
	sv.ui.img_tuvan=Titanium.UI.createImageView({
		width:Ti.App.size(74),
		height:Ti.App.size(59),
		image:'/assets/images/icon/icon-eye.png'
	});
	sv.ui.ViewTuVan.add(sv.ui.img_tuvan);
	sv.ui.Viewthongtin = Titanium.UI.createView({
		width : Ti.App.size(580),
		height : Ti.App.size(140),
		backgroundColor : 'transparent',
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		left : 0,
		top : 0,
	});
	sv.ui.Vcontent.add(sv.ui.Viewthongtin);
	sv.ui.lbl_thoigian = Ti.UI.createLabel({
		top : Ti.App.size(20),
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : 'black',
		font : {
			fontSize : Ti.App.size(30),
		},
		textAlign : 'left',
		left : Ti.App.size(20),
		touchEnabled : false
	});
	sv.ui.Viewthongtin.add(sv.ui.lbl_thoigian);
	sv.ui.lbl_tendoi = Ti.UI.createLabel({
		top : Ti.App.size(70),
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		color : 'black',
		font : {
			fontSize : Ti.App.size(30)
		},
		textAlign : 'left',
		left : Ti.App.size(20),
		touchEnabled : false
	});
	sv.ui.Viewthongtin.add(sv.ui.lbl_tendoi);
}

function setParam(sv) {
	sv.setParam = function(_top, param) {
		sv.ui.Vcontent.top = _top;
		sv.ui.lbl_thoigian.text = param.thoigian + '-' + param.ngay;
		sv.ui.lbl_tendoi.text = param.tendoi1 + ' VS ' + param.tendoi2;
	};
};
function setTuVan(sv){
	sv.setTuVan=function(_visible){
		sv.ui.ViewTuVan.visible=_visible;
	};
};