;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [15],
  {
    132: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return l
      })
      var n = a(0),
        c = a.n(n),
        r = a(66),
        o = a(50),
        i = a(44),
        s = a(52),
        l = function (e) {
          var t = e.name,
            a = e.value,
            n = e.label,
            l = e.onChange
          e.row
          return c.a.createElement(
            r.a,
            null,
            c.a.createElement(
              o.a,
              { as: i.a },
              c.a.createElement(
                "label",
                { className: "ms-checkbox-wrap" },
                c.a.createElement(s.a, {
                  type: "checkbox",
                  onChange: l,
                  className: "form-check-input ".concat(a ? "checked" : ""),
                  name: t,
                  value: a,
                }),
                c.a.createElement("i", { className: "ms-checkbox-check" })
              ),
              c.a.createElement("span", null, n)
            )
          )
        }
    },
    190: function (e, t, a) {
      "use strict"
      var n = a(2),
        c = a(3),
        r = a.n(c),
        o = a(4),
        i = a(20),
        s = a(14),
        l = a(15),
        u = a(17),
        d = a(16),
        p = a(0),
        m = a.n(p),
        v = a(130),
        h = a(66),
        f = a(44),
        b = a(52),
        E = a(126),
        g = a(131),
        j = a(30),
        C = a(56),
        y = a.n(C),
        k = (function (e) {
          Object(u.a)(a, e)
          var t = Object(d.a)(a)
          function a() {
            var e
            Object(s.a)(this, a)
            for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++) l[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(l))).state = { total: 0, content: "", quoteTemplates: [] }),
              (e.onChange = function (t) {
                e.setState(Object(i.a)({}, t.target.name, t.target.value))
              }),
              (e.onCreate = (function () {
                var t = Object(o.a)(
                  r.a.mark(function t(a, n) {
                    return r.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            a.preventDefault(), e.setState({ prepend: n.sections })
                          case 2:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, a) {
                  return t.apply(this, arguments)
                }
              })()),
              (e.openEditor = (function () {
                var t = Object(o.a)(
                  r.a.mark(function t(a, c) {
                    var o, i, s, l, u, d, p
                    return r.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (o = e.props),
                              (i = o.toggleModal),
                              (s = o.addGeneratedQuote),
                              (l = o.services),
                              (u = o.prepend),
                              (d = o.addQuotePrices),
                              (p = u.map(function (e, t) {
                                var a = e.services.map(function (e, a) {
                                  var n = l.find(function (t) {
                                    return t.id == e.id
                                  })
                                  return {
                                    name: n.name,
                                    content: n.content,
                                    price: n.price,
                                    indexService: a,
                                    indexSection: t,
                                  }
                                })
                                return Object(n.a)(Object(n.a)({}, e), {}, { services: a })
                              })),
                              (t.next = 5),
                              d(c.quoteServices)
                            )
                          case 5:
                            return (t.next = 7), s(p)
                          case 7:
                            return (t.next = 9), i(!0)
                          case 9:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, a) {
                  return t.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(l.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this
                  this.props.quoteTemplates().then(function (t) {
                    e.setState({ quoteTemplates: t })
                  })
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.prepend,
                    c = (t.services, t.alphabet),
                    r = t.onChange,
                    o = this.state.quoteTemplates
                  return m.a.createElement(
                    "div",
                    { className: "ms-panel" },
                    m.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      m.a.createElement("h6", { className: "mb-3" }, "Generate a Quote"),
                      m.a.createElement(g.c, {
                        initialValues: (function () {
                          var e = {}
                          return (
                            a.map(function (t, a) {
                              var r = t.services
                              return r.map(function (t, o) {
                                var s = r.find(function (e) {
                                  return e.id == t.id
                                }).price
                                e = Object(n.a)(
                                  Object(n.a)({}, e),
                                  {},
                                  Object(i.a)({}, "".concat(c[a]).concat(o), s.toString())
                                )
                              })
                            }),
                            { quoteServices: Object(n.a)({}, e) }
                          )
                        })(),
                        enableReinitialize: !0,
                        render: function (t) {
                          var n = t.errors,
                            i = t.values
                          return m.a.createElement(
                            v.a,
                            {
                              noValidate: !0,
                              onSubmit: function (t) {
                                return e.openEditor(t, i, n)
                              },
                            },
                            a.map(function (e, t) {
                              var a = e.name,
                                n = e.services
                              return m.a.createElement(
                                m.a.Fragment,
                                null,
                                m.a.createElement(
                                  h.a,
                                  { className: "section mt-2 mb-1" },
                                  m.a.createElement(
                                    f.a,
                                    null,
                                    m.a.createElement("p", null, "Section ", c[t].toUpperCase(), ": ", a)
                                  )
                                ),
                                m.a.createElement(g.b, {
                                  name: "sections.".concat(t, ".services"),
                                  render: function (e) {
                                    e.remove, e.push, e.replace
                                    return m.a.createElement(
                                      m.a.Fragment,
                                      null,
                                      n.map(function (e, a) {
                                        var r = e.id,
                                          o = n.find(function (e) {
                                            return e.id == r
                                          }),
                                          i = o.name,
                                          s = o.price
                                        return m.a.createElement(
                                          h.a,
                                          { className: "service mt-2" },
                                          m.a.createElement(
                                            f.a,
                                            { lg: "9" },
                                            m.a.createElement(
                                              "p",
                                              null,
                                              "Service ",
                                              c[t].toUpperCase(),
                                              ".",
                                              a + 1,
                                              ": ",
                                              i
                                            )
                                          ),
                                          m.a.createElement(
                                            f.a,
                                            { lg: "3" },
                                            m.a.createElement(
                                              h.a,
                                              null,
                                              m.a.createElement(
                                                f.a,
                                                { lg: "9" },
                                                m.a.createElement(g.a, {
                                                  name: "quoteServices.".concat(c[t]).concat(a),
                                                  className: "form-control",
                                                  type: "text",
                                                  defaultValue: s,
                                                })
                                              ),
                                              m.a.createElement(
                                                f.a,
                                                { lg: "1", className: y.a.sign },
                                                m.a.createElement(j.n, null)
                                              )
                                            )
                                          )
                                        )
                                      })
                                    )
                                  },
                                })
                              )
                            }),
                            m.a.createElement(
                              h.a,
                              { className: "my-3" },
                              m.a.createElement(
                                f.a,
                                { lg: "3" },
                                m.a.createElement("p", null, "Choose quote template")
                              ),
                              m.a.createElement(
                                f.a,
                                { lg: "9" },
                                m.a.createElement(
                                  b.a,
                                  { as: "select", name: "templateName", onChange: r },
                                  o.map(function (e, t) {
                                    return m.a.createElement("option", { key: t, value: e }, e)
                                  })
                                )
                              )
                            ),
                            m.a.createElement(
                              h.a,
                              { className: "justify-content-end" },
                              m.a.createElement(
                                f.a,
                                { lg: 6 },
                                m.a.createElement(
                                  E.a,
                                  { variant: "primary", type: "submit", className: "w-50 float-right" },
                                  "Open/Change Quote"
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
            a
          )
        })(p.Component)
      t.a = k
    },
    196: function (e, t, a) {
      "use strict"
      var n = a(3),
        c = a.n(n),
        r = a(4),
        o = a(14),
        i = a(15),
        s = a(17),
        l = a(16),
        u = a(0),
        d = a.n(u),
        p = a(332),
        m = a(130),
        v = a(294),
        h = a(295),
        f = a(126),
        b = a(132),
        E =
          (a(236),
          (function (e) {
            Object(s.a)(a, e)
            var t = Object(l.a)(a)
            function a(e) {
              var n
              return Object(o.a)(this, a), ((n = t.call(this, e)).ckeditorTextarea = d.a.createRef()), n
            }
            return (
              Object(i.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this.props,
                      t = e.data,
                      a = e.addContentEditor
                    this.initCkeditor(a), this.setState({ data: t })
                  },
                },
                {
                  key: "initCkeditor",
                  value: function (e) {
                    var t = window.CKEDITOR
                    t.replace("ckeditor", { allowedContent: !0, removePlugins: "sourcearea", height: 650 }),
                      t.addCss(
                        ".cke_editable{ zoom: 1.4; margin: 0 } .cke_editable .hide{display: none!important} .cke_editable .head{margin-top: 1rem} .cke_editable .head h2{display:none}"
                      ),
                      t.instances.ckeditor.on("change", function () {
                        e(this.getData())
                      })
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return d.a.createElement(
                      "div",
                      null,
                      d.a.createElement("textarea", {
                        cols: "80",
                        name: "ckeditor",
                        rows: "30",
                        ref: this.ckeditorTextarea,
                        value: this.props.data,
                      })
                    )
                  },
                },
              ]),
              a
            )
          })(u.Component)),
        g = a(13),
        j = a(32),
        C = a(18),
        y = a(53),
        k = a(22),
        O = a(33),
        x = a(24),
        N = a(54),
        S = a(37),
        w = a.n(S),
        q = (function (e) {
          Object(s.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(o.a)(this, a)
            for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) i[s] = arguments[s]
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = {
                pdfConvert: !1,
                data: "",
                numberQuote: Math.floor(1e6 * Math.random()),
              }),
              (e.onChange = function (t) {
                "checkbox" === t.target.type &&
                  (t.target.checked ? e.setState({ pdfConvert: !0 }) : e.setState({ pdfConvert: !1 }))
              }),
              (e.onSave = (function () {
                var t = Object(r.a)(
                  c.a.mark(function t(a) {
                    var n, r, o, i, s, l, u, d, p, m, v, h, f, b, E, g, j, C, y
                    return c.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.props),
                              (r = n.saveHtml),
                              (o = n.quoteName),
                              (i = n.htmltopdf),
                              (s = n.hideModal),
                              (l = n.addQuote),
                              (u = n.projectId),
                              (d = n.quotesLength),
                              (p = n.contentEditor),
                              (m = n.resetContentEditor),
                              (v = n.history),
                              (h = n.addHistory),
                              (f = n.consultantId),
                              (b = n.project.addressBook),
                              (E = b.addressName),
                              (g = b.postCode),
                              (j = b.city),
                              (C = b.country),
                              (y = e.state.pdfConvert),
                              (t.next = 5),
                              l(u.replace(/^0+/, ""), { name: o, converted: y })
                            )
                          case 5:
                            if (((t.t0 = !d), !t.t0)) {
                              t.next = 9
                              break
                            }
                            return (t.next = 9), h(u.replace(/^0+/, ""), { statusId: 2, consultantId: f })
                          case 9:
                            return (t.next = 11), r(o, p)
                          case 11:
                            if (((t.t1 = y), !t.t1)) {
                              t.next = 15
                              break
                            }
                            return (
                              (t.next = 15),
                              i(o, {
                                projectId: u,
                                quotesLength: d,
                                address: "".concat(E, ", ").concat(g, ", ").concat(j, ", ").concat(C),
                              })
                            )
                          case 15:
                            return (t.next = 17), s(!1)
                          case 17:
                            return (t.next = 19), m()
                          case 19:
                            e.setState({ pdfConvert: !1 }), v.push("/dashboard/project/".concat(u))
                          case 21:
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
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.templateName,
                    a = e.getProjects
                  this.loadTemplate(t), a()
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props.templateName
                  t !== e.templateName && this.loadTemplate(t)
                },
              },
              {
                key: "loadTemplate",
                value: function (e) {
                  var t = this,
                    a = this.props,
                    n = a.getHtml,
                    c = a.createdQuote,
                    r = a.quotesLength,
                    o = a.alphabet,
                    i = a.addContentEditor,
                    s = a.projectId,
                    l = a.prices,
                    u = a.project.addressBook,
                    d = u.addressName,
                    p = u.postCode,
                    m = u.city,
                    v = u.country,
                    h = '<div class="head">\n                    <p>'
                      .concat(w()(new Date()).format("D MMMM YYYY"), "</p>\n                    <p>Ref: ")
                      .concat(s, ".")
                      .concat(w()(new Date()).format("YYMMDD"), ".Q")
                      .concat(
                        r + 1,
                        "</p>\n                    <p>John Doe</p>\n                    <p>KP Acoustics Ltd.</p>\n                    <p>By email to:</p>\n                    <p>Dear</p>\n                    <h2>"
                      )
                      .concat(s, ': <a class="address">')
                      .concat(d, ", ")
                      .concat(p, ", ")
                      .concat(m, ", ")
                      .concat(v, "</a></h2>\n                  </div>"),
                    f = '<div class="quote-block">'.concat(
                      c
                        .map(function (e, t) {
                          return "<h2>"
                            .concat(o[t].toUpperCase(), ". ")
                            .concat(e.name.toUpperCase(), "</h2>\n        ")
                            .concat(
                              e.services
                                .map(function (e) {
                                  return "<h2>"
                                    .concat(o[e.indexSection].toUpperCase(), ".")
                                    .concat(e.indexService + 1, ": ")
                                    .concat(e.name, "</h2>")
                                    .concat(e.content)
                                })
                                .join(" ")
                            )
                        })
                        .join(" "),
                      "</div>"
                    ),
                    b = '<div class="quote-price">'.concat(
                      c
                        .map(function (e, t) {
                          return "<h3>"
                            .concat(o[t].toUpperCase(), ". ")
                            .concat(e.name, "</h3>\n          <table>")
                            .concat(
                              e.services
                                .map(function (e, t) {
                                  return "<tr><td>"
                                    .concat(o[e.indexSection].toUpperCase(), ".")
                                    .concat(e.indexService + 1, ": ")
                                    .concat(e.name, ' </td><td style="text-align: right"><strong> \xa3')
                                    .concat(l["a".concat(t)], " (+VAT)</strong> </td></tr>")
                                })
                                .join(" "),
                              "</table>"
                            )
                        })
                        .join(" "),
                      "</div>"
                    )
                  n(e).then(function (e) {
                    t.setState({
                      data: e
                        .replace('<div class="quote-block"></div>', f)
                        .replace('<div class="head"></div>', h)
                        .replace('<div class="quote-price"></div>', b),
                    }),
                      i(
                        e
                          .replace('<div class="quote-block"></div>', f)
                          .replace('<div class="head"></div>', h)
                          .replace('<div class="quote-price"></div>', b)
                      )
                  })
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.data,
                    a = e.pdfConvert,
                    n = this.props,
                    c = n.isModalOpen,
                    r = n.hideModal,
                    o = n.addContentEditor
                  return d.a.createElement(
                    p.a,
                    { show: c && t, onHide: r, className: "editor", centered: !0, size: "xl" },
                    d.a.createElement(
                      m.a,
                      { noValidate: !0, onSubmit: this.onSave },
                      d.a.createElement(
                        p.a.Header,
                        { className: "bg-primary", closeButton: !0 },
                        d.a.createElement("h5", { className: "modal-title has-icon text-white" }, "Editor")
                      ),
                      d.a.createElement(v.a, null, d.a.createElement(E, { data: t, addContentEditor: o })),
                      d.a.createElement(
                        h.a,
                        null,
                        d.a.createElement(b.a, {
                          name: "pdfConvert",
                          value: a,
                          label: "Convert it to PDF?",
                          onChange: this.onChange,
                        }),
                        d.a.createElement(
                          f.a,
                          {
                            variant: "primary",
                            className: "swal2-styled btn-light",
                            onClick: function () {
                              return r(!1)
                            },
                          },
                          "Cancel"
                        ),
                        d.a.createElement(
                          f.a,
                          { variant: "primary", type: "submit", className: "swal2-confirm swal2-styled" },
                          "Save"
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(u.Component)
      t.a = Object(j.compose)(
        C.g,
        Object(g.b)(
          function (e, t) {
            return {
              createdQuote: Object(N.b)(e),
              contentEditor: Object(N.a)(e),
              project: Object(x.c)(e, t.projectId),
              prices: Object(N.c)(e),
              consultantId: Object(k.d)(e),
            }
          },
          {
            getGeneratedQuote: y.g,
            resetGeneratedQuote: y.p,
            getContentEditor: y.f,
            addContentEditor: y.a,
            resetContentEditor: y.o,
            getProjects: O.e,
            getQuotePrices: y.i,
          }
        )
      )(q)
    },
    331: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(20),
        c = a(14),
        r = a(15),
        o = a(17),
        i = a(16),
        s = a(0),
        l = a.n(s),
        u = a(66),
        d = a(44),
        p = (a(131), a(13)),
        m = a(32),
        v = a(18),
        h = (a(53), a(33), a(54), a(23), a(34), a(38)),
        f = a(40),
        b =
          (a(190),
          a(56),
          a(196),
          a(37),
          (function (e) {
            Object(o.a)(a, e)
            var t = Object(i.a)(a)
            function a() {
              var e
              Object(c.a)(this, a)
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
              return (
                ((e = t.call.apply(t, [this].concat(o))).state = {}),
                (e.onChange = function (t) {
                  e.setState(Object(n.a)({}, t.target.name, t.target.value))
                }),
                e
              )
            }
            return (
              Object(r.a)(a, [
                { key: "componentDidMount", value: function () {} },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t =
                        (e.error,
                        e.loading,
                        e.quotes,
                        e.servicesExercises,
                        e.getTemplates,
                        e.getHtml,
                        e.addHistory,
                        e.addQuote,
                        e.computedMatch,
                        this.state)
                    t.isModalOpen, t.sections, t.alphabet, t.prepend, t.quoteName, t.templateName
                    return l.a.createElement(
                      "section",
                      { className: "main" },
                      l.a.createElement(
                        u.a,
                        null,
                        l.a.createElement(d.a, null, l.a.createElement(h.a, null)),
                        l.a.createElement(
                          d.a,
                          { lg: "11", className: "container-left" },
                          l.a.createElement(f.a, null),
                          l.a.createElement(
                            u.a,
                            null,
                            l.a.createElement(
                              d.a,
                              null,
                              l.a.createElement("div", { className: "ms-panel" }, "Quote Name")
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
          })(s.Component))
      t.default = Object(m.compose)(
        v.g,
        Object(p.b)(function (e) {
          return {}
        }, {})
      )(b)
    },
  },
])
//# sourceMappingURL=15.577b1f2b.chunk.js.map
