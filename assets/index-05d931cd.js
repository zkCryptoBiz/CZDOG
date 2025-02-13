(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function Qh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ff = {
        exports: {}
    },
    wo = {},
    df = {
        exports: {}
    },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Symbol.for("react.element"),
    Yh = Symbol.for("react.portal"),
    Xh = Symbol.for("react.fragment"),
    Zh = Symbol.for("react.strict_mode"),
    Jh = Symbol.for("react.profiler"),
    qh = Symbol.for("react.provider"),
    bh = Symbol.for("react.context"),
    em = Symbol.for("react.forward_ref"),
    tm = Symbol.for("react.suspense"),
    nm = Symbol.for("react.memo"),
    rm = Symbol.for("react.lazy"),
    Za = Symbol.iterator;

function im(e) {
    return e === null || typeof e != "object" ? null : (e = Za && e[Za] || e["@@iterator"], typeof e == "function" ? e : null)
}
var pf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    hf = Object.assign,
    mf = {};

function qn(e, t, n) {
    this.props = e, this.context = t, this.refs = mf, this.updater = n || pf
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
qn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function yf() {}
yf.prototype = qn.prototype;

function Nl(e, t, n) {
    this.props = e, this.context = t, this.refs = mf, this.updater = n || pf
}
var Fl = Nl.prototype = new yf;
Fl.constructor = Nl;
hf(Fl, qn.prototype);
Fl.isPureReactComponent = !0;
var Ja = Array.isArray,
    gf = Object.prototype.hasOwnProperty,
    Ol = {
        current: null
    },
    vf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function wf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) gf.call(t, r) && !vf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Xr,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Ol.current
    }
}

