$(function () {
	// detect iOS or Android
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if (isAndroid) {
		mobileBankingInfo("android");
	}
	var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false;
	if (iOS) {
		mobileBankingInfo("ios");
	}

	// announcement
	$(".major-announcement").each(function () {
		var dataVar = $(this).data("store-var");
		var dataDur = $(this).data("store-dur");
		if (!dataDur) {
			dataDur = 0;
		}

		if (dataVar) {
			var cookie = cookieStrg(dataVar);
			var timepassed = cookieDur(dataDur, cookie);
			if (!timepassed || timepassed > 0) {
				$(this).show();
				setCookie(dataVar);
			} else {
				$(this).hide();
			}
		}
	});

	// on close-x
	$(".close-x").on("click", function () {
		$(this).closest(".initially-hidden-container").hide();
		setMargin();
	});

	// on close major announcement
	$(".close-major-announcement").on("click", function () {
		$(this).closest(".major-announcement").hide();
		setMargin();
	});

	// ? skiplink fix
	$(".skiplink").on("click", function () {
		$(this).blur();
	});

	// ? header fixed padding
	setMargin();

	// ? reponsive image
	responsiveImage();

	$(window).on("resize", function () {
		setMargin();
		responsiveImage();
		mobileNavIEFix;
	});

	//  ? drop down class
	$(".dropdown-container")
		.on("show.bs.dropdown", function () {
			$(this).parent().addClass("system-bar-dd-activate");
		})
		.on("hide.bs.dropdown", function () {
			$(this).parent().removeClass("system-bar-dd-activate");
		});

	// ? mega menu
	$(".doormat-trigger").on("focus mouseenter", function () {
		$(this).parent().addClass("doormat-container");
	});

	$(".doormat-trigger").on("focusout mouseleave", function () {
		if (!$(this).hasClass("show")) {
			$(this).parent().removeClass("doormat-container");
		}
	});

	$("body").on("mouseenter mouseleave", ".dropdown", toggleDropdown).on("click", ".dropdown-menu a", toggleDropdown);

	// ? mobile menu
	// mobileNav();
	$("#mobile-menu-button").on("click", function () {
		mobileNav();
	});

	$(".main-overlay").on("click", function () {
		mobileNav();
	});

	$(".mnd-menuitem").on("click", function () {
		subMenuActivate($(this));
	});

	$("#mobile-nav-drawer a").on("click", function () {
		mobileNav();
	});

	$(document).on("keyup", ".mnd-menuitem", function (e) {
		if (e.which == 13) {
			subMenuActivate($(this));
		}
	});

	$(".close-mnd-content").on("click", function () {
		closeMND();
	});

	$(document).on("keyup", ".close-mnd-content", function (e) {
		if (e.which == 13) {
			closeMND();
		}
	});
});

function subMenuActivate(target) {
	var currentActivated = $(".mnd-menucontent-active").data("source");
	var toBeActivated = $(target).data("target");
	if (!currentActivated) {
		toggleNMDFooter();
		toggleSourceTarget(toBeActivated, true);
		$(".close-mnd-content").removeClass("initially-hidden");
	} else if (currentActivated == toBeActivated) {
		toggleNMDFooter();
		toggleSourceTarget(currentActivated, false);
		$(".close-mnd-content").addClass("initially-hidden");
	} else {
		toggleSourceTarget(currentActivated, false);
		toggleSourceTarget(toBeActivated, true);
	}
}

function toggleSourceTarget(element, status) {
	// status is based on source status; target will be the opposite
	$("[data-source='" + element + "']")
		.toggleClass("mnd-menucontent-active")
		.attr("aria-hidden", !status);
	$("[data-target='" + element + "']")
		.toggleClass("mnd-menuitem-active")
		.attr("aria-expanded", status);
}

function toggleNMDFooter() {
	$(".mnd-footer").toggleClass("initially-hidden");
}

function closeMND() {
	var lastActive = $(".mnd-menuitem-active").data("target");
	deactivateMND();
	console.log(lastActive);
	$(".close-mnd-content").addClass("initially-hidden");
	$("[data-target='" + lastActive + "']").focus();
	// $(".mnd-menuitem").first().focus();
}

function deactivateMND() {
	$(".mnd-menucontent").removeClass("mnd-menucontent-active").attr("aria-hidden", true);
	$(".mnd-menuitem").removeClass("mnd-menuitem-active").attr("aria-expanded", false);
	$(".mnd-footer").removeClass("initially-hidden");
	$(".close-mnd-content").addClass("initially-hidden");
}

function mobileNavContent(target) {}

function mobileNav() {
	$("#mobile-nav-drawer").toggleClass("off-canvas toggled");
	$(".main-overlay").toggleClass("initially-hidden");
	$("#main-wrapper").toggleClass("no-overflow");
	$("#main").toggleClass("mobile-nav-push");
	$("#mobile-menu-wrapper").toggleClass("mobile-nav-push");
	$("#mobile-banking").toggleClass("mobile-nav-push");
	$(".major-announcement").toggleClass("mobile-nav-push");
	$("body").toggleClass("overflow-y-off");
	var hasClass = $("#mobile-nav-drawer").hasClass("toggled");
	if (hasClass) {
		$(".mnd-menuitem").first().focus();
		$("#mobile-menu-button").attr("aria-label", "Close menu");
		mobileNavIEFix();
	} else {
		$("#mobile-menu-button").attr("aria-label", "Open menu");
		deactivateMND();
	}
}

