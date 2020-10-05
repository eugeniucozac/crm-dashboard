;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [22],
  {
    343: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(14),
        r = a(15),
        l = a(17),
        c = a(16),
        o = a(0),
        s = a.n(o),
        i = a(129),
        m = a(126),
        u = a(66),
        p = a(44),
        d = a(13),
        h = a(137),
        v = a(138),
        E = a(3),
        y = a.n(E),
        b = a(4),
        f = a(20),
        g = a(130),
        j = a(21),
        O = (function (e) {
          Object(l.a)(a, e)
          var t = Object(c.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++) l[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = { name: "" }),
              (e.onChange = function (t) {
                e.setState(Object(f.a)({}, t.target.name, t.target.value))
              }),
              (e.onSubmit = (function () {
                var t = Object(b.a)(
                  y.a.mark(function t(a) {
                    var n, r
                    return y.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.props.addType),
                              (r = e.state.name),
                              (t.next = 5),
                              n({ name: r })
                            )
                          case 5:
                            e.setState({ name: "" })
                          case 6:
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
                key: "componentWillUnmount",
                value: function () {
                  this.props.resetTypeErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.name,
                    t = this.props.error
                  return s.a.createElement(
                    g.a,
                    { noValidate: !0, onSubmit: this.onSubmit },
                    s.a.createElement(j.a, {
                      name: "name",
                      value: e,
                      label: "Name",
                      placeholder: "Ex: Calibrator",
                      onChange: this.onChange,
                      error: t && t.data.name,
                    }),
                    s.a.createElement(
                      u.a,
                      null,
                      s.a.createElement(
                        p.a,
                        null,
                        s.a.createElement(
                          m.a,
                          { variant: "primary", type: "submit", className: "w-25 float-right" },
                          "Add"
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(o.Component),
        k = a(140),
        T = a(134),
        M = a(34),
        N = (function (e) {
          Object(l.a)(a, e)
          var t = Object(c.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, l = new Array(r), c = 0; c < r; c++) l[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = { isModalOpen: null }),
              (e.toggleModal = function (t) {
                e.setState({ isModalOpen: t })
              }),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getTypes()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.loading,
                    n = t.types,
                    r = t.removeType,
                    l = this.state.isModalOpen
                  return a
                    ? s.a.createElement(M.a, null)
                    : n.length
                    ? s.a.createElement(
                        k.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          s.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            s.a.createElement("h6", null, "Types")
                          ),
                          s.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            s.a.createElement(
                              i.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              s.a.createElement(
                                "thead",
                                null,
                                s.a.createElement(
                                  "tr",
                                  null,
                                  s.a.createElement("th", null, "Name"),
                                  s.a.createElement("th", null, "Delete?")
                                )
                              ),
                              s.a.createElement(
                                "tbody",
                                null,
                                n.map(function (t) {
                                  var a = t.id,
                                    n = t.name
                                  return s.a.createElement(
                                    "tr",
                                    { key: a },
                                    s.a.createElement("td", null, n),
                                    s.a.createElement(
                                      "td",
                                      null,
                                      s.a.createElement(
                                        m.a,
                                        {
                                          id: a,
                                          variant: "primary",
                                          onClick: function () {
                                            e.toggleModal(a)
                                          },
                                        },
                                        "Delete Item"
                                      ),
                                      s.a.createElement(T.a, {
                                        id: a,
                                        hideModal: e.toggleModal,
                                        isModalOpen: l,
                                        deleteState: function () {
                                          return r(a)
                                        },
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          )
                        ),
                        s.a.createElement(
                          u.a,
                          null,
                          s.a.createElement(
                            p.a,
                            { lg: "5" },
                            s.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              s.a.createElement(
                                "div",
                                { className: "ms-panel-header" },
                                s.a.createElement("h6", null, "Add Type")
                              ),
                              s.a.createElement("div", { className: "ms-panel-body" }, s.a.createElement(O, this.props))
                            )
                          )
                        )
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(o.Component)
      t.default = Object(d.b)(
        function (e) {
          return { types: Object(v.e)(e), loading: Object(v.k)(e), error: Object(v.n)(e) }
        },
        { getTypes: h.j, removeType: h.o, addType: h.e, resetTypeErrors: h.r }
      )(N)
    },
  },
])
//# sourceMappingURL=22.d69f88b5.chunk.js.map
