! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Bmob = t() : e.Bmob = t()
}("undefined" != typeof self ? self : this, function() {
  return function(e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 17)
  }([function(e, t, n) {
    (function(t) {
      const r = n(5),
        o = t.Bmob || {};
      o.utils = r, o._config = r.getConfig(), o.initialize = ((e, t, n) => {
        o._config.applicationId = e, o._config.applicationKey = t, o._config.applicationMasterKey = n
      }), e.exports = o
    }).call(t, n(6))
  }, function(e, t, n) {
    "use strict";
    var r = n(11),
      o = n(25),
      s = Object.prototype.toString;

    function i(e) {
      return "[object Array]" === s.call(e)
    }

    function a(e) {
      return null !== e && "object" == typeof e
    }

    function c(e) {
      return "[object Function]" === s.call(e)
    }

    function u(e, t) {
      if (null !== e && void 0 !== e)
        if ("object" != typeof e && (e = [e]), i(e))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function(e) {
        return "[object ArrayBuffer]" === s.call(e)
      },
      isBuffer: o,
      isFormData: function(e) {
        return "undefined" != typeof FormData && e instanceof FormData
      },
      isArrayBufferView: function(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
      },
      isString: function(e) {
        return "string" == typeof e
      },
      isNumber: function(e) {
        return "number" == typeof e
      },
      isObject: a,
      isUndefined: function(e) {
        return void 0 === e
      },
      isDate: function(e) {
        return "[object Date]" === s.call(e)
      },
      isFile: function(e) {
        return "[object File]" === s.call(e)
      },
      isBlob: function(e) {
        return "[object Blob]" === s.call(e)
      },
      isFunction: c,
      isStream: function(e) {
        return a(e) && c(e.pipe)
      },
      isURLSearchParams: function(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
      },
      isStandardBrowserEnv: function() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
      },
      forEach: u,
      merge: function e() {
        var t = {};

        function n(n, r) {
          "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
        }
        for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
        return t
      },
      extend: function(e, t, n) {
        return u(t, function(t, o) {
          e[o] = n && "function" == typeof t ? r(t, n) : t
        }), e
      },
      trim: function(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
      }
    }
  }, function(e, t) {
    e.exports = {
      isObject: e => "[object Object]" === Object.prototype.toString.call(e),
      isNumber: e => "[object Number]" === Object.prototype.toString.call(e),
      isString: e => "[object String]" === Object.prototype.toString.call(e),
      isUndefined: e => "[object Undefined]" === Object.prototype.toString.call(e),
      isBoolean: e => "[object Boolean]" === Object.prototype.toString.call(e),
      isArray: e => "[object Array]" === Object.prototype.toString.call(e),
      isFunction: e => "[object Function]" === Object.prototype.toString.call(e)
    }
  }, function(e, t) {
    e.exports = class {
      constructor(e, t) {
        let n = new Error;
        return n.code = e, n.message = t ? `Bmob.Error:{code:${e}, message:${t}}` : `Bmob.Error:{code:${e}, message:${this.errorMsg(e)}}`, n
      }
      errorMsg(e) {
        switch (e) {
          case 415:
            return "incorrect parameter type.";
          case 416:
            return "Parameter is null.";
          case 417:
            return "There is no upload content.";
          case 418:
            return "Log in failure.";
          case 419:
            return "Bmob.GeoPoint location error.";
          default:
            return "unknown error"
        }
      }
    }
  }, function(e, t, n) {
    let r;
    const o = n(5).getAppType();
    "h5" === o ? r = n(10) : "wx" === o ? r = n(42) : "hap" === o ? r = n(43) : "nodejs" === o && (r = n(10)), e.exports = r
  }, function(e, t, n) {
    (function(t, r) {
      let o;
      try {
        o = n(18)
      } catch (e) {
        o = n(20)
      }
      const s = () => o;
      e.exports = {
        getConfig: s,
        getAppType: () => {
          const e = s();
          let n;
          return n = "undefined" != typeof wx ? "wx" : "undefined" != typeof window ? "h5" : 3 === e.type ? "hap" : t === r.process ? "nodejs" : "h5"
        }
      }
    }).call(t, n(7), n(6))
  }, function(e, t) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function(e, t) {
    var n, r, o = e.exports = {};

    function s() {
      throw new Error("setTimeout has not been defined")
    }

    function i() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function() {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s
      } catch (e) {
        n = s
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i
      } catch (e) {
        r = i
      }
    }();
    var c, u = [],
      l = !1,
      p = -1;

    function f() {
      l && c && (l = !1, c.length ? u = c.concat(u) : p = -1, u.length && h())
    }

    function h() {
      if (!l) {
        var e = a(f);
        l = !0;
        for (var t = u.length; t;) {
          for (c = u, u = []; ++p < t;) c && c[p].run();
          p = -1, t = u.length
        }
        c = null, l = !1,
          function(e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          }(e)
      }
    }

    function d(e, t) {
      this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new d(e, t)), 1 !== u.length || l || a(h)
    }, d.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
      return []
    }, o.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, o.cwd = function() {
      return "/"
    }, o.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, o.umask = function() {
      return 0
    }
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(1),
        o = n(27),
        s = {
          "Content-Type": "application/x-www-form-urlencoded"
        };

      function i(e, t) {
        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
      }
      var a, c = {
        adapter: ("undefined" != typeof XMLHttpRequest ? a = n(12) : void 0 !== t && (a = n(12)), a),
        transformRequest: [function(e, t) {
          return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
        }],
        transformResponse: [function(e) {
          if ("string" == typeof e) try {
            e = JSON.parse(e)
          } catch (e) {}
          return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function(e) {
          return e >= 200 && e < 300
        }
      };
      c.headers = {
        common: {
          Accept: "application/json, text/plain, */*"
        }
      }, r.forEach(["delete", "get", "head"], function(e) {
        c.headers[e] = {}
      }), r.forEach(["post", "put", "patch"], function(e) {
        c.headers[e] = r.merge(s)
      }), e.exports = c
    }).call(t, n(7))
  }, function(e, t, n) {
    let r = n(0);
    const o = n(4),
      {
        isObject: s,
        isString: i,
        isNumber: a,
        isUndefined: c,
        isArray: u
      } = n(2),
      l = n(3),
      p = n(16);

    function f(e, t, n) {
      let r = {},
        o = {};
      o[t] = n, r[e] = o;
      let s = r;
      return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = {
        $and: [this.queryData, s]
      } : this.queryData.$and.push(s) : this.queryData = s, s
    }
    e.exports = class {
      constructor(e) {
        this.tableName = `${r._config.parameters.QUERY}/${e}`, this.className = e, this.init(), this.addArray = {}, this.setData = {}
      }
      init() {
        this.queryData = {}, this.location = {}, this.andData = {}, this.orData = {}, this.stat = {}, this.limitNum = 100, this.skipNum = 0, this.includes = "", this.queryReilation = {}, this.orders = null, this.keys = null
      }
      get(e) {
        if (!i(e)) throw new l(415);
        let t = {};
        const n = {},
          r = {},
          s = {},
          f = (e, t) => {
            if (!i(e) || !u(t)) throw new l(415);
            s[e] = {
              __op: "Add",
              objects: t
            }
          },
          h = (e, t) => {
            if (!i(e) || !u(t)) throw new l(415);
            s[e] = {
              __op: "AddUnique",
              objects: t
            }
          },
          d = (e, t) => {
            if (!i(e) || !u(t)) throw new l(415);
            s[e] = {
              __op: "Remove",
              objects: t
            }
          },
          m = (e, t = 1) => {
            if (!i(e) || !a(t)) throw new l(415);
            n[e] = {
              __op: "Increment",
              amount: t
            }
          },
          w = t => {
            if (!i(e)) throw new l(415);
            r[t] = {
              __op: "Delete"
            }
          },
          g = (e, n) => {
            if (!i(e) || c(n)) throw new l(415);
            const {
              filename: r,
              cdn: o,
              url: s
            } = n;
            c(r) || c(o) || c(s) ? t[e] = n : t[e] = {
              __type: "File",
              group: o,
              filename: r,
              url: s
            }
          },
          y = () => {
            const i = Object.assign(r, t, n, s);
            return "_User" === this.className ? new Promise((t, n) => {
              o(`${this.tableName}/${e}`, "put", i).then(e => {
                const n = this.current();
                let r = Object.assign(n, i);
                p.save("bmob", r), t(e)
              }).catch(e => {
                n(e)
              })
            }) : o(`${this.tableName}/${e}`, "put", i)
          },
          b = {};
        return "" !== this.includes && (b.include = this.includes), new Promise((t, n) => {
          o(`${this.tableName}/${e}`, "get", b).then(n => {
            Object.defineProperty(n, "set", {
              value: g
            }), Object.defineProperty(n, "unset", {
              value: w
            }), Object.defineProperty(n, "save", {
              value: y
            }), Object.defineProperty(n, "increment", {
              value: m
            }), Object.defineProperty(n, "add", {
              value: f
            }), Object.defineProperty(n, "remove", {
              value: d
            }), Object.defineProperty(n, "addUnique", {
              value: h
            }), Object.defineProperty(n, "destroy", {
              value: () => this.destroy(e)
            }), t(n)
          }).catch(e => {
            n(e)
          })
        })
      }
      destroy(e) {
        if (!i(e)) throw new l(415);
        return o(`${this.tableName}/${e}`, "delete")
      }
      set(e, t) {
        if (!i(e) || c(t)) throw new l(415);
        const {
          filename: n,
          cdn: r,
          url: o
        } = t;
        c(n) || c(r) || c(o) ? this.setData[e] = t : this.setData[e] = {
          __type: "File",
          group: r,
          filename: n,
          url: o
        }
      }
      add(e, t) {
        if (!i(e) || !u(t)) throw new l(415);
        this.addArray[e] = {
          __op: "Add",
          objects: t
        }
      }
      addUnique(e, t) {
        if (!i(e) || !u(t)) throw new l(415);
        this.addArray[e] = {
          __op: "AddUnique",
          objects: t
        }
      }
      current() {
        if ("hap" !== r.type) {
          const e = p.fetch("bmob");
          return "object" == typeof e ? e : JSON.parse(e)
        }
        return new Promise((e, t) => p.fetch("bmob").then(t => {
          e(t)
        }).catch(e => {
          t(e)
        }))
      }
      updateStorage(e) {
        if (!i(e)) throw new l(415);
        return new Promise((t, n) => {
          const r = this.current();
          if (!r) throw new l(415);
          this.get(e).then(e => {
            let n = Object.assign(r, e);
            p.save("bmob", n), t(e)
          }).catch(e => {
            console.log(e), n(e)
          })
        })
      }
      save(e = {}) {
        if (!s(e)) throw new l(415);
        let t = this.setData.id ? "PUT" : "POST",
          n = this.setData.id ? this.setData.id : "";
        delete this.setData.id;
        let r = Object.assign(e, this.setData, this.addArray);
        return new Promise((e, s) => {
          o(`${this.tableName}/${n}`, t, r).then(t => {
            if (this.addArray = {}, this.setData = {}, "_User" === this.className) {
              const e = this.current();
              let t = Object.assign(e, r);
              p.save("bmob", t)
            }
            e(t)
          }).catch(e => {
            s(e)
          })
        })
      }
      saveAll(e) {
        if (!u(e)) throw new l(415);
        if (e.length < 1) throw new l(416);
        let t, n, s = "put",
          i = [];
        e.map(e => ("/undefined" === (t = `/${e.objectId}`) && (t = "", s = "post"), n = {
          method: s,
          path: `${this.tableName}${t}`,
          body: e.setData
        }, i.push(n), e));
        let a = {
            requests: i
          },
          c = r._config.parameters.BATCH;
        return o(c, "POST", a)
      }
      withinKilometers(e, {
        latitude: t,
        longitude: n
      }, r = 100) {
        let o = {};
        return o[e] = {
          $nearSphere: {
            __type: "GeoPoint",
            latitude: t,
            longitude: n
          },
          $maxDistanceInKilometers: r
        }, this.location = o, o
      }
      withinGeoBox(e, {
        latitude: t,
        longitude: n
      }, r) {
        let o = {};
        return o[e] = {
          $within: {
            $box: [{
              __type: "GeoPoint",
              latitude: t,
              longitude: n
            }, {
              __type: "GeoPoint",
              latitude: r.latitude,
              longitude: r.longitude
            }]
          }
        }, this.location = o, o
      }
      statTo(e, t) {
        if (!i(e)) throw new l(415);
        return this.stat[e] = t, this.stat
      }
      equalTo(e, t, n) {
        if (!i(e)) throw new l(415);
        const r = ((e, t, n) => {
          let r = {},
            o = null;
          switch (o = "createdAt" === e || "updateAt" === e ? {
            __type: "Date",
            iso: n
          } : n, t) {
            case "==":
            case "===":
              r[e] = o;
              break;
            case "!=":
              r[e] = {
                $ne: o
              };
              break;
            case "<":
              r[e] = {
                $lt: o
              };
              break;
            case "<=":
              r[e] = {
                $lte: o
              };
              break;
            case ">":
              r[e] = {
                $gt: o
              };
              break;
            case ">=":
              r[e] = {
                $gte: o
              };
              break;
            default:
              throw new l(415)
          }
          return r
        })(e, t, n);
        return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = {
          $and: [this.queryData, r]
        } : this.queryData.$and.push(r) : this.queryData = r, r
      }
      containedIn(e, t) {
        if (!i(e) || !u(t)) throw new l(415);
        return f.call(this, e, "$in", t)
      }
      notContainedIn(e, t) {
        if (!i(e) || !u(t)) throw new l(415);
        return f.call(this, e, "$nin", t)
      }
      exists(e) {
        if (!i(e)) throw new l(415);
        return f.call(this, e, "$exists", !0)
      }
      doesNotExist(e) {
        if (!i(e)) throw new l(415);
        return f.call(this, e, "$exists", !1)
      }
      or(...e) {
        e.map((e, t) => {
          if (!s(e)) throw new l(415)
        });
        const t = this.queryData.$and;
        if (console.log(t.length), !c(t)) {
          for (let n = 0; n < t.length; n++)
            for (let r = 0; r < e.length; r++) JSON.stringify(t[n]) === JSON.stringify(e[r]) && this.queryData.$and.splice(n, 1);
          t.length || delete this.queryData.$and
        }
        this.orData = {
          $or: e
        }
      }
      and(...e) {
        e.map((e, t) => {
          if (!s(e)) throw new l(415)
        }), this.andData = {
          $and: e
        }
      }
      limit(e) {
        if (!a(e)) throw new l(415);
        e > 1e3 && (e = 1e3), this.limitNum = e
      }
      skip(e) {
        if (!a(e)) throw new l(415);
        this.skipNum = e
      }
      order(...e) {
        e.map(e => {
          if (!i(e)) throw new l(415)
        }), this.orders = e.join(",")
      }
      include(...e) {
        e.map(e => {
          if (!i(e)) throw new l(415)
        }), this.includes = e.join(",")
      }
      select(...e) {
        e.map(e => {
          if (!i(e)) throw new l(415)
        }), this.keys = e.join(",")
      }
      field(e, t) {
        if (!i(e) || !i(t)) throw new l(415);
        this.queryReilation.where = {
          $relatedTo: {
            object: {
              __type: "Pointer",
              className: this.className,
              objectId: t
            },
            key: e
          }
        }
      }
      relation(e) {
        if (!i(e)) throw new l(415);
        return "_User" === e && (e = "users"), new Promise((t, n) => {
          o(`/1/${e}`, "get", this.queryReilation).then(({
            results: e
          }) => {
            t(e)
          }).catch(e => {
            n(e)
          })
        })
      }
      find() {
        let e = {},
          t = {},
          n = {};
        Object.keys(this.queryData).length && (t.where = this.queryData), Object.keys(this.location).length && (t.where = Object.assign(this.location, this.queryData)), Object.keys(this.andData).length && (t.where = Object.assign(this.andData, this.queryData)), Object.keys(this.orData).length && (t.where = Object.assign(this.orData, this.queryData)), t.limit = this.limitNum, t.skip = this.skipNum, t.include = this.includes, t.order = this.orders, t.keys = this.keys, Object.keys(this.stat).length && (t = this.stat);
        for (const e in t)(t.hasOwnProperty(e) && null === t[e] || 0 === t[e] || "" === t[e]) && delete t[e];
        const s = (t, n) => {
            if (!t || c(n)) throw new l(415);
            e[t] = n
          },
          i = (t = "updata") => {
            if (console.log(t), n.length < 1) throw new l(416);
            let s, i, a = "put",
              c = [];
            n.map(n => ("/undefined" === (s = `/${n.objectId}`) && (s = "", a = "post"), i = {
              method: a,
              path: `${this.tableName}${s}`,
              body: e
            }, "delete" === t && (i = {
              method: "DELETE",
              path: `${this.tableName}${s}`
            }), c.push(i), n));
            let u = {
                requests: c
              },
              p = r._config.parameters.BATCH;
            return o(p, "POST", u)
          };
        return new Promise((e, r) => {
          o(`${this.tableName}`, "get", t).then(({
            results: t
          }) => {
            this.init(), Object.defineProperty(t, "set", {
              value: s
            }), Object.defineProperty(t, "saveAll", {
              value: () => i()
            }), Object.defineProperty(t, "destroyAll", {
              value: () => i("delete")
            }), n = t, e(t)
          }).catch(e => {
            r(e)
          })
        })
      }
      count() {
        const e = {};
        return Object.keys(this.queryData).length && (e.where = this.queryData), Object.keys(this.andData).length && (e.where = Object.assign(this.andData, this.queryData)), Object.keys(this.orData).length && (e.where = Object.assign(this.orData, this.queryData)), e.count = 1, new Promise((t, n) => {
          o(`${this.tableName}`, "get", e).then(({
            count: e
          }) => {
            t(e)
          }).catch(e => {
            n(e)
          })
        })
      }
    }
  }, function(e, t, n) {
    const r = n(23);
    let o = n(0);
    e.exports = ((e, t = "get", s = {}) => new Promise((i, a) => {
      void 0 === o.User && (o = n(0));
      const c = (e => {
        let t = {
          "content-type": "application/json",
          "X-Bmob-SDK-Type": "wechatApp",
          "X-Bmob-Application-Id": e.applicationId,
          "X-Bmob-REST-API-Key": e.applicationKey
        };
        return e.applicationMasterKey && (t["X-Bmob-Master-Key"] = e.applicationMasterKey), t
      })(o._config);
      var u = o.User.current();
      u && (c["X-Bmob-Session-Token"] = u.sessionToken);
      const l = r.create({
          baseURL: o._config.host,
          headers: c,
          validateStatus: e => e < 500
        }),
        p = {
          url: e,
          method: t
        };
      "get" === p.method ? p.params = s : p.data = s, l(p).then(({
        data: e
      }) => {
        (e.code || e.error) && a(e), i(e)
      }).catch(e => {
        a(e)
      })
    }))
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
      return function() {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
        return e.apply(t, n)
      }
    }
  }, function(e, t, n) {
    "use strict";
    (function(t) {
      var r = n(1),
        o = n(28),
        s = n(30),
        i = n(31),
        a = n(32),
        c = n(13),
        u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(33);
      e.exports = function(e) {
        return new Promise(function(l, p) {
          var f = e.data,
            h = e.headers;
          r.isFormData(f) && delete h["Content-Type"];
          var d = new XMLHttpRequest,
            m = "onreadystatechange",
            w = !1;
          if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest, m = "onload", w = !0, d.onprogress = function() {}, d.ontimeout = function() {}), e.auth) {
            var g = e.auth.username || "",
              y = e.auth.password || "";
            h.Authorization = "Basic " + u(g + ":" + y)
          }
          if (d.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[m] = function() {
              if (d && (4 === d.readyState || w) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                var t = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                  n = {
                    data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                    status: 1223 === d.status ? 204 : d.status,
                    statusText: 1223 === d.status ? "No Content" : d.statusText,
                    headers: t,
                    config: e,
                    request: d
                  };
                o(l, p, n), d = null
              }
            }, d.onerror = function() {
              p(c("Network Error", e, null, d)), d = null
            }, d.ontimeout = function() {
              p(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
            }, r.isStandardBrowserEnv()) {
            var b = n(34),
              S = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
            S && (h[e.xsrfHeaderName] = S)
          }
          if ("setRequestHeader" in d && r.forEach(h, function(e, t) {
              void 0 === f && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e)
            }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
            d.responseType = e.responseType
          } catch (t) {
            if ("json" !== e.responseType) throw t
          }
          "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
            d && (d.abort(), p(e), d = null)
          }), void 0 === f && (f = null), d.send(f)
        })
      }
    }).call(t, n(7))
  }, function(e, t, n) {
    "use strict";
    var r = n(29);
    e.exports = function(e, t, n, o, s) {
      var i = new Error(e);
      return r(i, t, n, o, s)
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      return !(!e || !e.__CANCEL__)
    }
  }, function(e, t, n) {
    "use strict";

    function r(e) {
      this.message = e
    }
    r.prototype.toString = function() {
      return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
  }, function(e, t, n) {
    let r;
    const o = n(5).getAppType();
    "h5" === o ? r = n(44) : "wx" === o ? r = n(45) : "hap" === o ? r = n(46) : "nodejs" === o && (r = n(47)), e.exports = r
  }, function(e, t, n) {
    (function(t) {
      const r = n(0),
        o = n(21),
        s = n(22),
        i = n(9),
        a = n(48),
        c = n(49),
        u = n(50),
        l = n(51),
        {
          generateCode: p,
          sendMessage: f,
          getAccessToken: h,
          sendWeAppMessage: d,
          refund: m,
          notifyMsg: w,
          functions: g,
          timestamp: y,
          requestPasswordReset: b,
          resetPasswordBySmsCode: S,
          updateUserPassword: E,
          geoPoint: v,
          checkMsg: T,
          push: _
        } = n(52),
        {
          requestSmsCode: x,
          verifySmsCode: j
        } = n(53);
      r.GeoPoint = v, r.generateCode = p, r.sendMessage = f, r.getAccessToken = h, r.sendWeAppMessage = d, r.refund = m, r.checkMsg = T, r.notifyMsg = w, r.requestSmsCode = x, r.verifySmsCode = j, r.functions = g, r.timestamp = y, r.requestPasswordReset = b, r.resetPasswordBySmsCode = S, r.updateUserPassword = E, r.push = _, r.Pay = new u, r.User = new a, r.Socket = l, r.Query = (e => new i(e)), r.File = ((e, t) => new c(e, t)), r.request = n(4), r.type = r.utils.getAppType(), r.Pointer = (e => new o(e)), r.Relation = (e => new s(e)), "wx" === r.type ? wx.Bmob = r : "h5" === r.type ? window.Bmob = r : "hap" === r.type ? t.Bmob = r : "nodejs" === r.type && (t.Bmob = r), e.exports = r
    }).call(t, n(6))
  }, function(e, t, n) {
    const r = `v${n(19).version}`;
    e.exports = {
      host: "https://api.bmobcloud.com",
      applicationId: "",
      applicationKey: "",
      applicationMasterKey: "",
      parameters: {
        GENERATECODE: "/1/wechatApp/qr/generatecode",
        GETACCESSTOKEN: "/1/wechatApp/getAccessToken",
        SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage",
        NOTIFYMSG: "/1/wechatApp/notifyMsg",
        REFUND: "/1/pay/refund",
        REQUESTSMSCODE: "/1/requestSmsCode",
        VERIFYSMSCODE: "/1/verifySmsCode",
        FUNCTIONS: "/1/functions",
        REQUESTPASSWORDRESET: "/1/requestPasswordReset",
        RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode",
        UPDATEUSERPASSWORD: "/1/updateUserPassword",
        PUSH: "/1/push",
        FILES: "/2/files",
        DELFILES: "/2/cdnBatchDelete",
        TIMESTAMP: "/1/timestamp",
        LOGIN: "/1/login",
        REGISTER: "/1/users",
        REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify",
        USERS: "/1/users",
        PAY: "/1/pay",
        WECHAT_APP: "/1/wechatApp/",
        BATCH: "/1/batch",
        CHECK_MSG: "/1/wechatApp/checkMsg",
        QUERY: "/1/classes"
      },
      version: r,
      type: 3
    }
  }, function(e, t) {
    e.exports = {
      name: "hydrogen-js-sdk",
      version: "1.6.0",
      description: "Bmob SDK",
      main: "./src/lib/app.js",
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
        build: "webpack --config config/prod.env.js",
        watch: "webpack --watch --config config/prod.env.js",
        dev: "webpack-dev-server --config config/dev.env.js"
      },
      repository: {
        type: "git",
        url: "git+https://github.com/bmob/hydrogen-js-sdk.git"
      },
      author: "Bmob",
      license: "ISC",
      bugs: {
        url: "https://github.com/bmob/hydrogen-js-sdk/issues"
      },
      homepage: "https://github.com/bmob/hydrogen-js-sdk#readme",
      dependencies: {
        axios: "^0.18.0",
        "node.extend": "^2.0.0",
        webpack: "^3.12.0"
      },
      devDependencies: {
        "clean-webpack-plugin": "^0.1.19",
        eslint: "^4.19.1",
        "eslint-config-standard": "^11.0.0",
        "eslint-friendly-formatter": "^4.0.1",
        "eslint-loader": "^2.0.0",
        "eslint-plugin-import": "^2.12.0",
        "eslint-plugin-node": "^6.0.1",
        "eslint-plugin-promise": "^3.7.0",
        "eslint-plugin-standard": "^3.1.0",
        "html-webpack-plugin": "^2.30.1",
        "uglifyjs-webpack-plugin": "^1.2.5",
        "webpack-dev-server": "^2.11.2"
      },
      directories: {
        doc: "docs"
      },
      keywords: ["Bmob"]
    }
  }, function(e, t) {
    e.exports = {
      host: "https://api.bmobcloud.com",
      applicationId: "",
      applicationKey: "",
      parameters: {
        GENERATECODE: "/1/wechatApp/qr/generatecode",
        GETACCESSTOKEN: "/1/wechatApp/getAccessToken",
        SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage",
        NOTIFYMSG: "/1/wechatApp/notifyMsg",
        REFUND: "/1/pay/refund",
        REQUESTSMSCODE: "/1/requestSmsCode",
        VERIFYSMSCODE: "/1/verifySmsCode",
        FUNCTIONS: "/1/functions",
        REQUESTPASSWORDRESET: "/1/requestPasswordReset",
        RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode",
        UPDATEUSERPASSWORD: "/1/updateUserPassword",
        PUSH: "/1/push",
        FILES: "/2/files",
        DELFILES: "/2/cdnBatchDelete",
        TIMESTAMP: "/1/timestamp",
        LOGIN: "/1/login",
        REGISTER: "/1/users",
        REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify",
        USERS: "/1/users",
        PAY: "/1/pay",
        WECHAT_APP: "/1/wechatApp/",
        BATCH: "/1/batch",
        CHECK_MSG: "/1/wechatApp/checkMsg",
        QUERY: "/1/classes"
      },
      version: 1,
      type: 1
    }
  }, function(e, t, n) {
    const {
      isString: r
    } = n(2), o = n(3);
    e.exports = class {
      constructor(e) {
        if (!r(e)) throw new o(415);
        this.tableName = e
      }
      set(e) {
        if (!r(e)) throw new o(415);
        return {
          __type: "Pointer",
          className: this.tableName,
          objectId: e
        }
      }
    }
  }, function(e, t, n) {
    const {
      isString: r,
      isArray: o
    } = n(2), s = n(3);

    function i(e, t) {
      if (r(e)) return {
        __op: t,
        objects: [{
          __type: "Pointer",
          className: this.tableName,
          objectId: e
        }]
      };
      if (o(e)) {
        const n = [];
        return e.map(e => {
          if (!r(e)) throw new s(415);
          n.push({
            __type: "Pointer",
            className: this.tableName,
            objectId: e
          })
        }), {
          __op: t,
          objects: n
        }
      }
      throw new s(415)
    }
    e.exports = class {
      constructor(e) {
        if (!r(e)) throw new s(415);
        this.tableName = e
      }
      add(e) {
        return i.call(this, e, "AddRelation")
      }
      remove(e) {
        return i.call(this, e, "RemoveRelation")
      }
    }
  }, function(e, t, n) {
    e.exports = n(24)
  }, function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n(11),
      s = n(26),
      i = n(8);

    function a(e) {
      var t = new s(e),
        n = o(s.prototype.request, t);
      return r.extend(n, s.prototype, t), r.extend(n, t), n
    }
    var c = a(i);
    c.Axios = s, c.create = function(e) {
      return a(r.merge(i, e))
    }, c.Cancel = n(15), c.CancelToken = n(40), c.isCancel = n(14), c.all = function(e) {
      return Promise.all(e)
    }, c.spread = n(41), e.exports = c, e.exports.default = c
  }, function(e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function(e) {
      return null != e && (n(e) || function(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
      }(e) || !!e._isBuffer)
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(8),
      o = n(1),
      s = n(35),
      i = n(36);

    function a(e) {
      this.defaults = e, this.interceptors = {
        request: new s,
        response: new s
      }
    }
    a.prototype.request = function(e) {
      "string" == typeof e && (e = o.merge({
        url: arguments[0]
      }, arguments[1])), (e = o.merge(r, {
        method: "get"
      }, this.defaults, e)).method = e.method.toLowerCase();
      var t = [i, void 0],
        n = Promise.resolve(e);
      for (this.interceptors.request.forEach(function(e) {
          t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function(e) {
          t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
      return n
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
      a.prototype[e] = function(t, n) {
        return this.request(o.merge(n || {}, {
          method: e,
          url: t
        }))
      }
    }), o.forEach(["post", "put", "patch"], function(e) {
      a.prototype[e] = function(t, n, r) {
        return this.request(o.merge(r || {}, {
          method: e,
          url: t,
          data: n
        }))
      }
    }), e.exports = a
  }, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t) {
      r.forEach(e, function(n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(13);
    e.exports = function(e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
      return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1);

    function o(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    e.exports = function(e, t, n) {
      if (!t) return e;
      var s;
      if (n) s = n(t);
      else if (r.isURLSearchParams(t)) s = t.toString();
      else {
        var i = [];
        r.forEach(t, function(e, t) {
          null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e))
          }))
        }), s = i.join("&")
      }
      return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1),
      o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function(e) {
      var t, n, s, i = {};
      return e ? (r.forEach(e.split("\n"), function(e) {
        if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
          if (i[t] && o.indexOf(t) >= 0) return;
          i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
        }
      }), i) : i
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
      var e, t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");

      function o(e) {
        var r = e;
        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
          href: n.href,
          protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
          host: n.host,
          search: n.search ? n.search.replace(/^\?/, "") : "",
          hash: n.hash ? n.hash.replace(/^#/, "") : "",
          hostname: n.hostname,
          port: n.port,
          pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
        }
      }
      return e = o(window.location.href),
        function(t) {
          var n = r.isString(t) ? o(t) : t;
          return n.protocol === e.protocol && n.host === e.host
        }
    }() : function() {
      return !0
    }
  }, function(e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function o() {
      this.message = "String contains an invalid character"
    }
    o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
      for (var t, n, s = String(e), i = "", a = 0, c = r; s.charAt(0 | a) || (c = "=", a % 1); i += c.charAt(63 & t >> 8 - a % 1 * 8)) {
        if ((n = s.charCodeAt(a += .75)) > 255) throw new o;
        t = t << 8 | n
      }
      return i
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? {
      write: function(e, t, n, o, s, i) {
        var a = [];
        a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ")
      },
      read: function(e) {
        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
      },
      remove: function(e) {
        this.write(e, "", Date.now() - 864e5)
      }
    } : {
      write: function() {},
      read: function() {
        return null
      },
      remove: function() {}
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1);

    function o() {
      this.handlers = []
    }
    o.prototype.use = function(e, t) {
      return this.handlers.push({
        fulfilled: e,
        rejected: t
      }), this.handlers.length - 1
    }, o.prototype.eject = function(e) {
      this.handlers[e] && (this.handlers[e] = null)
    }, o.prototype.forEach = function(e) {
      r.forEach(this.handlers, function(t) {
        null !== t && e(t)
      })
    }, e.exports = o
  }, function(e, t, n) {
    "use strict";
    var r = n(1),
      o = n(37),
      s = n(14),
      i = n(8),
      a = n(38),
      c = n(39);

    function u(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function(e) {
      return u(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
        delete e.headers[t]
      }), (e.adapter || i.adapter)(e).then(function(t) {
        return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
      }, function(t) {
        return s(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
      })
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t, n) {
      return r.forEach(n, function(n) {
        e = n(e, t)
      }), e
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
  }, function(e, t, n) {
    "use strict";
    var r = n(15);

    function o(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function(e) {
        t = e
      });
      var n = this;
      e(function(e) {
        n.reason || (n.reason = new r(e), t(n.reason))
      })
    }
    o.prototype.throwIfRequested = function() {
      if (this.reason) throw this.reason
    }, o.source = function() {
      var e;
      return {
        token: new o(function(t) {
          e = t
        }),
        cancel: e
      }
    }, e.exports = o
  }, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      return function(t) {
        return e.apply(null, t)
      }
    }
  }, function(e, t, n) {
    let r = n(0);
    e.exports = ((e, t = "get", o = {}) => new Promise((s, i) => {
      const a = (e => {
        let t = {
          "content-type": "application/json",
          "X-Bmob-SDK-Type": "wechatApp",
          "X-Bmob-Application-Id": e.applicationId,
          "X-Bmob-REST-API-Key": e.applicationKey
        };
        return e.applicationMasterKey && (t["X-Bmob-Master-Key"] = e.applicationMasterKey), t
      })(r._config);
      void 0 === r.User && (r = n(0));
      var c = r.User.current();
      c && (a["X-Bmob-Session-Token"] = c.sessionToken), wx.request({
        url: r._config.host + e,
        method: t,
        data: o,
        header: a,
        success: e => {
          (e.data.code || e.data.error) && i(e.data), s(e.data)
        },
        fail: e => {
          console.log(e), i(e)
        }
      })
    }))
  }, function(e, t, n) {
    let r = n(0);
    e.exports = ((e, t = "get", o = {}) => new Promise((s, i) => {
      const a = (e => {
        let t = {
          "content-type": "application/json",
          "X-Bmob-SDK-Type": "wechatApp",
          "X-Bmob-Application-Id": e.applicationId,
          "X-Bmob-REST-API-Key": e.applicationKey
        };
        return e.applicationMasterKey && (t["X-Bmob-Master-Key"] = e.applicationMasterKey), t
      })(r._config);
      void 0 === r.User && (r = n(0));
      var c = r.User.current();
      c && (a["X-Bmob-Session-Token"] = c.sessionToken), "xxrequire('@system.fetch')xx".fetch({
        url: r._config.host + e,
        header: a,
        method: t,
        data: o,
        success: function(e) {
          const t = JSON.parse(e.data);
          t.code && i(t), s(t)
        },
        fail: function(e, t) {
          console.log(`handling fail, code = ${t}`), i(e)
        }
      })
    }))
  }, function(e, t, n) {
    const {
      isString: r
    } = n(2);
    let o;
    o = "undefined" != typeof cc ? cc.sys.localStorage : localStorage, console.log(o);
    const s = {
      save(e, t) {
        if (!r(e) || !t) throw new Error(415);
        o.setItem(e, JSON.stringify(t))
      },
      fetch(e) {
        if (!r(e)) throw new Error(415);
        return JSON.parse(o.getItem(e)) || null
      },
      remove(e) {
        if (!r(e)) throw new Error(415);
        o.removeItem(e)
      },
      clear() {
        o.clear()
      }
    };
    e.exports = s
  }, function(e, t, n) {
    const {
      isString: r,
      isObject: o
    } = n(2), s = {
      save(e, t) {
        if (!r(e) || !t) throw new Error(415);
        return t = o(t) ? JSON.stringify(t) : t, wx.setStorageSync(e, t)
      },
      fetch(e) {
        if (!r(e)) throw new Error(415);
        return wx.getStorageSync(e) || null
      },
      remove(e) {
        if (!r(e)) throw new Error(415);
        return wx.removeStorageSync(e)
      },
      clear: () => wx.clearStorageSync()
    };
    e.exports = s
  }, function(e, t, n) {
    const {
      isString: r
    } = n(2), o = "xxrequire('@system.storage')xx", s = {
      save(e, t) {
        if (!r(e) || !t) throw new Error(415);
        o.set({
          key: e,
          value: JSON.stringify(t),
          success: function(e) {
            return console.log("handling success"), e
          },
          fail: function(e, t) {
            console.log(`handling fail, code = ${t}`)
          }
        })
      },
      fetch(e) {
        if (!r(e)) throw new Error(415);
        return new Promise((t, n) => o.get({
          key: e,
          success: function(e) {
            t(e || null)
          },
          fail: function(e, t) {
            console.log(`handling fail, code = ${t}`), n(e)
          }
        }))
      },
      remove(e) {
        if (!r(e)) throw new Error(415);
        o.delete({
          key: e,
          success: function(e) {
            console.log("handling success")
          },
          fail: function(e, t) {
            console.log(`handling fail, code = ${t}`)
          }
        })
      },
      clear() {
        o.clear({
          success: function(e) {
            console.log("handling success")
          },
          fail: function(e, t) {
            console.log(`handling fail, code = ${t}`)
          }
        })
      }
    };
    e.exports = s
  }, function(e, t) {
    const n = {
      save(e, t) {},
      fetch: e => null,
      remove(e) {},
      clear() {}
    };
    e.exports = n
  }, function(e, t, n) {
    const r = n(4),
      o = n(16),
      s = n(9),
      i = n(0),
      a = n(3),
      {
        isObject: c,
        isString: u,
        isNumber: l
      } = n(2);
    e.exports = class extends s {
      constructor() {
        super("_User")
      }
      set(e, t = "") {
        u(e) && (this.setData[e] = t)
      }
      requestEmailVerify(e) {
        if (!u(e)) throw new a(415);
        this.setData = Object.assign({}, {
          email: e
        }), console.log(this.setData);
        let t = i._config.parameters.REQUEST_EMAIL_VERIFY;
        return r(t, "post", this.setData)
      }
      register(e) {
        if (!c(e)) throw new a(415);
        this.setData = Object.assign(this.setData, e), console.log(this.setData);
        let t = i._config.parameters.REGISTER;
        return r(t, "post", this.setData)
      }
      login(e, t) {
        if (!u(e) || !u(t)) throw new a(415);
        this.setData = Object.assign({}, {
          username: e,
          password: t
        });
        let n = i._config.parameters.LOGIN;
        return new Promise((e, t) => {
          r(n, "get", this.setData).then(t => {
            o.save("bmob", t), e(t)
          }).catch(e => {
            console.log("登陆失败"), t(e)
          })
        })
      }
      users() {
        let e = i._config.parameters.USERS;
        return r(e, "get")
      }
      signOrLoginByMobilePhone(e, t) {
        if (!l(e) || !l(t)) throw new a(415);
        this.setData = Object.assign({}, {
          mobilePhoneNumber: e,
          smsCode: t
        });
        let n = i._config.parameters.LOGIN;
        return r(n, "get", this.setData)
      }
      requestOpenId(e) {
        let t = i._config.parameters.WECHAT_APP;
        return r(t + e, "POST", {})
      }
      linkWith(e) {
        let t = {
            authData: e
          },
          n = i._config.parameters.USERS;
        return r(n, "POST", t)
      }
      loginWithWeapp(e) {
        return new Promise((t, n) => {
          this.requestOpenId(e).then(e => {
            const n = {
                weapp: e
              },
              r = this.linkWith(n);
            t(r)
          }).catch(e => {
            n(e)
          })
        })
      }
      upInfo(e) {
        return new Promise((t, n) => {
          var r = e.nickName,
            s = e.avatarUrl,
            i = this.current();
          if (!i) throw new a(415);
          var c = o.fetch("openid");
          this.get(i.objectId).then(e => {
            e.set("nickName", r), e.set("userPic", s), e.set("openid", c), e.save().then(e => {
              t(e)
            }).catch(e => {
              console.log(e), n(e)
            })
          }).catch(e => {
            console.log(e), n(e)
          })
        })
      }
      auth() {
        var e = this;
        return new Promise((t, n) => {
          const r = () => {
            wx.login({
              success: r => {
                e.loginWithWeapp(r.code).then(e => {
                  if (e.error) throw new a(415);
                  var n = e.authData.weapp.openid;
                  o.save("openid", n), o.save("bmob", e), t(e)
                }, function(e) {
                  n(e)
                })
              }
            })
          };
          wx.checkSession({
            success: function() {
              let o = e.current();
              null === o && n("登陆错误，请在Bmob后台填写小程序AppSecret。"), t(o), r()
            },
            fail: () => {
              r()
            }
          })
        })
      }
    }
  }, function(e, t, n) {
    const r = n(4);
    let o = n(0);
    const s = n(3),
      i = n(5),
      a = "xxrequire('@system.request')xx",
      {
        isString: c,
        isArray: u
      } = n(2);
    let l = [];
    e.exports = class {
      constructor(e, t) {
        if (e && t) {
          if (!c(e)) throw new s(415);
          l.push({
            name: e,
            route: `${o._config.parameters.FILES}/${e}`,
            data: t
          })
        }
      }
      save() {
        if (!l.length) throw new s(417);
        let e;
        const t = i.getAppType();
        return "h5" === t || "nodejs" === t ? e = new Promise((e, t) => {
          const n = [];
          for (let o of l) r(o.route, "post", o.data).then(r => {
            n.push(r), n.length === l.length && (l = [], e(n), t(n))
          }).catch(e => {
            n.push(e)
          })
        }) : "wx" === t ? e = new Promise((e, t) => {
          void 0 === o.User && (o = n(0));
          let r = "bmob";
          var s = o.User.current();
          s && (r = s.sessionToken);
          const i = [],
            a = {
              _ApplicationId: o._config.applicationId,
              _RestKey: o._config.applicationKey,
              _SessionToken: r
            },
            c = Object.assign({
              _ContentType: "text/plain",
              mime_type: "text/plain",
              category: "wechatApp",
              _ClientVersion: "js3.6.1",
              _InstallationId: "bmob"
            }, a);
          for (let n of l) wx.uploadFile({
            url: o._config.host + n.route,
            filePath: n.data,
            name: "file",
            header: {
              "X-Bmob-SDK-Type": "wechatApp"
            },
            formData: c,
            success: function(n) {
              var r = n.data;
              i.push(r), i.length === l.length && (l = [], e(i), t(i))
            },
            fail: function(e) {
              i.push(e)
            }
          })
        }) : "hap" === t && (e = new Promise((e, t) => {
          void 0 === o.User && (o = n(0));
          var r = o.User.current();
          const s = [],
            i = {
              _ApplicationId: o._config.applicationId,
              _RestKey: o._config.applicationKey,
              _SessionToken: r.sessionToken
            },
            c = Object.assign({
              _ContentType: "text/plain",
              mime_type: "text/plain",
              category: "wechatApp",
              _ClientVersion: "js3.6.1",
              _InstallationId: "bmob"
            }, i);
          for (let n of l) a.upload({
            url: o._config.host + n.route,
            files: [{
              uri: n.data,
              name: "file",
              filename: n.name
            }],
            header: {
              "X-Bmob-SDK-Type": "wechatApp"
            },
            data: c,
            success: function(n) {
              console.log("handling success" + s);
              var r = n.data;
              s.push(r), s.length === l.length && (l = [], e(s), t(s))
            },
            fail: function(e, t) {
              console.log(`handling fail, code = ${t}`)
            }
          })
        })), e
      }
      destroy(e) {
        if (c(e)) return r(`${o._config.parameters.FILES}/upyun/${e.split(".com/")[1]}`, "delete");
        if (u(e)) {
          const t = [];
          return e.map(e => {
            t.push(e.split(".com/")[1])
          }), r(o._config.parameters.DELFILES, "post", {
            upyun: t
          })
        }
        throw new s(415)
      }
    }
  }, function(e, t, n) {
    const r = n(4),
      o = n(0),
      s = n(3);
    e.exports = class {
      weApp(e, t, n) {
        var i = wx.getStorageSync("openid");
        if (!(e && t && n && i)) throw new s(416);
        var a = {
          order_price: e,
          product_name: t,
          body: n,
          open_id: i,
          pay_type: 4
        };
        let c = o._config.parameters.PAY;
        return r(c, "post", a)
      }
    }
  }, function(t, n, r) {
    const o = r(0),
      s = r(3),
      i = {
        setup(e) {
          let t = [];
          Object.assign(e, {
            on(e, n) {
              "function" == typeof n && t.push([e, n])
            },
            emit(e, ...n) {
              t.forEach(([t, r]) => e === t && r(...n))
            },
            removeAllListeners() {
              t = []
            }
          })
        }
      };
    t.exports = class {
      constructor() {
        if (!o._config.applicationId) throw new s(415);
        this.config = {
          host: "wss.bmobcloud.com"
        }, i.setup(this.emitter = {}), this.applicationId = o._config.applicationId, this.initialize()
      }
      handshake() {
        var t = "https://" + this.config.host + "/socket.io/1/?t=" + (new Date).getTime(),
          n = JSON.stringify({});
        return new Promise((r, o) => {
          wx.request({
            method: "GET",
            url: t,
            data: n,
            header: {
              "content-type": "text/plain"
            },
            success: function(t) {
              return t.data && t.data.statusCode ? r("request error", e) : 200 !== t.statusCode ? r("request error", e) : r(function(e) {
                if (!(e instanceof s)) return e.split(":")[0];
                self.connecting = !1, self.onError(e.message)
              }(t.data))
            },
            fail: function(e) {
              return r("request error", e)
            }
          })
        })
      }
      initialize() {
        return this.handshake().then(e => {
          try {
            this.connect(`wss://${this.config.host}/socket.io/1/websocket/` + e, {})
          } catch (e) {
            throw console.error({
              connectError: e
            }), e
          }
        }), this.on("close", () => {
          console.log("连接已中断")
        }), new Promise((e, t) => {
          this.on("server_pub", e => {
            switch (e.action) {
              case "updateTable":
                this.onUpdateTable(e.tableName, e.data);
                break;
              case "updateRow":
                this.onUpdateRow(e.tableName, e.objectId, e.data);
                break;
              case "deleteTable":
                this.onDeleteTable(e.tableName, e.data);
                break;
              case "deleteRow":
                this.onDeleteRow(e.tableName, e.objectId, e.data)
            }
          }), this.on("client_send_data", e => {
            this.onInitListen()
          })
        })
      }
      onInitListen() {}
      connect(e, t) {
        const n = Object.keys(t).map(e => `${e}=${encodeURIComponent(t[e])}`).join("&"),
          r = e.indexOf("?") > -1 ? "&" : "?";
        return e = [e, n].join(r), new Promise((n, r) => {
          wx.onSocketOpen(n), wx.onSocketError(r), wx.onSocketMessage(e => {
            try {
              let t = function(e) {
                  const {
                    name: t,
                    args: n
                  } = JSON.parse(e);
                  return {
                    name: t,
                    args: n
                  }
                },
                n = e.data;
              if ("2:::" === n.slice(0, 4) && this.emit(!1, !0), null === (n = n.slice(4)) || "" === n) return;
              const {
                name: r,
                args: o
              } = t(n);
              let s = null == o ? "" : JSON.parse(o[0]);
              this.emitter.emit(r, s)
            } catch (t) {
              console.log("Handle packet failed: " + e.data, t)
            }
          }), wx.onSocketClose(() => this.emitter.emit("close")), wx.connectSocket({
            url: e,
            header: t
          })
        })
      }
      on(e, t) {
        this.emitter.on(e, t)
      }
      emit(e, t) {
        t = void 0 === t ? "5:::" : "2:::", e = e ? JSON.stringify(e) : "", wx.sendSocketMessage({
          data: t + e
        })
      }
      emitData(e, t) {
        return {
          name: e,
          args: [t = JSON.stringify(t)]
        }
      }
      updateTable(e) {
        var t = {
          appKey: this.applicationId,
          tableName: e,
          objectId: "",
          action: "updateTable"
        };
        t = this.emitData("client_sub", t), this.emit(t)
      }
      unsubUpdateTable(e) {
        var t = {
          appKey: this.applicationId,
          tableName: e,
          objectId: "",
          action: "unsub_updateTable"
        };
        t = this.emitData("client_sub", t), this.emit(t)
      }
      updateRow(e, t) {
        var n = {
          appKey: this.applicationId,
          tableName: e,
          objectId: t,
          action: "updateRow"
        };
        n = this.emitData("client_sub", n), this.emit(n)
      }
      unsubUpdateRow(e, t) {
        var n = {
          appKey: this.applicationId,
          tableName: e,
          objectId: t,
          action: "unsub_updateRow"
        };
        n = this.emitData("client_sub", n), this.emit(n)
      }
      deleteTable(e) {
        var t = {
          appKey: this.applicationId,
          tableName: e,
          objectId: "",
          action: "deleteTable"
        };
        t = this.emitData("client_sub", t), this.emit(t)
      }
      unsubDeleteTable(e) {
        var t = {
          appKey: this.applicationId,
          tableName: e,
          objectId: "",
          action: "unsub_deleteTable"
        };
        t = this.emitData("client_sub", t), this.emit(t)
      }
      deleteRow(e, t) {
        var n = {
          appKey: this.applicationId,
          tableName: e,
          objectId: t,
          action: "deleteRow"
        };
        n = this.emitData("client_sub", n), this.emit(n)
      }
      unsubDeleteRow(e, t) {
        var n = {
          appKey: this.applicationId,
          tableName: e,
          objectId: t,
          action: "unsub_deleteRow"
        };
        n = this.emitData("client_sub", n), this.emit(n)
      }
      onUpdateTable(e, t) {}
      onUpdateRow(e, t, n) {}
      onDeleteTable(e, t) {}
      onDeleteRow(e, t, n) {}
    }
  }, function(e, t, n) {
    const r = n(4),
      o = n(0),
      s = n(3),
      {
        isObject: i,
        isString: a
      } = n(2);
    e.exports = {
      generateCode: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.GENERATECODE;
        return r(t, "post", e)
      },
      sendMessage: e => 1,
      getAccessToken: e => {
        let t = o._config.parameters.GETACCESSTOKEN;
        return r(t, "get")
      },
      sendWeAppMessage: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.SENDWEAPPMESSAGE;
        return r(t, "post", e)
      },
      refund: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.REFUND;
        return r(t, "post", e)
      },
      notifyMsg: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.NOTIFYMSG;
        return r(t, "post", e)
      },
      functions: (e, t) => {
        if (t || (t = {}), !a(e)) throw new s(415);
        let n = `${o._config.parameters.FUNCTIONS}/${e}`;
        return r(n, "post", t)
      },
      timestamp: () => {
        let e = o._config.parameters.TIMESTAMP;
        return r(e, "get")
      },
      requestPasswordReset: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.REQUESTPASSWORDRESET;
        return r(t, "post", e)
      },
      resetPasswordBySmsCode: (e, t) => {
        if (!a(e)) throw new s(415);
        let n = `${o._config.parameters.RESETPASSWORDBYSMSCODE}/${e}`;
        return r(n, "put", t)
      },
      updateUserPassword: (e, t) => {
        if (!i(t) || !a(e)) throw new s(415);
        let n = `${o._config.parameters.UPDATEUSERPASSWORD}/${e}`;
        return r(n, "put", t)
      },
      geoPoint: ({
        latitude: e,
        longitude: t
      }) => {
        return ((e, t) => {
          if (e < -90) throw new s(419);
          if (e > 90) throw new s(419);
          if (t < -180) throw new s(419);
          if (t > 180) throw new s(419)
        })(e, t), {
          __type: "GeoPoint",
          latitude: e,
          longitude: t
        }
      },
      checkMsg: e => {
        if (!a(e)) throw new s(415);
        let t = `${o._config.parameters.CHECK_MSG}`;
        return r(t, "post", {
          content: e
        })
      },
      push: e => {
        if (!i(e)) throw new s(415);
        let t = o._config.parameters.PUSH;
        return r(t, "post", e)
      }
    }
  }, function(e, t, n) {
    const r = n(4),
      o = n(0),
      s = n(3),
      {
        isObject: i,
        isString: a
      } = n(2);
    e.exports = {
      requestSmsCode: (e, t) => {
        if (!i(e)) throw new s(415);
        let n = o._config.parameters.REQUESTSMSCODE;
        return r(n, "post", e)
      },
      verifySmsCode: (e, t, n) => {
        if (!a(e)) throw new s(415);
        if (!i(t)) throw new s(415);
        let c = `${o._config.parameters.VERIFYSMSCODE}/${e}`;
        return r(c, "post", t)
      }
    }
  }])
});