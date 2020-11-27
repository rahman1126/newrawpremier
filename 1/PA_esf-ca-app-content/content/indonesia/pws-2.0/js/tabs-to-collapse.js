// heavily modified BS4 version of https://github.com/openam/bootstrap-responsive-tabs
var tabsToCollapse = (function ($, tabsToCollapse) {
	"use strict";

	tabsToCollapse.responsiveTabs = function (collapseDisplayed) {
		tabsToCollapse.currentPosition = "tabs";

		var tabGroups = $(".nav-tabs.responsive");
		var hidden = "";
		var visible = "";
		var activeTab = "";

		hidden = " d-none d-lg-flex";
		visible = " d-lg-none";

		$.each(tabGroups, function (index) {
			var collapseDiv;
			var $tabGroup = $(this);
			var tabs = $tabGroup.find("li a");

			if ($tabGroup.attr("id") === undefined) {
				$tabGroup.attr("id", "tabs-" + index);
			}

			collapseDiv = $("<div></div>", {
				class: "card-soup responsive" + visible,
				id: "collapse-" + $tabGroup.attr("id"),
			});

			$.each(tabs, function () {
				var $this = $(this);
				var oldLinkClass = $this.attr("class") === undefined ? "" : $this.attr("class");
				var newLinkClass = "accordion-toggle tabs-to-collapse";
				var oldParentClass = $this.parent().attr("class") === undefined ? "" : $this.parent().attr("class");
				var newParentClass = "card";
				var newHash = $this.get(0).hash.replace("#", "collapse-");

				if (oldLinkClass.length > 0) {
					newLinkClass += " " + oldLinkClass;
				}

				if (oldParentClass.length > 0) {
					oldParentClass = oldParentClass.replace(/\bactive\b/g, "");
					newParentClass += " " + oldParentClass;
					newParentClass = newParentClass.replace(/\s{2,}/g, " ");
					newParentClass = newParentClass.replace(/^\s+|\s+$/g, "");
				}

				if ($this.parent().hasClass("active")) {
					activeTab = "#" + newHash;
				}

				collapseDiv.append(
					$("<div>")
						.attr("class", newParentClass)
						.html(
							$("<div>")
								.attr("class", "card-header collapsible-tabs border-radius-0")
								.html(
									$("<div>")
										.attr("class", "card-title h6 p-0 mb-0")
										.html(
											$("<a>", {
												class: newLinkClass,
												"data-toggle": "collapse",
												"data-disable-scroll": "true",
												"data-parent": "#collapse-" + $tabGroup.attr("id"),
												href: "#" + newHash,
												html: $this.html(),
											})
										)
								)
						)
						.append(
							$("<div>", {
								id: newHash,
								class: "collapse",
							})
						)
				);
			});

			$tabGroup.next().after(collapseDiv);
			$tabGroup.addClass(hidden);
			$(".tab-content.responsive").addClass(hidden);

			if (activeTab) {
				$(activeTab).collapse("show");
			}
		});

		tabsToCollapse.checkResize();
		tabsToCollapse.bindTabToCollapse();
	};

	tabsToCollapse.checkResize = function () {
		if ($(".card-soup.responsive").is(":visible") === true && tabsToCollapse.currentPosition === "tabs") {
			tabsToCollapse.tabToPanel();
			tabsToCollapse.currentPosition = "panel";
		} else if ($(".card-soup.responsive").is(":visible") === false && tabsToCollapse.currentPosition === "panel") {
			tabsToCollapse.panelToTab();
			tabsToCollapse.currentPosition = "tabs";
		}
	};

	tabsToCollapse.tabToPanel = function () {
		var tabGroups = $(".nav-tabs.responsive");

		$.each(tabGroups, function (index, tabGroup) {
			// Find the tab
			var tabContents = $(tabGroup).next(".tab-content").find(".tab-pane");

			$.each(tabContents, function (index, tabContent) {
				// Find the id to move the element to
				var destinationId = $(tabContent).attr("id").replace(/^/, "#collapse-");

				// Convert tab to panel and move to destination
				$(tabContent).removeClass("tab-pane").addClass("card-body fw-previous-tab-pane").appendTo($(destinationId));
			});
		});
	};

	tabsToCollapse.panelToTab = function () {
		var panelGroups = $(".card-soup.responsive");

		$.each(panelGroups, function (index, panelGroup) {
			var destinationId = $(panelGroup).attr("id").replace("collapse-", "#");
			var destination = $(destinationId).next(".tab-content")[0];

			// Find the panel contents
			var panelContents = $(panelGroup).find(".card-body.fw-previous-tab-pane");

			// Convert to tab and move to destination
			panelContents.removeClass("card-body fw-previous-tab-pane").addClass("tab-pane").appendTo($(destination));
		});
	};

	tabsToCollapse.bindTabToCollapse = function () {
		var tabs = $(".nav-tabs.responsive").find("li a");
		var collapse = $(".card-soup.responsive").find(".card-collapse");

		// Toggle the panels when the associated tab is toggled
		tabs.on("shown.bs.tab", function (e) {
			if (tabsToCollapse.currentPosition === "tabs") {
				var $current = $(e.currentTarget.hash.replace(/#/, "#collapse-"));
				$current.collapse("show");

				if (e.relatedTarget) {
					var $previous = $(e.relatedTarget.hash.replace(/#/, "#collapse-"));
					$previous.collapse("hide");
				}
			}
		});

		// Toggle the tab when the associated panel is toggled
		collapse.on("shown.bs.collapse", function (e) {
			if (tabsToCollapse.currentPosition === "panel") {
				// Activate current tabs
				var current = $(e.target).context.id.replace(/collapse-/g, "#");
				$('a[href="' + current + '"]').tab("show");

				// Update the content with active
				var panelGroup = $(e.currentTarget).closest(".card-soup.responsive");
				$(panelGroup).find(".card-body").removeClass("active");
				$(e.currentTarget).find(".card-body").addClass("active");

				// update chevron
				// $(this).parent().toggleClass("activated");
			}
		});
	};

	$(window).resize(function () {
		tabsToCollapse.checkResize();
	});

	return tabsToCollapse;
})(window.jQuery, tabsToCollapse || {});

tabsToCollapse.responsiveTabs();
