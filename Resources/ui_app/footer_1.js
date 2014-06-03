module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv);
	})();

	return sv;
};
function taobien(sv) {
	sv.arr.icon_footer1 = [];
	sv.arr.icon_footer3 = [];
	sv.arr.img_footer3 = [{
		bg : "/assets/images/icon/icon-ketqua.png",
		press : "/assets/images/icon/icon-ketqua_press.png",
		title : "Kết quả"
	}, {
		bg : "/assets/images/icon/icon-thongke.png",
		press : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-vip.png",
		press : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
	////cac mang bong da
	sv.arr.so_chucnang_soxo = 4;
	sv.arr.viewchucnangsoxo = [];
	sv.arr.so_chucnang_bongda = 4;
	sv.arr.viewchucnangbongda = [];
	sv.arr.icon_footer1 = [];
	sv.arr.img_footer1 = [{
		bg : "/assets/images/icon/icon-calander.png",
		press : "/assets/images/icon/icon-calander_press.png",
		title : "Lịch thi đấu"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tu van"
	}, {
		bg : "/assets/images/icon/icon-tintuc.png",
		press : "/assets/images/icon/icon-tintuc_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-vip.png",
		press : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
};
function taoui(sv) {
	sv.ui.footer_bongda = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		height : Ti.App.size(100),
		right : 0
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
			width : Ti.App.size(180),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.nauden,
			backgroundColor : set(i),
			left : Ti.App.size(180 * i),
			top : 0,
		});

		sv.arr.icon_footer1[i] = Ti.UI.createImageView({
			image : sv.arr.img_footer1[i].bg,
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_footer1[i].press,

		});
		sv.arr.viewchucnangbongda[i].add(sv.arr.icon_footer1[i]);
		sv.ui.footer_bongda.add(sv.arr.viewchucnangbongda[i]);
	};
	sv.ui.footer_soxo = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		height : Ti.App.size(100),
		right : 0
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangsoxo[i] = Ti.UI.createView({
			width : Ti.App.size(180),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.nauden,
			backgroundColor : 'transparent',
			top : 0,
			left : Ti.App.size(180 * i)
		});
		sv.arr.icon_footer3[i] = Ti.UI.createImageView({
			image : sv.arr.img_footer3[i].bg,
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_footer3[i].press
		});
		sv.arr.viewchucnangsoxo[i].add(sv.arr.icon_footer3[i]);
		sv.ui.footer_soxo.add(sv.arr.viewchucnangsoxo[i]);
	}

};
function set(i) {
	if (i == 0) {
		return Ti.App.Color.nauden;
	} else {
		return 'transparent';
	}
}

function set_color(i) {
	if (i == 0) {
		return Ti.App.Color.superwhite;
	} else {
		return Ti.App.Color.nauden;
	}
}