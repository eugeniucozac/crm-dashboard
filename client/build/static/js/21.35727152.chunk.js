;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [21],
  {
    344: function (e, a, t) {
      "use strict"
      t.r(a)
      var n = t(14),
        r = t(15),
        l = t(17),
        c = t(16),
        u = t(0),
        o = t.n(u),
        m = t(129),
        s = t(126),
        i = t(66),
        d = t(44),
        p = t(13),
        f = t(137),
        h = t(138),
        v = t(3),
        E = t.n(v),
        b = t(4),
        g = t(20),
        M = t(130),
        y = t(21),
        j = (function (e) {
          Object(l.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++) l[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = { name: "" }),
              (e.onChange = function (a) {
                e.setState(Object(g.a)({}, a.target.name, a.target.value))
              }),
              (e.onSubmit = (function () {
                var a = Object(b.a)(
                  E.a.mark(function a(t) {
                    var n, r
                    return E.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = e.props.addManufacture),
                              (r = e.state.name),
                              (a.next = 5),
                              n({ name: r })
                            )
                          case 5:
                            e.setState({ name: "" })
                          case 6:
                          case "end":
                            return a.stop()
                        }
                    }, a)
                  })
                )
                return function (e) {
                  return a.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.resetManufactureErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.name,
                    a = this.props.error
                  return o.a.createElement(
                    M.a,
                    { noValidate: !0, onSubmit: this.onSubmit },
                    o.a.createElement(y.a, {
                      name: "name",
                      value: e,
                      label: "Name",
                      placeholder: "Ex: Preamp Svantek",
                      onChange: this.onChange,
                      error: a && a.data.name,
                    }),
                    o.a.createElement(
                      i.a,
                      null,
                      o.a.createElement(
                        d.a,
                        null,
                        o.a.createElement(
                          s.a,
                          { variant: "primary", type: "submit", className: "w-25 float-right" },
                          "Add"
                        )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })(u.Component),
        O = t(140),
        k = t(134),
        N = t(34),
        S = (function (e) {
          Object(l.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++) l[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = { isModalOpen: null }),
              (e.toggleModal = function (a) {
                e.setState({ isModalOpen: a })
              }),
              e
            )
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getManufactures()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.loading,
                    n = a.manufactures,
                    r = a.removeManufacture,
                    l = this.state.isModalOpen
                  return t
                    ? o.a.createElement(N.a, null)
                    : n.length
                    ? o.a.createElement(
                        O.a,
                        null,
                        o.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            o.a.createElement("h6", null, "Manufacture")
                          ),
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            o.a.createElement(
                              m.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              o.a.createElement(
                                "thead",
                                null,
                                o.a.createElement(
                                  "tr",
                                  null,
                                  o.a.createElement("th", null, "Name"),
                                  o.a.createElement("th", null, "Delete?")
                                )
                              ),
                              o.a.createElement(
                                "tbody",
                                null,
                                n.map(function (a) {
                                  var t = a.id,
                                    n = a.name
                                  return o.a.createElement(
                                    "tr",
                                    { key: t },
                                    o.a.createElement("td", null, n),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      o.a.createElement(
                                        s.a,
                                        {
                                          id: t,
                                          variant: "primary",
                                          onClick: function () {
                                            e.toggleModal(t)
                                          },
                                        },
                                        "Delete Item"
                                      ),
                                      o.a.createElement(k.a, {
                                        id: t,
                                        hideModal: e.toggleModal,
                                        deleteState: function () {
                                          return r(t)
                                        },
                                        isModalOpen: l,
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          )
                        ),
                        o.a.createElement(
                          i.a,
                          null,
                          o.a.createElement(
                            d.a,
                            { lg: "5" },
                            o.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              o.a.createElement(
                                "div",
                                { className: "ms-panel-header" },
                                o.a.createElement("h6", null, "Add Manufacture")
                              ),
                              o.a.createElement("div", { className: "ms-panel-body" }, o.a.createElement(j, this.props))
                            )
                          )
                        )
                      )
                    : null
                },
              },
            ]),
            t
          )
        })(u.Component)
      a.default = Object(p.b)(
        function (e) {
          return { manufactures: Object(h.c)(e), loading: Object(h.i)(e), error: Object(h.l)(e) }
        },
        { getManufactures: f.h, removeManufacture: f.m, addManufacture: f.c, resetManufactureErrors: f.p }
      )(S)
    },
  },
])
//# sourceMappingURL=21.35727152.chunk.js.map
