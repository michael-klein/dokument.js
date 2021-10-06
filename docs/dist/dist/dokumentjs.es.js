var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var n$3, l$3, u$4, i$4, t$4, o$3, r$4 = {}, f$4 = [], e$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c$4(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function s$4(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function a$3(n2, l2, u2) {
  var i2, t3, o2, r2 = arguments, f2 = {};
  for (o2 in l2)
    o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t3 = l2[o2] : f2[o2] = l2[o2];
  if (arguments.length > 3)
    for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
      u2.push(r2[o2]);
  if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
    for (o2 in n2.defaultProps)
      f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
  return v$4(n2, f2, i2, t3, null);
}
function v$4(l2, u2, i2, t3, o2) {
  var r2 = { type: l2, props: u2, key: i2, ref: t3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n$3.__v : o2 };
  return n$3.vnode != null && n$3.vnode(r2), r2;
}
function h$4() {
  return { current: null };
}
function y$4(n2) {
  return n2.children;
}
function p$4(n2, l2) {
  this.props = n2, this.context = l2;
}
function d$4(n2, l2) {
  if (l2 == null)
    return n2.__ ? d$4(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? d$4(n2) : null;
}
function _$4(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return _$4(n2);
  }
}
function k$4(l2) {
  (!l2.__d && (l2.__d = true) && u$4.push(l2) && !b$3.__r++ || t$4 !== n$3.debounceRendering) && ((t$4 = n$3.debounceRendering) || i$4)(b$3);
}
function b$3() {
  for (var n2; b$3.__r = u$4.length; )
    n2 = u$4.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), u$4 = [], n2.some(function(n3) {
      var l2, u2, i2, t3, o2, r2;
      n3.__d && (o2 = (t3 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i2 = c$4({}, t3)).__v = t3.__v + 1, I$4(r2, t3, i2, l2.__n, r2.ownerSVGElement !== void 0, t3.__h != null ? [o2] : null, u2, o2 == null ? d$4(t3) : o2, t3.__h), T$3(u2, t3), t3.__e != o2 && _$4(t3)));
    });
}
function m$3(n2, l2, u2, i2, t3, o2, e2, c2, s2, a2) {
  var h2, p2, _2, k2, b2, m2, w2, A2 = i2 && i2.__k || f$4, P2 = A2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((k2 = u2.__k[h2] = (k2 = l2[h2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" || typeof k2 == "bigint" ? v$4(null, k2, null, null, k2) : Array.isArray(k2) ? v$4(y$4, { children: k2 }, null, null, null) : k2.__b > 0 ? v$4(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, (_2 = A2[h2]) === null || _2 && k2.key == _2.key && k2.type === _2.type)
        A2[h2] = void 0;
      else
        for (p2 = 0; p2 < P2; p2++) {
          if ((_2 = A2[p2]) && k2.key == _2.key && k2.type === _2.type) {
            A2[p2] = void 0;
            break;
          }
          _2 = null;
        }
      I$4(n2, k2, _2 = _2 || r$4, t3, o2, e2, c2, s2, a2), b2 = k2.__e, (p2 = k2.ref) && _2.ref != p2 && (w2 || (w2 = []), _2.ref && w2.push(_2.ref, null, k2), w2.push(p2, k2.__c || b2, k2)), b2 != null ? (m2 == null && (m2 = b2), typeof k2.type == "function" && k2.__k != null && k2.__k === _2.__k ? k2.__d = s2 = g$5(k2, s2, n2) : s2 = x$4(n2, k2, _2, A2, b2, s2), a2 || u2.type !== "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && _2.__e == s2 && s2.parentNode != n2 && (s2 = d$4(_2));
    }
  for (u2.__e = m2, h2 = P2; h2--; )
    A2[h2] != null && (typeof u2.type == "function" && A2[h2].__e != null && A2[h2].__e == u2.__d && (u2.__d = d$4(i2, h2 + 1)), L$4(A2[h2], A2[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      z$4(w2[h2], w2[++h2], w2[++h2]);
}
function g$5(n2, l2, u2) {
  var i2, t3;
  for (i2 = 0; i2 < n2.__k.length; i2++)
    (t3 = n2.__k[i2]) && (t3.__ = n2, l2 = typeof t3.type == "function" ? g$5(t3, l2, u2) : x$4(u2, t3, t3, n2.__k, t3.__e, l2));
  return l2;
}
function w$4(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    w$4(n3, l2);
  }) : l2.push(n2)), l2;
}
function x$4(n2, l2, u2, i2, t3, o2) {
  var r2, f2, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t3 != o2 || t3.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t3), r2 = null;
      else {
        for (f2 = o2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t3)
            break n;
        n2.insertBefore(t3, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t3.nextSibling;
}
function A$5(n2, l2, u2, i2, t3) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || C$3(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t3 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || C$3(n2, o2, l2[o2], u2[o2], i2);
}
function P$4(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || e$3.test(l2) ? u2 : u2 + "px";
}
function C$3(n2, l2, u2, i2, t3) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || P$4(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || P$4(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i2 || n2.addEventListener(l2, o2 ? H$4 : $$3, o2) : n2.removeEventListener(l2, o2 ? H$4 : $$3, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t3)
        l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function $$3(l2) {
  this.l[l2.type + false](n$3.event ? n$3.event(l2) : l2);
}
function H$4(l2) {
  this.l[l2.type + true](n$3.event ? n$3.event(l2) : l2);
}
function I$4(l2, u2, i2, t3, o2, r2, f2, e2, s2) {
  var a2, v2, h2, d2, _2, k2, b2, g2, w2, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (s2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = n$3.__b) && a2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (g2 = u2.props, w2 = (a2 = P2.contextType) && t3[a2.__c], x2 = a2 ? w2 ? w2.props.value : a2.__ : t3, i2.__c ? b2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new p$4(g2, x2), v2.constructor = P2, v2.render = M$4), w2 && w2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t3, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = c$4({}, v2.__s)), c$4(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), d2 = v2.props, _2 = v2.state, h2)
          P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && g2 !== d2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
            v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n2) {
              n2 && (n2.__ = u2);
            }), v2.__h.length && f2.push(v2);
            break n;
          }
          v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
            v2.componentDidUpdate(d2, _2, k2);
          });
        }
        v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n$3.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t3 = c$4(c$4({}, t3), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (k2 = v2.getSnapshotBeforeUpdate(d2, _2)), A2 = a2 != null && a2.type === y$4 && a2.key == null ? a2.props.children : a2, m$3(l2, Array.isArray(A2) ? A2 : [A2], u2, i2, t3, o2, r2, f2, e2, s2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), b2 && (v2.__E = v2.__ = null), v2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = j$5(i2.__e, u2, i2, t3, o2, r2, f2, s2);
    (a2 = n$3.diffed) && a2(u2);
  } catch (l3) {
    u2.__v = null, (s2 || r2 != null) && (u2.__e = e2, u2.__h = !!s2, r2[r2.indexOf(e2)] = null), n$3.__e(l3, u2, i2);
  }
}
function T$3(l2, u2) {
  n$3.__c && n$3.__c(u2, l2), l2.some(function(u3) {
    try {
      l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
        n2.call(u3);
      });
    } catch (l3) {
      n$3.__e(l3, u3.__v);
    }
  });
}
function j$5(n2, l2, u2, i2, t3, o2, e2, c2) {
  var a2, v2, h2, y2, p2 = u2.props, d2 = l2.props, _2 = l2.type, k2 = 0;
  if (_2 === "svg" && (t3 = true), o2 != null) {
    for (; k2 < o2.length; k2++)
      if ((a2 = o2[k2]) && (a2 === n2 || (_2 ? a2.localName == _2 : a2.nodeType == 3))) {
        n2 = a2, o2[k2] = null;
        break;
      }
  }
  if (n2 == null) {
    if (_2 === null)
      return document.createTextNode(d2);
    n2 = t3 ? document.createElementNS("http://www.w3.org/2000/svg", _2) : document.createElement(_2, d2.is && d2), o2 = null, c2 = false;
  }
  if (_2 === null)
    p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
  else {
    if (o2 = o2 && f$4.slice.call(n2.childNodes), v2 = (p2 = u2.props || r$4).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
      if (o2 != null)
        for (p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
          p2[n2.attributes[y2].name] = n2.attributes[y2].value;
      (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n2.innerHTML) || (n2.innerHTML = h2 && h2.__html || ""));
    }
    if (A$5(n2, d2, p2, t3, c2), h2)
      l2.__k = [];
    else if (k2 = l2.props.children, m$3(n2, Array.isArray(k2) ? k2 : [k2], l2, u2, i2, t3 && _2 !== "foreignObject", o2, e2, n2.firstChild, c2), o2 != null)
      for (k2 = o2.length; k2--; )
        o2[k2] != null && s$4(o2[k2]);
    c2 || ("value" in d2 && (k2 = d2.value) !== void 0 && (k2 !== n2.value || _2 === "progress" && !k2) && C$3(n2, "value", k2, p2.value, false), "checked" in d2 && (k2 = d2.checked) !== void 0 && k2 !== n2.checked && C$3(n2, "checked", k2, p2.checked, false));
  }
  return n2;
}
function z$4(l2, u2, i2) {
  try {
    typeof l2 == "function" ? l2(u2) : l2.current = u2;
  } catch (l3) {
    n$3.__e(l3, i2);
  }
}
function L$4(l2, u2, i2) {
  var t3, o2, r2;
  if (n$3.unmount && n$3.unmount(l2), (t3 = l2.ref) && (t3.current && t3.current !== l2.__e || z$4(t3, null, u2)), i2 || typeof l2.type == "function" || (i2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t3 = l2.__c) != null) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (l3) {
        n$3.__e(l3, u2);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = l2.__k)
    for (r2 = 0; r2 < t3.length; r2++)
      t3[r2] && L$4(t3[r2], u2, i2);
  o2 != null && s$4(o2);
}
function M$4(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function N$3(l2, u2, i2) {
  var t3, o2, e2;
  n$3.__ && n$3.__(l2, u2), o2 = (t3 = typeof i2 == "function") ? null : i2 && i2.__k || u2.__k, e2 = [], I$4(u2, l2 = (!t3 && i2 || u2).__k = a$3(y$4, null, [l2]), o2 || r$4, r$4, u2.ownerSVGElement !== void 0, !t3 && i2 ? [i2] : o2 ? null : u2.firstChild ? f$4.slice.call(u2.childNodes) : null, e2, !t3 && i2 ? i2 : o2 ? o2.__e : u2.firstChild, t3), T$3(e2, l2);
}
function O$3(n2, l2) {
  N$3(n2, l2, O$3);
}
function S$4(n2, l2, u2) {
  var i2, t3, o2, r2 = arguments, f2 = c$4({}, n2.props);
  for (o2 in l2)
    o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t3 = l2[o2] : f2[o2] = l2[o2];
  if (arguments.length > 3)
    for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
      u2.push(r2[o2]);
  return u2 != null && (f2.children = u2), v$4(n2.type, f2, i2 || n2.key, t3 || n2.ref, null);
}
function q$3(n2, l2) {
  var u2 = { __c: l2 = "__cC" + o$3++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(k$4);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$3 = { __e: function(n2, l2) {
  for (var u2, i2, t3; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t3 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t3 = u2.__d), t3)
          return u2.__E = u2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
}, __v: 0 }, l$3 = function(n2) {
  return n2 != null && n2.constructor === void 0;
}, p$4.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = c$4({}, this.state), typeof n2 == "function" && (n2 = n2(c$4({}, u2), this.props)), n2 && c$4(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k$4(this));
}, p$4.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), k$4(this));
}, p$4.prototype.render = y$4, u$4 = [], i$4 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b$3.__r = 0, o$3 = 0;
var preact_module = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  render: N$3,
  hydrate: O$3,
  createElement: a$3,
  h: a$3,
  Fragment: y$4,
  createRef: h$4,
  get isValidElement() {
    return l$3;
  },
  Component: p$4,
  cloneElement: S$4,
  createContext: q$3,
  toChildArray: w$4,
  get options() {
    return n$3;
  }
});
function create(createState) {
  let state;
  const listeners = new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
}
function n$2(n2) {
  for (var t3 = arguments.length, r2 = Array(t3 > 1 ? t3 - 1 : 0), e2 = 1; e2 < t3; e2++)
    r2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t$3(n2) {
  return !!n2 && !!n2[Q$2];
}
function r$3(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var t3 = Object.getPrototypeOf(n3);
    if (t3 === null)
      return true;
    var r2 = Object.hasOwnProperty.call(t3, "constructor") && t3.constructor;
    return r2 === Object || typeof r2 == "function" && Function.toString.call(r2) === Z$2;
  }(n2) || Array.isArray(n2) || !!n2[L$3] || !!n2.constructor[L$3] || s$3(n2) || v$3(n2));
}
function i$3(n2, t3, r2) {
  r2 === void 0 && (r2 = false), o$2(n2) === 0 ? (r2 ? Object.keys : nn)(n2).forEach(function(e2) {
    r2 && typeof e2 == "symbol" || t3(e2, n2[e2], n2);
  }) : n2.forEach(function(r3, e2) {
    return t3(e2, r3, n2);
  });
}
function o$2(n2) {
  var t3 = n2[Q$2];
  return t3 ? t3.i > 3 ? t3.i - 4 : t3.i : Array.isArray(n2) ? 1 : s$3(n2) ? 2 : v$3(n2) ? 3 : 0;
}
function u$3(n2, t3) {
  return o$2(n2) === 2 ? n2.has(t3) : Object.prototype.hasOwnProperty.call(n2, t3);
}
function a$2(n2, t3) {
  return o$2(n2) === 2 ? n2.get(t3) : n2[t3];
}
function f$3(n2, t3, r2) {
  var e2 = o$2(n2);
  e2 === 2 ? n2.set(t3, r2) : e2 === 3 ? (n2.delete(t3), n2.add(r2)) : n2[t3] = r2;
}
function c$3(n2, t3) {
  return n2 === t3 ? n2 !== 0 || 1 / n2 == 1 / t3 : n2 != n2 && t3 != t3;
}
function s$3(n2) {
  return X$2 && n2 instanceof Map;
}
function v$3(n2) {
  return q$2 && n2 instanceof Set;
}
function p$3(n2) {
  return n2.o || n2.t;
}
function l$2(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var t3 = tn(n2);
  delete t3[Q$2];
  for (var r2 = nn(t3), e2 = 0; e2 < r2.length; e2++) {
    var i2 = r2[e2], o2 = t3[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), t3);
}
function d$3(n2, e2) {
  return e2 === void 0 && (e2 = false), y$3(n2) || t$3(n2) || !r$3(n2) ? n2 : (o$2(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$3), Object.freeze(n2), e2 && i$3(n2, function(n3, t3) {
    return d$3(t3, true);
  }, true), n2);
}
function h$3() {
  n$2(2);
}
function y$3(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b$2(t3) {
  var r2 = rn[t3];
  return r2 || n$2(18, t3), r2;
}
function _$3() {
  return U$2;
}
function j$4(n2, t3) {
  t3 && (b$2("Patches"), n2.u = [], n2.s = [], n2.v = t3);
}
function O$2(n2) {
  g$4(n2), n2.p.forEach(S$3), n2.p = null;
}
function g$4(n2) {
  n2 === U$2 && (U$2 = n2.l);
}
function w$3(n2) {
  return U$2 = { p: [], l: U$2, h: n2, m: true, _: 0 };
}
function S$3(n2) {
  var t3 = n2[Q$2];
  t3.i === 0 || t3.i === 1 ? t3.j() : t3.O = true;
}
function P$3(t3, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = t3 !== void 0 && t3 !== i2;
  return e2.h.g || b$2("ES5").S(e2, t3, o2), o2 ? (i2[Q$2].P && (O$2(e2), n$2(4)), r$3(t3) && (t3 = M$3(e2, t3), e2.l || x$3(e2, t3)), e2.u && b$2("Patches").M(i2[Q$2], t3, e2.u, e2.s)) : t3 = M$3(e2, i2, []), O$2(e2), e2.u && e2.v(e2.u, e2.s), t3 !== H$3 ? t3 : void 0;
}
function M$3(n2, t3, r2) {
  if (y$3(t3))
    return t3;
  var e2 = t3[Q$2];
  if (!e2)
    return i$3(t3, function(i2, o3) {
      return A$4(n2, e2, t3, i2, o3, r2);
    }, true), t3;
  if (e2.A !== n2)
    return t3;
  if (!e2.P)
    return x$3(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l$2(e2.k) : e2.o;
    i$3(e2.i === 3 ? new Set(o2) : o2, function(t4, i2) {
      return A$4(n2, e2, o2, t4, i2, r2);
    }), x$3(n2, o2, false), r2 && n2.u && b$2("Patches").R(e2, r2, n2.u, n2.s);
  }
  return e2.o;
}
function A$4(e2, i2, o2, a2, c2, s2) {
  if (t$3(c2)) {
    var v2 = M$3(e2, c2, s2 && i2 && i2.i !== 3 && !u$3(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f$3(o2, a2, v2), !t$3(v2))
      return;
    e2.m = false;
  }
  if (r$3(c2) && !y$3(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M$3(e2, c2), i2 && i2.A.l || x$3(e2, c2);
  }
}
function x$3(n2, t3, r2) {
  r2 === void 0 && (r2 = false), n2.h.F && n2.m && d$3(t3, r2);
}
function z$3(n2, t3) {
  var r2 = n2[Q$2];
  return (r2 ? p$3(r2) : n2)[t3];
}
function I$3(n2, t3) {
  if (t3 in n2)
    for (var r2 = Object.getPrototypeOf(n2); r2; ) {
      var e2 = Object.getOwnPropertyDescriptor(r2, t3);
      if (e2)
        return e2;
      r2 = Object.getPrototypeOf(r2);
    }
}
function k$3(n2) {
  n2.P || (n2.P = true, n2.l && k$3(n2.l));
}
function E$3(n2) {
  n2.o || (n2.o = l$2(n2.t));
}
function R$3(n2, t3, r2) {
  var e2 = s$3(t3) ? b$2("MapSet").N(t3, r2) : v$3(t3) ? b$2("MapSet").T(t3, r2) : n2.g ? function(n3, t4) {
    var r3 = Array.isArray(n3), e3 = { i: r3 ? 1 : 0, A: t4 ? t4.A : _$3(), P: false, I: false, D: {}, l: t4, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    r3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(t3, r2) : b$2("ES5").J(t3, r2);
  return (r2 ? r2.A : _$3()).p.push(e2), e2;
}
function D$2(e2) {
  return t$3(e2) || n$2(22, e2), function n2(t3) {
    if (!r$3(t3))
      return t3;
    var e3, u2 = t3[Q$2], c2 = o$2(t3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$2("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F$5(t3, c2), u2.I = false;
    } else
      e3 = F$5(t3, c2);
    return i$3(e3, function(t4, r2) {
      u2 && a$2(u2.t, t4) === r2 || f$3(e3, t4, n2(r2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F$5(n2, t3) {
  switch (t3) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$2(n2);
}
var G$3, U$2, W$2 = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X$2 = typeof Map != "undefined", q$2 = typeof Set != "undefined", B$3 = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H$3 = W$2 ? Symbol.for("immer-nothing") : ((G$3 = {})["immer-nothing"] = true, G$3), L$3 = W$2 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$2 = W$2 ? Symbol.for("immer-state") : "__$immer_state", Z$2 = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, tn = Object.getOwnPropertyDescriptors || function(n2) {
  var t3 = {};
  return nn(n2).forEach(function(r2) {
    t3[r2] = Object.getOwnPropertyDescriptor(n2, r2);
  }), t3;
}, rn = {}, en = { get: function(n2, t3) {
  if (t3 === Q$2)
    return n2;
  var e2 = p$3(n2);
  if (!u$3(e2, t3))
    return function(n3, t4, r2) {
      var e3, i3 = I$3(t4, r2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, t3);
  var i2 = e2[t3];
  return n2.I || !r$3(i2) ? i2 : i2 === z$3(n2.t, t3) ? (E$3(n2), n2.o[t3] = R$3(n2.A.h, i2, n2)) : i2;
}, has: function(n2, t3) {
  return t3 in p$3(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$3(n2));
}, set: function(n2, t3, r2) {
  var e2 = I$3(p$3(n2), t3);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, r2), true;
  if (!n2.P) {
    var i2 = z$3(p$3(n2), t3), o2 = i2 == null ? void 0 : i2[Q$2];
    if (o2 && o2.t === r2)
      return n2.o[t3] = r2, n2.D[t3] = false, true;
    if (c$3(r2, i2) && (r2 !== void 0 || u$3(n2.t, t3)))
      return true;
    E$3(n2), k$3(n2);
  }
  return n2.o[t3] === r2 && typeof r2 != "number" && (r2 !== void 0 || t3 in n2.o) || (n2.o[t3] = r2, n2.D[t3] = true, true);
}, deleteProperty: function(n2, t3) {
  return z$3(n2.t, t3) !== void 0 || t3 in n2.t ? (n2.D[t3] = false, E$3(n2), k$3(n2)) : delete n2.D[t3], n2.o && delete n2.o[t3], true;
}, getOwnPropertyDescriptor: function(n2, t3) {
  var r2 = p$3(n2), e2 = Reflect.getOwnPropertyDescriptor(r2, t3);
  return e2 ? { writable: true, configurable: n2.i !== 1 || t3 !== "length", enumerable: e2.enumerable, value: r2[t3] } : e2;
}, defineProperty: function() {
  n$2(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$2(12);
} }, on = {};
i$3(en, function(n2, t3) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], t3.apply(this, arguments);
  };
}), on.deleteProperty = function(t3, r2) {
  return en.deleteProperty.call(this, t3[0], r2);
}, on.set = function(t3, r2, e2) {
  return en.set.call(this, t3[0], r2, e2, t3[0]);
};
var un = function() {
  function e2(t3) {
    var e3 = this;
    this.g = B$3, this.F = true, this.produce = function(t4, i3, o2) {
      if (typeof t4 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = t4;
        var a2 = e3;
        return function(n2) {
          var t5 = this;
          n2 === void 0 && (n2 = u2);
          for (var r2 = arguments.length, e4 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var r3;
            return (r3 = i3).call.apply(r3, [t5, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n$2(6), o2 !== void 0 && typeof o2 != "function" && n$2(7), r$3(t4)) {
        var c2 = w$3(e3), s2 = R$3(e3, t4, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O$2(c2) : g$4(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j$4(c2, o2), P$3(n2, c2);
        }, function(n2) {
          throw O$2(c2), n2;
        }) : (j$4(c2, o2), P$3(f2, c2));
      }
      if (!t4 || typeof t4 != "object") {
        if ((f2 = i3(t4)) === H$3)
          return;
        return f2 === void 0 && (f2 = t4), e3.F && d$3(f2, true), f2;
      }
      n$2(21, t4);
    }, this.produceWithPatches = function(n2, t4) {
      return typeof n2 == "function" ? function(t5) {
        for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
          i4[o2 - 1] = arguments[o2];
        return e3.produceWithPatches(t5, function(t6) {
          return n2.apply(void 0, [t6].concat(i4));
        });
      } : [e3.produce(n2, t4, function(n3, t5) {
        r2 = n3, i3 = t5;
      }), r2, i3];
      var r2, i3;
    }, typeof (t3 == null ? void 0 : t3.useProxies) == "boolean" && this.setUseProxies(t3.useProxies), typeof (t3 == null ? void 0 : t3.autoFreeze) == "boolean" && this.setAutoFreeze(t3.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    r$3(e3) || n$2(8), t$3(e3) && (e3 = D$2(e3));
    var i3 = w$3(this), o2 = R$3(this, e3, void 0);
    return o2[Q$2].C = true, g$4(i3), o2;
  }, i2.finishDraft = function(t3, r2) {
    var e3 = t3 && t3[Q$2];
    var i3 = e3.A;
    return j$4(i3, r2), P$3(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(t3) {
    t3 && !B$3 && n$2(20), this.g = t3;
  }, i2.applyPatches = function(n2, r2) {
    var e3;
    for (e3 = r2.length - 1; e3 >= 0; e3--) {
      var i3 = r2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    var o2 = b$2("Patches").$;
    return t$3(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
      return o2(n3, r2.slice(e3 + 1));
    });
  }, e2;
}(), an$1 = new un(), fn$1 = an$1.produce;
an$1.produceWithPatches.bind(an$1);
an$1.setAutoFreeze.bind(an$1);
an$1.setUseProxies.bind(an$1);
an$1.applyPatches.bind(an$1);
an$1.createDraft.bind(an$1);
an$1.finishDraft.bind(an$1);
var produce = fn$1;
const findNavbarItem = (navbar, slug) => {
  for (const key of Object.keys(navbar)) {
    const item = navbar[key];
    if (item.slug === slug) {
      return item;
    }
    if (item.children) {
      const child = findNavbarItem(item.children, slug);
      if (child) {
        return child;
      }
    }
  }
  return void 0;
};
const flattenNavbar = (navbar) => {
  return Object.keys(navbar).flatMap((key) => {
    const item = navbar[key];
    return [
      item,
      ...item.children ? flattenNavbar(item.children) : []
    ].filter((i2) => i2.path);
  });
};
const docs = create((set) => ({
  setNavBar: (navbar) => set(produce((state) => {
    state.navbar = navbar;
    state.flatNavbar = flattenNavbar(navbar);
  })),
  setCurrentDocument: (document2) => set(produce((state) => {
    state.currentDocument = document2;
  })),
  addDocument: (document2) => set(produce((state) => {
    if (!state.documents) {
      state.documents = {};
    }
    state.documents[document2.slug] = document2;
  })),
  addHeadingsToNavbarItem: (slug, headings) => set(produce((state) => {
    const item = findNavbarItem(state.navbar, slug);
    if (item) {
      item.headings = headings;
      state.flatNavbar = flattenNavbar(state.navbar);
    }
  }))
}));
var theme = "";
class HTTPError extends Error {
  constructor(response, request, options) {
    const code = response.status || response.status === 0 ? response.status : "";
    const title = response.statusText || "";
    const status = `${code} ${title}`.trim();
    const reason = status ? `status code ${status}` : "an unknown error";
    super(`Request failed with ${reason}`);
    this.name = "HTTPError";
    this.response = response;
    this.request = request;
    this.options = options;
  }
}
class TimeoutError extends Error {
  constructor(request) {
    super("Request timed out");
    this.name = "TimeoutError";
    this.request = request;
  }
}
const isObject = (value) => value !== null && typeof value === "object";
const validateAndMerge = (...sources) => {
  for (const source of sources) {
    if ((!isObject(source) || Array.isArray(source)) && typeof source !== "undefined") {
      throw new TypeError("The `options` argument must be an object");
    }
  }
  return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {}) => {
  const result = new globalThis.Headers(source1);
  const isHeadersInstance = source2 instanceof globalThis.Headers;
  const source = new globalThis.Headers(source2);
  for (const [key, value] of source.entries()) {
    if (isHeadersInstance && value === "undefined" || value === void 0) {
      result.delete(key);
    } else {
      result.set(key, value);
    }
  }
  return result;
};
const deepMerge = (...sources) => {
  let returnValue = {};
  let headers = {};
  for (const source of sources) {
    if (Array.isArray(source)) {
      if (!Array.isArray(returnValue)) {
        returnValue = [];
      }
      returnValue = [...returnValue, ...source];
    } else if (isObject(source)) {
      for (let [key, value] of Object.entries(source)) {
        if (isObject(value) && key in returnValue) {
          value = deepMerge(returnValue[key], value);
        }
        returnValue = __spreadProps(__spreadValues({}, returnValue), { [key]: value });
      }
      if (isObject(source.headers)) {
        headers = mergeHeaders(headers, source.headers);
        returnValue.headers = headers;
      }
    }
  }
  return returnValue;
};
const supportsAbortController = typeof globalThis.AbortController === "function";
const supportsStreams = typeof globalThis.ReadableStream === "function";
const supportsFormData = typeof globalThis.FormData === "function";
const requestMethods = ["get", "post", "put", "patch", "head", "delete"];
const responseTypes = {
  json: "application/json",
  text: "text/*",
  formData: "multipart/form-data",
  arrayBuffer: "*/*",
  blob: "*/*"
};
const maxSafeTimeout = 2147483647;
const stop = Symbol("stop");
const normalizeRequestMethod = (input) => requestMethods.includes(input) ? input.toUpperCase() : input;
const retryMethods = ["get", "put", "head", "delete", "options", "trace"];
const retryStatusCodes = [408, 413, 429, 500, 502, 503, 504];
const retryAfterStatusCodes = [413, 429, 503];
const defaultRetryOptions = {
  limit: 2,
  methods: retryMethods,
  statusCodes: retryStatusCodes,
  afterStatusCodes: retryAfterStatusCodes,
  maxRetryAfter: Number.POSITIVE_INFINITY
};
const normalizeRetryOptions = (retry = {}) => {
  if (typeof retry === "number") {
    return __spreadProps(__spreadValues({}, defaultRetryOptions), {
      limit: retry
    });
  }
  if (retry.methods && !Array.isArray(retry.methods)) {
    throw new Error("retry.methods must be an array");
  }
  if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
    throw new Error("retry.statusCodes must be an array");
  }
  return __spreadProps(__spreadValues(__spreadValues({}, defaultRetryOptions), retry), {
    afterStatusCodes: retryAfterStatusCodes
  });
};
const timeout = async (request, abortController, options) => new Promise((resolve, reject) => {
  const timeoutID = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }
    reject(new TimeoutError(request));
  }, options.timeout);
  void options.fetch(request).then(resolve).catch(reject).then(() => {
    clearTimeout(timeoutID);
  });
});
const delay = async (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
class Ky {
  constructor(input, options = {}) {
    var _a, _b;
    this._retryCount = 0;
    this._input = input;
    this._options = __spreadProps(__spreadValues({
      credentials: this._input.credentials || "same-origin"
    }, options), {
      headers: mergeHeaders(this._input.headers, options.headers),
      hooks: deepMerge({
        beforeRequest: [],
        beforeRetry: [],
        afterResponse: []
      }, options.hooks),
      method: normalizeRequestMethod((_a = options.method) !== null && _a !== void 0 ? _a : this._input.method),
      prefixUrl: String(options.prefixUrl || ""),
      retry: normalizeRetryOptions(options.retry),
      throwHttpErrors: options.throwHttpErrors !== false,
      timeout: typeof options.timeout === "undefined" ? 1e4 : options.timeout,
      fetch: (_b = options.fetch) !== null && _b !== void 0 ? _b : globalThis.fetch.bind(globalThis)
    });
    if (typeof this._input !== "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request)) {
      throw new TypeError("`input` must be a string, URL, or Request");
    }
    if (this._options.prefixUrl && typeof this._input === "string") {
      if (this._input.startsWith("/")) {
        throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      }
      if (!this._options.prefixUrl.endsWith("/")) {
        this._options.prefixUrl += "/";
      }
      this._input = this._options.prefixUrl + this._input;
    }
    if (supportsAbortController) {
      this.abortController = new globalThis.AbortController();
      if (this._options.signal) {
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort();
        });
      }
      this._options.signal = this.abortController.signal;
    }
    this.request = new globalThis.Request(this._input, this._options);
    if (this._options.searchParams) {
      const textSearchParams = typeof this._options.searchParams === "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString();
      const searchParams = "?" + textSearchParams;
      const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
      if ((supportsFormData && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"])) {
        this.request.headers.delete("content-type");
      }
      this.request = new globalThis.Request(new globalThis.Request(url, this.request), this._options);
    }
    if (this._options.json !== void 0) {
      this._options.body = JSON.stringify(this._options.json);
      this.request.headers.set("content-type", "application/json");
      this.request = new globalThis.Request(this.request, { body: this._options.body });
    }
  }
  static create(input, options) {
    const ky2 = new Ky(input, options);
    const fn2 = async () => {
      if (ky2._options.timeout > maxSafeTimeout) {
        throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
      }
      await Promise.resolve();
      let response = await ky2._fetch();
      for (const hook of ky2._options.hooks.afterResponse) {
        const modifiedResponse = await hook(ky2.request, ky2._options, ky2._decorateResponse(response.clone()));
        if (modifiedResponse instanceof globalThis.Response) {
          response = modifiedResponse;
        }
      }
      ky2._decorateResponse(response);
      if (!response.ok && ky2._options.throwHttpErrors) {
        throw new HTTPError(response, ky2.request, ky2._options);
      }
      if (ky2._options.onDownloadProgress) {
        if (typeof ky2._options.onDownloadProgress !== "function") {
          throw new TypeError("The `onDownloadProgress` option must be a function");
        }
        if (!supportsStreams) {
          throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        }
        return ky2._stream(response.clone(), ky2._options.onDownloadProgress);
      }
      return response;
    };
    const isRetriableMethod = ky2._options.retry.methods.includes(ky2.request.method.toLowerCase());
    const result = isRetriableMethod ? ky2._retry(fn2) : fn2();
    for (const [type, mimeType] of Object.entries(responseTypes)) {
      result[type] = async () => {
        ky2.request.headers.set("accept", ky2.request.headers.get("accept") || mimeType);
        const response = (await result).clone();
        if (type === "json") {
          if (response.status === 204) {
            return "";
          }
          if (options.parseJson) {
            return options.parseJson(await response.text());
          }
        }
        return response[type]();
      };
    }
    return result;
  }
  _calculateRetryDelay(error) {
    this._retryCount++;
    if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
      if (error instanceof HTTPError) {
        if (!this._options.retry.statusCodes.includes(error.response.status)) {
          return 0;
        }
        const retryAfter = error.response.headers.get("Retry-After");
        if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
          let after = Number(retryAfter);
          if (Number.isNaN(after)) {
            after = Date.parse(retryAfter) - Date.now();
          } else {
            after *= 1e3;
          }
          if (typeof this._options.retry.maxRetryAfter !== "undefined" && after > this._options.retry.maxRetryAfter) {
            return 0;
          }
          return after;
        }
        if (error.response.status === 413) {
          return 0;
        }
      }
      const BACKOFF_FACTOR = 0.3;
      return BACKOFF_FACTOR * 2 ** (this._retryCount - 1) * 1e3;
    }
    return 0;
  }
  _decorateResponse(response) {
    if (this._options.parseJson) {
      response.json = async () => {
        return this._options.parseJson(await response.text());
      };
    }
    return response;
  }
  async _retry(fn2) {
    try {
      return await fn2();
    } catch (error) {
      const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
      if (ms !== 0 && this._retryCount > 0) {
        await delay(ms);
        for (const hook of this._options.hooks.beforeRetry) {
          const hookResult = await hook({
            request: this.request,
            options: this._options,
            error,
            retryCount: this._retryCount
          });
          if (hookResult === stop) {
            return;
          }
        }
        return this._retry(fn2);
      }
      throw error;
    }
  }
  async _fetch() {
    for (const hook of this._options.hooks.beforeRequest) {
      const result = await hook(this.request, this._options);
      if (result instanceof Request) {
        this.request = result;
        break;
      }
      if (result instanceof Response) {
        return result;
      }
    }
    if (this._options.timeout === false) {
      return this._options.fetch(this.request.clone());
    }
    return timeout(this.request.clone(), this.abortController, this._options);
  }
  _stream(response, onDownloadProgress) {
    const totalBytes = Number(response.headers.get("content-length")) || 0;
    let transferredBytes = 0;
    return new globalThis.Response(new globalThis.ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        if (onDownloadProgress) {
          onDownloadProgress({ percent: 0, transferredBytes: 0, totalBytes }, new Uint8Array());
        }
        async function read() {
          const { done, value } = await reader.read();
          if (done) {
            controller.close();
            return;
          }
          if (onDownloadProgress) {
            transferredBytes += value.byteLength;
            const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
            onDownloadProgress({ percent, transferredBytes, totalBytes }, value);
          }
          controller.enqueue(value);
          await read();
        }
        await read();
      }
    }));
  }
}
/*! MIT License © Sindre Sorhus */
const createInstance = (defaults2) => {
  const ky2 = (input, options) => Ky.create(input, validateAndMerge(defaults2, options));
  for (const method of requestMethods) {
    ky2[method] = (input, options) => Ky.create(input, validateAndMerge(defaults2, options, { method }));
  }
  ky2.create = (newDefaults) => createInstance(validateAndMerge(newDefaults));
  ky2.extend = (newDefaults) => createInstance(validateAndMerge(defaults2, newDefaults));
  ky2.stop = stop;
  return ky2;
};
const ky = createInstance();
var ky$1 = ky;
function join(...args) {
  let parts = [];
  for (let i2 = 0, l2 = args.length; i2 < l2; i2++) {
    parts = parts.concat(args[i2].split("/"));
  }
  let newParts = [];
  for (let i2 = 0, l2 = parts.length; i2 < l2; i2++) {
    let part = parts[i2];
    if (!part || part === ".")
      continue;
    if (part === "..")
      newParts.pop();
    else
      newParts.push(part);
  }
  if (parts[0] === "")
    newParts.unshift("");
  return newParts.join("/") || (newParts.length ? "/" : ".");
}
async function getHeaders(filePath) {
  return ky$1.head(filePath).then((r2) => r2.headers);
}
async function getFile(filePath) {
  return ky$1.get(filePath).text();
}
async function getJSON(filePath) {
  return ky$1.get(filePath).json();
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a2 = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var removeMarkdown = function(md, options) {
  options = options || {};
  options.listUnicodeChar = options.hasOwnProperty("listUnicodeChar") ? options.listUnicodeChar : false;
  options.stripListLeaders = options.hasOwnProperty("stripListLeaders") ? options.stripListLeaders : true;
  options.gfm = options.hasOwnProperty("gfm") ? options.gfm : true;
  options.useImgAltText = options.hasOwnProperty("useImgAltText") ? options.useImgAltText : true;
  var output = md || "";
  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
  try {
    if (options.stripListLeaders) {
      if (options.listUnicodeChar)
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + " $1");
      else
        output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");
    }
    if (options.gfm) {
      output = output.replace(/\n={2,}/g, "\n").replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "");
    }
    output = output.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, "\n\n");
  } catch (e2) {
    console.error(e2);
    return md;
  }
  return output;
};
var NavbarItemType;
(function(NavbarItemType2) {
  NavbarItemType2[NavbarItemType2["CATEGORY"] = 0] = "CATEGORY";
  NavbarItemType2[NavbarItemType2["DOCUMENT"] = 1] = "DOCUMENT";
})(NavbarItemType || (NavbarItemType = {}));
function findHeadings(document2) {
  const parts = document2.split(/\n/g);
  const headings = [];
  let i2 = 0;
  for (const part of parts) {
    if (part.trim()[0] === "#") {
      let size = 1;
      while (part[size] && part[size] === "#") {
        size++;
      }
      let text = removeMarkdown(part);
      text = text.trim();
      headings.push({
        size,
        text,
        raw: part,
        slug: `${i2}-${slugify(text)}`
      });
      i2++;
    }
  }
  return headings;
}
function buildNavbar(navbarJSON, depth = 1) {
  let navbar = {};
  for (const title of Object.keys(navbarJSON)) {
    const entry = navbarJSON[title];
    if (typeof entry === "object") {
      navbar[title] = {
        type: NavbarItemType.CATEGORY,
        children: buildNavbar(entry, depth + 1),
        slug: slugify(title),
        title,
        depth
      };
    } else {
      const slug = slugify(entry);
      navbar[title] = {
        type: NavbarItemType.DOCUMENT,
        slug,
        path: entry,
        depth,
        title
      };
    }
  }
  return navbar;
}
async function fetchNavbar(rootPath, navbarPath) {
  const navbarJSON = await getJSON(join(join(rootPath, navbarPath), "navbar.docs.json"));
  return buildNavbar(navbarJSON);
}
function slugify(path) {
  const a2 = "\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;";
  const b2 = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p2 = new RegExp(a2.split("").join("|"), "g");
  return path.toString().toLowerCase().replace(/.mdx/g, "").replace(/\s+/g, "-").replace(p2, (c2) => b2.charAt(a2.indexOf(c2))).replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}
let fetching = false;
const documentQueue = [];
const documentsToFetch = new Map();
const fetchingDocuments = [];
const fetchDocumentNowBySlug = async (rootPath, flatNavbar, slug) => {
  var _a;
  const path = (_a = flatNavbar.find((item) => item.slug === slug)) == null ? void 0 : _a.path;
  if (path) {
    await fetchDocumentNow(rootPath, path);
  }
};
const fetchDocumentNow = async (rootPath, path) => {
  var _a;
  if (documentQueue.includes(path) && !fetchingDocuments.includes(path)) {
    fetchingDocuments.push(path);
    documentQueue.splice(documentQueue.indexOf(path), 1);
    const { title, slug } = documentsToFetch.get(path);
    documentsToFetch.delete(path);
    const docPath = join(rootPath, path);
    try {
      let document2 = (_a = docs.getState().documents) == null ? void 0 : _a[slug];
      let headers;
      try {
        headers = await getHeaders(docPath);
      } catch (e2) {
      }
      const lastModified = headers && headers.get("last-modified");
      let lastModifiedTimestamp = -1;
      if (lastModified) {
        lastModifiedTimestamp = new Date(lastModified).getTime();
      }
      if (document2) {
        if (document2.lastModified === lastModifiedTimestamp) {
          docs.getState().addDocument(document2);
          docs.getState().addHeadingsToNavbarItem(document2.slug, document2.headings);
          return;
        }
      }
      const content = await getFile(docPath);
      document2 = {
        title,
        content,
        path,
        slug,
        headings: findHeadings(content),
        lastModified: lastModifiedTimestamp
      };
      docs.getState().addDocument(document2);
      docs.getState().addHeadingsToNavbarItem(document2.slug, document2.headings);
    } catch (e2) {
    }
    fetchingDocuments.splice(fetchingDocuments.indexOf(path), 1);
  }
};
const fetchDocuments = async (rootPath) => {
  fetching = true;
  while (documentQueue.length > 0) {
    await fetchDocumentNow(rootPath, documentQueue[0]);
  }
  fetching = false;
};
const queueDocuments = (rootPath, navbar) => {
  for (const label of Object.keys(navbar)) {
    const { children, type, path } = navbar[label];
    if (type === NavbarItemType.CATEGORY) {
      queueDocuments(rootPath, children);
    } else {
      documentsToFetch.set(path, __spreadValues({ title: label }, navbar[label]));
      documentQueue.push(path);
    }
  }
  if (!fetching) {
    fetchDocuments(rootPath);
  }
};
var t$2, u$2, r$2, o$1 = 0, i$2 = [], c$2 = n$3.__b, f$2 = n$3.__r, e$2 = n$3.diffed, a$1 = n$3.__c, v$2 = n$3.unmount;
function m$2(t3, r2) {
  n$3.__h && n$3.__h(u$2, t3, o$1 || r2), o$1 = 0;
  var i2 = u$2.__H || (u$2.__H = { __: [], __h: [] });
  return t3 >= i2.__.length && i2.__.push({}), i2.__[t3];
}
function l$1(n2) {
  return o$1 = 1, p$2(w$2, n2);
}
function p$2(n2, r2, o2) {
  var i2 = m$2(t$2++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w$2(void 0, r2), function(n3) {
    var t3 = i2.t(i2.__[0], n3);
    i2.__[0] !== t3 && (i2.__ = [t3, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u$2), i2.__;
}
function y$2(r2, o2) {
  var i2 = m$2(t$2++, 3);
  !n$3.__s && k$2(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u$2.__H.__h.push(i2));
}
function h$2(r2, o2) {
  var i2 = m$2(t$2++, 4);
  !n$3.__s && k$2(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u$2.__h.push(i2));
}
function s$2(n2) {
  return o$1 = 5, d$2(function() {
    return { current: n2 };
  }, []);
}
function _$2(n2, t3, u2) {
  o$1 = 6, h$2(function() {
    typeof n2 == "function" ? n2(t3()) : n2 && (n2.current = t3());
  }, u2 == null ? u2 : u2.concat(n2));
}
function d$2(n2, u2) {
  var r2 = m$2(t$2++, 7);
  return k$2(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
}
function A$3(n2, t3) {
  return o$1 = 8, d$2(function() {
    return n2;
  }, t3);
}
function F$4(n2) {
  var r2 = u$2.context[n2.__c], o2 = m$2(t$2++, 9);
  return o2.__c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u$2)), r2.props.value) : n2.__;
}
function T$2(t3, u2) {
  n$3.useDebugValue && n$3.useDebugValue(u2 ? u2(t3) : t3);
}
function x$2() {
  i$2.forEach(function(t3) {
    if (t3.__P)
      try {
        t3.__H.__h.forEach(g$3), t3.__H.__h.forEach(j$3), t3.__H.__h = [];
      } catch (u2) {
        t3.__H.__h = [], n$3.__e(u2, t3.__v);
      }
  }), i$2 = [];
}
n$3.__b = function(n2) {
  u$2 = null, c$2 && c$2(n2);
}, n$3.__r = function(n2) {
  f$2 && f$2(n2), t$2 = 0;
  var r2 = (u$2 = n2.__c).__H;
  r2 && (r2.__h.forEach(g$3), r2.__h.forEach(j$3), r2.__h = []);
}, n$3.diffed = function(t3) {
  e$2 && e$2(t3);
  var o2 = t3.__c;
  o2 && o2.__H && o2.__H.__h.length && (i$2.push(o2) !== 1 && r$2 === n$3.requestAnimationFrame || ((r$2 = n$3.requestAnimationFrame) || function(n2) {
    var t4, u2 = function() {
      clearTimeout(r2), b$1 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    b$1 && (t4 = requestAnimationFrame(u2));
  })(x$2)), u$2 = void 0;
}, n$3.__c = function(t3, u2) {
  u2.some(function(t4) {
    try {
      t4.__h.forEach(g$3), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || j$3(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], n$3.__e(r2, t4.__v);
    }
  }), a$1 && a$1(t3, u2);
}, n$3.unmount = function(t3) {
  v$2 && v$2(t3);
  var u2 = t3.__c;
  if (u2 && u2.__H)
    try {
      u2.__H.__.forEach(g$3);
    } catch (t4) {
      n$3.__e(t4, u2.__v);
    }
};
var b$1 = typeof requestAnimationFrame == "function";
function g$3(n2) {
  var t3 = u$2;
  typeof n2.__c == "function" && n2.__c(), u$2 = t3;
}
function j$3(n2) {
  var t3 = u$2;
  n2.__c = n2.__(), u$2 = t3;
}
function k$2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, u2) {
    return t4 !== n2[u2];
  });
}
function w$2(n2, t3) {
  return typeof t3 == "function" ? t3(n2) : t3;
}
function C$2(n2, t3) {
  for (var e2 in t3)
    n2[e2] = t3[e2];
  return n2;
}
function S$2(n2, t3) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t3))
      return true;
  for (var r2 in t3)
    if (r2 !== "__source" && n2[r2] !== t3[r2])
      return true;
  return false;
}
function E$2(n2) {
  this.props = n2;
}
function g$2(n2, t3) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t3 ? !t3(this.props, n3) || !r3 : S$2(this.props, n3);
  }
  function r2(t4) {
    return this.shouldComponentUpdate = e2, a$3(n2, t4);
  }
  return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(E$2.prototype = new p$4()).isPureReactComponent = true, E$2.prototype.shouldComponentUpdate = function(n2, t3) {
  return S$2(this.props, n2) || S$2(this.state, t3);
};
var w$1 = n$3.__b;
n$3.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w$1 && w$1(n2);
};
var R$2 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function x$1(n2) {
  function t3(t4, e2) {
    var r2 = C$2({}, t4);
    return delete r2.ref, n2(r2, (e2 = t4.ref || e2) && (typeof e2 != "object" || "current" in e2) ? e2 : null);
  }
  return t3.$$typeof = R$2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
}
var N$2 = function(n2, t3) {
  return n2 == null ? null : w$4(w$4(n2).map(t3));
}, k$1 = { map: N$2, forEach: N$2, count: function(n2) {
  return n2 ? w$4(n2).length : 0;
}, only: function(n2) {
  var t3 = w$4(n2);
  if (t3.length !== 1)
    throw "Children.only";
  return t3[0];
}, toArray: w$4 }, A$2 = n$3.__e;
n$3.__e = function(n2, t3, e2) {
  if (n2.then) {
    for (var r2, u2 = t3; u2 = u2.__; )
      if ((r2 = u2.__c) && r2.__c)
        return t3.__e == null && (t3.__e = e2.__e, t3.__k = e2.__k), r2.__c(n2, t3);
  }
  A$2(n2, t3, e2);
};
var O$1 = n$3.unmount;
function L$2() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U$1(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__e && t3.__e(n2);
}
function D$1(n2) {
  var t3, e2, r2;
  function u2(u3) {
    if (t3 || (t3 = n2()).then(function(n3) {
      e2 = n3.default || n3;
    }, function(n3) {
      r2 = n3;
    }), r2)
      throw r2;
    if (!e2)
      throw t3;
    return a$3(e2, u3);
  }
  return u2.displayName = "Lazy", u2.__f = true, u2;
}
function F$3() {
  this.u = null, this.o = null;
}
n$3.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O$1 && O$1(n2);
}, (L$2.prototype = new p$4()).__c = function(n2, t3) {
  var e2 = t3.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(e2);
  var u2 = U$1(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var n3 = r2.state.__e;
        r2.__v.__k[0] = function n4(t5, e3, r3) {
          return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
            return n4(t6, e3, r3);
          }), t5.__c && t5.__c.__P === e3 && (t5.__e && r3.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r3)), t5;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r2.setState({ __e: r2.__b = null }); t4 = r2.t.pop(); )
        t4.forceUpdate();
    }
  }, f2 = t3.__h === true;
  r2.__u++ || f2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, L$2.prototype.componentWillUnmount = function() {
  this.t = [];
}, L$2.prototype.render = function(n2, t3) {
  if (this.__b) {
    if (this.__v.__k) {
      var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t4, e3, r3) {
        return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
          typeof n4.__c == "function" && n4.__c();
        }), t4.__c.__H = null), (t4 = C$2({}, t4)).__c != null && (t4.__c.__P === r3 && (t4.__c.__P = e3), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
          return n3(t5, e3, r3);
        })), t4;
      }(this.__b, e2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var u2 = t3.__e && a$3(y$4, null, n2.fallback);
  return u2 && (u2.__h = null), [a$3(y$4, null, t3.__e ? null : n2.children), u2];
};
var M$2 = function(n2, t3, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function T$1(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j$2(n2) {
  var t3 = this, e2 = n2.i;
  t3.componentWillUnmount = function() {
    N$3(null, t3.l), t3.l = null, t3.i = null;
  }, t3.i && t3.i !== e2 && t3.componentWillUnmount(), n2.__v ? (t3.l || (t3.i = e2, t3.l = { nodeType: 1, parentNode: e2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t3.i.appendChild(n3);
  }, insertBefore: function(n3, e3) {
    this.childNodes.push(n3), t3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t3.i.removeChild(n3);
  } }), N$3(a$3(T$1, { context: t3.context }, n2.__v), t3.l)) : t3.l && t3.componentWillUnmount();
}
function I$2(n2, t3) {
  return a$3(j$2, { __v: n2, i: t3 });
}
(F$3.prototype = new p$4()).__e = function(n2) {
  var t3 = this, e2 = U$1(t3.__v), r2 = t3.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t3.props.revealOrder ? (r2.push(u2), M$2(t3, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, F$3.prototype.render = function(n2) {
  this.u = null, this.o = new Map();
  var t3 = w$4(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
  for (var e2 = t3.length; e2--; )
    this.o.set(t3[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, F$3.prototype.componentDidUpdate = F$3.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t3, e2) {
    M$2(n2, e2, t3);
  });
};
var W$1 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, P$2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, V$1 = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function z$2(n2, t3, e2) {
  return t3.__k == null && (t3.textContent = ""), N$3(n2, t3), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
function B$2(n2, t3, e2) {
  return O$3(n2, t3), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
p$4.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(p$4.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t3) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
  } });
});
var H$2 = n$3.event;
function Z$1() {
}
function Y$1() {
  return this.cancelBubble;
}
function $$2() {
  return this.defaultPrevented;
}
n$3.event = function(n2) {
  return H$2 && (n2 = H$2(n2)), n2.persist = Z$1, n2.isPropagationStopped = Y$1, n2.isDefaultPrevented = $$2, n2.nativeEvent = n2;
};
var q$1, G$2 = { configurable: true, get: function() {
  return this.class;
} }, J$3 = n$3.vnode;
n$3.vnode = function(n2) {
  var t3 = n2.type, e2 = n2.props, r2 = e2;
  if (typeof t3 == "string") {
    for (var u2 in r2 = {}, e2) {
      var o2 = e2[u2];
      u2 === "value" && "defaultValue" in e2 && o2 == null || (u2 === "defaultValue" && "value" in e2 && e2.value == null ? u2 = "value" : u2 === "download" && o2 === true ? o2 = "" : /ondoubleclick/i.test(u2) ? u2 = "ondblclick" : /^onchange(textarea|input)/i.test(u2 + t3) && !V$1(e2.type) ? u2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u2) ? u2 = u2.toLowerCase() : P$2.test(u2) ? u2 = u2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o2 === null && (o2 = void 0), r2[u2] = o2);
    }
    t3 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = w$4(e2.children).forEach(function(n3) {
      n3.props.selected = r2.value.indexOf(n3.props.value) != -1;
    })), t3 == "select" && r2.defaultValue != null && (r2.value = w$4(e2.children).forEach(function(n3) {
      n3.props.selected = r2.multiple ? r2.defaultValue.indexOf(n3.props.value) != -1 : r2.defaultValue == n3.props.value;
    })), n2.props = r2;
  }
  t3 && e2.class != e2.className && (G$2.enumerable = "className" in e2, e2.className != null && (r2.class = e2.className), Object.defineProperty(r2, "className", G$2)), n2.$$typeof = W$1, J$3 && J$3(n2);
};
var K$2 = n$3.__r;
n$3.__r = function(n2) {
  K$2 && K$2(n2), q$1 = n2.__c;
};
var Q$1 = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return q$1.__n[n2.__c].props.value;
} } } };
typeof performance == "object" && typeof performance.now == "function" ? performance.now.bind(performance) : function() {
  return Date.now();
};
function fn(n2) {
  return a$3.bind(null, n2);
}
function cn(n2) {
  return !!n2 && n2.$$typeof === W$1;
}
function an(n2) {
  return cn(n2) ? S$4.apply(null, arguments) : n2;
}
function sn(n2) {
  return !!n2.__k && (N$3(null, n2), true);
}
function hn(n2) {
  return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
}
var pn = function(n2, t3) {
  return n2(t3);
};
var e$1 = { useState: l$1, useReducer: p$2, useEffect: y$2, useLayoutEffect: h$2, useRef: s$2, useImperativeHandle: _$2, useMemo: d$2, useCallback: A$3, useContext: F$4, useDebugValue: T$2, version: "16.8.0", Children: k$1, render: z$2, hydrate: B$2, unmountComponentAtNode: sn, createPortal: I$2, createElement: a$3, createContext: q$3, createFactory: fn, cloneElement: an, createRef: h$4, Fragment: y$4, isValidElement: cn, findDOMNode: hn, Component: p$4, PureComponent: E$2, memo: g$2, forwardRef: x$1, unstable_batchedUpdates: pn, StrictMode: y$4, Suspense: L$2, SuspenseList: F$3, lazy: D$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Q$1 };
const componentListContext = q$3(void 0);
const useComponentList = () => F$4(componentListContext);
function u$1() {
  return (u$1 = Object.assign || function(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t3 = arguments[r2];
      for (var n2 in t3)
        Object.prototype.hasOwnProperty.call(t3, n2) && (e2[n2] = t3[n2]);
    }
    return e2;
  }).apply(this, arguments);
}
function c$1(e2, r2) {
  if (e2 == null)
    return {};
  var t3, n2, o2 = {}, a2 = Object.keys(e2);
  for (n2 = 0; n2 < a2.length; n2++)
    r2.indexOf(t3 = a2[n2]) >= 0 || (o2[t3] = e2[t3]);
  return o2;
}
function i$1(e2) {
  var t3 = s$2(e2), n2 = s$2(function(e3) {
    t3.current && t3.current(e3);
  });
  return t3.current = e2, n2.current;
}
var s$1 = function(e2, r2, t3) {
  return r2 === void 0 && (r2 = 0), t3 === void 0 && (t3 = 1), e2 > t3 ? t3 : e2 < r2 ? r2 : e2;
}, f$1 = function(e2) {
  return "touches" in e2;
}, v$1 = function(e2, r2, t3) {
  var n2 = e2.getBoundingClientRect(), o2 = f$1(r2) ? function(e3, r3) {
    for (var t4 = 0; t4 < e3.length; t4++)
      if (e3[t4].identifier === r3)
        return e3[t4];
    return e3[0];
  }(r2.touches, t3) : r2;
  return { left: s$1((o2.pageX - (n2.left + window.pageXOffset)) / n2.width), top: s$1((o2.pageY - (n2.top + window.pageYOffset)) / n2.height) };
}, d$1 = function(e2) {
  !f$1(e2) && e2.preventDefault();
}, h$1 = e$1.memo(function(o2) {
  var a2 = o2.onMove, l2 = o2.onKey, s2 = c$1(o2, ["onMove", "onKey"]), h2 = s$2(null), m2 = i$1(a2), g2 = i$1(l2), p2 = s$2(null), b2 = s$2(false), _2 = d$2(function() {
    var e2 = function(e3) {
      d$1(e3), (f$1(e3) ? e3.touches.length > 0 : e3.buttons > 0) && h2.current ? m2(v$1(h2.current, e3, p2.current)) : t3(false);
    }, r2 = function() {
      return t3(false);
    };
    function t3(t4) {
      var n2 = b2.current, o3 = t4 ? self.addEventListener : self.removeEventListener;
      o3(n2 ? "touchmove" : "mousemove", e2), o3(n2 ? "touchend" : "mouseup", r2);
    }
    return [function(e3) {
      var r3 = e3.nativeEvent, n2 = h2.current;
      if (n2 && (d$1(r3), !function(e4, r4) {
        return r4 && !f$1(e4);
      }(r3, b2.current) && n2)) {
        if (f$1(r3)) {
          b2.current = true;
          var o3 = r3.changedTouches || [];
          o3.length && (p2.current = o3[0].identifier);
        }
        n2.focus(), m2(v$1(n2, r3, p2.current)), t3(true);
      }
    }, function(e3) {
      var r3 = e3.which || e3.keyCode;
      r3 < 37 || r3 > 40 || (e3.preventDefault(), g2({ left: r3 === 39 ? 0.05 : r3 === 37 ? -0.05 : 0, top: r3 === 40 ? 0.05 : r3 === 38 ? -0.05 : 0 }));
    }, t3];
  }, [g2, m2]), x2 = _2[0], C2 = _2[1], E2 = _2[2];
  return y$2(function() {
    return E2;
  }, [E2]), e$1.createElement("div", u$1({}, s2, { onTouchStart: x2, onMouseDown: x2, className: "react-colorful__interactive", ref: h2, onKeyDown: C2, tabIndex: 0, role: "slider" }));
}), m$1 = function(e2) {
  return e2.filter(Boolean).join(" ");
}, g$1 = function(r2) {
  var t3 = r2.color, n2 = r2.left, o2 = r2.top, a2 = o2 === void 0 ? 0.5 : o2, l2 = m$1(["react-colorful__pointer", r2.className]);
  return e$1.createElement("div", { className: l2, style: { top: 100 * a2 + "%", left: 100 * n2 + "%" } }, e$1.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t3 } }));
}, p$1 = function(e2, r2, t3) {
  return r2 === void 0 && (r2 = 0), t3 === void 0 && (t3 = Math.pow(10, r2)), Math.round(t3 * e2) / t3;
}, _$1 = function(e2) {
  return e2[0] === "#" && (e2 = e2.substr(1)), e2.length < 6 ? { r: parseInt(e2[0] + e2[0], 16), g: parseInt(e2[1] + e2[1], 16), b: parseInt(e2[2] + e2[2], 16), a: 1 } : { r: parseInt(e2.substr(0, 2), 16), g: parseInt(e2.substr(2, 2), 16), b: parseInt(e2.substr(4, 2), 16), a: 1 };
}, M$1 = function(e2) {
  var r2 = e2.s, t3 = e2.v, n2 = e2.a, o2 = (200 - r2) * t3 / 100;
  return { h: p$1(e2.h), s: p$1(o2 > 0 && o2 < 200 ? r2 * t3 / 100 / (o2 <= 100 ? o2 : 200 - o2) * 100 : 0), l: p$1(o2 / 2), a: p$1(n2, 2) };
}, N$1 = function(e2) {
  var r2 = M$1(e2);
  return "hsl(" + r2.h + ", " + r2.s + "%, " + r2.l + "%)";
}, y$1 = function(e2) {
  var r2 = e2.h, t3 = e2.s, n2 = e2.v, o2 = e2.a;
  r2 = r2 / 360 * 6, t3 /= 100, n2 /= 100;
  var a2 = Math.floor(r2), l2 = n2 * (1 - t3), u2 = n2 * (1 - (r2 - a2) * t3), c2 = n2 * (1 - (1 - r2 + a2) * t3), i2 = a2 % 6;
  return { r: p$1(255 * [n2, u2, l2, l2, c2, n2][i2]), g: p$1(255 * [c2, n2, n2, u2, l2, l2][i2]), b: p$1(255 * [l2, l2, c2, n2, n2, u2][i2]), a: p$1(o2, 2) };
}, j$1 = function(e2) {
  var r2 = e2.toString(16);
  return r2.length < 2 ? "0" + r2 : r2;
}, z$1 = function(e2) {
  var r2 = e2.r, t3 = e2.g, n2 = e2.b, o2 = e2.a, a2 = Math.max(r2, t3, n2), l2 = a2 - Math.min(r2, t3, n2), u2 = l2 ? a2 === r2 ? (t3 - n2) / l2 : a2 === t3 ? 2 + (n2 - r2) / l2 : 4 + (r2 - t3) / l2 : 0;
  return { h: p$1(60 * (u2 < 0 ? u2 + 6 : u2)), s: p$1(a2 ? l2 / a2 * 100 : 0), v: p$1(a2 / 255 * 100), a: o2 };
}, K$1 = e$1.memo(function(r2) {
  var t3 = r2.hue, n2 = r2.onChange, o2 = m$1(["react-colorful__hue", r2.className]);
  return e$1.createElement("div", { className: o2 }, e$1.createElement(h$1, { onMove: function(e2) {
    n2({ h: 360 * e2.left });
  }, onKey: function(e2) {
    n2({ h: s$1(t3 + 360 * e2.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuetext": p$1(t3) }, e$1.createElement(g$1, { className: "react-colorful__hue-pointer", left: t3 / 360, color: N$1({ h: t3, s: 100, v: 100, a: 1 }) })));
}), L$1 = e$1.memo(function(r2) {
  var t3 = r2.hsva, n2 = r2.onChange, o2 = { backgroundColor: N$1({ h: t3.h, s: 100, v: 100, a: 1 }) };
  return e$1.createElement("div", { className: "react-colorful__saturation", style: o2 }, e$1.createElement(h$1, { onMove: function(e2) {
    n2({ s: 100 * e2.left, v: 100 - 100 * e2.top });
  }, onKey: function(e2) {
    n2({ s: s$1(t3.s + 100 * e2.left, 0, 100), v: s$1(t3.v - 100 * e2.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + p$1(t3.s) + "%, Brightness " + p$1(t3.v) + "%" }, e$1.createElement(g$1, { className: "react-colorful__saturation-pointer", top: 1 - t3.v / 100, left: t3.s / 100, color: N$1(t3) })));
}), A$1 = function(e2, r2) {
  if (e2 === r2)
    return true;
  for (var t3 in e2)
    if (e2[t3] !== r2[t3])
      return false;
  return true;
};
function S$1(e2, t3, l2) {
  var u2 = i$1(l2), c2 = l$1(function() {
    return e2.toHsva(t3);
  }), s2 = c2[0], f2 = c2[1], v2 = s$2({ color: t3, hsva: s2 });
  y$2(function() {
    if (!e2.equal(t3, v2.current.color)) {
      var r2 = e2.toHsva(t3);
      v2.current = { hsva: r2, color: t3 }, f2(r2);
    }
  }, [t3, e2]), y$2(function() {
    var r2;
    A$1(s2, v2.current.hsva) || e2.equal(r2 = e2.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r2 }, u2(r2));
  }, [s2, e2, u2]);
  var d2 = A$3(function(e3) {
    f2(function(r2) {
      return Object.assign({}, r2, e3);
    });
  }, []);
  return [s2, d2];
}
var F$2, P$1 = typeof window != "undefined" ? h$2 : y$2, X$1 = function() {
  return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : void 0;
}, R$1 = function() {
  P$1(function() {
    if (typeof document != "undefined" && !F$2) {
      (F$2 = document.createElement("style")).innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`;
      var e2 = X$1();
      e2 && F$2.setAttribute("nonce", e2), document.head.appendChild(F$2);
    }
  }, []);
}, $$1 = function(r2) {
  var t3 = r2.className, n2 = r2.colorModel, o2 = r2.color, a2 = o2 === void 0 ? n2.defaultColor : o2, l2 = r2.onChange, i2 = c$1(r2, ["className", "colorModel", "color", "onChange"]);
  R$1();
  var s2 = S$1(n2, a2, l2), f2 = s2[0], v2 = s2[1], d2 = m$1(["react-colorful", t3]);
  return e$1.createElement("div", u$1({}, i2, { className: d2 }), e$1.createElement(L$1, { hsva: f2, onChange: v2 }), e$1.createElement(K$1, { hue: f2.h, onChange: v2, className: "react-colorful__last-control" }));
}, G$1 = { defaultColor: "000", toHsva: function(e2) {
  return z$1(_$1(e2));
}, fromHsva: function(e2) {
  return t3 = (r2 = y$1(e2)).g, n2 = r2.b, "#" + j$1(r2.r) + j$1(t3) + j$1(n2);
  var r2, t3, n2;
}, equal: function(e2, r2) {
  return e2.toLowerCase() === r2.toLowerCase() || A$1(_$1(e2), _$1(r2));
} }, J$2 = function(r2) {
  return e$1.createElement($$1, u$1({}, r2, { colorModel: G$1 }));
};
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
const toThenable = (fn2) => (input) => {
  try {
    const result = fn2(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const persist = (config, options) => (set, get, api) => {
  const {
    name,
    getStorage = () => localStorage,
    serialize = JSON.stringify,
    deserialize = JSON.parse,
    blacklist,
    whitelist,
    onRehydrateStorage,
    version = 0,
    migrate,
    merge: merge2 = (persistedState, currentState) => __spreadValues2(__spreadValues2({}, currentState), persistedState)
  } = options || {};
  let storage;
  try {
    storage = getStorage();
  } catch (e2) {
  }
  if (!storage) {
    return config((...args) => {
      console.warn(`Persist middleware: unable to update ${name}, the given storage is currently unavailable.`);
      set(...args);
    }, get, api);
  }
  const thenableSerialize = toThenable(serialize);
  const setItem = () => {
    const state = __spreadValues2({}, get());
    if (whitelist) {
      Object.keys(state).forEach((key) => {
        !whitelist.includes(key) && delete state[key];
      });
    }
    if (blacklist) {
      blacklist.forEach((key) => delete state[key]);
    }
    let errorInSync;
    const thenable = thenableSerialize({ state, version }).then((serializedValue) => storage.setItem(name, serializedValue)).catch((e2) => {
      errorInSync = e2;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config((...args) => {
    set(...args);
    void setItem();
  }, get, api);
  let stateFromStorage;
  const postRehydrationCallback = (onRehydrateStorage == null ? void 0 : onRehydrateStorage(get())) || void 0;
  toThenable(storage.getItem.bind(storage))(name).then((storageValue) => {
    if (storageValue) {
      return deserialize(storageValue);
    }
  }).then((deserializedStorageValue) => {
    if (deserializedStorageValue) {
      if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== version) {
        if (migrate) {
          return migrate(deserializedStorageValue.state, deserializedStorageValue.version);
        }
        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
      } else {
        return deserializedStorageValue.state;
      }
    }
  }).then((migratedState) => {
    stateFromStorage = merge2(migratedState, configResult);
    set(stateFromStorage, true);
    return setItem();
  }).then(() => {
    postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
  }).catch((e2) => {
    postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
  });
  return stateFromStorage || configResult;
};
const colors = create(persist((set, get) => {
  var _a, _b, _c, _d, _e;
  return {
    "--color-base": (_b = (_a = get()) == null ? void 0 : _a["--color-base"]) != null ? _b : "",
    "--color-base2": (_c = get == null ? void 0 : get["--color-base2"]) != null ? _c : "",
    "--color-text": (_d = get == null ? void 0 : get["--color-text"]) != null ? _d : "",
    "--color-extra-light": (_e = get == null ? void 0 : get["--color-extra-light"]) != null ? _e : "",
    setColor: (key, value) => set({
      [key]: value
    }),
    resetColors: () => {
      Object.keys(get()).forEach((key) => {
        if (key.startsWith("--")) {
          document.documentElement.style.removeProperty(key);
          set({
            [key]: getComputedStyle(document.documentElement).getPropertyValue(key)
          });
        }
      });
    }
  };
}, {
  name: "dokjs-colors-storage",
  getStorage: () => localStorage
}));
colors.subscribe((state) => {
  Object.keys(state).forEach((key) => {
    if (key.startsWith("--")) {
      document.documentElement.style.setProperty(key, state[key]);
    }
  });
});
const isEmptyObject = (obj) => obj && obj instanceof Object && Object.keys(obj).length === 0 && obj.constructor === Object;
const isEmptyArray = (obj) => obj && obj instanceof Array && obj.length === 0;
const EMPTY_OBJECT = {};
const EMPTY_ARRAY = [];
const MISSING = Symbol();
const produceResult = (store, producer) => {
  const { getState } = store;
  try {
    const result = producer(getState());
    if (result !== void 0) {
      if (isEmptyObject(result)) {
        return EMPTY_OBJECT;
      }
      if (isEmptyArray(result)) {
        return EMPTY_ARRAY;
      }
      return result;
    } else {
      return MISSING;
    }
  } catch (e2) {
    return MISSING;
  }
};
const compare = (result1, result2) => {
  if (result1 !== result2) {
    if (result1 instanceof Array && result2 instanceof Array) {
      if (result1.length === result2.length) {
        const hasUnequalValue = result1.findIndex((value, index) => !compare(result2[index], value)) > -1;
        return !hasUnequalValue;
      }
    }
    return false;
  }
  return true;
};
const createStoreHook = (store) => {
  const useStore = (producer) => {
    const [currentState, setCurrentState] = l$1(() => produceResult(store, producer));
    let unsub;
    const promise = new Promise((resolve) => {
      const result = produceResult(store, producer);
      if (!compare(result, currentState)) {
        setCurrentState(result);
      }
      unsub = store.subscribe(() => {
        const value = produceResult(store, producer);
        if (!compare(value, currentState)) {
          setCurrentState(value);
          resolve(void 0);
          unsub();
        }
      });
    });
    y$2(() => () => unsub());
    if (currentState === MISSING) {
      throw promise;
    }
    return currentState;
  };
  return useStore;
};
const useColors = createStoreHook(colors);
const ColorPicker = (props) => {
  const { color, setColor } = props;
  return /* @__PURE__ */ a$3("div", {
    className: "color-picker"
  }, /* @__PURE__ */ a$3(J$2, {
    color,
    onChange: setColor
  }));
};
const Color = (props) => {
  const { name } = props;
  const [color, setColor, resetColors] = useColors((state) => [
    state[name],
    state.setColor,
    state.resetColors
  ]);
  if (color === "") {
    resetColors();
  }
  return /* @__PURE__ */ a$3("div", {
    className: "color"
  }, /* @__PURE__ */ a$3("figure", null, /* @__PURE__ */ a$3("div", {
    style: {
      backgroundColor: color
    }
  }), /* @__PURE__ */ a$3("label", null, name)), /* @__PURE__ */ a$3(ColorPicker, {
    color,
    setColor: (value) => setColor(name, value)
  }));
};
const Colors = () => {
  const [show, setShow] = l$1(false);
  const colorRef = s$2();
  y$2(() => {
    if (show) {
      const handler = (e2) => {
        if (!colorRef.current.contains(e2.target)) {
          setShow(false);
        }
      };
      document.body.addEventListener("click", handler);
      return () => {
        document.body.removeEventListener("click", handler);
      };
    }
  }, [show]);
  const [colorNames, resetColors] = useColors((state) => [
    Object.keys(state).filter((key) => key.startsWith("--")),
    state.resetColors
  ]);
  return /* @__PURE__ */ a$3("div", {
    className: "colors",
    ref: colorRef
  }, /* @__PURE__ */ a$3("button", {
    className: "colors-toggle",
    onClick: () => setShow((s2) => !s2)
  }, /* @__PURE__ */ a$3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ a$3("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }))), show && /* @__PURE__ */ a$3("div", {
    className: "colors-wrapper"
  }, /* @__PURE__ */ a$3("div", null, /* @__PURE__ */ a$3("button", {
    onClick: resetColors
  }, "reset")), colorNames.map((name) => {
    return /* @__PURE__ */ a$3(Color, {
      key: name,
      name
    });
  })));
};
const Header = () => {
  const { Logo: Logo2, Search: Search2 } = useComponentList();
  return /* @__PURE__ */ a$3(y$4, null, /* @__PURE__ */ a$3(Logo2, null), /* @__PURE__ */ a$3("header", null, /* @__PURE__ */ a$3(L$2, {
    fallback: "..."
  }, /* @__PURE__ */ a$3(Search2, null)), /* @__PURE__ */ a$3(Colors, null)));
};
const App = () => {
  const { Header: Header2, Sidebar: Sidebar2, Main: Main2, BreadCrumbs: BreadCrumbs2 } = useComponentList();
  return /* @__PURE__ */ a$3(y$4, null, /* @__PURE__ */ a$3(Header2, null), /* @__PURE__ */ a$3(Sidebar2, null), /* @__PURE__ */ a$3("div", {
    className: "content"
  }, /* @__PURE__ */ a$3(L$2, {
    fallback: ""
  }, /* @__PURE__ */ a$3(BreadCrumbs2, null)), /* @__PURE__ */ a$3("div", {
    className: "main-wrapper"
  }, /* @__PURE__ */ a$3(L$2, {
    fallback: "..."
  }, /* @__PURE__ */ a$3(Main2, null)))));
};
const Logo = () => {
  return /* @__PURE__ */ a$3("figure", {
    className: "logo"
  }, /* @__PURE__ */ a$3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ a$3("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  })), "okument.js");
};
var lib = {};
var search;
Object.defineProperty(lib, "__esModule", { value: true });
var t$1 = function(t3) {
  return function(r2) {
    return t3 == null ? void 0 : t3[r2];
  };
}({ "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }), r$1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof commonjsGlobal != "undefined" ? commonjsGlobal : typeof self != "undefined" ? self : {}, e = typeof r$1 == "object" && r$1 && r$1.Object === Object && r$1, n$1 = typeof self == "object" && self && self.Object === Object && self, o = e || n$1 || Function("return this")(), a = o.Symbol;
var i = function(t3, r2) {
  for (var e2 = -1, n2 = t3 == null ? 0 : t3.length, o2 = Array(n2); ++e2 < n2; )
    o2[e2] = r2(t3[e2], e2, t3);
  return o2;
}, u = Array.isArray, c = Object.prototype, s = c.hasOwnProperty, f = c.toString, l = a ? a.toStringTag : void 0;
var p = function(t3) {
  var r2 = s.call(t3, l), e2 = t3[l];
  try {
    t3[l] = void 0;
    var n2 = true;
  } catch (t4) {
  }
  var o2 = f.call(t3);
  return n2 && (r2 ? t3[l] = e2 : delete t3[l]), o2;
}, v = Object.prototype.toString;
var h = function(t3) {
  return v.call(t3);
}, y = a ? a.toStringTag : void 0;
var d = function(t3) {
  return t3 == null ? t3 === void 0 ? "[object Undefined]" : "[object Null]" : y && y in Object(t3) ? p(t3) : h(t3);
};
var _ = function(t3) {
  return t3 != null && typeof t3 == "object";
};
var g = function(t3) {
  return typeof t3 == "symbol" || _(t3) && d(t3) == "[object Symbol]";
}, b = a ? a.prototype : void 0, O = b ? b.toString : void 0;
var j = function t(r2) {
  if (typeof r2 == "string")
    return r2;
  if (u(r2))
    return i(r2, t) + "";
  if (g(r2))
    return O ? O.call(r2) : "";
  var e2 = r2 + "";
  return e2 == "0" && 1 / r2 == -1 / 0 ? "-0" : e2;
};
var m = function(t3) {
  return t3 == null ? "" : j(t3);
}, x = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, w = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
var A = function(r2) {
  return (r2 = m(r2)) && r2.replace(x, t$1).replace(w, "");
}, S = /[\\^$.*+?()[\]{}|]/g, z = RegExp(S.source);
var E$1 = function(t3) {
  return (t3 = m(t3)) && z.test(t3) ? t3.replace(S, "\\$&") : t3;
};
var $ = function(t3) {
  var r2 = typeof t3;
  return t3 != null && (r2 == "object" || r2 == "function");
};
var I$1, N = function(t3) {
  if (!$(t3))
    return false;
  var r2 = d(t3);
  return r2 == "[object Function]" || r2 == "[object GeneratorFunction]" || r2 == "[object AsyncFunction]" || r2 == "[object Proxy]";
}, T = o["__core-js_shared__"], U = (I$1 = /[^.]+$/.exec(T && T.keys && T.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I$1 : "";
var C$1 = function(t3) {
  return !!U && U in t3;
}, L = Function.prototype.toString;
var P = function(t3) {
  if (t3 != null) {
    try {
      return L.call(t3);
    } catch (t4) {
    }
    try {
      return t3 + "";
    } catch (t4) {
    }
  }
  return "";
}, R = /^\[object .+?Constructor\]$/, F$1 = Function.prototype, k = Object.prototype, G = F$1.toString, D = k.hasOwnProperty, M = RegExp("^" + G.call(D).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var J$1 = function(t3) {
  return !(!$(t3) || C$1(t3)) && (N(t3) ? M : R).test(P(t3));
};
var Y = function(t3, r2) {
  return t3 == null ? void 0 : t3[r2];
};
var Z = function(t3, r2) {
  var e2 = Y(t3, r2);
  return J$1(e2) ? e2 : void 0;
}, H$1 = Z(Object, "create");
var K = function() {
  this.__data__ = H$1 ? H$1(null) : {}, this.size = 0;
};
var W = function(t3) {
  var r2 = this.has(t3) && delete this.__data__[t3];
  return this.size -= r2 ? 1 : 0, r2;
}, q = Object.prototype.hasOwnProperty;
var B$1 = function(t3) {
  var r2 = this.__data__;
  if (H$1) {
    var e2 = r2[t3];
    return e2 === "__lodash_hash_undefined__" ? void 0 : e2;
  }
  return q.call(r2, t3) ? r2[t3] : void 0;
}, Q = Object.prototype.hasOwnProperty;
var V = function(t3) {
  var r2 = this.__data__;
  return H$1 ? r2[t3] !== void 0 : Q.call(r2, t3);
};
var X = function(t3, r2) {
  var e2 = this.__data__;
  return this.size += this.has(t3) ? 0 : 1, e2[t3] = H$1 && r2 === void 0 ? "__lodash_hash_undefined__" : r2, this;
};
function tt(t3) {
  var r2 = -1, e2 = t3 == null ? 0 : t3.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t3[r2];
    this.set(n2[0], n2[1]);
  }
}
tt.prototype.clear = K, tt.prototype.delete = W, tt.prototype.get = B$1, tt.prototype.has = V, tt.prototype.set = X;
var rt = tt;
var et = function() {
  this.__data__ = [], this.size = 0;
};
var nt = function(t3, r2) {
  return t3 === r2 || t3 != t3 && r2 != r2;
};
var ot = function(t3, r2) {
  for (var e2 = t3.length; e2--; )
    if (nt(t3[e2][0], r2))
      return e2;
  return -1;
}, at = Array.prototype.splice;
var it = function(t3) {
  var r2 = this.__data__, e2 = ot(r2, t3);
  return !(e2 < 0) && (e2 == r2.length - 1 ? r2.pop() : at.call(r2, e2, 1), --this.size, true);
};
var ut = function(t3) {
  var r2 = this.__data__, e2 = ot(r2, t3);
  return e2 < 0 ? void 0 : r2[e2][1];
};
var ct = function(t3) {
  return ot(this.__data__, t3) > -1;
};
var st = function(t3, r2) {
  var e2 = this.__data__, n2 = ot(e2, t3);
  return n2 < 0 ? (++this.size, e2.push([t3, r2])) : e2[n2][1] = r2, this;
};
function ft(t3) {
  var r2 = -1, e2 = t3 == null ? 0 : t3.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t3[r2];
    this.set(n2[0], n2[1]);
  }
}
ft.prototype.clear = et, ft.prototype.delete = it, ft.prototype.get = ut, ft.prototype.has = ct, ft.prototype.set = st;
var lt = ft, pt = Z(o, "Map");
var vt = function() {
  this.size = 0, this.__data__ = { hash: new rt(), map: new (pt || lt)(), string: new rt() };
};
var ht = function(t3) {
  var r2 = typeof t3;
  return r2 == "string" || r2 == "number" || r2 == "symbol" || r2 == "boolean" ? t3 !== "__proto__" : t3 === null;
};
var yt = function(t3, r2) {
  var e2 = t3.__data__;
  return ht(r2) ? e2[typeof r2 == "string" ? "string" : "hash"] : e2.map;
};
var dt = function(t3) {
  var r2 = yt(this, t3).delete(t3);
  return this.size -= r2 ? 1 : 0, r2;
};
var _t = function(t3) {
  return yt(this, t3).get(t3);
};
var gt = function(t3) {
  return yt(this, t3).has(t3);
};
var bt = function(t3, r2) {
  var e2 = yt(this, t3), n2 = e2.size;
  return e2.set(t3, r2), this.size += e2.size == n2 ? 0 : 1, this;
};
function Ot(t3) {
  var r2 = -1, e2 = t3 == null ? 0 : t3.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t3[r2];
    this.set(n2[0], n2[1]);
  }
}
Ot.prototype.clear = vt, Ot.prototype.delete = dt, Ot.prototype.get = _t, Ot.prototype.has = gt, Ot.prototype.set = bt;
var jt = Ot;
function mt(t3, r2) {
  if (typeof t3 != "function" || r2 != null && typeof r2 != "function")
    throw new TypeError("Expected a function");
  var e2 = function() {
    var n2 = arguments, o2 = r2 ? r2.apply(this, n2) : n2[0], a2 = e2.cache;
    if (a2.has(o2))
      return a2.get(o2);
    var i2 = t3.apply(this, n2);
    return e2.cache = a2.set(o2, i2) || a2, i2;
  };
  return e2.cache = new (mt.Cache || jt)(), e2;
}
mt.Cache = jt;
var xt = mt, wt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, At = /^\w*$/;
var St = function(t3, r2) {
  if (u(t3))
    return false;
  var e2 = typeof t3;
  return !(e2 != "number" && e2 != "symbol" && e2 != "boolean" && t3 != null && !g(t3)) || (At.test(t3) || !wt.test(t3) || r2 != null && t3 in Object(r2));
};
var zt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Et = /\\(\\)?/g, $t = function(t3) {
  var r2 = xt(t3, function(t4) {
    return e2.size === 500 && e2.clear(), t4;
  }), e2 = r2.cache;
  return r2;
}(function(t3) {
  var r2 = [];
  return t3.charCodeAt(0) === 46 && r2.push(""), t3.replace(zt, function(t4, e2, n2, o2) {
    r2.push(n2 ? o2.replace(Et, "$1") : e2 || t4);
  }), r2;
});
var It = function(t3, r2) {
  return u(t3) ? t3 : St(t3, r2) ? [t3] : $t(m(t3));
};
var Nt = function(t3) {
  if (typeof t3 == "string" || g(t3))
    return t3;
  var r2 = t3 + "";
  return r2 == "0" && 1 / t3 == -1 / 0 ? "-0" : r2;
};
var Tt = function(t3, r2) {
  for (var e2 = 0, n2 = (r2 = It(r2, t3)).length; t3 != null && e2 < n2; )
    t3 = t3[Nt(r2[e2++])];
  return e2 && e2 == n2 ? t3 : void 0;
};
var Ut = function(t3, r2, e2) {
  var n2 = t3 == null ? void 0 : Tt(t3, r2);
  return n2 === void 0 ? e2 : n2;
}, Ct = /\s/;
var Lt = function(t3) {
  for (var r2 = t3.length; r2-- && Ct.test(t3.charAt(r2)); )
    ;
  return r2;
}, Pt = /^\s+/;
var Rt = function(t3) {
  return t3 ? t3.slice(0, Lt(t3) + 1).replace(Pt, "") : t3;
}, Ft = /^[-+]0x[0-9a-f]+$/i, kt = /^0b[01]+$/i, Gt = /^0o[0-7]+$/i, Dt = parseInt;
var Mt = function(t3) {
  if (typeof t3 == "number")
    return t3;
  if (g(t3))
    return NaN;
  if ($(t3)) {
    var r2 = typeof t3.valueOf == "function" ? t3.valueOf() : t3;
    t3 = $(r2) ? r2 + "" : r2;
  }
  if (typeof t3 != "string")
    return t3 === 0 ? t3 : +t3;
  t3 = Rt(t3);
  var e2 = kt.test(t3);
  return e2 || Gt.test(t3) ? Dt(t3.slice(2), e2 ? 2 : 8) : Ft.test(t3) ? NaN : +t3;
};
var Jt = function(t3) {
  return t3 ? (t3 = Mt(t3)) === 1 / 0 || t3 === -1 / 0 ? 17976931348623157e292 * (t3 < 0 ? -1 : 1) : t3 == t3 ? t3 : 0 : t3 === 0 ? t3 : 0;
};
var Yt = function(t3) {
  var r2 = Jt(t3), e2 = r2 % 1;
  return r2 == r2 ? e2 ? r2 - e2 : r2 : 0;
}, Zt = o.isFinite, Ht = Math.min;
var Kt = function(t3) {
  var r2 = Math[t3];
  return function(t4, e2) {
    if (t4 = Mt(t4), (e2 = e2 == null ? 0 : Ht(Yt(e2), 292)) && Zt(t4)) {
      var n2 = (m(t4) + "e").split("e"), o2 = r2(n2[0] + "e" + (+n2[1] + e2));
      return +((n2 = (m(o2) + "e").split("e"))[0] + "e" + (+n2[1] - e2));
    }
    return r2(t4);
  };
}("round");
function Wt(t3) {
  return A(t3).replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();
}
function qt(t3) {
  return Wt(E$1(t3)).match(/[\p{L}\d]+/gimu) || [];
}
const Bt = xt((t3, r2) => {
  if (!t3 || t3.length === 0 || !r2 || r2.length === 0)
    return [];
  const e2 = /\[(.*)]/;
  return t3.map((t4) => r2.map((r3) => {
    const n2 = Ut(e2.exec(r3), "1"), o2 = Ut(t4, r3.replace(e2, ""));
    return n2 || o2 != null && typeof o2 != "function" ? n2 ? o2.map((t5) => Ut(t5, n2)) : Array.isArray(o2) || typeof o2 == "object" ? JSON.stringify(o2) : o2 : "";
  }).reduce((t5, r3) => t5 + r3, "")).map((t4) => Wt(t4));
}), Qt = Bt, Vt = (t3, r2, e2) => {
  if (!t3)
    return 0;
  const n2 = e2.replace(/[^\p{L}\d]+/gimu, ""), o2 = r2.sort((t4, r3) => r3.length - t4.length).reduce((t4, r3) => t4.replace(new RegExp(r3, "gm"), ""), n2);
  return Kt(1 - o2.length / n2.length, 4);
};
lib.convertToSearchableStrings = Bt, lib.getScore = Vt, lib.indexDocuments = Qt, lib.normalize = Wt, search = lib.search = function(t3, r2, e2, n2 = {}) {
  if (!e2)
    return t3;
  const o2 = qt(e2);
  return Bt(t3, r2).map((r3, e3) => {
    const a2 = o2.filter((t4) => r3.indexOf(t4) > -1).length === o2.length;
    if (n2.withScore) {
      const n3 = Vt(a2, o2, r3);
      return { element: t3[e3], score: n3 };
    }
    return a2 ? t3[e3] : null;
  }).filter((t4) => t4);
}, lib.tokenize = qt;
const useDocs = createStoreHook(docs);
const useDocuments = () => useDocs((state) => state.documents);
const Search = () => {
  const { SearchInput: SearchInput2 } = useComponentList();
  const documents = Object.values(useDocuments());
  const handleQuery = A$3((query) => {
    const result = search(documents, ["title", "content"], query);
    console.log(result);
  }, [documents.length]);
  return /* @__PURE__ */ a$3("div", {
    className: "search"
  }, /* @__PURE__ */ a$3("button", {
    className: "go"
  }, /* @__PURE__ */ a$3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ a$3("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), /* @__PURE__ */ a$3("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ a$3(SearchInput2, {
    onChange: handleQuery
  }));
};
const SearchInput = (props) => {
  return /* @__PURE__ */ a$3("input", {
    placeholder: "Enter your search...",
    type: "text",
    onChange: (e2) => {
      var _a;
      (_a = props.onChange) == null ? void 0 : _a.call(props, e2.target.value);
    }
  });
};
const Sidebar = () => {
  const { SidebarMenu: SidebarMenu2 } = useComponentList();
  return /* @__PURE__ */ a$3("nav", {
    className: "sidebar"
  }, /* @__PURE__ */ a$3(L$2, {
    fallback: ""
  }, /* @__PURE__ */ a$3(SidebarMenu2, null)));
};
const SidebarLevel = (level) => {
  const { SidebarItem: SidebarItem2, SidebarCategory: SidebarCategory2 } = useComponentList();
  return /* @__PURE__ */ a$3("ul", null, Object.keys(level).map((key) => {
    const item = level[key];
    if (!item.children) {
      return /* @__PURE__ */ a$3(SidebarItem2, {
        key,
        item
      });
    } else {
      return /* @__PURE__ */ a$3(SidebarCategory2, {
        key,
        label: key,
        childNav: item.children
      });
    }
  }));
};
const SidebarCategory = (props) => {
  const { SidebarLevel: SidebarLevel2 } = useComponentList();
  return /* @__PURE__ */ a$3("li", {
    key: props.key,
    className: "navbar_category"
  }, /* @__PURE__ */ a$3("div", null, props.label), /* @__PURE__ */ a$3(SidebarLevel2, __spreadValues({}, props.childNav)));
};
const sidebarCollapsedState = create(persist((set, get) => {
  var _a, _b;
  return {
    isCollapsed: (_b = (_a = get()) == null ? void 0 : _a.isCollapsed) != null ? _b : {},
    setCollapsed: (path, producer) => {
      var _a2;
      return set({
        isCollapsed: {
          [path]: producer((_a2 = get()) == null ? void 0 : _a2.isCollapsed[path])
        }
      });
    }
  };
}, {
  name: "dokjs-collapsed-state",
  getStorage: () => localStorage
}));
const useSidebarCollapsedState = createStoreHook(sidebarCollapsedState);
var match = {};
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(preact_module);
var EMPTY$1 = {};
function assign(obj, props) {
  for (var i2 in props) {
    obj[i2] = props[i2];
  }
  return obj;
}
function exec(url, route2, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/, c2 = url.match(reg), matches = {}, ret;
  if (c2 && c2[1]) {
    var p2 = c2[1].split("&");
    for (var i2 = 0; i2 < p2.length; i2++) {
      var r2 = p2[i2].split("=");
      matches[decodeURIComponent(r2[0])] = decodeURIComponent(r2.slice(1).join("="));
    }
  }
  url = segmentize(url.replace(reg, ""));
  route2 = segmentize(route2 || "");
  var max = Math.max(url.length, route2.length);
  for (var i$12 = 0; i$12 < max; i$12++) {
    if (route2[i$12] && route2[i$12].charAt(0) === ":") {
      var param = route2[i$12].replace(/(^:|[+*?]+$)/g, ""), flags = (route2[i$12].match(/[+*?]+$/) || EMPTY$1)[0] || "", plus = ~flags.indexOf("+"), star = ~flags.indexOf("*"), val = url[i$12] || "";
      if (!val && !star && (flags.indexOf("?") < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$12).map(decodeURIComponent).join("/");
        break;
      }
    } else if (route2[i$12] !== url[i$12]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a2, b2) {
  return a2.rank < b2.rank ? 1 : a2.rank > b2.rank ? -1 : a2.index - b2.index;
}
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, "").split("/");
}
function rankSegment(segment) {
  return segment.charAt(0) == ":" ? 1 + "*+?".indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join("");
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0)
    type = "push";
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== "undefined" && history[type + "State"]) {
    history[type + "State"](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== "undefined" ? location : EMPTY;
  }
  return "" + (url.pathname || "") + (url.search || "");
}
function route(url, replace) {
  if (replace === void 0)
    replace = false;
  if (typeof url !== "string" && url.url) {
    replace = url.replace;
    url = url.url;
  }
  if (canRoute(url)) {
    setUrl(url, replace ? "replace" : "push");
  }
  return routeTo(url);
}
function canRoute(url) {
  for (var i2 = ROUTERS.length; i2--; ) {
    if (ROUTERS[i2].canRoute(url)) {
      return true;
    }
  }
  return false;
}
function routeTo(url) {
  var didRoute = false;
  for (var i2 = 0; i2 < ROUTERS.length; i2++) {
    if (ROUTERS[i2].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$12 = subscribers.length; i$12--; ) {
    subscribers[i$12](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute("href"), target = node.getAttribute("target");
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }
  return route(href);
}
function handleLinkClick(e2) {
  if (e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey || e2.button !== 0) {
    return;
  }
  routeFromLink(e2.currentTarget || e2.target || this);
  return prevent(e2);
}
function prevent(e2) {
  if (e2) {
    if (e2.stopImmediatePropagation) {
      e2.stopImmediatePropagation();
    }
    if (e2.stopPropagation) {
      e2.stopPropagation();
    }
    e2.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e2) {
  if (e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey || e2.button !== 0) {
    return;
  }
  var t3 = e2.target;
  do {
    if (String(t3.nodeName).toUpperCase() === "A" && t3.getAttribute("href")) {
      if (t3.hasAttribute("native")) {
        return;
      }
      if (routeFromLink(t3)) {
        return prevent(e2);
      }
    }
  } while (t3 = t3.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === "function") {
    if (!customHistory) {
      addEventListener("popstate", function() {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener("click", delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = function(Component$$1) {
  function Router2(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1)
    Router2.__proto__ = Component$$1;
  Router2.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router2.prototype.constructor = Router2;
  Router2.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  Router2.prototype.canRoute = function canRoute2(url) {
    var children = w$4(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  Router2.prototype.routeTo = function routeTo2(url) {
    this.setState({ url });
    var didRoute = this.canRoute(url);
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router2.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router2.prototype.componentDidMount = function componentDidMount() {
    var this$1$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function(location2) {
        this$1$1.routeTo("" + (location2.pathname || "") + (location2.search || ""));
      });
    }
    this.updating = false;
  };
  Router2.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === "function") {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router2.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router2.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router2.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function(vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = { url, matches };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return S$4(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router2.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(w$4(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === "function") {
        onChange({
          router: this,
          url,
          previous,
          active,
          current
        });
      }
    }
    return current;
  };
  return Router2;
}(p$4);
var Link$1 = function(props) {
  return a$3("a", assign({ onClick: handleLinkClick }, props));
};
var Route = function(props) {
  return a$3(props.component, props);
};
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link$1;
Router.exec = exec;
var preactRouter_es = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  subscribers,
  getCurrentUrl,
  route,
  Router,
  Route,
  Link: Link$1,
  exec,
  "default": Router
});
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(preactRouter_es);
Object.defineProperty(match, "__esModule", {
  value: true
});
var Link_1 = match.Link = match.Match = void 0;
var _extends$1 = Object.assign || function(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _preact = require$$0;
var _preactRouter = require$$1;
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i2 in obj) {
    if (keys.indexOf(i2) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i2))
      continue;
    target[i2] = obj[i2];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var Match = match.Match = function(_Component) {
  _inherits(Match2, _Component);
  function Match2() {
    var _temp, _this, _ret;
    _classCallCheck(this, Match2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function(url) {
      _this.nextUrl = url;
      _this.setState({});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  Match2.prototype.componentDidMount = function componentDidMount() {
    _preactRouter.subscribers.push(this.update);
  };
  Match2.prototype.componentWillUnmount = function componentWillUnmount() {
    _preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
  };
  Match2.prototype.render = function render(props) {
    var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(), path = url.replace(/\?.+$/, "");
    this.nextUrl = null;
    return props.children({
      url,
      path,
      matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
    });
  };
  return Match2;
}(_preact.Component);
var Link = function Link2(_ref) {
  var activeClassName = _ref.activeClassName, path = _ref.path, props = _objectWithoutProperties(_ref, ["activeClassName", "path"]);
  return (0, _preact.h)(Match, { path: path || props.href }, function(_ref2) {
    var matches = _ref2.matches;
    return (0, _preact.h)(_preactRouter.Link, _extends$1({}, props, { "class": [props.class || props.className, matches && activeClassName].filter(Boolean).join(" ") }));
  });
};
Link_1 = match.Link = Link;
var _default = match.default = Match;
Match.Link = Link;
const docsOptionsContext = q$3(void 0);
const useDocsOptions = () => F$4(docsOptionsContext);
const SidebarLink = (props) => {
  const { rootPath } = useDocsOptions();
  const { item, heading } = props;
  return /* @__PURE__ */ a$3(Link_1, {
    activeClassName: "active",
    href: join("/", rootPath, item.path, heading ? heading.slug : "")
  }, heading ? heading.text : item.title);
};
const SidebarItem = (props) => {
  const { item } = props;
  const { headings = [], depth, path } = item;
  const hasHeadings = headings.length > 0;
  const [collapsed, setCollapsed] = useSidebarCollapsedState((state) => {
    var _a;
    return [(_a = state.isCollapsed[path]) != null ? _a : depth > 1, state.setCollapsed];
  });
  return /* @__PURE__ */ a$3("li", {
    key: item.path + item.slug,
    className: "navbar-item"
  }, /* @__PURE__ */ a$3("div", {
    className: `navbar-item-label${!collapsed ? " open" : ""}`
  }, /* @__PURE__ */ a$3(SidebarLink, {
    item
  }), hasHeadings && /* @__PURE__ */ a$3("button", {
    onClick: () => setCollapsed(path, (isCollapsedBefore) => {
      return !(isCollapsedBefore != null ? isCollapsedBefore : depth > 1);
    })
  }, /* @__PURE__ */ a$3("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ a$3("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 11l7-7 7 7M5 19l7-7 7 7"
  })))), hasHeadings && !collapsed && /* @__PURE__ */ a$3("ul", null, headings.map((heading) => {
    return /* @__PURE__ */ a$3("li", {
      className: `sidebar-heading sidebar-heading-${heading.size}`
    }, /* @__PURE__ */ a$3(SidebarLink, {
      item,
      heading
    }));
  })));
};
const useNavbar = () => useDocs((state) => state.navbar);
const SidebarMenu = () => {
  const navbar = useNavbar();
  const { SidebarLevel: SidebarLevel2 } = useComponentList();
  return /* @__PURE__ */ a$3(SidebarLevel2, __spreadValues({}, navbar));
};
var dist = { exports: {} };
var entities$1 = {};
Object.defineProperty(entities$1, "__esModule", { value: true });
var entities = {
  Aacute: "\xC1",
  aacute: "\xE1",
  Abreve: "\u0102",
  abreve: "\u0103",
  ac: "\u223E",
  acd: "\u223F",
  acE: "\u223E\u0333",
  Acirc: "\xC2",
  acirc: "\xE2",
  acute: "\xB4",
  Acy: "\u0410",
  acy: "\u0430",
  AElig: "\xC6",
  aelig: "\xE6",
  af: "\u2061",
  Afr: "\u{1D504}",
  afr: "\u{1D51E}",
  Agrave: "\xC0",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  Alpha: "\u0391",
  alpha: "\u03B1",
  Amacr: "\u0100",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  AMP: "&",
  andand: "\u2A55",
  And: "\u2A53",
  and: "\u2227",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angmsd: "\u2221",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  Aogon: "\u0104",
  aogon: "\u0105",
  Aopf: "\u{1D538}",
  aopf: "\u{1D552}",
  apacir: "\u2A6F",
  ap: "\u2248",
  apE: "\u2A70",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  ApplyFunction: "\u2061",
  approx: "\u2248",
  approxeq: "\u224A",
  Aring: "\xC5",
  aring: "\xE5",
  Ascr: "\u{1D49C}",
  ascr: "\u{1D4B6}",
  Assign: "\u2254",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  Atilde: "\xC3",
  atilde: "\xE3",
  Auml: "\xC4",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  barvee: "\u22BD",
  barwed: "\u2305",
  Barwed: "\u2306",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  Bcy: "\u0411",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  Because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  Bfr: "\u{1D505}",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bNot: "\u2AED",
  bnot: "\u2310",
  Bopf: "\u{1D539}",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxbox: "\u29C9",
  boxdl: "\u2510",
  boxdL: "\u2555",
  boxDl: "\u2556",
  boxDL: "\u2557",
  boxdr: "\u250C",
  boxdR: "\u2552",
  boxDr: "\u2553",
  boxDR: "\u2554",
  boxh: "\u2500",
  boxH: "\u2550",
  boxhd: "\u252C",
  boxHd: "\u2564",
  boxhD: "\u2565",
  boxHD: "\u2566",
  boxhu: "\u2534",
  boxHu: "\u2567",
  boxhU: "\u2568",
  boxHU: "\u2569",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxul: "\u2518",
  boxuL: "\u255B",
  boxUl: "\u255C",
  boxUL: "\u255D",
  boxur: "\u2514",
  boxuR: "\u2558",
  boxUr: "\u2559",
  boxUR: "\u255A",
  boxv: "\u2502",
  boxV: "\u2551",
  boxvh: "\u253C",
  boxvH: "\u256A",
  boxVh: "\u256B",
  boxVH: "\u256C",
  boxvl: "\u2524",
  boxvL: "\u2561",
  boxVl: "\u2562",
  boxVL: "\u2563",
  boxvr: "\u251C",
  boxvR: "\u255E",
  boxVr: "\u255F",
  boxVR: "\u2560",
  bprime: "\u2035",
  breve: "\u02D8",
  Breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  Bscr: "\u212C",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsolb: "\u29C5",
  bsol: "\\",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  Bumpeq: "\u224E",
  bumpeq: "\u224F",
  Cacute: "\u0106",
  cacute: "\u0107",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  cap: "\u2229",
  Cap: "\u22D2",
  capcup: "\u2A47",
  capdot: "\u2A40",
  CapitalDifferentialD: "\u2145",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  Cayleys: "\u212D",
  ccaps: "\u2A4D",
  Ccaron: "\u010C",
  ccaron: "\u010D",
  Ccedil: "\xC7",
  ccedil: "\xE7",
  Ccirc: "\u0108",
  ccirc: "\u0109",
  Cconint: "\u2230",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  Cdot: "\u010A",
  cdot: "\u010B",
  cedil: "\xB8",
  Cedilla: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  CenterDot: "\xB7",
  cfr: "\u{1D520}",
  Cfr: "\u212D",
  CHcy: "\u0427",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  Chi: "\u03A7",
  chi: "\u03C7",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  CircleDot: "\u2299",
  circledR: "\xAE",
  circledS: "\u24C8",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  cir: "\u25CB",
  cirE: "\u29C3",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  Colon: "\u2237",
  Colone: "\u2A74",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  Congruent: "\u2261",
  conint: "\u222E",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  copf: "\u{1D554}",
  Copf: "\u2102",
  coprod: "\u2210",
  Coproduct: "\u2210",
  copy: "\xA9",
  COPY: "\xA9",
  copysr: "\u2117",
  CounterClockwiseContourIntegral: "\u2233",
  crarr: "\u21B5",
  cross: "\u2717",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  CupCap: "\u224D",
  cup: "\u222A",
  Cup: "\u22D3",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dagger: "\u2020",
  Dagger: "\u2021",
  daleth: "\u2138",
  darr: "\u2193",
  Darr: "\u21A1",
  dArr: "\u21D3",
  dash: "\u2010",
  Dashv: "\u2AE4",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  Dcaron: "\u010E",
  dcaron: "\u010F",
  Dcy: "\u0414",
  dcy: "\u0434",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  DD: "\u2145",
  dd: "\u2146",
  DDotrahd: "\u2911",
  ddotseq: "\u2A77",
  deg: "\xB0",
  Del: "\u2207",
  Delta: "\u0394",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  Dfr: "\u{1D507}",
  dfr: "\u{1D521}",
  dHar: "\u2965",
  dharl: "\u21C3",
  dharr: "\u21C2",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  diam: "\u22C4",
  diamond: "\u22C4",
  Diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  DifferentialD: "\u2146",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  DJcy: "\u0402",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  Dopf: "\u{1D53B}",
  dopf: "\u{1D555}",
  Dot: "\xA8",
  dot: "\u02D9",
  DotDot: "\u20DC",
  doteq: "\u2250",
  doteqdot: "\u2251",
  DotEqual: "\u2250",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrowBar: "\u2913",
  downarrow: "\u2193",
  DownArrow: "\u2193",
  Downarrow: "\u21D3",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVectorBar: "\u2956",
  DownLeftVector: "\u21BD",
  DownRightTeeVector: "\u295F",
  DownRightVectorBar: "\u2957",
  DownRightVector: "\u21C1",
  DownTeeArrow: "\u21A7",
  DownTee: "\u22A4",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  Dscr: "\u{1D49F}",
  dscr: "\u{1D4B9}",
  DScy: "\u0405",
  dscy: "\u0455",
  dsol: "\u29F6",
  Dstrok: "\u0110",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  DZcy: "\u040F",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  Eacute: "\xC9",
  eacute: "\xE9",
  easter: "\u2A6E",
  Ecaron: "\u011A",
  ecaron: "\u011B",
  Ecirc: "\xCA",
  ecirc: "\xEA",
  ecir: "\u2256",
  ecolon: "\u2255",
  Ecy: "\u042D",
  ecy: "\u044D",
  eDDot: "\u2A77",
  Edot: "\u0116",
  edot: "\u0117",
  eDot: "\u2251",
  ee: "\u2147",
  efDot: "\u2252",
  Efr: "\u{1D508}",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  Egrave: "\xC8",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  Element: "\u2208",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  Emacr: "\u0112",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  EmptySmallSquare: "\u25FB",
  emptyv: "\u2205",
  EmptyVerySmallSquare: "\u25AB",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  ENG: "\u014A",
  eng: "\u014B",
  ensp: "\u2002",
  Eogon: "\u0118",
  eogon: "\u0119",
  Eopf: "\u{1D53C}",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  Epsilon: "\u0395",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  Equal: "\u2A75",
  equals: "=",
  EqualTilde: "\u2242",
  equest: "\u225F",
  Equilibrium: "\u21CC",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erarr: "\u2971",
  erDot: "\u2253",
  escr: "\u212F",
  Escr: "\u2130",
  esdot: "\u2250",
  Esim: "\u2A73",
  esim: "\u2242",
  Eta: "\u0397",
  eta: "\u03B7",
  ETH: "\xD0",
  eth: "\xF0",
  Euml: "\xCB",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  Exists: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  ExponentialE: "\u2147",
  fallingdotseq: "\u2252",
  Fcy: "\u0424",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  Ffr: "\u{1D509}",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  Fopf: "\u{1D53D}",
  fopf: "\u{1D557}",
  forall: "\u2200",
  ForAll: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  Fouriertrf: "\u2131",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  Fscr: "\u2131",
  gacute: "\u01F5",
  Gamma: "\u0393",
  gamma: "\u03B3",
  Gammad: "\u03DC",
  gammad: "\u03DD",
  gap: "\u2A86",
  Gbreve: "\u011E",
  gbreve: "\u011F",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  gcirc: "\u011D",
  Gcy: "\u0413",
  gcy: "\u0433",
  Gdot: "\u0120",
  gdot: "\u0121",
  ge: "\u2265",
  gE: "\u2267",
  gEl: "\u2A8C",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  gescc: "\u2AA9",
  ges: "\u2A7E",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  Gfr: "\u{1D50A}",
  gfr: "\u{1D524}",
  gg: "\u226B",
  Gg: "\u22D9",
  ggg: "\u22D9",
  gimel: "\u2137",
  GJcy: "\u0403",
  gjcy: "\u0453",
  gla: "\u2AA5",
  gl: "\u2277",
  glE: "\u2A92",
  glj: "\u2AA4",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gnE: "\u2269",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  Gopf: "\u{1D53E}",
  gopf: "\u{1D558}",
  grave: "`",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gt: ">",
  GT: ">",
  Gt: "\u226B",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  Hacek: "\u02C7",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  HARDcy: "\u042A",
  hardcy: "\u044A",
  harrcir: "\u2948",
  harr: "\u2194",
  hArr: "\u21D4",
  harrw: "\u21AD",
  Hat: "^",
  hbar: "\u210F",
  Hcirc: "\u0124",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  Hopf: "\u210D",
  horbar: "\u2015",
  HorizontalLine: "\u2500",
  hscr: "\u{1D4BD}",
  Hscr: "\u210B",
  hslash: "\u210F",
  Hstrok: "\u0126",
  hstrok: "\u0127",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  hybull: "\u2043",
  hyphen: "\u2010",
  Iacute: "\xCD",
  iacute: "\xED",
  ic: "\u2063",
  Icirc: "\xCE",
  icirc: "\xEE",
  Icy: "\u0418",
  icy: "\u0438",
  Idot: "\u0130",
  IEcy: "\u0415",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  Ifr: "\u2111",
  Igrave: "\xCC",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  IJlig: "\u0132",
  ijlig: "\u0133",
  Imacr: "\u012A",
  imacr: "\u012B",
  image: "\u2111",
  ImaginaryI: "\u2148",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  Im: "\u2111",
  imof: "\u22B7",
  imped: "\u01B5",
  Implies: "\u21D2",
  incare: "\u2105",
  in: "\u2208",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  intcal: "\u22BA",
  int: "\u222B",
  Int: "\u222C",
  integers: "\u2124",
  Integral: "\u222B",
  intercal: "\u22BA",
  Intersection: "\u22C2",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  IOcy: "\u0401",
  iocy: "\u0451",
  Iogon: "\u012E",
  iogon: "\u012F",
  Iopf: "\u{1D540}",
  iopf: "\u{1D55A}",
  Iota: "\u0399",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  Iscr: "\u2110",
  isin: "\u2208",
  isindot: "\u22F5",
  isinE: "\u22F9",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  Itilde: "\u0128",
  itilde: "\u0129",
  Iukcy: "\u0406",
  iukcy: "\u0456",
  Iuml: "\xCF",
  iuml: "\xEF",
  Jcirc: "\u0134",
  jcirc: "\u0135",
  Jcy: "\u0419",
  jcy: "\u0439",
  Jfr: "\u{1D50D}",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  Jopf: "\u{1D541}",
  jopf: "\u{1D55B}",
  Jscr: "\u{1D4A5}",
  jscr: "\u{1D4BF}",
  Jsercy: "\u0408",
  jsercy: "\u0458",
  Jukcy: "\u0404",
  jukcy: "\u0454",
  Kappa: "\u039A",
  kappa: "\u03BA",
  kappav: "\u03F0",
  Kcedil: "\u0136",
  kcedil: "\u0137",
  Kcy: "\u041A",
  kcy: "\u043A",
  Kfr: "\u{1D50E}",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  KHcy: "\u0425",
  khcy: "\u0445",
  KJcy: "\u040C",
  kjcy: "\u045C",
  Kopf: "\u{1D542}",
  kopf: "\u{1D55C}",
  Kscr: "\u{1D4A6}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  Lacute: "\u0139",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  Lambda: "\u039B",
  lambda: "\u03BB",
  lang: "\u27E8",
  Lang: "\u27EA",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  Laplacetrf: "\u2112",
  laquo: "\xAB",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larr: "\u2190",
  Larr: "\u219E",
  lArr: "\u21D0",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  latail: "\u2919",
  lAtail: "\u291B",
  lat: "\u2AAB",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lBarr: "\u290E",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  Lcaron: "\u013D",
  lcaron: "\u013E",
  Lcedil: "\u013B",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  Lcy: "\u041B",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  lE: "\u2266",
  LeftAngleBracket: "\u27E8",
  LeftArrowBar: "\u21E4",
  leftarrow: "\u2190",
  LeftArrow: "\u2190",
  Leftarrow: "\u21D0",
  LeftArrowRightArrow: "\u21C6",
  leftarrowtail: "\u21A2",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVectorBar: "\u2959",
  LeftDownVector: "\u21C3",
  LeftFloor: "\u230A",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  LeftRightArrow: "\u2194",
  Leftrightarrow: "\u21D4",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  LeftRightVector: "\u294E",
  LeftTeeArrow: "\u21A4",
  LeftTee: "\u22A3",
  LeftTeeVector: "\u295A",
  leftthreetimes: "\u22CB",
  LeftTriangleBar: "\u29CF",
  LeftTriangle: "\u22B2",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVectorBar: "\u2958",
  LeftUpVector: "\u21BF",
  LeftVectorBar: "\u2952",
  LeftVector: "\u21BC",
  lEg: "\u2A8B",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  lescc: "\u2AA8",
  les: "\u2A7D",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  lessgtr: "\u2276",
  LessLess: "\u2AA1",
  lesssim: "\u2272",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  Lfr: "\u{1D50F}",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lHar: "\u2962",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  LJcy: "\u0409",
  ljcy: "\u0459",
  llarr: "\u21C7",
  ll: "\u226A",
  Ll: "\u22D8",
  llcorner: "\u231E",
  Lleftarrow: "\u21DA",
  llhard: "\u296B",
  lltri: "\u25FA",
  Lmidot: "\u013F",
  lmidot: "\u0140",
  lmoustache: "\u23B0",
  lmoust: "\u23B0",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lnE: "\u2268",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  LongLeftArrow: "\u27F5",
  Longleftarrow: "\u27F8",
  longleftrightarrow: "\u27F7",
  LongLeftRightArrow: "\u27F7",
  Longleftrightarrow: "\u27FA",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  LongRightArrow: "\u27F6",
  Longrightarrow: "\u27F9",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  Lopf: "\u{1D543}",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  Lscr: "\u2112",
  lsh: "\u21B0",
  Lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  Lstrok: "\u0141",
  lstrok: "\u0142",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  lt: "<",
  LT: "<",
  Lt: "\u226A",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  ltrPar: "\u2996",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  Map: "\u2905",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  Mcy: "\u041C",
  mcy: "\u043C",
  mdash: "\u2014",
  mDDot: "\u223A",
  measuredangle: "\u2221",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  midast: "*",
  midcir: "\u2AF0",
  mid: "\u2223",
  middot: "\xB7",
  minusb: "\u229F",
  minus: "\u2212",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  MinusPlus: "\u2213",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  Mopf: "\u{1D544}",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  Mscr: "\u2133",
  mstpos: "\u223E",
  Mu: "\u039C",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nabla: "\u2207",
  Nacute: "\u0143",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natural: "\u266E",
  naturals: "\u2115",
  natur: "\u266E",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  Ncaron: "\u0147",
  ncaron: "\u0148",
  Ncedil: "\u0145",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  Ncy: "\u041D",
  ncy: "\u043D",
  ndash: "\u2013",
  nearhk: "\u2924",
  nearr: "\u2197",
  neArr: "\u21D7",
  nearrow: "\u2197",
  ne: "\u2260",
  nedot: "\u2250\u0338",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: "\n",
  nexist: "\u2204",
  nexists: "\u2204",
  Nfr: "\u{1D511}",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  nGg: "\u22D9\u0338",
  ngsim: "\u2275",
  nGt: "\u226B\u20D2",
  ngt: "\u226F",
  ngtr: "\u226F",
  nGtv: "\u226B\u0338",
  nharr: "\u21AE",
  nhArr: "\u21CE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  NJcy: "\u040A",
  njcy: "\u045A",
  nlarr: "\u219A",
  nlArr: "\u21CD",
  nldr: "\u2025",
  nlE: "\u2266\u0338",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nLeftarrow: "\u21CD",
  nleftrightarrow: "\u21AE",
  nLeftrightarrow: "\u21CE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nLl: "\u22D8\u0338",
  nlsim: "\u2274",
  nLt: "\u226A\u20D2",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nLtv: "\u226A\u0338",
  nmid: "\u2224",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  nopf: "\u{1D55F}",
  Nopf: "\u2115",
  Not: "\u2AEC",
  not: "\xAC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  notin: "\u2209",
  notindot: "\u22F5\u0338",
  notinE: "\u22F9\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangle: "\u22EB",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  nparallel: "\u2226",
  npar: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  npre: "\u2AAF\u0338",
  nrarrc: "\u2933\u0338",
  nrarr: "\u219B",
  nrArr: "\u21CF",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nRightarrow: "\u21CF",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  Nscr: "\u{1D4A9}",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  Ntilde: "\xD1",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  Nu: "\u039D",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvDash: "\u22AD",
  nVdash: "\u22AE",
  nVDash: "\u22AF",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvHarr: "\u2904",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwArr: "\u21D6",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  Oacute: "\xD3",
  oacute: "\xF3",
  oast: "\u229B",
  Ocirc: "\xD4",
  ocirc: "\xF4",
  ocir: "\u229A",
  Ocy: "\u041E",
  ocy: "\u043E",
  odash: "\u229D",
  Odblac: "\u0150",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  OElig: "\u0152",
  oelig: "\u0153",
  ofcir: "\u29BF",
  Ofr: "\u{1D512}",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  Ograve: "\xD2",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  Omacr: "\u014C",
  omacr: "\u014D",
  Omega: "\u03A9",
  omega: "\u03C9",
  Omicron: "\u039F",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  Oopf: "\u{1D546}",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  operp: "\u29B9",
  oplus: "\u2295",
  orarr: "\u21BB",
  Or: "\u2A54",
  or: "\u2228",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oS: "\u24C8",
  Oscr: "\u{1D4AA}",
  oscr: "\u2134",
  Oslash: "\xD8",
  oslash: "\xF8",
  osol: "\u2298",
  Otilde: "\xD5",
  otilde: "\xF5",
  otimesas: "\u2A36",
  Otimes: "\u2A37",
  otimes: "\u2297",
  Ouml: "\xD6",
  ouml: "\xF6",
  ovbar: "\u233D",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  para: "\xB6",
  parallel: "\u2225",
  par: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  PartialD: "\u2202",
  Pcy: "\u041F",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  Pfr: "\u{1D513}",
  pfr: "\u{1D52D}",
  Phi: "\u03A6",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  Pi: "\u03A0",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plus: "+",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  PlusMinus: "\xB1",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  Poincareplane: "\u210C",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  Popf: "\u2119",
  pound: "\xA3",
  prap: "\u2AB7",
  Pr: "\u2ABB",
  pr: "\u227A",
  prcue: "\u227C",
  precapprox: "\u2AB7",
  prec: "\u227A",
  preccurlyeq: "\u227C",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  pre: "\u2AAF",
  prE: "\u2AB3",
  precsim: "\u227E",
  prime: "\u2032",
  Prime: "\u2033",
  primes: "\u2119",
  prnap: "\u2AB9",
  prnE: "\u2AB5",
  prnsim: "\u22E8",
  prod: "\u220F",
  Product: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  Proportional: "\u221D",
  Proportion: "\u2237",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  Pscr: "\u{1D4AB}",
  pscr: "\u{1D4C5}",
  Psi: "\u03A8",
  psi: "\u03C8",
  puncsp: "\u2008",
  Qfr: "\u{1D514}",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  Qopf: "\u211A",
  qprime: "\u2057",
  Qscr: "\u{1D4AC}",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  QUOT: '"',
  rAarr: "\u21DB",
  race: "\u223D\u0331",
  Racute: "\u0154",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  Rang: "\u27EB",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarr: "\u2192",
  Rarr: "\u21A0",
  rArr: "\u21D2",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  Rarrtl: "\u2916",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  rAtail: "\u291C",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rBarr: "\u290F",
  RBarr: "\u2910",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  Rcaron: "\u0158",
  rcaron: "\u0159",
  Rcedil: "\u0156",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  Rcy: "\u0420",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  Re: "\u211C",
  rect: "\u25AD",
  reg: "\xAE",
  REG: "\xAE",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  Rfr: "\u211C",
  rHar: "\u2964",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  Rho: "\u03A1",
  rho: "\u03C1",
  rhov: "\u03F1",
  RightAngleBracket: "\u27E9",
  RightArrowBar: "\u21E5",
  rightarrow: "\u2192",
  RightArrow: "\u2192",
  Rightarrow: "\u21D2",
  RightArrowLeftArrow: "\u21C4",
  rightarrowtail: "\u21A3",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVectorBar: "\u2955",
  RightDownVector: "\u21C2",
  RightFloor: "\u230B",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  RightTeeArrow: "\u21A6",
  RightTee: "\u22A2",
  RightTeeVector: "\u295B",
  rightthreetimes: "\u22CC",
  RightTriangleBar: "\u29D0",
  RightTriangle: "\u22B3",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVectorBar: "\u2954",
  RightUpVector: "\u21BE",
  RightVectorBar: "\u2953",
  RightVector: "\u21C0",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoustache: "\u23B1",
  rmoust: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  Ropf: "\u211D",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  RoundImplies: "\u2970",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  Rrightarrow: "\u21DB",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  Rscr: "\u211B",
  rsh: "\u21B1",
  Rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  RuleDelayed: "\u29F4",
  ruluhar: "\u2968",
  rx: "\u211E",
  Sacute: "\u015A",
  sacute: "\u015B",
  sbquo: "\u201A",
  scap: "\u2AB8",
  Scaron: "\u0160",
  scaron: "\u0161",
  Sc: "\u2ABC",
  sc: "\u227B",
  sccue: "\u227D",
  sce: "\u2AB0",
  scE: "\u2AB4",
  Scedil: "\u015E",
  scedil: "\u015F",
  Scirc: "\u015C",
  scirc: "\u015D",
  scnap: "\u2ABA",
  scnE: "\u2AB6",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  Scy: "\u0421",
  scy: "\u0441",
  sdotb: "\u22A1",
  sdot: "\u22C5",
  sdote: "\u2A66",
  searhk: "\u2925",
  searr: "\u2198",
  seArr: "\u21D8",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  Sfr: "\u{1D516}",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  SHCHcy: "\u0429",
  shchcy: "\u0449",
  SHcy: "\u0428",
  shcy: "\u0448",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  shy: "\xAD",
  Sigma: "\u03A3",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  SmallCircle: "\u2218",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  SOFTcy: "\u042C",
  softcy: "\u044C",
  solbar: "\u233F",
  solb: "\u29C4",
  sol: "/",
  Sopf: "\u{1D54A}",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  Sqrt: "\u221A",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  square: "\u25A1",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  squarf: "\u25AA",
  squ: "\u25A1",
  squf: "\u25AA",
  srarr: "\u2192",
  Sscr: "\u{1D4AE}",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  Star: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  Sub: "\u22D0",
  subdot: "\u2ABD",
  subE: "\u2AC5",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  Subset: "\u22D0",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  SubsetEqual: "\u2286",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succapprox: "\u2AB8",
  succ: "\u227B",
  succcurlyeq: "\u227D",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  SuchThat: "\u220B",
  sum: "\u2211",
  Sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  Sup: "\u22D1",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supE: "\u2AC6",
  supe: "\u2287",
  supedot: "\u2AC4",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  Supset: "\u22D1",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swarhk: "\u2926",
  swarr: "\u2199",
  swArr: "\u21D9",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  Tab: "	",
  target: "\u2316",
  Tau: "\u03A4",
  tau: "\u03C4",
  tbrk: "\u23B4",
  Tcaron: "\u0164",
  tcaron: "\u0165",
  Tcedil: "\u0162",
  tcedil: "\u0163",
  Tcy: "\u0422",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  Tfr: "\u{1D517}",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  Therefore: "\u2234",
  Theta: "\u0398",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  THORN: "\xDE",
  thorn: "\xFE",
  tilde: "\u02DC",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  timesbar: "\u2A31",
  timesb: "\u22A0",
  times: "\xD7",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  topbot: "\u2336",
  topcir: "\u2AF1",
  top: "\u22A4",
  Topf: "\u{1D54B}",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  TRADE: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  TripleDot: "\u20DB",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  Tscr: "\u{1D4AF}",
  tscr: "\u{1D4C9}",
  TScy: "\u0426",
  tscy: "\u0446",
  TSHcy: "\u040B",
  tshcy: "\u045B",
  Tstrok: "\u0166",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  Uacute: "\xDA",
  uacute: "\xFA",
  uarr: "\u2191",
  Uarr: "\u219F",
  uArr: "\u21D1",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  ubrcy: "\u045E",
  Ubreve: "\u016C",
  ubreve: "\u016D",
  Ucirc: "\xDB",
  ucirc: "\xFB",
  Ucy: "\u0423",
  ucy: "\u0443",
  udarr: "\u21C5",
  Udblac: "\u0170",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  Ufr: "\u{1D518}",
  ufr: "\u{1D532}",
  Ugrave: "\xD9",
  ugrave: "\xF9",
  uHar: "\u2963",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  Umacr: "\u016A",
  umacr: "\u016B",
  uml: "\xA8",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  uogon: "\u0173",
  Uopf: "\u{1D54C}",
  uopf: "\u{1D566}",
  UpArrowBar: "\u2912",
  uparrow: "\u2191",
  UpArrow: "\u2191",
  Uparrow: "\u21D1",
  UpArrowDownArrow: "\u21C5",
  updownarrow: "\u2195",
  UpDownArrow: "\u2195",
  Updownarrow: "\u21D5",
  UpEquilibrium: "\u296E",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  upsi: "\u03C5",
  Upsi: "\u03D2",
  upsih: "\u03D2",
  Upsilon: "\u03A5",
  upsilon: "\u03C5",
  UpTeeArrow: "\u21A5",
  UpTee: "\u22A5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  Uring: "\u016E",
  uring: "\u016F",
  urtri: "\u25F9",
  Uscr: "\u{1D4B0}",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  Utilde: "\u0168",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  Uuml: "\xDC",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  vArr: "\u21D5",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vBar: "\u2AE8",
  Vbar: "\u2AEB",
  vBarv: "\u2AE9",
  Vcy: "\u0412",
  vcy: "\u0432",
  vdash: "\u22A2",
  vDash: "\u22A8",
  Vdash: "\u22A9",
  VDash: "\u22AB",
  Vdashl: "\u2AE6",
  veebar: "\u22BB",
  vee: "\u2228",
  Vee: "\u22C1",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  Verbar: "\u2016",
  vert: "|",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  Vopf: "\u{1D54D}",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  Vscr: "\u{1D4B1}",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  Vvdash: "\u22AA",
  vzigzag: "\u299A",
  Wcirc: "\u0174",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  Wedge: "\u22C0",
  wedgeq: "\u2259",
  weierp: "\u2118",
  Wfr: "\u{1D51A}",
  wfr: "\u{1D534}",
  Wopf: "\u{1D54E}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  Wscr: "\u{1D4B2}",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  Xfr: "\u{1D51B}",
  xfr: "\u{1D535}",
  xharr: "\u27F7",
  xhArr: "\u27FA",
  Xi: "\u039E",
  xi: "\u03BE",
  xlarr: "\u27F5",
  xlArr: "\u27F8",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  Xopf: "\u{1D54F}",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrarr: "\u27F6",
  xrArr: "\u27F9",
  Xscr: "\u{1D4B3}",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  Yacute: "\xDD",
  yacute: "\xFD",
  YAcy: "\u042F",
  yacy: "\u044F",
  Ycirc: "\u0176",
  ycirc: "\u0177",
  Ycy: "\u042B",
  ycy: "\u044B",
  yen: "\xA5",
  Yfr: "\u{1D51C}",
  yfr: "\u{1D536}",
  YIcy: "\u0407",
  yicy: "\u0457",
  Yopf: "\u{1D550}",
  yopf: "\u{1D56A}",
  Yscr: "\u{1D4B4}",
  yscr: "\u{1D4CE}",
  YUcy: "\u042E",
  yucy: "\u044E",
  yuml: "\xFF",
  Yuml: "\u0178",
  Zacute: "\u0179",
  zacute: "\u017A",
  Zcaron: "\u017D",
  zcaron: "\u017E",
  Zcy: "\u0417",
  zcy: "\u0437",
  Zdot: "\u017B",
  zdot: "\u017C",
  zeetrf: "\u2128",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  Zfr: "\u2128",
  ZHcy: "\u0416",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};
entities$1.default = entities;
var entities_1 = entities$1;
var re = /&(?:([a-zA-Z0-9]+)|#([0-9]{1,6})|#[xX]([a-fA-F0-9]{1,6}));/g;
function decode(str) {
  return str.replace(re, function(match2, $1, $2, $3) {
    if ($1)
      return entities_1.default[$1] || match2;
    if ($2)
      return String.fromCodePoint(parseInt($2));
    return String.fromCodePoint(parseInt($3, 16));
  });
}
dist.exports = decode;
dist.exports.default = decode;
Object.defineProperty(dist.exports, "__esModule", { value: true });
var decode$1 = /* @__PURE__ */ getDefaultExportFromCjs(dist.exports);
var defaults$5 = { exports: {} };
function getDefaults$1() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
function changeDefaults$1(newDefaults) {
  defaults$5.exports.defaults = newDefaults;
}
defaults$5.exports = {
  defaults: getDefaults$1(),
  getDefaults: getDefaults$1,
  changeDefaults: changeDefaults$1
};
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$3(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape$1(html2) {
  return html2.replace(unescapeTest, (_2, n2) => {
    n2 = n2.toLowerCase();
    if (n2 === "colon")
      return ":";
    if (n2.charAt(0) === "#") {
      return n2.charAt(1) === "x" ? String.fromCharCode(parseInt(n2.substring(2), 16)) : String.fromCharCode(+n2.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit$1(regex, opt) {
  regex = regex.source || regex;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl$1(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e2) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim$1(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest$1 = { exec: function noopTest() {
} };
function merge$2(obj) {
  let i2 = 1, target, key;
  for (; i2 < arguments.length; i2++) {
    target = arguments[i2];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells$1(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match2, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (!cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim$1(str, c2, invert) {
  const l2 = str.length;
  if (l2 === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l2) {
    const currChar = str.charAt(l2 - suffLen - 1);
    if (currChar === c2 && !invert) {
      suffLen++;
    } else if (currChar !== c2 && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.substr(0, l2 - suffLen);
}
function findClosingBracket$1(str, b2) {
  if (str.indexOf(b2[1]) === -1) {
    return -1;
  }
  const l2 = str.length;
  let level = 0, i2 = 0;
  for (; i2 < l2; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b2[0]) {
      level++;
    } else if (str[i2] === b2[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation$1(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString$1(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
var helpers = {
  escape: escape$3,
  unescape: unescape$1,
  edit: edit$1,
  cleanUrl: cleanUrl$1,
  resolveUrl,
  noopTest: noopTest$1,
  merge: merge$2,
  splitCells: splitCells$1,
  rtrim: rtrim$1,
  findClosingBracket: findClosingBracket$1,
  checkSanitizeDeprecation: checkSanitizeDeprecation$1,
  repeatString: repeatString$1
};
const { defaults: defaults$4 } = defaults$5.exports;
const {
  rtrim,
  splitCells,
  escape: escape$2,
  findClosingBracket
} = helpers;
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape$2(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  } else {
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$2(text)
    };
  }
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer_1 = class Tokenizer {
  constructor(options) {
    this.options = options || defaults$4;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap) {
      if (cap[0].length > 1) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
      return { raw: "\n" };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *> ?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i2, blankLine, endsWithBlankLine, line, lines, itemContents;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?: [^\\n]*| *)(?:\\n[^\\n]*)*(?:\\n|$))`);
      while (src) {
        if (this.rules.block.hr.test(src)) {
          break;
        }
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        lines = cap[2].split("\n");
        if (this.options.pedantic) {
          indent = 2;
          itemContents = lines[0].trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = cap[1].length + (indent > 4 ? 1 : indent);
          itemContents = lines[0].slice(indent - cap[1].length);
        }
        blankLine = false;
        raw = cap[0];
        if (!lines[0] && /^ *$/.test(lines[1])) {
          raw = cap[1] + lines.slice(0, 2).join("\n") + "\n";
          list.loose = true;
          lines = [];
        }
        const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])`);
        for (i2 = 1; i2 < lines.length; i2++) {
          line = lines[i2];
          if (this.options.pedantic) {
            line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
          }
          if (nextBulletRegex.test(line)) {
            raw = cap[1] + lines.slice(0, i2).join("\n") + "\n";
            break;
          }
          if (!blankLine) {
            if (!line.trim()) {
              blankLine = true;
            }
            if (line.search(/[^ ]/) >= indent) {
              itemContents += "\n" + line.slice(indent);
            } else {
              itemContents += "\n" + line;
            }
            continue;
          }
          if (line.search(/[^ ]/) >= indent || !line.trim()) {
            itemContents += "\n" + line.slice(indent);
            continue;
          } else {
            raw = cap[1] + lines.slice(0, i2).join("\n") + "\n";
            break;
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
        src = src.slice(raw.length);
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l2 = list.items.length;
      for (i2 = 0; i2 < l2; i2++) {
        this.lexer.state.top = false;
        list.items[i2].tokens = this.lexer.blockTokens(list.items[i2].text, []);
        if (list.items[i2].tokens.some((t3) => t3.type === "space")) {
          list.loose = true;
          list.items[i2].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c2) => {
          return { text: c2 };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] ? cap[3].replace(/\n$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l2 = item.align.length;
        let i2, j2, k2, row;
        for (i2 = 0; i2 < l2; i2++) {
          if (/^ *-+: *$/.test(item.align[i2])) {
            item.align[i2] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i2])) {
            item.align[i2] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i2])) {
            item.align[i2] = "left";
          } else {
            item.align[i2] = null;
          }
        }
        l2 = item.rows.length;
        for (i2 = 0; i2 < l2; i2++) {
          item.rows[i2] = splitCells(item.rows[i2], item.header.length).map((c2) => {
            return { text: c2 };
          });
        }
        l2 = item.header.length;
        for (j2 = 0; j2 < l2; j2++) {
          item.header[j2].tokens = [];
          this.lexer.inlineTokens(item.header[j2].text, item.header[j2].tokens);
        }
        l2 = item.rows.length;
        for (j2 = 0; j2 < l2; j2++) {
          row = item.rows[j2];
          for (k2 = 0; k2 < row.length; k2++) {
            row[k2].tokens = [];
            this.lexer.inlineTokens(row[k2].text, row[k2].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$2(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match2 = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match2)
      return;
    if (match2[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match2[1] || match2[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match2[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match2[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match2 = endReg.exec(maskedSrc)) != null) {
        rDelim = match2[1] || match2[2] || match2[3] || match2[4] || match2[5] || match2[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match2[3] || match2[4]) {
          delimTotal += rLength;
          continue;
        } else if (match2[5] || match2[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match2.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match2.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match2.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match2.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$2(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$2(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$2(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$2(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape$2(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0];
      } else {
        text = escape$2(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
const {
  noopTest: noopTest2,
  edit,
  merge: merge$1
} = helpers;
const block$1 = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest2,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block$1.def = edit(block$1.def).replace("label", block$1._label).replace("title", block$1._title).getRegex();
block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block$1.listItemStart = edit(/^( *)(bull) */).replace("bull", block$1.bullet).getRegex();
block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block$1.def.source + ")").getRegex();
block$1._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block$1.html = edit(block$1.html, "i").replace("comment", block$1._comment).replace("tag", block$1._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block$1.paragraph = edit(block$1._paragraph).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
block$1.blockquote = edit(block$1.blockquote).replace("paragraph", block$1.paragraph).getRegex();
block$1.normal = merge$1({}, block$1);
block$1.gfm = merge$1({}, block$1.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block$1.gfm.table = edit(block$1.gfm.table).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
block$1.pedantic = merge$1({}, block$1.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block$1._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest2,
  paragraph: edit(block$1.normal._paragraph).replace("hr", block$1.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block$1.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline$1 = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest2,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest2,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline$1._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex();
inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline$1.escapedEmSt = /\\\*|\\_/g;
inline$1._comment = edit(block$1._comment).replace("(?:-->|$)", "-->").getRegex();
inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, "g").replace(/punct/g, inline$1._punctuation).getRegex();
inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, "g").replace(/punct/g, inline$1._punctuation).getRegex();
inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline$1.autolink = edit(inline$1.autolink).replace("scheme", inline$1._scheme).replace("email", inline$1._email).getRegex();
inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline$1.tag = edit(inline$1.tag).replace("comment", inline$1._comment).replace("attribute", inline$1._attribute).getRegex();
inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline$1.link = edit(inline$1.link).replace("label", inline$1._label).replace("href", inline$1._href).replace("title", inline$1._title).getRegex();
inline$1.reflink = edit(inline$1.reflink).replace("label", inline$1._label).getRegex();
inline$1.reflinkSearch = edit(inline$1.reflinkSearch, "g").replace("reflink", inline$1.reflink).replace("nolink", inline$1.nolink).getRegex();
inline$1.normal = merge$1({}, inline$1);
inline$1.pedantic = merge$1({}, inline$1.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline$1._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline$1._label).getRegex()
});
inline$1.gfm = merge$1({}, inline$1.normal, {
  escape: edit(inline$1.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline$1.gfm.url = edit(inline$1.gfm.url, "i").replace("email", inline$1.gfm._extended_email).getRegex();
inline$1.breaks = merge$1({}, inline$1.gfm, {
  br: edit(inline$1.br).replace("{2,}", "*").getRegex(),
  text: edit(inline$1.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var rules = {
  block: block$1,
  inline: inline$1
};
const Tokenizer$1 = Tokenizer_1;
const { defaults: defaults$3 } = defaults$5.exports;
const { block, inline } = rules;
const { repeatString } = helpers;
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i2, ch;
  const l2 = text.length;
  for (i2 = 0; i2 < l2; i2++) {
    ch = text.charCodeAt(i2);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer_1 = class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults$3;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules2 = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules2.block = block.pedantic;
      rules2.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules2.block = block.gfm;
      if (this.options.breaks) {
        rules2.inline = inline.breaks;
      } else {
        rules2.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules2;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/^ +$/gm, "");
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.type) {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match2;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match2 = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match2[0].slice(match2[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match2.index) + "[" + repeatString("a", match2[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match2 = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match2.index) + "[" + repeatString("a", match2[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match2 = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match2.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
const { defaults: defaults$2 } = defaults$5.exports;
const {
  cleanUrl,
  escape: escape$1
} = helpers;
var Renderer_1 = class Renderer {
  constructor(options) {
    this.options = options || defaults$2;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  }
  html(html2) {
    return html2;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return "<h" + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + "</h" + level + ">\n";
    }
    return "<h" + level + ">" + text + "</h" + level + ">\n";
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return "<li>" + text + "</li>\n";
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return "<p>" + text + "</p>\n";
  }
  table(header, body) {
    if (body)
      body = "<tbody>" + body + "</tbody>";
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return "<tr>\n" + content + "</tr>\n";
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  }
  strong(text) {
    return "<strong>" + text + "</strong>";
  }
  em(text) {
    return "<em>" + text + "</em>";
  }
  codespan(text) {
    return "<code>" + text + "</code>";
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return "<del>" + text + "</del>";
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape$1(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer_1 = class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger_1 = class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
};
const Renderer$1 = Renderer_1;
const TextRenderer$1 = TextRenderer_1;
const Slugger$1 = Slugger_1;
const { defaults: defaults$1 } = defaults$5.exports;
const {
  unescape
} = helpers;
var Parser_1 = class Parser {
  constructor(options) {
    this.options = options || defaults$1;
    this.options.renderer = this.options.renderer || new Renderer$1();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer$1();
    this.slugger = new Slugger$1();
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i2, j2, k2, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l4 = tokens.length;
    for (i2 = 0; i2 < l4; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j2 = 0; j2 < l2; j2++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j2].tokens), { header: true, align: token.align[j2] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j2 = 0; j2 < l2; j2++) {
            row = token.rows[j2];
            cell = "";
            l3 = row.length;
            for (k2 = 0; k2 < l3; k2++) {
              cell += this.renderer.tablecell(this.parseInline(row[k2].tokens), { header: false, align: token.align[k2] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j2 = 0; j2 < l2; j2++) {
            item = token.items[j2];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i2 + 1 < l4 && tokens[i2 + 1].type === "text") {
            token = tokens[++i2];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i2, token, ret;
    const l2 = tokens.length;
    for (i2 = 0; i2 < l2; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
const Lexer2 = Lexer_1;
const Parser2 = Parser_1;
const Tokenizer2 = Tokenizer_1;
const Renderer2 = Renderer_1;
const TextRenderer2 = TextRenderer_1;
const Slugger2 = Slugger_1;
const {
  merge,
  checkSanitizeDeprecation,
  escape
} = helpers;
const {
  getDefaults,
  changeDefaults,
  defaults
} = defaults$5.exports;
function marked(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer2.lex(src, opt);
    } catch (e2) {
      return callback(e2);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser2.parse(tokens, opt);
        } catch (e2) {
          err = e2;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer2.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser2.parse(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
}
marked.options = marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer2();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer2();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = (token) => {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens(token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback(token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer2.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser2.parseInline(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
};
marked.Parser = Parser2;
marked.parser = Parser2.parse;
marked.Renderer = Renderer2;
marked.TextRenderer = TextRenderer2;
marked.Lexer = Lexer2;
marked.lexer = Lexer2.lex;
marked.Tokenizer = Tokenizer2;
marked.Slugger = Slugger2;
marked.parse = marked;
var marked_1 = marked;
var n = function(t3, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h2 = 1; h2 < s2.length; h2++) {
    var p2 = s2[h2++], a2 = s2[h2] ? (s2[0] |= p2 ? 1 : 2, r2[s2[h2++]]) : s2[++h2];
    p2 === 3 ? e2[0] = a2 : p2 === 4 ? e2[1] = Object.assign(e2[1] || {}, a2) : p2 === 5 ? (e2[1] = e2[1] || {})[s2[++h2]] = a2 : p2 === 6 ? e2[1][s2[++h2]] += a2 + "" : p2 ? (u2 = t3.apply(a2, n(t3, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h2 - 2] = 0, s2[h2] = u2)) : e2.push(a2);
  }
  return e2;
}, t2 = new Map();
function htm(s2) {
  var r2 = t2.get(this);
  return r2 || (r2 = new Map(), t2.set(this, r2)), (r2 = n(this, r2.get(s2) || (r2.set(s2, r2 = function(n2) {
    for (var t3, s3, r3 = 1, e2 = "", u2 = "", h2 = [0], p2 = function(n3) {
      r3 === 1 && (n3 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e2) : r3 === 3 && (n3 || e2) ? (h2.push(3, n3, e2), r3 = 2) : r3 === 2 && e2 === "..." && n3 ? h2.push(4, n3, 0) : r3 === 2 && e2 && !n3 ? h2.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n3 && r3 === 5) && (h2.push(r3, 0, e2, s3), r3 = 6), n3 && (h2.push(r3, n3, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n2.length; a2++) {
      a2 && (r3 === 1 && p2(), p2(a2));
      for (var l2 = 0; l2 < n2[a2].length; l2++)
        t3 = n2[a2][l2], r3 === 1 ? t3 === "<" ? (p2(), h2 = [h2], r3 = 3) : e2 += t3 : r3 === 4 ? e2 === "--" && t3 === ">" ? (r3 = 1, e2 = "") : e2 = t3 + e2[0] : u2 ? t3 === u2 ? u2 = "" : e2 += t3 : t3 === '"' || t3 === "'" ? u2 = t3 : t3 === ">" ? (p2(), r3 = 1) : r3 && (t3 === "=" ? (r3 = 5, s3 = e2, e2 = "") : t3 === "/" && (r3 < 5 || n2[a2][l2 + 1] === ">") ? (p2(), r3 === 3 && (h2 = h2[0]), r3 = h2, (h2 = h2[0]).push(2, 0, r3), r3 = 0) : t3 === " " || t3 === "	" || t3 === "\n" || t3 === "\r" ? (p2(), r3 = 2) : e2 += t3), r3 === 3 && e2 === "!--" && (r3 = 4, h2 = h2[0]);
    }
    return p2(), h2;
  }(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2)
    return;
  if (typeof o2 === "string")
    return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor)
    n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
  var it2 = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it2)
    return (it2 = it2.call(o2)).next.bind(it2);
  if (Array.isArray(o2) || (it2 = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it2)
      o2 = it2;
    var i2 = 0;
    return function() {
      if (i2 >= o2.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o2[i2++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var currentHTMLContext = {
  currentFactory: function currentFactory(type, props) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }
    return {
      type,
      props,
      children
    };
  },
  jsxTransforms: []
};
function setHTMLContext(context) {
  currentHTMLContext = context;
}
function applyTransforms(type, props, children) {
  var _currentHTMLContext;
  var args = [type, props, children];
  for (var _iterator = _createForOfIteratorHelperLoose(currentHTMLContext.jsxTransforms), _step; !(_step = _iterator()).done; ) {
    var transform = _step.value;
    args = transform(args[0], args[1], args[2]);
  }
  return (_currentHTMLContext = currentHTMLContext).currentFactory.apply(_currentHTMLContext, [args[0], args[1]].concat(args[2]));
}
var html = /* @__PURE__ */ htm.bind(function(type, props) {
  for (var _len2 = arguments.length, children = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }
  return applyTransforms(type, props, children);
});
var classNameTransform = function classNameTransform2(type, props, children) {
  if (props != null && "class" in props) {
    props.className = props["class"];
    delete props["class"];
  }
  return [type, props, children];
};
var getComponentTransform = function getComponentTransform2(components2) {
  return function(type, props, children) {
    if (typeof type === "string" && components2[type]) {
      type = components2[type];
    }
    return [type, props, children];
  };
};
function performTransFormJSXToHTM(m2) {
  return m2.replace(/(```+)[\s\S]*?\2|={/g, function(str, fence) {
    return fence ? str : "=${";
  });
}
function markedToReact(m2, h2, options) {
  var _options$components = options.components, components2 = _options$components === void 0 ? {} : _options$components, _options$thisValue = options.thisValue, thisValue = _options$thisValue === void 0 ? {} : _options$thisValue, _options$transformCla = options.transformClassToClassname, transformClassToClassname = _options$transformCla === void 0 ? true : _options$transformCla, _options$jsxTransform = options.jsxTransforms, jsxTransforms = _options$jsxTransform === void 0 ? [] : _options$jsxTransform;
  m2 = decodeHTML(m2);
  if (transformClassToClassname) {
    jsxTransforms.push(function(type, props, children) {
      if (children && typeof children[0] === "string") {
        children[0] = decode$1(children[0]);
      }
      return [type, props, children];
    });
    jsxTransforms.push(classNameTransform);
  }
  jsxTransforms.push(getComponentTransform(components2));
  setHTMLContext({
    currentFactory: h2,
    jsxTransforms
  });
  return new Function("html", "return html`" + m2.replace(/`/g, "\\`") + "`").call(thisValue, html);
}
function decodeHTML(m2) {
  m2.split(/(<code+)[\s\S]*?(<\/code>+)/).forEach(function(str) {
    m2 = m2.replace(str, decode$1(str));
  });
  return m2;
}
function htmdx(m2, h2, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$transformJSX = _options.transformJSXToHTM, transformJSXToHTM = _options$transformJSX === void 0 ? true : _options$transformJSX, configureMarked = _options.configureMarked, _options$mdxTransform = _options.mdxTransforms, mdxTransforms = _options$mdxTransform === void 0 ? [] : _options$mdxTransform;
  marked_1.setOptions({
    xhtml: true
  });
  if (configureMarked) {
    configureMarked(marked_1);
  }
  if (transformJSXToHTM) {
    mdxTransforms.push(performTransFormJSXToHTM);
  }
  mdxTransforms.forEach(function(t3) {
    m2 = t3(m2);
  });
  return markedToReact(marked_1(m2), h2, options);
}
const useCurrentDocument = () => {
  return useDocs((state) => state.currentDocument);
};
const components = {};
function DocumentRenderer() {
  const currentDocument = useCurrentDocument();
  const { htmdxOptions = { components: {} } } = useDocsOptions();
  return /* @__PURE__ */ a$3(y$4, null, /* @__PURE__ */ a$3("article", null, htmdx(currentDocument.content, a$3, __spreadProps(__spreadValues({}, htmdxOptions), {
    components: __spreadValues(__spreadValues({}, components), htmdxOptions.components)
  }))));
}
const useFlatNavbar = () => {
  return useDocs((state) => state.flatNavbar);
};
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var r, B = r || (r = {});
B.Pop = "POP";
B.Push = "PUSH";
B.Replace = "REPLACE";
var C = function(b2) {
  return b2;
};
function E(b2) {
  b2.preventDefault();
  b2.returnValue = "";
}
function F() {
  var b2 = [];
  return { get length() {
    return b2.length;
  }, push: function(h2) {
    b2.push(h2);
    return function() {
      b2 = b2.filter(function(k2) {
        return k2 !== h2;
      });
    };
  }, call: function(h2) {
    b2.forEach(function(k2) {
      return k2 && k2(h2);
    });
  } };
}
function H() {
  return Math.random().toString(36).substr(2, 8);
}
function I(b2) {
  var h2 = b2.pathname, k2 = b2.search;
  b2 = b2.hash;
  return (h2 === void 0 ? "/" : h2) + (k2 === void 0 ? "" : k2) + (b2 === void 0 ? "" : b2);
}
function J(b2) {
  var h2 = {};
  if (b2) {
    var k2 = b2.indexOf("#");
    0 <= k2 && (h2.hash = b2.substr(k2), b2 = b2.substr(0, k2));
    k2 = b2.indexOf("?");
    0 <= k2 && (h2.search = b2.substr(k2), b2 = b2.substr(0, k2));
    b2 && (h2.pathname = b2);
  }
  return h2;
}
function createHashHistory(b2) {
  function h2() {
    var a2 = J(m2.location.hash.substr(1)), e2 = a2.pathname, l2 = a2.search;
    a2 = a2.hash;
    var g2 = u2.state || {};
    return [g2.idx, C({ pathname: e2 === void 0 ? "/" : e2, search: l2 === void 0 ? "" : l2, hash: a2 === void 0 ? "" : a2, state: g2.usr || null, key: g2.key || "default" })];
  }
  function k2() {
    if (t3)
      c2.call(t3), t3 = null;
    else {
      var a2 = r.Pop, e2 = h2(), l2 = e2[0];
      e2 = e2[1];
      if (c2.length)
        if (l2 != null) {
          var g2 = q2 - l2;
          g2 && (t3 = { action: a2, location: e2, retry: function() {
            p2(-1 * g2);
          } }, p2(g2));
        } else
          ;
      else
        A2(a2);
    }
  }
  function x2(a2) {
    var e2 = document.querySelector("base"), l2 = "";
    e2 && e2.getAttribute("href") && (e2 = m2.location.href, l2 = e2.indexOf("#"), l2 = l2 === -1 ? e2 : e2.slice(0, l2));
    return l2 + "#" + (typeof a2 === "string" ? a2 : I(a2));
  }
  function z2(a2, e2) {
    e2 === void 0 && (e2 = null);
    return C(_extends({}, d2, typeof a2 === "string" ? J(a2) : a2, { state: e2, key: H() }));
  }
  function A2(a2) {
    v2 = a2;
    a2 = h2();
    q2 = a2[0];
    d2 = a2[1];
    f2.call({ action: v2, location: d2 });
  }
  function y2(a2, e2) {
    function l2() {
      y2(a2, e2);
    }
    var g2 = r.Push, n2 = z2(a2, e2);
    if (!c2.length || (c2.call({ action: g2, location: n2, retry: l2 }), false)) {
      var G2 = [{ usr: n2.state, key: n2.key, idx: q2 + 1 }, x2(n2)];
      n2 = G2[0];
      G2 = G2[1];
      try {
        u2.pushState(n2, "", G2);
      } catch (K2) {
        m2.location.assign(G2);
      }
      A2(g2);
    }
  }
  function w2(a2, e2) {
    function l2() {
      w2(a2, e2);
    }
    var g2 = r.Replace, n2 = z2(a2, e2);
    c2.length && (c2.call({
      action: g2,
      location: n2,
      retry: l2
    }), 1) || (n2 = [{ usr: n2.state, key: n2.key, idx: q2 }, x2(n2)], u2.replaceState(n2[0], "", n2[1]), A2(g2));
  }
  function p2(a2) {
    u2.go(a2);
  }
  b2 === void 0 && (b2 = {});
  b2 = b2.window;
  var m2 = b2 === void 0 ? document.defaultView : b2, u2 = m2.history, t3 = null;
  m2.addEventListener("popstate", k2);
  m2.addEventListener("hashchange", function() {
    var a2 = h2()[1];
    I(a2) !== I(d2) && k2();
  });
  var v2 = r.Pop;
  b2 = h2();
  var q2 = b2[0], d2 = b2[1], f2 = F(), c2 = F();
  q2 == null && (q2 = 0, u2.replaceState(_extends({}, u2.state, { idx: q2 }), ""));
  return {
    get action() {
      return v2;
    },
    get location() {
      return d2;
    },
    createHref: x2,
    push: y2,
    replace: w2,
    go: p2,
    back: function() {
      p2(-1);
    },
    forward: function() {
      p2(1);
    },
    listen: function(a2) {
      return f2.push(a2);
    },
    block: function(a2) {
      var e2 = c2.push(a2);
      c2.length === 1 && m2.addEventListener("beforeunload", E);
      return function() {
        e2();
        c2.length || m2.removeEventListener("beforeunload", E);
      };
    }
  };
}
const useDocument = (slug, fallBackToFirst = false) => {
  const { rootPath } = useDocsOptions();
  const flatNavbar = useFlatNavbar();
  try {
    return useDocs((state) => {
      var _a;
      return (_a = state.documents[slug]) != null ? _a : fallBackToFirst ? state.documents[Object.keys(state.documents)[0]] : void 0;
    });
  } catch (e2) {
    fetchDocumentNowBySlug(rootPath, flatNavbar, slug);
    throw e2;
  }
};
const RendererWrapper = (props) => {
  const document2 = useDocument(props.slug);
  const { DocumentRenderer: DocumentRenderer2 } = useComponentList();
  const setCurrentDocument = useDocs((state) => state.setCurrentDocument);
  y$2(() => {
    setCurrentDocument(document2);
  }, [document2]);
  return /* @__PURE__ */ a$3(DocumentRenderer2, null);
};
const FallbackDocumentRenderer = () => {
  const fallbackDocumentSlug = useDocs((state) => Object.values(state.documents)[0].slug);
  return /* @__PURE__ */ a$3(RendererWrapper, {
    slug: fallbackDocumentSlug
  });
};
const Main = () => {
  const flatNavbar = useFlatNavbar();
  const { rootPath } = useDocsOptions();
  return /* @__PURE__ */ a$3("main", null, /* @__PURE__ */ a$3(Router, {
    history: createHashHistory()
  }, /* @__PURE__ */ a$3(y$4, {
    default: true
  }, /* @__PURE__ */ a$3(L$2, {
    fallback: "/"
  }, /* @__PURE__ */ a$3(FallbackDocumentRenderer, null))), flatNavbar.map(({ path, slug }) => {
    const finalPath = join("/", rootPath, path, ":*");
    return /* @__PURE__ */ a$3(y$4, {
      path: finalPath
    }, /* @__PURE__ */ a$3(RendererWrapper, {
      slug
    }));
  })));
};
const BreadCrumbs = () => {
  const document2 = useCurrentDocument();
  const { rootPath } = useDocsOptions();
  return /* @__PURE__ */ a$3(_default, {
    path: ""
  }, ({}) => {
    var _a;
    let sawMD = false;
    return /* @__PURE__ */ a$3("div", {
      className: "bread-crumb"
    }, /* @__PURE__ */ a$3("svg", {
      className: "bread-icon",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, /* @__PURE__ */ a$3("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })), join(rootPath, (_a = document2 == null ? void 0 : document2.path) != null ? _a : "").split("/").filter((p2) => {
      if (sawMD) {
        return false;
      }
      if (p2.includes(".md")) {
        sawMD = true;
      }
      return p2.length > 0 && p2 !== "#";
    }).map((part) => {
      return /* @__PURE__ */ a$3("span", {
        key: part
      }, part);
    }));
  });
};
const componentList = {
  Header,
  App,
  Logo,
  Search,
  SearchInput,
  Sidebar,
  SidebarLevel,
  SidebarCategory,
  SidebarItem,
  Main,
  SidebarMenu,
  DocumentRenderer,
  BreadCrumbs
};
async function load(options) {
  const navbar = await fetchNavbar(options.rootPath, options.navbarPath);
  await docs.getState().setNavBar(navbar);
  queueDocuments(options.rootPath, navbar);
}
const dokument = async (optionsIn = {}) => {
  var _a;
  const newComponentList = __spreadValues({}, componentList);
  Object.keys((_a = optionsIn == null ? void 0 : optionsIn.componentListModifier) != null ? _a : {}).forEach((key) => {
    newComponentList[key] = optionsIn.componentListModifier[key](newComponentList[key]);
  });
  const options = __spreadValues({
    rootPath: "./",
    title: "Documentation",
    container: document.body,
    htmdxOptions: __spreadValues({}, optionsIn.htmdxOptions),
    navbarPath: ""
  }, optionsIn);
  document.title = options.title;
  load(options);
  const { App: App2 } = newComponentList;
  const { Provider } = componentListContext;
  const { Provider: DocsOptionsProvider } = docsOptionsContext;
  const start = () => {
    N$3(/* @__PURE__ */ a$3(DocsOptionsProvider, {
      value: options
    }, /* @__PURE__ */ a$3(Provider, {
      value: newComponentList
    }, /* @__PURE__ */ a$3(App2, null))), options.container);
  };
  if (document.readyState === "complete" || document.readyState !== "loading") {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
};
export { dokument };
//# sourceMappingURL=dokumentjs.es.js.map
