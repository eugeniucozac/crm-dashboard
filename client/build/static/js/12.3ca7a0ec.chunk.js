;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [12],
  {
    132: function (e, a, t) {
      "use strict"
      t.d(a, "a", function () {
        return s
      })
      var n = t(0),
        r = t.n(n),
        c = t(66),
        l = t(50),
        i = t(44),
        o = t(52),
        s = function (e) {
          var a = e.name,
            t = e.value,
            n = e.label,
            s = e.onChange
          e.row
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              l.a,
              { as: i.a },
              r.a.createElement(
                "label",
                { className: "ms-checkbox-wrap" },
                r.a.createElement(o.a, {
                  type: "checkbox",
                  onChange: s,
                  className: "form-check-input ".concat(t ? "checked" : ""),
                  name: a,
                  value: t,
                }),
                r.a.createElement("i", { className: "ms-checkbox-check" })
              ),
              r.a.createElement("span", null, n)
            )
          )
        }
    },
    157: function (e, a, t) {
      "use strict"
      t.d(a, "a", function () {
        return m
      })
      var n = t(0),
        r = t.n(n),
        c = t(66),
        l = t(50),
        i = t(44),
        o = t(51),
        s = t(131),
        m = function (e) {
          var a = e.type,
            t = e.name,
            n = e.label,
            m = e.placeholder,
            d = e.error
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              l.a,
              { as: i.a },
              r.a.createElement(o.a, { htmlFor: t }, n),
              d && r.a.createElement("div", { className: "invalid-feedback" }, d),
              r.a.createElement(s.a, {
                type: a,
                name: t,
                className: "form-control ".concat(d ? "is-invalid" : ""),
                placeholder: m,
              })
            )
          )
        }
      m.defaultProps = { type: "text" }
    },
    192: function (e, a, t) {
      e.exports = { option: "Services_option__1sBjy", button: "Services_button__1jxF6", table: "Services_table__20miv" }
    },
    340: function (e, a, t) {
      "use strict"
      t.r(a)
      var n = t(14),
        r = t(15),
        c = t(17),
        l = t(16),
        i = t(0),
        o = t.n(i),
        s = t(129),
        m = t(126),
        d = t(66),
        u = t(44),
        p = t(13),
        E = t(53),
        v = t(3),
        h = t.n(v),
        b = t(4),
        f = t(20),
        g = t(130),
        S = t(132),
        O = t(157),
        N = t(39),
        y = t(131),
        k = t(30),
        x = t(192),
        j = t.n(x),
        C = (function (e) {
          Object(c.a)(t, e)
          var a = Object(l.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++) c[l] = arguments[l]
            return (
              ((e = a.call.apply(a, [this].concat(c))).state = { addOptions: !1, addons: [{ name: "", price: "" }] }),
              (e.onChange = function (a) {
                e.setState(Object(f.a)({}, a.target.name, a.target.value)),
                  "checkbox" === a.target.type &&
                    (a.target.checked ? e.setState({ addOptions: !0 }) : e.setState({ addOptions: !1 }))
              }),
              (e.onSubmit = (function () {
                var a = Object(b.a)(
                  h.a.mark(function a(t, n, r) {
                    var c, l, i, o, s
                    return h.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              (c = e.props.addService),
                              (l = e.state.addOptions),
                              (i = n.name),
                              (o = n.price),
                              (s = n.addons),
                              !l)
                            ) {
                              a.next = 9
                              break
                            }
                            return (a.next = 7), c({ name: i, price: o, addons: s })
                          case 7:
                            a.next = 11
                            break
                          case 9:
                            return (a.next = 11), c({ name: i, price: o })
                          case 11:
                            e.setState({ name: "", price: "" })
                          case 12:
                          case "end":
                            return a.stop()
                        }
                    }, a)
                  })
                )
                return function (e, t, n) {
                  return a.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.state.addOptions,
                    t = this.props.error
                  return o.a.createElement(
                    "div",
                    { className: "ms-panel" },
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      o.a.createElement("h6", null, "Add Service")
                    ),
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      o.a.createElement(y.c, {
                        initialValues: this.state,
                        render: function (n) {
                          var r = n.values,
                            c = n.resetForm
                          return o.a.createElement(
                            g.a,
                            {
                              noValidate: !0,
                              onSubmit: function (a) {
                                return e.onSubmit(a, r, c)
                              },
                            },
                            o.a.createElement(O.a, {
                              name: "name",
                              label: "Name",
                              placeholder: "Ex: Site Visit",
                              error: t && t.data.name,
                            }),
                            o.a.createElement(O.a, {
                              name: "price",
                              label: "Price",
                              placeholder: "Ex: 400",
                              error: t && t.data.price,
                            }),
                            o.a.createElement(N.a, { name: "content", label: "Content", rows: "15" }),
                            o.a.createElement(S.a, { name: "addOptions", label: "Add Options?", onChange: e.onChange }),
                            a &&
                              o.a.createElement(y.b, {
                                name: "addons",
                                render: function (e) {
                                  var a = e.remove,
                                    n = e.push
                                  return o.a.createElement(
                                    o.a.Fragment,
                                    null,
                                    r.addons.length > 0 &&
                                      r.addons.map(function (e, r) {
                                        return o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(
                                            d.a,
                                            null,
                                            o.a.createElement(
                                              u.a,
                                              { lg: 10 },
                                              o.a.createElement(
                                                "div",
                                                { className: j.a.option },
                                                o.a.createElement("h6", null, "Option ", r + 1)
                                              )
                                            ),
                                            o.a.createElement(
                                              u.a,
                                              { lg: 2, className: j.a.button },
                                              0 === r
                                                ? o.a.createElement(
                                                    m.a,
                                                    {
                                                      onClick: function () {
                                                        return n({ name: "", price: "" })
                                                      },
                                                      className: "btn btn-success",
                                                      name: "button",
                                                    },
                                                    o.a.createElement(k.m, null)
                                                  )
                                                : o.a.createElement(
                                                    m.a,
                                                    {
                                                      onClick: function () {
                                                        return a(r)
                                                      },
                                                      className: "btn btn-danger",
                                                      name: "button",
                                                    },
                                                    o.a.createElement(k.s, null)
                                                  )
                                            )
                                          ),
                                          o.a.createElement(
                                            i.Fragment,
                                            { key: r },
                                            o.a.createElement(O.a, {
                                              name: "addons.".concat(r, ".name"),
                                              label: "Name",
                                              placeholder: "Ex: Site Visit",
                                              error: t && t.data["name".concat(r)],
                                            }),
                                            o.a.createElement(O.a, {
                                              name: "addons.".concat(r, ".price"),
                                              label: "Price",
                                              placeholder: "Ex: 400",
                                              error: t && t.data["price".concat(r)],
                                            })
                                          )
                                        )
                                      })
                                  )
                                },
                              }),
                            o.a.createElement(
                              d.a,
                              null,
                              o.a.createElement(
                                u.a,
                                { className: "mt-3" },
                                o.a.createElement(
                                  m.a,
                                  { variant: "primary", type: "submit", className: "w-25 float-right" },
                                  "Add"
                                )
                              )
                            )
                          )
                        },
                      })
                    )
                  )
                },
              },
            ]),
            t
          )
        })(i.Component),
        w = (function (e) {
          Object(c.a)(t, e)
          var a = Object(l.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++) c[l] = arguments[l]
            return (
              ((e = a.call.apply(a, [this].concat(c))).state = {
                name: e.props.serviceId.name,
                price: e.props.serviceId.price,
                content: e.props.serviceId.content,
                existingAddons: e.props.serviceId.addons,
                addons: [],
                addonsToDelete: [],
                addOptions: !1,
              }),
              (e.onChange = function (a) {
                e.setState(Object(f.a)({}, a.target.name, a.target.value)),
                  "checkbox" === a.target.type &&
                    (a.target.checked ? e.setState({ addOptions: !0 }) : e.setState({ addOptions: !1 }))
              }),
              (e.onSubmit = (function () {
                var a = Object(b.a)(
                  h.a.mark(function a(t, n, r) {
                    var c, l, i, o, s, m, d, u, p
                    return h.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (c = e.props),
                              (l = c.updateService),
                              (i = c.serviceId),
                              (o = c.hideService),
                              (s = n.name),
                              (m = n.price),
                              (d = e.state),
                              (u = d.addons),
                              (p = d.content),
                              d.addOptions,
                              (a.next = 6),
                              l(i.id, { name: s, price: m, content: p, addons: u })
                            )
                          case 6:
                            return (a.next = 8), o(null)
                          case 8:
                          case "end":
                            return a.stop()
                        }
                    }, a)
                  })
                )
                return function (e, t, n) {
                  return a.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.state,
                    t = a.addOptions,
                    n = a.name,
                    r = a.price,
                    c = a.content,
                    l = this.props,
                    s = l.error,
                    p = l.hideService
                  return o.a.createElement(
                    "div",
                    { className: "ms-panel" },
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      o.a.createElement("h6", null, "Edit Service")
                    ),
                    o.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      o.a.createElement(y.c, {
                        initialValues: this.state,
                        render: function (a) {
                          var l = a.values,
                            E = a.resetForm
                          return o.a.createElement(
                            g.a,
                            {
                              noValidate: !0,
                              onSubmit: function (a) {
                                return e.onSubmit(a, l, E)
                              },
                            },
                            o.a.createElement(O.a, {
                              name: "name",
                              label: "Name",
                              value: n,
                              placeholder: "Ex: Site Visit",
                              error: s && s.data.name,
                            }),
                            o.a.createElement(O.a, {
                              name: "price",
                              label: "Price",
                              value: r,
                              placeholder: "Ex: 400",
                              error: s && s.data.price,
                            }),
                            o.a.createElement(N.a, {
                              name: "content",
                              label: "Content",
                              value: c,
                              onChange: e.onChange,
                              rows: "15",
                            }),
                            o.a.createElement(S.a, { name: "addOptions", label: "Add Options?", onChange: e.onChange }),
                            t &&
                              o.a.createElement(y.b, {
                                name: "addons",
                                render: function (e) {
                                  var a = e.remove,
                                    t = e.push
                                  return o.a.createElement(
                                    o.a.Fragment,
                                    null,
                                    l.addons.length > 0 &&
                                      l.addons.map(function (e, n) {
                                        return o.a.createElement(
                                          o.a.Fragment,
                                          null,
                                          o.a.createElement(
                                            d.a,
                                            null,
                                            o.a.createElement(
                                              u.a,
                                              { lg: 10 },
                                              o.a.createElement(
                                                "div",
                                                { className: j.a.option },
                                                o.a.createElement("h6", null, "Option ", n + 1)
                                              )
                                            ),
                                            o.a.createElement(
                                              u.a,
                                              { lg: 2, className: j.a.button },
                                              0 === n
                                                ? o.a.createElement(
                                                    m.a,
                                                    {
                                                      onClick: function () {
                                                        return t({ name: "", price: "" })
                                                      },
                                                      className: "btn btn-success",
                                                      name: "button",
                                                    },
                                                    o.a.createElement(k.m, null)
                                                  )
                                                : o.a.createElement(
                                                    m.a,
                                                    {
                                                      onClick: function () {
                                                        return a(n)
                                                      },
                                                      className: "btn btn-danger",
                                                      name: "button",
                                                    },
                                                    o.a.createElement(k.s, null)
                                                  )
                                            )
                                          ),
                                          o.a.createElement(
                                            i.Fragment,
                                            { key: n },
                                            o.a.createElement(O.a, {
                                              name: "addons.".concat(n, ".name"),
                                              label: "Name",
                                              placeholder: "Ex: Site Visit",
                                              error: s && s.data["name".concat(n)],
                                            }),
                                            o.a.createElement(O.a, {
                                              name: "addons.".concat(n, ".price"),
                                              label: "Price",
                                              placeholder: "Ex: 400",
                                              error: s && s.data["price".concat(n)],
                                            })
                                          )
                                        )
                                      })
                                  )
                                },
                              }),
                            o.a.createElement(
                              d.a,
                              null,
                              o.a.createElement(
                                u.a,
                                { className: "mt-3" },
                                o.a.createElement(
                                  m.a,
                                  { variant: "primary", type: "submit", className: "w-25 float-right" },
                                  "Update"
                                ),
                                o.a.createElement(
                                  m.a,
                                  {
                                    className: "btn btn-primary w-25 mr-1 float-right",
                                    onClick: function () {
                                      return p(null)
                                    },
                                  },
                                  "Cancel"
                                )
                              )
                            )
                          )
                        },
                      })
                    )
                  )
                },
              },
            ]),
            t
          )
        })(i.Component),
        I = t(54),
        A = t(140),
        F = t(134),
        M = t(34),
        _ = (function (e) {
          Object(c.a)(t, e)
          var a = Object(l.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, c = new Array(r), l = 0; l < r; l++) c[l] = arguments[l]
            return (
              ((e = a.call.apply(a, [this].concat(c))).state = { isModalOpen: null, serviceId: null }),
              (e.toggleModal = function (a) {
                e.setState({ isModalOpen: a })
              }),
              (e.editService = function (a) {
                var t = e.props.services
                e.setState({
                  serviceId: t.find(function (e) {
                    return e.id === a
                  }),
                })
              }),
              e
            )
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getServices()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = (a.error, a.loading),
                    n = a.services,
                    r = a.removeService,
                    c = this.state,
                    l = c.isModalOpen,
                    i = c.serviceId
                  return t
                    ? o.a.createElement(M.a, null)
                    : n.length
                    ? o.a.createElement(
                        A.a,
                        null,
                        o.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            o.a.createElement("h6", null, "Project Services")
                          ),
                          o.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            o.a.createElement(
                              s.a,
                              { striped: !0, bordered: !0, hover: !0, className: j.a.table },
                              o.a.createElement(
                                "thead",
                                null,
                                o.a.createElement(
                                  "tr",
                                  null,
                                  o.a.createElement("th", null, "Name"),
                                  o.a.createElement("th", null, "Price"),
                                  o.a.createElement("th", null, "Options"),
                                  o.a.createElement("th", null, "Edit"),
                                  o.a.createElement("th", null, "Delete?")
                                )
                              ),
                              o.a.createElement(
                                "tbody",
                                null,
                                n.map(function (a) {
                                  var t = a.id,
                                    n = a.name,
                                    c = a.price,
                                    i = a.addons
                                  return o.a.createElement(
                                    "tr",
                                    { key: t },
                                    o.a.createElement("td", null, n),
                                    o.a.createElement("td", null, c, " \xa3"),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      i.length
                                        ? i.map(function (e) {
                                            var a = e.name,
                                              t = e.price
                                            return o.a.createElement("p", null, a, " - ", t, " \xa3")
                                          })
                                        : "N/A"
                                    ),
                                    o.a.createElement(
                                      "td",
                                      null,
                                      o.a.createElement(
                                        m.a,
                                        {
                                          id: t,
                                          variant: "primary",
                                          onClick: function () {
                                            return e.editService(t)
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
                                          id: t,
                                          variant: "primary",
                                          onClick: function () {
                                            e.toggleModal(t)
                                          },
                                        },
                                        "Delete Item"
                                      ),
                                      o.a.createElement(F.a, {
                                        id: t,
                                        hideModal: e.toggleModal,
                                        isModalOpen: l,
                                        deleteState: function () {
                                          return r(t)
                                        },
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          )
                        ),
                        o.a.createElement(
                          d.a,
                          null,
                          o.a.createElement(
                            u.a,
                            { lg: "6" },
                            i
                              ? o.a.createElement(
                                  w,
                                  Object.assign({}, this.props, { serviceId: i, hideService: this.editService })
                                )
                              : o.a.createElement(C, this.props)
                          )
                        )
                      )
                    : null
                },
              },
            ]),
            t
          )
        })(i.Component)
      a.default = Object(p.b)(
        function (e) {
          return { services: Object(I.e)(e), loading: Object(I.g)(e), error: Object(I.i)(e) }
        },
        { getServices: E.k, addService: E.e, removeService: E.n, updateService: E.r, resetQuotesErrors: E.q }
      )(_)
    },
  },
])
//# sourceMappingURL=12.3ca7a0ec.chunk.js.map
