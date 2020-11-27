var meta = [
	{
		name: "summary",
		content: "Temukan bermacam produk dan layanan finansial untuk nasabah personal dari HSBC Advance. Persembahan dari HSBC Indonesia",
	},
	{
		name: "description",
		content: "Temukan bermacam produk dan layanan finansial untuk nasabah personal dari HSBC Advance. Persembahan dari HSBC Indonesia",
	},
	{
		name: "keywords",
		content:
			"hsbc advance, advance, perbankan, banking, bank, personal, UKM, SME, bisnis, business, kartu kredit, credit card, pinjaman, loan, KPR, mortgage, asuransi, insurance, investasi, investment, indonesia, hsbc indonesia, aplikasi, application, internet banking, mobile banking",
	},
	{
		name: "viewport",
		content: "width=device-width, initial-scale=1.0",
	},
];

var mainBanner = {
	hero: {
		imageDesktop: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/advance/images/space-boy-with-father.jpg",
		imageMobile: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/advance/images/space-boy-with-father.jpg",
		imageBreakpoint: "576",
		alt: "",
		title: "HSBC Advance",
		content: [
			{
				subcontent: "Apapun #CeritaCitaCita-nya, wujudkan dengan HSBC Advance.",
			},
			{
				subcontent: "Bergabung sekarang dan dapatkan cash back hingga Rp 1,625 Juta*.",
			},
		],
		link: "#h2header",
		target: "_self",
		caption: "Join now",
	},
};

var breadcrumb = [
	{
		current: false,
		url: "https://www.hsbc.co.id",
		caption: "HSBC Indonesia",
	},
	{
		current: true,
		caption: "HSBC Advance",
	},
];

var card = [
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Rekening dalam 12 mata uang",
		link: "https://www.hsbc.co.id/1/2/id/personal/accounts",
		target: "_self",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (3).jpg",
		text: "Kemana pun Anda bepergian, penuhi kebutuhan mata uang asing Anda dengan membuka rekening tabungan dan deposito secara online hanya dalam beberapa klik",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Akses produk wealth management",
		link: "https://www.hsbc.co.id/1/2/id/personal/wealth-management/investasi",
		target: "_self",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (4).jpg",
		text: "Kemudahan berinvestasi reksa dana secara online hanya dengan Rp 500 ribu dan beragam produk asuransi untuk perlindungan masa depan Anda",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Kartu kredit tanpa iuran tahunan",
		link: "https://www.hsbc.co.id/1/2/id/personal/kartu-kredit",
		target: "_self",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (5).jpg",
		text: "Nikmati cash back 25% untuk setiap transaksi dengan kartu kredit HSBC Platinum Cash Back atau double rewards setiap hari dengan kartu kredit HSBC Visa Platinum, bebas iuran tahunan khusus untuk Nasabah HSBC Advance",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Bebas transaksi kartu debit",
		link: "https://www.hsbc.co.id/1/2/id/personal/kartu-debit",
		target: "_self",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (6).jpg",
		text: "Gratis tarik tunai, transfer, dan cek saldo di jaringan ATM Bersama dan Prima di seluruh Indonesia",
	},
];

var privileges = [
	{
		class: "col col-12 col-sm-6 py-3",
		title: "The Next Leap",
		link: "https://www.hsbc.co.id/1/PA_esf-ca-app-content/content/indonesia/personal/offers/offers-and-lifestyle-hsbc-advance/enewsletter-advance/index.html",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/advance/images/tnl.jpg",
		text: "Temukan beragam fasilitas, produk dan penawaran eksklusif lebih lengkap di bulletin HSBC Advance The Next Leap. Lorem ipsum dolor sit amet. Consectetur ad ellipsis. Mea dolorem et.",
	},
	{
		class: "col col-12 col-sm-6 py-3",
		title: "eWelcome Pack",
		link: "https://www.hsbc.co.id/1/PA_esf-ca-app-content/content/indonesia/personal/hsbc-advance/document/welcome_pack-HSBC-Advance.pdf",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/advance/images/ewp.jpg",
		text: "Kami siap membantu Anda mewujudkan impian. Baca panduannya selengkapnya disini.",
	},
];

var sbdk = {
	text: "Data per tanggal 30 September 2020",
	data: [
		{
			title: "Kredit korporasi",
			rate: "8.75%",
		},
		{
			title: "Kredit ritel",
			rate: "10.25%",
		},
		{
			title: "KPR",
			rate: "10.25%",
		},
	],
};

$(function () {
	$.each(meta, function (index, value) {
		var name = value.name;
		var cntnt = String(value.content);
		document.querySelector("meta[name=" + name + "]").setAttribute("content", cntnt);
	});

	mustRender("#main-banner-hero-template", { mbhero: mainBanner.hero }, "#main-banner-hero"); //main banner
	mustRender("#breadcrumb-template", { breadcrumb: breadcrumb }, "#breadcrumb-section"); //breadcrumb
	mustRender("#card-template", { card: privileges }, "#more-privileges-section");
});
