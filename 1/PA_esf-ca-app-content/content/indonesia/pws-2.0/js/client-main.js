$(function () {
	// turn off built-in styles
	$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles.css"]');
	$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles.css"]').prop("disabled", true);
	$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles_zh.css"]');
	$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles_zh.css"]').prop("disabled", true);

	// detect iOS or Android
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
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

	// ? reponsive image
	responsiveImage();

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

	// footnote links
	$(".footnote-temporary-parent").each(function () {
		$(this).remove();
	});

	var Arr = [];
	$(".footnote-link")
		.each(function () {
			var id = "";
			do {
				id = randomIDGenerator(16);
				$.inArray(id, Arr) > -1 ? (exist = true) : (exist = false);
			} while (exist);
			Arr.push(id);
			$(this).attr("id", id);
		})
		.on("click", function () {
			$(".footnote-temporary-parent").each(function () {
				$(this).remove();
			});

			var id = $(this).attr("id");
			var href = $(this).attr("href");
			var label = $(href).data("return-label");
			visualIdentifier(href, "active");
			$(href)
				.find(".footnote-content")
				.append('<div class="footnote-temporary-parent text-primary"> <a class="footnote-temporary-link text-primary" href=#' + id + ">" + label + ' </a><span class="icon-direction_up pl-1 text-70" aria-hidden="true"></span></div>');
		});

	$(".footnote-container").on("click", ".footnote-temporary-link", function () {
		$(this).closest(".footnote-temporary-parent").remove();
	});

	// responsive table - transformed on mobile
	$(".table-transformed-mobile").rtResponsiveTables();

	// ? header fixed padding
	setMargin();
	$(window).on("resize", function () {
		setMargin();
		responsiveImage();
		mobileNavIEFix;
	});

	// ? hide header if apply-bar exists
	if ($(".apply-bar").length > 0) {
		var timeout = 500;
		var prevScrollpos = window.pageYOffset;
		$(window).on("scroll", function (e) {
			var currentScrollPos = window.pageYOffset;
			if (currentScrollPos > 1500) {
				var height = $("#header").height();
				if (prevScrollpos > currentScrollPos) {
					if ($("#header").hasClass("mhw-hidden")) {
						var applyBarHeight = $(".apply-bar").height();
						applyBarHeight ? applyBarHeight : (applyBarHeight = 0);
						$(".apply-bar").css("margin-top", height);
						$("#header").removeClass("mhw-hidden");
						$("#header").css("transform", "translateY(" + 0 + ")");
						$(".apply-bar").removeClass("margin-top-0");
						setTimeout(function () {}, timeout);
					}
				} else if (prevScrollpos < currentScrollPos) {
					if (!$("#header").hasClass("mhw-hidden")) {
						setTimeout(function () {
							$(".apply-bar").addClass("margin-top-0").css("border-top", "2px solid white");
							$("#header")
								.addClass("mhw-hidden")
								.css("transform", "translateY(" + -1 * height + "px)");
						}, timeout);
					}
				}
				prevScrollpos = currentScrollPos;
			} else {
				if ($("#header").hasClass("mhw-hidden")) {
					var height = $("#header").height();
					var applyBarHeight = $(".apply-bar").height();
					applyBarHeight ? applyBarHeight : (applyBarHeight = 0);
					$(".apply-bar").css("margin-top", height);
					$("#header").removeClass("mhw-hidden");
					$("#header").css("transform", "translateY(" + 0 + ")");
					$(".apply-bar").removeClass("margin-top-0");
					setTimeout(function () {}, timeout);
				}
			}
		});
	}

	// tab panel accessibility fix
	$(document).on("click", ".tabs-to-collapse", function () {
		$(".tabs-to-collapse").each(function () {
			var isActive = $(this).hasClass("active");
			if (isActive) {
				$(this).parent().attr("aria-selected", "true");
			} else {
				$(this).parent().attr("aria-selected", "false");
			}
		});
	});

	// outside link
	$(".outside-link").on("click", function (e) {
		e.preventDefault();
		var href = $(this).attr("href");
		outsideLink(href);
	});

	$(document).on("click", ".outside-link-container-button", function () {
		$("#temporary-wrapper-outside-link").fadeOut(250, function () {
			$(this).remove();
		});
	});
});

