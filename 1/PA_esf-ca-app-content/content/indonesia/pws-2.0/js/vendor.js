!(function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports
		? (module.exports = e.document
				? t(e, !0)
				: function (e) {
						if (!e.document) throw new Error("jQuery requires a window with a document");
						return t(e);
				  })
		: t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
	"use strict";
	function n(e, t, n) {
		var r,
			i,
			o = (n = n || fe).createElement("script");
		if (((o.text = e), t)) for (r in pe) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o);
	}
	function r(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ie.call(e)] || "object" : typeof e;
	}
	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = r(e);
		return !le(e) && !ce(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
	}
	function o(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}
	function s(e, t, n) {
		return le(t)
			? he.grep(e, function (e, r) {
					return !!t.call(e, r, e) !== n;
			  })
			: t.nodeType
			? he.grep(e, function (e) {
					return (e === t) !== n;
			  })
			: "string" != typeof t
			? he.grep(e, function (e) {
					return -1 < ne.call(t, e) !== n;
			  })
			: he.filter(t, e, n);
	}
	function a(e, t) {
		for (; (e = e[t]) && 1 !== e.nodeType; );
		return e;
	}
	function u(e) {
		return e;
	}
	function l(e) {
		throw e;
	}
	function c(e, t, n, r) {
		var i;
		try {
			e && le((i = e.promise)) ? i.call(e).done(t).fail(n) : e && le((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}
	function f() {
		fe.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), he.ready();
	}
	function p(e, t) {
		return t.toUpperCase();
	}
	function d(e) {
		return e.replace(De, "ms-").replace(Ne, p);
	}
	function h() {
		this.expando = he.expando + h.uid++;
	}
	function g(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (((r = "data-" + t.replace(Oe, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
				try {
					n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : _e.test(i) ? JSON.parse(i) : i));
				} catch (e) {}
				qe.set(e, t, n);
			} else n = void 0;
		return n;
	}
	function v(e, t, n, r) {
		var i,
			o,
			s = 20,
			a = r
				? function () {
						return r.cur();
				  }
				: function () {
						return he.css(e, t, "");
				  },
			u = a(),
			l = (n && n[3]) || (he.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (he.cssNumber[t] || ("px" !== l && +u)) && Ie.exec(he.css(e, t));
		if (c && c[3] !== l) {
			for (u /= 2, l = l || c[3], c = +u || 1; s--; ) he.style(e, t, c + l), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (c /= o);
			(c *= 2), he.style(e, t, c + l), (n = n || []);
		}
		return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
	}
	function m(e, t) {
		for (var n, r, i, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
			(r = e[c]).style &&
				((n = r.style.display),
				t
					? ("none" === n && ((l[c] = Le.get(r, "display") || null), l[c] || (r.style.display = "")),
					  "" === r.style.display &&
							We(r) &&
							(l[c] =
								((u = s = o = void 0),
								(s = (i = r).ownerDocument),
								(a = i.nodeName),
								(u = Be[a]) || ((o = s.body.appendChild(s.createElement(a))), (u = he.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (Be[a] = u)))))
					: "none" !== n && ((l[c] = "none"), Le.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e;
	}
	function y(e, t) {
		var n;
		return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && o(e, t)) ? he.merge([e], n) : n;
	}
	function b(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"));
	}
	function x(e, t, n, i, o) {
		for (var s, a, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; h < g; h++)
			if ((s = e[h]) || 0 === s)
				if ("object" === r(s)) he.merge(d, s.nodeType ? [s] : s);
				else if (Ye.test(s)) {
					for (a = a || p.appendChild(t.createElement("div")), u = (Ve.exec(s) || ["", ""])[1].toLowerCase(), l = Ge[u] || Ge._default, a.innerHTML = l[1] + he.htmlPrefilter(s) + l[2], f = l[0]; f--; ) a = a.lastChild;
					he.merge(d, a.childNodes), ((a = p.firstChild).textContent = "");
				} else d.push(t.createTextNode(s));
		for (p.textContent = "", h = 0; (s = d[h++]); )
			if (i && -1 < he.inArray(s, i)) o && o.push(s);
			else if (((c = Pe(s)), (a = y(p.appendChild(s), "script")), c && b(a), n)) for (f = 0; (s = a[f++]); ) Xe.test(s.type || "") && n.push(s);
		return p;
	}
	function w() {
		return !0;
	}
	function T() {
		return !1;
	}
	function C(e, t) {
		return (
			(e ===
				(function () {
					try {
						return fe.activeElement;
					} catch (e) {}
				})()) ==
			("focus" === t)
		);
	}
	function E(e, t, n, r, i, o) {
		var s, a;
		if ("object" == typeof t) {
			for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) E(e, a, n, r, t[a], o);
			return e;
		}
		if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = T;
		else if (!i) return e;
		return (
			1 === o &&
				((s = i),
				((i = function (e) {
					return he().off(e), s.apply(this, arguments);
				}).guid = s.guid || (s.guid = he.guid++))),
			e.each(function () {
				he.event.add(this, t, i, r, n);
			})
		);
	}
	function S(e, t, n) {
		n
			? (Le.set(e, t, !1),
			  he.event.add(e, t, {
					namespace: !1,
					handler: function (e) {
						var r,
							i,
							o = Le.get(this, t);
						if (1 & e.isTrigger && this[t]) {
							if (o.length) (he.event.special[t] || {}).delegateType && e.stopPropagation();
							else if (((o = Z.call(arguments)), Le.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = Le.get(this, t)) || r ? Le.set(this, t, !1) : (i = {}), o !== i)) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
						} else o.length && (Le.set(this, t, { value: he.event.trigger(he.extend(o[0], he.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
					},
			  }))
			: void 0 === Le.get(e, t) && he.event.add(e, t, w);
	}
	function k(e, t) {
		return (o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") && he(e).children("tbody")[0]) || e;
	}
	function A(e) {
		return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
	}
	function D(e) {
		return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
	}
	function N(e, t) {
		var n, r, i, o, s, a;
		if (1 === t.nodeType) {
			if (Le.hasData(e) && (a = Le.get(e).events)) for (i in (Le.remove(t, "handle events"), a)) for (n = 0, r = a[i].length; n < r; n++) he.event.add(t, i, a[i][n]);
			qe.hasData(e) && ((o = qe.access(e)), (s = he.extend({}, o)), qe.set(t, s));
		}
	}
	function j(e, t, r, i) {
		t = ee(t);
		var o,
			s,
			a,
			u,
			l,
			c,
			f = 0,
			p = e.length,
			d = p - 1,
			h = t[0],
			g = le(h);
		if (g || (1 < p && "string" == typeof h && !ue.checkClone && et.test(h)))
			return e.each(function (n) {
				var o = e.eq(n);
				g && (t[0] = h.call(this, n, o.html())), j(o, t, r, i);
			});
		if (p && ((s = (o = x(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === o.childNodes.length && (o = s), s || i)) {
			for (u = (a = he.map(y(o, "script"), A)).length; f < p; f++) (l = o), f !== d && ((l = he.clone(l, !0, !0)), u && he.merge(a, y(l, "script"))), r.call(e[f], l, f);
			if (u)
				for (c = a[a.length - 1].ownerDocument, he.map(a, D), f = 0; f < u; f++)
					(l = a[f]),
						Xe.test(l.type || "") &&
							!Le.access(l, "globalEval") &&
							he.contains(c, l) &&
							(l.src && "module" !== (l.type || "").toLowerCase() ? he._evalUrl && !l.noModule && he._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : n(l.textContent.replace(tt, ""), l, c));
		}
		return e;
	}
	function L(e, t, n) {
		for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && Pe(r) && b(y(r, "script")), r.parentNode.removeChild(r));
		return e;
	}
	function q(e, t, n) {
		var r,
			i,
			o,
			s,
			a = e.style;
		return (
			(n = n || rt(e)) &&
				("" !== (s = n.getPropertyValue(t) || n[t]) || Pe(e) || (s = he.style(e, t)),
				!ue.pixelBoxStyles() && nt.test(s) && ot.test(t) && ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o))),
			void 0 !== s ? s + "" : s
		);
	}
	function _(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get;
			},
		};
	}
	function O(e) {
		var t = he.cssProps[e] || ut[e];
		return (
			t ||
			(e in at
				? e
				: (ut[e] =
						(function (e) {
							for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--; ) if ((e = st[n] + t) in at) return e;
						})(e) || e))
		);
	}
	function R(e, t, n) {
		var r = Ie.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
	}
	function I(e, t, n, r, i, o) {
		var s = "width" === t ? 1 : 0,
			a = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; s < 4; s += 2)
			"margin" === n && (u += he.css(e, n + He[s], !0, i)),
				r
					? ("content" === n && (u -= he.css(e, "padding" + He[s], !0, i)), "margin" !== n && (u -= he.css(e, "border" + He[s] + "Width", !0, i)))
					: ((u += he.css(e, "padding" + He[s], !0, i)), "padding" !== n ? (u += he.css(e, "border" + He[s] + "Width", !0, i)) : (a += he.css(e, "border" + He[s] + "Width", !0, i)));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - 0.5)) || 0), u;
	}
	function H(e, t, n) {
		var r = rt(e),
			i = (!ue.boxSizingReliable() || n) && "border-box" === he.css(e, "boxSizing", !1, r),
			s = i,
			a = q(e, t, r),
			u = "offset" + t[0].toUpperCase() + t.slice(1);
		if (nt.test(a)) {
			if (!n) return a;
			a = "auto";
		}
		return (
			((!ue.boxSizingReliable() && i) || (!ue.reliableTrDimensions() && o(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === he.css(e, "display", !1, r))) &&
				e.getClientRects().length &&
				((i = "border-box" === he.css(e, "boxSizing", !1, r)), (s = u in e) && (a = e[u])),
			(a = parseFloat(a) || 0) + I(e, t, n || (i ? "border" : "content"), s, r, a) + "px"
		);
	}
	function M(e, t, n, r, i) {
		return new M.prototype.init(e, t, n, r, i);
	}
	function P() {
		ht && (!1 === fe.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(P) : e.setTimeout(P, he.fx.interval), he.fx.tick());
	}
	function F() {
		return (
			e.setTimeout(function () {
				dt = void 0;
			}),
			(dt = Date.now())
		);
	}
	function W(e, t) {
		var n,
			r = 0,
			i = { height: e };
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = He[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i;
	}
	function B(e, t, n) {
		for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
	}
	function $(e, t, n) {
		var r,
			i,
			o = 0,
			s = $.prefilters.length,
			a = he.Deferred().always(function () {
				delete u.elem;
			}),
			u = function () {
				if (i) return !1;
				for (var t = dt || F(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
				return a.notifyWith(e, [l, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1);
			},
			l = a.promise({
				elem: e,
				props: he.extend({}, t),
				opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n),
				originalProperties: t,
				originalOptions: n,
				startTime: dt || F(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var r = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r;
				},
				stop: function (t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
				},
			}),
			c = l.props;
		for (
			(function (e, t) {
				var n, r, i, o, s;
				for (n in e)
					if (((i = t[(r = d(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = he.cssHooks[r]) && ("expand" in s)))
						for (n in ((o = s.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
					else t[r] = i;
			})(c, l.opts.specialEasing);
			o < s;
			o++
		)
			if ((r = $.prefilters[o].call(l, e, c, l.opts))) return le(r.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return he.map(c, B, l), le(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), he.fx.timer(he.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l;
	}
	function U(e) {
		return (e.match(Ee) || []).join(" ");
	}
	function z(e) {
		return (e.getAttribute && e.getAttribute("class")) || "";
	}
	function V(e) {
		return Array.isArray(e) ? e : ("string" == typeof e && e.match(Ee)) || [];
	}
	function X(e, t, n, i) {
		var o;
		if (Array.isArray(t))
			he.each(t, function (t, r) {
				n || Nt.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
			});
		else if (n || "object" !== r(t)) i(e, t);
		else for (o in t) X(e + "[" + o + "]", t[o], n, i);
	}
	function G(e) {
		return function (t, n) {
			"string" != typeof t && ((n = t), (t = "*"));
			var r,
				i = 0,
				o = t.toLowerCase().match(Ee) || [];
			if (le(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
		};
	}
	function Y(e, t, n, r) {
		function i(a) {
			var u;
			return (
				(o[a] = !0),
				he.each(e[a] || [], function (e, a) {
					var l = a(t, n, r);
					return "string" != typeof l || s || o[l] ? (s ? !(u = l) : void 0) : (t.dataTypes.unshift(l), i(l), !1);
				}),
				u
			);
		}
		var o = {},
			s = e === Ft;
		return i(t.dataTypes[0]) || (!o["*"] && i("*"));
	}
	function Q(e, t) {
		var n,
			r,
			i = he.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && he.extend(!0, e, r), e;
	}
	var J = [],
		K = Object.getPrototypeOf,
		Z = J.slice,
		ee = J.flat
			? function (e) {
					return J.flat.call(e);
			  }
			: function (e) {
					return J.concat.apply([], e);
			  },
		te = J.push,
		ne = J.indexOf,
		re = {},
		ie = re.toString,
		oe = re.hasOwnProperty,
		se = oe.toString,
		ae = se.call(Object),
		ue = {},
		le = function (e) {
			return "function" == typeof e && "number" != typeof e.nodeType;
		},
		ce = function (e) {
			return null != e && e === e.window;
		},
		fe = e.document,
		pe = { type: !0, src: !0, nonce: !0, noModule: !0 },
		de = "3.5.1",
		he = function (e, t) {
			return new he.fn.init(e, t);
		};
	(he.fn = he.prototype = {
		jquery: de,
		constructor: he,
		length: 0,
		toArray: function () {
			return Z.call(this);
		},
		get: function (e) {
			return null == e ? Z.call(this) : e < 0 ? this[e + this.length] : this[e];
		},
		pushStack: function (e) {
			var t = he.merge(this.constructor(), e);
			return (t.prevObject = this), t;
		},
		each: function (e) {
			return he.each(this, e);
		},
		map: function (e) {
			return this.pushStack(
				he.map(this, function (t, n) {
					return e.call(t, n, t);
				})
			);
		},
		slice: function () {
			return this.pushStack(Z.apply(this, arguments));
		},
		first: function () {
			return this.eq(0);
		},
		last: function () {
			return this.eq(-1);
		},
		even: function () {
			return this.pushStack(
				he.grep(this, function (e, t) {
					return (t + 1) % 2;
				})
			);
		},
		odd: function () {
			return this.pushStack(
				he.grep(this, function (e, t) {
					return t % 2;
				})
			);
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : []);
		},
		end: function () {
			return this.prevObject || this.constructor();
		},
		push: te,
		sort: J.sort,
		splice: J.splice,
	}),
		(he.extend = he.fn.extend = function () {
			var e,
				t,
				n,
				r,
				i,
				o,
				s = arguments[0] || {},
				a = 1,
				u = arguments.length,
				l = !1;
			for ("boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++), "object" == typeof s || le(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
				if (null != (e = arguments[a]))
					for (t in e)
						(r = e[t]),
							"__proto__" !== t &&
								s !== r &&
								(l && r && (he.isPlainObject(r) || (i = Array.isArray(r))) ? ((n = s[t]), (o = i && !Array.isArray(n) ? [] : i || he.isPlainObject(n) ? n : {}), (i = !1), (s[t] = he.extend(l, o, r))) : void 0 !== r && (s[t] = r));
			return s;
		}),
		he.extend({
			expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e);
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return !(!e || "[object Object]" !== ie.call(e) || ((t = K(e)) && ("function" != typeof (n = oe.call(t, "constructor") && t.constructor) || se.call(n) !== ae)));
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0;
			},
			globalEval: function (e, t, r) {
				n(e, { nonce: t && t.nonce }, r);
			},
			each: function (e, t) {
				var n,
					r = 0;
				if (i(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
				else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
				return e;
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n;
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : ne.call(t, e, n);
			},
			merge: function (e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return (e.length = i), e;
			},
			grep: function (e, t, n) {
				for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
				return r;
			},
			map: function (e, t, n) {
				var r,
					o,
					s = 0,
					a = [];
				if (i(e)) for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
				else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
				return ee(a);
			},
			guid: 1,
			support: ue,
		}),
		"function" == typeof Symbol && (he.fn[Symbol.iterator] = J[Symbol.iterator]),
		he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			re["[object " + t + "]"] = t.toLowerCase();
		});
	var ge = (function (e) {
		function t(e, t, n, r) {
			var i,
				o,
				s,
				a,
				u,
				l,
				c,
				p = t && t.ownerDocument,
				h = t ? t.nodeType : 9;
			if (((n = n || []), "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
			if (!r && (j(t), (t = t || L), _)) {
				if (11 !== h && (u = me.exec(e)))
					if ((i = u[1])) {
						if (9 === h) {
							if (!(s = t.getElementById(i))) return n;
							if (s.id === i) return n.push(s), n;
						} else if (p && (s = p.getElementById(i)) && H(t, s) && s.id === i) return n.push(s), n;
					} else {
						if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
						if ((i = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)), n;
					}
				if (x.qsa && !z[e + " "] && (!O || !O.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
					if (((c = e), (p = t), 1 === h && (le.test(e) || ue.test(e)))) {
						for (((p = (ye.test(e) && f(t.parentNode)) || t) === t && x.scope) || ((a = t.getAttribute("id")) ? (a = a.replace(we, Te)) : t.setAttribute("id", (a = M))), o = (l = E(e)).length; o--; ) l[o] = (a ? "#" + a : ":scope") + " " + d(l[o]);
						c = l.join(",");
					}
					try {
						return J.apply(n, p.querySelectorAll(c)), n;
					} catch (t) {
						z(e, !0);
					} finally {
						a === M && t.removeAttribute("id");
					}
				}
			}
			return k(e.replace(se, "$1"), t, n, r);
		}
		function n() {
			var e = [];
			return function t(n, r) {
				return e.push(n + " ") > w.cacheLength && delete t[e.shift()], (t[n + " "] = r);
			};
		}
		function r(e) {
			return (e[M] = !0), e;
		}
		function i(e) {
			var t = L.createElement("fieldset");
			try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), (t = null);
			}
		}
		function o(e, t) {
			for (var n = e.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = t;
		}
		function s(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
			return e ? 1 : -1;
		}
		function a(e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e;
			};
		}
		function u(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e;
			};
		}
		function l(e) {
			return function (t) {
				return "form" in t
					? t.parentNode && !1 === t.disabled
						? "label" in t
							? "label" in t.parentNode
								? t.parentNode.disabled === e
								: t.disabled === e
							: t.isDisabled === e || (t.isDisabled !== !e && Ee(t) === e)
						: t.disabled === e
					: "label" in t && t.disabled === e;
			};
		}
		function c(e) {
			return r(function (t) {
				return (
					(t = +t),
					r(function (n, r) {
						for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
					})
				);
			});
		}
		function f(e) {
			return e && void 0 !== e.getElementsByTagName && e;
		}
		function p() {}
		function d(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r;
		}
		function h(e, t, n) {
			var r = t.dir,
				i = t.next,
				o = i || r,
				s = n && "parentNode" === o,
				a = W++;
			return t.first
				? function (t, n, i) {
						for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
						return !1;
				  }
				: function (t, n, u) {
						var l,
							c,
							f,
							p = [F, a];
						if (u) {
							for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
						} else
							for (; (t = t[r]); )
								if (1 === t.nodeType || s)
									if (((c = (f = t[M] || (t[M] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
									else {
										if ((l = c[o]) && l[0] === F && l[1] === a) return (p[2] = l[2]);
										if (((c[o] = p)[2] = e(t, n, u))) return !0;
									}
						return !1;
				  };
		}
		function g(e) {
			return 1 < e.length
				? function (t, n, r) {
						for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
						return !0;
				  }
				: e[0];
		}
		function v(e, t, n, r, i) {
			for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
			return s;
		}
		function m(e, n, i, o, s, a) {
			return (
				o && !o[M] && (o = m(o)),
				s && !s[M] && (s = m(s, a)),
				r(function (r, a, u, l) {
					var c,
						f,
						p,
						d = [],
						h = [],
						g = a.length,
						m =
							r ||
							(function (e, n, r) {
								for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
								return r;
							})(n || "*", u.nodeType ? [u] : u, []),
						y = !e || (!r && n) ? m : v(m, d, e, u, l),
						b = i ? (s || (r ? e : g || o) ? [] : a) : y;
					if ((i && i(y, b, u, l), o)) for (c = v(b, h), o(c, [], u, l), f = c.length; f--; ) (p = c[f]) && (b[h[f]] = !(y[h[f]] = p));
					if (r) {
						if (s || e) {
							if (s) {
								for (c = [], f = b.length; f--; ) (p = b[f]) && c.push((y[f] = p));
								s(null, (b = []), c, l);
							}
							for (f = b.length; f--; ) (p = b[f]) && -1 < (c = s ? Z(r, p) : d[f]) && (r[c] = !(a[c] = p));
						}
					} else (b = v(b === a ? b.splice(g, b.length) : b)), s ? s(null, a, b, l) : J.apply(a, b);
				})
			);
		}
		function y(e) {
			for (
				var t,
					n,
					r,
					i = e.length,
					o = w.relative[e[0].type],
					s = o || w.relative[" "],
					a = o ? 1 : 0,
					u = h(
						function (e) {
							return e === t;
						},
						s,
						!0
					),
					l = h(
						function (e) {
							return -1 < Z(t, e);
						},
						s,
						!0
					),
					c = [
						function (e, n, r) {
							var i = (!o && (r || n !== A)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
							return (t = null), i;
						},
					];
				a < i;
				a++
			)
				if ((n = w.relative[e[a].type])) c = [h(g(c), n)];
				else {
					if ((n = w.filter[e[a].type].apply(null, e[a].matches))[M]) {
						for (r = ++a; r < i && !w.relative[e[r].type]; r++);
						return m(1 < a && g(c), 1 < a && d(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(se, "$1"), n, a < r && y(e.slice(a, r)), r < i && y((e = e.slice(r))), r < i && d(e));
					}
					c.push(n);
				}
			return g(c);
		}
		var b,
			x,
			w,
			T,
			C,
			E,
			S,
			k,
			A,
			D,
			N,
			j,
			L,
			q,
			_,
			O,
			R,
			I,
			H,
			M = "sizzle" + 1 * new Date(),
			P = e.document,
			F = 0,
			W = 0,
			B = n(),
			$ = n(),
			U = n(),
			z = n(),
			V = function (e, t) {
				return e === t && (N = !0), 0;
			},
			X = {}.hasOwnProperty,
			G = [],
			Y = G.pop,
			Q = G.push,
			J = G.push,
			K = G.slice,
			Z = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1;
			},
			ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			te = "[\\x20\\t\\r\\n\\f]",
			ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			re = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
			ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
			oe = new RegExp(te + "+", "g"),
			se = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
			ae = new RegExp("^" + te + "*," + te + "*"),
			ue = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
			le = new RegExp(te + "|>"),
			ce = new RegExp(ie),
			fe = new RegExp("^" + ne + "$"),
			pe = {
				ID: new RegExp("^#(" + ne + ")"),
				CLASS: new RegExp("^\\.(" + ne + ")"),
				TAG: new RegExp("^(" + ne + "|[*])"),
				ATTR: new RegExp("^" + re),
				PSEUDO: new RegExp("^" + ie),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ee + ")$", "i"),
				needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i"),
			},
			de = /HTML$/i,
			he = /^(?:input|select|textarea|button)$/i,
			ge = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			be = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])", "g"),
			xe = function (e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
			},
			we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Te = function (e, t) {
				return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
			},
			Ce = function () {
				j();
			},
			Ee = h(
				function (e) {
					return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
				},
				{ dir: "parentNode", next: "legend" }
			);
		try {
			J.apply((G = K.call(P.childNodes)), P.childNodes), G[P.childNodes.length].nodeType;
		} catch (b) {
			J = {
				apply: G.length
					? function (e, t) {
							Q.apply(e, K.call(t));
					  }
					: function (e, t) {
							for (var n = e.length, r = 0; (e[n++] = t[r++]); );
							e.length = n - 1;
					  },
			};
		}
		for (b in ((x = t.support = {}),
		(C = t.isXML = function (e) {
			var t = e.namespaceURI,
				n = (e.ownerDocument || e).documentElement;
			return !de.test(t || (n && n.nodeName) || "HTML");
		}),
		(j = t.setDocument = function (e) {
			var t,
				n,
				r = e ? e.ownerDocument || e : P;
			return (
				r != L &&
					9 === r.nodeType &&
					r.documentElement &&
					((q = (L = r).documentElement),
					(_ = !C(L)),
					P != L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
					(x.scope = i(function (e) {
						return q.appendChild(e).appendChild(L.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
					})),
					(x.attributes = i(function (e) {
						return (e.className = "i"), !e.getAttribute("className");
					})),
					(x.getElementsByTagName = i(function (e) {
						return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
					})),
					(x.getElementsByClassName = ve.test(L.getElementsByClassName)),
					(x.getById = i(function (e) {
						return (q.appendChild(e).id = M), !L.getElementsByName || !L.getElementsByName(M).length;
					})),
					x.getById
						? ((w.filter.ID = function (e) {
								var t = e.replace(be, xe);
								return function (e) {
									return e.getAttribute("id") === t;
								};
						  }),
						  (w.find.ID = function (e, t) {
								if (void 0 !== t.getElementById && _) {
									var n = t.getElementById(e);
									return n ? [n] : [];
								}
						  }))
						: ((w.filter.ID = function (e) {
								var t = e.replace(be, xe);
								return function (e) {
									var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
									return n && n.value === t;
								};
						  }),
						  (w.find.ID = function (e, t) {
								if (void 0 !== t.getElementById && _) {
									var n,
										r,
										i,
										o = t.getElementById(e);
									if (o) {
										if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
										for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
									}
									return [];
								}
						  })),
					(w.find.TAG = x.getElementsByTagName
						? function (e, t) {
								return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
						  }
						: function (e, t) {
								var n,
									r = [],
									i = 0,
									o = t.getElementsByTagName(e);
								if ("*" === e) {
									for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
									return r;
								}
								return o;
						  }),
					(w.find.CLASS =
						x.getElementsByClassName &&
						function (e, t) {
							if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e);
						}),
					(R = []),
					(O = []),
					(x.qsa = ve.test(L.querySelectorAll)) &&
						(i(function (e) {
							var t;
							(q.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
								e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + te + "*(?:''|\"\")"),
								e.querySelectorAll("[selected]").length || O.push("\\[" + te + "*(?:value|" + ee + ")"),
								e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="),
								(t = L.createElement("input")).setAttribute("name", ""),
								e.appendChild(t),
								e.querySelectorAll("[name='']").length || O.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"),
								e.querySelectorAll(":checked").length || O.push(":checked"),
								e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]"),
								e.querySelectorAll("\\\f"),
								O.push("[\\r\\n\\f]");
						}),
						i(function (e) {
							e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = L.createElement("input");
							t.setAttribute("type", "hidden"),
								e.appendChild(t).setAttribute("name", "D"),
								e.querySelectorAll("[name=d]").length && O.push("name" + te + "*[*^$|!~]?="),
								2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
								(q.appendChild(e).disabled = !0),
								2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
								e.querySelectorAll("*,:x"),
								O.push(",.*:");
						})),
					(x.matchesSelector = ve.test((I = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector))) &&
						i(function (e) {
							(x.disconnectedMatch = I.call(e, "*")), I.call(e, "[s!='']:x"), R.push("!=", ie);
						}),
					(O = O.length && new RegExp(O.join("|"))),
					(R = R.length && new RegExp(R.join("|"))),
					(t = ve.test(q.compareDocumentPosition)),
					(H =
						t || ve.test(q.contains)
							? function (e, t) {
									var n = 9 === e.nodeType ? e.documentElement : e,
										r = t && t.parentNode;
									return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
							  }
							: function (e, t) {
									if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
									return !1;
							  }),
					(V = t
						? function (e, t) {
								if (e === t) return (N = !0), 0;
								var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
								return (
									n ||
									(1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!x.sortDetached && t.compareDocumentPosition(e) === n)
										? e == L || (e.ownerDocument == P && H(P, e))
											? -1
											: t == L || (t.ownerDocument == P && H(P, t))
											? 1
											: D
											? Z(D, e) - Z(D, t)
											: 0
										: 4 & n
										? -1
										: 1)
								);
						  }
						: function (e, t) {
								if (e === t) return (N = !0), 0;
								var n,
									r = 0,
									i = e.parentNode,
									o = t.parentNode,
									a = [e],
									u = [t];
								if (!i || !o) return e == L ? -1 : t == L ? 1 : i ? -1 : o ? 1 : D ? Z(D, e) - Z(D, t) : 0;
								if (i === o) return s(e, t);
								for (n = e; (n = n.parentNode); ) a.unshift(n);
								for (n = t; (n = n.parentNode); ) u.unshift(n);
								for (; a[r] === u[r]; ) r++;
								return r ? s(a[r], u[r]) : a[r] == P ? -1 : u[r] == P ? 1 : 0;
						  })),
				L
			);
		}),
		(t.matches = function (e, n) {
			return t(e, null, null, n);
		}),
		(t.matchesSelector = function (e, n) {
			if ((j(e), x.matchesSelector && _ && !z[n + " "] && (!R || !R.test(n)) && (!O || !O.test(n))))
				try {
					var r = I.call(e, n);
					if (r || x.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
				} catch (e) {
					z(n, !0);
				}
			return 0 < t(n, L, null, [e]).length;
		}),
		(t.contains = function (e, t) {
			return (e.ownerDocument || e) != L && j(e), H(e, t);
		}),
		(t.attr = function (e, t) {
			(e.ownerDocument || e) != L && j(e);
			var n = w.attrHandle[t.toLowerCase()],
				r = n && X.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
			return void 0 !== r ? r : x.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
		}),
		(t.escape = function (e) {
			return (e + "").replace(we, Te);
		}),
		(t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e);
		}),
		(t.uniqueSort = function (e) {
			var t,
				n = [],
				r = 0,
				i = 0;
			if (((N = !x.detectDuplicates), (D = !x.sortStable && e.slice(0)), e.sort(V), N)) {
				for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
				for (; r--; ) e.splice(n[r], 1);
			}
			return (D = null), e;
		}),
		(T = t.getText = function (e) {
			var t,
				n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
				} else if (3 === i || 4 === i) return e.nodeValue;
			} else for (; (t = e[r++]); ) n += T(t);
			return n;
		}),
		((w = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pe,
			attrHandle: {},
			find: {},
			relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
			preFilter: {
				ATTR: function (e) {
					return (e[1] = e[1].replace(be, xe)), (e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
				},
				CHILD: function (e) {
					return (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && t.error(e[0]), e;
				},
				PSEUDO: function (e) {
					var t,
						n = !e[6] && e[2];
					return pe.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ce.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
				},
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(be, xe).toLowerCase();
					return "*" === e
						? function () {
								return !0;
						  }
						: function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t;
						  };
				},
				CLASS: function (e) {
					var t = B[e + " "];
					return (
						t ||
						((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
							B(e, function (e) {
								return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
							}))
					);
				},
				ATTR: function (e, n, r) {
					return function (i) {
						var o = t.attr(i, e);
						return null == o
							? "!=" === n
							: !n ||
									((o += ""),
									"=" === n
										? o === r
										: "!=" === n
										? o !== r
										: "^=" === n
										? r && 0 === o.indexOf(r)
										: "*=" === n
										? r && -1 < o.indexOf(r)
										: "$=" === n
										? r && o.slice(-r.length) === r
										: "~=" === n
										? -1 < (" " + o.replace(oe, " ") + " ").indexOf(r)
										: "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
					};
				},
				CHILD: function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						a = "of-type" === t;
					return 1 === r && 0 === i
						? function (e) {
								return !!e.parentNode;
						  }
						: function (t, n, u) {
								var l,
									c,
									f,
									p,
									d,
									h,
									g = o !== s ? "nextSibling" : "previousSibling",
									v = t.parentNode,
									m = a && t.nodeName.toLowerCase(),
									y = !u && !a,
									b = !1;
								if (v) {
									if (o) {
										for (; g; ) {
											for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
											h = g = "only" === e && !h && "nextSibling";
										}
										return !0;
									}
									if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
										for (b = (d = (l = (c = (f = (p = v)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === F && l[1]) && l[2], p = d && v.childNodes[d]; (p = (++d && p && p[g]) || (b = d = 0) || h.pop()); )
											if (1 === p.nodeType && ++b && p === t) {
												c[e] = [F, d, b];
												break;
											}
									} else if ((y && (b = d = (l = (c = (f = (p = t)[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === F && l[1]), !1 === b))
										for (
											;
											(p = (++d && p && p[g]) || (b = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((c = (f = p[M] || (p[M] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [F, b]), p !== t));

										);
									return (b -= i) === r || (b % r == 0 && 0 <= b / r);
								}
						  };
				},
				PSEUDO: function (e, n) {
					var i,
						o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[M]
						? o(n)
						: 1 < o.length
						? ((i = [e, e, "", n]),
						  w.setFilters.hasOwnProperty(e.toLowerCase())
								? r(function (e, t) {
										for (var r, i = o(e, n), s = i.length; s--; ) e[(r = Z(e, i[s]))] = !(t[r] = i[s]);
								  })
								: function (e) {
										return o(e, 0, i);
								  })
						: o;
				},
			},
			pseudos: {
				not: r(function (e) {
					var t = [],
						n = [],
						i = S(e.replace(se, "$1"));
					return i[M]
						? r(function (e, t, n, r) {
								for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
						  })
						: function (e, r, o) {
								return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
						  };
				}),
				has: r(function (e) {
					return function (n) {
						return 0 < t(e, n).length;
					};
				}),
				contains: r(function (e) {
					return (
						(e = e.replace(be, xe)),
						function (t) {
							return -1 < (t.textContent || T(t)).indexOf(e);
						}
					);
				}),
				lang: r(function (e) {
					return (
						fe.test(e || "") || t.error("unsupported lang: " + e),
						(e = e.replace(be, xe).toLowerCase()),
						function (t) {
							var n;
							do {
								if ((n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1;
						}
					);
				}),
				target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id;
				},
				root: function (e) {
					return e === q;
				},
				focus: function (e) {
					return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
				},
				enabled: l(!1),
				disabled: l(!0),
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
					return !0;
				},
				parent: function (e) {
					return !w.pseudos.empty(e);
				},
				header: function (e) {
					return ge.test(e.nodeName);
				},
				input: function (e) {
					return he.test(e.nodeName);
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t && "button" === e.type) || "button" === t;
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
				},
				first: c(function () {
					return [0];
				}),
				last: c(function (e, t) {
					return [t - 1];
				}),
				eq: c(function (e, t, n) {
					return [n < 0 ? n + t : n];
				}),
				even: c(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e;
				}),
				odd: c(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e;
				}),
				lt: c(function (e, t, n) {
					for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
					return e;
				}),
				gt: c(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
					return e;
				}),
			},
		}).pseudos.nth = w.pseudos.eq),
		{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
			w.pseudos[b] = a(b);
		for (b in { submit: !0, reset: !0 }) w.pseudos[b] = u(b);
		return (
			(p.prototype = w.filters = w.pseudos),
			(w.setFilters = new p()),
			(E = t.tokenize = function (e, n) {
				var r,
					i,
					o,
					s,
					a,
					u,
					l,
					c = $[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (a = e, u = [], l = w.preFilter; a; ) {
					for (s in ((r && !(i = ae.exec(a))) || (i && (a = a.slice(i[0].length) || a), u.push((o = []))), (r = !1), (i = ue.exec(a)) && ((r = i.shift()), o.push({ value: r, type: i[0].replace(se, " ") }), (a = a.slice(r.length))), w.filter))
						!(i = pe[s].exec(a)) || (l[s] && !(i = l[s](i))) || ((r = i.shift()), o.push({ value: r, type: s, matches: i }), (a = a.slice(r.length)));
					if (!r) break;
				}
				return n ? a.length : a ? t.error(e) : $(e, u).slice(0);
			}),
			(S = t.compile = function (e, n) {
				var i,
					o,
					s,
					a,
					u,
					l,
					c = [],
					f = [],
					p = U[e + " "];
				if (!p) {
					for (n || (n = E(e)), i = n.length; i--; ) (p = y(n[i]))[M] ? c.push(p) : f.push(p);
					(p = U(
						e,
						((o = f),
						(a = 0 < (s = c).length),
						(u = 0 < o.length),
						(l = function (e, n, r, i, l) {
							var c,
								f,
								p,
								d = 0,
								h = "0",
								g = e && [],
								m = [],
								y = A,
								b = e || (u && w.find.TAG("*", l)),
								x = (F += null == y ? 1 : Math.random() || 0.1),
								T = b.length;
							for (l && (A = n == L || n || l); h !== T && null != (c = b[h]); h++) {
								if (u && c) {
									for (f = 0, n || c.ownerDocument == L || (j(c), (r = !_)); (p = o[f++]); )
										if (p(c, n || L, r)) {
											i.push(c);
											break;
										}
									l && (F = x);
								}
								a && ((c = !p && c) && d--, e && g.push(c));
							}
							if (((d += h), a && h !== d)) {
								for (f = 0; (p = s[f++]); ) p(g, m, n, r);
								if (e) {
									if (0 < d) for (; h--; ) g[h] || m[h] || (m[h] = Y.call(i));
									m = v(m);
								}
								J.apply(i, m), l && !e && 0 < m.length && 1 < d + s.length && t.uniqueSort(i);
							}
							return l && ((F = x), (A = y)), g;
						}),
						a ? r(l) : l)
					)).selector = e;
				}
				return p;
			}),
			(k = t.select = function (e, t, n, r) {
				var i,
					o,
					s,
					a,
					u,
					l = "function" == typeof e && e,
					c = !r && E((e = l.selector || e));
				if (((n = n || []), 1 === c.length)) {
					if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && _ && w.relative[o[1].type]) {
						if (!(t = (w.find.ID(s.matches[0].replace(be, xe), t) || [])[0])) return n;
						l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
					}
					for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && ((s = o[i]), !w.relative[(a = s.type)]); )
						if ((u = w.find[a]) && (r = u(s.matches[0].replace(be, xe), (ye.test(o[0].type) && f(t.parentNode)) || t))) {
							if ((o.splice(i, 1), !(e = r.length && d(o)))) return J.apply(n, r), n;
							break;
						}
				}
				return (l || S(e, c))(r, t, !_, n, !t || (ye.test(e) && f(t.parentNode)) || t), n;
			}),
			(x.sortStable = M.split("").sort(V).join("") === M),
			(x.detectDuplicates = !!N),
			j(),
			(x.sortDetached = i(function (e) {
				return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
			})),
			i(function (e) {
				return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
			}) ||
				o("type|href|height|width", function (e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
				}),
			(x.attributes &&
				i(function (e) {
					return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
				})) ||
				o("value", function (e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
				}),
			i(function (e) {
				return null == e.getAttribute("disabled");
			}) ||
				o(ee, function (e, t, n) {
					var r;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
				}),
			t
		);
	})(e);
	(he.find = ge), (he.expr = ge.selectors), (he.expr[":"] = he.expr.pseudos), (he.uniqueSort = he.unique = ge.uniqueSort), (he.text = ge.getText), (he.isXMLDoc = ge.isXML), (he.contains = ge.contains), (he.escapeSelector = ge.escape);
	var ve = function (e, t, n) {
			for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
				if (1 === e.nodeType) {
					if (i && he(e).is(n)) break;
					r.push(e);
				}
			return r;
		},
		me = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n;
		},
		ye = he.expr.match.needsContext,
		be = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	(he.filter = function (e, t, n) {
		var r = t[0];
		return (
			n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === r.nodeType
				? he.find.matchesSelector(r, e)
					? [r]
					: []
				: he.find.matches(
						e,
						he.grep(t, function (e) {
							return 1 === e.nodeType;
						})
				  )
		);
	}),
		he.fn.extend({
			find: function (e) {
				var t,
					n,
					r = this.length,
					i = this;
				if ("string" != typeof e)
					return this.pushStack(
						he(e).filter(function () {
							for (t = 0; t < r; t++) if (he.contains(i[t], this)) return !0;
						})
					);
				for (n = this.pushStack([]), t = 0; t < r; t++) he.find(e, i[t], n);
				return 1 < r ? he.uniqueSort(n) : n;
			},
			filter: function (e) {
				return this.pushStack(s(this, e || [], !1));
			},
			not: function (e) {
				return this.pushStack(s(this, e || [], !0));
			},
			is: function (e) {
				return !!s(this, "string" == typeof e && ye.test(e) ? he(e) : e || [], !1).length;
			},
		});
	var xe,
		we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	((he.fn.init = function (e, t, n) {
		var r, i;
		if (!e) return this;
		if (((n = n || xe), "string" == typeof e)) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : we.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (((t = t instanceof he ? t[0] : t), he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), be.test(r[1]) && he.isPlainObject(t))) for (r in t) le(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this;
			}
			return (i = fe.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
		}
		return e.nodeType ? ((this[0] = e), (this.length = 1), this) : le(e) ? (void 0 !== n.ready ? n.ready(e) : e(he)) : he.makeArray(e, this);
	}).prototype = he.fn),
		(xe = he(fe));
	var Te = /^(?:parents|prev(?:Until|All))/,
		Ce = { children: !0, contents: !0, next: !0, prev: !0 };
	he.fn.extend({
		has: function (e) {
			var t = he(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++) if (he.contains(this, t[e])) return !0;
			});
		},
		closest: function (e, t) {
			var n,
				r = 0,
				i = this.length,
				o = [],
				s = "string" != typeof e && he(e);
			if (!ye.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
							o.push(n);
							break;
						}
			return this.pushStack(1 < o.length ? he.uniqueSort(o) : o);
		},
		index: function (e) {
			return e ? ("string" == typeof e ? ne.call(he(e), this[0]) : ne.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		},
		add: function (e, t) {
			return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))));
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		},
	}),
		he.each(
			{
				parent: function (e) {
					var t = e.parentNode;
					return t && 11 !== t.nodeType ? t : null;
				},
				parents: function (e) {
					return ve(e, "parentNode");
				},
				parentsUntil: function (e, t, n) {
					return ve(e, "parentNode", n);
				},
				next: function (e) {
					return a(e, "nextSibling");
				},
				prev: function (e) {
					return a(e, "previousSibling");
				},
				nextAll: function (e) {
					return ve(e, "nextSibling");
				},
				prevAll: function (e) {
					return ve(e, "previousSibling");
				},
				nextUntil: function (e, t, n) {
					return ve(e, "nextSibling", n);
				},
				prevUntil: function (e, t, n) {
					return ve(e, "previousSibling", n);
				},
				siblings: function (e) {
					return me((e.parentNode || {}).firstChild, e);
				},
				children: function (e) {
					return me(e.firstChild);
				},
				contents: function (e) {
					return null != e.contentDocument && K(e.contentDocument) ? e.contentDocument : (o(e, "template") && (e = e.content || e), he.merge([], e.childNodes));
				},
			},
			function (e, t) {
				he.fn[e] = function (n, r) {
					var i = he.map(this, t, n);
					return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), 1 < this.length && (Ce[e] || he.uniqueSort(i), Te.test(e) && i.reverse()), this.pushStack(i);
				};
			}
		);
	var Ee = /[^\x20\t\r\n\f]+/g;
	(he.Callbacks = function (e) {
		var t, n;
		e =
			"string" == typeof e
				? ((t = e),
				  (n = {}),
				  he.each(t.match(Ee) || [], function (e, t) {
						n[t] = !0;
				  }),
				  n)
				: he.extend({}, e);
		var i,
			o,
			s,
			a,
			u = [],
			l = [],
			c = -1,
			f = function () {
				for (a = a || e.once, s = i = !0; l.length; c = -1) for (o = l.shift(); ++c < u.length; ) !1 === u[c].apply(o[0], o[1]) && e.stopOnFalse && ((c = u.length), (o = !1));
				e.memory || (o = !1), (i = !1), a && (u = o ? [] : "");
			},
			p = {
				add: function () {
					return (
						u &&
							(o && !i && ((c = u.length - 1), l.push(o)),
							(function t(n) {
								he.each(n, function (n, i) {
									le(i) ? (e.unique && p.has(i)) || u.push(i) : i && i.length && "string" !== r(i) && t(i);
								});
							})(arguments),
							o && !i && f()),
						this
					);
				},
				remove: function () {
					return (
						he.each(arguments, function (e, t) {
							for (var n; -1 < (n = he.inArray(t, u, n)); ) u.splice(n, 1), n <= c && c--;
						}),
						this
					);
				},
				has: function (e) {
					return e ? -1 < he.inArray(e, u) : 0 < u.length;
				},
				empty: function () {
					return u && (u = []), this;
				},
				disable: function () {
					return (a = l = []), (u = o = ""), this;
				},
				disabled: function () {
					return !u;
				},
				lock: function () {
					return (a = l = []), o || i || (u = o = ""), this;
				},
				locked: function () {
					return !!a;
				},
				fireWith: function (e, t) {
					return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i || f()), this;
				},
				fire: function () {
					return p.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!s;
				},
			};
		return p;
	}),
		he.extend({
			Deferred: function (t) {
				var n = [
						["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
						["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"],
					],
					r = "pending",
					i = {
						state: function () {
							return r;
						},
						always: function () {
							return o.done(arguments).fail(arguments), this;
						},
						catch: function (e) {
							return i.then(null, e);
						},
						pipe: function () {
							var e = arguments;
							return he
								.Deferred(function (t) {
									he.each(n, function (n, r) {
										var i = le(e[r[4]]) && e[r[4]];
										o[r[1]](function () {
											var e = i && i.apply(this, arguments);
											e && le(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
										});
									}),
										(e = null);
								})
								.promise();
						},
						then: function (t, r, i) {
							function o(t, n, r, i) {
								return function () {
									var a = this,
										c = arguments,
										f = function () {
											var e, f;
											if (!(t < s)) {
												if ((e = r.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
												(f = e && ("object" == typeof e || "function" == typeof e) && e.then),
													le(f) ? (i ? f.call(e, o(s, n, u, i), o(s, n, l, i)) : (s++, f.call(e, o(s, n, u, i), o(s, n, l, i), o(s, n, u, n.notifyWith)))) : (r !== u && ((a = void 0), (c = [e])), (i || n.resolveWith)(a, c));
											}
										},
										p = i
											? f
											: function () {
													try {
														f();
													} catch (e) {
														he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), s <= t + 1 && (r !== l && ((a = void 0), (c = [e])), n.rejectWith(a, c));
													}
											  };
									t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p));
								};
							}
							var s = 0;
							return he
								.Deferred(function (e) {
									n[0][3].add(o(0, e, le(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, le(t) ? t : u)), n[2][3].add(o(0, e, le(r) ? r : l));
								})
								.promise();
						},
						promise: function (e) {
							return null != e ? he.extend(e, i) : i;
						},
					},
					o = {};
				return (
					he.each(n, function (e, t) {
						var s = t[2],
							a = t[5];
						(i[t[1]] = s.add),
							a &&
								s.add(
									function () {
										r = a;
									},
									n[3 - e][2].disable,
									n[3 - e][3].disable,
									n[0][2].lock,
									n[0][3].lock
								),
							s.add(t[3].fire),
							(o[t[0]] = function () {
								return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
							}),
							(o[t[0] + "With"] = s.fireWith);
					}),
					i.promise(o),
					t && t.call(o, o),
					o
				);
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					r = Array(n),
					i = Z.call(arguments),
					o = he.Deferred(),
					s = function (e) {
						return function (n) {
							(r[e] = this), (i[e] = 1 < arguments.length ? Z.call(arguments) : n), --t || o.resolveWith(r, i);
						};
					};
				if (t <= 1 && (c(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || le(i[n] && i[n].then))) return o.then();
				for (; n--; ) c(i[n], s(n), o.reject);
				return o.promise();
			},
		});
	var Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	(he.Deferred.exceptionHook = function (t, n) {
		e.console && e.console.warn && t && Se.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
	}),
		(he.readyException = function (t) {
			e.setTimeout(function () {
				throw t;
			});
		});
	var ke = he.Deferred();
	(he.fn.ready = function (e) {
		return (
			ke.then(e).catch(function (e) {
				he.readyException(e);
			}),
			this
		);
	}),
		he.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --he.readyWait : he.isReady) || ((he.isReady = !0) !== e && 0 < --he.readyWait) || ke.resolveWith(fe, [he]);
			},
		}),
		(he.ready.then = ke.then),
		"complete" === fe.readyState || ("loading" !== fe.readyState && !fe.documentElement.doScroll) ? e.setTimeout(he.ready) : (fe.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
	var Ae = function (e, t, n, i, o, s, a) {
			var u = 0,
				l = e.length,
				c = null == n;
			if ("object" === r(n)) for (u in ((o = !0), n)) Ae(e, t, u, n[u], !0, s, a);
			else if (
				void 0 !== i &&
				((o = !0),
				le(i) || (a = !0),
				c &&
					(a
						? (t.call(e, i), (t = null))
						: ((c = t),
						  (t = function (e, t, n) {
								return c.call(he(e), n);
						  }))),
				t)
			)
				for (; u < l; u++) t(e[u], n, a ? i : i.call(e[u], u, t(e[u], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
		},
		De = /^-ms-/,
		Ne = /-([a-z])/g,
		je = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
		};
	(h.uid = 1),
		(h.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || ((t = {}), je(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
			},
			set: function (e, t, n) {
				var r,
					i = this.cache(e);
				if ("string" == typeof t) i[d(t)] = n;
				else for (r in t) i[d(r)] = t[r];
				return i;
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][d(t)];
			},
			access: function (e, t, n) {
				return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
			},
			remove: function (e, t) {
				var n,
					r = e[this.expando];
				if (void 0 !== r) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t) ? t.map(d) : (t = d(t)) in r ? [t] : t.match(Ee) || []).length;
						for (; n--; ) delete r[t[n]];
					}
					(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !he.isEmptyObject(t);
			},
		});
	var Le = new h(),
		qe = new h(),
		_e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Oe = /[A-Z]/g;
	he.extend({
		hasData: function (e) {
			return qe.hasData(e) || Le.hasData(e);
		},
		data: function (e, t, n) {
			return qe.access(e, t, n);
		},
		removeData: function (e, t) {
			qe.remove(e, t);
		},
		_data: function (e, t, n) {
			return Le.access(e, t, n);
		},
		_removeData: function (e, t) {
			Le.remove(e, t);
		},
	}),
		he.fn.extend({
			data: function (e, t) {
				var n,
					r,
					i,
					o = this[0],
					s = o && o.attributes;
				if (void 0 === e) {
					if (this.length && ((i = qe.get(o)), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
						for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && ((r = d(r.slice(5))), g(o, r, i[r]));
						Le.set(o, "hasDataAttrs", !0);
					}
					return i;
				}
				return "object" == typeof e
					? this.each(function () {
							qe.set(this, e);
					  })
					: Ae(
							this,
							function (t) {
								var n;
								if (o && void 0 === t) return void 0 !== (n = qe.get(o, e)) ? n : void 0 !== (n = g(o, e)) ? n : void 0;
								this.each(function () {
									qe.set(this, e, t);
								});
							},
							null,
							t,
							1 < arguments.length,
							null,
							!0
					  );
			},
			removeData: function (e) {
				return this.each(function () {
					qe.remove(this, e);
				});
			},
		}),
		he.extend({
			queue: function (e, t, n) {
				var r;
				if (e) return (t = (t || "fx") + "queue"), (r = Le.get(e, t)), n && (!r || Array.isArray(n) ? (r = Le.access(e, t, he.makeArray(n))) : r.push(n)), r || [];
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = he.queue(e, t),
					r = n.length,
					i = n.shift(),
					o = he._queueHooks(e, t);
				"inprogress" === i && ((i = n.shift()), r--),
					i &&
						("fx" === t && n.unshift("inprogress"),
						delete o.stop,
						i.call(
							e,
							function () {
								he.dequeue(e, t);
							},
							o
						)),
					!r && o && o.empty.fire();
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return (
					Le.get(e, n) ||
					Le.access(e, n, {
						empty: he.Callbacks("once memory").add(function () {
							Le.remove(e, [t + "queue", n]);
						}),
					})
				);
			},
		}),
		he.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return (
					"string" != typeof e && ((t = e), (e = "fx"), n--),
					arguments.length < n
						? he.queue(this[0], e)
						: void 0 === t
						? this
						: this.each(function () {
								var n = he.queue(this, e, t);
								he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e);
						  })
				);
			},
			dequeue: function (e) {
				return this.each(function () {
					he.dequeue(this, e);
				});
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", []);
			},
			promise: function (e, t) {
				var n,
					r = 1,
					i = he.Deferred(),
					o = this,
					s = this.length,
					a = function () {
						--r || i.resolveWith(o, [o]);
					};
				for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Le.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
				return a(), i.promise(t);
			},
		});
	var Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ie = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
		He = ["Top", "Right", "Bottom", "Left"],
		Me = fe.documentElement,
		Pe = function (e) {
			return he.contains(e.ownerDocument, e);
		},
		Fe = { composed: !0 };
	Me.getRootNode &&
		(Pe = function (e) {
			return he.contains(e.ownerDocument, e) || e.getRootNode(Fe) === e.ownerDocument;
		});
	var We = function (e, t) {
			return "none" === (e = t || e).style.display || ("" === e.style.display && Pe(e) && "none" === he.css(e, "display"));
		},
		Be = {};
	he.fn.extend({
		show: function () {
			return m(this, !0);
		},
		hide: function () {
			return m(this);
		},
		toggle: function (e) {
			return "boolean" == typeof e
				? e
					? this.show()
					: this.hide()
				: this.each(function () {
						We(this) ? he(this).show() : he(this).hide();
				  });
		},
	});
	var $e,
		Ue,
		ze = /^(?:checkbox|radio)$/i,
		Ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		Xe = /^$|^module$|\/(?:java|ecma)script/i;
	($e = fe.createDocumentFragment().appendChild(fe.createElement("div"))),
		(Ue = fe.createElement("input")).setAttribute("type", "radio"),
		Ue.setAttribute("checked", "checked"),
		Ue.setAttribute("name", "t"),
		$e.appendChild(Ue),
		(ue.checkClone = $e.cloneNode(!0).cloneNode(!0).lastChild.checked),
		($e.innerHTML = "<textarea>x</textarea>"),
		(ue.noCloneChecked = !!$e.cloneNode(!0).lastChild.defaultValue),
		($e.innerHTML = "<option></option>"),
		(ue.option = !!$e.lastChild);
	var Ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
	(Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead), (Ge.th = Ge.td), ue.option || (Ge.optgroup = Ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var Ye = /<|&#?\w+;/,
		Qe = /^key/,
		Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ke = /^([^.]*)(?:\.(.+)|)/;
	(he.event = {
		global: {},
		add: function (e, t, n, r, i) {
			var o,
				s,
				a,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = Le.get(e);
			if (je(e))
				for (
					n.handler && ((n = (o = n).handler), (i = o.selector)),
						i && he.find.matchesSelector(Me, i),
						n.guid || (n.guid = he.guid++),
						(u = v.events) || (u = v.events = Object.create(null)),
						(s = v.handle) ||
							(s = v.handle = function (t) {
								return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0;
							}),
						l = (t = (t || "").match(Ee) || [""]).length;
					l--;

				)
					(d = g = (a = Ke.exec(t[l]) || [])[1]),
						(h = (a[2] || "").split(".").sort()),
						d &&
							((f = he.event.special[d] || {}),
							(d = (i ? f.delegateType : f.bindType) || d),
							(f = he.event.special[d] || {}),
							(c = he.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && he.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
							(p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, s)) || (e.addEventListener && e.addEventListener(d, s))),
							f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
							i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
							(he.event.global[d] = !0));
		},
		remove: function (e, t, n, r, i) {
			var o,
				s,
				a,
				u,
				l,
				c,
				f,
				p,
				d,
				h,
				g,
				v = Le.hasData(e) && Le.get(e);
			if (v && (u = v.events)) {
				for (l = (t = (t || "").match(Ee) || [""]).length; l--; )
					if (((d = g = (a = Ke.exec(t[l]) || [])[1]), (h = (a[2] || "").split(".").sort()), d)) {
						for (f = he.event.special[d] || {}, p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
							(c = p[o]),
								(!i && g !== c.origType) || (n && n.guid !== c.guid) || (a && !a.test(c.namespace)) || (r && r !== c.selector && ("**" !== r || !c.selector)) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						s && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || he.removeEvent(e, d, v.handle), delete u[d]);
					} else for (d in u) he.event.remove(e, d + t[l], n, r, !0);
				he.isEmptyObject(u) && Le.remove(e, "handle events");
			}
		},
		dispatch: function (e) {
			var t,
				n,
				r,
				i,
				o,
				s,
				a = new Array(arguments.length),
				u = he.event.fix(e),
				l = (Le.get(this, "events") || Object.create(null))[u.type] || [],
				c = he.event.special[u.type] || {};
			for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
			if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
				for (s = he.event.handlers.call(this, u, l), t = 0; (i = s[t++]) && !u.isPropagationStopped(); )
					for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
						(u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
							((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, u), u.result;
			}
		},
		handlers: function (e, t) {
			var n,
				r,
				i,
				o,
				s,
				a = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[(i = (r = t[n]).selector + " ")] && (s[i] = r.needsContext ? -1 < he(i, this).index(l) : he.find(i, this, null, [l]).length), s[i] && o.push(r);
						o.length && a.push({ elem: l, handlers: o });
					}
			return (l = this), u < t.length && a.push({ elem: l, handlers: t.slice(u) }), a;
		},
		addProp: function (e, t) {
			Object.defineProperty(he.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: le(t)
					? function () {
							if (this.originalEvent) return t(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent) return this.originalEvent[e];
					  },
				set: function (t) {
					Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
				},
			});
		},
		fix: function (e) {
			return e[he.expando] ? e : new he.Event(e);
		},
		special: {
			load: { noBubble: !0 },
			click: {
				setup: function (e) {
					var t = this || e;
					return ze.test(t.type) && t.click && o(t, "input") && S(t, "click", w), !1;
				},
				trigger: function (e) {
					var t = this || e;
					return ze.test(t.type) && t.click && o(t, "input") && S(t, "click"), !0;
				},
				_default: function (e) {
					var t = e.target;
					return (ze.test(t.type) && t.click && o(t, "input") && Le.get(t, "click")) || o(t, "a");
				},
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
				},
			},
		},
	}),
		(he.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}),
		(he.Event = function (e, t) {
			if (!(this instanceof he.Event)) return new he.Event(e, t);
			e && e.type
				? ((this.originalEvent = e),
				  (this.type = e.type),
				  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? w : T),
				  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
				  (this.currentTarget = e.currentTarget),
				  (this.relatedTarget = e.relatedTarget))
				: (this.type = e),
				t && he.extend(this, t),
				(this.timeStamp = (e && e.timeStamp) || Date.now()),
				(this[he.expando] = !0);
		}),
		(he.Event.prototype = {
			constructor: he.Event,
			isDefaultPrevented: T,
			isPropagationStopped: T,
			isImmediatePropagationStopped: T,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				(this.isDefaultPrevented = w), e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				(this.isPropagationStopped = w), e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				(this.isImmediatePropagationStopped = w), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
			},
		}),
		he.each(
			{
				altKey: !0,
				bubbles: !0,
				cancelable: !0,
				changedTouches: !0,
				ctrlKey: !0,
				detail: !0,
				eventPhase: !0,
				metaKey: !0,
				pageX: !0,
				pageY: !0,
				shiftKey: !0,
				view: !0,
				char: !0,
				code: !0,
				charCode: !0,
				key: !0,
				keyCode: !0,
				button: !0,
				buttons: !0,
				clientX: !0,
				clientY: !0,
				offsetX: !0,
				offsetY: !0,
				pointerId: !0,
				pointerType: !0,
				screenX: !0,
				screenY: !0,
				targetTouches: !0,
				toElement: !0,
				touches: !0,
				which: function (e) {
					var t = e.button;
					return null == e.which && Qe.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Je.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
				},
			},
			he.event.addProp
		),
		he.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
			he.event.special[e] = {
				setup: function () {
					return S(this, e, C), !1;
				},
				trigger: function () {
					return S(this, e), !0;
				},
				delegateType: t,
			};
		}),
		he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
			he.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n,
						r = e.relatedTarget,
						i = e.handleObj;
					return (r && (r === this || he.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
				},
			};
		}),
		he.fn.extend({
			on: function (e, t, n, r) {
				return E(this, e, t, n, r);
			},
			one: function (e, t, n, r) {
				return E(this, e, t, n, r, 1);
			},
			off: function (e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if ("object" == typeof e) {
					for (i in e) this.off(i, t, e[i]);
					return this;
				}
				return (
					(!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
					!1 === n && (n = T),
					this.each(function () {
						he.event.remove(this, e, n, t);
					})
				);
			},
		});
	var Ze = /<script|<style|<link/i,
		et = /checked\s*(?:[^=]|=\s*.checked.)/i,
		tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	he.extend({
		htmlPrefilter: function (e) {
			return e;
		},
		clone: function (e, t, n) {
			var r,
				i,
				o,
				s,
				a,
				u,
				l,
				c = e.cloneNode(!0),
				f = Pe(e);
			if (!(ue.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || he.isXMLDoc(e)))
				for (s = y(c), r = 0, i = (o = y(e)).length; r < i; r++)
					(a = o[r]), (u = s[r]), "input" === (l = u.nodeName.toLowerCase()) && ze.test(a.type) ? (u.checked = a.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = a.defaultValue);
			if (t)
				if (n) for (o = o || y(e), s = s || y(c), r = 0, i = o.length; r < i; r++) N(o[r], s[r]);
				else N(e, c);
			return 0 < (s = y(c, "script")).length && b(s, !f && y(e, "script")), c;
		},
		cleanData: function (e) {
			for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (je(n)) {
					if ((t = n[Le.expando])) {
						if (t.events) for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
						n[Le.expando] = void 0;
					}
					n[qe.expando] && (n[qe.expando] = void 0);
				}
		},
	}),
		he.fn.extend({
			detach: function (e) {
				return L(this, e, !0);
			},
			remove: function (e) {
				return L(this, e);
			},
			text: function (e) {
				return Ae(
					this,
					function (e) {
						return void 0 === e
							? he.text(this)
							: this.empty().each(function () {
									(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
							  });
					},
					null,
					e,
					arguments.length
				);
			},
			append: function () {
				return j(this, arguments, function (e) {
					(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || k(this, e).appendChild(e);
				});
			},
			prepend: function () {
				return j(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = k(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function () {
				return j(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function () {
				return j(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), (e.textContent = ""));
				return this;
			},
			clone: function (e, t) {
				return (
					(e = null != e && e),
					(t = null == t ? e : t),
					this.map(function () {
						return he.clone(this, e, t);
					})
				);
			},
			html: function (e) {
				return Ae(
					this,
					function (e) {
						var t = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
						if ("string" == typeof e && !Ze.test(e) && !Ge[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
							e = he.htmlPrefilter(e);
							try {
								for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), (t.innerHTML = e));
								t = 0;
							} catch (e) {}
						}
						t && this.empty().append(e);
					},
					null,
					e,
					arguments.length
				);
			},
			replaceWith: function () {
				var e = [];
				return j(
					this,
					arguments,
					function (t) {
						var n = this.parentNode;
						he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this));
					},
					e
				);
			},
		}),
		he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
			he.fn[e] = function (e) {
				for (var n, r = [], i = he(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), he(i[s])[t](n), te.apply(r, n.get());
				return this.pushStack(r);
			};
		});
	var nt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
		rt = function (t) {
			var n = t.ownerDocument.defaultView;
			return (n && n.opener) || (n = e), n.getComputedStyle(t);
		},
		it = function (e, t, n) {
			var r,
				i,
				o = {};
			for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
			for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
			return r;
		},
		ot = new RegExp(He.join("|"), "i");
	!(function () {
		function t() {
			if (c) {
				(l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
					(c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
					Me.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				(r = "1%" !== t.top), (u = 12 === n(t.marginLeft)), (c.style.right = "60%"), (s = 36 === n(t.right)), (i = 36 === n(t.width)), (c.style.position = "absolute"), (o = 12 === n(c.offsetWidth / 3)), Me.removeChild(l), (c = null);
			}
		}
		function n(e) {
			return Math.round(parseFloat(e));
		}
		var r,
			i,
			o,
			s,
			a,
			u,
			l = fe.createElement("div"),
			c = fe.createElement("div");
		c.style &&
			((c.style.backgroundClip = "content-box"),
			(c.cloneNode(!0).style.backgroundClip = ""),
			(ue.clearCloneStyle = "content-box" === c.style.backgroundClip),
			he.extend(ue, {
				boxSizingReliable: function () {
					return t(), i;
				},
				pixelBoxStyles: function () {
					return t(), s;
				},
				pixelPosition: function () {
					return t(), r;
				},
				reliableMarginLeft: function () {
					return t(), u;
				},
				scrollboxSize: function () {
					return t(), o;
				},
				reliableTrDimensions: function () {
					var t, n, r, i;
					return (
						null == a &&
							((t = fe.createElement("table")),
							(n = fe.createElement("tr")),
							(r = fe.createElement("div")),
							(t.style.cssText = "position:absolute;left:-11111px"),
							(n.style.height = "1px"),
							(r.style.height = "9px"),
							Me.appendChild(t).appendChild(n).appendChild(r),
							(i = e.getComputedStyle(n)),
							(a = 3 < parseInt(i.height)),
							Me.removeChild(t)),
						a
					);
				},
			}));
	})();
	var st = ["Webkit", "Moz", "ms"],
		at = fe.createElement("div").style,
		ut = {},
		lt = /^(none|table(?!-c[ea]).+)/,
		ct = /^--/,
		ft = { position: "absolute", visibility: "hidden", display: "block" },
		pt = { letterSpacing: "0", fontWeight: "400" };
	he.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = q(e, "opacity");
						return "" === n ? "1" : n;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
					o,
					s,
					a = d(t),
					u = ct.test(t),
					l = e.style;
				if ((u || (t = O(a)), (s = he.cssHooks[t] || he.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
				"string" == (o = typeof n) && (i = Ie.exec(n)) && i[1] && ((n = v(e, t, i)), (o = "number")),
					null != n &&
						n == n &&
						("number" !== o || u || (n += (i && i[3]) || (he.cssNumber[a] ? "" : "px")),
						ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
						(s && "set" in s && void 0 === (n = s.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
			}
		},
		css: function (e, t, n, r) {
			var i,
				o,
				s,
				a = d(t);
			return (
				ct.test(t) || (t = O(a)),
				(s = he.cssHooks[t] || he.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
				void 0 === i && (i = q(e, t, r)),
				"normal" === i && t in pt && (i = pt[t]),
				"" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
			);
		},
	}),
		he.each(["height", "width"], function (e, t) {
			he.cssHooks[t] = {
				get: function (e, n, r) {
					if (n)
						return !lt.test(he.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
							? H(e, t, r)
							: it(e, ft, function () {
									return H(e, t, r);
							  });
				},
				set: function (e, n, r) {
					var i,
						o = rt(e),
						s = !ue.scrollboxSize() && "absolute" === o.position,
						a = (s || r) && "border-box" === he.css(e, "boxSizing", !1, o),
						u = r ? I(e, t, r, a, o) : 0;
					return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - I(e, t, "border", !1, o) - 0.5)), u && (i = Ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = he.css(e, t))), R(0, n, u);
				},
			};
		}),
		(he.cssHooks.marginLeft = _(ue.reliableMarginLeft, function (e, t) {
			if (t)
				return (
					(parseFloat(q(e, "marginLeft")) ||
						e.getBoundingClientRect().left -
							it(e, { marginLeft: 0 }, function () {
								return e.getBoundingClientRect().left;
							})) + "px"
				);
		})),
		he.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
			(he.cssHooks[e + t] = {
				expand: function (n) {
					for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + He[r] + t] = o[r] || o[r - 2] || o[0];
					return i;
				},
			}),
				"margin" !== e && (he.cssHooks[e + t].set = R);
		}),
		he.fn.extend({
			css: function (e, t) {
				return Ae(
					this,
					function (e, t, n) {
						var r,
							i,
							o = {},
							s = 0;
						if (Array.isArray(t)) {
							for (r = rt(e), i = t.length; s < i; s++) o[t[s]] = he.css(e, t[s], !1, r);
							return o;
						}
						return void 0 !== n ? he.style(e, t, n) : he.css(e, t);
					},
					e,
					t,
					1 < arguments.length
				);
			},
		}),
		(((he.Tween = M).prototype = {
			constructor: M,
			init: function (e, t, n, r, i, o) {
				(this.elem = e), (this.prop = n), (this.easing = i || he.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (he.cssNumber[n] ? "" : "px"));
			},
			cur: function () {
				var e = M.propHooks[this.prop];
				return e && e.get ? e.get(this) : M.propHooks._default.get(this);
			},
			run: function (e) {
				var t,
					n = M.propHooks[this.prop];
				return (
					this.options.duration ? (this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
					(this.now = (this.end - this.start) * t + this.start),
					this.options.step && this.options.step.call(this.elem, this.now, this),
					n && n.set ? n.set(this) : M.propHooks._default.set(this),
					this
				);
			},
		}).init.prototype = M.prototype),
		((M.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
				},
				set: function (e) {
					he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!he.cssHooks[e.prop] && null == e.elem.style[O(e.prop)]) ? (e.elem[e.prop] = e.now) : he.style(e.elem, e.prop, e.now + e.unit);
				},
			},
		}).scrollTop = M.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
			},
		}),
		(he.easing = {
			linear: function (e) {
				return e;
			},
			swing: function (e) {
				return 0.5 - Math.cos(e * Math.PI) / 2;
			},
			_default: "swing",
		}),
		(he.fx = M.prototype.init),
		(he.fx.step = {});
	var dt,
		ht,
		gt,
		vt,
		mt = /^(?:toggle|show|hide)$/,
		yt = /queueHooks$/;
	(he.Animation = he.extend($, {
		tweeners: {
			"*": [
				function (e, t) {
					var n = this.createTween(e, t);
					return v(n.elem, e, Ie.exec(t), n), n;
				},
			],
		},
		tweener: function (e, t) {
			le(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ee));
			for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), ($.tweeners[n] = $.tweeners[n] || []), $.tweeners[n].unshift(t);
		},
		prefilters: [
			function (e, t, n) {
				var r,
					i,
					o,
					s,
					a,
					u,
					l,
					c,
					f = "width" in t || "height" in t,
					p = this,
					d = {},
					h = e.style,
					g = e.nodeType && We(e),
					v = Le.get(e, "fxshow");
				for (r in (n.queue ||
					(null == (s = he._queueHooks(e, "fx")).unqueued &&
						((s.unqueued = 0),
						(a = s.empty.fire),
						(s.empty.fire = function () {
							s.unqueued || a();
						})),
					s.unqueued++,
					p.always(function () {
						p.always(function () {
							s.unqueued--, he.queue(e, "fx").length || s.empty.fire();
						});
					})),
				t))
					if (((i = t[r]), mt.test(i))) {
						if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
							if ("show" !== i || !v || void 0 === v[r]) continue;
							g = !0;
						}
						d[r] = (v && v[r]) || he.style(e, r);
					}
				if ((u = !he.isEmptyObject(t)) || !he.isEmptyObject(d))
					for (r in (f &&
						1 === e.nodeType &&
						((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
						null == (l = v && v.display) && (l = Le.get(e, "display")),
						"none" === (c = he.css(e, "display")) && (l ? (c = l) : (m([e], !0), (l = e.style.display || l), (c = he.css(e, "display")), m([e]))),
						("inline" === c || ("inline-block" === c && null != l)) &&
							"none" === he.css(e, "float") &&
							(u ||
								(p.done(function () {
									h.display = l;
								}),
								null == l && ((c = h.display), (l = "none" === c ? "" : c))),
							(h.display = "inline-block"))),
					n.overflow &&
						((h.overflow = "hidden"),
						p.always(function () {
							(h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
						})),
					(u = !1),
					d))
						u ||
							(v ? "hidden" in v && (g = v.hidden) : (v = Le.access(e, "fxshow", { display: l })),
							o && (v.hidden = !g),
							g && m([e], !0),
							p.done(function () {
								for (r in (g || m([e]), Le.remove(e, "fxshow"), d)) he.style(e, r, d[r]);
							})),
							(u = B(g ? v[r] : 0, r, p)),
							r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
			},
		],
		prefilter: function (e, t) {
			t ? $.prefilters.unshift(e) : $.prefilters.push(e);
		},
	})),
		(he.speed = function (e, t, n) {
			var r = e && "object" == typeof e ? he.extend({}, e) : { complete: n || (!n && t) || (le(e) && e), duration: e, easing: (n && t) || (t && !le(t) && t) };
			return (
				he.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in he.fx.speeds ? (r.duration = he.fx.speeds[r.duration]) : (r.duration = he.fx.speeds._default)),
				(null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
				(r.old = r.complete),
				(r.complete = function () {
					le(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue);
				}),
				r
			);
		}),
		he.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(We).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
			},
			animate: function (e, t, n, r) {
				var i = he.isEmptyObject(e),
					o = he.speed(t, n, r),
					s = function () {
						var t = $(this, he.extend({}, e), o);
						(i || Le.get(this, "finish")) && t.stop(!0);
					};
				return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
			},
			stop: function (e, t, n) {
				var r = function (e) {
					var t = e.stop;
					delete e.stop, t(n);
				};
				return (
					"string" != typeof e && ((n = t), (t = e), (e = void 0)),
					t && this.queue(e || "fx", []),
					this.each(function () {
						var t = !0,
							i = null != e && e + "queueHooks",
							o = he.timers,
							s = Le.get(this);
						if (i) s[i] && s[i].stop && r(s[i]);
						else for (i in s) s[i] && s[i].stop && yt.test(i) && r(s[i]);
						for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
						(!t && n) || he.dequeue(this, e);
					})
				);
			},
			finish: function (e) {
				return (
					!1 !== e && (e = e || "fx"),
					this.each(function () {
						var t,
							n = Le.get(this),
							r = n[e + "queue"],
							i = n[e + "queueHooks"],
							o = he.timers,
							s = r ? r.length : 0;
						for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
						for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
						delete n.finish;
					})
				);
			},
		}),
		he.each(["toggle", "show", "hide"], function (e, t) {
			var n = he.fn[t];
			he.fn[t] = function (e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i);
			};
		}),
		he.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
			he.fn[e] = function (e, n, r) {
				return this.animate(t, e, n, r);
			};
		}),
		(he.timers = []),
		(he.fx.tick = function () {
			var e,
				t = 0,
				n = he.timers;
			for (dt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || he.fx.stop(), (dt = void 0);
		}),
		(he.fx.timer = function (e) {
			he.timers.push(e), he.fx.start();
		}),
		(he.fx.interval = 13),
		(he.fx.start = function () {
			ht || ((ht = !0), P());
		}),
		(he.fx.stop = function () {
			ht = null;
		}),
		(he.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
		(he.fn.delay = function (t, n) {
			return (
				(t = (he.fx && he.fx.speeds[t]) || t),
				(n = n || "fx"),
				this.queue(n, function (n, r) {
					var i = e.setTimeout(n, t);
					r.stop = function () {
						e.clearTimeout(i);
					};
				})
			);
		}),
		(gt = fe.createElement("input")),
		(vt = fe.createElement("select").appendChild(fe.createElement("option"))),
		(gt.type = "checkbox"),
		(ue.checkOn = "" !== gt.value),
		(ue.optSelected = vt.selected),
		((gt = fe.createElement("input")).value = "t"),
		(gt.type = "radio"),
		(ue.radioValue = "t" === gt.value);
	var bt,
		xt = he.expr.attrHandle;
	he.fn.extend({
		attr: function (e, t) {
			return Ae(this, he.attr, e, t, 1 < arguments.length);
		},
		removeAttr: function (e) {
			return this.each(function () {
				he.removeAttr(this, e);
			});
		},
	}),
		he.extend({
			attr: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return void 0 === e.getAttribute
						? he.prop(e, t, n)
						: ((1 === o && he.isXMLDoc(e)) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? bt : void 0)),
						  void 0 !== n
								? null === n
									? void he.removeAttr(e, t)
									: i && "set" in i && void 0 !== (r = i.set(e, n, t))
									? r
									: (e.setAttribute(t, n + ""), n)
								: i && "get" in i && null !== (r = i.get(e, t))
								? r
								: null == (r = he.find.attr(e, t))
								? void 0
								: r);
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!ue.radioValue && "radio" === t && o(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t;
						}
					},
				},
			},
			removeAttr: function (e, t) {
				var n,
					r = 0,
					i = t && t.match(Ee);
				if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
			},
		}),
		(bt = {
			set: function (e, t, n) {
				return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n;
			},
		}),
		he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = xt[t] || he.find.attr;
			xt[t] = function (e, t, r) {
				var i,
					o,
					s = t.toLowerCase();
				return r || ((o = xt[s]), (xt[s] = i), (i = null != n(e, t, r) ? s : null), (xt[s] = o)), i;
			};
		});
	var wt = /^(?:input|select|textarea|button)$/i,
		Tt = /^(?:a|area)$/i;
	he.fn.extend({
		prop: function (e, t) {
			return Ae(this, he.prop, e, t, 1 < arguments.length);
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[he.propFix[e] || e];
			});
		},
	}),
		he.extend({
			prop: function (e, t, n) {
				var r,
					i,
					o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o)
					return (1 === o && he.isXMLDoc(e)) || ((t = he.propFix[t] || t), (i = he.propHooks[t])), void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = he.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : wt.test(e.nodeName) || (Tt.test(e.nodeName) && e.href) ? 0 : -1;
					},
				},
			},
			propFix: { for: "htmlFor", class: "className" },
		}),
		ue.optSelected ||
			(he.propHooks.selected = {
				get: function (e) {
					var t = e.parentNode;
					return t && t.parentNode && t.parentNode.selectedIndex, null;
				},
				set: function (e) {
					var t = e.parentNode;
					t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
				},
			}),
		he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			he.propFix[this.toLowerCase()] = this;
		}),
		he.fn.extend({
			addClass: function (e) {
				var t,
					n,
					r,
					i,
					o,
					s,
					a,
					u = 0;
				if (le(e))
					return this.each(function (t) {
						he(this).addClass(e.call(this, t, z(this)));
					});
				if ((t = V(e)).length)
					for (; (n = this[u++]); )
						if (((i = z(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
							for (s = 0; (o = t[s++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
							i !== (a = U(r)) && n.setAttribute("class", a);
						}
				return this;
			},
			removeClass: function (e) {
				var t,
					n,
					r,
					i,
					o,
					s,
					a,
					u = 0;
				if (le(e))
					return this.each(function (t) {
						he(this).removeClass(e.call(this, t, z(this)));
					});
				if (!arguments.length) return this.attr("class", "");
				if ((t = V(e)).length)
					for (; (n = this[u++]); )
						if (((i = z(n)), (r = 1 === n.nodeType && " " + U(i) + " "))) {
							for (s = 0; (o = t[s++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
							i !== (a = U(r)) && n.setAttribute("class", a);
						}
				return this;
			},
			toggleClass: function (e, t) {
				var n = typeof e,
					r = "string" === n || Array.isArray(e);
				return "boolean" == typeof t && r
					? t
						? this.addClass(e)
						: this.removeClass(e)
					: le(e)
					? this.each(function (n) {
							he(this).toggleClass(e.call(this, n, z(this), t), t);
					  })
					: this.each(function () {
							var t, i, o, s;
							if (r) for (i = 0, o = he(this), s = V(e); (t = s[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
							else (void 0 !== e && "boolean" !== n) || ((t = z(this)) && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""));
					  });
			},
			hasClass: function (e) {
				var t,
					n,
					r = 0;
				for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && -1 < (" " + U(z(n)) + " ").indexOf(t)) return !0;
				return !1;
			},
		});
	var Ct = /\r/g;
	he.fn.extend({
		val: function (e) {
			var t,
				n,
				r,
				i = this[0];
			return arguments.length
				? ((r = le(e)),
				  this.each(function (n) {
						var i;
						1 === this.nodeType &&
							(null == (i = r ? e.call(this, n, he(this).val()) : e)
								? (i = "")
								: "number" == typeof i
								? (i += "")
								: Array.isArray(i) &&
								  (i = he.map(i, function (e) {
										return null == e ? "" : e + "";
								  })),
							((t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
				  }))
				: i
				? (t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
					? n
					: "string" == typeof (n = i.value)
					? n.replace(Ct, "")
					: null == n
					? ""
					: n
				: void 0;
		},
	}),
		he.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = he.find.attr(e, "value");
						return null != t ? t : U(he.text(e));
					},
				},
				select: {
					get: function (e) {
						var t,
							n,
							r,
							i = e.options,
							s = e.selectedIndex,
							a = "select-one" === e.type,
							u = a ? null : [],
							l = a ? s + 1 : i.length;
						for (r = s < 0 ? l : a ? s : 0; r < l; r++)
							if (((n = i[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
								if (((t = he(n).val()), a)) return t;
								u.push(t);
							}
						return u;
					},
					set: function (e, t) {
						for (var n, r, i = e.options, o = he.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = -1 < he.inArray(he.valHooks.option.get(r), o)) && (n = !0);
						return n || (e.selectedIndex = -1), o;
					},
				},
			},
		}),
		he.each(["radio", "checkbox"], function () {
			(he.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t)) return (e.checked = -1 < he.inArray(he(e).val(), t));
				},
			}),
				ue.checkOn ||
					(he.valHooks[this].get = function (e) {
						return null === e.getAttribute("value") ? "on" : e.value;
					});
		}),
		(ue.focusin = "onfocusin" in e);
	var Et = /^(?:focusinfocus|focusoutblur)$/,
		St = function (e) {
			e.stopPropagation();
		};
	he.extend(he.event, {
		trigger: function (t, n, r, i) {
			var o,
				s,
				a,
				u,
				l,
				c,
				f,
				p,
				d = [r || fe],
				h = oe.call(t, "type") ? t.type : t,
				g = oe.call(t, "namespace") ? t.namespace.split(".") : [];
			if (
				((s = p = a = r = r || fe),
				3 !== r.nodeType &&
					8 !== r.nodeType &&
					!Et.test(h + he.event.triggered) &&
					(-1 < h.indexOf(".") && ((h = (g = h.split(".")).shift()), g.sort()),
					(l = h.indexOf(":") < 0 && "on" + h),
					((t = t[he.expando] ? t : new he.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
					(t.namespace = g.join(".")),
					(t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
					(t.result = void 0),
					t.target || (t.target = r),
					(n = null == n ? [t] : he.makeArray(n, [t])),
					(f = he.event.special[h] || {}),
					i || !f.trigger || !1 !== f.trigger.apply(r, n)))
			) {
				if (!i && !f.noBubble && !ce(r)) {
					for (u = f.delegateType || h, Et.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), (a = s);
					a === (r.ownerDocument || fe) && d.push(a.defaultView || a.parentWindow || e);
				}
				for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
					(p = s),
						(t.type = 1 < o ? u : f.bindType || h),
						(c = (Le.get(s, "events") || Object.create(null))[t.type] && Le.get(s, "handle")) && c.apply(s, n),
						(c = l && s[l]) && c.apply && je(s) && ((t.result = c.apply(s, n)), !1 === t.result && t.preventDefault());
				return (
					(t.type = h),
					i ||
						t.isDefaultPrevented() ||
						(f._default && !1 !== f._default.apply(d.pop(), n)) ||
						!je(r) ||
						(l &&
							le(r[h]) &&
							!ce(r) &&
							((a = r[l]) && (r[l] = null), (he.event.triggered = h), t.isPropagationStopped() && p.addEventListener(h, St), r[h](), t.isPropagationStopped() && p.removeEventListener(h, St), (he.event.triggered = void 0), a && (r[l] = a))),
					t.result
				);
			}
		},
		simulate: function (e, t, n) {
			var r = he.extend(new he.Event(), n, { type: e, isSimulated: !0 });
			he.event.trigger(r, null, t);
		},
	}),
		he.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					he.event.trigger(e, t, this);
				});
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return he.event.trigger(e, t, n, !0);
			},
		}),
		ue.focusin ||
			he.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
				var n = function (e) {
					he.event.simulate(t, e.target, he.event.fix(e));
				};
				he.event.special[t] = {
					setup: function () {
						var r = this.ownerDocument || this.document || this,
							i = Le.access(r, t);
						i || r.addEventListener(e, n, !0), Le.access(r, t, (i || 0) + 1);
					},
					teardown: function () {
						var r = this.ownerDocument || this.document || this,
							i = Le.access(r, t) - 1;
						i ? Le.access(r, t, i) : (r.removeEventListener(e, n, !0), Le.remove(r, t));
					},
				};
			});
	var kt = e.location,
		At = { guid: Date.now() },
		Dt = /\?/;
	he.parseXML = function (t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = new e.DOMParser().parseFromString(t, "text/xml");
		} catch (t) {
			n = void 0;
		}
		return (n && !n.getElementsByTagName("parsererror").length) || he.error("Invalid XML: " + t), n;
	};
	var Nt = /\[\]$/,
		jt = /\r?\n/g,
		Lt = /^(?:submit|button|image|reset|file)$/i,
		qt = /^(?:input|select|textarea|keygen)/i;
	(he.param = function (e, t) {
		var n,
			r = [],
			i = function (e, t) {
				var n = le(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
			};
		if (null == e) return "";
		if (Array.isArray(e) || (e.jquery && !he.isPlainObject(e)))
			he.each(e, function () {
				i(this.name, this.value);
			});
		else for (n in e) X(n, e[n], t, i);
		return r.join("&");
	}),
		he.fn.extend({
			serialize: function () {
				return he.param(this.serializeArray());
			},
			serializeArray: function () {
				return this.map(function () {
					var e = he.prop(this, "elements");
					return e ? he.makeArray(e) : this;
				})
					.filter(function () {
						var e = this.type;
						return this.name && !he(this).is(":disabled") && qt.test(this.nodeName) && !Lt.test(e) && (this.checked || !ze.test(e));
					})
					.map(function (e, t) {
						var n = he(this).val();
						return null == n
							? null
							: Array.isArray(n)
							? he.map(n, function (e) {
									return { name: t.name, value: e.replace(jt, "\r\n") };
							  })
							: { name: t.name, value: n.replace(jt, "\r\n") };
					})
					.get();
			},
		});
	var _t = /%20/g,
		Ot = /#.*$/,
		Rt = /([?&])_=[^&]*/,
		It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ht = /^(?:GET|HEAD)$/,
		Mt = /^\/\//,
		Pt = {},
		Ft = {},
		Wt = "*/".concat("*"),
		Bt = fe.createElement("a");
	(Bt.href = kt.href),
		he.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: kt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
				contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
				responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
				converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML },
				flatOptions: { url: !0, context: !0 },
			},
			ajaxSetup: function (e, t) {
				return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e);
			},
			ajaxPrefilter: G(Pt),
			ajaxTransport: G(Ft),
			ajax: function (t, n) {
				function r(t, n, r, a) {
					var l,
						p,
						d,
						x,
						w,
						T = n;
					c ||
						((c = !0),
						u && e.clearTimeout(u),
						(i = void 0),
						(s = a || ""),
						(C.readyState = 0 < t ? 4 : 0),
						(l = (200 <= t && t < 300) || 304 === t),
						r &&
							(x = (function (e, t, n) {
								for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
								if (r)
									for (i in a)
										if (a[i] && a[i].test(r)) {
											u.unshift(i);
											break;
										}
								if (u[0] in n) o = u[0];
								else {
									for (i in n) {
										if (!u[0] || e.converters[i + " " + u[0]]) {
											o = i;
											break;
										}
										s || (s = i);
									}
									o = o || s;
								}
								if (o) return o !== u[0] && u.unshift(o), n[o];
							})(h, C, r)),
						!l && -1 < he.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
						(x = (function (e, t, n, r) {
							var i,
								o,
								s,
								a,
								u,
								l = {},
								c = e.dataTypes.slice();
							if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
							for (o = c.shift(); o; )
								if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
									if ("*" === o) o = u;
									else if ("*" !== u && u !== o) {
										if (!(s = l[u + " " + o] || l["* " + o]))
											for (i in l)
												if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
													!0 === s ? (s = l[i]) : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
													break;
												}
										if (!0 !== s)
											if (s && e.throws) t = s(t);
											else
												try {
													t = s(t);
												} catch (e) {
													return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
												}
									}
							return { state: "success", data: t };
						})(h, x, C, l)),
						l
							? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (he.etag[o] = w)),
							  204 === t || "HEAD" === h.type ? (T = "nocontent") : 304 === t ? (T = "notmodified") : ((T = x.state), (p = x.data), (l = !(d = x.error))))
							: ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
						(C.status = t),
						(C.statusText = (n || T) + ""),
						l ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]),
						C.statusCode(b),
						(b = void 0),
						f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]),
						y.fireWith(g, [C, T]),
						f && (v.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")));
				}
				"object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
				var i,
					o,
					s,
					a,
					u,
					l,
					c,
					f,
					p,
					d,
					h = he.ajaxSetup({}, n),
					g = h.context || h,
					v = h.context && (g.nodeType || g.jquery) ? he(g) : he.event,
					m = he.Deferred(),
					y = he.Callbacks("once memory"),
					b = h.statusCode || {},
					x = {},
					w = {},
					T = "canceled",
					C = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (c) {
								if (!a) for (a = {}; (t = It.exec(s)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
								t = a[e.toLowerCase() + " "];
							}
							return null == t ? null : t.join(", ");
						},
						getAllResponseHeaders: function () {
							return c ? s : null;
						},
						setRequestHeader: function (e, t) {
							return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
						},
						overrideMimeType: function (e) {
							return null == c && (h.mimeType = e), this;
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (c) C.always(e[C.status]);
								else for (t in e) b[t] = [b[t], e[t]];
							return this;
						},
						abort: function (e) {
							var t = e || T;
							return i && i.abort(t), r(0, t), this;
						},
					};
				if ((m.promise(C), (h.url = ((t || h.url || kt.href) + "").replace(Mt, kt.protocol + "//")), (h.type = n.method || n.type || h.method || h.type), (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ee) || [""]), null == h.crossDomain)) {
					l = fe.createElement("a");
					try {
						(l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
					} catch (t) {
						h.crossDomain = !0;
					}
				}
				if ((h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Pt, h, n, C), c)) return C;
				for (p in ((f = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"),
				(h.type = h.type.toUpperCase()),
				(h.hasContent = !Ht.test(h.type)),
				(o = h.url.replace(Ot, "")),
				h.hasContent
					? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(_t, "+"))
					: ((d = h.url.slice(o.length)),
					  h.data && (h.processData || "string" == typeof h.data) && ((o += (Dt.test(o) ? "&" : "?") + h.data), delete h.data),
					  !1 === h.cache && ((o = o.replace(Rt, "$1")), (d = (Dt.test(o) ? "&" : "?") + "_=" + At.guid++ + d)),
					  (h.url = o + d)),
				h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])),
				((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
				C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]),
				h.headers))
					C.setRequestHeader(p, h.headers[p]);
				if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
				if (((T = "abort"), y.add(h.complete), C.done(h.success), C.fail(h.error), (i = Y(Ft, h, n, C)))) {
					if (((C.readyState = 1), f && v.trigger("ajaxSend", [C, h]), c)) return C;
					h.async &&
						0 < h.timeout &&
						(u = e.setTimeout(function () {
							C.abort("timeout");
						}, h.timeout));
					try {
						(c = !1), i.send(x, r);
					} catch (t) {
						if (c) throw t;
						r(-1, t);
					}
				} else r(-1, "No Transport");
				return C;
			},
			getJSON: function (e, t, n) {
				return he.get(e, t, n, "json");
			},
			getScript: function (e, t) {
				return he.get(e, void 0, t, "script");
			},
		}),
		he.each(["get", "post"], function (e, t) {
			he[t] = function (e, n, r, i) {
				return le(n) && ((i = i || r), (r = n), (n = void 0)), he.ajax(he.extend({ url: e, type: t, dataType: i, data: n, success: r }, he.isPlainObject(e) && e));
			};
		}),
		he.ajaxPrefilter(function (e) {
			var t;
			for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
		}),
		(he._evalUrl = function (e, t, n) {
			return he.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function () {} },
				dataFilter: function (e) {
					he.globalEval(e, t, n);
				},
			});
		}),
		he.fn.extend({
			wrapAll: function (e) {
				var t;
				return (
					this[0] &&
						(le(e) && (e = e.call(this[0])),
						(t = he(e, this[0].ownerDocument).eq(0).clone(!0)),
						this[0].parentNode && t.insertBefore(this[0]),
						t
							.map(function () {
								for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
								return e;
							})
							.append(this)),
					this
				);
			},
			wrapInner: function (e) {
				return le(e)
					? this.each(function (t) {
							he(this).wrapInner(e.call(this, t));
					  })
					: this.each(function () {
							var t = he(this),
								n = t.contents();
							n.length ? n.wrapAll(e) : t.append(e);
					  });
			},
			wrap: function (e) {
				var t = le(e);
				return this.each(function (n) {
					he(this).wrapAll(t ? e.call(this, n) : e);
				});
			},
			unwrap: function (e) {
				return (
					this.parent(e)
						.not("body")
						.each(function () {
							he(this).replaceWith(this.childNodes);
						}),
					this
				);
			},
		}),
		(he.expr.pseudos.hidden = function (e) {
			return !he.expr.pseudos.visible(e);
		}),
		(he.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}),
		(he.ajaxSettings.xhr = function () {
			try {
				return new e.XMLHttpRequest();
			} catch (e) {}
		});
	var $t = { 0: 200, 1223: 204 },
		Ut = he.ajaxSettings.xhr();
	(ue.cors = !!Ut && "withCredentials" in Ut),
		(ue.ajax = Ut = !!Ut),
		he.ajaxTransport(function (t) {
			var n, r;
			if (ue.cors || (Ut && !t.crossDomain))
				return {
					send: function (i, o) {
						var s,
							a = t.xhr();
						if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
						for (s in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) a.setRequestHeader(s, i[s]);
						(n = function (e) {
							return function () {
								n &&
									((n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
									"abort" === e
										? a.abort()
										: "error" === e
										? "number" != typeof a.status
											? o(0, "error")
											: o(a.status, a.statusText)
										: o($t[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
							};
						}),
							(a.onload = n()),
							(r = a.onerror = a.ontimeout = n("error")),
							void 0 !== a.onabort
								? (a.onabort = r)
								: (a.onreadystatechange = function () {
										4 === a.readyState &&
											e.setTimeout(function () {
												n && r();
											});
								  }),
							(n = n("abort"));
						try {
							a.send((t.hasContent && t.data) || null);
						} catch (i) {
							if (n) throw i;
						}
					},
					abort: function () {
						n && n();
					},
				};
		}),
		he.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1);
		}),
		he.ajaxSetup({
			accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: {
				"text script": function (e) {
					return he.globalEval(e), e;
				},
			},
		}),
		he.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
		}),
		he.ajaxTransport("script", function (e) {
			var t, n;
			if (e.crossDomain || e.scriptAttrs)
				return {
					send: function (r, i) {
						(t = he("<script>")
							.attr(e.scriptAttrs || {})
							.prop({ charset: e.scriptCharset, src: e.url })
							.on(
								"load error",
								(n = function (e) {
									t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
								})
							)),
							fe.head.appendChild(t[0]);
					},
					abort: function () {
						n && n();
					},
				};
		});
	var zt,
		Vt = [],
		Xt = /(=)\?(?=&|$)|\?\?/;
	he.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Vt.pop() || he.expando + "_" + At.guid++;
			return (this[e] = !0), e;
		},
	}),
		he.ajaxPrefilter("json jsonp", function (t, n, r) {
			var i,
				o,
				s,
				a = !1 !== t.jsonp && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
			if (a || "jsonp" === t.dataTypes[0])
				return (
					(i = t.jsonpCallback = le(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
					a ? (t[a] = t[a].replace(Xt, "$1" + i)) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
					(t.converters["script json"] = function () {
						return s || he.error(i + " was not called"), s[0];
					}),
					(t.dataTypes[0] = "json"),
					(o = e[i]),
					(e[i] = function () {
						s = arguments;
					}),
					r.always(function () {
						void 0 === o ? he(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(i)), s && le(o) && o(s[0]), (s = o = void 0);
					}),
					"script"
				);
		}),
		(ue.createHTMLDocument = (((zt = fe.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === zt.childNodes.length)),
		(he.parseHTML = function (e, t, n) {
			return "string" != typeof e
				? []
				: ("boolean" == typeof t && ((n = t), (t = !1)),
				  t || (ue.createHTMLDocument ? (((r = (t = fe.implementation.createHTMLDocument("")).createElement("base")).href = fe.location.href), t.head.appendChild(r)) : (t = fe)),
				  (o = !n && []),
				  (i = be.exec(e)) ? [t.createElement(i[1])] : ((i = x([e], t, o)), o && o.length && he(o).remove(), he.merge([], i.childNodes)));
			var r, i, o;
		}),
		(he.fn.load = function (e, t, n) {
			var r,
				i,
				o,
				s = this,
				a = e.indexOf(" ");
			return (
				-1 < a && ((r = U(e.slice(a))), (e = e.slice(0, a))),
				le(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
				0 < s.length &&
					he
						.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
						.done(function (e) {
							(o = arguments), s.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e);
						})
						.always(
							n &&
								function (e, t) {
									s.each(function () {
										n.apply(this, o || [e.responseText, t, e]);
									});
								}
						),
				this
			);
		}),
		(he.expr.pseudos.animated = function (e) {
			return he.grep(he.timers, function (t) {
				return e === t.elem;
			}).length;
		}),
		(he.offset = {
			setOffset: function (e, t, n) {
				var r,
					i,
					o,
					s,
					a,
					u,
					l = he.css(e, "position"),
					c = he(e),
					f = {};
				"static" === l && (e.style.position = "relative"),
					(a = c.offset()),
					(o = he.css(e, "top")),
					(u = he.css(e, "left")),
					("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((s = (r = c.position()).top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
					le(t) && (t = t.call(e, n, he.extend({}, a))),
					null != t.top && (f.top = t.top - a.top + s),
					null != t.left && (f.left = t.left - a.left + i),
					"using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
			},
		}),
		he.fn.extend({
			offset: function (e) {
				if (arguments.length)
					return void 0 === e
						? this
						: this.each(function (t) {
								he.offset.setOffset(this, e, t);
						  });
				var t,
					n,
					r = this[0];
				return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
			},
			position: function () {
				if (this[0]) {
					var e,
						t,
						n,
						r = this[0],
						i = { top: 0, left: 0 };
					if ("fixed" === he.css(r, "position")) t = r.getBoundingClientRect();
					else {
						for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === he.css(e, "position"); ) e = e.parentNode;
						e && e !== r && 1 === e.nodeType && (((i = he(e).offset()).top += he.css(e, "borderTopWidth", !0)), (i.left += he.css(e, "borderLeftWidth", !0)));
					}
					return { top: t.top - i.top - he.css(r, "marginTop", !0), left: t.left - i.left - he.css(r, "marginLeft", !0) };
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === he.css(e, "position"); ) e = e.offsetParent;
					return e || Me;
				});
			},
		}),
		he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
			var n = "pageYOffset" === t;
			he.fn[e] = function (r) {
				return Ae(
					this,
					function (e, r, i) {
						var o;
						if ((ce(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
						o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
					},
					e,
					r,
					arguments.length
				);
			};
		}),
		he.each(["top", "left"], function (e, t) {
			he.cssHooks[t] = _(ue.pixelPosition, function (e, n) {
				if (n) return (n = q(e, t)), nt.test(n) ? he(e).position()[t] + "px" : n;
			});
		}),
		he.each({ Height: "height", Width: "width" }, function (e, t) {
			he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
				he.fn[r] = function (i, o) {
					var s = arguments.length && (n || "boolean" != typeof i),
						a = n || (!0 === i || !0 === o ? "margin" : "border");
					return Ae(
						this,
						function (t, n, i) {
							var o;
							return ce(t)
								? 0 === r.indexOf("outer")
									? t["inner" + e]
									: t.document.documentElement["client" + e]
								: 9 === t.nodeType
								? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
								: void 0 === i
								? he.css(t, n, a)
								: he.style(t, n, i, a);
						},
						t,
						s ? i : void 0,
						s
					);
				};
			});
		}),
		he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			he.fn[t] = function (e) {
				return this.on(t, e);
			};
		}),
		he.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function (e, t) {
				return this.off(e, null, t);
			},
			delegate: function (e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
			},
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e);
			},
		}),
		he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
			he.fn[t] = function (e, n) {
				return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
			};
		});
	var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	(he.proxy = function (e, t) {
		var n, r, i;
		if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), le(e)))
			return (
				(r = Z.call(arguments, 2)),
				((i = function () {
					return e.apply(t || this, r.concat(Z.call(arguments)));
				}).guid = e.guid = e.guid || he.guid++),
				i
			);
	}),
		(he.holdReady = function (e) {
			e ? he.readyWait++ : he.ready(!0);
		}),
		(he.isArray = Array.isArray),
		(he.parseJSON = JSON.parse),
		(he.nodeName = o),
		(he.isFunction = le),
		(he.isWindow = ce),
		(he.camelCase = d),
		(he.type = r),
		(he.now = Date.now),
		(he.isNumeric = function (e) {
			var t = he.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
		}),
		(he.trim = function (e) {
			return null == e ? "" : (e + "").replace(Gt, "");
		}),
		"function" == typeof define &&
			define.amd &&
			define("jquery", [], function () {
				return he;
			});
	var Yt = e.jQuery,
		Qt = e.$;
	return (
		(he.noConflict = function (t) {
			return e.$ === he && (e.$ = Qt), t && e.jQuery === he && (e.jQuery = Yt), he;
		}),
		void 0 === t && (e.jQuery = e.$ = he),
		he
	);
}),
	(function () {
		"use strict";
		function e(e) {
			try {
				return (e.defaultView && e.defaultView.frameElement) || null;
			} catch (e) {
				return null;
			}
		}
		function t(e) {
			(this.time = e.time), (this.target = e.target), (this.rootBounds = c(e.rootBounds)), (this.boundingClientRect = c(e.boundingClientRect)), (this.intersectionRect = c(e.intersectionRect || l())), (this.isIntersecting = !!e.intersectionRect);
			var t = this.boundingClientRect,
				n = t.width * t.height,
				r = this.intersectionRect,
				i = r.width * r.height;
			this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0;
		}
		function n(e, t) {
			var n = t || {};
			if ("function" != typeof e) throw new Error("callback must be a function");
			if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
			(this._checkForIntersections = i(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
				(this._callback = e),
				(this._observationTargets = []),
				(this._queuedEntries = []),
				(this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
				(this.thresholds = this._initThresholds(n.threshold)),
				(this.root = n.root || null),
				(this.rootMargin = this._rootMarginValues
					.map(function (e) {
						return e.value + e.unit;
					})
					.join(" ")),
				(this._monitoringDocuments = []),
				(this._monitoringUnsubscribes = []);
		}
		function r() {
			return window.performance && performance.now && performance.now();
		}
		function i(e, t) {
			var n = null;
			return function () {
				n ||
					(n = setTimeout(function () {
						e(), (n = null);
					}, t));
			};
		}
		function o(e, t, n, r) {
			"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n);
		}
		function s(e, t, n, r) {
			"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n);
		}
		function a(e, t) {
			var n = Math.max(e.top, t.top),
				r = Math.min(e.bottom, t.bottom),
				i = Math.max(e.left, t.left),
				o = Math.min(e.right, t.right),
				s = o - i,
				a = r - n;
			return (s >= 0 && a >= 0 && { top: n, bottom: r, left: i, right: o, width: s, height: a }) || null;
		}
		function u(e) {
			var t;
			try {
				t = e.getBoundingClientRect();
			} catch (e) {}
			return t ? ((t.width && t.height) || (t = { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: t.right - t.left, height: t.bottom - t.top }), t) : l();
		}
		function l() {
			return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
		}
		function c(e) {
			return !e || "x" in e ? e : { top: e.top, y: e.top, bottom: e.bottom, left: e.left, x: e.left, right: e.right, width: e.width, height: e.height };
		}
		function f(e, t) {
			var n = t.top - e.top,
				r = t.left - e.left;
			return { top: n, left: r, height: t.height, width: t.width, bottom: n + t.height, right: r + t.width };
		}
		function p(e, t) {
			for (var n = t; n; ) {
				if (n == e) return !0;
				n = d(n);
			}
			return !1;
		}
		function d(t) {
			var n = t.parentNode;
			return 9 == t.nodeType && t != h ? e(t) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n;
		}
		if ("object" == typeof window)
			if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)
				"isIntersecting" in window.IntersectionObserverEntry.prototype ||
					Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
						get: function () {
							return this.intersectionRatio > 0;
						},
					});
			else {
				var h = (function (t) {
						for (var n = t, r = e(n); r; ) (n = r.ownerDocument), (r = e(n));
						return n;
					})(window.document),
					g = [],
					v = null,
					m = null;
				(n.prototype.THROTTLE_TIMEOUT = 100),
					(n.prototype.POLL_INTERVAL = null),
					(n.prototype.USE_MUTATION_OBSERVER = !0),
					(n._setupCrossOriginUpdater = function () {
						return (
							v ||
								(v = function (e, t) {
									(m = e && t ? f(e, t) : l()),
										g.forEach(function (e) {
											e._checkForIntersections();
										});
								}),
							v
						);
					}),
					(n._resetCrossOriginUpdater = function () {
						(v = null), (m = null);
					}),
					(n.prototype.observe = function (e) {
						var t = this._observationTargets.some(function (t) {
							return t.element == e;
						});
						if (!t) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({ element: e, entry: null }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections();
						}
					}),
					(n.prototype.unobserve = function (e) {
						(this._observationTargets = this._observationTargets.filter(function (t) {
							return t.element != e;
						})),
							this._unmonitorIntersections(e.ownerDocument),
							0 == this._observationTargets.length && this._unregisterInstance();
					}),
					(n.prototype.disconnect = function () {
						(this._observationTargets = []), this._unmonitorAllIntersections(), this._unregisterInstance();
					}),
					(n.prototype.takeRecords = function () {
						var e = this._queuedEntries.slice();
						return (this._queuedEntries = []), e;
					}),
					(n.prototype._initThresholds = function (e) {
						var t = e || [0];
						return (
							Array.isArray(t) || (t = [t]),
							t.sort().filter(function (e, t, n) {
								if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
								return e !== n[t - 1];
							})
						);
					}),
					(n.prototype._parseRootMargin = function (e) {
						var t = e || "0px",
							n = t.split(/\s+/).map(function (e) {
								var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
								if (!t) throw new Error("rootMargin must be specified in pixels or percent");
								return { value: parseFloat(t[1]), unit: t[2] };
							});
						return (n[1] = n[1] || n[0]), (n[2] = n[2] || n[0]), (n[3] = n[3] || n[1]), n;
					}),
					(n.prototype._monitorIntersections = function (t) {
						var n = t.defaultView;
						if (n && -1 == this._monitoringDocuments.indexOf(t)) {
							var r = this._checkForIntersections,
								i = null,
								a = null;
							if (
								(this.POLL_INTERVAL
									? (i = n.setInterval(r, this.POLL_INTERVAL))
									: (o(n, "resize", r, !0), o(t, "scroll", r, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && ((a = new n.MutationObserver(r)), a.observe(t, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))),
								this._monitoringDocuments.push(t),
								this._monitoringUnsubscribes.push(function () {
									var e = t.defaultView;
									e && (i && e.clearInterval(i), s(e, "resize", r, !0)), s(t, "scroll", r, !0), a && a.disconnect();
								}),
								t != ((this.root && this.root.ownerDocument) || h))
							) {
								var u = e(t);
								u && this._monitorIntersections(u.ownerDocument);
							}
						}
					}),
					(n.prototype._unmonitorIntersections = function (t) {
						var n = this._monitoringDocuments.indexOf(t);
						if (-1 != n) {
							var r = (this.root && this.root.ownerDocument) || h,
								i = this._observationTargets.some(function (n) {
									var i = n.element.ownerDocument;
									if (i == t) return !0;
									for (; i && i != r; ) {
										var o = e(i);
										if (((i = o && o.ownerDocument), i == t)) return !0;
									}
									return !1;
								});
							if (!i) {
								var o = this._monitoringUnsubscribes[n];
								if ((this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), t != r)) {
									var s = e(t);
									s && this._unmonitorIntersections(s.ownerDocument);
								}
							}
						}
					}),
					(n.prototype._unmonitorAllIntersections = function () {
						var e = this._monitoringUnsubscribes.slice(0);
						(this._monitoringDocuments.length = 0), (this._monitoringUnsubscribes.length = 0);
						for (var t = 0; t < e.length; t++) e[t]();
					}),
					(n.prototype._checkForIntersections = function () {
						if (this.root || !v || m) {
							var e = this._rootIsInDom(),
								n = e ? this._getRootRect() : l();
							this._observationTargets.forEach(function (i) {
								var o = i.element,
									s = u(o),
									a = this._rootContainsTarget(o),
									l = i.entry,
									c = e && a && this._computeTargetAndRootIntersection(o, s, n),
									f = (i.entry = new t({ time: r(), target: o, boundingClientRect: s, rootBounds: v && !this.root ? null : n, intersectionRect: c }));
								l ? (e && a ? this._hasCrossedThreshold(l, f) && this._queuedEntries.push(f) : l && l.isIntersecting && this._queuedEntries.push(f)) : this._queuedEntries.push(f);
							}, this),
								this._queuedEntries.length && this._callback(this.takeRecords(), this);
						}
					}),
					(n.prototype._computeTargetAndRootIntersection = function (e, t, n) {
						if ("none" != window.getComputedStyle(e).display) {
							for (var r = t, i = d(e), o = !1; !o && i; ) {
								var s = null,
									l = 1 == i.nodeType ? window.getComputedStyle(i) : {};
								if ("none" == l.display) return null;
								if (i == this.root || 9 == i.nodeType)
									if (((o = !0), i == this.root || i == h)) v && !this.root ? (!m || (0 == m.width && 0 == m.height) ? ((i = null), (s = null), (r = null)) : (s = m)) : (s = n);
									else {
										var c = d(i),
											p = c && u(c),
											g = c && this._computeTargetAndRootIntersection(c, p, n);
										p && g ? ((i = c), (s = f(p, g))) : ((i = null), (r = null));
									}
								else {
									var y = i.ownerDocument;
									i != y.body && i != y.documentElement && "visible" != l.overflow && (s = u(i));
								}
								if ((s && (r = a(s, r)), !r)) break;
								i = i && d(i);
							}
							return r;
						}
					}),
					(n.prototype._getRootRect = function () {
						var e;
						if (this.root) e = u(this.root);
						else {
							var t = h.documentElement,
								n = h.body;
							e = { top: 0, left: 0, right: t.clientWidth || n.clientWidth, width: t.clientWidth || n.clientWidth, bottom: t.clientHeight || n.clientHeight, height: t.clientHeight || n.clientHeight };
						}
						return this._expandRectByRootMargin(e);
					}),
					(n.prototype._expandRectByRootMargin = function (e) {
						var t = this._rootMarginValues.map(function (t, n) {
								return "px" == t.unit ? t.value : (t.value * (n % 2 ? e.width : e.height)) / 100;
							}),
							n = { top: e.top - t[0], right: e.right + t[1], bottom: e.bottom + t[2], left: e.left - t[3] };
						return (n.width = n.right - n.left), (n.height = n.bottom - n.top), n;
					}),
					(n.prototype._hasCrossedThreshold = function (e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var i = 0; i < this.thresholds.length; i++) {
								var o = this.thresholds[i];
								if (o == n || o == r || o < n != o < r) return !0;
							}
					}),
					(n.prototype._rootIsInDom = function () {
						return !this.root || p(h, this.root);
					}),
					(n.prototype._rootContainsTarget = function (e) {
						return p(this.root || h, e) && (!this.root || this.root.ownerDocument == e.ownerDocument);
					}),
					(n.prototype._registerInstance = function () {
						g.indexOf(this) < 0 && g.push(this);
					}),
					(n.prototype._unregisterInstance = function () {
						var e = g.indexOf(this);
						-1 != e && g.splice(e, 1);
					}),
					(window.IntersectionObserver = n),
					(window.IntersectionObserverEntry = t);
			}
	})();

