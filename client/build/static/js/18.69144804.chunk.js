;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [18],
  {
    163: function (e, a, t) {
      "use strict"
      t.d(a, "a", function () {
        return d
      })
      var n = t(0),
        l = t.n(n),
        r = t(66),
        c = t(50),
        u = t(44),
        m = t(51),
        o = t(52),
        s = t(126),
        i = t(30),
        d = function (e) {
          var a = e.name,
            t = e.label,
            n = e.onChange,
            d = e.isModalOpen,
            h = e.hardwares,
            p = e.showModal,
            E = e.add,
            f = e.error
          return h.length
            ? l.a.createElement(
                r.a,
                null,
                l.a.createElement(
                  c.a,
                  { as: u.a },
                  l.a.createElement(m.a, null, t, " Name"),
                  f && l.a.createElement("div", { className: "invalid-feedback ".concat(E && "add") }, f),
                  l.a.createElement(
                    r.a,
                    { className: "hardware margin-label" },
                    l.a.createElement(
                      u.a,
                      { lg: E ? 10 : null },
                      l.a.createElement(
                        o.a,
                        { as: "select", name: a, onChange: n, disabled: d, isInvalid: !!f },
                        l.a.createElement("option", { value: d }, "Select ", t, " Name"),
                        h.map(function (e) {
                          var a = e.id,
                            t = e.name
                          return l.a.createElement("option", { key: a, value: a }, t)
                        })
                      )
                    ),
                    E &&
                      l.a.createElement(
                        u.a,
                        { lg: 2 },
                        l.a.createElement(
                          s.a,
                          {
                            onClick: function () {
                              return p(t, E)
                            },
                            className: "btn btn-success",
                            name: "button",
                          },
                          l.a.createElement(i.m, null)
                        )
                      )
                  )
                )
              )
            : null
        }
    },
    345: function (e, a, t) {
      "use strict"
      t.r(a)
      var n = t(14),
        l = t(15),
        r = t(17),
        c = t(16),
        u = t(0),
        m = t.n(u),
        o = t(129),
        s = t(126),
        i = t(66),
        d = t(44),
        h = t(13),
        p = t(137),
        E = t(138),
        f = t(3),
        v = t.n(f),
        b = t(4),
        g = t(20),
        M = t(130),
        y = t(21),
        j = t(163),
        O = (function (e) {
          Object(r.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var l = arguments.length, r = new Array(l), c = 0; c < l; c++) r[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = { name: "", manufactureId: null }),
              (e.onChange = function (a) {
                e.setState(Object(g.a)({}, a.target.name, a.target.value))
              }),
              (e.onSubmit = (function () {
                var a = Object(b.a)(
                  v.a.mark(function a(t) {
                    var n, l, r, c
                    return v.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = e.props.addModel),
                              (l = e.state),
                              (r = l.name),
                              (c = l.manufactureId),
                              (a.next = 5),
                              n({ name: r, manufactureId: c })
                            )
                          case 5:
                            e.setState({ name: "", manufactureId: "" })
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
            Object(l.a)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.resetModelErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    a = e.name,
                    t = e.manufactureId,
                    n = this.props,
                    l = n.error,
                    r = n.manufactures
                  return m.a.createElement(
                    M.a,
                    { noValidate: !0, onSubmit: this.onSubmit },
                    m.a.createElement(y.a, {
                      name: "name",
                      value: a,
                      label: "Name",
                      placeholder: "Ex: MR-PRO",
                      onChange: this.onChange,
                      error: l && l.data.name,
                    }),
                    m.a.createElement(j.a, {
                      name: "manufactureId",
                      label: "Manufacture",
                      value: t,
                      onChange: this.onChange,
                      hardwares: r,
                      error: l && l.data.manufactureId,
                    }),
                    m.a.createElement(
                      i.a,
                      null,
                      m.a.createElement(
                        d.a,
                        null,
                        m.a.createElement(
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
        N = t(140),
        k = t(134),
        w = t(34),
        C = (function (e) {
          Object(r.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var l = arguments.length, r = new Array(l), c = 0; c < l; c++) r[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = { isModalOpen: null }),
              (e.toggleModal = function (a) {
                e.setState({ isModalOpen: a })
              }),
              e
            )
          }
          return (
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getModels(), this.props.getManufactures()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.loading,
                    n = a.models,
                    l = a.removeModel,
                    r = this.state.isModalOpen
                  return t
                    ? m.a.createElement(w.a, null)
                    : n.length
                    ? m.a.createElement(
                        N.a,
                        null,
                        m.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          m.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            m.a.createElement("h6", null, "Model")
                          ),
                          m.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            m.a.createElement(
                              o.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              m.a.createElement(
                                "thead",
                                null,
                                m.a.createElement(
                                  "tr",
                                  null,
                                  m.a.createElement("th", null, "Name"),
                                  m.a.createElement("th", null, "Manufacure Name"),
                                  m.a.createElement("th", null, "Delete?")
                                )
                              ),
                              m.a.createElement(
                                "tbody",
                                null,
                                n.map(function (a) {
                                  var t = a.id,
                                    n = a.name,
                                    c = a.manufacture
                                  return m.a.createElement(
                                    "tr",
                                    { key: t },
                                    m.a.createElement("td", null, n),
                                    m.a.createElement("td", null, c.name),
                                    m.a.createElement(
                                      "td",
                                      null,
                                      m.a.createElement(
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
                                      m.a.createElement(k.a, {
                                        id: t,
                                        hideModal: e.toggleModal,
                                        deleteState: function () {
                                          return l(t)
                                        },
                                        isModalOpen: r,
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          )
                        ),
                        m.a.createElement(
                          i.a,
                          null,
                          m.a.createElement(
                            d.a,
                            { lg: "5" },
                            m.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              m.a.createElement(
                                "div",
                                { className: "ms-panel-header" },
                                m.a.createElement("h6", null, "Add Model")
                              ),
                              m.a.createElement("div", { className: "ms-panel-body" }, m.a.createElement(O, this.props))
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
      a.default = Object(h.b)(
        function (e) {
          return {
            models: Object(E.d)(e),
            manufactures: Object(E.c)(e),
            error: Object(E.m)(e),
            loading: Object(E.j)(e),
          }
        },
        { getManufactures: p.h, getModels: p.i, removeModel: p.n, addModel: p.d, resetModelErrors: p.q }
      )(C)
    },
  },
])
//# sourceMappingURL=18.69144804.chunk.js.map
