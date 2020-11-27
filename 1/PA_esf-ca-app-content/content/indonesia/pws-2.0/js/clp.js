// ! DECLARATION - modify as needed
var sc = {
	// ? selective content variables
	className: ".selectiveContent", // ? class name
	attrName: "data-selective-content", // ? data-attribute name
	attrNameGeneric: "generic", // ? generic content identifier
	imgAttrName: "data-img-src", // ? data-attribute name for image
	imgSrcSetAttrName: "data-img-srcset", // ? data-attribute name for srcset image
};

var ab = {
	// ? ab test variables
	className: ".abtest", // ? class name
	attrName: "data-ab-test", // ? data-attribute name
	imgAttrName: "data-src", // ? data-attribute name for image
	setSelector: "[data-ab-test-set]", // ? set name
};

var urlParam = {
	// ? url parameters
	sc: "hidden_fields.source", // ? selective content
	ab: "abtest", // ? ab test
	abVal: "active", // ? value for ab test to be run
};

var scAndAbTestOff = ".scAbTestOff"; // ? turn off immediate SC when AB is active

// ! Generated Var Declaration
sc.genericSelector = "[" + sc.attrName + "=" + sc.attrNameGeneric + "]";
ab.attrSelector = "[" + ab.attrName + "]";

$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles.css"]');
$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles.css"]').prop("disabled", true);
$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles_zh.css"]');
$('link[href="/1/PA_esf-ca-app-content/content/pws_theme/home/Styles_zh.css"]').prop("disabled", true);