// mustache.js
// This file has been generated from mustache.mjs
(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? (module.exports = factory()) : typeof define === "function" && define.amd ? define(factory) : ((global = global || self), (global.Mustache = factory()));
})(this, function () {
	"use strict";

	/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	var objectToString = Object.prototype.toString;
	var isArray =
		Array.isArray ||
		function isArrayPolyfill(object) {
			return objectToString.call(object) === "[object Array]";
		};

	function isFunction(object) {
		return typeof object === "function";
	}

	/**
	 * More correct typeof string handling array
	 * which normally returns typeof 'object'
	 */
	function typeStr(obj) {
		return isArray(obj) ? "array" : typeof obj;
	}

	function escapeRegExp(string) {
		return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	}

	/**
	 * Null safe way of checking whether or not an object,
	 * including its prototype, has a given property
	 */
	function hasProperty(obj, propName) {
		return obj != null && typeof obj === "object" && propName in obj;
	}

	/**
	 * Safe way of detecting whether or not the given thing is a primitive and
	 * whether it has the given property
	 */
	function primitiveHasOwnProperty(primitive, propName) {
		return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
	}

	// Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	// See https://github.com/janl/mustache.js/issues/189
	var regExpTest = RegExp.prototype.test;
	function testRegExp(re, string) {
		return regExpTest.call(re, string);
	}

	var nonSpaceRe = /\S/;
	function isWhitespace(string) {
		return !testRegExp(nonSpaceRe, string);
	}

	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#39;",
		"/": "&#x2F;",
		"`": "&#x60;",
		"=": "&#x3D;",
	};

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
			return entityMap[s];
		});
	}

	var whiteRe = /\s*/;
	var spaceRe = /\s+/;
	var equalsRe = /\s*=/;
	var curlyRe = /\s*\}/;
	var tagRe = /#|\^|\/|>|\{|&|=|!/;

	/**
	 * Breaks up the given `template` string into a tree of tokens. If the `tags`
	 * argument is given here it must be an array with two string values: the
	 * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	 * course, the default is to use mustaches (i.e. mustache.tags).
	 *
	 * A token is an array with at least 4 elements. The first element is the
	 * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	 * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	 * all text that appears outside a symbol this element is "text".
	 *
	 * The second element of a token is its "value". For mustache tags this is
	 * whatever else was inside the tag besides the opening symbol. For text tokens
	 * this is the text itself.
	 *
	 * The third and fourth elements of the token are the start and end indices,
	 * respectively, of the token in the original template.
	 *
	 * Tokens that are the root node of a subtree contain two more elements: 1) an
	 * array of tokens in the subtree and 2) the index in the original template at
	 * which the closing tag for that section begins.
	 *
	 * Tokens for partials also contain two more elements: 1) a string value of
	 * indendation prior to that tag and 2) the index of that tag on that line -
	 * eg a value of 2 indicates the partial is the third tag on this line.
	 */
	function parseTemplate(template, tags) {
		if (!template) return [];
		var lineHasNonSpace = false;
		var sections = []; // Stack to hold section tokens
		var tokens = []; // Buffer to hold the tokens
		var spaces = []; // Indices of whitespace tokens on the current line
		var hasTag = false; // Is there a {{tag}} on the current line?
		var nonSpace = false; // Is there a non-space char on the current line?
		var indentation = ""; // Tracks indentation for tags that use it
		var tagIndex = 0; // Stores a count of number of tags encountered on a line

		// Strips all whitespace tokens array for the current line
		// if there was a {{#tag}} on it and otherwise only space.
		function stripSpace() {
			if (hasTag && !nonSpace) {
				while (spaces.length) delete tokens[spaces.pop()];
			} else {
				spaces = [];
			}

			hasTag = false;
			nonSpace = false;
		}

		var openingTagRe, closingTagRe, closingCurlyRe;
		function compileTags(tagsToCompile) {
			if (typeof tagsToCompile === "string") tagsToCompile = tagsToCompile.split(spaceRe, 2);

			if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error("Invalid tags: " + tagsToCompile);

			openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
			closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
			closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
		}

		compileTags(tags || mustache.tags);

		var scanner = new Scanner(template);

		var start, type, value, chr, token, openSection;
		while (!scanner.eos()) {
			start = scanner.pos;

			// Match any text between tags.
			value = scanner.scanUntil(openingTagRe);

			if (value) {
				for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
					chr = value.charAt(i);

					if (isWhitespace(chr)) {
						spaces.push(tokens.length);
						indentation += chr;
					} else {
						nonSpace = true;
						lineHasNonSpace = true;
						indentation += " ";
					}

					tokens.push(["text", chr, start, start + 1]);
					start += 1;

					// Check for whitespace on the current line.
					if (chr === "\n") {
						stripSpace();
						indentation = "";
						tagIndex = 0;
						lineHasNonSpace = false;
					}
				}
			}

			// Match the opening tag.
			if (!scanner.scan(openingTagRe)) break;

			hasTag = true;

			// Get the tag type.
			type = scanner.scan(tagRe) || "name";
			scanner.scan(whiteRe);

			// Get the tag value.
			if (type === "=") {
				value = scanner.scanUntil(equalsRe);
				scanner.scan(equalsRe);
				scanner.scanUntil(closingTagRe);
			} else if (type === "{") {
				value = scanner.scanUntil(closingCurlyRe);
				scanner.scan(curlyRe);
				scanner.scanUntil(closingTagRe);
				type = "&";
			} else {
				value = scanner.scanUntil(closingTagRe);
			}

			// Match the closing tag.
			if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);

			if (type == ">") {
				token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
			} else {
				token = [type, value, start, scanner.pos];
			}
			tagIndex++;
			tokens.push(token);

			if (type === "#" || type === "^") {
				sections.push(token);
			} else if (type === "/") {
				// Check section nesting.
				openSection = sections.pop();

				if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);

				if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
			} else if (type === "name" || type === "{" || type === "&") {
				nonSpace = true;
			} else if (type === "=") {
				// Set the tags for the next time around.
				compileTags(value);
			}
		}

		stripSpace();

		// Make sure there are no open sections when we're done.
		openSection = sections.pop();

		if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

		return nestTokens(squashTokens(tokens));
	}

	/**
	 * Combines the values of consecutive text tokens in the given `tokens` array
	 * to a single token.
	 */
	function squashTokens(tokens) {
		var squashedTokens = [];

		var token, lastToken;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			token = tokens[i];

			if (token) {
				if (token[0] === "text" && lastToken && lastToken[0] === "text") {
					lastToken[1] += token[1];
					lastToken[3] = token[3];
				} else {
					squashedTokens.push(token);
					lastToken = token;
				}
			}
		}

		return squashedTokens;
	}

	/**
	 * Forms the given array of `tokens` into a nested tree structure where
	 * tokens that represent a section have two additional items: 1) an array of
	 * all tokens that appear in that section and 2) the index in the original
	 * template that represents the end of that section.
	 */
	function nestTokens(tokens) {
		var nestedTokens = [];
		var collector = nestedTokens;
		var sections = [];

		var token, section;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			token = tokens[i];

			switch (token[0]) {
				case "#":
				case "^":
					collector.push(token);
					sections.push(token);
					collector = token[4] = [];
					break;
				case "/":
					section = sections.pop();
					section[5] = token[2];
					collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
					break;
				default:
					collector.push(token);
			}
		}

		return nestedTokens;
	}

	/**
	 * A simple string scanner that is used by the template parser to find
	 * tokens in template strings.
	 */
	function Scanner(string) {
		this.string = string;
		this.tail = string;
		this.pos = 0;
	}

	/**
	 * Returns `true` if the tail is empty (end of string).
	 */
	Scanner.prototype.eos = function eos() {
		return this.tail === "";
	};

	/**
	 * Tries to match the given regular expression at the current position.
	 * Returns the matched text if it can match, the empty string otherwise.
	 */
	Scanner.prototype.scan = function scan(re) {
		var match = this.tail.match(re);

		if (!match || match.index !== 0) return "";

		var string = match[0];

		this.tail = this.tail.substring(string.length);
		this.pos += string.length;

		return string;
	};

	/**
	 * Skips all text until the given regular expression can be matched. Returns
	 * the skipped string, which is the entire tail if no match can be made.
	 */
	Scanner.prototype.scanUntil = function scanUntil(re) {
		var index = this.tail.search(re),
			match;

		switch (index) {
			case -1:
				match = this.tail;
				this.tail = "";
				break;
			case 0:
				match = "";
				break;
			default:
				match = this.tail.substring(0, index);
				this.tail = this.tail.substring(index);
		}

		this.pos += match.length;

		return match;
	};

	/**
	 * Represents a rendering context by wrapping a view object and
	 * maintaining a reference to the parent context.
	 */
	function Context(view, parentContext) {
		this.view = view;
		this.cache = { ".": this.view };
		this.parent = parentContext;
	}

	/**
	 * Creates a new context using the given view with this context
	 * as the parent.
	 */
	Context.prototype.push = function push(view) {
		return new Context(view, this);
	};

	/**
	 * Returns the value of the given name in this context, traversing
	 * up the context hierarchy if the value is absent in this context's view.
	 */
	Context.prototype.lookup = function lookup(name) {
		var cache = this.cache;

		var value;
		if (cache.hasOwnProperty(name)) {
			value = cache[name];
		} else {
			var context = this,
				intermediateValue,
				names,
				index,
				lookupHit = false;

			while (context) {
				if (name.indexOf(".") > 0) {
					intermediateValue = context.view;
					names = name.split(".");
					index = 0;

					/**
					 * Using the dot notion path in `name`, we descend through the
					 * nested objects.
					 *
					 * To be certain that the lookup has been successful, we have to
					 * check if the last object in the path actually has the property
					 * we are looking for. We store the result in `lookupHit`.
					 *
					 * This is specially necessary for when the value has been set to
					 * `undefined` and we want to avoid looking up parent contexts.
					 *
					 * In the case where dot notation is used, we consider the lookup
					 * to be successful even if the last "object" in the path is
					 * not actually an object but a primitive (e.g., a string, or an
					 * integer), because it is sometimes useful to access a property
					 * of an autoboxed primitive, such as the length of a string.
					 **/
					while (intermediateValue != null && index < names.length) {
						if (index === names.length - 1) lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);

						intermediateValue = intermediateValue[names[index++]];
					}
				} else {
					intermediateValue = context.view[name];

					/**
					 * Only checking against `hasProperty`, which always returns `false` if
					 * `context.view` is not an object. Deliberately omitting the check
					 * against `primitiveHasOwnProperty` if dot notation is not used.
					 *
					 * Consider this example:
					 * ```
					 * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
					 * ```
					 *
					 * If we were to check also against `primitiveHasOwnProperty`, as we do
					 * in the dot notation case, then render call would return:
					 *
					 * "The length of a football field is 9."
					 *
					 * rather than the expected:
					 *
					 * "The length of a football field is 100 yards."
					 **/
					lookupHit = hasProperty(context.view, name);
				}

				if (lookupHit) {
					value = intermediateValue;
					break;
				}

				context = context.parent;
			}

			cache[name] = value;
		}

		if (isFunction(value)) value = value.call(this.view);

		return value;
	};

	/**
	 * A Writer knows how to take a stream of tokens and render them to a
	 * string, given a context. It also maintains a cache of templates to
	 * avoid the need to parse the same template twice.
	 */
	function Writer() {
		this.templateCache = {
			_cache: {},
			set: function set(key, value) {
				this._cache[key] = value;
			},
			get: function get(key) {
				return this._cache[key];
			},
			clear: function clear() {
				this._cache = {};
			},
		};
	}

	/**
	 * Clears all cached templates in this writer.
	 */
	Writer.prototype.clearCache = function clearCache() {
		if (typeof this.templateCache !== "undefined") {
			this.templateCache.clear();
		}
	};

	/**
	 * Parses and caches the given `template` according to the given `tags` or
	 * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
	 * that is generated from the parse.
	 */
	Writer.prototype.parse = function parse(template, tags) {
		var cache = this.templateCache;
		var cacheKey = template + ":" + (tags || mustache.tags).join(":");
		var isCacheEnabled = typeof cache !== "undefined";
		var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

		if (tokens == undefined) {
			tokens = parseTemplate(template, tags);
			isCacheEnabled && cache.set(cacheKey, tokens);
		}
		return tokens;
	};

	/**
	 * High-level method that is used to render the given `template` with
	 * the given `view`.
	 *
	 * The optional `partials` argument may be an object that contains the
	 * names and templates of partials that are used in the template. It may
	 * also be a function that is used to load partial templates on the fly
	 * that takes a single argument: the name of the partial.
	 *
	 * If the optional `tags` argument is given here it must be an array with two
	 * string values: the opening and closing tags used in the template (e.g.
	 * [ "<%", "%>" ]). The default is to mustache.tags.
	 */
	Writer.prototype.render = function render(template, view, partials, tags) {
		var tokens = this.parse(template, tags);
		var context = view instanceof Context ? view : new Context(view, undefined);
		return this.renderTokens(tokens, context, partials, template, tags);
	};

	/**
	 * Low-level method that renders the given array of `tokens` using
	 * the given `context` and `partials`.
	 *
	 * Note: The `originalTemplate` is only ever used to extract the portion
	 * of the original template that was contained in a higher-order section.
	 * If the template doesn't use higher-order sections, this argument may
	 * be omitted.
	 */
	Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, tags) {
		var buffer = "";

		var token, symbol, value;
		for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
			value = undefined;
			token = tokens[i];
			symbol = token[0];

			if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate);
			else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate);
			else if (symbol === ">") value = this.renderPartial(token, context, partials, tags);
			else if (symbol === "&") value = this.unescapedValue(token, context);
			else if (symbol === "name") value = this.escapedValue(token, context);
			else if (symbol === "text") value = this.rawValue(token);

			if (value !== undefined) buffer += value;
		}

		return buffer;
	};

	Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
		var self = this;
		var buffer = "";
		var value = context.lookup(token[1]);

		// This function is used to render an arbitrary template
		// in the current context by higher-order sections.
		function subRender(template) {
			return self.render(template, context, partials);
		}

		if (!value) return;

		if (isArray(value)) {
			for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
				buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
			}
		} else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
			buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
		} else if (isFunction(value)) {
			if (typeof originalTemplate !== "string") throw new Error("Cannot use higher-order sections without the original template");

			// Extract the portion of the original template that the section contains.
			value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

			if (value != null) buffer += value;
		} else {
			buffer += this.renderTokens(token[4], context, partials, originalTemplate);
		}
		return buffer;
	};

	Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
		var value = context.lookup(token[1]);

		// Use JavaScript's definition of falsy. Include empty arrays.
		// See https://github.com/janl/mustache.js/issues/186
		if (!value || (isArray(value) && value.length === 0)) return this.renderTokens(token[4], context, partials, originalTemplate);
	};

	Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
		var filteredIndentation = indentation.replace(/[^ \t]/g, "");
		var partialByNl = partial.split("\n");
		for (var i = 0; i < partialByNl.length; i++) {
			if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
				partialByNl[i] = filteredIndentation + partialByNl[i];
			}
		}
		return partialByNl.join("\n");
	};

	Writer.prototype.renderPartial = function renderPartial(token, context, partials, tags) {
		if (!partials) return;

		var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
		if (value != null) {
			var lineHasNonSpace = token[6];
			var tagIndex = token[5];
			var indentation = token[4];
			var indentedValue = value;
			if (tagIndex == 0 && indentation) {
				indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
			}
			return this.renderTokens(this.parse(indentedValue, tags), context, partials, indentedValue, tags);
		}
	};

	Writer.prototype.unescapedValue = function unescapedValue(token, context) {
		var value = context.lookup(token[1]);
		if (value != null) return value;
	};

	Writer.prototype.escapedValue = function escapedValue(token, context) {
		var value = context.lookup(token[1]);
		if (value != null) return mustache.escape(value);
	};

	Writer.prototype.rawValue = function rawValue(token) {
		return token[1];
	};

	var mustache = {
		name: "mustache.js",
		version: "4.0.1",
		tags: ["{{", "}}"],
		clearCache: undefined,
		escape: undefined,
		parse: undefined,
		render: undefined,
		Scanner: undefined,
		Context: undefined,
		Writer: undefined,
		/**
		 * Allows a user to override the default caching strategy, by providing an
		 * object with set, get and clear methods. This can also be used to disable
		 * the cache by setting it to the literal `undefined`.
		 */
		set templateCache(cache) {
			defaultWriter.templateCache = cache;
		},
		/**
		 * Gets the default or overridden caching object from the default writer.
		 */
		get templateCache() {
			return defaultWriter.templateCache;
		},
	};

	// All high-level mustache.* functions use this writer.
	var defaultWriter = new Writer();

	/**
	 * Clears all cached templates in the default writer.
	 */
	mustache.clearCache = function clearCache() {
		return defaultWriter.clearCache();
	};

	/**
	 * Parses and caches the given template in the default writer and returns the
	 * array of tokens it contains. Doing this ahead of time avoids the need to
	 * parse templates on the fly as they are rendered.
	 */
	mustache.parse = function parse(template, tags) {
		return defaultWriter.parse(template, tags);
	};

	/**
	 * Renders the `template` with the given `view` and `partials` using the
	 * default writer. If the optional `tags` argument is given here it must be an
	 * array with two string values: the opening and closing tags used in the
	 * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
	 */
	mustache.render = function render(template, view, partials, tags) {
		if (typeof template !== "string") {
			throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)");
		}

		return defaultWriter.render(template, view, partials, tags);
	};

	// Export the escaping function so that the user may override it.
	// See https://github.com/janl/mustache.js/issues/244
	mustache.escape = escapeHtml;

	// Export these mainly for testing, but also for advanced usage.
	mustache.Scanner = Scanner;
	mustache.Context = Context;
	mustache.Writer = Writer;

	return mustache;
});