function outsideLink(url) {
	var content =
		'<div id="temporary-wrapper-outside-link" class="outside-link-container"><div class="container pt-5 px-2 px-md-5"><div class="row" tabindex="-1"><div class="col col-12"><h2><div class="text-body">Anda akan meninggalkan HSBC.co.id</div><div class="text-body"><em>You are now leaving HSBC.co.id.</em></div></h2></div></div><div class="row pt-4"><div class="col col-12"><p class="">Tautan ini ada di situs HSBC. Mohon baca mengenai kebijakan hyperlink kami. HSBC tidak bertanggung-jawab atau memegang kendali atas penggunaan tautan ini oleh Anda.</p></div></div><div class="row pt-2 pb-4"><div class="col col-12"><p class=""><em>This link exits at HSBC’s website. Please refer to our hyperlink policy. HSBC assumes no liability or control for your use of this link.</em></p></div></div><div class="row"><div class="col col-12 col-sm-6 col-md-4 col-lg-3"><button tabindex="9" class="outside-link-container-button btn btn-black w-100 h6 py-3 px-5 border-radius-0 mr-2">Batalkan/<em>cancel</em></button></div><div class="col col-12 col-sm-6 col-md-4 col-lg-3"><a href="' +
		url +
		'" tabindex="9" target="_blank" class="outside-link-container-button btn btn-primary w-100 h6 py-3 px-5 border-radius-0">Lanjutkan/<em>continue</em></a></div></div></div></div>';
	$("#main").after(content);
}

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
	$(".apply-bar").toggleClass("mobile-nav-push");
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
	var h = $(window).height();
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
	var headerAutoHidden = $("#header").hasClass("mhw-hidden");
	if (headerAutoHidden) {
		var topMargin = $(".apply-bar").height();
		$("#main").css("margin-top", topMargin);
		setTimeout(function () {}, 1000);
	} else {
		var applyBarHeight = $(".apply-bar").height();
		var headerHeight = $("#header").height();
		applyBarHeight ? applyBarHeight : (applyBarHeight = 0);
		var topMargin = headerHeight + applyBarHeight;
		$(".apply-bar").css("margin-top", headerHeight);
		$("#main").css("margin-top", topMargin);
	}
}

function toggleDropdown(e) {
	var _d = $(e.target).closest(".dropdown"),
		_m = $(".dropdown-menu", _d);
	setTimeout(
		function () {
			var shouldOpen = e.type !== "click" && _d.is(":hover");
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
	if (host == "www.hsbc.co.id") {
		var duration = timeInDays;
	} else if (host == "127.0.0.1") {
		var duration = 0.01;
	} else {
		var duration = 0.000694444;
	}
	var time = duration * 24 * 60 * 60 * 1000;
	var currentTime = Date.now();
	var tp = parseInt(currentTime) - (parseInt(existingValue) + parseInt(time));
	return tp;
}

function mobileBankingInfo(ua) {
	var mbinfo = cookieStrg("HBIDMobileBankingInfo");

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

function randomIDGenerator(length) {
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = "";
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function visualIdentifier(el, cssClass) {
	$(el).addClass(cssClass);
	setTimeout(function () {
		$(el).removeClass(cssClass);
	}, 3000);
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

				// $(match).remove();

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
			var data = $(elem).data("disable-scroll");
			if (!data) {
				if (this.scrollIfAnchor(elem.getAttribute("href"), true)) {
					e.preventDefault();
				}
			}
		},
	};

	$(document).ready($.proxy(anchorScrolls, "init"));
})(window.document, window.history, window.location);