function getUrlParam() {
	// ? get URL parameter
	var vars = [],
		hash,
		hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&");
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

// ? Progress Bar Tracker
function progressBar() {
	var $currentPage = parseInt($("[data-current-page]").attr("data-current-page")),
		$totalPage = parseInt($("[data-current-page]").attr("data-total-page")),
		$currWidth = (($currentPage / $totalPage) * 100).toFixed(2) + "%",
		$remWidth = (100 - ($currentPage / $totalPage) * 100).toFixed(2) + "%";
	$(".progress--bar-current").width($currWidth);
	$(".progress--bar-remaining").width($remWidth);
}

$(document).ready(function () {
	progressBar();
	$(".form-row input").focusout(function () {
		if ($(this).val() != "") {
			$(this).addClass("has-content");
		} else {
			$(this).removeClass("has-content");
		}
	});

	// ? info button
	$(".info-button").on("click", function () {
		$(this).next(".tooltip-container").toggle(0);
	});

	$(".close-button").on("click", function () {
		$(this).closest(".tooltip").closest(".tooltip-container").toggle(0);
	});

	// ? accordion
	$(".accordion").on("click", function (e) {
		e.preventDefault();
		var accrd = $(this).next(".accordion-content"),
			button = $(this).find(".accordion-button"),
			chevr = $(this).find(".chevron-accordion"),
			panelHeight = $(this).next(".accordion-content").attr("data-height");
		accrd.css("height", panelHeight);
		if (accrd.hasClass("inactive")) {
			accrd.toggle(350);
			chevr.css("transform", "rotate(-90deg)");
			accrd.removeClass("inactive").addClass("active");
			button.attr("aria-expanded", "true");
		} else {
			accrd.toggle(250);
			chevr.css("transform", "rotate(90deg)");
			accrd.removeClass("active").addClass("inactive");
			button.attr("aria-expanded", "false");
		}
	});

	$(".super-accordion").on("click", function (e) {
		e.preventDefault();
		var accrds = $(this).next(".super-accordion-content"),
			buttons = $(this).find(".super-accordion-button"),
			chevrs = $(this).find(".chevron-accordion"),
			panelHeights = $(this).next(".super-accordion-content").attr("data-height");
		accrds.css("height", panelHeights);
		if (accrds.hasClass("inactive")) {
			accrds.toggle(350);
			chevrs.css("transform", "rotate(-90deg)");
			accrds.removeClass("inactive").addClass("active");
			buttons.attr("aria-expanded", "true");
		} else {
			accrds.toggle(250);
			chevrs.css("transform", "rotate(90deg)");
			accrds.removeClass("active").addClass("inactive");
			buttons.attr("aria-expanded", "false");
		}
	});
});

// ? Form Validation
$(function ($) {
	$("form")
		.on("blur", 'input[type="text"]', function () {
			validateField(jQuery(this));
		})
		.on("change", "select", function () {
			validateField(jQuery(this));
		})
		.on("change", 'input[type="checkbox"], input[type="radio"]', function () {
			validateField(jQuery(this).closest(".validate"));
		});

	// submission validation
	jQuery("form").on("submit", function (e) {
		var valid = validateGroup(jQuery("#form-content .validate"));
		if (!valid) {
			e.preventDefault();
			$(window).scrollTop($(".help-inline:visible").filter(":first").offset().top - 150);
			$(".help-inline:visible").filter(":first").prev().focus();
		}
	});
});

function validateGroup($el) {
	var validFields = [];
	$el.each(function () {
		validFields.push(validateField($(this)));
	});
	if (validFields.filter(Boolean).length === validFields.length) {
		return true;
	} else {
		return false;
	}
}

function validateField($el) {
	var validates = validate($el);
	if (validates) {
		$el.closest(".form-group").find(".help-inline").hide();
		$el.removeClass("invalid-input");
		$el.addClass("valid-input");
		if ($el.hasClass("inputEqual")) {
			$(".inputEqual").each(function () {
				$(this).closest(".form-group").find(".help-inline").hide();
				$(this).removeClass("invalid-input");
				$(this).addClass("valid-input");
			});
		}
	} else {
		// event.preventDefault();
		if ($el.val() != "") {
			$el.closest(".form-group").find(".help-inline").show();
			if (!$el.hasClass("inputEqual")) {
				$el.closest(".form-group").find(".help-inline").prev().focus();
			}
			$el.removeClass("valid-input");
			$el.addClass("invalid-input");
		} else {
			$el.closest(".form-group").find(".help-inline").show();
			$el.removeClass("valid-input");
			$el.addClass("invalid-input");
		}
	}
	return validates;
}

function validate($el) {
	var validates = true;

	$el.each(function () {
		var $this = $(this);

		$($this.attr("class").split(" ")).each(function (i, val) {
			switch (val) {
				case "inputEqual":
					var arr = [];
					$(".inputEqual").each(function () {
						var val = $(this).val();
						arr.push(val);
					});
					if (arr[0] != "" && arr[1] != "") {
						if (arr[0] != arr[1]) {
							validates = false;
						}
					}
					break;

				case "inputAZ":
					if (!/^[a-z ]+$/i.test($.trim($this.val()))) {
						validates = false;
					}
					break;
				case "input09":
					if (!/^[0-9 \+\"]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "sourceCode":
					if (!/^[\d]{6}[\w]{4}$/g.test($this.val())) {
						validates = false;
					}
					break;
				case "inputPhone":
					if (!/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "input09AZ":
					if (!/^[a-z][0-9]+$/i.test($.trim($this.val()))) {
						validates = false;
					}
					break;
				case "alphaNum":
					if (!/^\w+$/.test($this.val())) {
						validates = false;
					}
				case "inputAZ09":
					if (!/^[\w \+\'\"]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputCard":
					if (!/^[0-9]{4}[\-\ ]?[0-9]{4}[\-\ ]?[0-9]{4}[\-\ ]?[0-9]{4}$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputMinLength3":
					if ($this.val().length < 3) {
						validates = false;
					}
					break;
				case "inputMinLength4":
					if ($this.val().length < 4) {
						validates = false;
					}
					break;
				case "inputMinLength5":
					if ($this.val().length < 5) {
						validates = false;
					}
					break;
				case "inputMinLength6":
					if ($this.val().length < 6) {
						validates = false;
					}
					break;
				case "inputMinLength7":
					if ($this.val().length < 7) {
						validates = false;
					}
					break;
				case "inputMinLength8":
					if ($this.val().length < 8) {
						validates = false;
					}
					break;
				case "inputMinLength30":
					if ($this.val().length < 30) {
						validates = false;
					}
					break;
				case "inputMaxLength500":
					if ($this.val().length > 500) {
						validates = false;
					}
					break;
				case "inputNumMin8":
					if ($this.val().length < 8 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputNum6":
					if ($this.val().length != 6 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputNum8":
					if ($this.val().length != 8 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputNum10":
					if ($this.val().length != 10 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputNum12":
					if ($this.val().length != 12 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputNum16":
					if ($this.val().length != 16 || !/^(?=.*?[1-9])[0-9]+$/i.test($this.val())) {
						validates = false;
					}
					break;
				case "inputTextArea":
					if (!/^[a-zA-Z0-9?@()!,\/\-=_:.&\s]+$/.test($this.val())) {
						validates = false;
					}
					break;
				case "inputMMYYYY":
					var value = $this.val();
					if (!/^[0-1][0-9]\/[0-9]{4}$/i.test(value)) {
						validates = false;
					} else {
						var matches = value.match(/^([0-9]{2})\/([0-9]{4})$/i);
						var month = parseInt(matches[1]);
						var year = parseInt(matches[2]);
						var date = new Date();

						if (month > 12 || month < 1) {
							validates = false;
						} else {
							if (year < date.getFullYear()) {
								validates = false;
							} else {
								if (date.getFullYear() == year && month <= date.getMonth() + 1) {
									validates = false;
								}
							}
						}
					}
					break;
				case "inputEmail":
					if (
						!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(
							$this.val()
						)
					) {
						validates = false;
					}
					break;
				case "inputSelect":
					if ($this.val() == "") {
						validates = false;
					}
					break;
				case "inputCheck":
					if (!$this.prop("checked")) {
						validates = false;
					}
					break;
				case "inputCheckGroup":
					if ($this.find(":checked").length === 0) {
						validates = false;
					}
					break;
				case " ":
					if ($this.val() == "") {
						validates = false;
					}
					break;
			}
		});
	});
	return validates;
}

// ? Intersection observer
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

function hasClass(element, className) {
	return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}

var options = {
	root: null,
	rootMargin: "0px",
	threshold: [0.25, 0.5, 0.75, 1],
};

var observe = function observe(entries, observer) {
	entries.forEach(function (entry) {
		var qF = document.querySelector("#quick-fill");
		if (hasClass(entry.target, "row-load")) {
			var rowImage = entry.target,
				srcImage = rowImage.getAttribute("data-src");
			if (entry.isIntersecting) {
				rowImage.src = srcImage;
				observer.unobserve(rowImage);
			}
		}
		if (entry.target.id === "form") {
			if (entry.isIntersecting) {
				qF.style.display = "none";
			} else {
				qF.style.display = "block";
			}
		}
		if (entry.target.id === "footer-wrapper") {
			if (entry.isIntersecting) {
				qF.style.display = "none";
			} else {
				qF.style.display = "block";
			}
		}
	});
};

var observer = new IntersectionObserver(observe);
var imgArr = document.querySelectorAll("img.row-load");
imgArr.forEach(function (v) {
	observer.observe(v);
});

// ? Selective Content Helper Function
function generateRandomInt(min, max) {
	// ? random number generator
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSelector(name) {
	// ? get selector name for buildArray
	return name == "unique" ? ab.setSelector : sc.className;
}

function getAttribute(name) {
	// ? get attribute name for buildArray
	return name == "unique" ? ab.setSelector : sc.attrName;
}

function buildArray(name) {
	// ? array builder for elements collection
	var arr = [],
		selector = getSelector(name),
		attribute = getAttribute(name);
	$(selector).each(function () {
		var attr = $(this).attr(attribute);
		arr.push(attr);
	});
	return arr;
}

function getUniqueArray(array) {
	// ? generate unique array based on array input
	return array.filter(function (elem, pos, arr) {
		return arr.indexOf(elem) == pos;
	});
}

function turnOffScAb() {
	$(scAndAbTestOff).attr("src", "");
	$(scAndAbTestOff).css("display", "none");
	$(scAndAbTestOff).hide();
}

function processAbTest() {
	var arr = getUniqueArray(buildArray("unique"));
	var arrLen = arr.length;
	for (var i = 0; i < arrLen; i++) {
		var setName = arr[i],
			el = "[" + ab.setSelector + "=" + setName + "]",
			elLength = $(el).length,
			len = $(el).find(ab.attrSelector).length / elLength,
			elemId = generateRandomInt(1, len),
			elem = "[" + ab.attrName + "=" + elemId + "]";
		$(el).find(elem).show();
		if ($(el).find(elem).find("img").length) {
			var $this = $(el).find(elem).find("img"),
				srcImage = $this.attr(ab.imgAttrName);
			$this.attr("src", srcImage);
			turnOffScAb(); // ? if found and another selectiveContent image is present next to the element, then turn it off - the selectiveContent should be placed right after the abtest-wrapper div
		}
	}
}

function processSelectiveContent(elems) {
	elems.each(function () {
		var el = $(this),
			img = el.attr(sc.imgAttrName),
			srcSetImg = el.attr(sc.imgSrcSetAttrName);
		if (el.is("img") && !$(ab.className).is(":visible")) {
			if (!srcSetImg) {
				el.attr("src", img);
			} else {
				el.attr("src", img);
				el.attr("srcset", srcSetImg);
			}
		}
		el.show();
	});
}

function abTestCheck(status) {
	if (status != 0) {
		var abTestParameter = getUrlParam()[urlParam.ab];
		if (abTestParameter == urlParam.abVal) {
			processAbTest();
		}
	}
}

function selectiveContentRunner(content, abTestLen) {
	processSelectiveContent(content);
	abTestCheck(abTestLen);
}

function selectiveContentSwitcher(swtch, identifier) {
	var el, these, abTest, fn;
	var scSwitch = {
		other: function () {
			el = "[" + sc.attrName + "=" + identifier + "]";
			these = $(el);
			abTest = $(el).find(ab.attrSelector);
			selectiveContentRunner(these, abTest.length);
		},
		default: function () {
			these = $(sc.genericSelector);
			abTest = $(sc.genericSelector).find(ab.attrSelector);
			selectiveContentRunner(these, abTest.length);
		},
	};
	if (scSwitch[swtch]) {
		fn = scSwitch[swtch];
	} else {
		fn = scSwitch["default"];
	}
	fn();
}

function selectiveContent(identifier) {
	var arr = buildArray("normal");
	if (typeof identifier != "undefined" && $.inArray(identifier, arr) != -1) {
		selectiveContentSwitcher("other", identifier);
	} else {
		selectiveContentSwitcher("generic", identifier);
	}
}

// scrolling
(function (document, history, location) {
	var HISTORY_SUPPORT = !!(history && history.pushState);

	var anchorScrolls = {
		ANCHOR_REGEX: /^#[^ ]+$/,
		OFFSET_HEIGHT_PX: 45,

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