function om(e, t) {
    return {
        $$typeof: Xr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function jl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xr
}

function sm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var qa = /\/+/g;

function Ho(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? sm("" + e.key) : t.toString(36)
}

function Ei(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Xr:
                case Yh:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + Ho(s, 0) : r, Ja(i) ? (n = "", e != null && (n = e.replace(qa, "$&/") + "/"), Ei(i, t, n, "", function(u) {
        return u
    })) : i != null && (jl(i) && (i = om(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(qa, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Ja(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Ho(o, l);
            s += Ei(o, t, n, a, i)
        } else if (a = im(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + Ho(o, l++), s += Ei(o, t, n, a, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function oi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Ei(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function lm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ve = {
        current: null
    },
    Vi = {
        transition: null
    },
    am = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: Vi,
        ReactCurrentOwner: Ol
    };
F.Children = {
    map: oi,
    forEach: function(e, t, n) {
        oi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return oi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return oi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!jl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = qn;
F.Fragment = Xh;
F.Profiler = Jh;
F.PureComponent = Nl;
F.StrictMode = Zh;
F.Suspense = tm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = am;
F.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hf({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = Ol.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) gf.call(t, a) && !vf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Xr,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
F.createContext = function(e) {
    return e = {
        $$typeof: bh,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: qh,
        _context: e
    }, e.Consumer = e
};
F.createElement = wf;
F.createFactory = function(e) {
    var t = wf.bind(null, e);
    return t.type = e, t
};
F.createRef = function() {
    return {
        current: null
    }
};
F.forwardRef = function(e) {
    return {
        $$typeof: em,
        render: e
    }
};
F.isValidElement = jl;
F.lazy = function(e) {
    return {
        $$typeof: rm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: lm
    }
};
F.memo = function(e, t) {
    return {
        $$typeof: nm,
        type: e,
        compare: t === void 0 ? null : t
    }
};
F.startTransition = function(e) {
    var t = Vi.transition;
    Vi.transition = {};
    try {
        e()
    } finally {
        Vi.transition = t
    }
};
F.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
F.useCallback = function(e, t) {
    return ve.current.useCallback(e, t)
};
F.useContext = function(e) {
    return ve.current.useContext(e)
};
F.useDebugValue = function() {};
F.useDeferredValue = function(e) {
    return ve.current.useDeferredValue(e)
};
F.useEffect = function(e, t) {
    return ve.current.useEffect(e, t)
};
F.useId = function() {
    return ve.current.useId()
};
F.useImperativeHandle = function(e, t, n) {
    return ve.current.useImperativeHandle(e, t, n)
};
F.useInsertionEffect = function(e, t) {
    return ve.current.useInsertionEffect(e, t)
};
F.useLayoutEffect = function(e, t) {
    return ve.current.useLayoutEffect(e, t)
};
F.useMemo = function(e, t) {
    return ve.current.useMemo(e, t)
};
F.useReducer = function(e, t, n) {
    return ve.current.useReducer(e, t, n)
};
F.useRef = function(e) {
    return ve.current.useRef(e)
};
F.useState = function(e) {
    return ve.current.useState(e)
};
F.useSyncExternalStore = function(e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n)
};
F.useTransition = function() {
    return ve.current.useTransition()
};
F.version = "18.2.0";
df.exports = F;
var _ = df.exports;
const rt = Qh(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var um = _,
    cm = Symbol.for("react.element"),
    fm = Symbol.for("react.fragment"),
    dm = Object.prototype.hasOwnProperty,
    pm = um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Sf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) dm.call(t, r) && !hm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: cm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: pm.current
    }
}
wo.Fragment = fm;
wo.jsx = Sf;
wo.jsxs = Sf;
ff.exports = wo;
var he = ff.exports,
    Ls = {},
    xf = {
        exports: {}
    },
    Ne = {},
    Pf = {
        exports: {}
    },
    kf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, R) {
        var N = E.length;
        E.push(R);
        e: for (; 0 < N;) {
            var M = N - 1 >>> 1,
                $ = E[M];
            if (0 < i($, R)) E[M] = R, E[N] = $, N = M;
            else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var R = E[0],
            N = E.pop();
        if (N !== R) {
            E[0] = N;
            e: for (var M = 0, $ = E.length, Xt = $ >>> 1; M < Xt;) {
                var qe = 2 * (M + 1) - 1,
                    wn = E[qe],
                    Le = qe + 1,
                    Zt = E[Le];
                if (0 > i(wn, N)) Le < $ && 0 > i(Zt, wn) ? (E[M] = Zt, E[Le] = N, M = Le) : (E[M] = wn, E[qe] = N, M = qe);
                else if (Le < $ && 0 > i(Zt, N)) E[M] = Zt, E[Le] = N, M = Le;
                else break e
            }
        }
        return R
    }

    function i(E, R) {
        var N = E.sortIndex - R.sortIndex;
        return N !== 0 ? N : E.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        m = !1,
        g = !1,
        v = !1,
        T = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function h(E) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= E) r(u), R.sortIndex = R.expirationTime, t(a, R);
            else break;
            R = n(u)
        }
    }

    function w(E) {
        if (v = !1, h(E), !g)
            if (n(a) !== null) g = !0, Oe(S);
            else {
                var R = n(u);
                R !== null && Je(w, R.startTime - E)
            }
    }

    function S(E, R) {
        g = !1, v && (v = !1, y(P), P = -1), m = !0;
        var N = d;
        try {
            for (h(R), f = n(a); f !== null && (!(f.expirationTime > R) || E && !Z());) {
                var M = f.callback;
                if (typeof M == "function") {
                    f.callback = null, d = f.priorityLevel;
                    var $ = M(f.expirationTime <= R);
                    R = e.unstable_now(), typeof $ == "function" ? f.callback = $ : f === n(a) && r(a), h(R)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var Xt = !0;
            else {
                var qe = n(u);
                qe !== null && Je(w, qe.startTime - R), Xt = !1
            }
            return Xt
        } finally {
            f = null, d = N, m = !1
        }
    }
    var C = !1,
        k = null,
        P = -1,
        A = 5,
        D = -1;

    function Z() {
        return !(e.unstable_now() - D < A)
    }

    function Se() {
        if (k !== null) {
            var E = e.unstable_now();
            D = E;
            var R = !0;
            try {
                R = k(!0, E)
            } finally {
                R ? xe() : (C = !1, k = null)
            }
        } else C = !1
    }
    var xe;
    if (typeof p == "function") xe = function() {
        p(Se)
    };
    else if (typeof MessageChannel < "u") {
        var J = new MessageChannel,
            q = J.port2;
        J.port1.onmessage = Se, xe = function() {
            q.postMessage(null)
        }
    } else xe = function() {
        T(Se, 0)
    };

    function Oe(E) {
        k = E, C || (C = !0, xe())
    }

    function Je(E, R) {
        P = T(function() {
            E(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
        E.callback = null
    }, e.unstable_continueExecution = function() {
        g || m || (g = !0, Oe(S))
    }, e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return d
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(E) {
        switch (d) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = d
        }
        var N = d;
        d = R;
        try {
            return E()
        } finally {
            d = N
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, R) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var N = d;
        d = E;
        try {
            return R()
        } finally {
            d = N
        }
    }, e.unstable_scheduleCallback = function(E, R, N) {
        var M = e.unstable_now();
        switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? M + N : M) : N = M, E) {
            case 1:
                var $ = -1;
                break;
            case 2:
                $ = 250;
                break;
            case 5:
                $ = 1073741823;
                break;
            case 4:
                $ = 1e4;
                break;
            default:
                $ = 5e3
        }
        return $ = N + $, E = {
            id: c++,
            callback: R,
            priorityLevel: E,
            startTime: N,
            expirationTime: $,
            sortIndex: -1
        }, N > M ? (E.sortIndex = N, t(u, E), n(a) === null && E === n(u) && (v ? (y(P), P = -1) : v = !0, Je(w, N - M))) : (E.sortIndex = $, t(a, E), g || m || (g = !0, Oe(S))), E
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(E) {
        var R = d;
        return function() {
            var N = d;
            d = R;
            try {
                return E.apply(this, arguments)
            } finally {
                d = N
            }
        }
    }
})(kf);
Pf.exports = kf;
var mm = Pf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf = _,
    Re = mm;

function x(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Tf = new Set,
    Dr = {};

function mn(e, t) {
    Hn(e, t), Hn(e + "Capture", t)
}

function Hn(e, t) {
    for (Dr[e] = t, e = 0; e < t.length; e++) Tf.add(t[e])
}
var mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ds = Object.prototype.hasOwnProperty,
    ym = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ba = {},
    eu = {};

function gm(e) {
    return Ds.call(eu, e) ? !0 : Ds.call(ba, e) ? !1 : ym.test(e) ? eu[e] = !0 : (ba[e] = !0, !1)
}

function vm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function wm(e, t, n, r) {
    if (t === null || typeof t > "u" || vm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function we(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ue[e] = new we(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ue[t] = new we(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ue[e] = new we(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ue[e] = new we(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ue[e] = new we(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ue[e] = new we(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var zl = /[\-:]([a-z])/g;

function Il(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(zl, Il);
    ue[t] = new we(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(zl, Il);
    ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(zl, Il);
    ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Bl(e, t, n, r) {
    var i = ue.hasOwnProperty(t) ? ue[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wm(t, n, i, r) && (n = null), r || i === null ? gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var St = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    si = Symbol.for("react.element"),
    xn = Symbol.for("react.portal"),
    Pn = Symbol.for("react.fragment"),
    Ul = Symbol.for("react.strict_mode"),
    Ms = Symbol.for("react.profiler"),
    Ef = Symbol.for("react.provider"),
    Vf = Symbol.for("react.context"),
    $l = Symbol.for("react.forward_ref"),
    As = Symbol.for("react.suspense"),
    Rs = Symbol.for("react.suspense_list"),
    Hl = Symbol.for("react.memo"),
    kt = Symbol.for("react.lazy"),
    Lf = Symbol.for("react.offscreen"),
    tu = Symbol.iterator;

function tr(e) {
    return e === null || typeof e != "object" ? null : (e = tu && e[tu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q = Object.assign,
    Wo;

function fr(e) {
    if (Wo === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Wo = t && t[1] || ""
    }
    return `
` + Wo + e
}
var Ko = !1;

function Go(e, t) {
    if (!e || Ko) return "";
    Ko = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            }
                    while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Ko = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fr(e) : ""
}

function Sm(e) {
    switch (e.tag) {
        case 5:
            return fr(e.type);
        case 16:
            return fr("Lazy");
        case 13:
            return fr("Suspense");
        case 19:
            return fr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Go(e.type, !1), e;
        case 11:
            return e = Go(e.type.render, !1), e;
        case 1:
            return e = Go(e.type, !0), e;
        default:
            return ""
    }
}

function _s(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Pn:
            return "Fragment";
        case xn:
            return "Portal";
        case Ms:
            return "Profiler";
        case Ul:
            return "StrictMode";
        case As:
            return "Suspense";
        case Rs:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Vf:
            return (e.displayName || "Context") + ".Consumer";
        case Ef:
            return (e._context.displayName || "Context") + ".Provider";
        case $l:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Hl:
            return t = e.displayName || null, t !== null ? t : _s(e.type) || "Memo";
        case kt:
            t = e._payload, e = e._init;
            try {
                return _s(e(t))
            } catch {}
    }
    return null
}

function xm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return _s(t);
        case 8:
            return t === Ul ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Ut(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Df(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Pm(e) {
    var t = Df(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function li(e) {
    e._valueTracker || (e._valueTracker = Pm(e))
}

function Mf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Df(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ns(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function nu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ut(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Af(e, t) {
    t = t.checked, t != null && Bl(e, "checked", t, !1)
}

function Fs(e, t) {
    Af(e, t);
    var n = Ut(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Os(e, t.type, n) : t.hasOwnProperty("defaultValue") && Os(e, t.type, Ut(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function ru(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Os(e, t, n) {
    (t !== "number" || Bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var dr = Array.isArray;

function jn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function js(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function iu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(x(92));
            if (dr(n)) {
                if (1 < n.length) throw Error(x(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Ut(n)
    }
}

function Rf(e, t) {
    var n = Ut(t.value),
        r = Ut(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function _f(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function zs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? _f(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ai, Nf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ai = ai || document.createElement("div"), ai.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ai.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Mr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var yr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    km = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function(e) {
    km.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e]
    })
});

function Ff(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px"
}

function Of(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Ff(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Cm = Q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Is(e, t) {
    if (t) {
        if (Cm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(x(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(x(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(x(62))
    }
}

function Bs(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Us = null;

function Wl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var $s = null,
    zn = null,
    In = null;

function su(e) {
    if (e = qr(e)) {
        if (typeof $s != "function") throw Error(x(280));
        var t = e.stateNode;
        t && (t = Co(t), $s(e.stateNode, e.type, t))
    }
}

function jf(e) {
    zn ? In ? In.push(e) : In = [e] : zn = e
}

function zf() {
    if (zn) {
        var e = zn,
            t = In;
        if (In = zn = null, su(e), t)
            for (e = 0; e < t.length; e++) su(t[e])
    }
}

function If(e, t) {
    return e(t)
}

function Bf() {}
var Qo = !1;

function Uf(e, t, n) {
    if (Qo) return e(t, n);
    Qo = !0;
    try {
        return If(e, t, n)
    } finally {
        Qo = !1, (zn !== null || In !== null) && (Bf(), zf())
    }
}

function Ar(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Co(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(x(231, t, typeof n));
    return n
}
var Hs = !1;
if (mt) try {
    var nr = {};
    Object.defineProperty(nr, "passive", {
        get: function() {
            Hs = !0
        }
    }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr)
} catch {
    Hs = !1
}

function Tm(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gr = !1,
    Ui = null,
    $i = !1,
    Ws = null,
    Em = {
        onError: function(e) {
            gr = !0, Ui = e
        }
    };

function Vm(e, t, n, r, i, o, s, l, a) {
    gr = !1, Ui = null, Tm.apply(Em, arguments)
}

function Lm(e, t, n, r, i, o, s, l, a) {
    if (Vm.apply(this, arguments), gr) {
        if (gr) {
            var u = Ui;
            gr = !1, Ui = null
        } else throw Error(x(198));
        $i || ($i = !0, Ws = u)
    }
}

function yn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function $f(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function lu(e) {
    if (yn(e) !== e) throw Error(x(188))
}

function Dm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = yn(e), t === null) throw Error(x(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return lu(i), e;
                if (o === r) return lu(i), t;
                o = o.sibling
            }
            throw Error(x(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, l = i.child; l;) {
                if (l === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (l === r) {
                    s = !0, r = i, n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (l === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(x(189))
            }
        }
        if (n.alternate !== r) throw Error(x(190))
    }
    if (n.tag !== 3) throw Error(x(188));
    return n.stateNode.current === n ? e : t
}

function Hf(e) {
    return e = Dm(e), e !== null ? Wf(e) : null
}

function Wf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Wf(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Kf = Re.unstable_scheduleCallback,
    au = Re.unstable_cancelCallback,
    Mm = Re.unstable_shouldYield,
    Am = Re.unstable_requestPaint,
    b = Re.unstable_now,
    Rm = Re.unstable_getCurrentPriorityLevel,
    Kl = Re.unstable_ImmediatePriority,
    Gf = Re.unstable_UserBlockingPriority,
    Hi = Re.unstable_NormalPriority,
    _m = Re.unstable_LowPriority,
    Qf = Re.unstable_IdlePriority,
    So = null,
    it = null;

function Nm(e) {
    if (it && typeof it.onCommitFiberRoot == "function") try {
        it.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : jm,
    Fm = Math.log,
    Om = Math.LN2;

function jm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fm(e) / Om | 0) | 0
}
var ui = 64,
    ci = 4194304;

function pr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Wi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = pr(l) : (o &= s, o !== 0 && (r = pr(o)))
    } else s = n & ~i, s !== 0 ? r = pr(s) : o !== 0 && (r = pr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ye(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function zm(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Im(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - Ye(o),
            l = 1 << s,
            a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = zm(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function Ks(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Yf() {
    var e = ui;
    return ui <<= 1, !(ui & 4194240) && (ui = 64), e
}

function Yo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Zr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ye(t), e[t] = n
}

function Bm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Ye(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Gl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ye(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var j = 0;

function Xf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zf, Ql, Jf, qf, bf, Gs = !1,
    fi = [],
    Mt = null,
    At = null,
    Rt = null,
    Rr = new Map,
    _r = new Map,
    Et = [],
    Um = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function uu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Mt = null;
            break;
        case "dragenter":
        case "dragleave":
            At = null;
            break;
        case "mouseover":
        case "mouseout":
            Rt = null;
            break;
        case "pointerover":
        case "pointerout":
            Rr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            _r.delete(t.pointerId)
    }
}

function rr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = qr(t), t !== null && Ql(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function $m(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Mt = rr(Mt, e, t, n, r, i), !0;
        case "dragenter":
            return At = rr(At, e, t, n, r, i), !0;
        case "mouseover":
            return Rt = rr(Rt, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Rr.set(o, rr(Rr.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, _r.set(o, rr(_r.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function ed(e) {
    var t = rn(e.target);
    if (t !== null) {
        var n = yn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = $f(n), t !== null) {
                    e.blockedOn = t, bf(e.priority, function() {
                        Jf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Li(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Us = r, n.target.dispatchEvent(r), Us = null
        } else return t = qr(n), t !== null && Ql(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function cu(e, t, n) {
    Li(e) && n.delete(t)
}

function Hm() {
    Gs = !1, Mt !== null && Li(Mt) && (Mt = null), At !== null && Li(At) && (At = null), Rt !== null && Li(Rt) && (Rt = null), Rr.forEach(cu), _r.forEach(cu)
}

function ir(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Gs || (Gs = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Hm)))
}

function Nr(e) {
    function t(i) {
        return ir(i, e)
    }
    if (0 < fi.length) {
        ir(fi[0], e);
        for (var n = 1; n < fi.length; n++) {
            var r = fi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Mt !== null && ir(Mt, e), At !== null && ir(At, e), Rt !== null && ir(Rt, e), Rr.forEach(t), _r.forEach(t), n = 0; n < Et.length; n++) r = Et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Et.length && (n = Et[0], n.blockedOn === null);) ed(n), n.blockedOn === null && Et.shift()
}
var Bn = St.ReactCurrentBatchConfig,
    Ki = !0;

function Wm(e, t, n, r) {
    var i = j,
        o = Bn.transition;
    Bn.transition = null;
    try {
        j = 1, Yl(e, t, n, r)
    } finally {
        j = i, Bn.transition = o
    }
}

function Km(e, t, n, r) {
    var i = j,
        o = Bn.transition;
    Bn.transition = null;
    try {
        j = 4, Yl(e, t, n, r)
    } finally {
        j = i, Bn.transition = o
    }
}

function Yl(e, t, n, r) {
    if (Ki) {
        var i = Qs(e, t, n, r);
        if (i === null) is(e, t, r, Gi, n), uu(e, r);
        else if ($m(i, e, t, n, r)) r.stopPropagation();
        else if (uu(e, r), t & 4 && -1 < Um.indexOf(e)) {
            for (; i !== null;) {
                var o = qr(i);
                if (o !== null && Zf(o), o = Qs(e, t, n, r), o === null && is(e, t, r, Gi, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else is(e, t, r, null, n)
    }
}
var Gi = null;

function Qs(e, t, n, r) {
    if (Gi = null, e = Wl(r), e = rn(e), e !== null)
        if (t = yn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = $f(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Gi = e, null
}

function td(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Rm()) {
                case Kl:
                    return 1;
                case Gf:
                    return 4;
                case Hi:
                case _m:
                    return 16;
                case Qf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Lt = null,
    Xl = null,
    Di = null;

function nd() {
    if (Di) return Di;
    var e, t = Xl,
        n = t.length,
        r, i = "value" in Lt ? Lt.value : Lt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Di = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Mi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function di() {
    return !0
}

function fu() {
    return !1
}

function Fe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? di : fu, this.isPropagationStopped = fu, this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = di)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = di)
        },
        persist: function() {},
        isPersistent: di
    }), t
}
var bn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Zl = Fe(bn),
    Jr = Q({}, bn, {
        view: 0,
        detail: 0
    }),
    Gm = Fe(Jr),
    Xo, Zo, or, xo = Q({}, Jr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (Xo = e.screenX - or.screenX, Zo = e.screenY - or.screenY) : Zo = Xo = 0, or = e), Xo)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Zo
        }
    }),
    du = Fe(xo),
    Qm = Q({}, xo, {
        dataTransfer: 0
    }),
    Ym = Fe(Qm),
    Xm = Q({}, Jr, {
        relatedTarget: 0
    }),
    Jo = Fe(Xm),
    Zm = Q({}, bn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Jm = Fe(Zm),
    qm = Q({}, bn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    bm = Fe(qm),
    ey = Q({}, bn, {
        data: 0
    }),
    pu = Fe(ey),
    ty = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    ny = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    ry = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function iy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1
}

function Jl() {
    return iy
}
var oy = Q({}, Jr, {
        key: function(e) {
            if (e.key) {
                var t = ty[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ny[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Jl,
        charCode: function(e) {
            return e.type === "keypress" ? Mi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    sy = Fe(oy),
    ly = Q({}, xo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    hu = Fe(ly),
    ay = Q({}, Jr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Jl
    }),
    uy = Fe(ay),
    cy = Q({}, bn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    fy = Fe(cy),
    dy = Q({}, xo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    py = Fe(dy),
    hy = [9, 13, 27, 32],
    ql = mt && "CompositionEvent" in window,
    vr = null;
mt && "documentMode" in document && (vr = document.documentMode);
var my = mt && "TextEvent" in window && !vr,
    rd = mt && (!ql || vr && 8 < vr && 11 >= vr),
    mu = String.fromCharCode(32),
    yu = !1;

function id(e, t) {
    switch (e) {
        case "keyup":
            return hy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function od(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var kn = !1;

function yy(e, t) {
    switch (e) {
        case "compositionend":
            return od(t);
        case "keypress":
            return t.which !== 32 ? null : (yu = !0, mu);
        case "textInput":
            return e = t.data, e === mu && yu ? null : e;
        default:
            return null
    }
}

function gy(e, t) {
    if (kn) return e === "compositionend" || !ql && id(e, t) ? (e = nd(), Di = Xl = Lt = null, kn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return rd && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var vy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vy[e.type] : t === "textarea"
}

function sd(e, t, n, r) {
    jf(r), t = Qi(t, "onChange"), 0 < t.length && (n = new Zl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var wr = null,
    Fr = null;

function wy(e) {
    gd(e, 0)
}

function Po(e) {
    var t = En(e);
    if (Mf(t)) return e
}

function Sy(e, t) {
    if (e === "change") return t
}
var ld = !1;
if (mt) {
    var qo;
    if (mt) {
        var bo = "oninput" in document;
        if (!bo) {
            var vu = document.createElement("div");
            vu.setAttribute("oninput", "return;"), bo = typeof vu.oninput == "function"
        }
        qo = bo
    } else qo = !1;
    ld = qo && (!document.documentMode || 9 < document.documentMode)
}

function wu() {
    wr && (wr.detachEvent("onpropertychange", ad), Fr = wr = null)
}

function ad(e) {
    if (e.propertyName === "value" && Po(Fr)) {
        var t = [];
        sd(t, Fr, e, Wl(e)), Uf(wy, t)
    }
}

function xy(e, t, n) {
    e === "focusin" ? (wu(), wr = t, Fr = n, wr.attachEvent("onpropertychange", ad)) : e === "focusout" && wu()
}

function Py(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Po(Fr)
}

function ky(e, t) {
    if (e === "click") return Po(t)
}

function Cy(e, t) {
    if (e === "input" || e === "change") return Po(t)
}

function Ty(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : Ty;

function Or(e, t) {
    if (Ze(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ds.call(t, i) || !Ze(e[i], t[i])) return !1
    }
    return !0
}

function Su(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function xu(e, t) {
    var n = Su(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Su(n)
    }
}

function ud(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ud(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function cd() {
    for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Bi(e.document)
    }
    return t
}

function bl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Ey(e) {
    var t = cd(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ud(n.ownerDocument.documentElement, n)) {
        if (r !== null && bl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = xu(n, o);
                var s = xu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Vy = mt && "documentMode" in document && 11 >= document.documentMode,
    Cn = null,
    Ys = null,
    Sr = null,
    Xs = !1;

function Pu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xs || Cn == null || Cn !== Bi(r) || (r = Cn, "selectionStart" in r && bl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Sr && Or(Sr, r) || (Sr = r, r = Qi(Ys, "onSelect"), 0 < r.length && (t = new Zl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Cn)))
}

function pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Tn = {
        animationend: pi("Animation", "AnimationEnd"),
        animationiteration: pi("Animation", "AnimationIteration"),
        animationstart: pi("Animation", "AnimationStart"),
        transitionend: pi("Transition", "TransitionEnd")
    },
    es = {},
    fd = {};
mt && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);

function ko(e) {
    if (es[e]) return es[e];
    if (!Tn[e]) return e;
    var t = Tn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in fd) return es[e] = t[n];
    return e
}
var dd = ko("animationend"),
    pd = ko("animationiteration"),
    hd = ko("animationstart"),
    md = ko("transitionend"),
    yd = new Map,
    ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Kt(e, t) {
    yd.set(e, t), mn(t, [e])
}
for (var ts = 0; ts < ku.length; ts++) {
    var ns = ku[ts],
        Ly = ns.toLowerCase(),
        Dy = ns[0].toUpperCase() + ns.slice(1);
    Kt(Ly, "on" + Dy)
}
Kt(dd, "onAnimationEnd");
Kt(pd, "onAnimationIteration");
Kt(hd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(md, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    My = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));

function Cu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Lm(r, t, void 0, e), e.currentTarget = null
}

function gd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
                    Cu(i, l, u), o = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
                        Cu(i, l, u), o = a
                    }
        }
    }
    if ($i) throw e = Ws, $i = !1, Ws = null, e
}

function I(e, t) {
    var n = t[el];
    n === void 0 && (n = t[el] = new Set);
    var r = e + "__bubble";
    n.has(r) || (vd(t, e, 2, !1), n.add(r))
}

function rs(e, t, n) {
    var r = 0;
    t && (r |= 4), vd(n, e, r, t)
}
var hi = "_reactListening" + Math.random().toString(36).slice(2);

function jr(e) {
    if (!e[hi]) {
        e[hi] = !0, Tf.forEach(function(n) {
            n !== "selectionchange" && (My.has(n) || rs(n, !1, e), rs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[hi] || (t[hi] = !0, rs("selectionchange", !1, t))
    }
}

function vd(e, t, n, r) {
    switch (td(t)) {
        case 1:
            var i = Wm;
            break;
        case 4:
            i = Km;
            break;
        default:
            i = Yl
    }
    n = i.bind(null, t, n, e), i = void 0, !Hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function is(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = rn(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = o = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    Uf(function() {
        var u = o,
            c = Wl(n),
            f = [];
        e: {
            var d = yd.get(e);
            if (d !== void 0) {
                var m = Zl,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (Mi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = sy;
                        break;
                    case "focusin":
                        g = "focus", m = Jo;
                        break;
                    case "focusout":
                        g = "blur", m = Jo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Jo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = du;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = Ym;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = uy;
                        break;
                    case dd:
                    case pd:
                    case hd:
                        m = Jm;
                        break;
                    case md:
                        m = fy;
                        break;
                    case "scroll":
                        m = Gm;
                        break;
                    case "wheel":
                        m = py;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = bm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = hu
                }
                var v = (t & 4) !== 0,
                    T = !v && e === "scroll",
                    y = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var p = u, h; p !== null;) {
                    h = p;
                    var w = h.stateNode;
                    if (h.tag === 5 && w !== null && (h = w, y !== null && (w = Ar(p, y), w != null && v.push(zr(p, w, h)))), T) break;
                    p = p.return
                }
                0 < v.length && (d = new m(d, g, null, n, c), f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", d && n !== Us && (g = n.relatedTarget || n.fromElement) && (rn(g) || g[yt])) break e;
                if ((m || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, m ? (g = n.relatedTarget || n.toElement, m = u, g = g ? rn(g) : null, g !== null && (T = yn(g), g !== T || g.tag !== 5 && g.tag !== 6) && (g = null)) : (m = null, g = u), m !== g)) {
                    if (v = du, w = "onMouseLeave", y = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = hu, w = "onPointerLeave", y = "onPointerEnter", p = "pointer"), T = m == null ? d : En(m), h = g == null ? d : En(g), d = new v(w, p + "leave", m, n, c), d.target = T, d.relatedTarget = h, w = null, rn(c) === u && (v = new v(y, p + "enter", g, n, c), v.target = h, v.relatedTarget = T, w = v), T = w, m && g) t: {
                        for (v = m, y = g, p = 0, h = v; h; h = Sn(h)) p++;
                        for (h = 0, w = y; w; w = Sn(w)) h++;
                        for (; 0 < p - h;) v = Sn(v),
                        p--;
                        for (; 0 < h - p;) y = Sn(y),
                        h--;
                        for (; p--;) {
                            if (v === y || y !== null && v === y.alternate) break t;
                            v = Sn(v), y = Sn(y)
                        }
                        v = null
                    }
                    else v = null;
                    m !== null && Tu(f, d, m, v, !1), g !== null && T !== null && Tu(f, T, g, v, !0)
                }
            }
            e: {
                if (d = u ? En(u) : window, m = d.nodeName && d.nodeName.toLowerCase(), m === "select" || m === "input" && d.type === "file") var S = Sy;
                else if (gu(d))
                    if (ld) S = Cy;
                    else {
                        S = Py;
                        var C = xy
                    }
                else(m = d.nodeName) && m.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = ky);
                if (S && (S = S(e, u))) {
                    sd(f, S, n, c);
                    break e
                }
                C && C(e, d, u),
                e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Os(d, "number", d.value)
            }
            switch (C = u ? En(u) : window, e) {
                case "focusin":
                    (gu(C) || C.contentEditable === "true") && (Cn = C, Ys = u, Sr = null);
                    break;
                case "focusout":
                    Sr = Ys = Cn = null;
                    break;
                case "mousedown":
                    Xs = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Xs = !1, Pu(f, n, c);
                    break;
                case "selectionchange":
                    if (Vy) break;
                case "keydown":
                case "keyup":
                    Pu(f, n, c)
            }
            var k;
            if (ql) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else kn ? id(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (rd && n.locale !== "ko" && (kn || P !== "onCompositionStart" ? P === "onCompositionEnd" && kn && (k = nd()) : (Lt = c, Xl = "value" in Lt ? Lt.value : Lt.textContent, kn = !0)), C = Qi(u, P), 0 < C.length && (P = new pu(P, e, null, n, c), f.push({
                event: P,
                listeners: C
            }), k ? P.data = k : (k = od(n), k !== null && (P.data = k)))),
            (k = my ? yy(e, n) : gy(e, n)) && (u = Qi(u, "onBeforeInput"), 0 < u.length && (c = new pu("onBeforeInput", "beforeinput", null, n, c), f.push({
                event: c,
                listeners: u
            }), c.data = k))
        }
        gd(f, t)
    })
}

function zr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Ar(e, n), o != null && r.unshift(zr(e, o, i)), o = Ar(e, t), o != null && r.push(zr(e, o, i))), e = e.return
    }
    return r
}

function Sn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Tu(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, i ? (a = Ar(n, o), a != null && s.unshift(zr(n, a, l))) : i || (a = Ar(n, o), a != null && s.push(zr(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Ay = /\r\n?/g,
    Ry = /\u0000|\uFFFD/g;

function Eu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ay, `
`).replace(Ry, "")
}

function mi(e, t, n) {
    if (t = Eu(t), Eu(e) !== t && n) throw Error(x(425))
}

function Yi() {}
var Zs = null,
    Js = null;

function qs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var bs = typeof setTimeout == "function" ? setTimeout : void 0,
    _y = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vu = typeof Promise == "function" ? Promise : void 0,
    Ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vu < "u" ? function(e) {
        return Vu.resolve(null).then(e).catch(Fy)
    } : bs;

function Fy(e) {
    setTimeout(function() {
        throw e
    })
}

function os(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Nr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Nr(t)
}

function _t(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Lu(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var er = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + er,
    Ir = "__reactProps$" + er,
    yt = "__reactContainer$" + er,
    el = "__reactEvents$" + er,
    Oy = "__reactListeners$" + er,
    jy = "__reactHandles$" + er;

function rn(e) {
    var t = e[nt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[yt] || n[nt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Lu(e); e !== null;) {
                    if (n = e[nt]) return n;
                    e = Lu(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function qr(e) {
    return e = e[nt] || e[yt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function En(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(x(33))
}

function Co(e) {
    return e[Ir] || null
}
var tl = [],
    Vn = -1;

function Gt(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > Vn || (e.current = tl[Vn], tl[Vn] = null, Vn--)
}

function z(e, t) {
    Vn++, tl[Vn] = e.current, e.current = t
}
var $t = {},
    pe = Gt($t),
    Ce = Gt(!1),
    cn = $t;

function Wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Te(e) {
    return e = e.childContextTypes, e != null
}

function Xi() {
    B(Ce), B(pe)
}

function Du(e, t, n) {
    if (pe.current !== $t) throw Error(x(168));
    z(pe, t), z(Ce, n)
}

function wd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(x(108, xm(e) || "Unknown", i));
    return Q({}, n, r)
}

function Zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, cn = pe.current, z(pe, e), z(Ce, Ce.current), !0
}

function Mu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(x(169));
    n ? (e = wd(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, B(Ce), B(pe), z(pe, e)) : B(Ce), z(Ce, n)
}
var at = null,
    To = !1,
    ss = !1;

function Sd(e) {
    at === null ? at = [e] : at.push(e)
}

function zy(e) {
    To = !0, Sd(e)
}

function Qt() {
    if (!ss && at !== null) {
        ss = !0;
        var e = 0,
            t = j;
        try {
            var n = at;
            for (j = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            at = null, To = !1
        } catch (i) {
            throw at !== null && (at = at.slice(e + 1)), Kf(Kl, Qt), i
        } finally {
            j = t, ss = !1
        }
    }
    return null
}
var Ln = [],
    Dn = 0,
    Ji = null,
    qi = 0,
    ze = [],
    Ie = 0,
    fn = null,
    ut = 1,
    ct = "";

function bt(e, t) {
    Ln[Dn++] = qi, Ln[Dn++] = Ji, Ji = e, qi = t
}

function xd(e, t, n) {
    ze[Ie++] = ut, ze[Ie++] = ct, ze[Ie++] = fn, fn = e;
    var r = ut;
    e = ct;
    var i = 32 - Ye(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Ye(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, ut = 1 << 32 - Ye(t) + i | n << i | r, ct = o + e
    } else ut = 1 << o | n << i | r, ct = e
}

function ea(e) {
    e.return !== null && (bt(e, 1), xd(e, 1, 0))
}

function ta(e) {
    for (; e === Ji;) Ji = Ln[--Dn], Ln[Dn] = null, qi = Ln[--Dn], Ln[Dn] = null;
    for (; e === fn;) fn = ze[--Ie], ze[Ie] = null, ct = ze[--Ie], ze[Ie] = null, ut = ze[--Ie], ze[Ie] = null
}
var Ae = null,
    Me = null,
    H = !1,
    Qe = null;

function Pd(e, t) {
    var n = Be(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Au(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = _t(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Me = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? {
                id: ut,
                overflow: ct
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Be(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Me = null, !0) : !1;
        default:
            return !1
    }
}

function nl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function rl(e) {
    if (H) {
        var t = Me;
        if (t) {
            var n = t;
            if (!Au(e, t)) {
                if (nl(e)) throw Error(x(418));
                t = _t(n.nextSibling);
                var r = Ae;
                t && Au(e, t) ? Pd(r, n) : (e.flags = e.flags & -4097 | 2, H = !1, Ae = e)
            }
        } else {
            if (nl(e)) throw Error(x(418));
            e.flags = e.flags & -4097 | 2, H = !1, Ae = e
        }
    }
}

function Ru(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e
}

function yi(e) {
    if (e !== Ae) return !1;
    if (!H) return Ru(e), H = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qs(e.type, e.memoizedProps)), t && (t = Me)) {
        if (nl(e)) throw kd(), Error(x(418));
        for (; t;) Pd(e, t), t = _t(t.nextSibling)
    }
    if (Ru(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(x(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = _t(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else Me = Ae ? _t(e.stateNode.nextSibling) : null;
    return !0
}

function kd() {
    for (var e = Me; e;) e = _t(e.nextSibling)
}

function Kn() {
    Me = Ae = null, H = !1
}

function na(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}
var Iy = St.ReactCurrentBatchConfig;

function Ke(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var bi = Gt(null),
    eo = null,
    Mn = null,
    ra = null;

function ia() {
    ra = Mn = eo = null
}

function oa(e) {
    var t = bi.current;
    B(bi), e._currentValue = t
}

function il(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Un(e, t) {
    eo = e, ra = Mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0), e.firstContext = null)
}

function $e(e) {
    var t = e._currentValue;
    if (ra !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Mn === null) {
            if (eo === null) throw Error(x(308));
            Mn = e, eo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Mn = Mn.next = e;
    return t
}
var on = null;

function sa(e) {
    on === null ? on = [e] : on.push(e)
}

function Cd(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, sa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, gt(e, r)
}

function gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;

function la(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Td(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Nt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, O & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, gt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, sa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, gt(e, n)
}

function Ai(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n)
    }
}

function _u(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function to(e, t, n, r) {
    var i = e.updateQueue;
    Ct = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? o = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0, c = u = a = null, l = o;
        do {
            var d = l.lane,
                m = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var g = e,
                        v = l;
                    switch (d = t, m = n, v.tag) {
                        case 1:
                            if (g = v.payload, typeof g == "function") {
                                f = g.call(m, f, d);
                                break e
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = v.payload, d = typeof g == "function" ? g.call(m, f, d) : g, d == null) break e;
                            f = Q({}, f, d);
                            break e;
                        case 2:
                            Ct = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l))
            } else m = {
                eventTime: m,
                lane: d,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = m, a = f) : c = c.next = m, s |= d;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null
            }
        } while (1);
        if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        pn |= s, e.lanes = s, e.memoizedState = f
    }
}

function Nu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(x(191, i));
                i.call(r)
            }
        }
}
var Ed = new Cf.Component().refs;

function ol(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Eo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? yn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ge(),
            i = Ot(e),
            o = dt(r, i);
        o.payload = t, n != null && (o.callback = n), t = Nt(e, o, i), t !== null && (Xe(t, e, i, r), Ai(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ge(),
            i = Ot(e),
            o = dt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Nt(e, o, i), t !== null && (Xe(t, e, i, r), Ai(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ge(),
            r = Ot(e),
            i = dt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Nt(e, i, r), t !== null && (Xe(t, e, r, n), Ai(t, e, r))
    }
};

function Fu(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, o) : !0
}

function Vd(e, t, n) {
    var r = !1,
        i = $t,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = $e(o) : (i = Te(t) ? cn : pe.current, r = t.contextTypes, o = (r = r != null) ? Wn(e, i) : $t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Eo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Ou(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Eo.enqueueReplaceState(t, t.state, null)
}

function sl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = Ed, la(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = $e(o) : (o = Te(t) ? cn : pe.current, i.context = Wn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ol(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Eo.enqueueReplaceState(i, i.state, null), to(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function sr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(x(309));
                var r = n.stateNode
            }
            if (!r) throw Error(x(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                l === Ed && (l = i.refs = {}), s === null ? delete l[o] : l[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(x(284));
        if (!n._owner) throw Error(x(290, e))
    }
    return e
}

function gi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(x(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ju(e) {
    var t = e._init;
    return t(e._payload)
}

function Ld(e) {
    function t(y, p) {
        if (e) {
            var h = y.deletions;
            h === null ? (y.deletions = [p], y.flags |= 16) : h.push(p)
        }
    }

    function n(y, p) {
        if (!e) return null;
        for (; p !== null;) t(y, p), p = p.sibling;
        return null
    }

    function r(y, p) {
        for (y = new Map; p !== null;) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
        return y
    }

    function i(y, p) {
        return y = jt(y, p), y.index = 0, y.sibling = null, y
    }

    function o(y, p, h) {
        return y.index = h, e ? (h = y.alternate, h !== null ? (h = h.index, h < p ? (y.flags |= 2, p) : h) : (y.flags |= 2, p)) : (y.flags |= 1048576, p)
    }

    function s(y) {
        return e && y.alternate === null && (y.flags |= 2), y
    }

    function l(y, p, h, w) {
        return p === null || p.tag !== 6 ? (p = ps(h, y.mode, w), p.return = y, p) : (p = i(p, h), p.return = y, p)
    }

    function a(y, p, h, w) {
        var S = h.type;
        return S === Pn ? c(y, p, h.props.children, w, h.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kt && ju(S) === p.type) ? (w = i(p, h.props), w.ref = sr(y, p, h), w.return = y, w) : (w = ji(h.type, h.key, h.props, null, y.mode, w), w.ref = sr(y, p, h), w.return = y, w)
    }

    function u(y, p, h, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = hs(h, y.mode, w), p.return = y, p) : (p = i(p, h.children || []), p.return = y, p)
    }

    function c(y, p, h, w, S) {
        return p === null || p.tag !== 7 ? (p = un(h, y.mode, w, S), p.return = y, p) : (p = i(p, h), p.return = y, p)
    }

    function f(y, p, h) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = ps("" + p, y.mode, h), p.return = y, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case si:
                    return h = ji(p.type, p.key, p.props, null, y.mode, h), h.ref = sr(y, null, p), h.return = y, h;
                case xn:
                    return p = hs(p, y.mode, h), p.return = y, p;
                case kt:
                    var w = p._init;
                    return f(y, w(p._payload), h)
            }
            if (dr(p) || tr(p)) return p = un(p, y.mode, h, null), p.return = y, p;
            gi(y, p)
        }
        return null
    }

    function d(y, p, h, w) {
        var S = p !== null ? p.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : l(y, p, "" + h, w);
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case si:
                    return h.key === S ? a(y, p, h, w) : null;
                case xn:
                    return h.key === S ? u(y, p, h, w) : null;
                case kt:
                    return S = h._init, d(y, p, S(h._payload), w)
            }
            if (dr(h) || tr(h)) return S !== null ? null : c(y, p, h, w, null);
            gi(y, h)
        }
        return null
    }

    function m(y, p, h, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(h) || null, l(p, y, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case si:
                    return y = y.get(w.key === null ? h : w.key) || null, a(p, y, w, S);
                case xn:
                    return y = y.get(w.key === null ? h : w.key) || null, u(p, y, w, S);
                case kt:
                    var C = w._init;
                    return m(y, p, h, C(w._payload), S)
            }
            if (dr(w) || tr(w)) return y = y.get(h) || null, c(p, y, w, S, null);
            gi(p, w)
        }
        return null
    }

    function g(y, p, h, w) {
        for (var S = null, C = null, k = p, P = p = 0, A = null; k !== null && P < h.length; P++) {
            k.index > P ? (A = k, k = null) : A = k.sibling;
            var D = d(y, k, h[P], w);
            if (D === null) {
                k === null && (k = A);
                break
            }
            e && k && D.alternate === null && t(y, k), p = o(D, p, P), C === null ? S = D : C.sibling = D, C = D, k = A
        }
        if (P === h.length) return n(y, k), H && bt(y, P), S;
        if (k === null) {
            for (; P < h.length; P++) k = f(y, h[P], w), k !== null && (p = o(k, p, P), C === null ? S = k : C.sibling = k, C = k);
            return H && bt(y, P), S
        }
        for (k = r(y, k); P < h.length; P++) A = m(k, y, P, h[P], w), A !== null && (e && A.alternate !== null && k.delete(A.key === null ? P : A.key), p = o(A, p, P), C === null ? S = A : C.sibling = A, C = A);
        return e && k.forEach(function(Z) {
            return t(y, Z)
        }), H && bt(y, P), S
    }

    function v(y, p, h, w) {
        var S = tr(h);
        if (typeof S != "function") throw Error(x(150));
        if (h = S.call(h), h == null) throw Error(x(151));
        for (var C = S = null, k = p, P = p = 0, A = null, D = h.next(); k !== null && !D.done; P++, D = h.next()) {
            k.index > P ? (A = k, k = null) : A = k.sibling;
            var Z = d(y, k, D.value, w);
            if (Z === null) {
                k === null && (k = A);
                break
            }
            e && k && Z.alternate === null && t(y, k), p = o(Z, p, P), C === null ? S = Z : C.sibling = Z, C = Z, k = A
        }
        if (D.done) return n(y, k), H && bt(y, P), S;
        if (k === null) {
            for (; !D.done; P++, D = h.next()) D = f(y, D.value, w), D !== null && (p = o(D, p, P), C === null ? S = D : C.sibling = D, C = D);
            return H && bt(y, P), S
        }
        for (k = r(y, k); !D.done; P++, D = h.next()) D = m(k, y, P, D.value, w), D !== null && (e && D.alternate !== null && k.delete(D.key === null ? P : D.key), p = o(D, p, P), C === null ? S = D : C.sibling = D, C = D);
        return e && k.forEach(function(Se) {
            return t(y, Se)
        }), H && bt(y, P), S
    }

    function T(y, p, h, w) {
        if (typeof h == "object" && h !== null && h.type === Pn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case si:
                    e: {
                        for (var S = h.key, C = p; C !== null;) {
                            if (C.key === S) {
                                if (S = h.type, S === Pn) {
                                    if (C.tag === 7) {
                                        n(y, C.sibling), p = i(C, h.props.children), p.return = y, y = p;
                                        break e
                                    }
                                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === kt && ju(S) === C.type) {
                                    n(y, C.sibling), p = i(C, h.props), p.ref = sr(y, C, h), p.return = y, y = p;
                                    break e
                                }
                                n(y, C);
                                break
                            } else t(y, C);
                            C = C.sibling
                        }
                        h.type === Pn ? (p = un(h.props.children, y.mode, w, h.key), p.return = y, y = p) : (w = ji(h.type, h.key, h.props, null, y.mode, w), w.ref = sr(y, p, h), w.return = y, y = w)
                    }
                    return s(y);
                case xn:
                    e: {
                        for (C = h.key; p !== null;) {
                            if (p.key === C)
                                if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                    n(y, p.sibling), p = i(p, h.children || []), p.return = y, y = p;
                                    break e
                                } else {
                                    n(y, p);
                                    break
                                }
                            else t(y, p);
                            p = p.sibling
                        }
                        p = hs(h, y.mode, w),
                        p.return = y,
                        y = p
                    }
                    return s(y);
                case kt:
                    return C = h._init, T(y, p, C(h._payload), w)
            }
            if (dr(h)) return g(y, p, h, w);
            if (tr(h)) return v(y, p, h, w);
            gi(y, h)
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(y, p.sibling), p = i(p, h), p.return = y, y = p) : (n(y, p), p = ps(h, y.mode, w), p.return = y, y = p), s(y)) : n(y, p)
    }
    return T
}
var Gn = Ld(!0),
    Dd = Ld(!1),
    br = {},
    ot = Gt(br),
    Br = Gt(br),
    Ur = Gt(br);

function sn(e) {
    if (e === br) throw Error(x(174));
    return e
}

function aa(e, t) {
    switch (z(Ur, t), z(Br, e), z(ot, br), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : zs(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zs(t, e)
    }
    B(ot), z(ot, t)
}

function Qn() {
    B(ot), B(Br), B(Ur)
}

function Md(e) {
    sn(Ur.current);
    var t = sn(ot.current),
        n = zs(t, e.type);
    t !== n && (z(Br, e), z(ot, n))
}

function ua(e) {
    Br.current === e && (B(ot), B(Br))
}
var W = Gt(0);

function no(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ls = [];

function ca() {
    for (var e = 0; e < ls.length; e++) ls[e]._workInProgressVersionPrimary = null;
    ls.length = 0
}
var Ri = St.ReactCurrentDispatcher,
    as = St.ReactCurrentBatchConfig,
    dn = 0,
    G = null,
    ne = null,
    oe = null,
    ro = !1,
    xr = !1,
    $r = 0,
    By = 0;

function ce() {
    throw Error(x(321))
}

function fa(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n])) return !1;
    return !0
}

function da(e, t, n, r, i, o) {
    if (dn = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ri.current = e === null || e.memoizedState === null ? Wy : Ky, e = n(r, i), xr) {
        o = 0;
        do {
            if (xr = !1, $r = 0, 25 <= o) throw Error(x(301));
            o += 1, oe = ne = null, t.updateQueue = null, Ri.current = Gy, e = n(r, i)
        } while (xr)
    }
    if (Ri.current = io, t = ne !== null && ne.next !== null, dn = 0, oe = ne = G = null, ro = !1, t) throw Error(x(300));
    return e
}

function pa() {
    var e = $r !== 0;
    return $r = 0, e
}

function et() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e, oe
}

function He() {
    if (ne === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ne.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null) oe = t, ne = e;
    else {
        if (e === null) throw Error(x(310));
        ne = e, e = {
            memoizedState: ne.memoizedState,
            baseState: ne.baseState,
            baseQueue: ne.baseQueue,
            queue: ne.queue,
            next: null
        }, oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}

function Hr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function us(e) {
    var t = He(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = ne,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = o;
        do {
            var c = u.lane;
            if ((dn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, G.lanes |= c, pn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l, Ze(r, t.memoizedState) || (ke = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, G.lanes |= o, pn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function cs(e) {
    var t = He(),
        n = t.queue;
    if (n === null) throw Error(x(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        Ze(o, t.memoizedState) || (ke = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Ad() {}

function Rd(e, t) {
    var n = G,
        r = He(),
        i = t(),
        o = !Ze(r.memoizedState, i);
    if (o && (r.memoizedState = i, ke = !0), r = r.queue, ha(Fd.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048, Wr(9, Nd.bind(null, n, r, i, t), void 0, null), se === null) throw Error(x(349));
        dn & 30 || _d(n, t, i)
    }
    return i
}

function _d(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = G.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Nd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Od(t) && jd(e)
}

function Fd(e, t, n) {
    return n(function() {
        Od(t) && jd(e)
    })
}

function Od(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n)
    } catch {
        return !0
    }
}

function jd(e) {
    var t = gt(e, 1);
    t !== null && Xe(t, e, 1, -1)
}

function zu(e) {
    var t = et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Hy.bind(null, G, e), [t.memoizedState, e]
}

function Wr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = G.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, G.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function zd() {
    return He().memoizedState
}

function _i(e, t, n, r) {
    var i = et();
    G.flags |= e, i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Vo(e, t, n, r) {
    var i = He();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ne !== null) {
        var s = ne.memoizedState;
        if (o = s.destroy, r !== null && fa(r, s.deps)) {
            i.memoizedState = Wr(t, n, o, r);
            return
        }
    }
    G.flags |= e, i.memoizedState = Wr(1 | t, n, o, r)
}

function Iu(e, t) {
    return _i(8390656, 8, e, t)
}

function ha(e, t) {
    return Vo(2048, 8, e, t)
}

function Id(e, t) {
    return Vo(4, 2, e, t)
}

function Bd(e, t) {
    return Vo(4, 4, e, t)
}

function Ud(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function $d(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Vo(4, 4, Ud.bind(null, t, e), n)
}

function ma() {}

function Hd(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Wd(e, t) {
    var n = He();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Kd(e, t, n) {
    return dn & 21 ? (Ze(n, t) || (n = Yf(), G.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ke = !0), e.memoizedState = n)
}

function Uy(e, t) {
    var n = j;
    j = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = as.transition;
    as.transition = {};
    try {
        e(!1), t()
    } finally {
        j = n, as.transition = r
    }
}

function Gd() {
    return He().memoizedState
}

function $y(e, t, n) {
    var r = Ot(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Qd(e)) Yd(t, n);
    else if (n = Cd(e, t, n, r), n !== null) {
        var i = ge();
        Xe(n, e, r, i), Xd(n, t, r)
    }
}

function Hy(e, t, n) {
    var r = Ot(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Qd(e)) Yd(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                l = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = l, Ze(l, s)) {
                var a = t.interleaved;
                a === null ? (i.next = i, sa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Cd(e, t, i, r), n !== null && (i = ge(), Xe(n, e, r, i), Xd(n, t, r))
    }
}

function Qd(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}

function Yd(e, t) {
    xr = ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Xd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Gl(e, n)
    }
}
var io = {
        readContext: $e,
        useCallback: ce,
        useContext: ce,
        useEffect: ce,
        useImperativeHandle: ce,
        useInsertionEffect: ce,
        useLayoutEffect: ce,
        useMemo: ce,
        useReducer: ce,
        useRef: ce,
        useState: ce,
        useDebugValue: ce,
        useDeferredValue: ce,
        useTransition: ce,
        useMutableSource: ce,
        useSyncExternalStore: ce,
        useId: ce,
        unstable_isNewReconciler: !1
    },
    Wy = {
        readContext: $e,
        useCallback: function(e, t) {
            return et().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: $e,
        useEffect: Iu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, _i(4194308, 4, Ud.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return _i(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return _i(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = et();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = et();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = $y.bind(null, G, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = et();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: zu,
        useDebugValue: ma,
        useDeferredValue: function(e) {
            return et().memoizedState = e
        },
        useTransition: function() {
            var e = zu(!1),
                t = e[0];
            return e = Uy.bind(null, e[1]), et().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = G,
                i = et();
            if (H) {
                if (n === void 0) throw Error(x(407));
                n = n()
            } else {
                if (n = t(), se === null) throw Error(x(349));
                dn & 30 || _d(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Iu(Fd.bind(null, r, o, e), [e]), r.flags |= 2048, Wr(9, Nd.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = et(),
                t = se.identifierPrefix;
            if (H) {
                var n = ct,
                    r = ut;
                n = (r & ~(1 << 32 - Ye(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $r++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = By++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Ky = {
        readContext: $e,
        useCallback: Hd,
        useContext: $e,
        useEffect: ha,
        useImperativeHandle: $d,
        useInsertionEffect: Id,
        useLayoutEffect: Bd,
        useMemo: Wd,
        useReducer: us,
        useRef: zd,
        useState: function() {
            return us(Hr)
        },
        useDebugValue: ma,
        useDeferredValue: function(e) {
            var t = He();
            return Kd(t, ne.memoizedState, e)
        },
        useTransition: function() {
            var e = us(Hr)[0],
                t = He().memoizedState;
            return [e, t]
        },
        useMutableSource: Ad,
        useSyncExternalStore: Rd,
        useId: Gd,
        unstable_isNewReconciler: !1
    },
    Gy = {
        readContext: $e,
        useCallback: Hd,
        useContext: $e,
        useEffect: ha,
        useImperativeHandle: $d,
        useInsertionEffect: Id,
        useLayoutEffect: Bd,
        useMemo: Wd,
        useReducer: cs,
        useRef: zd,
        useState: function() {
            return cs(Hr)
        },
        useDebugValue: ma,
        useDeferredValue: function(e) {
            var t = He();
            return ne === null ? t.memoizedState = e : Kd(t, ne.memoizedState, e)
        },
        useTransition: function() {
            var e = cs(Hr)[0],
                t = He().memoizedState;
            return [e, t]
        },
        useMutableSource: Ad,
        useSyncExternalStore: Rd,
        useId: Gd,
        unstable_isNewReconciler: !1
    };

function Yn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Sm(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function fs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function ll(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Qy = typeof WeakMap == "function" ? WeakMap : Map;

function Zd(e, t, n) {
    n = dt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        so || (so = !0, gl = r), ll(e, t)
    }, n
}

function Jd(e, t, n) {
    n = dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            ll(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ll(e, t), typeof r != "function" && (Ft === null ? Ft = new Set([this]) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Bu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Qy;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = lg.bind(null, e, t, n), t.then(e, e))
}

function Uu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function $u(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Nt(n, t, 1))), n.lanes |= 1), e)
}
var Yy = St.ReactCurrentOwner,
    ke = !1;

function ye(e, t, n, r) {
    t.child = e === null ? Dd(t, null, n, r) : Gn(t, e.child, n, r)
}

function Hu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Un(t, i), r = da(e, t, n, r, o, i), n = pa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, vt(e, t, i)) : (H && n && ea(t), t.flags |= 1, ye(e, t, r, i), t.child)
}

function Wu(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ka(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, qd(e, t, o, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Or, n(s, r) && e.ref === t.ref) return vt(e, t, i)
    }
    return t.flags |= 1, e = jt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function qd(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Or(o, r) && e.ref === t.ref)
            if (ke = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (ke = !0);
            else return t.lanes = e.lanes, vt(e, t, i)
    }
    return al(e, t, n, r, i)
}

function bd(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, z(Rn, De), De |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, z(Rn, De), De |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, z(Rn, De), De |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, z(Rn, De), De |= r;
    return ye(e, t, i, n), t.child
}

function ep(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function al(e, t, n, r, i) {
    var o = Te(n) ? cn : pe.current;
    return o = Wn(t, o), Un(t, i), n = da(e, t, n, r, o, i), r = pa(), e !== null && !ke ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, vt(e, t, i)) : (H && r && ea(t), t.flags |= 1, ye(e, t, n, i), t.child)
}

function Ku(e, t, n, r, i) {
    if (Te(n)) {
        var o = !0;
        Zi(t)
    } else o = !1;
    if (Un(t, i), t.stateNode === null) Ni(e, t), Vd(t, n, r), sl(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = $e(u) : (u = Te(n) ? cn : pe.current, u = Wn(t, u));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Ou(t, s, r, u), Ct = !1;
        var d = t.memoizedState;
        s.state = d, to(t, r, s, i), a = t.memoizedState, l !== r || d !== a || Ce.current || Ct ? (typeof c == "function" && (ol(t, n, c, r), a = t.memoizedState), (l = Ct || Fu(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Td(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Ke(t.type, l), s.props = u, f = t.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = $e(a) : (a = Te(n) ? cn : pe.current, a = Wn(t, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && Ou(t, s, r, a), Ct = !1, d = t.memoizedState, s.state = d, to(t, r, s, i);
        var g = t.memoizedState;
        l !== f || d !== g || Ce.current || Ct ? (typeof m == "function" && (ol(t, n, m, r), g = t.memoizedState), (u = Ct || Fu(t, n, u, r, d, g, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ul(e, t, n, r, o, i)
}

function ul(e, t, n, r, i, o) {
    ep(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Mu(t, n, !1), vt(e, t, o);
    r = t.stateNode, Yy.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Gn(t, e.child, null, o), t.child = Gn(t, null, l, o)) : ye(e, t, l, o), t.memoizedState = r.state, i && Mu(t, n, !0), t.child
}

function tp(e) {
    var t = e.stateNode;
    t.pendingContext ? Du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Du(e, t.context, !1), aa(e, t.containerInfo)
}

function Gu(e, t, n, r, i) {
    return Kn(), na(i), t.flags |= 256, ye(e, t, n, r), t.child
}
var cl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function fl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function np(e, t, n) {
    var r = t.pendingProps,
        i = W.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), z(W, i & 1), e === null) return rl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Mo(s, r, 0, null), e = un(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = fl(n), t.memoizedState = cl, e) : ya(t, s));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Xy(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = jt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = jt(l, o) : (o = un(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? fl(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = cl, r
    }
    return o = e.child, e = o.sibling, r = jt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ya(e, t) {
    return t = Mo({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function vi(e, t, n, r) {
    return r !== null && na(r), Gn(t, e.child, null, n), e = ya(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Xy(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = fs(Error(x(422))), vi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Mo({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = un(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Gn(t, e.child, null, s), t.child.memoizedState = fl(s), t.memoizedState = cl, o);
    if (!(t.mode & 1)) return vi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, o = Error(x(419)), r = fs(o, r, void 0), vi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, ke || l) {
        if (r = se, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, gt(e, i), Xe(r, e, i, -1))
        }
        return Pa(), r = fs(Error(x(421))), vi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ag.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Me = _t(i.nextSibling), Ae = t, H = !0, Qe = null, e !== null && (ze[Ie++] = ut, ze[Ie++] = ct, ze[Ie++] = fn, ut = e.id, ct = e.overflow, fn = t), t = ya(t, r.children), t.flags |= 4096, t)
}

function Qu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), il(e.return, t, n)
}

function ds(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function rp(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (ye(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Qu(e, n, t);
            else if (e.tag === 19) Qu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (z(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && no(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ds(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && no(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            ds(t, !0, n, null, o);
            break;
        case "together":
            ds(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ni(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function vt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(x(153));
    if (t.child !== null) {
        for (e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = jt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Zy(e, t, n) {
    switch (t.tag) {
        case 3:
            tp(t), Kn();
            break;
        case 5:
            Md(t);
            break;
        case 1:
            Te(t.type) && Zi(t);
            break;
        case 4:
            aa(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            z(bi, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (z(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? np(e, t, n) : (z(W, W.current & 1), e = vt(e, t, n), e !== null ? e.sibling : null);
            z(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return rp(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), z(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, bd(e, t, n)
    }
    return vt(e, t, n)
}
var ip, dl, op, sp;
ip = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
dl = function() {};
op = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, sn(ot.current);
        var o = null;
        switch (n) {
            case "input":
                i = Ns(e, i), r = Ns(e, r), o = [];
                break;
            case "select":
                i = Q({}, i, {
                    value: void 0
                }), r = Q({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = js(e, i), r = js(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yi)
        }
        Is(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Dr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (o || (o = []), o.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Dr.hasOwnProperty(u) ? (a != null && u === "onScroll" && I("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
sp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function lr(e, t) {
    if (!H) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Jy(e, t, n) {
    var r = t.pendingProps;
    switch (ta(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return fe(t), null;
        case 1:
            return Te(t.type) && Xi(), fe(t), null;
        case 3:
            return r = t.stateNode, Qn(), B(Ce), B(pe), ca(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (Sl(Qe), Qe = null))), dl(e, t), fe(t), null;
        case 5:
            ua(t);
            var i = sn(Ur.current);
            if (n = t.type, e !== null && t.stateNode != null) op(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(x(166));
                    return fe(t), null
                }
                if (e = sn(ot.current), yi(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[nt] = t, r[Ir] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            I("cancel", r), I("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            I("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < hr.length; i++) I(hr[i], r);
                            break;
                        case "source":
                            I("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            I("error", r), I("load", r);
                            break;
                        case "details":
                            I("toggle", r);
                            break;
                        case "input":
                            nu(r, o), I("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, I("invalid", r);
                            break;
                        case "textarea":
                            iu(r, o), I("invalid", r)
                    }
                    Is(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && mi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && mi(r.textContent, l, e), i = ["children", "" + l]) : Dr.hasOwnProperty(s) && l != null && s === "onScroll" && I("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            li(r), ru(r, o, !0);
                            break;
                        case "textarea":
                            li(r), ou(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = Yi)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _f(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[nt] = t, e[Ir] = r, ip(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Bs(n, r), n) {
                            case "dialog":
                                I("cancel", e), I("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                I("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < hr.length; i++) I(hr[i], e);
                                i = r;
                                break;
                            case "source":
                                I("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                I("error", e), I("load", e), i = r;
                                break;
                            case "details":
                                I("toggle", e), i = r;
                                break;
                            case "input":
                                nu(e, r), i = Ns(e, r), I("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Q({}, r, {
                                    value: void 0
                                }), I("invalid", e);
                                break;
                            case "textarea":
                                iu(e, r), i = js(e, r), I("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Is(n, i),
                        l = i;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var a = l[o];
                                o === "style" ? Of(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Nf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Mr(e, a) : typeof a == "number" && Mr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Dr.hasOwnProperty(o) ? a != null && o === "onScroll" && I("scroll", e) : a != null && Bl(e, o, a, s))
                            }
                        switch (n) {
                            case "input":
                                li(e), ru(e, r, !1);
                                break;
                            case "textarea":
                                li(e), ou(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? jn(e, !!r.multiple, o, !1) : r.defaultValue != null && jn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Yi)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return fe(t), null;
        case 6:
            if (e && t.stateNode != null) sp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
                if (n = sn(Ur.current), sn(ot.current), yi(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[nt] = t, (o = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
                        case 3:
                            mi(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && mi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nt] = t, t.stateNode = r
            }
            return fe(t), null;
        case 13:
            if (B(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (H && Me !== null && t.mode & 1 && !(t.flags & 128)) kd(), Kn(), t.flags |= 98560, o = !1;
                else if (o = yi(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(x(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(x(317));
                        o[nt] = t
                    } else Kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    fe(t), o = !1
                } else Qe !== null && (Sl(Qe), Qe = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? re === 0 && (re = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
        case 4:
            return Qn(), dl(e, t), e === null && jr(t.stateNode.containerInfo), fe(t), null;
        case 10:
            return oa(t.type._context), fe(t), null;
        case 17:
            return Te(t.type) && Xi(), fe(t), null;
        case 19:
            if (B(W), o = t.memoizedState, o === null) return fe(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) lr(o, !1);
                else {
                    if (re !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = no(e), s !== null) {
                                for (t.flags |= 128, lr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return z(W, W.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && b() > Xn && (t.flags |= 128, r = !0, lr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = no(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !H) return fe(t), null
                    } else 2 * b() - o.renderingStartTime > Xn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = b(), t.sibling = null, n = W.current, z(W, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
        case 22:
        case 23:
            return xa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(x(156, t.tag))
}

function qy(e, t) {
    switch (ta(t), t.tag) {
        case 1:
            return Te(t.type) && Xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Qn(), B(Ce), B(pe), ca(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ua(t), null;
        case 13:
            if (B(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(x(340));
                Kn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(W), null;
        case 4:
            return Qn(), null;
        case 10:
            return oa(t.type._context), null;
        case 22:
        case 23:
            return xa(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var wi = !1,
    de = !1,
    by = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;

function An(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function pl(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Yu = !1;

function eg(e, t) {
    if (Zs = Ki, e = cd(), bl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    f = e,
                    d = null;
                t: for (;;) {
                    for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) d = f, f = m;
                    for (;;) {
                        if (f === e) break t;
                        if (d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (m = f.nextSibling) !== null) break;
                        f = d, d = f.parentNode
                    }
                    f = m
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Js = {
            focusedElem: e,
            selectionRange: n
        }, Ki = !1, V = t; V !== null;)
        if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
        else
            for (; V !== null;) {
                t = V;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var v = g.memoizedProps,
                                    T = g.memoizedState,
                                    y = t.stateNode,
                                    p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ke(t.type, v), T);
                                y.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(x(163))
                    }
                } catch (w) {
                    Y(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, V = e;
                    break
                }
                V = t.return
            }
    return g = Yu, Yu = !1, g
}

function Pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && pl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Lo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function hl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function lp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, lp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nt], delete t[Ir], delete t[el], delete t[Oy], delete t[jy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ap(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Xu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ap(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function ml(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yi));
    else if (r !== 4 && (e = e.child, e !== null))
        for (ml(e, t, n), e = e.sibling; e !== null;) ml(e, t, n), e = e.sibling
}

function yl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (yl(e, t, n), e = e.sibling; e !== null;) yl(e, t, n), e = e.sibling
}
var le = null,
    Ge = !1;

function xt(e, t, n) {
    for (n = n.child; n !== null;) up(e, t, n), n = n.sibling
}

function up(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function") try {
        it.onCommitFiberUnmount(So, n)
    } catch {}
    switch (n.tag) {
        case 5:
            de || An(n, t);
        case 6:
            var r = le,
                i = Ge;
            le = null, xt(e, t, n), le = r, Ge = i, le !== null && (Ge ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
            break;
        case 18:
            le !== null && (Ge ? (e = le, n = n.stateNode, e.nodeType === 8 ? os(e.parentNode, n) : e.nodeType === 1 && os(e, n), Nr(e)) : os(le, n.stateNode));
            break;
        case 4:
            r = le, i = Ge, le = n.stateNode.containerInfo, Ge = !0, xt(e, t, n), le = r, Ge = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!de && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && pl(n, t, s), i = i.next
                } while (i !== r)
            }
            xt(e, t, n);
            break;
        case 1:
            if (!de && (An(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                Y(n, t, l)
            }
            xt(e, t, n);
            break;
        case 21:
            xt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (de = (r = de) || n.memoizedState !== null, xt(e, t, n), de = r) : xt(e, t, n);
            break;
        default:
            xt(e, t, n)
    }
}

function Zu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new by), t.forEach(function(r) {
            var i = ug.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function We(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            le = l.stateNode, Ge = !1;
                            break e;
                        case 3:
                            le = l.stateNode.containerInfo, Ge = !0;
                            break e;
                        case 4:
                            le = l.stateNode.containerInfo, Ge = !0;
                            break e
                    }
                    l = l.return
                }
                if (le === null) throw Error(x(160));
                up(o, s, i), le = null, Ge = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) cp(t, e), t = t.sibling
}

function cp(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (We(t, e), be(e), r & 4) {
                try {
                    Pr(3, e, e.return), Lo(3, e)
                } catch (v) {
                    Y(e, e.return, v)
                }
                try {
                    Pr(5, e, e.return)
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 1:
            We(t, e), be(e), r & 512 && n !== null && An(n, n.return);
            break;
        case 5:
            if (We(t, e), be(e), r & 512 && n !== null && An(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Mr(i, "")
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && Af(i, o), Bs(l, s);
                    var u = Bs(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s],
                            f = a[s + 1];
                        c === "style" ? Of(i, f) : c === "dangerouslySetInnerHTML" ? Nf(i, f) : c === "children" ? Mr(i, f) : Bl(i, c, f, u)
                    }
                    switch (l) {
                        case "input":
                            Fs(i, o);
                            break;
                        case "textarea":
                            Rf(i, o);
                            break;
                        case "select":
                            var d = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var m = o.value;
                            m != null ? jn(i, !!o.multiple, m, !1) : d !== !!o.multiple && (o.defaultValue != null ? jn(i, !!o.multiple, o.defaultValue, !0) : jn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ir] = o
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 6:
            if (We(t, e), be(e), r & 4) {
                if (e.stateNode === null) throw Error(x(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (v) {
                    Y(e, e.return, v)
                }
            }
            break;
        case 3:
            if (We(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Nr(t.containerInfo)
            } catch (v) {
                Y(e, e.return, v)
            }
            break;
        case 4:
            We(t, e), be(e);
            break;
        case 13:
            We(t, e), be(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (wa = b())), r & 4 && Zu(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (de = (u = de) || c, We(t, e), de = u) : We(t, e), be(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (V = e, c = e.child; c !== null;) {
                        for (f = V = c; V !== null;) {
                            switch (d = V, m = d.child, d.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Pr(4, d, d.return);
                                    break;
                                case 1:
                                    An(d, d.return);
                                    var g = d.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (v) {
                                            Y(r, n, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    An(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        qu(f);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = d, V = m) : qu(f)
                        }
                        c = c.sibling
                    }
                e: for (c = null, f = e;;) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Ff("display", s))
                            } catch (v) {
                                Y(e, e.return, v)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            Y(e, e.return, v)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), f = f.return
                    }
                    c === f && (c = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            We(t, e), be(e), r & 4 && Zu(e);
            break;
        case 21:
            break;
        default:
            We(t, e), be(e)
    }
}

function be(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ap(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(x(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Mr(i, ""), r.flags &= -33);
                    var o = Xu(e);
                    yl(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Xu(e);
                    ml(e, l, s);
                    break;
                default:
                    throw Error(x(161))
            }
        }
        catch (a) {
            Y(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function tg(e, t, n) {
    V = e, fp(e)
}

function fp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null;) {
        var i = V,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || wi;
            if (!s) {
                var l = i.alternate,
                    a = l !== null && l.memoizedState !== null || de;
                l = wi;
                var u = de;
                if (wi = s, (de = a) && !u)
                    for (V = i; V !== null;) s = V, a = s.child, s.tag === 22 && s.memoizedState !== null ? bu(i) : a !== null ? (a.return = s, V = a) : bu(i);
                for (; o !== null;) V = o, fp(o), o = o.sibling;
                V = i, wi = l, de = u
            }
            Ju(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, V = o) : Ju(e)
    }
}

function Ju(e) {
    for (; V !== null;) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        de || Lo(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !de)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Nu(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Nu(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Nr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(x(163))
                }
                de || t.flags & 512 && hl(t)
            } catch (d) {
                Y(t, t.return, d)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function qu(e) {
    for (; V !== null;) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function bu(e) {
    for (; V !== null;) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Lo(4, t)
                    } catch (a) {
                        Y(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            Y(t, i, a)
                        }
                    }
                    var o = t.return;
                    try {
                        hl(t)
                    } catch (a) {
                        Y(t, o, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        hl(t)
                    } catch (a) {
                        Y(t, s, a)
                    }
            }
        } catch (a) {
            Y(t, t.return, a)
        }
        if (t === e) {
            V = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, V = l;
            break
        }
        V = t.return
    }
}
var ng = Math.ceil,
    oo = St.ReactCurrentDispatcher,
    ga = St.ReactCurrentOwner,
    Ue = St.ReactCurrentBatchConfig,
    O = 0,
    se = null,
    te = null,
    ae = 0,
    De = 0,
    Rn = Gt(0),
    re = 0,
    Kr = null,
    pn = 0,
    Do = 0,
    va = 0,
    kr = null,
    Pe = null,
    wa = 0,
    Xn = 1 / 0,
    lt = null,
    so = !1,
    gl = null,
    Ft = null,
    Si = !1,
    Dt = null,
    lo = 0,
    Cr = 0,
    vl = null,
    Fi = -1,
    Oi = 0;

function ge() {
    return O & 6 ? b() : Fi !== -1 ? Fi : Fi = b()
}

function Ot(e) {
    return e.mode & 1 ? O & 2 && ae !== 0 ? ae & -ae : Iy.transition !== null ? (Oi === 0 && (Oi = Yf()), Oi) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : td(e.type)), e) : 1
}

function Xe(e, t, n, r) {
    if (50 < Cr) throw Cr = 0, vl = null, Error(x(185));
    Zr(e, n, r), (!(O & 2) || e !== se) && (e === se && (!(O & 2) && (Do |= n), re === 4 && Vt(e, ae)), Ee(e, r), n === 1 && O === 0 && !(t.mode & 1) && (Xn = b() + 500, To && Qt()))
}

function Ee(e, t) {
    var n = e.callbackNode;
    Im(e, t);
    var r = Wi(e, e === se ? ae : 0);
    if (r === 0) n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && au(n), t === 1) e.tag === 0 ? zy(ec.bind(null, e)) : Sd(ec.bind(null, e)), Ny(function() {
            !(O & 6) && Qt()
        }), n = null;
        else {
            switch (Xf(r)) {
                case 1:
                    n = Kl;
                    break;
                case 4:
                    n = Gf;
                    break;
                case 16:
                    n = Hi;
                    break;
                case 536870912:
                    n = Qf;
                    break;
                default:
                    n = Hi
            }
            n = wp(n, dp.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function dp(e, t) {
    if (Fi = -1, Oi = 0, O & 6) throw Error(x(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Wi(e, e === se ? ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ao(e, r);
    else {
        t = r;
        var i = O;
        O |= 2;
        var o = hp();
        (se !== e || ae !== t) && (lt = null, Xn = b() + 500, an(e, t));
        do try {
            og();
            break
        } catch (l) {
            pp(e, l)
        }
        while (1);
        ia(), oo.current = o, O = i, te !== null ? t = 0 : (se = null, ae = 0, t = re)
    }
    if (t !== 0) {
        if (t === 2 && (i = Ks(e), i !== 0 && (r = i, t = wl(e, i))), t === 1) throw n = Kr, an(e, 0), Vt(e, r), Ee(e, b()), n;
        if (t === 6) Vt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !rg(i) && (t = ao(e, r), t === 2 && (o = Ks(e), o !== 0 && (r = o, t = wl(e, o))), t === 1)) throw n = Kr, an(e, 0), Vt(e, r), Ee(e, b()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(x(345));
                case 2:
                    en(e, Pe, lt);
                    break;
                case 3:
                    if (Vt(e, r), (r & 130023424) === r && (t = wa + 500 - b(), 10 < t)) {
                        if (Wi(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            ge(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = bs(en.bind(null, e, Pe, lt), t);
                        break
                    }
                    en(e, Pe, lt);
                    break;
                case 4:
                    if (Vt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Ye(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = b() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ng(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = bs(en.bind(null, e, Pe, lt), r);
                        break
                    }
                    en(e, Pe, lt);
                    break;
                case 5:
                    en(e, Pe, lt);
                    break;
                default:
                    throw Error(x(329))
            }
        }
    }
    return Ee(e, b()), e.callbackNode === n ? dp.bind(null, e) : null
}

function wl(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = ao(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && Sl(t)), e
}

function Sl(e) {
    Pe === null ? Pe = e : Pe.push.apply(Pe, e)
}

function rg(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ze(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Vt(e, t) {
    for (t &= ~va, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ye(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ec(e) {
    if (O & 6) throw Error(x(327));
    $n();
    var t = Wi(e, 0);
    if (!(t & 1)) return Ee(e, b()), null;
    var n = ao(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ks(e);
        r !== 0 && (t = r, n = wl(e, r))
    }
    if (n === 1) throw n = Kr, an(e, 0), Vt(e, t), Ee(e, b()), n;
    if (n === 6) throw Error(x(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, en(e, Pe, lt), Ee(e, b()), null
}

function Sa(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n, O === 0 && (Xn = b() + 500, To && Qt())
    }
}

function hn(e) {
    Dt !== null && Dt.tag === 0 && !(O & 6) && $n();
    var t = O;
    O |= 1;
    var n = Ue.transition,
        r = j;
    try {
        if (Ue.transition = null, j = 1, e) return e()
    } finally {
        j = r, Ue.transition = n, O = t, !(O & 6) && Qt()
    }
}

function xa() {
    De = Rn.current, B(Rn)
}

function an(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _y(n)), te !== null)
        for (n = te.return; n !== null;) {
            var r = n;
            switch (ta(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Xi();
                    break;
                case 3:
                    Qn(), B(Ce), B(pe), ca();
                    break;
                case 5:
                    ua(r);
                    break;
                case 4:
                    Qn();
                    break;
                case 13:
                    B(W);
                    break;
                case 19:
                    B(W);
                    break;
                case 10:
                    oa(r.type._context);
                    break;
                case 22:
                case 23:
                    xa()
            }
            n = n.return
        }
    if (se = e, te = e = jt(e.current, null), ae = De = t, re = 0, Kr = null, va = Do = pn = 0, Pe = kr = null, on !== null) {
        for (t = 0; t < on.length; t++)
            if (n = on[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            }
        on = null
    }
    return e
}

function pp(e, t) {
    do {
        var n = te;
        try {
            if (ia(), Ri.current = io, ro) {
                for (var r = G.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ro = !1
            }
            if (dn = 0, oe = ne = G = null, xr = !1, $r = 0, ga.current = null, n === null || n.return === null) {
                re = 1, Kr = t, te = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = ae, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var m = Uu(s);
                    if (m !== null) {
                        m.flags &= -257, $u(m, s, l, o, t), m.mode & 1 && Bu(o, u, t), t = m, a = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var v = new Set;
                            v.add(a), t.updateQueue = v
                        } else g.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Bu(o, u, t), Pa();
                            break e
                        }
                        a = Error(x(426))
                    }
                } else if (H && l.mode & 1) {
                    var T = Uu(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256), $u(T, s, l, o, t), na(Yn(a, l));
                        break e
                    }
                }
                o = a = Yn(a, l),
                re !== 4 && (re = 2),
                kr === null ? kr = [o] : kr.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var y = Zd(o, a, t);
                            _u(o, y);
                            break e;
                        case 1:
                            l = a;
                            var p = o.type,
                                h = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ft === null || !Ft.has(h)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = Jd(o, l, t);
                                _u(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            yp(n)
        } catch (S) {
            t = S, te === n && n !== null && (te = n = n.return);
            continue
        }
        break
    } while (1)
}

function hp() {
    var e = oo.current;
    return oo.current = io, e === null ? io : e
}

function Pa() {
    (re === 0 || re === 3 || re === 2) && (re = 4), se === null || !(pn & 268435455) && !(Do & 268435455) || Vt(se, ae)
}

function ao(e, t) {
    var n = O;
    O |= 2;
    var r = hp();
    (se !== e || ae !== t) && (lt = null, an(e, t));
    do try {
        ig();
        break
    } catch (i) {
        pp(e, i)
    }
    while (1);
    if (ia(), O = n, oo.current = r, te !== null) throw Error(x(261));
    return se = null, ae = 0, re
}

function ig() {
    for (; te !== null;) mp(te)
}

function og() {
    for (; te !== null && !Mm();) mp(te)
}

function mp(e) {
    var t = vp(e.alternate, e, De);
    e.memoizedProps = e.pendingProps, t === null ? yp(e) : te = t, ga.current = null
}

function yp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = qy(n, t), n !== null) {
                n.flags &= 32767, te = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                re = 6, te = null;
                return
            }
        } else if (n = Jy(n, t, De), n !== null) {
            te = n;
            return
        }
        if (t = t.sibling, t !== null) {
            te = t;
            return
        }
        te = t = e
    } while (t !== null);
    re === 0 && (re = 5)
}

function en(e, t, n) {
    var r = j,
        i = Ue.transition;
    try {
        Ue.transition = null, j = 1, sg(e, t, n, r)
    } finally {
        Ue.transition = i, j = r
    }
    return null
}

function sg(e, t, n, r) {
    do $n(); while (Dt !== null);
    if (O & 6) throw Error(x(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(x(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Bm(e, o), e === se && (te = se = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Si || (Si = !0, wp(Hi, function() {
            return $n(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ue.transition, Ue.transition = null;
        var s = j;
        j = 1;
        var l = O;
        O |= 4, ga.current = null, eg(e, n), cp(n, e), Ey(Js), Ki = !!Zs, Js = Zs = null, e.current = n, tg(n), Am(), O = l, j = s, Ue.transition = o
    } else e.current = n;
    if (Si && (Si = !1, Dt = e, lo = i), o = e.pendingLanes, o === 0 && (Ft = null), Nm(n.stateNode), Ee(e, b()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (so) throw so = !1, e = gl, gl = null, e;
    return lo & 1 && e.tag !== 0 && $n(), o = e.pendingLanes, o & 1 ? e === vl ? Cr++ : (Cr = 0, vl = e) : Cr = 0, Qt(), null
}

function $n() {
    if (Dt !== null) {
        var e = Xf(lo),
            t = Ue.transition,
            n = j;
        try {
            if (Ue.transition = null, j = 16 > e ? 16 : e, Dt === null) var r = !1;
            else {
                if (e = Dt, Dt = null, lo = 0, O & 6) throw Error(x(331));
                var i = O;
                for (O |= 4, V = e.current; V !== null;) {
                    var o = V,
                        s = o.child;
                    if (V.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (V = u; V !== null;) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Pr(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null) f.return = c, V = f;
                                    else
                                        for (; V !== null;) {
                                            c = V;
                                            var d = c.sibling,
                                                m = c.return;
                                            if (lp(c), c === u) {
                                                V = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = m, V = d;
                                                break
                                            }
                                            V = m
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var v = g.child;
                                if (v !== null) {
                                    g.child = null;
                                    do {
                                        var T = v.sibling;
                                        v.sibling = null, v = T
                                    } while (v !== null)
                                }
                            }
                            V = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, V = s;
                    else e: for (; V !== null;) {
                        if (o = V, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Pr(9, o, o.return)
                        }
                        var y = o.sibling;
                        if (y !== null) {
                            y.return = o.return, V = y;
                            break e
                        }
                        V = o.return
                    }
                }
                var p = e.current;
                for (V = p; V !== null;) {
                    s = V;
                    var h = s.child;
                    if (s.subtreeFlags & 2064 && h !== null) h.return = s, V = h;
                    else e: for (s = p; V !== null;) {
                        if (l = V, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Lo(9, l)
                            }
                        } catch (S) {
                            Y(l, l.return, S)
                        }
                        if (l === s) {
                            V = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, V = w;
                            break e
                        }
                        V = l.return
                    }
                }
                if (O = i, Qt(), it && typeof it.onPostCommitFiberRoot == "function") try {
                    it.onPostCommitFiberRoot(So, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            j = n, Ue.transition = t
        }
    }
    return !1
}

function tc(e, t, n) {
    t = Yn(n, t), t = Zd(e, t, 1), e = Nt(e, t, 1), t = ge(), e !== null && (Zr(e, 1, t), Ee(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) tc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                tc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Yn(n, e), e = Jd(t, e, 1), t = Nt(t, e, 1), e = ge(), t !== null && (Zr(t, 1, e), Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}

function lg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ge(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ae & n) === n && (re === 4 || re === 3 && (ae & 130023424) === ae && 500 > b() - wa ? an(e, 0) : va |= n), Ee(e, t)
}

function gp(e, t) {
    t === 0 && (e.mode & 1 ? (t = ci, ci <<= 1, !(ci & 130023424) && (ci = 4194304)) : t = 1);
    var n = ge();
    e = gt(e, t), e !== null && (Zr(e, t, n), Ee(e, n))
}

function ag(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), gp(e, n)
}

function ug(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(x(314))
    }
    r !== null && r.delete(t), gp(e, n)
}
var vp;
vp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current) ke = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return ke = !1, Zy(e, t, n);
            ke = !!(e.flags & 131072)
        }
    else ke = !1, H && t.flags & 1048576 && xd(t, qi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ni(e, t), e = t.pendingProps;
            var i = Wn(t, pe.current);
            Un(t, n), i = da(null, t, r, e, i, n);
            var o = pa();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (o = !0, Zi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, la(t), i.updater = Eo, t.stateNode = i, i._reactInternals = t, sl(t, r, e, n), t = ul(null, t, r, !0, o, n)) : (t.tag = 0, H && o && ea(t), ye(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ni(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = fg(r), e = Ke(r, e), i) {
                    case 0:
                        t = al(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ku(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Hu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Wu(null, t, r, Ke(r.type, e), n);
                        break e
                }
                throw Error(x(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), al(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ku(e, t, r, i, n);
        case 3:
            e: {
                if (tp(t), e === null) throw Error(x(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                Td(e, t),
                to(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Yn(Error(x(423)), t), t = Gu(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Yn(Error(x(424)), t), t = Gu(e, t, r, n, i);
                    break e
                } else
                    for (Me = _t(t.stateNode.containerInfo.firstChild), Ae = t, H = !0, Qe = null, n = Dd(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Kn(), r === i) {
                        t = vt(e, t, n);
                        break e
                    }
                    ye(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Md(t), e === null && rl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, qs(r, i) ? s = null : o !== null && qs(r, o) && (t.flags |= 32), ep(e, t), ye(e, t, s, n), t.child;
        case 6:
            return e === null && rl(t), null;
        case 13:
            return np(e, t, n);
        case 4:
            return aa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Gn(t, null, r, n) : ye(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Hu(e, t, r, i, n);
        case 7:
            return ye(e, t, t.pendingProps, n), t.child;
        case 8:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ye(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, z(bi, r._currentValue), r._currentValue = s, o !== null)
                    if (Ze(o.value, s)) {
                        if (o.children === i.children && !Ce.current) {
                            t = vt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = dt(-1, n & -n), a.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), il(o.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(x(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), il(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                ye(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Un(t, n), i = $e(i), r = r(i), t.flags |= 1, ye(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), Wu(e, t, r, i, n);
        case 15:
            return qd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ni(e, t), t.tag = 1, Te(r) ? (e = !0, Zi(t)) : e = !1, Un(t, n), Vd(t, r, i), sl(t, r, i, n), ul(null, t, r, !0, e, n);
        case 19:
            return rp(e, t, n);
        case 22:
            return bd(e, t, n)
    }
    throw Error(x(156, t.tag))
};

function wp(e, t) {
    return Kf(e, t)
}

function cg(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Be(e, t, n, r) {
    return new cg(e, t, n, r)
}

function ka(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function fg(e) {
    if (typeof e == "function") return ka(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === $l) return 11;
        if (e === Hl) return 14
    }
    return 2
}

function jt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Be(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ji(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") ka(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Pn:
            return un(n.children, i, o, t);
        case Ul:
            s = 8, i |= 8;
            break;
        case Ms:
            return e = Be(12, n, t, i | 2), e.elementType = Ms, e.lanes = o, e;
        case As:
            return e = Be(13, n, t, i), e.elementType = As, e.lanes = o, e;
        case Rs:
            return e = Be(19, n, t, i), e.elementType = Rs, e.lanes = o, e;
        case Lf:
            return Mo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ef:
                    s = 10;
                    break e;
                case Vf:
                    s = 9;
                    break e;
                case $l:
                    s = 11;
                    break e;
                case Hl:
                    s = 14;
                    break e;
                case kt:
                    s = 16, r = null;
                    break e
            }
            throw Error(x(130, e == null ? e : typeof e, ""))
    }
    return t = Be(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function un(e, t, n, r) {
    return e = Be(7, e, r, t), e.lanes = n, e
}

function Mo(e, t, n, r) {
    return e = Be(22, e, r, t), e.elementType = Lf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ps(e, t, n) {
    return e = Be(6, e, null, t), e.lanes = n, e
}

function hs(e, t, n) {
    return t = Be(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function dg(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yo(0), this.expirationTimes = Yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Ca(e, t, n, r, i, o, s, l, a) {
    return e = new dg(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Be(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, la(o), e
}

function pg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Sp(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
        if (yn(e) !== e || e.tag !== 1) throw Error(x(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Te(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(x(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n)) return wd(e, n, t)
    }
    return t
}

function xp(e, t, n, r, i, o, s, l, a) {
    return e = Ca(n, r, !0, e, i, o, s, l, a), e.context = Sp(null), n = e.current, r = ge(), i = Ot(n), o = dt(r, i), o.callback = t ? ? null, Nt(n, o, i), e.current.lanes = i, Zr(e, i, r), Ee(e, r), e
}

function Ao(e, t, n, r) {
    var i = t.current,
        o = ge(),
        s = Ot(i);
    return n = Sp(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Nt(i, t, s), e !== null && (Xe(e, i, s, o), Ai(e, i, s)), s
}

function uo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function nc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ta(e, t) {
    nc(e, t), (e = e.alternate) && nc(e, t)
}

function hg() {
    return null
}
var Pp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ea(e) {
    this._internalRoot = e
}
Ro.prototype.render = Ea.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(x(409));
    Ao(e, t, null, null)
};
Ro.prototype.unmount = Ea.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hn(function() {
            Ao(null, e, null, null)
        }), t[yt] = null
    }
};

function Ro(e) {
    this._internalRoot = e
}
Ro.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = qf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
        Et.splice(n, 0, e), n === 0 && ed(e)
    }
};

function Va(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function _o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function rc() {}

function mg(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = uo(s);
                o.call(u)
            }
        }
        var s = xp(t, r, e, 0, null, !1, !1, "", rc);
        return e._reactRootContainer = s, e[yt] = s.current, jr(e.nodeType === 8 ? e.parentNode : e), hn(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = uo(a);
            l.call(u)
        }
    }
    var a = Ca(e, 0, !1, null, null, !1, !1, "", rc);
    return e._reactRootContainer = a, e[yt] = a.current, jr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
        Ao(t, a, n, r)
    }), a
}

function No(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = uo(s);
                l.call(a)
            }
        }
        Ao(t, s, e, i)
    } else s = mg(n, t, e, i, r);
    return uo(s)
}
Zf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = pr(t.pendingLanes);
                n !== 0 && (Gl(t, n | 1), Ee(t, b()), !(O & 6) && (Xn = b() + 500, Qt()))
            }
            break;
        case 13:
            hn(function() {
                var r = gt(e, 1);
                if (r !== null) {
                    var i = ge();
                    Xe(r, e, 1, i)
                }
            }), Ta(e, 1)
    }
};
Ql = function(e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = ge();
            Xe(t, e, 134217728, n)
        }
        Ta(e, 134217728)
    }
};
Jf = function(e) {
    if (e.tag === 13) {
        var t = Ot(e),
            n = gt(e, t);
        if (n !== null) {
            var r = ge();
            Xe(n, e, t, r)
        }
        Ta(e, t)
    }
};
qf = function() {
    return j
};
bf = function(e, t) {
    var n = j;
    try {
        return j = e, t()
    } finally {
        j = n
    }
};
$s = function(e, t, n) {
    switch (t) {
        case "input":
            if (Fs(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Co(r);
                        if (!i) throw Error(x(90));
                        Mf(r), Fs(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Rf(e, n);
            break;
        case "select":
            t = n.value, t != null && jn(e, !!n.multiple, t, !1)
    }
};
If = Sa;
Bf = hn;
var yg = {
        usingClientEntryPoint: !1,
        Events: [qr, En, Co, jf, zf, Sa]
    },
    ar = {
        findFiberByHostInstance: rn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    gg = {
        bundleType: ar.bundleType,
        version: ar.version,
        rendererPackageName: ar.rendererPackageName,
        rendererConfig: ar.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: St.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Hf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ar.findFiberByHostInstance || hg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber) try {
        So = xi.inject(gg), it = xi
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yg;
Ne.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Va(t)) throw Error(x(200));
    return pg(e, t, null, n)
};
Ne.createRoot = function(e, t) {
    if (!Va(e)) throw Error(x(299));
    var n = !1,
        r = "",
        i = Pp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ca(e, 1, !1, null, null, n, !1, r, i), e[yt] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new Ea(t)
};
Ne.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(x(188)) : (e = Object.keys(e).join(","), Error(x(268, e)));
    return e = Hf(t), e = e === null ? null : e.stateNode, e
};
Ne.flushSync = function(e) {
    return hn(e)
};
Ne.hydrate = function(e, t, n) {
    if (!_o(t)) throw Error(x(200));
    return No(null, e, t, !0, n)
};
Ne.hydrateRoot = function(e, t, n) {
    if (!Va(e)) throw Error(x(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = Pp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = xp(t, null, e, 1, n ? ? null, i, !1, o, s), e[yt] = t.current, jr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ro(t)
};
Ne.render = function(e, t, n) {
    if (!_o(t)) throw Error(x(200));
    return No(null, e, t, !1, n)
};
Ne.unmountComponentAtNode = function(e) {
    if (!_o(e)) throw Error(x(40));
    return e._reactRootContainer ? (hn(function() {
        No(null, null, e, !1, function() {
            e._reactRootContainer = null, e[yt] = null
        })
    }), !0) : !1
};
Ne.unstable_batchedUpdates = Sa;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!_o(n)) throw Error(x(200));
    if (e == null || e._reactInternals === void 0) throw Error(x(38));
    return No(e, t, n, !1, r)
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";

function kp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kp)
    } catch (e) {
        console.error(e)
    }
}
kp(), xf.exports = Ne;
var vg = xf.exports,
    ic = vg;
Ls.createRoot = ic.createRoot, Ls.hydrateRoot = ic.hydrateRoot;
var Cp = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    oc = rt.createContext && rt.createContext(Cp),
    zt = globalThis && globalThis.__assign || function() {
        return zt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, zt.apply(this, arguments)
    },
    wg = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    };

function Tp(e) {
    return e && e.map(function(t, n) {
        return rt.createElement(t.tag, zt({
            key: n
        }, t.attr), Tp(t.child))
    })
}

function Sg(e) {
    return function(t) {
        return rt.createElement(xg, zt({
            attr: zt({}, e.attr)
        }, t), Tp(e.child))
    }
}

function xg(e) {
    var t = function(n) {
        var r = e.attr,
            i = e.size,
            o = e.title,
            s = wg(e, ["attr", "size", "title"]),
            l = i || n.size || "1em",
            a;
        return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), rt.createElement("svg", zt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: a,
            style: zt(zt({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && rt.createElement("title", null, o), e.children)
    };
    return oc !== void 0 ? rt.createElement(oc.Consumer, null, function(n) {
        return t(n)
    }) : t(Cp)
}

function Pg(e) {
    return Sg({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z"
            }
        }]
    })(e)
}
const Ep = _.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Fo = _.createContext({}),
    La = _.createContext(null),
    Oo = typeof document < "u",
    kg = Oo ? _.useLayoutEffect : _.useEffect,
    Vp = _.createContext({
        strict: !1
    });

function Cg(e, t, n, r) {
    const {
        visualElement: i
    } = _.useContext(Fo), o = _.useContext(Vp), s = _.useContext(La), l = _.useContext(Ep).reducedMotion, a = _.useRef();
    r = r || o.renderer, !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    _.useInsertionEffect(() => {
        u && u.update(n, s)
    });
    const c = _.useRef(!!window.HandoffAppearAnimations);
    return kg(() => {
        u && (u.render(), c.current && u.animationState && u.animationState.animateChanges())
    }), _.useEffect(() => {
        u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), window.HandoffAppearAnimations = void 0, c.current = !1)
    }), u
}

function _n(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function Tg(e, t, n) {
    return _.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : _n(n) && (n.current = r))
    }, [t])
}

function Gr(e) {
    return typeof e == "string" || Array.isArray(e)
}

function jo(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Da = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Ma = ["initial", ...Da];

function zo(e) {
    return jo(e.animate) || Ma.some(t => Gr(e[t]))
}

function Lp(e) {
    return !!(zo(e) || e.variants)
}

function Eg(e, t) {
    if (zo(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Gr(n) ? n : void 0,
            animate: Gr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function Vg(e) {
    const {
        initial: t,
        animate: n
    } = Eg(e, _.useContext(Fo));
    return _.useMemo(() => ({
        initial: t,
        animate: n
    }), [sc(t), sc(n)])
}

function sc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const lc = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Qr = {};
for (const e in lc) Qr[e] = {
    isEnabled: t => lc[e].some(n => !!t[n])
};

function Lg(e) {
    for (const t in e) Qr[t] = { ...Qr[t],
        ...e[t]
    }
}
const Dp = _.createContext({}),
    Mp = _.createContext({}),
    Dg = Symbol.for("motionComponentSymbol");

function Mg({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && Lg(e);

    function o(l, a) {
        let u;
        const c = { ..._.useContext(Ep),
                ...l,
                layoutId: Ag(l)
            },
            {
                isStatic: f
            } = c,
            d = Vg(l),
            m = r(l, f);
        if (!f && Oo) {
            d.visualElement = Cg(i, m, c, t);
            const g = _.useContext(Mp),
                v = _.useContext(Vp).strict;
            d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, g))
        }
        return _.createElement(Fo.Provider, {
            value: d
        }, u && d.visualElement ? _.createElement(u, {
            visualElement: d.visualElement,
            ...c
        }) : null, n(i, l, Tg(m, d.visualElement, a), m, f, d.visualElement))
    }
    const s = _.forwardRef(o);
    return s[Dg] = i, s
}

function Ag({
    layoutId: e
}) {
    const t = _.useContext(Dp).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function Rg(e) {
    function t(r, i = {}) {
        return Mg(e(r, i))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
    })
}
const _g = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Aa(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(_g.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const co = {};

function Ng(e) {
    Object.assign(co, e)
}
const ei = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    gn = new Set(ei);

function Ap(e, {
    layout: t,
    layoutId: n
}) {
    return gn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!co[e] || e === "opacity")
}
const Ve = e => !!(e && e.getVelocity),
    Fg = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Og = ei.length;

function jg(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, i) {
    let o = "";
    for (let s = 0; s < Og; s++) {
        const l = ei[s];
        if (e[l] !== void 0) {
            const a = Fg[l] || l;
            o += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(e, r ? "" : o) : n && r && (o = "none"), o
}
const Rp = e => t => typeof t == "string" && t.startsWith(e),
    _p = Rp("--"),
    xl = Rp("var(--"),
    zg = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    Ig = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Ht = (e, t, n) => Math.min(Math.max(n, e), t),
    vn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Tr = { ...vn,
        transform: e => Ht(0, 1, e)
    },
    Pi = { ...vn,
        default: 1
    },
    Er = e => Math.round(e * 1e5) / 1e5,
    Io = /(-)?([\d]*\.?[\d])+/g,
    Np = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    Bg = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function ti(e) {
    return typeof e == "string"
}
const ni = e => ({
        test: t => ti(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Pt = ni("deg"),
    st = ni("%"),
    L = ni("px"),
    Ug = ni("vh"),
    $g = ni("vw"),
    ac = { ...st,
        parse: e => st.parse(e) / 100,
        transform: e => st.transform(e * 100)
    },
    uc = { ...vn,
        transform: Math.round
    },
    Fp = {
        borderWidth: L,
        borderTopWidth: L,
        borderRightWidth: L,
        borderBottomWidth: L,
        borderLeftWidth: L,
        borderRadius: L,
        radius: L,
        borderTopLeftRadius: L,
        borderTopRightRadius: L,
        borderBottomRightRadius: L,
        borderBottomLeftRadius: L,
        width: L,
        maxWidth: L,
        height: L,
        maxHeight: L,
        size: L,
        top: L,
        right: L,
        bottom: L,
        left: L,
        padding: L,
        paddingTop: L,
        paddingRight: L,
        paddingBottom: L,
        paddingLeft: L,
        margin: L,
        marginTop: L,
        marginRight: L,
        marginBottom: L,
        marginLeft: L,
        rotate: Pt,
        rotateX: Pt,
        rotateY: Pt,
        rotateZ: Pt,
        scale: Pi,
        scaleX: Pi,
        scaleY: Pi,
        scaleZ: Pi,
        skew: Pt,
        skewX: Pt,
        skewY: Pt,
        distance: L,
        translateX: L,
        translateY: L,
        translateZ: L,
        x: L,
        y: L,
        z: L,
        perspective: L,
        transformPerspective: L,
        opacity: Tr,
        originX: ac,
        originY: ac,
        originZ: L,
        zIndex: uc,
        fillOpacity: Tr,
        strokeOpacity: Tr,
        numOctaves: uc
    };

function Ra(e, t, n, r) {
    const {
        style: i,
        vars: o,
        transform: s,
        transformOrigin: l
    } = e;
    let a = !1,
        u = !1,
        c = !0;
    for (const f in t) {
        const d = t[f];
        if (_p(f)) {
            o[f] = d;
            continue
        }
        const m = Fp[f],
            g = Ig(d, m);
        if (gn.has(f)) {
            if (a = !0, s[f] = g, !c) continue;
            d !== (m.default || 0) && (c = !1)
        } else f.startsWith("origin") ? (u = !0, l[f] = g) : i[f] = g
    }
    if (t.transform || (a || r ? i.transform = jg(e.transform, n, c, r) : i.transform && (i.transform = "none")), u) {
        const {
            originX: f = "50%",
            originY: d = "50%",
            originZ: m = 0
        } = l;
        i.transformOrigin = `${f} ${d} ${m}`
    }
}
const _a = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Op(e, t, n) {
    for (const r in t) !Ve(t[r]) && !Ap(r, n) && (e[r] = t[r])
}

function Hg({
    transformTemplate: e
}, t, n) {
    return _.useMemo(() => {
        const r = _a();
        return Ra(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function Wg(e, t, n) {
    const r = e.style || {},
        i = {};
    return Op(i, r, e), Object.assign(i, Hg(e, t, n)), e.transformValues ? e.transformValues(i) : i
}

function Kg(e, t, n) {
    const r = {},
        i = Wg(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = i, r
}
const Gg = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

function fo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Gg.has(e)
}
let jp = e => !fo(e);

function Qg(e) {
    e && (jp = t => t.startsWith("on") ? !fo(t) : e(t))
}
try {
    Qg(require("@emotion/is-prop-valid").default)
} catch {}

function Yg(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (jp(i) || n === !0 && fo(i) || !t && !fo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function cc(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e)
}

function Xg(e, t, n) {
    const r = cc(t, e.x, e.width),
        i = cc(n, e.y, e.height);
    return `${r} ${i}`
}
const Zg = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Jg = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function qg(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Zg : Jg;
    e[o.offset] = L.transform(-r);
    const s = L.transform(t),
        l = L.transform(n);
    e[o.array] = `${s} ${l}`
}

function Na(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
}, c, f, d) {
    if (Ra(e, u, c, d), f) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: m,
        style: g,
        dimensions: v
    } = e;
    m.transform && (v && (g.transform = m.transform), delete m.transform), v && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Xg(v, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (m.x = t), n !== void 0 && (m.y = n), r !== void 0 && (m.scale = r), s !== void 0 && qg(m, s, l, a, !1)
}
const zp = () => ({ ..._a(),
        attrs: {}
    }),
    Fa = e => typeof e == "string" && e.toLowerCase() === "svg";

function bg(e, t, n, r) {
    const i = _.useMemo(() => {
        const o = zp();
        return Na(o, t, {
            enableHardwareAcceleration: !1
        }, Fa(r), e.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        Op(o, e.style, e), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function e0(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const a = (Aa(n) ? bg : Kg)(r, o, s, n),
            c = { ...Yg(r, typeof n == "string", e),
                ...a,
                ref: i
            },
            {
                children: f
            } = r,
            d = _.useMemo(() => Ve(f) ? f.get() : f, [f]);
        return _.createElement(n, { ...c,
            children: d
        })
    }
}
const Oa = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

function Ip(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const Bp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Up(e, t, n, r) {
    Ip(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Bp.has(i) ? i : Oa(i), t.attrs[i])
}

function ja(e, t) {
    const {
        style: n
    } = e, r = {};
    for (const i in n)(Ve(n[i]) || t.style && Ve(t.style[i]) || Ap(i, e)) && (r[i] = n[i]);
    return r
}

function $p(e, t) {
    const n = ja(e, t);
    for (const r in e)
        if (Ve(e[r]) || Ve(t[r])) {
            const i = ei.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}

function za(e, t, n, r = {}, i = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)), t
}

function t0(e) {
    const t = _.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const po = e => Array.isArray(e),
    n0 = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    r0 = e => po(e) ? e[e.length - 1] || 0 : e;

function zi(e) {
    const t = Ve(e) ? e.get() : e;
    return n0(t) ? t.toValue() : t
}

function i0({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, i, o) {
    const s = {
        latestValues: o0(r, i, o, e),
        renderState: t()
    };
    return n && (s.mount = l => n(r, l, s)), s
}
const Hp = e => (t, n) => {
    const r = _.useContext(Fo),
        i = _.useContext(La),
        o = () => i0(e, t, r, i);
    return n ? o() : t0(o)
};

function o0(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const d in o) i[d] = zi(o[d]);
    let {
        initial: s,
        animate: l
    } = e;
    const a = zo(e),
        u = Lp(e);
    t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? l : s;
    return f && typeof f != "boolean" && !jo(f) && (Array.isArray(f) ? f : [f]).forEach(m => {
        const g = za(e, m);
        if (!g) return;
        const {
            transitionEnd: v,
            transition: T,
            ...y
        } = g;
        for (const p in y) {
            let h = y[p];
            if (Array.isArray(h)) {
                const w = c ? h.length - 1 : 0;
                h = h[w]
            }
            h !== null && (i[p] = h)
        }
        for (const p in v) i[p] = v[p]
    }), i
}
const X = e => e;
class fc {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function s0(e) {
    let t = new fc,
        n = new fc,
        r = 0,
        i = !1,
        o = !1;
    const s = new WeakSet,
        l = {
            schedule: (a, u = !1, c = !1) => {
                const f = c && i,
                    d = f ? t : n;
                return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a
            },
            cancel: a => {
                n.remove(a), s.delete(a)
            },
            process: a => {
                if (i) {
                    o = !0;
                    return
                }
                if (i = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(a), s.has(c) && (l.schedule(c), e())
                    }
                i = !1, o && (o = !1, l.process(a))
            }
        };
    return l
}
const ki = ["prepare", "read", "update", "preRender", "render", "postRender"],
    l0 = 40;

function a0(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = ki.reduce((f, d) => (f[d] = s0(() => n = !0), f), {}),
        s = f => o[f].process(i),
        l = () => {
            const f = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, l0), 1), i.timestamp = f, i.isProcessing = !0, ki.forEach(s), i.isProcessing = !1, n && t && (r = !1, e(l))
        },
        a = () => {
            n = !0, r = !0, i.isProcessing || e(l)
        };
    return {
        schedule: ki.reduce((f, d) => {
            const m = o[d];
            return f[d] = (g, v = !1, T = !1) => (n || a(), m.schedule(g, v, T)), f
        }, {}),
        cancel: f => ki.forEach(d => o[d].cancel(f)),
        state: i,
        steps: o
    }
}
const {
    schedule: U,
    cancel: wt,
    state: ie,
    steps: ms
} = a0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0), u0 = {
    useVisualState: Hp({
        scrapeMotionValuesFromProps: $p,
        createRenderState: zp,
        onMount: (e, t, {
            renderState: n,
            latestValues: r
        }) => {
            U.read(() => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), U.render(() => {
                Na(n, r, {
                    enableHardwareAcceleration: !1
                }, Fa(t.tagName), e.transformTemplate), Up(t, n)
            })
        }
    })
}, c0 = {
    useVisualState: Hp({
        scrapeMotionValuesFromProps: ja,
        createRenderState: _a
    })
};

function f0(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...Aa(e) ? u0 : c0,
        preloadedFeatures: n,
        useRender: e0(t),
        createVisualElement: r,
        Component: e
    }
}

function ft(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Wp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Bo(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const d0 = e => t => Wp(t) && e(t, Bo(t));

function pt(e, t, n, r) {
    return ft(e, t, d0(n), r)
}
const p0 = (e, t) => n => t(e(n)),
    It = (...e) => e.reduce(p0);

function Kp(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const dc = Kp("dragHorizontal"),
    pc = Kp("dragVertical");

function Gp(e) {
    let t = !1;
    if (e === "y") t = pc();
    else if (e === "x") t = dc();
    else {
        const n = dc(),
            r = pc();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function Qp() {
    const e = Gp(!0);
    return e ? (e(), !1) : !0
}
class Yt {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function hc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        i = (o, s) => {
            if (o.type === "touch" || Qp()) return;
            const l = e.getProps();
            e.animationState && l.whileHover && e.animationState.setActive("whileHover", t), l[r] && U.update(() => l[r](o, s))
        };
    return pt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class h0 extends Yt {
    mount() {
        this.unmount = It(hc(this.node, !0), hc(this.node, !1))
    }
    unmount() {}
}
class m0 extends Yt {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = It(ft(this.node.current, "focus", () => this.onFocus()), ft(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Yp = (e, t) => t ? e === t ? !0 : Yp(e, t.parentElement) : !1;

function ys(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, Bo(n))
}
class y0 extends Yt {
    constructor() {
        super(...arguments), this.removeStartListeners = X, this.removeEndListeners = X, this.removeAccessibleListeners = X, this.startPointerPress = (t, n) => {
            if (this.removeEndListeners(), this.isPressing) return;
            const r = this.node.getProps(),
                o = pt(window, "pointerup", (l, a) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c
                    } = this.node.getProps();
                    U.update(() => {
                        Yp(this.node.current, l.target) ? u && u(l, a) : c && c(l, a)
                    })
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = pt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = It(o, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const s = l => {
                        l.key !== "Enter" || !this.checkPressEnd() || ys("up", (a, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && U.update(() => c(a, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = ft(this.node.current, "keyup", s), ys("down", (l, a) => {
                        this.startPress(l, a)
                    })
                },
                n = ft(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && ys("cancel", (o, s) => this.cancelPress(o, s))
                },
                i = ft(this.node.current, "blur", r);
            this.removeAccessibleListeners = It(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && U.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Qp()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && U.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = pt(this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = ft(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = It(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Pl = new WeakMap,
    gs = new WeakMap,
    g0 = e => {
        const t = Pl.get(e.target);
        t && t(e)
    },
    v0 = e => {
        e.forEach(g0)
    };

function w0({
    root: e,
    ...t
}) {
    const n = e || document;
    gs.has(n) || gs.set(n, {});
    const r = gs.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(v0, {
        root: e,
        ...t
    })), r[i]
}

function S0(e, t, n) {
    const r = w0(t);
    return Pl.set(e, n), r.observe(e), () => {
        Pl.delete(e), r.unobserve(e)
    }
}
const x0 = {
    some: 0,
    all: 1
};
class P0 extends Yt {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : x0[i]
        }, l = a => {
            const {
                isIntersecting: u
            } = a;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: f
            } = this.node.getProps(), d = u ? c : f;
            d && d(a)
        };
        return S0(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(k0(t, n)) && this.startObserver()
    }
    unmount() {}
}

function k0({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const C0 = {
    inView: {
        Feature: P0
    },
    tap: {
        Feature: y0
    },
    focus: {
        Feature: m0
    },
    hover: {
        Feature: h0
    }
};

function Xp(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function T0(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function E0(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function Uo(e, t, n) {
    const r = e.getProps();
    return za(r, t, n !== void 0 ? n : r.custom, T0(e), E0(e))
}
const V0 = "framerAppearId",
    L0 = "data-" + Oa(V0);
let D0 = X,
    Ia = X;
const Bt = e => e * 1e3,
    ht = e => e / 1e3,
    M0 = {
        current: !1
    },
    Zp = e => Array.isArray(e) && typeof e[0] == "number";

function Jp(e) {
    return !!(!e || typeof e == "string" && qp[e] || Zp(e) || Array.isArray(e) && e.every(Jp))
}
const mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    qp = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: mr([0, .65, .55, 1]),
        circOut: mr([.55, 0, 1, .45]),
        backIn: mr([.31, .01, .66, -.59]),
        backOut: mr([.33, 1.53, .69, .99])
    };

function bp(e) {
    if (e) return Zp(e) ? mr(e) : Array.isArray(e) ? e.map(bp) : qp[e]
}

function A0(e, t, n, {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a
} = {}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = bp(l);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function R0(e, {
    repeat: t,
    repeatType: n = "loop"
}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const eh = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    _0 = 1e-7,
    N0 = 12;

function F0(e, t, n, r, i) {
    let o, s, l = 0;
    do s = t + (n - t) / 2, o = eh(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > _0 && ++l < N0);
    return s
}

function ri(e, t, n, r) {
    if (e === t && n === r) return X;
    const i = o => F0(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : eh(i(o), t, r)
}
const O0 = ri(.42, 0, 1, 1),
    j0 = ri(0, 0, .58, 1),
    th = ri(.42, 0, .58, 1),
    z0 = e => Array.isArray(e) && typeof e[0] != "number",
    nh = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    rh = e => t => 1 - e(1 - t),
    ih = e => 1 - Math.sin(Math.acos(e)),
    Ba = rh(ih),
    I0 = nh(Ba),
    oh = ri(.33, 1.53, .69, .99),
    Ua = rh(oh),
    B0 = nh(Ua),
    U0 = e => (e *= 2) < 1 ? .5 * Ua(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    $0 = {
        linear: X,
        easeIn: O0,
        easeInOut: th,
        easeOut: j0,
        circIn: ih,
        circInOut: I0,
        circOut: Ba,
        backIn: Ua,
        backInOut: B0,
        backOut: oh,
        anticipate: U0
    },
    mc = e => {
        if (Array.isArray(e)) {
            Ia(e.length === 4);
            const [t, n, r, i] = e;
            return ri(t, n, r, i)
        } else if (typeof e == "string") return $0[e];
        return e
    },
    $a = (e, t) => n => !!(ti(n) && Bg.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    sh = (e, t, n) => r => {
        if (!ti(r)) return r;
        const [i, o, s, l] = r.match(Io);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    },
    H0 = e => Ht(0, 255, e),
    vs = { ...vn,
        transform: e => Math.round(H0(e))
    },
    ln = {
        test: $a("rgb", "red"),
        parse: sh("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + vs.transform(e) + ", " + vs.transform(t) + ", " + vs.transform(n) + ", " + Er(Tr.transform(r)) + ")"
    };

function W0(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const kl = {
        test: $a("#"),
        parse: W0,
        transform: ln.transform
    },
    Nn = {
        test: $a("hsl", "hue"),
        parse: sh("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + st.transform(Er(t)) + ", " + st.transform(Er(n)) + ", " + Er(Tr.transform(r)) + ")"
    },
    me = {
        test: e => ln.test(e) || kl.test(e) || Nn.test(e),
        parse: e => ln.test(e) ? ln.parse(e) : Nn.test(e) ? Nn.parse(e) : kl.parse(e),
        transform: e => ti(e) ? e : e.hasOwnProperty("red") ? ln.transform(e) : Nn.transform(e)
    },
    K = (e, t, n) => -n * e + n * t + e;

function ws(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function K0({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            a = 2 * n - l;
        i = ws(a, l, e + 1 / 3), o = ws(a, l, e), s = ws(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const Ss = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    G0 = [kl, ln, Nn],
    Q0 = e => G0.find(t => t.test(e));

function yc(e) {
    const t = Q0(e);
    let n = t.parse(e);
    return t === Nn && (n = K0(n)), n
}
const lh = (e, t) => {
    const n = yc(e),
        r = yc(t),
        i = { ...n
        };
    return o => (i.red = Ss(n.red, r.red, o), i.green = Ss(n.green, r.green, o), i.blue = Ss(n.blue, r.blue, o), i.alpha = K(n.alpha, r.alpha, o), ln.transform(i))
};

function Y0(e) {
    var t, n;
    return isNaN(e) && ti(e) && (((t = e.match(Io)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Np)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const ah = {
        regex: zg,
        countKey: "Vars",
        token: "${v}",
        parse: X
    },
    uh = {
        regex: Np,
        countKey: "Colors",
        token: "${c}",
        parse: me.parse
    },
    ch = {
        regex: Io,
        countKey: "Numbers",
        token: "${n}",
        parse: vn.parse
    };

function xs(e, {
    regex: t,
    countKey: n,
    token: r,
    parse: i
}) {
    const o = e.tokenised.match(t);
    o && (e["num" + n] = o.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...o.map(i)))
}

function ho(e) {
    const t = e.toString(),
        n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && xs(n, ah), xs(n, uh), xs(n, ch), n
}

function fh(e) {
    return ho(e).values
}

function dh(e) {
    const {
        values: t,
        numColors: n,
        numVars: r,
        tokenised: i
    } = ho(e), o = t.length;
    return s => {
        let l = i;
        for (let a = 0; a < o; a++) a < r ? l = l.replace(ah.token, s[a]) : a < r + n ? l = l.replace(uh.token, me.transform(s[a])) : l = l.replace(ch.token, Er(s[a]));
        return l
    }
}
const X0 = e => typeof e == "number" ? 0 : e;

function Z0(e) {
    const t = fh(e);
    return dh(e)(t.map(X0))
}
const Wt = {
        test: Y0,
        parse: fh,
        createTransformer: dh,
        getAnimatableNone: Z0
    },
    ph = (e, t) => n => `${n>0?t:e}`;

function hh(e, t) {
    return typeof e == "number" ? n => K(e, t, n) : me.test(e) ? lh(e, t) : e.startsWith("var(") ? ph(e, t) : yh(e, t)
}
const mh = (e, t) => {
        const n = [...e],
            r = n.length,
            i = e.map((o, s) => hh(o, t[s]));
        return o => {
            for (let s = 0; s < r; s++) n[s] = i[s](o);
            return n
        }
    },
    J0 = (e, t) => {
        const n = { ...e,
                ...t
            },
            r = {};
        for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = hh(e[i], t[i]));
        return i => {
            for (const o in r) n[o] = r[o](i);
            return n
        }
    },
    yh = (e, t) => {
        const n = Wt.createTransformer(t),
            r = ho(e),
            i = ho(t);
        return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? It(mh(r.values, i.values), n) : ph(e, t)
    },
    Yr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    gc = (e, t) => n => K(e, t, n);

function q0(e) {
    return typeof e == "number" ? gc : typeof e == "string" ? me.test(e) ? lh : yh : Array.isArray(e) ? mh : typeof e == "object" ? J0 : gc
}

function b0(e, t, n) {
    const r = [],
        i = n || q0(e[0]),
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || X : t;
            l = It(a, l)
        }
        r.push(l)
    }
    return r
}

function gh(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (Ia(o === t.length), o === 1) return () => t[0];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = b0(t, r, i),
        l = s.length,
        a = u => {
            let c = 0;
            if (l > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const f = Yr(e[c], e[c + 1], u);
            return s[c](f)
        };
    return n ? u => a(Ht(e[0], e[o - 1], u)) : a
}

function ev(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Yr(0, t, r);
        e.push(K(n, 1, i))
    }
}

function tv(e) {
    const t = [0];
    return ev(t, e.length - 1), t
}

function nv(e, t) {
    return e.map(n => n * t)
}

function rv(e, t) {
    return e.map(() => t || th).splice(0, e.length - 1)
}

function mo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = z0(r) ? r.map(mc) : mc(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = nv(n && n.length === t.length ? n : tv(t), e),
        l = gh(s, t, {
            ease: Array.isArray(i) ? i : rv(t, i)
        });
    return {
        calculatedDuration: e,
        next: a => (o.value = l(a), o.done = a >= e, o)
    }
}

function vh(e, t) {
    return t ? e * (1e3 / t) : 0
}
const iv = 5;

function wh(e, t, n) {
    const r = Math.max(t - iv, 0);
    return vh(n - e(r), t - r)
}
const Ps = .001,
    ov = .01,
    vc = 10,
    sv = .05,
    lv = 1;

function av({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, o;
    D0(e <= Bt(vc));
    let s = 1 - t;
    s = Ht(sv, lv, s), e = Ht(ov, vc, ht(e)), s < 1 ? (i = u => {
        const c = u * s,
            f = c * e,
            d = c - n,
            m = Cl(u, s),
            g = Math.exp(-f);
        return Ps - d / m * g
    }, o = u => {
        const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-f),
            v = Cl(Math.pow(u, 2), s);
        return (-i(u) + Ps > 0 ? -1 : 1) * ((d - m) * g) / v
    }) : (i = u => {
        const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -Ps + c * f
    }, o = u => {
        const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return c * f
    });
    const l = 5 / e,
        a = cv(i, o, l);
    if (e = Bt(e), isNaN(a)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const uv = 12;

function cv(e, t, n) {
    let r = n;
    for (let i = 1; i < uv; i++) r = r - e(r) / t(r);
    return r
}

function Cl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const fv = ["duration", "bounce"],
    dv = ["stiffness", "damping", "mass"];

function wc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function pv(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!wc(e, dv) && wc(e, fv)) {
        const n = av(e);
        t = { ...t,
            ...n,
            velocity: 0,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function Sh({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        o = e[e.length - 1],
        s = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: a,
            mass: u,
            velocity: c,
            duration: f,
            isResolvedFromDuration: d
        } = pv(r),
        m = c ? -ht(c) : 0,
        g = a / (2 * Math.sqrt(l * u)),
        v = o - i,
        T = ht(Math.sqrt(l / u)),
        y = Math.abs(v) < 5;
    n || (n = y ? .01 : 2), t || (t = y ? .005 : .5);
    let p;
    if (g < 1) {
        const h = Cl(T, g);
        p = w => {
            const S = Math.exp(-g * T * w);
            return o - S * ((m + g * T * v) / h * Math.sin(h * w) + v * Math.cos(h * w))
        }
    } else if (g === 1) p = h => o - Math.exp(-T * h) * (v + (m + T * v) * h);
    else {
        const h = T * Math.sqrt(g * g - 1);
        p = w => {
            const S = Math.exp(-g * T * w),
                C = Math.min(h * w, 300);
            return o - S * ((m + g * T * v) * Math.sinh(C) + h * v * Math.cosh(C)) / h
        }
    }
    return {
        calculatedDuration: d && f || null,
        next: h => {
            const w = p(h);
            if (d) s.done = h >= f;
            else {
                let S = m;
                h !== 0 && (g < 1 ? S = wh(p, h, w) : S = 0);
                const C = Math.abs(S) <= n,
                    k = Math.abs(o - w) <= t;
                s.done = C && k
            }
            return s.value = s.done ? o : w, s
        }
    }
}

function Sc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: l,
    max: a,
    restDelta: u = .5,
    restSpeed: c
}) {
    const f = e[0],
        d = {
            done: !1,
            value: f
        },
        m = P => l !== void 0 && P < l || a !== void 0 && P > a,
        g = P => l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let v = n * t;
    const T = f + v,
        y = s === void 0 ? T : s(T);
    y !== T && (v = y - f);
    const p = P => -v * Math.exp(-P / r),
        h = P => y + p(P),
        w = P => {
            const A = p(P),
                D = h(P);
            d.done = Math.abs(A) <= u, d.value = d.done ? y : D
        };
    let S, C;
    const k = P => {
        m(d.value) && (S = P, C = Sh({
            keyframes: [d.value, g(d.value)],
            velocity: wh(h, P, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return k(0), {
        calculatedDuration: null,
        next: P => {
            let A = !1;
            return !C && S === void 0 && (A = !0, w(P), k(P)), S !== void 0 && P > S ? C.next(P - S) : (!A && w(P), d)
        }
    }
}
const hv = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => U.update(t, !0),
            stop: () => wt(t),
            now: () => ie.isProcessing ? ie.timestamp : performance.now()
        }
    },
    xc = 2e4;

function Pc(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < xc;) t += n, r = e.next(t);
    return t >= xc ? 1 / 0 : t
}
const mv = {
    decay: Sc,
    inertia: Sc,
    tween: mo,
    keyframes: mo,
    spring: Sh
};

function yo({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = hv,
    keyframes: r,
    type: i = "keyframes",
    repeat: o = 0,
    repeatDelay: s = 0,
    repeatType: l = "loop",
    onPlay: a,
    onStop: u,
    onComplete: c,
    onUpdate: f,
    ...d
}) {
    let m = 1,
        g = !1,
        v, T;
    const y = () => {
        T = new Promise(M => {
            v = M
        })
    };
    y();
    let p;
    const h = mv[i] || mo;
    let w;
    h !== mo && typeof r[0] != "number" && (w = gh([0, 100], r, {
        clamp: !1
    }), r = [0, 100]);
    const S = h({ ...d,
        keyframes: r
    });
    let C;
    l === "mirror" && (C = h({ ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let k = "idle",
        P = null,
        A = null,
        D = null;
    S.calculatedDuration === null && o && (S.calculatedDuration = Pc(S));
    const {
        calculatedDuration: Z
    } = S;
    let Se = 1 / 0,
        xe = 1 / 0;
    Z !== null && (Se = Z + s, xe = Se * (o + 1) - s);
    let J = 0;
    const q = M => {
            if (A === null) return;
            m > 0 && (A = Math.min(A, M)), m < 0 && (A = Math.min(M - xe / m, A)), P !== null ? J = P : J = Math.round(M - A) * m;
            const $ = J - t * (m >= 0 ? 1 : -1),
                Xt = m >= 0 ? $ < 0 : $ > xe;
            J = Math.max($, 0), k === "finished" && P === null && (J = xe);
            let qe = J,
                wn = S;
            if (o) {
                const $o = J / Se;
                let ii = Math.floor($o),
                    Jt = $o % 1;
                !Jt && $o >= 1 && (Jt = 1), Jt === 1 && ii--, ii = Math.min(ii, o + 1);
                const Ya = !!(ii % 2);
                Ya && (l === "reverse" ? (Jt = 1 - Jt, s && (Jt -= s / Se)) : l === "mirror" && (wn = C));
                let Xa = Ht(0, 1, Jt);
                J > xe && (Xa = l === "reverse" && Ya ? 1 : 0), qe = Xa * Se
            }
            const Le = Xt ? {
                done: !1,
                value: r[0]
            } : wn.next(qe);
            w && (Le.value = w(Le.value));
            let {
                done: Zt
            } = Le;
            !Xt && Z !== null && (Zt = m >= 0 ? J >= xe : J <= 0);
            const Gh = P === null && (k === "finished" || k === "running" && Zt);
            return f && f(Le.value), Gh && E(), Le
        },
        Oe = () => {
            p && p.stop(), p = void 0
        },
        Je = () => {
            k = "idle", Oe(), v(), y(), A = D = null
        },
        E = () => {
            k = "finished", c && c(), Oe(), v()
        },
        R = () => {
            if (g) return;
            p || (p = n(q));
            const M = p.now();
            a && a(), P !== null ? A = M - P : (!A || k === "finished") && (A = M), k === "finished" && y(), D = A, P = null, k = "running", p.start()
        };
    e && R();
    const N = {
        then(M, $) {
            return T.then(M, $)
        },
        get time() {
            return ht(J)
        },
        set time(M) {
            M = Bt(M), J = M, P !== null || !p || m === 0 ? P = M : A = p.now() - M / m
        },
        get duration() {
            const M = S.calculatedDuration === null ? Pc(S) : S.calculatedDuration;
            return ht(M)
        },
        get speed() {
            return m
        },
        set speed(M) {
            M === m || !p || (m = M, N.time = ht(J))
        },
        get state() {
            return k
        },
        play: R,
        pause: () => {
            k = "paused", P = J
        },
        stop: () => {
            g = !0, k !== "idle" && (k = "idle", u && u(), Je())
        },
        cancel: () => {
            D !== null && q(D), Je()
        },
        complete: () => {
            k = "finished"
        },
        sample: M => (A = 0, q(M))
    };
    return N
}

function yv(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const gv = yv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    vv = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    Ci = 10,
    wv = 2e4,
    Sv = (e, t) => t.type === "spring" || e === "backgroundColor" || !Jp(t.ease);

function xv(e, t, {
    onUpdate: n,
    onComplete: r,
    ...i
}) {
    if (!(gv() && vv.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia")) return !1;
    let s = !1,
        l, a;
    const u = () => {
        a = new Promise(p => {
            l = p
        })
    };
    u();
    let {
        keyframes: c,
        duration: f = 300,
        ease: d,
        times: m
    } = i;
    if (Sv(t, i)) {
        const p = yo({ ...i,
            repeat: 0,
            delay: 0
        });
        let h = {
            done: !1,
            value: c[0]
        };
        const w = [];
        let S = 0;
        for (; !h.done && S < wv;) h = p.sample(S), w.push(h.value), S += Ci;
        m = void 0, c = w, f = S - Ci, d = "linear"
    }
    const g = A0(e.owner.current, t, c, { ...i,
        duration: f,
        ease: d,
        times: m
    });
    i.syncStart && (g.startTime = ie.isProcessing ? ie.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const v = () => g.cancel(),
        T = () => {
            U.update(v), l(), u()
        };
    return g.onfinish = () => {
        e.set(R0(c, i)), r && r(), T()
    }, {
        then(p, h) {
            return a.then(p, h)
        },
        attachTimeline(p) {
            return g.timeline = p, g.onfinish = null, X
        },
        get time() {
            return ht(g.currentTime || 0)
        },
        set time(p) {
            g.currentTime = Bt(p)
        },
        get speed() {
            return g.playbackRate
        },
        set speed(p) {
            g.playbackRate = p
        },
        get duration() {
            return ht(f)
        },
        play: () => {
            s || (g.play(), wt(v))
        },
        pause: () => g.pause(),
        stop: () => {
            if (s = !0, g.playState === "idle") return;
            const {
                currentTime: p
            } = g;
            if (p) {
                const h = yo({ ...i,
                    autoplay: !1
                });
                e.setWithVelocity(h.sample(p - Ci).value, h.sample(p).value, Ci)
            }
            T()
        },
        complete: () => g.finish(),
        cancel: T
    }
}

function Pv({
    keyframes: e,
    delay: t,
    onUpdate: n,
    onComplete: r
}) {
    const i = () => (n && n(e[e.length - 1]), r && r(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: X,
        pause: X,
        stop: X,
        then: o => (o(), Promise.resolve()),
        cancel: X,
        complete: X
    });
    return t ? yo({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const kv = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Cv = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Tv = {
        type: "keyframes",
        duration: .8
    },
    Ev = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Vv = (e, {
        keyframes: t
    }) => t.length > 2 ? Tv : gn.has(e) ? e.startsWith("scale") ? Cv(t[1]) : kv : Ev,
    Tl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Wt.test(t) || t === "0") && !t.startsWith("url(")),
    Lv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Dv(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Io) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = Lv.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const Mv = /([a-z-]*)\(.*?\)/g,
    El = { ...Wt,
        getAnimatableNone: e => {
            const t = e.match(Mv);
            return t ? t.map(Dv).join(" ") : e
        }
    },
    Av = { ...Fp,
        color: me,
        backgroundColor: me,
        outlineColor: me,
        fill: me,
        stroke: me,
        borderColor: me,
        borderTopColor: me,
        borderRightColor: me,
        borderBottomColor: me,
        borderLeftColor: me,
        filter: El,
        WebkitFilter: El
    },
    Ha = e => Av[e];

function xh(e, t) {
    let n = Ha(e);
    return n !== El && (n = Wt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Ph = e => /^0[^.\s]+$/.test(e);

function Rv(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || Ph(e)
}

function _v(e, t, n, r) {
    const i = Tl(t, n);
    let o;
    Array.isArray(n) ? o = [...n] : o = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < o.length; u++) o[u] === null && (o[u] = u === 0 ? s : o[u - 1]), Rv(o[u]) && a.push(u), typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            o[c] = xh(t, l)
        }
    return o
}

function Nv({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: l,
    from: a,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function kh(e, t) {
    return e[t] || e.default || e
}
const Wa = (e, t, n, r = {}) => i => {
    const o = kh(r, e) || {},
        s = o.delay || r.delay || 0;
    let {
        elapsed: l = 0
    } = r;
    l = l - Bt(s);
    const a = _v(t, e, n, o),
        u = a[0],
        c = a[a.length - 1],
        f = Tl(e, u),
        d = Tl(e, c);
    let m = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -l,
        onUpdate: g => {
            t.set(g), o.onUpdate && o.onUpdate(g)
        },
        onComplete: () => {
            i(), o.onComplete && o.onComplete()
        }
    };
    if (Nv(o) || (m = { ...m,
            ...Vv(e, m)
        }), m.duration && (m.duration = Bt(m.duration)), m.repeatDelay && (m.repeatDelay = Bt(m.repeatDelay)), !f || !d || M0.current || o.type === !1) return Pv(m);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const g = xv(t, e, m);
        if (g) return g
    }
    return yo(m)
};

function go(e) {
    return !!(Ve(e) && e.add)
}
const Ch = e => /^\-?\d*\.?\d+$/.test(e);

function Ka(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Ga(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Qa {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Ka(this.subscriptions, t), () => Ga(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const Fv = e => !isNaN(parseFloat(e));
class Ov {
    constructor(t, n = {}) {
        this.version = "10.16.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            this.prev = this.current, this.current = r;
            const {
                delta: o,
                timestamp: s
            } = ie;
            this.lastUpdated !== s && (this.timeDelta = o, this.lastUpdated = s, U.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => U.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: r
        }) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Fv(this.current), this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Qa);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), U.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? vh(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Zn(e, t) {
    return new Ov(e, t)
}
const Th = e => t => t.test(e),
    jv = {
        test: e => e === "auto",
        parse: e => e
    },
    Eh = [vn, L, st, Pt, $g, Ug, jv],
    ur = e => Eh.find(Th(e)),
    zv = [...Eh, me, Wt],
    Iv = e => zv.find(Th(e));

function Bv(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zn(n))
}

function Uv(e, t) {
    const n = Uo(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    o = { ...o,
        ...r
    };
    for (const s in o) {
        const l = r0(o[s]);
        Bv(e, s, l)
    }
}

function $v(e, t, n) {
    var r, i;
    const o = Object.keys(t).filter(l => !e.hasValue(l)),
        s = o.length;
    if (s)
        for (let l = 0; l < s; l++) {
            const a = o[l],
                u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]), c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]), c != null && (typeof c == "string" && (Ch(c) || Ph(c)) ? c = parseFloat(c) : !Iv(c) && Wt.test(u) && (c = xh(a, u)), e.addValue(a, Zn(c, {
                owner: e
            })), n[a] === void 0 && (n[a] = c), c !== null && e.setBaseTarget(a, c))
        }
}

function Hv(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function Wv(e, t, n) {
    const r = {};
    for (const i in e) {
        const o = Hv(i, t);
        if (o !== void 0) r[i] = o;
        else {
            const s = n.getValue(i);
            s && (r[i] = s.get())
        }
    }
    return r
}

function Kv({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function Vh(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: s,
        ...l
    } = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (o = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const d = e.getValue(f),
            m = l[f];
        if (!d || m === void 0 || c && Kv(c, f)) continue;
        const g = {
            delay: n,
            elapsed: 0,
            ...o
        };
        if (window.HandoffAppearAnimations && !d.hasAnimated) {
            const T = e.getProps()[L0];
            T && (g.elapsed = window.HandoffAppearAnimations(T, f, d, U), g.syncStart = !0)
        }
        d.start(Wa(f, d, m, e.shouldReduceMotion && gn.has(f) ? {
            type: !1
        } : g));
        const v = d.animation;
        go(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v)
    }
    return s && Promise.all(u).then(() => {
        s && Uv(e, s)
    }), u
}

function Vl(e, t, n = {}) {
    const r = Uo(e, t, n.custom);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = r ? () => Promise.all(Vh(e, r, n)) : () => Promise.resolve(),
        s = e.variantChildren && e.variantChildren.size ? (a = 0) => {
            const {
                delayChildren: u = 0,
                staggerChildren: c,
                staggerDirection: f
            } = i;
            return Gv(e, t, u + a, c, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = i;
    if (l) {
        const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
        return a().then(() => u())
    } else return Promise.all([o(), s(n.delay)])
}

function Gv(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        l = (e.variantChildren.size - 1) * r,
        a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
    return Array.from(e.variantChildren).sort(Qv).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(Vl(u, t, { ...o,
            delay: n + a(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function Qv(e, t) {
    return e.sortNodePosition(t)
}

function Yv(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Vl(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Vl(e, t, n);
    else {
        const i = typeof t == "function" ? Uo(e, t, n.custom) : t;
        r = Promise.all(Vh(e, i, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const Xv = [...Da].reverse(),
    Zv = Da.length;

function Jv(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Yv(e, n, r)))
}

function qv(e) {
    let t = Jv(e);
    const n = e1();
    let r = !0;
    const i = (a, u) => {
        const c = Uo(e, u);
        if (c) {
            const {
                transition: f,
                transitionEnd: d,
                ...m
            } = c;
            a = { ...a,
                ...m,
                ...d
            }
        }
        return a
    };

    function o(a) {
        t = a(e)
    }

    function s(a, u) {
        const c = e.getProps(),
            f = e.getVariantContext(!0) || {},
            d = [],
            m = new Set;
        let g = {},
            v = 1 / 0;
        for (let y = 0; y < Zv; y++) {
            const p = Xv[y],
                h = n[p],
                w = c[p] !== void 0 ? c[p] : f[p],
                S = Gr(w),
                C = p === u ? h.isActive : null;
            C === !1 && (v = y);
            let k = w === f[p] && w !== c[p] && S;
            if (k && r && e.manuallyAnimateOnMount && (k = !1), h.protectedKeys = { ...g
                }, !h.isActive && C === null || !w && !h.prevProp || jo(w) || typeof w == "boolean") continue;
            const P = bv(h.prevProp, w);
            let A = P || p === u && h.isActive && !k && S || y > v && S;
            const D = Array.isArray(w) ? w : [w];
            let Z = D.reduce(i, {});
            C === !1 && (Z = {});
            const {
                prevResolvedValues: Se = {}
            } = h, xe = { ...Se,
                ...Z
            }, J = q => {
                A = !0, m.delete(q), h.needsAnimating[q] = !0
            };
            for (const q in xe) {
                const Oe = Z[q],
                    Je = Se[q];
                g.hasOwnProperty(q) || (Oe !== Je ? po(Oe) && po(Je) ? !Xp(Oe, Je) || P ? J(q) : h.protectedKeys[q] = !0 : Oe !== void 0 ? J(q) : m.add(q) : Oe !== void 0 && m.has(q) ? J(q) : h.protectedKeys[q] = !0)
            }
            h.prevProp = w, h.prevResolvedValues = Z, h.isActive && (g = { ...g,
                ...Z
            }), r && e.blockInitialAnimation && (A = !1), A && !k && d.push(...D.map(q => ({
                animation: q,
                options: {
                    type: p,
                    ...a
                }
            })))
        }
        if (m.size) {
            const y = {};
            m.forEach(p => {
                const h = e.getBaseTarget(p);
                h !== void 0 && (y[p] = h)
            }), d.push({
                animation: y
            })
        }
        let T = !!d.length;
        return r && c.initial === !1 && !e.manuallyAnimateOnMount && (T = !1), r = !1, T ? t(d) : Promise.resolve()
    }

    function l(a, u, c) {
        var f;
        if (n[a].isActive === u) return Promise.resolve();
        (f = e.variantChildren) === null || f === void 0 || f.forEach(m => {
            var g;
            return (g = m.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u)
        }), n[a].isActive = u;
        const d = s(c, a);
        for (const m in n) n[m].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n
    }
}

function bv(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xp(t, e) : !1
}

function qt(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function e1() {
    return {
        animate: qt(!0),
        whileInView: qt(),
        whileHover: qt(),
        whileTap: qt(),
        whileDrag: qt(),
        whileFocus: qt(),
        exit: qt()
    }
}
class t1 extends Yt {
    constructor(t) {
        super(t), t.animationState || (t.animationState = qv(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), jo(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let n1 = 0;
class r1 extends Yt {
    constructor() {
        super(...arguments), this.id = n1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n,
            custom: r
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i) return;
        const o = this.node.animationState.setActive("exit", !t, {
            custom: r ? ? this.node.getProps().custom
        });
        n && !t && o.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const i1 = {
        animation: {
            Feature: t1
        },
        exit: {
            Feature: r1
        }
    },
    kc = (e, t) => Math.abs(e - t);

function o1(e, t) {
    const n = kc(e.x, t.x),
        r = kc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Lh {
    constructor(t, n, {
        transformPagePoint: r
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const u = Cs(this.lastMoveEventInfo, this.history),
                    c = this.startEvent !== null,
                    f = o1(u.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!c && !f) return;
                const {
                    point: d
                } = u, {
                    timestamp: m
                } = ie;
                this.history.push({ ...d,
                    timestamp: m
                });
                const {
                    onStart: g,
                    onMove: v
                } = this.handlers;
                c || (g && g(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, u)
            }, this.handlePointerMove = (u, c) => {
                this.lastMoveEvent = u, this.lastMoveEventInfo = ks(c, this.transformPagePoint), U.update(this.updatePoint, !0)
            }, this.handlePointerUp = (u, c) => {
                if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const {
                    onEnd: f,
                    onSessionEnd: d
                } = this.handlers, m = Cs(u.type === "pointercancel" ? this.lastMoveEventInfo : ks(c, this.transformPagePoint), this.history);
                this.startEvent && f && f(u, m), d && d(u, m)
            }, !Wp(t)) return;
        this.handlers = n, this.transformPagePoint = r;
        const i = Bo(t),
            o = ks(i, this.transformPagePoint),
            {
                point: s
            } = o,
            {
                timestamp: l
            } = ie;
        this.history = [{ ...s,
            timestamp: l
        }];
        const {
            onSessionStart: a
        } = n;
        a && a(t, Cs(o, this.history)), this.removeListeners = It(pt(window, "pointermove", this.handlePointerMove), pt(window, "pointerup", this.handlePointerUp), pt(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), wt(this.updatePoint)
    }
}

function ks(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Cc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Cs({
    point: e
}, t) {
    return {
        point: e,
        delta: Cc(e, Dh(t)),
        offset: Cc(e, s1(t)),
        velocity: l1(t, .1)
    }
}

function s1(e) {
    return e[0]
}

function Dh(e) {
    return e[e.length - 1]
}

function l1(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = Dh(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Bt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = ht(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function _e(e) {
    return e.max - e.min
}

function Ll(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function Tc(e, t, n, r = .5) {
    e.origin = r, e.originPoint = K(t.min, t.max, e.origin), e.scale = _e(n) / _e(t), (Ll(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = K(n.min, n.max, e.origin) - e.originPoint, (Ll(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function Vr(e, t, n, r) {
    Tc(e.x, t.x, n.x, r ? r.originX : void 0), Tc(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Ec(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + _e(t)
}

function a1(e, t, n) {
    Ec(e.x, t.x, n.x), Ec(e.y, t.y, n.y)
}

function Vc(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + _e(t)
}

function Lr(e, t, n) {
    Vc(e.x, t.x, n.x), Vc(e.y, t.y, n.y)
}

function u1(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)), e
}

function Lc(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function c1(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Lc(e.x, n, i),
        y: Lc(e.y, t, r)
    }
}

function Dc(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function f1(e, t) {
    return {
        x: Dc(e.x, t.x),
        y: Dc(e.y, t.y)
    }
}

function d1(e, t) {
    let n = .5;
    const r = _e(e),
        i = _e(t);
    return i > r ? n = Yr(t.min, t.max - r, e.min) : r > i && (n = Yr(e.min, e.max - i, t.min)), Ht(0, 1, n)
}

function p1(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Dl = .35;

function h1(e = Dl) {
    return e === !1 ? e = 0 : e === !0 && (e = Dl), {
        x: Mc(e, "left", "right"),
        y: Mc(e, "top", "bottom")
    }
}

function Mc(e, t, n) {
    return {
        min: Ac(e, t),
        max: Ac(e, n)
    }
}

function Ac(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Rc = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Fn = () => ({
        x: Rc(),
        y: Rc()
    }),
    _c = () => ({
        min: 0,
        max: 0
    }),
    ee = () => ({
        x: _c(),
        y: _c()
    });

function tt(e) {
    return [e("x"), e("y")]
}

function Mh({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function m1({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function y1(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Ts(e) {
    return e === void 0 || e === 1
}

function Ml({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Ts(e) || !Ts(t) || !Ts(n)
}

function tn(e) {
    return Ml(e) || Ah(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function Ah(e) {
    return Nc(e.x) || Nc(e.y)
}

function Nc(e) {
    return e && e !== "0%"
}

function vo(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function Fc(e, t, n, r, i) {
    return i !== void 0 && (e = vo(e, i, r)), vo(e, n, r) + t
}

function Al(e, t = 0, n = 1, r, i) {
    e.min = Fc(e.min, t, n, r, i), e.max = Fc(e.max, t, n, r, i)
}

function Rh(e, {
    x: t,
    y: n
}) {
    Al(e.x, t.translate, t.scale, t.originPoint), Al(e.y, n.translate, n.scale, n.originPoint)
}

function g1(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l], s = o.projectionDelta;
        const a = o.instance;
        a && a.style && a.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && On(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, Rh(e, s)), r && tn(o.latestValues) && On(e, o.latestValues))
    }
    t.x = Oc(t.x), t.y = Oc(t.y)
}

function Oc(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Tt(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function jc(e, t, [n, r, i]) {
    const o = t[i] !== void 0 ? t[i] : .5,
        s = K(e.min, e.max, o);
    Al(e, t[n], t[r], s, t.scale)
}
const v1 = ["x", "scaleX", "originX"],
    w1 = ["y", "scaleY", "originY"];

function On(e, t) {
    jc(e.x, t, v1), jc(e.y, t, w1)
}

function _h(e, t) {
    return Mh(y1(e.getBoundingClientRect(), t))
}

function S1(e, t, n) {
    const r = _h(e, n),
        {
            scroll: i
        } = t;
    return i && (Tt(r.x, i.offset.x), Tt(r.y, i.offset.y)), r
}
const x1 = new WeakMap;
class P1 {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ee(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = a => {
                this.stopAnimation(), n && this.snapToCursor(Bo(a, "page").point)
            },
            o = (a, u) => {
                const {
                    drag: c,
                    dragPropagation: f,
                    onDragStart: d
                } = this.getProps();
                if (c && !f && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Gp(c), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tt(g => {
                    let v = this.getAxisMotionValue(g).get() || 0;
                    if (st.test(v)) {
                        const {
                            projection: T
                        } = this.visualElement;
                        if (T && T.layout) {
                            const y = T.layout.layoutBox[g];
                            y && (v = _e(y) * (parseFloat(v) / 100))
                        }
                    }
                    this.originPoint[g] = v
                }), d && U.update(() => d(a, u), !1, !0);
                const {
                    animationState: m
                } = this.visualElement;
                m && m.setActive("whileDrag", !0)
            },
            s = (a, u) => {
                const {
                    dragPropagation: c,
                    dragDirectionLock: f,
                    onDirectionLock: d,
                    onDrag: m
                } = this.getProps();
                if (!c && !this.openGlobalLock) return;
                const {
                    offset: g
                } = u;
                if (f && this.currentDirection === null) {
                    this.currentDirection = k1(g), this.currentDirection !== null && d && d(this.currentDirection);
                    return
                }
                this.updateAxis("x", u.point, g), this.updateAxis("y", u.point, g), this.visualElement.render(), m && m(a, u)
            },
            l = (a, u) => this.stop(a, u);
        this.panSession = new Lh(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && U.update(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Ti(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = u1(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), {
            layout: r
        } = this.visualElement.projection || {}, i = this.constraints;
        t && _n(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = c1(r.layoutBox, t) : this.constraints = !1, this.elastic = h1(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && tt(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = p1(r.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !_n(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = S1(r, i.root, this.visualElement.getTransformPagePoint());
        let s = f1(i.layout.layoutBox, o);
        if (n) {
            const l = n(m1(s));
            this.hasMutatedConstraints = !!l, l && (s = Mh(l))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: l
        } = this.getProps(), a = this.constraints || {}, u = tt(c => {
            if (!Ti(c, n, this.currentDirection)) return;
            let f = a && a[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6,
                m = i ? 40 : 1e7,
                g = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: d,
                    bounceDamping: m,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(c, g)
        });
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Wa(t, r, 0, n))
    }
    stopAnimation() {
        tt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        tt(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Ti(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: l
                } = i.layout.layoutBox[n];
                o.set(t[n] - K(s, l, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!_n(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        tt(s => {
            const l = this.getAxisMotionValue(s);
            if (l) {
                const a = l.get();
                i[s] = d1({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), tt(s => {
            if (!Ti(s, t, null)) return;
            const l = this.getAxisMotionValue(s),
                {
                    min: a,
                    max: u
                } = this.constraints[s];
            l.set(K(a, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        x1.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = pt(t, "pointerdown", a => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(a)
            }),
            r = () => {
                const {
                    dragConstraints: a
                } = this.getProps();
                _n(a) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
        const s = ft(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: a,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (tt(c => {
                    const f = this.getAxisMotionValue(c);
                    f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = Dl,
                dragMomentum: l = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}

function Ti(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function k1(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class C1 extends Yt {
    constructor(t) {
        super(t), this.removeGroupControls = X, this.removeListeners = X, this.controls = new P1(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const zc = e => (t, n) => {
    e && U.update(() => e(t, n))
};
class T1 extends Yt {
    constructor() {
        super(...arguments), this.removePointerDownListener = X
    }
    onPointerDown(t) {
        this.session = new Lh(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: zc(t),
            onStart: zc(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && U.update(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = pt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function E1() {
    const e = _.useContext(La);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = _.useId();
    return _.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]
}
const Ii = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Ic(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const cr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (L.test(e)) e = parseFloat(e);
                else return e;
            const n = Ic(e, t.target.x),
                r = Ic(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    V1 = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Wt.parse(e);
            if (i.length > 5) return r;
            const o = Wt.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                a = n.y.scale * t.y;
            i[0 + s] /= l, i[1 + s] /= a;
            const u = K(l, a, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    };
class L1 extends rt.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        Ng(D1), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Ii.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || U.postRender(() => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), queueMicrotask(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Nh(e) {
    const [t, n] = E1(), r = _.useContext(Dp);
    return rt.createElement(L1, { ...e,
        layoutGroup: r,
        switchLayoutGroup: _.useContext(Mp),
        isPresent: t,
        safeToRemove: n
    })
}
const D1 = {
        borderRadius: { ...cr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: cr,
        borderTopRightRadius: cr,
        borderBottomLeftRadius: cr,
        borderBottomRightRadius: cr,
        boxShadow: V1
    },
    Fh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    M1 = Fh.length,
    Bc = e => typeof e == "string" ? parseFloat(e) : e,
    Uc = e => typeof e == "number" || L.test(e);

function A1(e, t, n, r, i, o) {
    i ? (e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, R1(r)), e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, _1(r))) : o && (e.opacity = K(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < M1; s++) {
        const l = `border${Fh[s]}Radius`;
        let a = $c(t, l),
            u = $c(n, l);
        if (a === void 0 && u === void 0) continue;
        a || (a = 0), u || (u = 0), a === 0 || u === 0 || Uc(a) === Uc(u) ? (e[l] = Math.max(K(Bc(a), Bc(u), r), 0), (st.test(u) || st.test(a)) && (e[l] += "%")) : e[l] = u
    }(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}

function $c(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const R1 = Oh(0, .5, Ba),
    _1 = Oh(.5, .95, X);

function Oh(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Yr(e, t, r))
}

function Hc(e, t) {
    e.min = t.min, e.max = t.max
}

function je(e, t) {
    Hc(e.x, t.x), Hc(e.y, t.y)
}

function Wc(e, t, n, r, i) {
    return e -= t, e = vo(e, 1 / n, r), i !== void 0 && (e = vo(e, 1 / i, r)), e
}

function N1(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (st.test(t) && (t = parseFloat(t), t = K(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let l = K(o.min, o.max, r);
    e === o && (l -= t), e.min = Wc(e.min, t, n, l, i), e.max = Wc(e.max, t, n, l, i)
}

function Kc(e, t, [n, r, i], o, s) {
    N1(e, t[n], t[r], t[i], t.scale, o, s)
}
const F1 = ["x", "scaleX", "originX"],
    O1 = ["y", "scaleY", "originY"];

function Gc(e, t, n, r) {
    Kc(e.x, t, F1, n ? n.x : void 0, r ? r.x : void 0), Kc(e.y, t, O1, n ? n.y : void 0, r ? r.y : void 0)
}

function Qc(e) {
    return e.translate === 0 && e.scale === 1
}

function jh(e) {
    return Qc(e.x) && Qc(e.y)
}

function j1(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function zh(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function Yc(e) {
    return _e(e.x) / _e(e.y)
}
class z1 {
    constructor() {
        this.members = []
    }
    add(t) {
        Ka(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (Ga(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Xc(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y;
    if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: a,
            rotateX: u,
            rotateY: c
        } = n;
        a && (r += `rotate(${a}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none"
}
const I1 = (e, t) => e.depth - t.depth;
class B1 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Ka(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Ga(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(I1), this.isDirty = !1, this.children.forEach(t)
    }
}

function U1(e, t) {
    const n = performance.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (wt(r), e(o - t))
        };
    return U.read(r, !0), () => wt(r)
}

function $1(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function H1(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function W1(e, t, n) {
    const r = Ve(e) ? e : Zn(e);
    return r.start(Wa("", r, t, n)), r.animation
}
const Zc = ["", "X", "Y", "Z"],
    Jc = 1e3;
let K1 = 0;
const nn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function Ih({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, l = t == null ? void 0 : t()) {
            this.id = K1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                nn.totalNodes = nn.resolvedTargetDeltas = nn.recalculatedProjection = 0, this.nodes.forEach(Y1), this.nodes.forEach(b1), this.nodes.forEach(ew), this.nodes.forEach(X1), $1(nn)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new B1)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Qa), this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = H1(s), this.instance = s;
            const {
                layoutId: a,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = U1(d, 250), Ii.hasAnimatedSinceResize && (Ii.hasAnimatedSinceResize = !1, this.nodes.forEach(bc))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: d,
                hasRelativeTargetChanged: m,
                layout: g
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || ow,
                    {
                        onLayoutAnimationStart: T,
                        onLayoutAnimationComplete: y
                    } = c.getProps(),
                    p = !this.targetLayout || !zh(this.targetLayout, g) || m,
                    h = !d && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, h);
                    const w = { ...kh(v, "layout"),
                        onPlay: T,
                        onComplete: y
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else d || bc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, wt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(tw), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: l,
                layout: a
            } = this.options;
            if (l === void 0 && !a) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(qc);
                return
            }
            this.isUpdating || this.nodes.forEach(J1), this.isUpdating = !1, this.nodes.forEach(q1), this.nodes.forEach(G1), this.nodes.forEach(Q1), this.clearAllSnapshots();
            const l = performance.now();
            ie.delta = Ht(0, 1e3 / 60, l - ie.timestamp), ie.timestamp = l, ie.isProcessing = !0, ms.update.process(ie), ms.preRender.process(ie), ms.render.process(ie), ie.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Z1), this.sharedNodes.forEach(nw)
        }
        scheduleUpdateProjection() {
            U.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            U.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ee(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: l
            } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !jh(this.projectionDelta),
                a = this.getTransformTemplate(),
                u = a ? a(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (l || tn(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)), sw(a), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return ee();
            const l = s.measureViewportBox(),
                {
                    scroll: a
                } = this.root;
            return a && (Tt(l.x, a.offset.x), Tt(l.y, a.offset.y)), l
        }
        removeElementScroll(s) {
            const l = ee();
            je(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a],
                    {
                        scroll: c,
                        options: f
                    } = u;
                if (u !== this.root && c && f.layoutScroll) {
                    if (c.isRoot) {
                        je(l, s);
                        const {
                            scroll: d
                        } = this.root;
                        d && (Tt(l.x, -d.offset.x), Tt(l.y, -d.offset.y))
                    }
                    Tt(l.x, c.offset.x), Tt(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(s, l = !1) {
            const a = ee();
            je(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && On(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), tn(c.latestValues) && On(a, c.latestValues)
            }
            return tn(this.latestValues) && On(a, this.latestValues), a
        }
        removeTransform(s) {
            const l = ee();
            je(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !tn(u.latestValues)) continue;
                Ml(u.latestValues) && u.updateSnapshot();
                const c = ee(),
                    f = u.measurePageBox();
                je(c, f), Gc(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return tn(this.latestValues) && Gc(l, this.latestValues), l
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ie.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: f,
                layoutId: d
            } = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = ie.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Lr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ee(), this.targetWithTransforms = ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), a1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : je(this.target, this.layout.layoutBox), Rh(this.target, this.targetDelta)) : je(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Lr(this.relativeTargetOrigin, this.target, m.target), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    nn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Ml(this.parent.latestValues) || Ah(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead(),
                a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ie.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: f
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f)) return;
            je(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                m = this.treeScale.y;
            g1(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {
                target: g
            } = l;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Fn(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Fn(), this.projectionDeltaWithTransform = Fn());
            const v = this.projectionTransform;
            Vr(this.projectionDelta, this.layoutCorrected, g, this.latestValues), this.projectionTransform = Xc(this.projectionDelta, this.treeScale), (this.projectionTransform !== v || this.treeScale.x !== d || this.treeScale.y !== m) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), nn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, l = !1) {
            const a = this.snapshot,
                u = a ? a.latestValues : {},
                c = { ...this.latestValues
                },
                f = Fn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
            const d = ee(),
                m = a ? a.source : void 0,
                g = this.layout ? this.layout.source : void 0,
                v = m !== g,
                T = this.getStack(),
                y = !T || T.members.length <= 1,
                p = !!(v && !y && this.options.crossfade === !0 && !this.path.some(iw));
            this.animationProgress = 0;
            let h;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                ef(f.x, s.x, S), ef(f.y, s.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Lr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), rw(this.relativeTarget, this.relativeTargetOrigin, d, S), h && j1(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = ee()), je(h, this.relativeTarget)), v && (this.animationValues = c, A1(c, u, this.latestValues, S, p, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (wt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
                Ii.hasAnimatedSinceResize = !0, this.currentAnimation = W1(0, Jc, { ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Jc), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: l,
                target: a,
                layout: u,
                latestValues: c
            } = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && Bh(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ee();
                    const f = _e(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min, a.x.max = a.x.min + f;
                    const d = _e(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min, a.y.max = a.y.min + d
                }
                je(l, a), On(l, c), Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new z1), this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: l
            } = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: l
            } = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: l,
            preserveFollowOpacity: a
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let l = !1;
            const {
                latestValues: a
            } = s;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l) return;
            const u = {};
            for (let c = 0; c < Zc.length; c++) {
                const f = "rotate" + Zc[c];
                a[f] && (u[f] = a[f], s.setStaticValue(f, 0))
            }
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s = {}) {
            var l, a;
            const u = {};
            if (!this.instance || this.isSVG) return u;
            if (this.isVisible) u.visibility = "";
            else return {
                visibility: "hidden"
            };
            const c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = zi(s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = zi(s.pointerEvents) || ""), this.hasProjected && !tn(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(), u.transform = Xc(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
            const {
                x: m,
                y: g
            } = this.projectionDelta;
            u.transformOrigin = `${m.origin*100}% ${g.origin*100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in co) {
                if (d[v] === void 0) continue;
                const {
                    correct: T,
                    applyTo: y
                } = co[v], p = u.transform === "none" ? d[v] : T(d[v], f);
                if (y) {
                    const h = y.length;
                    for (let w = 0; w < h; w++) u[y[w]] = p
                } else u[v] = p
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? zi(s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(qc), this.root.sharedNodes.clear()
        }
    }
}

function G1(e) {
    e.updateLayout()
}

function Q1(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? tt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f],
                m = _e(d);
            d.min = r[f].min, d.max = d.min + m
        }) : Bh(o, n.layoutBox, r) && tt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f],
                m = _e(r[f]);
            d.max = d.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m)
        });
        const l = Fn();
        Vr(l, r, n.layoutBox);
        const a = Fn();
        s ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
        const u = !jh(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: d,
                    layout: m
                } = f;
                if (d && m) {
                    const g = ee();
                    Lr(g, n.layoutBox, d.layoutBox);
                    const v = ee();
                    Lr(v, r, m.layoutBox), zh(g, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function Y1(e) {
    nn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function X1(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Z1(e) {
    e.clearSnapshot()
}

function qc(e) {
    e.clearMeasurements()
}

function J1(e) {
    e.isLayoutDirty = !1
}

function q1(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function bc(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function b1(e) {
    e.resolveTargetDelta()
}

function ew(e) {
    e.calcProjection()
}

function tw(e) {
    e.resetRotation()
}

function nw(e) {
    e.removeLeadSnapshot()
}

function ef(e, t, n) {
    e.translate = K(t.translate, 0, n), e.scale = K(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function tf(e, t, n, r) {
    e.min = K(t.min, n.min, r), e.max = K(t.max, n.max, r)
}

function rw(e, t, n, r) {
    tf(e.x, t.x, n.x, r), tf(e.y, t.y, n.y, r)
}

function iw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const ow = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    nf = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    rf = nf("applewebkit/") && !nf("chrome/") ? Math.round : X;

function of (e) {
    e.min = rf(e.min), e.max = rf(e.max)
}

function sw(e) { of (e.x), of (e.y)
}

function Bh(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Ll(Yc(t), Yc(n), .2)
}
const lw = Ih({
        attachResizeListener: (e, t) => ft(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Es = {
        current: void 0
    },
    Uh = Ih({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Es.current) {
                const e = new lw({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Es.current = e
            }
            return Es.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    aw = {
        pan: {
            Feature: T1
        },
        drag: {
            Feature: C1,
            ProjectionNode: Uh,
            MeasureLayout: Nh
        }
    },
    uw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function cw(e) {
    const t = uw.exec(e);
    if (!t) return [, ];
    const [, n, r] = t;
    return [n, r]
}

function Rl(e, t, n = 1) {
    const [r, i] = cw(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Ch(s) ? parseFloat(s) : s
    } else return xl(i) ? Rl(i, t, n + 1) : i
}

function fw(e, { ...t
}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = { ...n
    }), e.values.forEach(i => {
        const o = i.get();
        if (!xl(o)) return;
        const s = Rl(o, r);
        s && i.set(s)
    });
    for (const i in t) {
        const o = t[i];
        if (!xl(o)) continue;
        const s = Rl(o, r);
        s && (t[i] = s, n || (n = {}), n[i] === void 0 && (n[i] = o))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const dw = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    $h = e => dw.has(e),
    pw = e => Object.keys(e).some($h),
    sf = e => e === vn || e === L,
    lf = (e, t) => parseFloat(e.split(", ")[t]),
    af = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return lf(i[1], t); {
            const o = r.match(/^matrix\((.+)\)$/);
            return o ? lf(o[1], e) : 0
        }
    },
    hw = new Set(["x", "y", "z"]),
    mw = ei.filter(e => !hw.has(e));

function yw(e) {
    const t = [];
    return mw.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}
const Jn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: af(4, 13),
    y: af(5, 14)
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const gw = (e, t, n) => {
        const r = t.measureViewportBox(),
            i = t.current,
            o = getComputedStyle(i),
            {
                display: s
            } = o,
            l = {};
        s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(u => {
            l[u] = Jn[u](r, o)
        }), t.render();
        const a = t.measureViewportBox();
        return n.forEach(u => {
            const c = t.getValue(u);
            c && c.jump(l[u]), e[u] = Jn[u](a, o)
        }), e
    },
    vw = (e, t, n = {}, r = {}) => {
        t = { ...t
        }, r = { ...r
        };
        const i = Object.keys(t).filter($h);
        let o = [],
            s = !1;
        const l = [];
        if (i.forEach(a => {
                const u = e.getValue(a);
                if (!e.hasValue(a)) return;
                let c = n[a],
                    f = ur(c);
                const d = t[a];
                let m;
                if (po(d)) {
                    const g = d.length,
                        v = d[0] === null ? 1 : 0;
                    c = d[v], f = ur(c);
                    for (let T = v; T < g && d[T] !== null; T++) m ? Ia(ur(d[T]) === m) : m = ur(d[T])
                } else m = ur(d);
                if (f !== m)
                    if (sf(f) && sf(m)) {
                        const g = u.get();
                        typeof g == "string" && u.set(parseFloat(g)), typeof d == "string" ? t[a] = parseFloat(d) : Array.isArray(d) && m === L && (t[a] = d.map(parseFloat))
                    } else f != null && f.transform && (m != null && m.transform) && (c === 0 || d === 0) ? c === 0 ? u.set(m.transform(c)) : t[a] = f.transform(d) : (s || (o = yw(e), s = !0), l.push(a), r[a] = r[a] !== void 0 ? r[a] : t[a], u.jump(d))
            }), l.length) {
            const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = gw(t, e, l);
            return o.length && o.forEach(([c, f]) => {
                e.getValue(c).set(f)
            }), e.render(), Oo && a !== null && window.scrollTo({
                top: a
            }), {
                target: u,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function ww(e, t, n, r) {
    return pw(t) ? vw(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const Sw = (e, t, n, r) => {
        const i = fw(e, t, r);
        return t = i.target, r = i.transitionEnd, ww(e, t, n, r)
    },
    _l = {
        current: null
    },
    Hh = {
        current: !1
    };

function xw() {
    if (Hh.current = !0, !!Oo)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => _l.current = e.matches;
            e.addListener(t), t()
        } else _l.current = !1
}

function Pw(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const i in t) {
        const o = t[i],
            s = n[i];
        if (Ve(o)) e.addValue(i, o), go(r) && r.add(i);
        else if (Ve(s)) e.addValue(i, Zn(o, {
            owner: e
        })), go(r) && r.remove(i);
        else if (s !== o)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(o)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Zn(l !== void 0 ? l : o, {
                    owner: e
                }))
            }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t
}
const uf = new WeakMap,
    Wh = Object.keys(Qr),
    kw = Wh.length,
    cf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    Cw = Ma.length;
class Tw {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        visualState: o
    }, s = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => U.render(this.render, !1, !0);
        const {
            latestValues: l,
            renderState: a
        } = o;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = a, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = zo(n), this.isVariantNode = Lp(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: u,
            ...c
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const f in c) {
            const d = c[f];
            l[f] !== void 0 && Ve(d) && (d.set(l[f], !1), go(u) && u.add(f))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t, uf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Hh.current || xw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : _l.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        uf.delete(this.current), this.projection && this.projection.unmount(), wt(this.notifyUpdate), wt(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = gn.has(t),
            i = n.on("change", s => {
                this.latestValues[t] = s, this.props.onUpdate && U.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(), o()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, i, o) {
        let s, l;
        for (let a = 0; a < kw; a++) {
            const u = Wh[a],
                {
                    isEnabled: c,
                    Feature: f,
                    ProjectionNode: d,
                    MeasureLayout: m
                } = Qr[u];
            d && (s = d), c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), m && (l = m))
        }
        if (!this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: a,
                layout: u,
                drag: c,
                dragConstraints: f,
                layoutScroll: d,
                layoutRoot: m
            } = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || f && _n(f),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: o,
                layoutScroll: d,
                layoutRoot: m
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < cf.length; r++) {
            const i = cf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = t["on" + i];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = Pw(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < Cw; r++) {
            const i = Ma[r],
                o = this.props[i];
            (Gr(o) || o === !1) && (n[i] = o)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Zn(n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props, i = typeof r == "string" || typeof r == "object" ? (n = za(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Ve(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Qa), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Kh extends Tw {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    makeTargetAnimatableFromInstance({
        transition: t,
        transitionEnd: n,
        ...r
    }, {
        transformValues: i
    }, o) {
        let s = Wv(r, t || {}, this);
        if (i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o) {
            $v(this, r, s);
            const l = Sw(this, r, s, n);
            n = l.transitionEnd, r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}

function Ew(e) {
    return window.getComputedStyle(e)
}
class Vw extends Kh {
    readValueFromInstance(t, n) {
        if (gn.has(n)) {
            const r = Ha(n);
            return r && r.default || 0
        } else {
            const r = Ew(t),
                i = (_p(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return _h(t, n)
    }
    build(t, n, r, i) {
        Ra(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return ja(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Ve(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, i) {
        Ip(t, n, r, i)
    }
}
class Lw extends Kh {
    constructor() {
        super(...arguments), this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (gn.has(n)) {
            const r = Ha(n);
            return r && r.default || 0
        }
        return n = Bp.has(n) ? n : Oa(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return ee()
    }
    scrapeMotionValuesFromProps(t, n) {
        return $p(t, n)
    }
    build(t, n, r, i) {
        Na(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Up(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Fa(t.tagName), super.mount(t)
    }
}
const Dw = (e, t) => Aa(e) ? new Lw(t, {
        enableHardwareAcceleration: !1
    }) : new Vw(t, {
        enableHardwareAcceleration: !0
    }),
    Mw = {
        layout: {
            ProjectionNode: Uh,
            MeasureLayout: Nh
        }
    },
    Aw = { ...i1,
        ...C0,
        ...aw,
        ...Mw
    },
    Vs = Rg((e, t) => f0(e, t, Aw, Dw)),
    Rw = [{
        href: "https://t.me/BROWNIEBSC",
        src: "/telegram.svg",
        label: "Telegram"
    }, {
        href: "https://x.com/BrownieOnBSC",
        src: "/twitter.svg",
        label: "Twitter"
    }, {
        href: "https://dexscreener.com/bsc/0xaa7cd678c8a2809c6dff1250a87f184e779922c9",
        src: "/whitedexscreener.svg",
        label: "DEX Screener"
    }, {
        href: "https://www.dextools.io/app/en/bnb/pair-explorer/0x0b0fa20afd2d1f5b890d3083819e8a4039ecb9a5?t=1739440542091",
        src: "/whitedextools.svg",
        label: "DEX Tools"
    }],
    _w = () => {
        const [e, t] = _.useState(!1), n = "0xAA7cD678C8a2809c6DFF1250a87f184E779922c9", r = () => {
            navigator.clipboard.writeText(n).then(() => {
                t(!0), setTimeout(() => t(!1), 2e3)
            }).catch(i => console.error("Failed to copy text: ", i))
        };
        return he.jsxs("section", {
            className: "w-full min-h-screen h-auto relative",
            children: [he.jsx("img", {
                src: "/heroimage.webp",
                className: "mx-auto w-full lg:w-1/4 absolute left-0 right-0 bottom-0 pointer-events-none"
            }), he.jsxs("div", {
                className: "flex flex-col items-center justify-center py-20",
                children: [he.jsx(Vs.img, {
                    src: "/title.webp",
                    className: "w-fit lg:w-1/3 pointer-events-none",
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !1
                    },
                    initial: {
                        opacity: 0,
                        y: -50
                    },
                    transition: {
                        duration: .8
                    }
                }), he.jsx(Vs.div, {
                    className: "flex space-x-4 mt-6 lg:mt-0",
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !1
                    },
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    children: Rw.map((i, o) => he.jsx("a", {
                        href: i.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "w-14 h-14 bg-primary border-4 border-black flex justify-center items-center rounded-full duration-300 transition-all ease-in-out hover:border-[5px] hover:scale-90",
                        "aria-label": i.label,
                        children: he.jsx("img", {
                            src: i.src,
                            alt: `${i.label} icon`,
                            className: "w-7 h-7"
                        })
                    }, o))
                })]
            }), he.jsxs("div", {
                className: "flex flex-col lg:flex-row items-center justify-center py-20",
                children: [he.jsxs(Vs.button, {
                    onClick: r,
                    className: "text-white bg-primary gap-x-2 border-3 border-black border-b-[2px] rounded-full flex justify-center items-center mb-6 font-primary text-sm lg:text-3xl px-3 lg:px-10 absolute bottom-0 duration-300 transition-all ease-in-out hover:border-b-[10px]",
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: !1
                    },
                    initial: {
                        opacity: 0,
                        scale: .8
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    children: [n, he.jsx(Pg, {})]
                }), e && he.jsx("span", {
                    className: "text-green-500 mt-2",
                    children: "Copied!"
                })]
            })]
        })
    },
    Nw = () => he.jsx("div", {
        className: "w-full h-auto bg-[#f3ba2d] overflow-hidden",
        style: {
            backgroundImage: 'url("/pattern.webp")',
            backgroundRepeat: "repeat"
        },
        children: he.jsx(_w, {})
    });
Ls.createRoot(document.getElementById("root")).render(he.jsx(rt.StrictMode, {
    children: he.jsx(Nw, {})
}));