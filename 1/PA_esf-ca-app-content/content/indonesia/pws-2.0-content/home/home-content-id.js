var mainBanner = {
	hero: {
		imageDesktop: "./1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/main-banner-desktop.jpg",
		imageMobile: "./1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/main-banner-mobile.jpg",
		imageBreakpoint: "576",
		alt: "",
		title: "Lorem ipsum et!",
		content: "Impedit, porro ullam. Veniam inventore et dignissimos quia deserunt quibusdam dolorem?",
		link: "https://www.hsbc.co.id/1/2/WAB/advance-contactus?WABFormEntryCommand=cmd_init&WT.ac=mkg_homepage_advance_banner&contentwabform=home&headbanner=0&hidden_fields.source=Ownchannel&hidden_fields.campaign=mkg_homepage_advance_banner",
		target: "_blank",
		caption: "Learn more",
	},
	secondaryOne: {
		link: "https://www.hsbc.co.id",
		target: "_blank",
		title: "Get 20% Discount",
		content: "Lorem ipsum dolor sit amet consectetur. Amet consectetur doloris au vecturn.",
	},
	secondaryTwo: {
		link: "https://www.hsbc.co.id",
		target: "_self",
		title: "Weekend treat",
		content: "Ut enim ad minima veniam, quis nostrum exercitationem monstrorialis. Necessitatibus dignissimos.",
	},
};

var topLink = [
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		link: "https://www.hsbc.co.id",
		target: "_blank",
		title: "Dolor sit",
		text: "Error quam adipisci sint, ab esse repellat culpa fugiat. Necessitatibus, dignissimos itaque.",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		link: "https://www.hsbc.co.id",
		target: "_self",
		title: "Amettem",
		text: "Lorem ipsum dolor vic sit amet e con sectetur.",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		link: "https://www.hsbc.co.id",
		target: "_self",
		title: "Doloremque nulla",
		text: "Delectus quisquam doloribus, iusto distinctio ea enim mollitia.",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		link: "https://www.hsbc.co.id",
		target: "_self",
		title: "Sit Ametan",
		text: "Lorem ipsum dolor vic sit.",
	},
];

var card = [
	{
		class: "col col-12 col-lg-4 py-3",
		title: "Lorentum ametan",
		link: "https://www.yahoo.co.id",
		target: "_self",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000.jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},
	{
		class: "col col-12 col-sm-6 col-lg-4 py-3",
		title: "Lorent im margetan",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (1).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},
	{
		class: "col col-12 col-sm-6 col-lg-4 py-3",
		title: "Lorent umim marget",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (2).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},

	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Lorent umim marget",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (3).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},
	{
		class: "col col-12 col-sm-6 col-lg-3 py-3",
		title: "Lorent umim marget",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (4).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},
	{
		class: "col col-6 col-sm-6 col-lg-3 py-3 pr-1 pr-sm-3",
		title: "Lorent umim marget",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (5).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
	},
	{
		class: "col col-6 col-sm-6 col-lg-3 py-3 pl-1 pl-sm-2",
		title: "Lorent umim marget",
		link: "https://www.google.co.id",
		target: "_blank",
		image: "/1/PA_esf-ca-app-content/content/indonesia/pws-2.0-content/home/images/cq5dam.web.590.1000 (6).jpg",
		text: "Loreman ipsuman dolor vic sit amet e consectetur",
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
	// main banner
	mustRender("#main-banner-hero-template", { mbhero: mainBanner.hero }, "#main-banner-hero");

	mustRender("#main-banner-secondary-template", { mbsecondary: mainBanner.secondaryOne }, "#main-banner-secondary-1");

	mustRender("#main-banner-secondary-template", { mbsecondary: mainBanner.secondaryTwo }, "#main-banner-secondary-2");

	// top link
	mustRender("#top-links-template", { topLink: topLink }, "#top-link-section");

	// card
	mustRender("#card-template", { card: card }, "#card-section");

	// SBDK
	mustRender("#sbdk-template", { opening: sbdk.text, data: sbdk.data }, "#sbdk-content");
});
