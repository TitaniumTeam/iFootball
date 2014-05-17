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

	return sv;
};
function createVariable(sv) {

}

function createUI(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});

	sv.ui.ViewBangXepHang = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(20)
	});

	sv.ui.LabelBangXepHang = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Bảng xếp hạng',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	sv.ui.ViewThongTinBenLe = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(360),
		top : Ti.App.size(20)
	});

	sv.ui.LabelThongTinBenLe = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Thông tin bên lề',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	sv.ui.ViewCaCuoc = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(340)
	});

	sv.ui.LabelCaCuoc = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Cá Cược',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	sv.ui.ViewTranNgonAn = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(360),
		top : Ti.App.size(340)
	});
	sv.ui.LabelTranNgonAn = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Trận ngon ăn',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	sv.ui.ViewTranDauDangDienRa = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(360),
		top : Ti.App.size(660)
	});

	sv.ui.LabelTranDauDangDienRa = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Trân đấu đang diễn ra',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	sv.ui.ViewTranDauSapDienRa = Ti.UI.createView({
		width : Ti.App.size(320),
		height : Ti.App.size(300),
		backgroundColor : Ti.App.Color.xanhnhat,
		left : Ti.App.size(20),
		top : Ti.App.size(660)
	});

	sv.ui.LabelTranDauSapDienRa = Ti.UI.createLabel({
		width : Ti.UI.SIZE,
		height : Ti.UI.SIZE,
		text : 'Trận đấu sắp diễn ra',
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(50)
		}
	});

	createUI_Event(sv);

	sv.ui.ViewBangXepHang.addEventListener('click', sv.fu.eventClickViewBangXepHang);
	sv.ui.ViewCaCuoc.addEventListener('click', sv.fu.eventClickViewCaCuoc);
	sv.ui.ViewThongTinBenLe.addEventListener('click', sv.fu.eventClickViewThongTinBenLe);
	sv.ui.ViewTranDauDangDienRa.addEventListener('click', sv.fu.eventClickViewTranDauDangDienRa);
	sv.ui.ViewTranDauSapDienRa.addEventListener('click', sv.fu.eventClickViewTranDauSapDienRa);
	sv.ui.ViewTranNgonAn.addEventListener('click', sv.fu.eventClickViewTranNgonAn);

	sv.ui.ViewTong.add(sv.ui.ViewBangXepHang);
	sv.ui.ViewTong.add(sv.ui.ViewCaCuoc);
	sv.ui.ViewTong.add(sv.ui.ViewThongTinBenLe);
	sv.ui.ViewTong.add(sv.ui.ViewTranDauDangDienRa);
	sv.ui.ViewTong.add(sv.ui.ViewTranDauSapDienRa);
	sv.ui.ViewTong.add(sv.ui.ViewTranNgonAn);

	sv.ui.ViewBangXepHang.add(sv.ui.LabelBangXepHang);
	sv.ui.ViewCaCuoc.add(sv.ui.LabelCaCuoc);
	sv.ui.ViewThongTinBenLe.add(sv.ui.LabelThongTinBenLe);
	sv.ui.ViewTranDauDangDienRa.add(sv.ui.LabelTranDauDangDienRa);
	sv.ui.ViewTranDauSapDienRa.add(sv.ui.LabelTranDauSapDienRa);
	sv.ui.ViewTranNgonAn.add(sv.ui.LabelTranNgonAn);

}

function createUI_Event(sv) {
	sv.fu.eventClickViewBangXepHang = function(e) {
		Ti.API.info('Click');
	};

	sv.fu.eventClickViewCaCuoc = function(e) {
		Ti.API.info('Click');
		var newWindow = new (require('ui_bongda/Betting'))();
		newWindow.open();
	};

	sv.fu.eventClickViewThongTinBenLe = function(e) {
		Ti.API.info('Click');
	};

	sv.fu.eventClickViewTranDauDangDienRa = function(e) {
		Ti.API.info('Click');
	};

	sv.fu.eventClickViewTranDauSapDienRa = function(e) {
		Ti.API.info('Click');
	};

	sv.fu.eventClickViewTranNgonAn = function(e) {
		Ti.API.info('Click');
	};
}

function RemoveAllEvent(sv) {
	sv.removeAllEvent = function(e) {
		sv.ui.ViewBangXepHang.removeEventListener('click', sv.fu.eventClickViewBangXepHang);
		sv.ui.ViewCaCuoc.removeEventListener('click', sv.fu.eventClickViewCaCuoc);
		sv.ui.ViewThongTinBenLe.removeEventListener('click', sv.fu.eventClickViewThongTinBenLe);
		sv.ui.ViewTranDauDangDienRa.removeEventListener('click', sv.fu.eventClickViewTranDauDangDienRa);
		sv.ui.ViewTranDauSapDienRa.removeEventListener('click', sv.fu.eventClickViewTranDauSapDienRa);
		sv.ui.ViewTranNgonAn.removeEventListener('click', sv.fu.eventClickViewTranNgonAn);
		Ti.API.info('Đã remove xong');
	};
};

