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
	sv.arr.so_chucnang_soxo = 3;
	sv.arr.viewchucnangsoxo = [];
	sv.arr.icon_footer3 = [];
	sv.arr.lbl_icon_footer3 = [];
	sv.arr.img_footer3 = [{
		bg : "/assets/images/icon/icon-thongke.png",
		press : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-3.png",
		press : "/assets/images/icon/icon-3.png",
		title : "VIP"
	}];
	////cac mang bong da
	sv.arr.so_chucnang_bongda = 4;
	sv.arr.viewchucnangbongda = [];
	sv.arr.icon_footer1 = [];
	sv.arr.lbl_icon_footer1 = [];
	sv.arr.img_footer1 = [{
		bg : "/assets/images/icon/icon-calander.png",
		press : "/assets/images/icon/icon-calander_press.png",
		title : "Lịch thi đấu"
	}, {
		bg : "/assets/images/icon/icon-xephang.png",
		press : "/assets/images/icon/icon-xephang.png",
		title : "Bảng xếp hạng"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-3.png",
		press : "/assets/images/icon/icon-3.png",
		title : "VIP"
	}];
};
function taoui(sv) {
	sv.ui.footer_bongda1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		top : 0,
		backgroundColor : 'transparent',
	});
	sv.ui.footer_bongda2 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		top : 0,
		backgroundColor : 'transparent',
	});
	for (var i = 0; i < 4; i++) {
		if (i == 0 || i == 1) {
			sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
				width : Ti.App.size(360),
				height : Ti.App.size(100),
				backgroundSelectedColor : Ti.App.Color.nauden,
				backgroundColor : set(i),
				left : Ti.App.size(i * 360),
				top : 0,
			});
			sv.ui.footer_bongda1.add(sv.arr.viewchucnangbongda[i]);
		} else {
			if (i == 2 || i == 3) {
				sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
					width : Ti.App.size(360),
					height : Ti.App.size(100),
					backgroundSelectedColor : Ti.App.Color.nauden,
					backgroundColor : set(i),
					left : Ti.App.size((i-2) * 360),
					top : 0,
				});
				sv.ui.footer_bongda2.add(sv.arr.viewchucnangbongda[i]);
			}

		}

		if (i == 1) {
			sv.arr.icon_footer1[i] = Ti.UI.createImageView({
				image : sv.arr.img_footer1[i].bg,
				width : Ti.App.size(105),
				height : Ti.App.size(54),
				touchEnabled : false,
				left : Ti.App.size(20),
				backgroundSelectedImage : sv.arr.img_footer1[i].press
			});
			sv.arr.lbl_icon_footer1[i] = Titanium.UI.createLabel({
				text : sv.arr.img_footer1[i].title,
				color : set_color(i),
				font : {
					fontSize : Ti.App.size(30)
				},
				left : Ti.App.size(140),
				textAlign : 'left',
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				backgroundColor : 'transparent',
				touchEnabled : false
			});
		} else {
			sv.arr.icon_footer1[i] = Ti.UI.createImageView({
				image : sv.arr.img_footer1[i].bg,
				width : Ti.App.size(64),
				height : Ti.App.size(64),
				touchEnabled : false,
				left : Ti.App.size(20),
				backgroundSelectedImage : sv.arr.img_footer1[i].press,

			});
			sv.arr.lbl_icon_footer1[i] = Titanium.UI.createLabel({
				text : sv.arr.img_footer1[i].title,
				color : set_color(i),
				font : {
					fontSize : Ti.App.size(30)
				},
				left : Ti.App.size(100),
				textAlign : 'left',
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				backgroundColor : 'transparent',
				touchEnabled : false
			});
		}
		sv.arr.viewchucnangbongda[i].add(sv.arr.icon_footer1[i]);
		sv.arr.viewchucnangbongda[i].add(sv.arr.lbl_icon_footer1[i]);
	};
	sv.ui.footer_bongda = Titanium.UI.createScrollableView({
		views : [sv.ui.footer_bongda1, sv.ui.footer_bongda2],
		showPagingControl : false,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		left : 0,
		top : 0
	});
	sv.ui.footer_soxo = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		width : Ti.App.size(720),
		height : Ti.App.size(100),
	});
	for (var i = 0; i < 3; i++) {
		sv.arr.viewchucnangsoxo[i] = Ti.UI.createView({
			width : Ti.App.size(240),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.nauden,
			backgroundColor : 'transparent',
			top : 0,
			left:Ti.App.size(240*i)
		});
		sv.ui.footer_soxo.add(sv.arr.viewchucnangsoxo[i]);
		sv.arr.icon_footer3[i] = Ti.UI.createImageView({
			image : sv.arr.img_footer3[i].bg,
			width : Ti.App.size(34),
			height : Ti.App.size(34),
			touchEnabled : false,
			left : Ti.App.size(20),
			backgroundSelectedImage : sv.arr.img_footer3[i].press
		});
		sv.arr.lbl_icon_footer3[i] = Titanium.UI.createLabel({
			text : sv.arr.img_footer3[i].title,
			color : Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(30)
			},
			left : Ti.App.size(60),
			textAlign : 'left',
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			backgroundColor : 'transparent',
			touchEnabled : false
		});
		sv.arr.viewchucnangsoxo[i].add(sv.arr.icon_footer3[i]);
		sv.arr.viewchucnangsoxo[i].add(sv.arr.lbl_icon_footer3[i]);
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