// mustache renderer
function mustRender(templateId, contentObject, target) {
	var template = $(templateId).html();
	var content = Mustache.render(template, contentObject);
	$(target).html(content);
}

// tabs to collapse
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

// bootstrap bundle
!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module
		? e(exports, require("jquery"))
		: "function" == typeof define && define.amd
		? define(["exports", "jquery"], e)
		: e(((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}), t.jQuery);
})(this, function (t, e) {
	"use strict";
	function n(t) {
		return t && "object" == typeof t && "default" in t ? t : { default: t };
	}
	function i(t, e) {
		for (var n = 0; n < e.length; n++) {
			var i = e[n];
			(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
		}
	}
	function o(t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t;
	}
	function r() {
		return (r =
			Object.assign ||
			function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}).apply(this, arguments);
	}
	function a(t) {
		var e = this,
			n = !1;
		return (
			G.default(this).one($.TRANSITION_END, function () {
				n = !0;
			}),
			setTimeout(function () {
				n || $.triggerTransitionEnd(e);
			}, t),
			this
		);
	}
	function s(t) {
		return t && "[object Function]" === {}.toString.call(t);
	}
	function l(t, e) {
		if (1 !== t.nodeType) return [];
		var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
		return e ? n[e] : n;
	}
	function u(t) {
		return "HTML" === t.nodeName ? t : t.parentNode || t.host;
	}
	function f(t) {
		if (!t) return document.body;
		switch (t.nodeName) {
			case "HTML":
			case "BODY":
				return t.ownerDocument.body;
			case "#document":
				return t.body;
		}
		var e = l(t),
			n = e.overflow,
			i = e.overflowX,
			o = e.overflowY;
		return /(auto|scroll|overlay)/.test(n + o + i) ? t : f(u(t));
	}
	function d(t) {
		return t && t.referenceNode ? t.referenceNode : t;
	}
	function c(t) {
		return 11 === t ? _t : 10 === t ? bt : _t || bt;
	}
	function h(t) {
		if (!t) return document.documentElement;
		for (var e = c(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling; ) n = (t = t.nextElementSibling).offsetParent;
		var i = n && n.nodeName;
		return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n) : t ? t.ownerDocument.documentElement : document.documentElement;
	}
	function p(t) {
		return null !== t.parentNode ? p(t.parentNode) : t;
	}
	function m(t, e) {
		if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
		var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
			i = n ? t : e,
			o = n ? e : t,
			r = document.createRange();
		r.setStart(i, 0), r.setEnd(o, 0);
		var a,
			s,
			l = r.commonAncestorContainer;
		if ((t !== l && e !== l) || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || ("HTML" !== s && h(a.firstElementChild) !== a) ? h(l) : l;
		var u = p(t);
		return u.host ? m(u.host, e) : m(t, p(e).host);
	}
	function g(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
			n = "top" === e ? "scrollTop" : "scrollLeft",
			i = t.nodeName;
		if ("BODY" === i || "HTML" === i) {
			var o = t.ownerDocument.documentElement,
				r = t.ownerDocument.scrollingElement || o;
			return r[n];
		}
		return t[n];
	}
	function v(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = g(e, "top"),
			o = g(e, "left"),
			r = n ? -1 : 1;
		return (t.top += i * r), (t.bottom += i * r), (t.left += o * r), (t.right += o * r), t;
	}
	function _(t, e) {
		var n = "x" === e ? "Left" : "Top",
			i = "Left" === n ? "Right" : "Bottom";
		return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"]);
	}
	function b(t, e, n, i) {
		return Math.max(
			e["offset" + t],
			e["scroll" + t],
			n["client" + t],
			n["offset" + t],
			n["scroll" + t],
			c(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0
		);
	}
	function y(t) {
		var e = t.body,
			n = t.documentElement,
			i = c(10) && getComputedStyle(n);
		return { height: b("Height", e, n, i), width: b("Width", e, n, i) };
	}
	function w(t) {
		return Tt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
	}
	function E(t) {
		var e = {};
		try {
			if (c(10)) {
				e = t.getBoundingClientRect();
				var n = g(t, "top"),
					i = g(t, "left");
				(e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
			} else e = t.getBoundingClientRect();
		} catch (t) {}
		var o = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top },
			r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
			a = r.width || t.clientWidth || o.width,
			s = r.height || t.clientHeight || o.height,
			u = t.offsetWidth - a,
			f = t.offsetHeight - s;
		if (u || f) {
			var d = l(t);
			(u -= _(d, "x")), (f -= _(d, "y")), (o.width -= u), (o.height -= f);
		}
		return w(o);
	}
	function T(t, e) {
		var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			i = c(10),
			o = "HTML" === e.nodeName,
			r = E(t),
			a = E(e),
			s = f(t),
			u = l(e),
			d = parseFloat(u.borderTopWidth),
			h = parseFloat(u.borderLeftWidth);
		n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
		var p = w({ top: r.top - a.top - d, left: r.left - a.left - h, width: r.width, height: r.height });
		if (((p.marginTop = 0), (p.marginLeft = 0), !i && o)) {
			var m = parseFloat(u.marginTop),
				g = parseFloat(u.marginLeft);
			(p.top -= d - m), (p.bottom -= d - m), (p.left -= h - g), (p.right -= h - g), (p.marginTop = m), (p.marginLeft = g);
		}
		return (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (p = v(p, e)), p;
	}
	function C(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = t.ownerDocument.documentElement,
			i = T(t, n),
			o = Math.max(n.clientWidth, window.innerWidth || 0),
			r = Math.max(n.clientHeight, window.innerHeight || 0),
			a = e ? 0 : g(n),
			s = e ? 0 : g(n, "left"),
			l = { top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: o, height: r };
		return w(l);
	}
	function S(t) {
		var e = t.nodeName;
		if ("BODY" === e || "HTML" === e) return !1;
		if ("fixed" === l(t, "position")) return !0;
		var n = u(t);
		return !!n && S(n);
	}
	function D(t) {
		if (!t || !t.parentElement || c()) return document.documentElement;
		for (var e = t.parentElement; e && "none" === l(e, "transform"); ) e = e.parentElement;
		return e || document.documentElement;
	}
	function N(t, e, n, i) {
		var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
			r = { top: 0, left: 0 },
			a = o ? D(t) : m(t, d(e));
		if ("viewport" === i) r = C(a, o);
		else {
			var s = void 0;
			"scrollParent" === i ? "BODY" === (s = f(u(e))).nodeName && (s = t.ownerDocument.documentElement) : (s = "window" === i ? t.ownerDocument.documentElement : i);
			var l = T(s, a, o);
			if ("HTML" !== s.nodeName || S(a)) r = l;
			else {
				var c = y(t.ownerDocument),
					h = c.height,
					p = c.width;
				(r.top += l.top - l.marginTop), (r.bottom = h + l.top), (r.left += l.left - l.marginLeft), (r.right = p + l.left);
			}
		}
		var g = "number" == typeof (n = n || 0);
		return (r.left += g ? n : n.left || 0), (r.top += g ? n : n.top || 0), (r.right -= g ? n : n.right || 0), (r.bottom -= g ? n : n.bottom || 0), r;
	}
	function k(t) {
		return t.width * t.height;
	}
	function A(t, e, n, i, o) {
		var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
		if (-1 === t.indexOf("auto")) return t;
		var a = N(n, i, r, o),
			s = { top: { width: a.width, height: e.top - a.top }, right: { width: a.right - e.right, height: a.height }, bottom: { width: a.width, height: a.bottom - e.bottom }, left: { width: e.left - a.left, height: a.height } },
			l = Object.keys(s)
				.map(function (t) {
					return Tt({ key: t }, s[t], { area: k(s[t]) });
				})
				.sort(function (t, e) {
					return e.area - t.area;
				}),
			u = l.filter(function (t) {
				var e = t.width,
					i = t.height;
				return e >= n.clientWidth && i >= n.clientHeight;
			}),
			f = u.length > 0 ? u[0].key : l[0].key,
			d = t.split("-")[1];
		return f + (d ? "-" + d : "");
	}
	function I(t, e, n) {
		var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
			o = i ? D(e) : m(e, d(n));
		return T(n, o, i);
	}
	function O(t) {
		var e = t.ownerDocument.defaultView.getComputedStyle(t),
			n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
			i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
		return { width: t.offsetWidth + i, height: t.offsetHeight + n };
	}
	function x(t) {
		var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
		return t.replace(/left|right|bottom|top/g, function (t) {
			return e[t];
		});
	}
	function j(t, e, n) {
		n = n.split("-")[0];
		var i = O(t),
			o = { width: i.width, height: i.height },
			r = -1 !== ["right", "left"].indexOf(n),
			a = r ? "top" : "left",
			s = r ? "left" : "top",
			l = r ? "height" : "width",
			u = r ? "width" : "height";
		return (o[a] = e[a] + e[l] / 2 - i[l] / 2), (o[s] = n === s ? e[s] - i[u] : e[x(s)]), o;
	}
	function L(t, e) {
		return Array.prototype.find ? t.find(e) : t.filter(e)[0];
	}
	function P(t, e, n) {
		return (
			(void 0 === n
				? t
				: t.slice(
						0,
						(function (t, e, n) {
							if (Array.prototype.findIndex)
								return t.findIndex(function (t) {
									return t[e] === n;
								});
							var i = L(t, function (t) {
								return t[e] === n;
							});
							return t.indexOf(i);
						})(t, "name", n)
				  )
			).forEach(function (t) {
				t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
				var n = t.function || t.fn;
				t.enabled && s(n) && ((e.offsets.popper = w(e.offsets.popper)), (e.offsets.reference = w(e.offsets.reference)), (e = n(e, t)));
			}),
			e
		);
	}
	function F() {
		if (!this.state.isDestroyed) {
			var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
			(t.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed)),
				(t.placement = A(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
				(t.originalPlacement = t.placement),
				(t.positionFixed = this.options.positionFixed),
				(t.offsets.popper = j(this.popper, t.offsets.reference, t.placement)),
				(t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
				(t = P(this.modifiers, t)),
				this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t));
		}
	}
	function R(t, e) {
		return t.some(function (t) {
			var n = t.name;
			return t.enabled && n === e;
		});
	}
	function H(t) {
		for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
			var o = e[i],
				r = o ? "" + o + n : t;
			if (void 0 !== document.body.style[r]) return r;
		}
		return null;
	}
	function M() {
		return (
			(this.state.isDestroyed = !0),
			R(this.modifiers, "applyStyle") &&
				(this.popper.removeAttribute("x-placement"),
				(this.popper.style.position = ""),
				(this.popper.style.top = ""),
				(this.popper.style.left = ""),
				(this.popper.style.right = ""),
				(this.popper.style.bottom = ""),
				(this.popper.style.willChange = ""),
				(this.popper.style[H("transform")] = "")),
			this.disableEventListeners(),
			this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
			this
		);
	}
	function B(t) {
		var e = t.ownerDocument;
		return e ? e.defaultView : window;
	}
	function q(t, e, n, i) {
		(n.updateBound = i), B(t).addEventListener("resize", n.updateBound, { passive: !0 });
		var o = f(t);
		return (
			(function t(e, n, i, o) {
				var r = "BODY" === e.nodeName,
					a = r ? e.ownerDocument.defaultView : e;
				a.addEventListener(n, i, { passive: !0 }), r || t(f(a.parentNode), n, i, o), o.push(a);
			})(o, "scroll", n.updateBound, n.scrollParents),
			(n.scrollElement = o),
			(n.eventsEnabled = !0),
			n
		);
	}
	function Q() {
		this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate));
	}
	function W() {
		var t, e;
		this.state.eventsEnabled &&
			(cancelAnimationFrame(this.scheduleUpdate),
			(this.state =
				((t = this.reference),
				(e = this.state),
				B(t).removeEventListener("resize", e.updateBound),
				e.scrollParents.forEach(function (t) {
					t.removeEventListener("scroll", e.updateBound);
				}),
				(e.updateBound = null),
				(e.scrollParents = []),
				(e.scrollElement = null),
				(e.eventsEnabled = !1),
				e)));
	}
	function U(t) {
		return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
	}
	function V(t, e) {
		Object.keys(e).forEach(function (n) {
			var i = "";
			-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && U(e[n]) && (i = "px"), (t.style[n] = e[n] + i);
		});
	}
	function Y(t, e, n) {
		var i = L(t, function (t) {
				return t.name === e;
			}),
			o =
				!!i &&
				t.some(function (t) {
					return t.name === n && t.enabled && t.order < i.order;
				});
		if (!o) {
			var r = "`" + e + "`",
				a = "`" + n + "`";
			console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
		}
		return o;
	}
	function z(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = Dt.indexOf(t),
			i = Dt.slice(n + 1).concat(Dt.slice(0, n));
		return e ? i.reverse() : i;
	}
	function X(t, e, n, i) {
		var o = [0, 0],
			r = -1 !== ["right", "left"].indexOf(i),
			a = t.split(/(\+|\-)/).map(function (t) {
				return t.trim();
			}),
			s = a.indexOf(
				L(a, function (t) {
					return -1 !== t.search(/,|\s/);
				})
			);
		a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
		var l = /\s*,\s*|\s+/,
			u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
		return (
			(u = u.map(function (t, i) {
				var o = (1 === i ? !r : r) ? "height" : "width",
					a = !1;
				return t
					.reduce(function (t, e) {
						return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? ((t[t.length - 1] = e), (a = !0), t) : a ? ((t[t.length - 1] += e), (a = !1), t) : t.concat(e);
					}, [])
					.map(function (t) {
						return (function (t, e, n, i) {
							var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
								r = +o[1],
								a = o[2];
							if (!r) return t;
							if (0 === a.indexOf("%")) {
								var s = void 0;
								switch (a) {
									case "%p":
										s = n;
										break;
									case "%":
									case "%r":
									default:
										s = i;
								}
								return (w(s)[e] / 100) * r;
							}
							return "vh" === a || "vw" === a ? (("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r : r;
						})(t, o, e, n);
					});
			})).forEach(function (t, e) {
				t.forEach(function (n, i) {
					U(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
				});
			}),
			o
		);
	}
	function K(t, e, n) {
		if (0 === t.length) return t;
		if (n && "function" == typeof n) return n(t);
		for (
			var i = new window.DOMParser().parseFromString(t, "text/html"),
				o = Object.keys(e),
				r = [].slice.call(i.body.querySelectorAll("*")),
				a = function (t, n) {
					var i = r[t],
						a = i.nodeName.toLowerCase();
					if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
					var s = [].slice.call(i.attributes),
						l = [].concat(e["*"] || [], e[a] || []);
					s.forEach(function (t) {
						(function (t, e) {
							var n = t.nodeName.toLowerCase();
							if (-1 !== e.indexOf(n)) return -1 === Qt.indexOf(n) || Boolean(t.nodeValue.match(Ut) || t.nodeValue.match(Vt));
							for (
								var i = e.filter(function (t) {
										return t instanceof RegExp;
									}),
									o = 0,
									r = i.length;
								o < r;
								o++
							)
								if (n.match(i[o])) return !0;
							return !1;
						})(t, l) || i.removeAttribute(t.nodeName);
					});
				},
				s = 0,
				l = r.length;
			s < l;
			s++
		)
			a(s);
		return i.body.innerHTML;
	}
	var G = n(e),
		$ = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function (t) {
				do {
					t += ~~(1e6 * Math.random());
				} while (document.getElementById(t));
				return t;
			},
			getSelectorFromElement: function (t) {
				var e = t.getAttribute("data-target");
				if (!e || "#" === e) {
					var n = t.getAttribute("href");
					e = n && "#" !== n ? n.trim() : "";
				}
				try {
					return document.querySelector(e) ? e : null;
				} catch (t) {
					return null;
				}
			},
			getTransitionDurationFromElement: function (t) {
				if (!t) return 0;
				var e = G.default(t).css("transition-duration"),
					n = G.default(t).css("transition-delay"),
					i = parseFloat(e),
					o = parseFloat(n);
				return i || o ? ((e = e.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
			},
			reflow: function (t) {
				return t.offsetHeight;
			},
			triggerTransitionEnd: function (t) {
				G.default(t).trigger("transitionend");
			},
			supportsTransitionEnd: function () {
				return Boolean("transitionend");
			},
			isElement: function (t) {
				return (t[0] || t).nodeType;
			},
			typeCheckConfig: function (t, e, n) {
				for (var i in n)
					if (Object.prototype.hasOwnProperty.call(n, i)) {
						var o = n[i],
							r = e[i],
							a =
								r && $.isElement(r)
									? "element"
									: null === (s = r) || void 0 === s
									? "" + s
									: {}.toString
											.call(s)
											.match(/\s([a-z]+)/i)[1]
											.toLowerCase();
						if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
					}
				var s;
			},
			findShadowRoot: function (t) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" == typeof t.getRootNode) {
					var e = t.getRootNode();
					return e instanceof ShadowRoot ? e : null;
				}
				return t instanceof ShadowRoot ? t : t.parentNode ? $.findShadowRoot(t.parentNode) : null;
			},
			jQueryDetection: function () {
				if (void 0 === G.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var t = G.default.fn.jquery.split(" ")[0].split(".");
				if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
			},
		};
	$.jQueryDetection(),
		(G.default.fn.emulateTransitionEnd = a),
		(G.default.event.special[$.TRANSITION_END] = {
			bindType: "transitionend",
			delegateType: "transitionend",
			handle: function (t) {
				if (G.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
			},
		});
	var J = "alert",
		Z = G.default.fn[J],
		tt = (function () {
			function t(t) {
				this._element = t;
			}
			var e = t.prototype;
			return (
				(e.close = function (t) {
					var e = this._element;
					t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.alert"), (this._element = null);
				}),
				(e._getRootElement = function (t) {
					var e = $.getSelectorFromElement(t),
						n = !1;
					return e && (n = document.querySelector(e)), n || (n = G.default(t).closest(".alert")[0]), n;
				}),
				(e._triggerCloseEvent = function (t) {
					var e = G.default.Event("close.bs.alert");
					return G.default(t).trigger(e), e;
				}),
				(e._removeElement = function (t) {
					var e = this;
					if ((G.default(t).removeClass("show"), G.default(t).hasClass("fade"))) {
						var n = $.getTransitionDurationFromElement(t);
						G.default(t)
							.one($.TRANSITION_END, function (n) {
								return e._destroyElement(t, n);
							})
							.emulateTransitionEnd(n);
					} else this._destroyElement(t);
				}),
				(e._destroyElement = function (t) {
					G.default(t).detach().trigger("closed.bs.alert").remove();
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this),
							i = n.data("bs.alert");
						i || ((i = new t(this)), n.data("bs.alert", i)), "close" === e && i[e](this);
					});
				}),
				(t._handleDismiss = function (t) {
					return function (e) {
						e && e.preventDefault(), t.close(this);
					};
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
				]),
				t
			);
		})();
	G.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', tt._handleDismiss(new tt())),
		(G.default.fn[J] = tt._jQueryInterface),
		(G.default.fn[J].Constructor = tt),
		(G.default.fn[J].noConflict = function () {
			return (G.default.fn[J] = Z), tt._jQueryInterface;
		});
	var et = G.default.fn.button,
		nt = (function () {
			function t(t) {
				(this._element = t), (this.shouldAvoidTriggerChange = !1);
			}
			var e = t.prototype;
			return (
				(e.toggle = function () {
					var t = !0,
						e = !0,
						n = G.default(this._element).closest('[data-toggle="buttons"]')[0];
					if (n) {
						var i = this._element.querySelector('input:not([type="hidden"])');
						if (i) {
							if ("radio" === i.type)
								if (i.checked && this._element.classList.contains("active")) t = !1;
								else {
									var o = n.querySelector(".active");
									o && G.default(o).removeClass("active");
								}
							t && (("checkbox" !== i.type && "radio" !== i.type) || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || G.default(i).trigger("change")), i.focus(), (e = !1);
						}
					}
					this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && G.default(this._element).toggleClass("active"));
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.button"), (this._element = null);
				}),
				(t._jQueryInterface = function (e, n) {
					return this.each(function () {
						var i = G.default(this),
							o = i.data("bs.button");
						o || ((o = new t(this)), i.data("bs.button", o)), (o.shouldAvoidTriggerChange = n), "toggle" === e && o[e]();
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
				]),
				t
			);
		})();
	G.default(document)
		.on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
			var e = t.target,
				n = e;
			if ((G.default(e).hasClass("btn") || (e = G.default(e).closest(".btn")[0]), !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))) t.preventDefault();
			else {
				var i = e.querySelector('input:not([type="hidden"])');
				if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void t.preventDefault();
				("INPUT" !== n.tagName && "LABEL" === e.tagName) || nt._jQueryInterface.call(G.default(e), "toggle", "INPUT" === n.tagName);
			}
		})
		.on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
			var e = G.default(t.target).closest(".btn")[0];
			G.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
		}),
		G.default(window).on("load.bs.button.data-api", function () {
			for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
				var i = t[e],
					o = i.querySelector('input:not([type="hidden"])');
				o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
			}
			for (var r = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) {
				var s = t[r];
				"true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
			}
		}),
		(G.default.fn.button = nt._jQueryInterface),
		(G.default.fn.button.Constructor = nt),
		(G.default.fn.button.noConflict = function () {
			return (G.default.fn.button = et), nt._jQueryInterface;
		});
	var it = "carousel",
		ot = ".bs.carousel",
		rt = G.default.fn[it],
		at = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
		st = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
		lt = { TOUCH: "touch", PEN: "pen" },
		ut = (function () {
			function t(t, e) {
				(this._items = null),
					(this._interval = null),
					(this._activeElement = null),
					(this._isPaused = !1),
					(this._isSliding = !1),
					(this.touchTimeout = null),
					(this.touchStartX = 0),
					(this.touchDeltaX = 0),
					(this._config = this._getConfig(e)),
					(this._element = t),
					(this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
					(this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
					(this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
					this._addEventListeners();
			}
			var e = t.prototype;
			return (
				(e.next = function () {
					this._isSliding || this._slide("next");
				}),
				(e.nextWhenVisible = function () {
					var t = G.default(this._element);
					!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
				}),
				(e.prev = function () {
					this._isSliding || this._slide("prev");
				}),
				(e.pause = function (t) {
					t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && ($.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
				}),
				(e.cycle = function (t) {
					t || (this._isPaused = !1),
						this._interval && (clearInterval(this._interval), (this._interval = null)),
						this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
				}),
				(e.to = function (t) {
					var e = this;
					this._activeElement = this._element.querySelector(".active.carousel-item");
					var n = this._getItemIndex(this._activeElement);
					if (!(t > this._items.length - 1 || t < 0))
						if (this._isSliding)
							G.default(this._element).one("slid.bs.carousel", function () {
								return e.to(t);
							});
						else {
							if (n === t) return this.pause(), void this.cycle();
							var i = t > n ? "next" : "prev";
							this._slide(i, this._items[t]);
						}
				}),
				(e.dispose = function () {
					G.default(this._element).off(ot),
						G.default.removeData(this._element, "bs.carousel"),
						(this._items = null),
						(this._config = null),
						(this._element = null),
						(this._interval = null),
						(this._isPaused = null),
						(this._isSliding = null),
						(this._activeElement = null),
						(this._indicatorsElement = null);
				}),
				(e._getConfig = function (t) {
					return (t = r({}, at, t)), $.typeCheckConfig(it, t, st), t;
				}),
				(e._handleSwipe = function () {
					var t = Math.abs(this.touchDeltaX);
					if (!(t <= 40)) {
						var e = t / this.touchDeltaX;
						(this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
					}
				}),
				(e._addEventListeners = function () {
					var t = this;
					this._config.keyboard &&
						G.default(this._element).on("keydown.bs.carousel", function (e) {
							return t._keydown(e);
						}),
						"hover" === this._config.pause &&
							G.default(this._element)
								.on("mouseenter.bs.carousel", function (e) {
									return t.pause(e);
								})
								.on("mouseleave.bs.carousel", function (e) {
									return t.cycle(e);
								}),
						this._config.touch && this._addTouchEventListeners();
				}),
				(e._addTouchEventListeners = function () {
					var t = this;
					if (this._touchSupported) {
						var e = function (e) {
								t._pointerEvent && lt[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
							},
							n = function (e) {
								t._pointerEvent && lt[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
									t._handleSwipe(),
									"hover" === t._config.pause &&
										(t.pause(),
										t.touchTimeout && clearTimeout(t.touchTimeout),
										(t.touchTimeout = setTimeout(function (e) {
											return t.cycle(e);
										}, 500 + t._config.interval)));
							};
						G.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
							return t.preventDefault();
						}),
							this._pointerEvent
								? (G.default(this._element).on("pointerdown.bs.carousel", function (t) {
										return e(t);
								  }),
								  G.default(this._element).on("pointerup.bs.carousel", function (t) {
										return n(t);
								  }),
								  this._element.classList.add("pointer-event"))
								: (G.default(this._element).on("touchstart.bs.carousel", function (t) {
										return e(t);
								  }),
								  G.default(this._element).on("touchmove.bs.carousel", function (e) {
										return (function (e) {
											e.originalEvent.touches && e.originalEvent.touches.length > 1 ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
										})(e);
								  }),
								  G.default(this._element).on("touchend.bs.carousel", function (t) {
										return n(t);
								  }));
					}
				}),
				(e._keydown = function (t) {
					if (!/input|textarea/i.test(t.target.tagName))
						switch (t.which) {
							case 37:
								t.preventDefault(), this.prev();
								break;
							case 39:
								t.preventDefault(), this.next();
						}
				}),
				(e._getItemIndex = function (t) {
					return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(t);
				}),
				(e._getItemByDirection = function (t, e) {
					var n = "next" === t,
						i = "prev" === t,
						o = this._getItemIndex(e),
						r = this._items.length - 1;
					if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
					var a = (o + ("prev" === t ? -1 : 1)) % this._items.length;
					return -1 === a ? this._items[this._items.length - 1] : this._items[a];
				}),
				(e._triggerSlideEvent = function (t, e) {
					var n = this._getItemIndex(t),
						i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
						o = G.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: i, to: n });
					return G.default(this._element).trigger(o), o;
				}),
				(e._setActiveIndicatorElement = function (t) {
					if (this._indicatorsElement) {
						var e = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
						G.default(e).removeClass("active");
						var n = this._indicatorsElement.children[this._getItemIndex(t)];
						n && G.default(n).addClass("active");
					}
				}),
				(e._slide = function (t, e) {
					var n,
						i,
						o,
						r = this,
						a = this._element.querySelector(".active.carousel-item"),
						s = this._getItemIndex(a),
						l = e || (a && this._getItemByDirection(t, a)),
						u = this._getItemIndex(l),
						f = Boolean(this._interval);
					if (("next" === t ? ((n = "carousel-item-left"), (i = "carousel-item-next"), (o = "left")) : ((n = "carousel-item-right"), (i = "carousel-item-prev"), (o = "right")), l && G.default(l).hasClass("active"))) this._isSliding = !1;
					else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
						(this._isSliding = !0), f && this.pause(), this._setActiveIndicatorElement(l);
						var d = G.default.Event("slid.bs.carousel", { relatedTarget: l, direction: o, from: s, to: u });
						if (G.default(this._element).hasClass("slide")) {
							G.default(l).addClass(i), $.reflow(l), G.default(a).addClass(n), G.default(l).addClass(n);
							var c = parseInt(l.getAttribute("data-interval"), 10);
							c ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = c)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
							var h = $.getTransitionDurationFromElement(a);
							G.default(a)
								.one($.TRANSITION_END, function () {
									G.default(l)
										.removeClass(n + " " + i)
										.addClass("active"),
										G.default(a).removeClass("active " + i + " " + n),
										(r._isSliding = !1),
										setTimeout(function () {
											return G.default(r._element).trigger(d);
										}, 0);
								})
								.emulateTransitionEnd(h);
						} else G.default(a).removeClass("active"), G.default(l).addClass("active"), (this._isSliding = !1), G.default(this._element).trigger(d);
						f && this.cycle();
					}
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this).data("bs.carousel"),
							i = r({}, at, G.default(this).data());
						"object" == typeof e && (i = r({}, i, e));
						var o = "string" == typeof e ? e : i.slide;
						if ((n || ((n = new t(this, i)), G.default(this).data("bs.carousel", n)), "number" == typeof e)) n.to(e);
						else if ("string" == typeof o) {
							if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
							n[o]();
						} else i.interval && i.ride && (n.pause(), n.cycle());
					});
				}),
				(t._dataApiClickHandler = function (e) {
					var n = $.getSelectorFromElement(this);
					if (n) {
						var i = G.default(n)[0];
						if (i && G.default(i).hasClass("carousel")) {
							var o = r({}, G.default(i).data(), G.default(this).data()),
								a = this.getAttribute("data-slide-to");
							a && (o.interval = !1), t._jQueryInterface.call(G.default(i), o), a && G.default(i).data("bs.carousel").to(a), e.preventDefault();
						}
					}
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return at;
						},
					},
				]),
				t
			);
		})();
	G.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", ut._dataApiClickHandler),
		G.default(window).on("load.bs.carousel.data-api", function () {
			for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
				var i = G.default(t[e]);
				ut._jQueryInterface.call(i, i.data());
			}
		}),
		(G.default.fn[it] = ut._jQueryInterface),
		(G.default.fn[it].Constructor = ut),
		(G.default.fn[it].noConflict = function () {
			return (G.default.fn[it] = rt), ut._jQueryInterface;
		});
	var ft = "collapse",
		dt = G.default.fn[ft],
		ct = { toggle: !0, parent: "" },
		ht = { toggle: "boolean", parent: "(string|element)" },
		pt = (function () {
			function t(t, e) {
				(this._isTransitioning = !1),
					(this._element = t),
					(this._config = this._getConfig(e)),
					(this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
				for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
					var r = n[i],
						a = $.getSelectorFromElement(r),
						s = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
							return e === t;
						});
					null !== a && s.length > 0 && ((this._selector = a), this._triggerArray.push(r));
				}
				(this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
			}
			var e = t.prototype;
			return (
				(e.toggle = function () {
					G.default(this._element).hasClass("show") ? this.hide() : this.show();
				}),
				(e.show = function () {
					var e,
						n,
						i = this;
					if (
						!(
							this._isTransitioning ||
							G.default(this._element).hasClass("show") ||
							(this._parent &&
								0 ===
									(e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
										return "string" == typeof i._config.parent ? t.getAttribute("data-parent") === i._config.parent : t.classList.contains("collapse");
									})).length &&
								(e = null),
							e && (n = G.default(e).not(this._selector).data("bs.collapse")) && n._isTransitioning)
						)
					) {
						var o = G.default.Event("show.bs.collapse");
						if ((G.default(this._element).trigger(o), !o.isDefaultPrevented())) {
							e && (t._jQueryInterface.call(G.default(e).not(this._selector), "hide"), n || G.default(e).data("bs.collapse", null));
							var r = this._getDimension();
							G.default(this._element).removeClass("collapse").addClass("collapsing"),
								(this._element.style[r] = 0),
								this._triggerArray.length && G.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
								this.setTransitioning(!0);
							var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
								s = $.getTransitionDurationFromElement(this._element);
							G.default(this._element)
								.one($.TRANSITION_END, function () {
									G.default(i._element).removeClass("collapsing").addClass("collapse show"), (i._element.style[r] = ""), i.setTransitioning(!1), G.default(i._element).trigger("shown.bs.collapse");
								})
								.emulateTransitionEnd(s),
								(this._element.style[r] = this._element[a] + "px");
						}
					}
				}),
				(e.hide = function () {
					var t = this;
					if (!this._isTransitioning && G.default(this._element).hasClass("show")) {
						var e = G.default.Event("hide.bs.collapse");
						if ((G.default(this._element).trigger(e), !e.isDefaultPrevented())) {
							var n = this._getDimension();
							(this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), $.reflow(this._element), G.default(this._element).addClass("collapsing").removeClass("collapse show");
							var i = this._triggerArray.length;
							if (i > 0)
								for (var o = 0; o < i; o++) {
									var r = this._triggerArray[o],
										a = $.getSelectorFromElement(r);
									null !== a && (G.default([].slice.call(document.querySelectorAll(a))).hasClass("show") || G.default(r).addClass("collapsed").attr("aria-expanded", !1));
								}
							this.setTransitioning(!0), (this._element.style[n] = "");
							var s = $.getTransitionDurationFromElement(this._element);
							G.default(this._element)
								.one($.TRANSITION_END, function () {
									t.setTransitioning(!1), G.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
								})
								.emulateTransitionEnd(s);
						}
					}
				}),
				(e.setTransitioning = function (t) {
					this._isTransitioning = t;
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
				}),
				(e._getConfig = function (t) {
					return ((t = r({}, ct, t)).toggle = Boolean(t.toggle)), $.typeCheckConfig(ft, t, ht), t;
				}),
				(e._getDimension = function () {
					return G.default(this._element).hasClass("width") ? "width" : "height";
				}),
				(e._getParent = function () {
					var e,
						n = this;
					$.isElement(this._config.parent) ? ((e = this._config.parent), void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : (e = document.querySelector(this._config.parent));
					var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
						o = [].slice.call(e.querySelectorAll(i));
					return (
						G.default(o).each(function (e, i) {
							n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
						}),
						e
					);
				}),
				(e._addAriaAndCollapsedClass = function (t, e) {
					var n = G.default(t).hasClass("show");
					e.length && G.default(e).toggleClass("collapsed", !n).attr("aria-expanded", n);
				}),
				(t._getTargetFromElement = function (t) {
					var e = $.getSelectorFromElement(t);
					return e ? document.querySelector(e) : null;
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this),
							i = n.data("bs.collapse"),
							o = r({}, ct, n.data(), "object" == typeof e && e ? e : {});
						if ((!i && o.toggle && "string" == typeof e && /show|hide/.test(e) && (o.toggle = !1), i || ((i = new t(this, o)), n.data("bs.collapse", i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e]();
						}
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return ct;
						},
					},
				]),
				t
			);
		})();
	G.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
		"A" === t.currentTarget.tagName && t.preventDefault();
		var e = G.default(this),
			n = $.getSelectorFromElement(this),
			i = [].slice.call(document.querySelectorAll(n));
		G.default(i).each(function () {
			var t = G.default(this),
				n = t.data("bs.collapse") ? "toggle" : e.data();
			pt._jQueryInterface.call(t, n);
		});
	}),
		(G.default.fn[ft] = pt._jQueryInterface),
		(G.default.fn[ft].Constructor = pt),
		(G.default.fn[ft].noConflict = function () {
			return (G.default.fn[ft] = dt), pt._jQueryInterface;
		});
	var mt = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
		gt = (function () {
			for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) if (mt && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
			return 0;
		})(),
		vt =
			mt && window.Promise
				? function (t) {
						var e = !1;
						return function () {
							e ||
								((e = !0),
								window.Promise.resolve().then(function () {
									(e = !1), t();
								}));
						};
				  }
				: function (t) {
						var e = !1;
						return function () {
							e ||
								((e = !0),
								setTimeout(function () {
									(e = !1), t();
								}, gt));
						};
				  },
		_t = mt && !(!window.MSInputMethodContext || !document.documentMode),
		bt = mt && /MSIE 10/.test(navigator.userAgent),
		yt = function (t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
		},
		wt = (function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
				}
			}
			return function (e, n, i) {
				return n && t(e.prototype, n), i && t(e, i), e;
			};
		})(),
		Et = function (t, e, n) {
			return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
		},
		Tt =
			Object.assign ||
			function (t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			},
		Ct = mt && /Firefox/i.test(navigator.userAgent),
		St = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
		Dt = St.slice(3),
		Nt = "flip",
		kt = "clockwise",
		At = "counterclockwise",
		It = {
			placement: "bottom",
			positionFixed: !1,
			eventsEnabled: !0,
			removeOnDestroy: !1,
			onCreate: function () {},
			onUpdate: function () {},
			modifiers: {
				shift: {
					order: 100,
					enabled: !0,
					fn: function (t) {
						var e = t.placement,
							n = e.split("-")[0],
							i = e.split("-")[1];
						if (i) {
							var o = t.offsets,
								r = o.reference,
								a = o.popper,
								s = -1 !== ["bottom", "top"].indexOf(n),
								l = s ? "left" : "top",
								u = s ? "width" : "height",
								f = { start: Et({}, l, r[l]), end: Et({}, l, r[l] + r[u] - a[u]) };
							t.offsets.popper = Tt({}, a, f[i]);
						}
						return t;
					},
				},
				offset: {
					order: 200,
					enabled: !0,
					fn: function (t, e) {
						var n = e.offset,
							i = t.placement,
							o = t.offsets,
							r = o.popper,
							a = o.reference,
							s = i.split("-")[0],
							l = void 0;
						return (
							(l = U(+n) ? [+n, 0] : X(n, r, a, s)),
							"left" === s ? ((r.top += l[0]), (r.left -= l[1])) : "right" === s ? ((r.top += l[0]), (r.left += l[1])) : "top" === s ? ((r.left += l[0]), (r.top -= l[1])) : "bottom" === s && ((r.left += l[0]), (r.top += l[1])),
							(t.popper = r),
							t
						);
					},
					offset: 0,
				},
				preventOverflow: {
					order: 300,
					enabled: !0,
					fn: function (t, e) {
						var n = e.boundariesElement || h(t.instance.popper);
						t.instance.reference === n && (n = h(n));
						var i = H("transform"),
							o = t.instance.popper.style,
							r = o.top,
							a = o.left,
							s = o[i];
						(o.top = ""), (o.left = ""), (o[i] = "");
						var l = N(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
						(o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
						var u = e.priority,
							f = t.offsets.popper,
							d = {
								primary: function (t) {
									var n = f[t];
									return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), Et({}, t, n);
								},
								secondary: function (t) {
									var n = "right" === t ? "left" : "top",
										i = f[n];
									return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), Et({}, n, i);
								},
							};
						return (
							u.forEach(function (t) {
								var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
								f = Tt({}, f, d[e](t));
							}),
							(t.offsets.popper = f),
							t
						);
					},
					priority: ["left", "right", "top", "bottom"],
					padding: 5,
					boundariesElement: "scrollParent",
				},
				keepTogether: {
					order: 400,
					enabled: !0,
					fn: function (t) {
						var e = t.offsets,
							n = e.popper,
							i = e.reference,
							o = t.placement.split("-")[0],
							r = Math.floor,
							a = -1 !== ["top", "bottom"].indexOf(o),
							s = a ? "right" : "bottom",
							l = a ? "left" : "top",
							u = a ? "width" : "height";
						return n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]), n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])), t;
					},
				},
				arrow: {
					order: 500,
					enabled: !0,
					fn: function (t, e) {
						var n;
						if (!Y(t.instance.modifiers, "arrow", "keepTogether")) return t;
						var i = e.element;
						if ("string" == typeof i) {
							if (!(i = t.instance.popper.querySelector(i))) return t;
						} else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
						var o = t.placement.split("-")[0],
							r = t.offsets,
							a = r.popper,
							s = r.reference,
							u = -1 !== ["left", "right"].indexOf(o),
							f = u ? "height" : "width",
							d = u ? "Top" : "Left",
							c = d.toLowerCase(),
							h = u ? "left" : "top",
							p = u ? "bottom" : "right",
							m = O(i)[f];
						s[p] - m < a[c] && (t.offsets.popper[c] -= a[c] - (s[p] - m)), s[c] + m > a[p] && (t.offsets.popper[c] += s[c] + m - a[p]), (t.offsets.popper = w(t.offsets.popper));
						var g = s[c] + s[f] / 2 - m / 2,
							v = l(t.instance.popper),
							_ = parseFloat(v["margin" + d]),
							b = parseFloat(v["border" + d + "Width"]),
							y = g - t.offsets.popper[c] - _ - b;
						return (y = Math.max(Math.min(a[f] - m, y), 0)), (t.arrowElement = i), (t.offsets.arrow = (Et((n = {}), c, Math.round(y)), Et(n, h, ""), n)), t;
					},
					element: "[x-arrow]",
				},
				flip: {
					order: 600,
					enabled: !0,
					fn: function (t, e) {
						if (R(t.instance.modifiers, "inner")) return t;
						if (t.flipped && t.placement === t.originalPlacement) return t;
						var n = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
							i = t.placement.split("-")[0],
							o = x(i),
							r = t.placement.split("-")[1] || "",
							a = [];
						switch (e.behavior) {
							case Nt:
								a = [i, o];
								break;
							case kt:
								a = z(i);
								break;
							case At:
								a = z(i, !0);
								break;
							default:
								a = e.behavior;
						}
						return (
							a.forEach(function (s, l) {
								if (i !== s || a.length === l + 1) return t;
								(i = t.placement.split("-")[0]), (o = x(i));
								var u = t.offsets.popper,
									f = t.offsets.reference,
									d = Math.floor,
									c = ("left" === i && d(u.right) > d(f.left)) || ("right" === i && d(u.left) < d(f.right)) || ("top" === i && d(u.bottom) > d(f.top)) || ("bottom" === i && d(u.top) < d(f.bottom)),
									h = d(u.left) < d(n.left),
									p = d(u.right) > d(n.right),
									m = d(u.top) < d(n.top),
									g = d(u.bottom) > d(n.bottom),
									v = ("left" === i && h) || ("right" === i && p) || ("top" === i && m) || ("bottom" === i && g),
									_ = -1 !== ["top", "bottom"].indexOf(i),
									b = !!e.flipVariations && ((_ && "start" === r && h) || (_ && "end" === r && p) || (!_ && "start" === r && m) || (!_ && "end" === r && g)),
									y = !!e.flipVariationsByContent && ((_ && "start" === r && p) || (_ && "end" === r && h) || (!_ && "start" === r && g) || (!_ && "end" === r && m)),
									w = b || y;
								(c || v || w) &&
									((t.flipped = !0),
									(c || v) && (i = a[l + 1]),
									w &&
										(r = (function (t) {
											return "end" === t ? "start" : "start" === t ? "end" : t;
										})(r)),
									(t.placement = i + (r ? "-" + r : "")),
									(t.offsets.popper = Tt({}, t.offsets.popper, j(t.instance.popper, t.offsets.reference, t.placement))),
									(t = P(t.instance.modifiers, t, "flip")));
							}),
							t
						);
					},
					behavior: "flip",
					padding: 5,
					boundariesElement: "viewport",
					flipVariations: !1,
					flipVariationsByContent: !1,
				},
				inner: {
					order: 700,
					enabled: !1,
					fn: function (t) {
						var e = t.placement,
							n = e.split("-")[0],
							i = t.offsets,
							o = i.popper,
							r = i.reference,
							a = -1 !== ["left", "right"].indexOf(n),
							s = -1 === ["top", "left"].indexOf(n);
						return (o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0)), (t.placement = x(e)), (t.offsets.popper = w(o)), t;
					},
				},
				hide: {
					order: 800,
					enabled: !0,
					fn: function (t) {
						if (!Y(t.instance.modifiers, "hide", "preventOverflow")) return t;
						var e = t.offsets.reference,
							n = L(t.instance.modifiers, function (t) {
								return "preventOverflow" === t.name;
							}).boundaries;
						if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
							if (!0 === t.hide) return t;
							(t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
						} else {
							if (!1 === t.hide) return t;
							(t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
						}
						return t;
					},
				},
				computeStyle: {
					order: 850,
					enabled: !0,
					fn: function (t, e) {
						var n = e.x,
							i = e.y,
							o = t.offsets.popper,
							r = L(t.instance.modifiers, function (t) {
								return "applyStyle" === t.name;
							}).gpuAcceleration;
						void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
						var a = void 0 !== r ? r : e.gpuAcceleration,
							s = h(t.instance.popper),
							l = E(s),
							u = { position: o.position },
							f = (function (t, e) {
								var n = t.offsets,
									i = n.popper,
									o = n.reference,
									r = Math.round,
									a = Math.floor,
									s = function (t) {
										return t;
									},
									l = r(o.width),
									u = r(i.width),
									f = -1 !== ["left", "right"].indexOf(t.placement),
									d = -1 !== t.placement.indexOf("-"),
									c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
									h = e ? r : s;
								return { left: c(l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: c(i.right) };
							})(t, window.devicePixelRatio < 2 || !Ct),
							d = "bottom" === n ? "top" : "bottom",
							c = "right" === i ? "left" : "right",
							p = H("transform"),
							m = void 0,
							g = void 0;
						if (((g = "bottom" === d ? ("HTML" === s.nodeName ? -s.clientHeight + f.bottom : -l.height + f.bottom) : f.top), (m = "right" === c ? ("HTML" === s.nodeName ? -s.clientWidth + f.right : -l.width + f.right) : f.left), a && p))
							(u[p] = "translate3d(" + m + "px, " + g + "px, 0)"), (u[d] = 0), (u[c] = 0), (u.willChange = "transform");
						else {
							var v = "bottom" === d ? -1 : 1,
								_ = "right" === c ? -1 : 1;
							(u[d] = g * v), (u[c] = m * _), (u.willChange = d + ", " + c);
						}
						var b = { "x-placement": t.placement };
						return (t.attributes = Tt({}, b, t.attributes)), (t.styles = Tt({}, u, t.styles)), (t.arrowStyles = Tt({}, t.offsets.arrow, t.arrowStyles)), t;
					},
					gpuAcceleration: !0,
					x: "bottom",
					y: "right",
				},
				applyStyle: {
					order: 900,
					enabled: !0,
					fn: function (t) {
						var e, n;
						return (
							V(t.instance.popper, t.styles),
							(e = t.instance.popper),
							(n = t.attributes),
							Object.keys(n).forEach(function (t) {
								!1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
							}),
							t.arrowElement && Object.keys(t.arrowStyles).length && V(t.arrowElement, t.arrowStyles),
							t
						);
					},
					onLoad: function (t, e, n, i, o) {
						var r = I(o, e, t, n.positionFixed),
							a = A(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
						return e.setAttribute("x-placement", a), V(e, { position: n.positionFixed ? "fixed" : "absolute" }), n;
					},
					gpuAcceleration: void 0,
				},
			},
		},
		Ot = (function () {
			function t(e, n) {
				var i = this,
					o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				yt(this, t),
					(this.scheduleUpdate = function () {
						return requestAnimationFrame(i.update);
					}),
					(this.update = vt(this.update.bind(this))),
					(this.options = Tt({}, t.Defaults, o)),
					(this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
					(this.reference = e && e.jquery ? e[0] : e),
					(this.popper = n && n.jquery ? n[0] : n),
					(this.options.modifiers = {}),
					Object.keys(Tt({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
						i.options.modifiers[e] = Tt({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
					}),
					(this.modifiers = Object.keys(this.options.modifiers)
						.map(function (t) {
							return Tt({ name: t }, i.options.modifiers[t]);
						})
						.sort(function (t, e) {
							return t.order - e.order;
						})),
					this.modifiers.forEach(function (t) {
						t.enabled && s(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
					}),
					this.update();
				var r = this.options.eventsEnabled;
				r && this.enableEventListeners(), (this.state.eventsEnabled = r);
			}
			return (
				wt(t, [
					{
						key: "update",
						value: function () {
							return F.call(this);
						},
					},
					{
						key: "destroy",
						value: function () {
							return M.call(this);
						},
					},
					{
						key: "enableEventListeners",
						value: function () {
							return Q.call(this);
						},
					},
					{
						key: "disableEventListeners",
						value: function () {
							return W.call(this);
						},
					},
				]),
				t
			);
		})();
	(Ot.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (Ot.placements = St), (Ot.Defaults = It);
	var xt = "dropdown",
		jt = G.default.fn[xt],
		Lt = new RegExp("38|40|27"),
		Pt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
		Ft = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
		Rt = (function () {
			function t(t, e) {
				(this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
			}
			var e = t.prototype;
			return (
				(e.toggle = function () {
					if (!this._element.disabled && !G.default(this._element).hasClass("disabled")) {
						var e = G.default(this._menu).hasClass("show");
						t._clearMenus(), e || this.show(!0);
					}
				}),
				(e.show = function (e) {
					if ((void 0 === e && (e = !1), !(this._element.disabled || G.default(this._element).hasClass("disabled") || G.default(this._menu).hasClass("show")))) {
						var n = { relatedTarget: this._element },
							i = G.default.Event("show.bs.dropdown", n),
							o = t._getParentFromElement(this._element);
						if ((G.default(o).trigger(i), !i.isDefaultPrevented())) {
							if (!this._inNavbar && e) {
								if (void 0 === Ot) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
								var r = this._element;
								"parent" === this._config.reference ? (r = o) : $.isElement(this._config.reference) && ((r = this._config.reference), void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
									"scrollParent" !== this._config.boundary && G.default(o).addClass("position-static"),
									(this._popper = new Ot(r, this._menu, this._getPopperConfig()));
							}
							"ontouchstart" in document.documentElement && 0 === G.default(o).closest(".navbar-nav").length && G.default(document.body).children().on("mouseover", null, G.default.noop),
								this._element.focus(),
								this._element.setAttribute("aria-expanded", !0),
								G.default(this._menu).toggleClass("show"),
								G.default(o).toggleClass("show").trigger(G.default.Event("shown.bs.dropdown", n));
						}
					}
				}),
				(e.hide = function () {
					if (!this._element.disabled && !G.default(this._element).hasClass("disabled") && G.default(this._menu).hasClass("show")) {
						var e = { relatedTarget: this._element },
							n = G.default.Event("hide.bs.dropdown", e),
							i = t._getParentFromElement(this._element);
						G.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), G.default(this._menu).toggleClass("show"), G.default(i).toggleClass("show").trigger(G.default.Event("hidden.bs.dropdown", e)));
					}
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.dropdown"), G.default(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
				}),
				(e.update = function () {
					(this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
				}),
				(e._addEventListeners = function () {
					var t = this;
					G.default(this._element).on("click.bs.dropdown", function (e) {
						e.preventDefault(), e.stopPropagation(), t.toggle();
					});
				}),
				(e._getConfig = function (t) {
					return (t = r({}, this.constructor.Default, G.default(this._element).data(), t)), $.typeCheckConfig(xt, t, this.constructor.DefaultType), t;
				}),
				(e._getMenuElement = function () {
					if (!this._menu) {
						var e = t._getParentFromElement(this._element);
						e && (this._menu = e.querySelector(".dropdown-menu"));
					}
					return this._menu;
				}),
				(e._getPlacement = function () {
					var t = G.default(this._element.parentNode),
						e = "bottom-start";
					return (
						t.hasClass("dropup")
							? (e = G.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
							: t.hasClass("dropright")
							? (e = "right-start")
							: t.hasClass("dropleft")
							? (e = "left-start")
							: G.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"),
						e
					);
				}),
				(e._detectNavbar = function () {
					return G.default(this._element).closest(".navbar").length > 0;
				}),
				(e._getOffset = function () {
					var t = this,
						e = {};
					return (
						"function" == typeof this._config.offset
							? (e.fn = function (e) {
									return (e.offsets = r({}, e.offsets, t._config.offset(e.offsets, t._element) || {})), e;
							  })
							: (e.offset = this._config.offset),
						e
					);
				}),
				(e._getPopperConfig = function () {
					var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
					return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), r({}, t, this._config.popperConfig);
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this).data("bs.dropdown");
						if ((n || ((n = new t(this, "object" == typeof e ? e : null)), G.default(this).data("bs.dropdown", n)), "string" == typeof e)) {
							if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
							n[e]();
						}
					});
				}),
				(t._clearMenus = function (e) {
					if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
						for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, o = n.length; i < o; i++) {
							var r = t._getParentFromElement(n[i]),
								a = G.default(n[i]).data("bs.dropdown"),
								s = { relatedTarget: n[i] };
							if ((e && "click" === e.type && (s.clickEvent = e), a)) {
								var l = a._menu;
								if (G.default(r).hasClass("show") && !(e && (("click" === e.type && /input|textarea/i.test(e.target.tagName)) || ("keyup" === e.type && 9 === e.which)) && G.default.contains(r, e.target))) {
									var u = G.default.Event("hide.bs.dropdown", s);
									G.default(r).trigger(u),
										u.isDefaultPrevented() ||
											("ontouchstart" in document.documentElement && G.default(document.body).children().off("mouseover", null, G.default.noop),
											n[i].setAttribute("aria-expanded", "false"),
											a._popper && a._popper.destroy(),
											G.default(l).removeClass("show"),
											G.default(r).removeClass("show").trigger(G.default.Event("hidden.bs.dropdown", s)));
								}
							}
						}
				}),
				(t._getParentFromElement = function (t) {
					var e,
						n = $.getSelectorFromElement(t);
					return n && (e = document.querySelector(n)), e || t.parentNode;
				}),
				(t._dataApiKeydownHandler = function (e) {
					if (
						!(/input|textarea/i.test(e.target.tagName) ? 32 === e.which || (27 !== e.which && ((40 !== e.which && 38 !== e.which) || G.default(e.target).closest(".dropdown-menu").length)) : !Lt.test(e.which)) &&
						!this.disabled &&
						!G.default(this).hasClass("disabled")
					) {
						var n = t._getParentFromElement(this),
							i = G.default(n).hasClass("show");
						if (i || 27 !== e.which) {
							if ((e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which)) return 27 === e.which && G.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void G.default(this).trigger("click");
							var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
								return G.default(t).is(":visible");
							});
							if (0 !== o.length) {
								var r = o.indexOf(e.target);
								38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
							}
						}
					}
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return Pt;
						},
					},
					{
						key: "DefaultType",
						get: function () {
							return Ft;
						},
					},
				]),
				t
			);
		})();
	G.default(document)
		.on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Rt._dataApiKeydownHandler)
		.on("keydown.bs.dropdown.data-api", ".dropdown-menu", Rt._dataApiKeydownHandler)
		.on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Rt._clearMenus)
		.on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
			t.preventDefault(), t.stopPropagation(), Rt._jQueryInterface.call(G.default(this), "toggle");
		})
		.on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
			t.stopPropagation();
		}),
		(G.default.fn[xt] = Rt._jQueryInterface),
		(G.default.fn[xt].Constructor = Rt),
		(G.default.fn[xt].noConflict = function () {
			return (G.default.fn[xt] = jt), Rt._jQueryInterface;
		});
	var Ht = G.default.fn.modal,
		Mt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
		Bt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
		qt = (function () {
			function t(t, e) {
				(this._config = this._getConfig(e)),
					(this._element = t),
					(this._dialog = t.querySelector(".modal-dialog")),
					(this._backdrop = null),
					(this._isShown = !1),
					(this._isBodyOverflowing = !1),
					(this._ignoreBackdropClick = !1),
					(this._isTransitioning = !1),
					(this._scrollbarWidth = 0);
			}
			var e = t.prototype;
			return (
				(e.toggle = function (t) {
					return this._isShown ? this.hide() : this.show(t);
				}),
				(e.show = function (t) {
					var e = this;
					if (!this._isShown && !this._isTransitioning) {
						G.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
						var n = G.default.Event("show.bs.modal", { relatedTarget: t });
						G.default(this._element).trigger(n),
							this._isShown ||
								n.isDefaultPrevented() ||
								((this._isShown = !0),
								this._checkScrollbar(),
								this._setScrollbar(),
								this._adjustDialog(),
								this._setEscapeEvent(),
								this._setResizeEvent(),
								G.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
									return e.hide(t);
								}),
								G.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
									G.default(e._element).one("mouseup.dismiss.bs.modal", function (t) {
										G.default(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
									});
								}),
								this._showBackdrop(function () {
									return e._showElement(t);
								}));
					}
				}),
				(e.hide = function (t) {
					var e = this;
					if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
						var n = G.default.Event("hide.bs.modal");
						if ((G.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
							this._isShown = !1;
							var i = G.default(this._element).hasClass("fade");
							if (
								(i && (this._isTransitioning = !0),
								this._setEscapeEvent(),
								this._setResizeEvent(),
								G.default(document).off("focusin.bs.modal"),
								G.default(this._element).removeClass("show"),
								G.default(this._element).off("click.dismiss.bs.modal"),
								G.default(this._dialog).off("mousedown.dismiss.bs.modal"),
								i)
							) {
								var o = $.getTransitionDurationFromElement(this._element);
								G.default(this._element)
									.one($.TRANSITION_END, function (t) {
										return e._hideModal(t);
									})
									.emulateTransitionEnd(o);
							} else this._hideModal();
						}
					}
				}),
				(e.dispose = function () {
					[window, this._element, this._dialog].forEach(function (t) {
						return G.default(t).off(".bs.modal");
					}),
						G.default(document).off("focusin.bs.modal"),
						G.default.removeData(this._element, "bs.modal"),
						(this._config = null),
						(this._element = null),
						(this._dialog = null),
						(this._backdrop = null),
						(this._isShown = null),
						(this._isBodyOverflowing = null),
						(this._ignoreBackdropClick = null),
						(this._isTransitioning = null),
						(this._scrollbarWidth = null);
				}),
				(e.handleUpdate = function () {
					this._adjustDialog();
				}),
				(e._getConfig = function (t) {
					return (t = r({}, Mt, t)), $.typeCheckConfig("modal", t, Bt), t;
				}),
				(e._triggerBackdropTransition = function () {
					var t = this;
					if ("static" === this._config.backdrop) {
						var e = G.default.Event("hidePrevented.bs.modal");
						if ((G.default(this._element).trigger(e), e.isDefaultPrevented())) return;
						var n = this._element.scrollHeight > document.documentElement.clientHeight;
						n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
						var i = $.getTransitionDurationFromElement(this._dialog);
						G.default(this._element).off($.TRANSITION_END),
							G.default(this._element)
								.one($.TRANSITION_END, function () {
									t._element.classList.remove("modal-static"),
										n ||
											G.default(t._element)
												.one($.TRANSITION_END, function () {
													t._element.style.overflowY = "";
												})
												.emulateTransitionEnd(t._element, i);
								})
								.emulateTransitionEnd(i),
							this._element.focus();
					} else this.hide();
				}),
				(e._showElement = function (t) {
					var e = this,
						n = G.default(this._element).hasClass("fade"),
						i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
					(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
						(this._element.style.display = "block"),
						this._element.removeAttribute("aria-hidden"),
						this._element.setAttribute("aria-modal", !0),
						this._element.setAttribute("role", "dialog"),
						G.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? (i.scrollTop = 0) : (this._element.scrollTop = 0),
						n && $.reflow(this._element),
						G.default(this._element).addClass("show"),
						this._config.focus && this._enforceFocus();
					var o = G.default.Event("shown.bs.modal", { relatedTarget: t }),
						r = function () {
							e._config.focus && e._element.focus(), (e._isTransitioning = !1), G.default(e._element).trigger(o);
						};
					if (n) {
						var a = $.getTransitionDurationFromElement(this._dialog);
						G.default(this._dialog).one($.TRANSITION_END, r).emulateTransitionEnd(a);
					} else r();
				}),
				(e._enforceFocus = function () {
					var t = this;
					G.default(document)
						.off("focusin.bs.modal")
						.on("focusin.bs.modal", function (e) {
							document !== e.target && t._element !== e.target && 0 === G.default(t._element).has(e.target).length && t._element.focus();
						});
				}),
				(e._setEscapeEvent = function () {
					var t = this;
					this._isShown
						? G.default(this._element).on("keydown.dismiss.bs.modal", function (e) {
								t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
						  })
						: this._isShown || G.default(this._element).off("keydown.dismiss.bs.modal");
				}),
				(e._setResizeEvent = function () {
					var t = this;
					this._isShown
						? G.default(window).on("resize.bs.modal", function (e) {
								return t.handleUpdate(e);
						  })
						: G.default(window).off("resize.bs.modal");
				}),
				(e._hideModal = function () {
					var t = this;
					(this._element.style.display = "none"),
						this._element.setAttribute("aria-hidden", !0),
						this._element.removeAttribute("aria-modal"),
						this._element.removeAttribute("role"),
						(this._isTransitioning = !1),
						this._showBackdrop(function () {
							G.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), G.default(t._element).trigger("hidden.bs.modal");
						});
				}),
				(e._removeBackdrop = function () {
					this._backdrop && (G.default(this._backdrop).remove(), (this._backdrop = null));
				}),
				(e._showBackdrop = function (t) {
					var e = this,
						n = G.default(this._element).hasClass("fade") ? "fade" : "";
					if (this._isShown && this._config.backdrop) {
						if (
							((this._backdrop = document.createElement("div")),
							(this._backdrop.className = "modal-backdrop"),
							n && this._backdrop.classList.add(n),
							G.default(this._backdrop).appendTo(document.body),
							G.default(this._element).on("click.dismiss.bs.modal", function (t) {
								e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && e._triggerBackdropTransition();
							}),
							n && $.reflow(this._backdrop),
							G.default(this._backdrop).addClass("show"),
							!t)
						)
							return;
						if (!n) return void t();
						var i = $.getTransitionDurationFromElement(this._backdrop);
						G.default(this._backdrop).one($.TRANSITION_END, t).emulateTransitionEnd(i);
					} else if (!this._isShown && this._backdrop) {
						G.default(this._backdrop).removeClass("show");
						var o = function () {
							e._removeBackdrop(), t && t();
						};
						if (G.default(this._element).hasClass("fade")) {
							var r = $.getTransitionDurationFromElement(this._backdrop);
							G.default(this._backdrop).one($.TRANSITION_END, o).emulateTransitionEnd(r);
						} else o();
					} else t && t();
				}),
				(e._adjustDialog = function () {
					var t = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
				}),
				(e._resetAdjustments = function () {
					(this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
				}),
				(e._checkScrollbar = function () {
					var t = document.body.getBoundingClientRect();
					(this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
				}),
				(e._setScrollbar = function () {
					var t = this;
					if (this._isBodyOverflowing) {
						var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
							n = [].slice.call(document.querySelectorAll(".sticky-top"));
						G.default(e).each(function (e, n) {
							var i = n.style.paddingRight,
								o = G.default(n).css("padding-right");
							G.default(n)
								.data("padding-right", i)
								.css("padding-right", parseFloat(o) + t._scrollbarWidth + "px");
						}),
							G.default(n).each(function (e, n) {
								var i = n.style.marginRight,
									o = G.default(n).css("margin-right");
								G.default(n)
									.data("margin-right", i)
									.css("margin-right", parseFloat(o) - t._scrollbarWidth + "px");
							});
						var i = document.body.style.paddingRight,
							o = G.default(document.body).css("padding-right");
						G.default(document.body)
							.data("padding-right", i)
							.css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
					}
					G.default(document.body).addClass("modal-open");
				}),
				(e._resetScrollbar = function () {
					var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
					G.default(t).each(function (t, e) {
						var n = G.default(e).data("padding-right");
						G.default(e).removeData("padding-right"), (e.style.paddingRight = n || "");
					});
					var e = [].slice.call(document.querySelectorAll(".sticky-top"));
					G.default(e).each(function (t, e) {
						var n = G.default(e).data("margin-right");
						void 0 !== n && G.default(e).css("margin-right", n).removeData("margin-right");
					});
					var n = G.default(document.body).data("padding-right");
					G.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
				}),
				(e._getScrollbarWidth = function () {
					var t = document.createElement("div");
					(t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
					var e = t.getBoundingClientRect().width - t.clientWidth;
					return document.body.removeChild(t), e;
				}),
				(t._jQueryInterface = function (e, n) {
					return this.each(function () {
						var i = G.default(this).data("bs.modal"),
							o = r({}, Mt, G.default(this).data(), "object" == typeof e && e ? e : {});
						if ((i || ((i = new t(this, o)), G.default(this).data("bs.modal", i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e](n);
						} else o.show && i.show(n);
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return Mt;
						},
					},
				]),
				t
			);
		})();
	G.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
		var e,
			n = this,
			i = $.getSelectorFromElement(this);
		i && (e = document.querySelector(i));
		var o = G.default(e).data("bs.modal") ? "toggle" : r({}, G.default(e).data(), G.default(this).data());
		("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
		var a = G.default(e).one("show.bs.modal", function (t) {
			t.isDefaultPrevented() ||
				a.one("hidden.bs.modal", function () {
					G.default(n).is(":visible") && n.focus();
				});
		});
		qt._jQueryInterface.call(G.default(e), o, this);
	}),
		(G.default.fn.modal = qt._jQueryInterface),
		(G.default.fn.modal.Constructor = qt),
		(G.default.fn.modal.noConflict = function () {
			return (G.default.fn.modal = Ht), qt._jQueryInterface;
		});
	var Qt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
		Wt = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "srcset", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: [],
		},
		Ut = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
		Vt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		Yt = "tooltip",
		zt = G.default.fn[Yt],
		Xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
		Kt = ["sanitize", "whiteList", "sanitizeFn"],
		Gt = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			offset: "(number|string|function)",
			container: "(string|element|boolean)",
			fallbackPlacement: "(string|array)",
			boundary: "(string|element)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			whiteList: "object",
			popperConfig: "(null|object)",
		},
		$t = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
		Jt = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent",
			sanitize: !0,
			sanitizeFn: null,
			whiteList: Wt,
			popperConfig: null,
		},
		Zt = {
			HIDE: "hide.bs.tooltip",
			HIDDEN: "hidden.bs.tooltip",
			SHOW: "show.bs.tooltip",
			SHOWN: "shown.bs.tooltip",
			INSERTED: "inserted.bs.tooltip",
			CLICK: "click.bs.tooltip",
			FOCUSIN: "focusin.bs.tooltip",
			FOCUSOUT: "focusout.bs.tooltip",
			MOUSEENTER: "mouseenter.bs.tooltip",
			MOUSELEAVE: "mouseleave.bs.tooltip",
		},
		te = (function () {
			function t(t, e) {
				if (void 0 === Ot) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
				(this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
			}
			var e = t.prototype;
			return (
				(e.enable = function () {
					this._isEnabled = !0;
				}),
				(e.disable = function () {
					this._isEnabled = !1;
				}),
				(e.toggleEnabled = function () {
					this._isEnabled = !this._isEnabled;
				}),
				(e.toggle = function (t) {
					if (this._isEnabled)
						if (t) {
							var e = this.constructor.DATA_KEY,
								n = G.default(t.currentTarget).data(e);
							n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), G.default(t.currentTarget).data(e, n)), (n._activeTrigger.click = !n._activeTrigger.click), n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
						} else {
							if (G.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
							this._enter(null, this);
						}
				}),
				(e.dispose = function () {
					clearTimeout(this._timeout),
						G.default.removeData(this.element, this.constructor.DATA_KEY),
						G.default(this.element).off(this.constructor.EVENT_KEY),
						G.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
						this.tip && G.default(this.tip).remove(),
						(this._isEnabled = null),
						(this._timeout = null),
						(this._hoverState = null),
						(this._activeTrigger = null),
						this._popper && this._popper.destroy(),
						(this._popper = null),
						(this.element = null),
						(this.config = null),
						(this.tip = null);
				}),
				(e.show = function () {
					var t = this;
					if ("none" === G.default(this.element).css("display")) throw new Error("Please use show on visible elements");
					var e = G.default.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						G.default(this.element).trigger(e);
						var n = $.findShadowRoot(this.element),
							i = G.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
						if (e.isDefaultPrevented() || !i) return;
						var o = this.getTipElement(),
							r = $.getUID(this.constructor.NAME);
						o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && G.default(o).addClass("fade");
						var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
							s = this._getAttachment(a);
						this.addAttachmentClass(s);
						var l = this._getContainer();
						G.default(o).data(this.constructor.DATA_KEY, this),
							G.default.contains(this.element.ownerDocument.documentElement, this.tip) || G.default(o).appendTo(l),
							G.default(this.element).trigger(this.constructor.Event.INSERTED),
							(this._popper = new Ot(this.element, o, this._getPopperConfig(s))),
							G.default(o).addClass("show"),
							"ontouchstart" in document.documentElement && G.default(document.body).children().on("mouseover", null, G.default.noop);
						var u = function () {
							t.config.animation && t._fixTransition();
							var e = t._hoverState;
							(t._hoverState = null), G.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
						};
						if (G.default(this.tip).hasClass("fade")) {
							var f = $.getTransitionDurationFromElement(this.tip);
							G.default(this.tip).one($.TRANSITION_END, u).emulateTransitionEnd(f);
						} else u();
					}
				}),
				(e.hide = function (t) {
					var e = this,
						n = this.getTipElement(),
						i = G.default.Event(this.constructor.Event.HIDE),
						o = function () {
							"show" !== e._hoverState && n.parentNode && n.parentNode.removeChild(n),
								e._cleanTipClass(),
								e.element.removeAttribute("aria-describedby"),
								G.default(e.element).trigger(e.constructor.Event.HIDDEN),
								null !== e._popper && e._popper.destroy(),
								t && t();
						};
					if ((G.default(this.element).trigger(i), !i.isDefaultPrevented())) {
						if (
							(G.default(n).removeClass("show"),
							"ontouchstart" in document.documentElement && G.default(document.body).children().off("mouseover", null, G.default.noop),
							(this._activeTrigger.click = !1),
							(this._activeTrigger.focus = !1),
							(this._activeTrigger.hover = !1),
							G.default(this.tip).hasClass("fade"))
						) {
							var r = $.getTransitionDurationFromElement(n);
							G.default(n).one($.TRANSITION_END, o).emulateTransitionEnd(r);
						} else o();
						this._hoverState = "";
					}
				}),
				(e.update = function () {
					null !== this._popper && this._popper.scheduleUpdate();
				}),
				(e.isWithContent = function () {
					return Boolean(this.getTitle());
				}),
				(e.addAttachmentClass = function (t) {
					G.default(this.getTipElement()).addClass("bs-tooltip-" + t);
				}),
				(e.getTipElement = function () {
					return (this.tip = this.tip || G.default(this.config.template)[0]), this.tip;
				}),
				(e.setContent = function () {
					var t = this.getTipElement();
					this.setElementContent(G.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), G.default(t).removeClass("fade show");
				}),
				(e.setElementContent = function (t, e) {
					"object" != typeof e || (!e.nodeType && !e.jquery)
						? this.config.html
							? (this.config.sanitize && (e = K(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e))
							: t.text(e)
						: this.config.html
						? G.default(e).parent().is(t) || t.empty().append(e)
						: t.text(G.default(e).text());
				}),
				(e.getTitle = function () {
					var t = this.element.getAttribute("data-original-title");
					return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
				}),
				(e._getPopperConfig = function (t) {
					var e = this;
					return r(
						{},
						{
							placement: t,
							modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
							onCreate: function (t) {
								t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
							},
							onUpdate: function (t) {
								return e._handlePopperPlacementChange(t);
							},
						},
						this.config.popperConfig
					);
				}),
				(e._getOffset = function () {
					var t = this,
						e = {};
					return (
						"function" == typeof this.config.offset
							? (e.fn = function (e) {
									return (e.offsets = r({}, e.offsets, t.config.offset(e.offsets, t.element) || {})), e;
							  })
							: (e.offset = this.config.offset),
						e
					);
				}),
				(e._getContainer = function () {
					return !1 === this.config.container ? document.body : $.isElement(this.config.container) ? G.default(this.config.container) : G.default(document).find(this.config.container);
				}),
				(e._getAttachment = function (t) {
					return $t[t.toUpperCase()];
				}),
				(e._setListeners = function () {
					var t = this;
					this.config.trigger.split(" ").forEach(function (e) {
						if ("click" === e)
							G.default(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
								return t.toggle(e);
							});
						else if ("manual" !== e) {
							var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
								i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
							G.default(t.element)
								.on(n, t.config.selector, function (e) {
									return t._enter(e);
								})
								.on(i, t.config.selector, function (e) {
									return t._leave(e);
								});
						}
					}),
						(this._hideModalHandler = function () {
							t.element && t.hide();
						}),
						G.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
						this.config.selector ? (this.config = r({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
				}),
				(e._fixTitle = function () {
					var t = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
				}),
				(e._enter = function (t, e) {
					var n = this.constructor.DATA_KEY;
					(e = e || G.default(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), G.default(t.currentTarget).data(n, e)),
						t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
						G.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState
							? (e._hoverState = "show")
							: (clearTimeout(e._timeout),
							  (e._hoverState = "show"),
							  e.config.delay && e.config.delay.show
									? (e._timeout = setTimeout(function () {
											"show" === e._hoverState && e.show();
									  }, e.config.delay.show))
									: e.show());
				}),
				(e._leave = function (t, e) {
					var n = this.constructor.DATA_KEY;
					(e = e || G.default(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), G.default(t.currentTarget).data(n, e)),
						t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
						e._isWithActiveTrigger() ||
							(clearTimeout(e._timeout),
							(e._hoverState = "out"),
							e.config.delay && e.config.delay.hide
								? (e._timeout = setTimeout(function () {
										"out" === e._hoverState && e.hide();
								  }, e.config.delay.hide))
								: e.hide());
				}),
				(e._isWithActiveTrigger = function () {
					for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
					return !1;
				}),
				(e._getConfig = function (t) {
					var e = G.default(this.element).data();
					return (
						Object.keys(e).forEach(function (t) {
							-1 !== Kt.indexOf(t) && delete e[t];
						}),
						"number" == typeof (t = r({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
						"number" == typeof t.title && (t.title = t.title.toString()),
						"number" == typeof t.content && (t.content = t.content.toString()),
						$.typeCheckConfig(Yt, t, this.constructor.DefaultType),
						t.sanitize && (t.template = K(t.template, t.whiteList, t.sanitizeFn)),
						t
					);
				}),
				(e._getDelegateConfig = function () {
					var t = {};
					if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
					return t;
				}),
				(e._cleanTipClass = function () {
					var t = G.default(this.getTipElement()),
						e = t.attr("class").match(Xt);
					null !== e && e.length && t.removeClass(e.join(""));
				}),
				(e._handlePopperPlacementChange = function (t) {
					(this.tip = t.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
				}),
				(e._fixTransition = function () {
					var t = this.getTipElement(),
						e = this.config.animation;
					null === t.getAttribute("x-placement") && (G.default(t).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this),
							i = n.data("bs.tooltip"),
							o = "object" == typeof e && e;
						if ((i || !/dispose|hide/.test(e)) && (i || ((i = new t(this, o)), n.data("bs.tooltip", i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e]();
						}
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return Jt;
						},
					},
					{
						key: "NAME",
						get: function () {
							return Yt;
						},
					},
					{
						key: "DATA_KEY",
						get: function () {
							return "bs.tooltip";
						},
					},
					{
						key: "Event",
						get: function () {
							return Zt;
						},
					},
					{
						key: "EVENT_KEY",
						get: function () {
							return ".bs.tooltip";
						},
					},
					{
						key: "DefaultType",
						get: function () {
							return Gt;
						},
					},
				]),
				t
			);
		})();
	(G.default.fn[Yt] = te._jQueryInterface),
		(G.default.fn[Yt].Constructor = te),
		(G.default.fn[Yt].noConflict = function () {
			return (G.default.fn[Yt] = zt), te._jQueryInterface;
		});
	var ee = "popover",
		ne = G.default.fn[ee],
		ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
		oe = r({}, te.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
		re = r({}, te.DefaultType, { content: "(string|element|function)" }),
		ae = {
			HIDE: "hide.bs.popover",
			HIDDEN: "hidden.bs.popover",
			SHOW: "show.bs.popover",
			SHOWN: "shown.bs.popover",
			INSERTED: "inserted.bs.popover",
			CLICK: "click.bs.popover",
			FOCUSIN: "focusin.bs.popover",
			FOCUSOUT: "focusout.bs.popover",
			MOUSEENTER: "mouseenter.bs.popover",
			MOUSELEAVE: "mouseleave.bs.popover",
		},
		se = (function (t) {
			function e() {
				return t.apply(this, arguments) || this;
			}
			var n, i;
			(i = t), ((n = e).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), (n.__proto__ = i);
			var r = e.prototype;
			return (
				(r.isWithContent = function () {
					return this.getTitle() || this._getContent();
				}),
				(r.addAttachmentClass = function (t) {
					G.default(this.getTipElement()).addClass("bs-popover-" + t);
				}),
				(r.getTipElement = function () {
					return (this.tip = this.tip || G.default(this.config.template)[0]), this.tip;
				}),
				(r.setContent = function () {
					var t = G.default(this.getTipElement());
					this.setElementContent(t.find(".popover-header"), this.getTitle());
					var e = this._getContent();
					"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
				}),
				(r._getContent = function () {
					return this.element.getAttribute("data-content") || this.config.content;
				}),
				(r._cleanTipClass = function () {
					var t = G.default(this.getTipElement()),
						e = t.attr("class").match(ie);
					null !== e && e.length > 0 && t.removeClass(e.join(""));
				}),
				(e._jQueryInterface = function (t) {
					return this.each(function () {
						var n = G.default(this).data("bs.popover"),
							i = "object" == typeof t ? t : null;
						if ((n || !/dispose|hide/.test(t)) && (n || ((n = new e(this, i)), G.default(this).data("bs.popover", n)), "string" == typeof t)) {
							if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
							n[t]();
						}
					});
				}),
				o(e, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return oe;
						},
					},
					{
						key: "NAME",
						get: function () {
							return ee;
						},
					},
					{
						key: "DATA_KEY",
						get: function () {
							return "bs.popover";
						},
					},
					{
						key: "Event",
						get: function () {
							return ae;
						},
					},
					{
						key: "EVENT_KEY",
						get: function () {
							return ".bs.popover";
						},
					},
					{
						key: "DefaultType",
						get: function () {
							return re;
						},
					},
				]),
				e
			);
		})(te);
	(G.default.fn[ee] = se._jQueryInterface),
		(G.default.fn[ee].Constructor = se),
		(G.default.fn[ee].noConflict = function () {
			return (G.default.fn[ee] = ne), se._jQueryInterface;
		});
	var le = "scrollspy",
		ue = G.default.fn[le],
		fe = { offset: 10, method: "auto", target: "" },
		de = { offset: "number", method: "string", target: "(string|element)" },
		ce = (function () {
			function t(t, e) {
				var n = this;
				(this._element = t),
					(this._scrollElement = "BODY" === t.tagName ? window : t),
					(this._config = this._getConfig(e)),
					(this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item"),
					(this._offsets = []),
					(this._targets = []),
					(this._activeTarget = null),
					(this._scrollHeight = 0),
					G.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
						return n._process(t);
					}),
					this.refresh(),
					this._process();
			}
			var e = t.prototype;
			return (
				(e.refresh = function () {
					var t = this,
						e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
						n = "auto" === this._config.method ? e : this._config.method,
						i = "position" === n ? this._getScrollTop() : 0;
					(this._offsets = []),
						(this._targets = []),
						(this._scrollHeight = this._getScrollHeight()),
						[].slice
							.call(document.querySelectorAll(this._selector))
							.map(function (t) {
								var e,
									o = $.getSelectorFromElement(t);
								if ((o && (e = document.querySelector(o)), e)) {
									var r = e.getBoundingClientRect();
									if (r.width || r.height) return [G.default(e)[n]().top + i, o];
								}
								return null;
							})
							.filter(function (t) {
								return t;
							})
							.sort(function (t, e) {
								return t[0] - e[0];
							})
							.forEach(function (e) {
								t._offsets.push(e[0]), t._targets.push(e[1]);
							});
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.scrollspy"),
						G.default(this._scrollElement).off(".bs.scrollspy"),
						(this._element = null),
						(this._scrollElement = null),
						(this._config = null),
						(this._selector = null),
						(this._offsets = null),
						(this._targets = null),
						(this._activeTarget = null),
						(this._scrollHeight = null);
				}),
				(e._getConfig = function (t) {
					if ("string" != typeof (t = r({}, fe, "object" == typeof t && t ? t : {})).target && $.isElement(t.target)) {
						var e = G.default(t.target).attr("id");
						e || ((e = $.getUID(le)), G.default(t.target).attr("id", e)), (t.target = "#" + e);
					}
					return $.typeCheckConfig(le, t, de), t;
				}),
				(e._getScrollTop = function () {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
				}),
				(e._getScrollHeight = function () {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
				}),
				(e._getOffsetHeight = function () {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
				}),
				(e._process = function () {
					var t = this._getScrollTop() + this._config.offset,
						e = this._getScrollHeight(),
						n = this._config.offset + e - this._getOffsetHeight();
					if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
						var i = this._targets[this._targets.length - 1];
						this._activeTarget !== i && this._activate(i);
					} else {
						if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
						for (var o = this._offsets.length; o--; ) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
					}
				}),
				(e._activate = function (t) {
					(this._activeTarget = t), this._clear();
					var e = this._selector.split(",").map(function (e) {
							return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
						}),
						n = G.default([].slice.call(document.querySelectorAll(e.join(","))));
					n.hasClass("dropdown-item")
						? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active"))
						: (n.addClass("active"), n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),
						G.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
				}),
				(e._clear = function () {
					[].slice
						.call(document.querySelectorAll(this._selector))
						.filter(function (t) {
							return t.classList.contains("active");
						})
						.forEach(function (t) {
							return t.classList.remove("active");
						});
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this).data("bs.scrollspy");
						if ((n || ((n = new t(this, "object" == typeof e && e)), G.default(this).data("bs.scrollspy", n)), "string" == typeof e)) {
							if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
							n[e]();
						}
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "Default",
						get: function () {
							return fe;
						},
					},
				]),
				t
			);
		})();
	G.default(window).on("load.bs.scrollspy.data-api", function () {
		for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--; ) {
			var n = G.default(t[e]);
			ce._jQueryInterface.call(n, n.data());
		}
	}),
		(G.default.fn[le] = ce._jQueryInterface),
		(G.default.fn[le].Constructor = ce),
		(G.default.fn[le].noConflict = function () {
			return (G.default.fn[le] = ue), ce._jQueryInterface;
		});
	var he = G.default.fn.tab,
		pe = (function () {
			function t(t) {
				this._element = t;
			}
			var e = t.prototype;
			return (
				(e.show = function () {
					var t = this;
					if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && G.default(this._element).hasClass("active")) || G.default(this._element).hasClass("disabled"))) {
						var e,
							n,
							i = G.default(this._element).closest(".nav, .list-group")[0],
							o = $.getSelectorFromElement(this._element);
						if (i) {
							var r = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";
							n = (n = G.default.makeArray(G.default(i).find(r)))[n.length - 1];
						}
						var a = G.default.Event("hide.bs.tab", { relatedTarget: this._element }),
							s = G.default.Event("show.bs.tab", { relatedTarget: n });
						if ((n && G.default(n).trigger(a), G.default(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented())) {
							o && (e = document.querySelector(o)), this._activate(this._element, i);
							var l = function () {
								var e = G.default.Event("hidden.bs.tab", { relatedTarget: t._element }),
									i = G.default.Event("shown.bs.tab", { relatedTarget: n });
								G.default(n).trigger(e), G.default(t._element).trigger(i);
							};
							e ? this._activate(e, e.parentNode, l) : l();
						}
					}
				}),
				(e.dispose = function () {
					G.default.removeData(this._element, "bs.tab"), (this._element = null);
				}),
				(e._activate = function (t, e, n) {
					var i = this,
						o = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ? G.default(e).children(".active") : G.default(e).find("> li > .active"))[0],
						r = n && o && G.default(o).hasClass("fade"),
						a = function () {
							return i._transitionComplete(t, o, n);
						};
					if (o && r) {
						var s = $.getTransitionDurationFromElement(o);
						G.default(o).removeClass("show").one($.TRANSITION_END, a).emulateTransitionEnd(s);
					} else a();
				}),
				(e._transitionComplete = function (t, e, n) {
					if (e) {
						G.default(e).removeClass("active");
						var i = G.default(e.parentNode).find("> .dropdown-menu .active")[0];
						i && G.default(i).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
					}
					if (
						(G.default(t).addClass("active"),
						"tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
						$.reflow(t),
						t.classList.contains("fade") && t.classList.add("show"),
						t.parentNode && G.default(t.parentNode).hasClass("dropdown-menu"))
					) {
						var o = G.default(t).closest(".dropdown")[0];
						if (o) {
							var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
							G.default(r).addClass("active");
						}
						t.setAttribute("aria-expanded", !0);
					}
					n && n();
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this),
							i = n.data("bs.tab");
						if ((i || ((i = new t(this)), n.data("bs.tab", i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e]();
						}
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
				]),
				t
			);
		})();
	G.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
		t.preventDefault(), pe._jQueryInterface.call(G.default(this), "show");
	}),
		(G.default.fn.tab = pe._jQueryInterface),
		(G.default.fn.tab.Constructor = pe),
		(G.default.fn.tab.noConflict = function () {
			return (G.default.fn.tab = he), pe._jQueryInterface;
		});
	var me = G.default.fn.toast,
		ge = { animation: "boolean", autohide: "boolean", delay: "number" },
		ve = { animation: !0, autohide: !0, delay: 500 },
		_e = (function () {
			function t(t, e) {
				(this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
			}
			var e = t.prototype;
			return (
				(e.show = function () {
					var t = this,
						e = G.default.Event("show.bs.toast");
					if ((G.default(this._element).trigger(e), !e.isDefaultPrevented())) {
						this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
						var n = function () {
							t._element.classList.remove("showing"),
								t._element.classList.add("show"),
								G.default(t._element).trigger("shown.bs.toast"),
								t._config.autohide &&
									(t._timeout = setTimeout(function () {
										t.hide();
									}, t._config.delay));
						};
						if ((this._element.classList.remove("hide"), $.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
							var i = $.getTransitionDurationFromElement(this._element);
							G.default(this._element).one($.TRANSITION_END, n).emulateTransitionEnd(i);
						} else n();
					}
				}),
				(e.hide = function () {
					if (this._element.classList.contains("show")) {
						var t = G.default.Event("hide.bs.toast");
						G.default(this._element).trigger(t), t.isDefaultPrevented() || this._close();
					}
				}),
				(e.dispose = function () {
					this._clearTimeout(),
						this._element.classList.contains("show") && this._element.classList.remove("show"),
						G.default(this._element).off("click.dismiss.bs.toast"),
						G.default.removeData(this._element, "bs.toast"),
						(this._element = null),
						(this._config = null);
				}),
				(e._getConfig = function (t) {
					return (t = r({}, ve, G.default(this._element).data(), "object" == typeof t && t ? t : {})), $.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
				}),
				(e._setListeners = function () {
					var t = this;
					G.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
						return t.hide();
					});
				}),
				(e._close = function () {
					var t = this,
						e = function () {
							t._element.classList.add("hide"), G.default(t._element).trigger("hidden.bs.toast");
						};
					if ((this._element.classList.remove("show"), this._config.animation)) {
						var n = $.getTransitionDurationFromElement(this._element);
						G.default(this._element).one($.TRANSITION_END, e).emulateTransitionEnd(n);
					} else e();
				}),
				(e._clearTimeout = function () {
					clearTimeout(this._timeout), (this._timeout = null);
				}),
				(t._jQueryInterface = function (e) {
					return this.each(function () {
						var n = G.default(this),
							i = n.data("bs.toast");
						if ((i || ((i = new t(this, "object" == typeof e && e)), n.data("bs.toast", i)), "string" == typeof e)) {
							if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
							i[e](this);
						}
					});
				}),
				o(t, null, [
					{
						key: "VERSION",
						get: function () {
							return "4.5.3";
						},
					},
					{
						key: "DefaultType",
						get: function () {
							return ge;
						},
					},
					{
						key: "Default",
						get: function () {
							return ve;
						},
					},
				]),
				t
			);
		})();
	(G.default.fn.toast = _e._jQueryInterface),
		(G.default.fn.toast.Constructor = _e),
		(G.default.fn.toast.noConflict = function () {
			return (G.default.fn.toast = me), _e._jQueryInterface;
		}),
		(t.Alert = tt),
		(t.Button = nt),
		(t.Carousel = ut),
		(t.Collapse = pt),
		(t.Dropdown = Rt),
		(t.Modal = qt),
		(t.Popover = se),
		(t.Scrollspy = ce),
		(t.Tab = pe),
		(t.Toast = _e),
		(t.Tooltip = te),
		(t.Util = $),
		Object.defineProperty(t, "__esModule", { value: !0 });
});
