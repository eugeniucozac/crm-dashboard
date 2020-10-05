;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [10],
  {
    165: function (e, t, a) {
      "use strict"
      var n,
        r,
        l,
        i = a(300),
        c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
      function o() {
        l = !1
      }
      function u(e) {
        if (e) {
          if (e !== n) {
            if (e.length !== c.length)
              throw new Error(
                "Custom alphabet for shortid must be " +
                  c.length +
                  " unique characters. You submitted " +
                  e.length +
                  " characters: " +
                  e
              )
            var t = e.split("").filter(function (e, t, a) {
              return t !== a.lastIndexOf(e)
            })
            if (t.length)
              throw new Error(
                "Custom alphabet for shortid must be " +
                  c.length +
                  " unique characters. These characters were not unique: " +
                  t.join(", ")
              )
            ;(n = e), o()
          }
        } else n !== c && ((n = c), o())
      }
      function s() {
        return (
          l ||
          (l = (function () {
            n || u(c)
            for (var e, t = n.split(""), a = [], r = i.nextValue(); t.length > 0; )
              (r = i.nextValue()), (e = Math.floor(r * t.length)), a.push(t.splice(e, 1)[0])
            return a.join("")
          })())
        )
      }
      e.exports = {
        get: function () {
          return n || c
        },
        characters: function (e) {
          return u(e), n
        },
        seed: function (e) {
          i.seed(e), r !== e && (o(), (r = e))
        },
        lookup: function (e) {
          return s()[e]
        },
        shuffled: s,
      }
    },
    298: function (e, t, a) {
      "use strict"
      e.exports = a(299)
    },
    299: function (e, t, a) {
      "use strict"
      var n = a(165),
        r = a(301),
        l = a(305),
        i = a(306) || 0
      function c() {
        return r(i)
      }
      ;(e.exports = c),
        (e.exports.generate = c),
        (e.exports.seed = function (t) {
          return n.seed(t), e.exports
        }),
        (e.exports.worker = function (t) {
          return (i = t), e.exports
        }),
        (e.exports.characters = function (e) {
          return void 0 !== e && n.characters(e), n.shuffled()
        }),
        (e.exports.isValid = l)
    },
    300: function (e, t, a) {
      "use strict"
      var n = 1
      e.exports = {
        nextValue: function () {
          return (n = (9301 * n + 49297) % 233280) / 233280
        },
        seed: function (e) {
          n = e
        },
      }
    },
    301: function (e, t, a) {
      "use strict"
      var n,
        r,
        l = a(302)
      a(165)
      e.exports = function (e) {
        var t = "",
          a = Math.floor(0.001 * (Date.now() - 1567752802062))
        return a === r ? n++ : ((n = 0), (r = a)), (t += l(7)), (t += l(e)), n > 0 && (t += l(n)), (t += l(a))
      }
    },
    302: function (e, t, a) {
      "use strict"
      var n = a(165),
        r = a(303),
        l = a(304)
      e.exports = function (e) {
        for (var t, a = 0, i = ""; !t; ) (i += l(r, n.get(), 1)), (t = e < Math.pow(16, a + 1)), a++
        return i
      }
    },
    303: function (e, t, a) {
      "use strict"
      var n,
        r = "object" === typeof window && (window.crypto || window.msCrypto)
      ;(n =
        r && r.getRandomValues
          ? function (e) {
              return r.getRandomValues(new Uint8Array(e))
            }
          : function (e) {
              for (var t = [], a = 0; a < e; a++) t.push(Math.floor(256 * Math.random()))
              return t
            }),
        (e.exports = n)
    },
    304: function (e, t) {
      e.exports = function (e, t, a) {
        for (var n = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1, r = -~((1.6 * n * a) / t.length), l = ""; ; )
          for (var i = e(r), c = r; c--; ) if ((l += t[i[c] & n] || "").length === +a) return l
      }
    },
    305: function (e, t, a) {
      "use strict"
      var n = a(165)
      e.exports = function (e) {
        return (
          !(!e || "string" !== typeof e || e.length < 6) &&
          !new RegExp("[^" + n.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]").test(e)
        )
      }
    },
    306: function (e, t, a) {
      "use strict"
      e.exports = 0
    },
    337: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(14),
        r = a(15),
        l = a(17),
        i = a(16),
        c = a(0),
        o = a.n(c),
        u = a(66),
        s = a(44),
        m = a(126),
        d = a(129),
        b = a(13),
        h = a(30),
        p = a(137),
        f = a(22),
        g = a(138),
        E = a(3),
        v = a.n(E),
        D = a(4),
        w = a(20),
        C = a(130),
        y = a(21),
        N = a(164),
        k = a(50),
        O = a(51),
        j = a(52),
        x = function (e) {
          var t = e.name,
            a = e.label,
            n = e.onChange,
            r = e.error,
            l = e.value
          return N.a.length
            ? o.a.createElement(
                k.a,
                null,
                o.a.createElement(O.a, null, a),
                o.a.createElement(
                  j.a,
                  { as: "select", name: t, defaultValue: l, onChange: n, isInvalid: !!r },
                  o.a.createElement("option", null, "Choose Calibration"),
                  N.a.map(function (e) {
                    return o.a.createElement("option", { key: e.charAt(0), value: e.charAt(0) }, e)
                  })
                )
              )
            : null
        },
        S = a(2),
        M = a(298),
        Y = a.n(M),
        A = (function (e) {
          Object(l.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = { rows: Object(w.a)({}, Y.a.generate(), "") }),
              (e.onAdd = function () {
                var t = e.state.rows
                Object.keys(t).length < 3 &&
                  e.setState({ rows: Object(S.a)(Object(S.a)({}, t), {}, Object(w.a)({}, Y.a.generate(), "")) })
              }),
              (e.onRemove = function (t) {
                var a = Object(S.a)({}, e.state.rows),
                  n = e.props.onChange
                delete a[t], e.setState({ rows: a }), n(e.output(a))
              }),
              (e.onSelect = function (t) {
                t.persist()
                var a = e.props.onChange,
                  n = Object(S.a)(Object(S.a)({}, e.state.rows), {}, Object(w.a)({}, t.target.name, t.target.value))
                e.setState({ rows: n }), a(e.output(n))
              }),
              (e.output = function (e) {
                return Object.values(e).filter(function (e) {
                  return !!e
                })
              }),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.optionsData,
                    n = t.label,
                    r = t.error,
                    l = this.state.rows
                  if (!a || !a.length) return null
                  var i = a.map(function (e) {
                    return {
                      id: e.id,
                      name: ""
                        .concat(e.type.name, " ")
                        .concat(e.model.manufacture.name, " ")
                        .concat(e.model.name, " ")
                        .concat(e.serialNumber),
                    }
                  })
                  return (
                    i.sort(function (e, t) {
                      return e.name.localeCompare(t.name)
                    }),
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(O.a, null, n),
                      Object.keys(l).map(function (t, a) {
                        return o.a.createElement(
                          k.a,
                          { key: t },
                          r && o.a.createElement("div", { className: "invalid-feedback select" }, r),
                          o.a.createElement(
                            u.a,
                            { className: "hardware margin-label" },
                            o.a.createElement(
                              s.a,
                              { lg: 10 },
                              o.a.createElement(
                                j.a,
                                { as: "select", name: t, value: l[t], onChange: e.onSelect, isInvalid: !!r },
                                o.a.createElement("option", { value: "" }, "Select Hardware Name"),
                                i.map(function (e) {
                                  var t = e.id,
                                    a = e.name
                                  return o.a.createElement("option", { key: t, value: t }, a)
                                })
                              )
                            ),
                            o.a.createElement(
                              s.a,
                              { lg: 2 },
                              0 === a
                                ? o.a.createElement(
                                    m.a,
                                    { onClick: e.onAdd, className: "btn btn-success", name: "button" },
                                    o.a.createElement(h.m, null)
                                  )
                                : o.a.createElement(
                                    m.a,
                                    {
                                      onClick: function () {
                                        return e.onRemove(t)
                                      },
                                      className: "btn btn-danger",
                                      name: "button",
                                    },
                                    o.a.createElement(h.s, null)
                                  )
                            )
                          )
                        )
                      })
                    )
                  )
                },
              },
            ]),
            a
          )
        })(c.Component),
        K = (function (e) {
          Object(l.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = {
                calibrationCurDate: "",
                calibrationDueDate: "",
                name: "",
                calibrationNumber: "",
                hardwares: [],
              }),
              (e.onChange = function (t) {
                e.setState(Object(w.a)({}, t.target.name, t.target.value))
              }),
              (e.onHardwaresChange = function (t) {
                e.setState({ hardwares: t })
              }),
              (e.onSubmit = (function () {
                var t = Object(D.a)(
                  v.a.mark(function t(a) {
                    var n, r, l, i, c, o, u, s, m
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.state),
                              (r = n.calibrationCurDate),
                              (l = n.calibrationDueDate),
                              (i = n.name),
                              (c = n.calibrationNumber),
                              (o = n.hardwares),
                              (u = e.props.addKit),
                              (s = new Date(r)),
                              (m = new Date(s.setFullYear(s.getFullYear() + parseInt(l)))),
                              (t.next = 7),
                              u({
                                name: i,
                                calibrationNumber: c,
                                calibrationCurDate: r,
                                calibrationDueDate: ""
                                  .concat(m.getFullYear(), "-")
                                  .concat(m.getMonth() + 1, "-")
                                  .concat(m.getDate()),
                                isFaulty: !1,
                                hardwares: o,
                              })
                            )
                          case 7:
                            e.setState({
                              name: "",
                              calibrationNumber: "",
                              calibrationCurDate: "",
                              calibrationDueDate: !1,
                            })
                          case 8:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.name,
                    a = e.calibrationNumber,
                    n = e.calibrationCurDate,
                    r = e.calibrationDueDate,
                    l = this.props,
                    i = l.error,
                    c = l.hardwaresItems
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      o.a.createElement("h6", null, "Add kit")
                    ),
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      o.a.createElement(
                        C.a,
                        { noValidate: !0, onSubmit: this.onSubmit },
                        o.a.createElement(y.a, {
                          name: "name",
                          value: t,
                          label: "Name",
                          placeholder: "Ex: Kit",
                          onChange: this.onChange,
                          error: i && i.data.name,
                        }),
                        o.a.createElement(A, { label: "Hardwares", optionsData: c, onChange: this.onHardwaresChange }),
                        o.a.createElement(y.a, {
                          name: "calibrationNumber",
                          value: a,
                          label: "Calibration Number",
                          placeholder: "Ex: Calibration Number",
                          onChange: this.onChange,
                          error: i && i.data.calibrationNumber,
                        }),
                        o.a.createElement(y.a, {
                          name: "calibrationCurDate",
                          type: "date",
                          value: n,
                          label: "Current Calibation Date",
                          placeholder: "Ex: Date",
                          onChange: this.onChange,
                          error: i && i.data.calibrationCurDate,
                        }),
                        o.a.createElement(x, {
                          name: "calibrationDueDate",
                          label: "Next Calibration",
                          value: r,
                          placeholder: "Ex: Date",
                          onChange: this.onChange,
                          error: i && i.data.calibrationDueDate,
                        }),
                        o.a.createElement(
                          u.a,
                          null,
                          o.a.createElement(
                            s.a,
                            null,
                            o.a.createElement(
                              m.a,
                              { variant: "primary", type: "submit", className: "w-25 float-right" },
                              "Add"
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(c.Component),
        I = a(10),
        F = a(132),
        V = a(37),
        T = a.n(V),
        H = (function (e) {
          Object(l.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = {
                calibrationAlert: [],
                isFaulty: e.props.kitToEdit.isFaulty,
                calibrationNumber: e.props.kitToEdit.calibrationNumber,
                calibrationCurDate: T()(e.props.kitToEdit.calibrationCurDate).format("YYYY-MM-DD"),
                calibrationDueDate: e.props.kitToEdit.calibrationDueDate,
                selectedOption:
                  parseInt(T()(e.props.kitToEdit.calibrationDueDate).format("YYYY")) -
                  parseInt(T()(e.props.kitToEdit.calibrationCurDate).format("YYYY")),
              }),
              (e.onChange = function (t) {
                e.setState(Object(w.a)({}, t.target.name, t.target.value)),
                  "checkbox" === t.target.type &&
                    (t.target.checked ? e.setState({ isFaulty: !0 }) : e.setState({ isFaulty: !1 })),
                  "calibrationDueDate" === t.target.name && e.setState({ selectedOption: t.target.value })
              }),
              (e.onSubmit = (function () {
                var t = Object(D.a)(
                  v.a.mark(function t(a) {
                    var n, r, l, i, c, o, u, s, m, d, b, h, p, f, g
                    return v.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = new Date()),
                              (r = e.state),
                              (l = r.calibrationCurDate),
                              (i = r.calibrationNumber),
                              (c = r.isFaulty),
                              (o = r.calibrationAlert),
                              (u = r.selectedOption),
                              (s = e.props),
                              (m = s.kitToEdit.id),
                              (d = s.sendCalibrationNotification),
                              (b = s.updateKit),
                              (h = s.hideKit),
                              (p = T()(l, "YYYY-MM-DD").add(u, "years").format("YYYY-MM-DD")),
                              o.find(function (e) {
                                return e.id === m
                              }) && ((f = new Date(p) - n), (g = f / 864e5) < 14 && g > 0 && d()),
                              (t.next = 8),
                              b(m, { calibrationNumber: i, isFaulty: c, calibrationCurDate: l, calibrationDueDate: p })
                            )
                          case 8:
                            return (t.next = 10), h(null)
                          case 10:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = new Date()
                  this.props.kits.map(function (a) {
                    var n = (new Date(a.calibrationDueDate) - t) / 864e5
                    n < 14 &&
                      n > 0 &&
                      e.setState(function (e) {
                        return { calibrationAlert: [].concat(Object(I.a)(e.calibrationAlert), [a]) }
                      })
                  })
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.isFaulty,
                    a = e.calibrationNumber,
                    n = e.calibrationCurDate,
                    r = e.selectedOption,
                    l = this.props,
                    i = l.error,
                    c = l.hideKit
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      o.a.createElement("h6", null, "Edit kit")
                    ),
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      o.a.createElement(
                        C.a,
                        { noValidate: !0, onSubmit: this.onSubmit },
                        o.a.createElement(F.a, {
                          name: "isFaulty",
                          value: t,
                          label: "Item is is faulty",
                          onChange: this.onChange,
                        }),
                        o.a.createElement(y.a, {
                          name: "calibrationNumber",
                          value: a,
                          label: "Calibration Number",
                          placeholder: "Ex: 8932435654",
                          onChange: this.onChange,
                          error: i && i.data.calibrationNumber,
                        }),
                        o.a.createElement(y.a, {
                          name: "calibrationCurDate",
                          type: "date",
                          value: n,
                          label: "Current Calibation Date",
                          placeholder: "Ex: Date",
                          onChange: this.onChange,
                          error: i && i.data.calibrationCurDate,
                        }),
                        o.a.createElement(x, {
                          name: "calibrationDueDate",
                          label: "Next Calibration",
                          value: r,
                          placeholder: "Ex: Date",
                          onChange: this.onChange,
                          error: i && i.data.calibrationDueDate,
                        }),
                        o.a.createElement(
                          u.a,
                          null,
                          o.a.createElement(
                            s.a,
                            null,
                            o.a.createElement(m.a, { type: "submit", className: "w-25 float-right" }, "Update"),
                            o.a.createElement(
                              m.a,
                              {
                                className: "btn btn-primary w-25 mr-1 float-right",
                                onClick: function () {
                                  return c(null)
                                },
                              },
                              "Cancel"
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(c.Component),
        P = a(238),
        R = a(134),
        q = a(34),
        J = a(140),
        U = (function (e) {
          Object(l.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = {
                isModalOpen: null,
                currentDate: new Date(),
                inventoryData: null,
                kitId: null,
                currentPage: 1,
              }),
              (e.toggleModal = function (t) {
                e.setState({ isModalOpen: t })
              }),
              (e.addViewIssue = function (t, a) {
                e.setState({ inventoryData: { id: t, name: a } })
              }),
              (e.editKit = function (t) {
                var a = e.props.kits
                e.setState({
                  kitId: a.find(function (e) {
                    return e.id === t
                  }),
                })
              }),
              (e.pageSwitcher = function (t) {
                "next" === t
                  ? e.setState({ currentPage: e.state.currentPage + 1 })
                  : e.setState({ currentPage: e.state.currentPage - 1 })
              }),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getKits(), this.props.getHardwares()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.roleName,
                    n = t.error,
                    r = t.kits,
                    l = t.hardwares,
                    i = (t.addKit, t.updateKit),
                    c = t.loading,
                    b = t.removeKit,
                    f = this.state,
                    g = f.isModalOpen,
                    E = f.currentDate,
                    v = f.kitId,
                    D = f.inventoryData,
                    w = f.currentPage,
                    C = "",
                    y = "",
                    k = 10 * w,
                    O = k - 10,
                    j = []
                  j =
                    r.length &&
                    r
                      .sort(function (e, t) {
                        return new Date(t.createdAt) - new Date(e.createdAt)
                      })
                      .slice(O, k)
                  return c
                    ? o.a.createElement(q.a, null)
                    : j.length
                    ? o.a.createElement(
                        J.a,
                        null,
                        o.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            o.a.createElement("h6", null, "Hardware Kits")
                          ),
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            o.a.createElement(
                              d.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              o.a.createElement(
                                "thead",
                                null,
                                o.a.createElement(
                                  "tr",
                                  null,
                                  o.a.createElement("th", null, "Name"),
                                  o.a.createElement("th", null, "Hardware"),
                                  o.a.createElement("th", null, "Serial Number"),
                                  o.a.createElement("th", null, "Calibration Number"),
                                  o.a.createElement("th", null, "Current Cal Date"),
                                  o.a.createElement("th", null, "Current Due Date"),
                                  o.a.createElement("th", null, "Issues"),
                                  ("admin" === a || "technical-manager" === a) &&
                                    o.a.createElement(
                                      o.a.Fragment,
                                      null,
                                      o.a.createElement("th", null, "Edit"),
                                      o.a.createElement("th", null, "Delete?")
                                    )
                                )
                              ),
                              o.a.createElement(
                                "tbody",
                                null,
                                j.map(function (t) {
                                  var n = t.id,
                                    r = t.name,
                                    l = t.isFaulty,
                                    i = t.hardwares,
                                    c = t.calibrationNumber,
                                    u = t.calibrationCurDate,
                                    s = t.calibrationDueDate
                                  return o.a.createElement(
                                    "tr",
                                    { key: n, className: "".concat(l && "notavailable") },
                                    o.a.createElement("td", null, r),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      i.map(function (e) {
                                        var t = e.type,
                                          a = e.model
                                        return o.a.createElement(
                                          "p",
                                          null,
                                          t.name,
                                          " ",
                                          a.manufacture.name,
                                          " ",
                                          a.name
                                        )
                                      })
                                    ),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      i.map(function (e) {
                                        var t = e.serialNumber
                                        return o.a.createElement("p", null, " ", t)
                                      })
                                    ),
                                    o.a.createElement("td", null, c),
                                    o.a.createElement("td", null, u.substr(0, 10)),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      ((y = T.a.duration(new Date(s) - E, "milliseconds")),
                                      (C =
                                        E > new Date(s)
                                          ? "redAlert"
                                          : y.asDays() < 14 && y.asDays() > 0
                                          ? "yellowAlert"
                                          : null),
                                      o.a.createElement("a", { className: C }, s.substr(0, 10)))
                                    ),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      o.a.createElement(
                                        m.a,
                                        {
                                          id: n,
                                          variant: "primary",
                                          onClick: function () {
                                            return e.addViewIssue(n, r)
                                          },
                                        },
                                        "Add/View"
                                      )
                                    ),
                                    ("admin" === a || "technical-manager" === a) &&
                                      o.a.createElement(
                                        o.a.Fragment,
                                        null,
                                        o.a.createElement(
                                          "td",
                                          null,
                                          o.a.createElement(
                                            m.a,
                                            {
                                              id: n,
                                              variant: "primary",
                                              onClick: function () {
                                                return e.editKit(n)
                                              },
                                            },
                                            "Edit/Add Item"
                                          )
                                        ),
                                        o.a.createElement(
                                          "td",
                                          null,
                                          o.a.createElement(
                                            m.a,
                                            {
                                              id: n,
                                              variant: "primary",
                                              onClick: function () {
                                                return e.toggleModal(n)
                                              },
                                            },
                                            "Delete Item"
                                          ),
                                          o.a.createElement(R.a, {
                                            id: n,
                                            hideModal: e.toggleModal,
                                            isModalOpen: g,
                                            deleteState: function () {
                                              return b(n)
                                            },
                                          })
                                        )
                                      )
                                  )
                                })
                              )
                            ),
                            o.a.createElement(
                              u.a,
                              { className: "pagination" },
                              o.a.createElement(
                                s.a,
                                { lg: "9" },
                                o.a.createElement(
                                  "p",
                                  null,
                                  "Showing ",
                                  O + 1,
                                  "-",
                                  r.length > O && r.length < k ? r.length : k,
                                  " of",
                                  " ",
                                  r && r.length,
                                  " entries"
                                )
                              ),
                              o.a.createElement(
                                s.a,
                                null,
                                o.a.createElement(
                                  "div",
                                  { className: "arrows d-flex justify-content-end" },
                                  o.a.createElement(
                                    m.a,
                                    {
                                      onClick: function () {
                                        return e.pageSwitcher("prev")
                                      },
                                      disabled: 0 === O,
                                    },
                                    o.a.createElement(h.d, null)
                                  ),
                                  o.a.createElement(
                                    m.a,
                                    {
                                      onClick: function () {
                                        return e.pageSwitcher("next")
                                      },
                                      disabled: k >= r.length,
                                    },
                                    o.a.createElement(h.e, null)
                                  )
                                )
                              )
                            )
                          )
                        ),
                        o.a.createElement(
                          u.a,
                          null,
                          ("admin" === a || "technical-manager" === a) &&
                            o.a.createElement(
                              s.a,
                              { lg: "5" },
                              o.a.createElement(
                                "div",
                                { className: "ms-panel" },
                                v
                                  ? o.a.createElement(H, {
                                      kitToEdit: v,
                                      hideKit: this.editKit,
                                      updateKit: i,
                                      sendCalibrationNotification: p.s,
                                      kits: r,
                                      error: n,
                                    })
                                  : o.a.createElement(K, Object.assign({ hardwaresItems: l }, this.props))
                              )
                            ),
                          o.a.createElement(
                            s.a,
                            { lg: "7" },
                            D &&
                              o.a.createElement(P.a, {
                                inventory: D,
                                addViewIssue: this.addViewIssue,
                                category: N.b.find(function (e) {
                                  return "Kit" === e.name
                                }),
                              })
                          )
                        )
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(c.Component)
      t.default = Object(b.b)(
        function (e) {
          return {
            kits: Object(g.b)(e),
            hardwares: Object(g.a)(e),
            loading: Object(g.h)(e),
            error: Object(g.g)(e),
            roleName: Object(f.f)(e),
          }
        },
        {
          getKits: p.g,
          removeKit: p.l,
          addKit: p.b,
          getHardwares: p.f,
          updateKit: p.u,
          sendCalibrationNotification: p.s,
        }
      )(U)
    },
  },
])
//# sourceMappingURL=10.0715aef6.chunk.js.map