function mobileNavIEFix() {
	// var h = window.innerHeight;
	var h = $(window).height();
	// var h = window.outerHeight;
	var mndHeight = $(".mnd-header").height();
	if (h > mndHeight + 200) {
		var margin = parseInt(h) - parseInt(mndHeight) - 200;
		$(".mnd-footer").css("margin-top", margin);
	}
}

function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}

function setMargin() {
	var topMargin = $("#header").height();
	$("#main").css("margin-top", topMargin);
}

function toggleDropdown(e) {
	const _d = $(e.target).closest(".dropdown"),
		_m = $(".dropdown-menu", _d);
	setTimeout(
		function () {
			const shouldOpen = e.type !== "click" && _d.is(":hover");
			_m.toggleClass("show", shouldOpen);
			_d.toggleClass("show", shouldOpen);
			$('[data-toggle="dropdown"]', _d).attr("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 10 : 0
	);
}

function responsiveImage() {
	var width = $(window).width();
	var $this = $(".responsive-image");
	var breakpoint = $this.data("breakpoint");

	if (width < breakpoint) {
		var data = $this.data("src-mobile");
		$this.attr("src", data);
	} else {
		var data = $this.data("src-desktop");
		$this.attr("src", data);
	}
}

function cookieStrg(name) {
	var exist = localStorage.getItem(name);
	if (!exist) {
		localStorage.setItem(name, Date.now());
	}
	return localStorage.getItem(name);
}

function setCookie(name) {
	localStorage.setItem(name, Date.now());
}

function cookieDur(timeInDays, existingValue) {
	var host = window.location.hostname;
	// console.log(host);
	if (host != "www.hsbc.co.id") {
		var duration = 0.000694444;
	} else {
		var duration = timeInDays;
	}
	// console.log("duration ", duration);
	var time = duration * 24 * 60 * 60 * 1000;
	// console.log("In ms ", time, " in second ", time / 1000, " current time in storate ", existingValue);
	var currentTime = Date.now();
	var tp = parseInt(currentTime) - (parseInt(existingValue) + parseInt(time));
	// console.log("selisih ", tp);
	return tp;
}

function mobileBankingInfo(ua) {
	var mbinfo = cookieStrg("HBIDMobileBankingInfo");
	console.log("TEST", mbinfo);

	// display every 7 day
	var timepassed = cookieDur(14, mbinfo);

	if (!timepassed || timepassed > 0) {
		$("#mobile-banking").show();
		if (ua == "android") {
			$(".mobile-banking-android").show();
		}

		if (ua == "ios") {
			$(".mobile-banking-ios").show();
		}
		localStorage.setItem("HBIDMobileBankingInfo", Date.now());
	}
}

(function (document, history, location) {
	var HISTORY_SUPPORT = !!(history && history.pushState);

	var anchorScrolls = {
		ANCHOR_REGEX: /^#[^ ]+$/,
		OFFSET_HEIGHT_PX: 10 + $("#header").height(),

		/**
		 * Establish events, and fix initial scroll position if a hash is provided.
		 */
		init: function () {
			this.scrollToCurrent();
			$(window).on("hashchange", $.proxy(this, "scrollToCurrent"));
			$("body").on("click", "a", $.proxy(this, "delegateAnchors"));
		},

		/**
		 * Return the offset amount to deduct from the normal scroll position.
		 * Modify as appropriate to allow for dynamic calculations
		 */
		getFixedOffset: function () {
			return this.OFFSET_HEIGHT_PX;
		},

		/**
		 * If the provided href is an anchor which resolves to an element on the
		 * page, scroll to it.
		 * @param  {String} href
		 * @return {Boolean} - Was the href an anchor.
		 */
		scrollIfAnchor: function (href, pushToHistory) {
			var match, anchorOffset;

			if (!this.ANCHOR_REGEX.test(href)) {
				return false;
			}

			match = document.getElementById(href.slice(1));

			if (match) {
				anchorOffset = $(match).offset().top - this.getFixedOffset();
				$("html, body").animate({
					scrollTop: anchorOffset,
				});

				// Add the state to history as-per normal anchor links
				if (HISTORY_SUPPORT && pushToHistory) {
					history.pushState({}, document.title, location.pathname + href);
				}
			}

			return !!match;
		},

		/**
		 * Attempt to scroll to the current location's hash.
		 */
		scrollToCurrent: function (e) {
			if (this.scrollIfAnchor(window.location.hash) && e) {
				e.preventDefault();
			}
		},

		/**
		 * If the click event's target was an anchor, fix the scroll position.
		 */
		delegateAnchors: function (e) {
			var elem = e.target;

			if (this.scrollIfAnchor(elem.getAttribute("href"), true)) {
				e.preventDefault();
			}
		},
	};

	$(document).ready($.proxy(anchorScrolls, "init"));
})(window.document, window.history, window.location);
