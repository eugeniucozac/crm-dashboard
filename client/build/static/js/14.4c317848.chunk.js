;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [14],
  {
    132: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return i
      })
      var n = a(0),
        c = a.n(n),
        r = a(66),
        o = a(50),
        s = a(44),
        l = a(52),
        i = function (e) {
          var t = e.name,
            a = e.value,
            n = e.label,
            i = e.onChange
          e.row
          return c.a.createElement(
            r.a,
            null,
            c.a.createElement(
              o.a,
              { as: s.a },
              c.a.createElement(
                "label",
                { className: "ms-checkbox-wrap" },
                c.a.createElement(l.a, {
                  type: "checkbox",
                  onChange: i,
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
        s = a(20),
        l = a(14),
        i = a(15),
        u = a(17),
        m = a(16),
        d = a(0),
        p = a.n(d),
        v = a(130),
        h = a(66),
        f = a(44),
        E = a(52),
        b = a(126),
        g = a(131),
        j = a(30),
        C = a(56),
        y = a.n(C),
        k = (function (e) {
          Object(u.a)(a, e)
          var t = Object(m.a)(a)
          function a() {
            var e
            Object(l.a)(this, a)
            for (var c = arguments.length, i = new Array(c), u = 0; u < c; u++) i[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = { total: 0, content: "", quoteTemplates: [] }),
              (e.onChange = function (t) {
                e.setState(Object(s.a)({}, t.target.name, t.target.value))
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
                    var o, s, l, i, u, m, d
                    return r.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (o = e.props),
                              (s = o.toggleModal),
                              (l = o.addGeneratedQuote),
                              (i = o.services),
                              (u = o.prepend),
                              (m = o.addQuotePrices),
                              (d = u.map(function (e, t) {
                                var a = e.services.map(function (e, a) {
                                  var n = i.find(function (t) {
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
                              m(c.quoteServices)
                            )
                          case 5:
                            return (t.next = 7), l(d)
                          case 7:
                            return (t.next = 9), s(!0)
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
            Object(i.a)(a, [
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
                  return p.a.createElement(
                    "div",
                    { className: "ms-panel" },
                    p.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      p.a.createElement("h6", { className: "mb-3" }, "Generate a Quote"),
                      p.a.createElement(g.c, {
                        initialValues: (function () {
                          var e = {}
                          return (
                            a.map(function (t, a) {
                              var r = t.services
                              return r.map(function (t, o) {
                                var l = r.find(function (e) {
                                  return e.id == t.id
                                }).price
                                e = Object(n.a)(
                                  Object(n.a)({}, e),
                                  {},
                                  Object(s.a)({}, "".concat(c[a]).concat(o), l.toString())
                                )
                              })
                            }),
                            { quoteServices: Object(n.a)({}, e) }
                          )
                        })(),
                        enableReinitialize: !0,
                        render: function (t) {
                          var n = t.errors,
                            s = t.values
                          return p.a.createElement(
                            v.a,
                            {
                              noValidate: !0,
                              onSubmit: function (t) {
                                return e.openEditor(t, s, n)
                              },
                            },
                            a.map(function (e, t) {
                              var a = e.name,
                                n = e.services
                              return p.a.createElement(
                                p.a.Fragment,
                                null,
                                p.a.createElement(
                                  h.a,
                                  { className: "section mt-2 mb-1" },
                                  p.a.createElement(
                                    f.a,
                                    null,
                                    p.a.createElement("p", null, "Section ", c[t].toUpperCase(), ": ", a)
                                  )
                                ),
                                p.a.createElement(g.b, {
                                  name: "sections.".concat(t, ".services"),
                                  render: function (e) {
                                    e.remove, e.push, e.replace
                                    return p.a.createElement(
                                      p.a.Fragment,
                                      null,
                                      n.map(function (e, a) {
                                        var r = e.id,
                                          o = n.find(function (e) {
                                            return e.id == r
                                          }),
                                          s = o.name,
                                          l = o.price
                                        return p.a.createElement(
                                          h.a,
                                          { className: "service mt-2" },
                                          p.a.createElement(
                                            f.a,
                                            { lg: "9" },
                                            p.a.createElement(
                                              "p",
                                              null,
                                              "Service ",
                                              c[t].toUpperCase(),
                                              ".",
                                              a + 1,
                                              ": ",
                                              s
                                            )
                                          ),
                                          p.a.createElement(
                                            f.a,
                                            { lg: "3" },
                                            p.a.createElement(
                                              h.a,
                                              null,
                                              p.a.createElement(
                                                f.a,
                                                { lg: "9" },
                                                p.a.createElement(g.a, {
                                                  name: "quoteServices.".concat(c[t]).concat(a),
                                                  className: "form-control",
                                                  type: "text",
                                                  defaultValue: l,
                                                })
                                              ),
                                              p.a.createElement(
                                                f.a,
                                                { lg: "1", className: y.a.sign },
                                                p.a.createElement(j.n, null)
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
                            p.a.createElement(
                              h.a,
                              { className: "my-3" },
                              p.a.createElement(
                                f.a,
                                { lg: "3" },
                                p.a.createElement("p", null, "Choose quote template")
                              ),
                              p.a.createElement(
                                f.a,
                                { lg: "9" },
                                p.a.createElement(
                                  E.a,
                                  { as: "select", name: "templateName", onChange: r },
                                  o.map(function (e, t) {
                                    return p.a.createElement("option", { key: t, value: e }, e)
                                  })
                                )
                              )
                            ),
                            p.a.createElement(
                              h.a,
                              { className: "justify-content-end" },
                              p.a.createElement(
                                f.a,
                                { lg: 6 },
                                p.a.createElement(
                                  b.a,
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
        })(d.Component)
      t.a = k
    },
    196: function (e, t, a) {
      "use strict"
      var n = a(3),
        c = a.n(n),
        r = a(4),
        o = a(14),
        s = a(15),
        l = a(17),
        i = a(16),
        u = a(0),
        m = a.n(u),
        d = a(332),
        p = a(130),
        v = a(294),
        h = a(295),
        f = a(126),
        E = a(132),
        b =
          (a(236),
          (function (e) {
            Object(l.a)(a, e)
            var t = Object(i.a)(a)
            function a(e) {
              var n
              return Object(o.a)(this, a), ((n = t.call(this, e)).ckeditorTextarea = m.a.createRef()), n
            }
            return (
              Object(s.a)(a, [
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
                    return m.a.createElement(
                      "div",
                      null,
                      m.a.createElement("textarea", {
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
        N = a(33),
        O = a(24),
        S = a(54),
        x = a(37),
        w = a.n(x),
        q = (function (e) {
          Object(l.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(o.a)(this, a)
            for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l]
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = {
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
                    var n, r, o, s, l, i, u, m, d, p, v, h, f, E, b, g, j, C, y
                    return c.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.props),
                              (r = n.saveHtml),
                              (o = n.quoteName),
                              (s = n.htmltopdf),
                              (l = n.hideModal),
                              (i = n.addQuote),
                              (u = n.projectId),
                              (m = n.quotesLength),
                              (d = n.contentEditor),
                              (p = n.resetContentEditor),
                              (v = n.history),
                              (h = n.addHistory),
                              (f = n.consultantId),
                              (E = n.project.addressBook),
                              (b = E.addressName),
                              (g = E.postCode),
                              (j = E.city),
                              (C = E.country),
                              (y = e.state.pdfConvert),
                              (t.next = 5),
                              i(u.replace(/^0+/, ""), { name: o, converted: y })
                            )
                          case 5:
                            if (((t.t0 = !m), !t.t0)) {
                              t.next = 9
                              break
                            }
                            return (t.next = 9), h(u.replace(/^0+/, ""), { statusId: 2, consultantId: f })
                          case 9:
                            return (t.next = 11), r(o, d)
                          case 11:
                            if (((t.t1 = y), !t.t1)) {
                              t.next = 15
                              break
                            }
                            return (
                              (t.next = 15),
                              s(o, {
                                projectId: u,
                                quotesLength: m,
                                address: "".concat(b, ", ").concat(g, ", ").concat(j, ", ").concat(C),
                              })
                            )
                          case 15:
                            return (t.next = 17), l(!1)
                          case 17:
                            return (t.next = 19), p()
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
            Object(s.a)(a, [
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
                    s = a.addContentEditor,
                    l = a.projectId,
                    i = a.prices,
                    u = a.project.addressBook,
                    m = u.addressName,
                    d = u.postCode,
                    p = u.city,
                    v = u.country,
                    h = '<div class="head">\n                    <p>'
                      .concat(w()(new Date()).format("D MMMM YYYY"), "</p>\n                    <p>Ref: ")
                      .concat(l, ".")
                      .concat(w()(new Date()).format("YYMMDD"), ".Q")
                      .concat(
                        r + 1,
                        "</p>\n                    <p>John Doe</p>\n                    <p>KP Acoustics Ltd.</p>\n                    <p>By email to:</p>\n                    <p>Dear</p>\n                    <h2>"
                      )
                      .concat(l, ': <a class="address">')
                      .concat(m, ", ")
                      .concat(d, ", ")
                      .concat(p, ", ")
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
                    E = '<div class="quote-price">'.concat(
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
                                    .concat(i["a".concat(t)], " (+VAT)</strong> </td></tr>")
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
                        .replace('<div class="quote-price"></div>', E),
                    }),
                      s(
                        e
                          .replace('<div class="quote-block"></div>', f)
                          .replace('<div class="head"></div>', h)
                          .replace('<div class="quote-price"></div>', E)
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
                  return m.a.createElement(
                    d.a,
                    { show: c && t, onHide: r, className: "editor", centered: !0, size: "xl" },
                    m.a.createElement(
                      p.a,
                      { noValidate: !0, onSubmit: this.onSave },
                      m.a.createElement(
                        d.a.Header,
                        { className: "bg-primary", closeButton: !0 },
                        m.a.createElement("h5", { className: "modal-title has-icon text-white" }, "Editor")
                      ),
                      m.a.createElement(v.a, null, m.a.createElement(b, { data: t, addContentEditor: o })),
                      m.a.createElement(
                        h.a,
                        null,
                        m.a.createElement(E.a, {
                          name: "pdfConvert",
                          value: a,
                          label: "Convert it to PDF?",
                          onChange: this.onChange,
                        }),
                        m.a.createElement(
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
                        m.a.createElement(
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
              createdQuote: Object(S.b)(e),
              contentEditor: Object(S.a)(e),
              project: Object(O.c)(e, t.projectId),
              prices: Object(S.c)(e),
              consultantId: Object(k.d)(e),
            }
          },
          {
            getGeneratedQuote: y.g,
            resetGeneratedQuote: y.p,
            getContentEditor: y.f,
            addContentEditor: y.a,
            resetContentEditor: y.o,
            getProjects: N.e,
            getQuotePrices: y.i,
          }
        )
      )(q)
    },
    330: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(20),
        c = a(10),
        r = a(14),
        o = a(15),
        s = a(17),
        l = a(16),
        i = a(0),
        u = a.n(i),
        m = a(66),
        d = a(44),
        p = a(130),
        v = a(50),
        h = a(51),
        f = a(126),
        E = a(30),
        b = a(131),
        g = a(13),
        j = a(53),
        C = a(33),
        y = a(54),
        k = a(23),
        N = a(34),
        O = a(38),
        S = a(40),
        x = a(190),
        w = a(56),
        q = a.n(w),
        M = a(196),
        Q = a(320),
        D = a(37),
        T = a.n(D),
        I = (function (e) {
          Object(s.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(r.a)(this, a)
            for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l]
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = {
                alphabet: Object(c.a)(Array(26)).map(function (e, t) {
                  return String.fromCharCode(t + 97)
                }),
                prepend: {},
                quoteName: ""
                  .concat(e.props.computedMatch.params.id, ".")
                  .concat(T()(new Date()).format("YYMMDD"), ".Q")
                  .concat(e.props.quotes.length + 1),
                templateName: "QuoteTemplateOne",
                isModalOpen: !1,
                sections: [{ name: "Scope of work", price: null, statusId: 1, services: [{ id: null }] }],
              }),
              (e.onPrepend = function (t, a, n) {
                t.preventDefault(),
                  !Object.keys(n).length && a.sections[0].services[0].id && e.setState({ prepend: a.sections })
              }),
              (e.onChange = function (t) {
                e.setState(Object(n.a)({}, t.target.name, t.target.value))
              }),
              (e.toggleModal = function (t) {
                e.setState({ isModalOpen: t })
              }),
              e
            )
          }
          return (
            Object(o.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getQuotes(), this.props.getServices()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = (t.error, t.loading),
                    n = t.quotes,
                    c = t.servicesExercises,
                    r = t.getTemplates,
                    o = t.getHtml,
                    s = t.addHistory,
                    l = t.addQuote,
                    g = t.computedMatch,
                    j = t.addGeneratedQuote,
                    C = t.addQuotePrices,
                    y = this.state,
                    w = y.isModalOpen,
                    D = (y.sections, y.alphabet),
                    T = y.prepend,
                    I = y.quoteName,
                    P = y.templateName
                  return a
                    ? u.a.createElement(N.a, null)
                    : u.a.createElement(
                        "section",
                        { className: "main" },
                        u.a.createElement(
                          m.a,
                          null,
                          u.a.createElement(d.a, null, u.a.createElement(O.a, null)),
                          u.a.createElement(
                            d.a,
                            { lg: "11", className: "container-left" },
                            u.a.createElement(S.a, null),
                            u.a.createElement(
                              m.a,
                              null,
                              u.a.createElement(
                                d.a,
                                null,
                                u.a.createElement(
                                  "div",
                                  { className: "ms-panel" },
                                  u.a.createElement(
                                    "div",
                                    { className: "ms-panel-body" },
                                    u.a.createElement("h6", null, "Create a Quote"),
                                    u.a.createElement(b.c, {
                                      initialValues: this.state,
                                      validationSchema: Q.c().shape({
                                        sections: Q.a().of(
                                          Q.c().shape({
                                            name: Q.d().required("Section name is required"),
                                            services: Q.a().of(Q.c().shape({ id: Q.b().required("Id is required") })),
                                          })
                                        ),
                                      }),
                                      render: function (t) {
                                        var a = t.errors,
                                          n = t.values
                                        return u.a.createElement(
                                          p.a,
                                          {
                                            noValidate: !0,
                                            className: q.a.form,
                                            onSubmit: function (t) {
                                              return e.onPrepend(t, n, a)
                                            },
                                          },
                                          u.a.createElement(b.b, {
                                            name: "sections",
                                            render: function (e) {
                                              var t = e.remove,
                                                r = e.push
                                              return u.a.createElement(
                                                u.a.Fragment,
                                                null,
                                                n.sections.length > 0 &&
                                                  n.sections.map(function (e, n) {
                                                    return u.a.createElement(
                                                      i.Fragment,
                                                      { key: n },
                                                      u.a.createElement(
                                                        v.a,
                                                        { as: m.a },
                                                        u.a.createElement(
                                                          d.a,
                                                          { lg: 10 },
                                                          u.a.createElement(
                                                            m.a,
                                                            null,
                                                            u.a.createElement(
                                                              h.a,
                                                              { column: !0, lg: "2" },
                                                              "Section ",
                                                              D[n].toUpperCase()
                                                            ),
                                                            u.a.createElement(
                                                              d.a,
                                                              { lg: "10" },
                                                              u.a.createElement(b.a, {
                                                                type: "text",
                                                                placeholder: "Post-tender acoustic monitoring",
                                                                className: "form-control ".concat(
                                                                  a.sections && a.sections[n] && a.sections[n].name
                                                                    ? "is-invalid"
                                                                    : ""
                                                                ),
                                                                name: "sections.".concat(n, ".name"),
                                                              })
                                                            )
                                                          )
                                                        ),
                                                        u.a.createElement(
                                                          d.a,
                                                          { lg: 2 },
                                                          0 === n
                                                            ? u.a.createElement(
                                                                f.a,
                                                                {
                                                                  onClick: function () {
                                                                    return r({
                                                                      name: "",
                                                                      price: null,
                                                                      statusId: 1,
                                                                      services: [{ id: null }],
                                                                    })
                                                                  },
                                                                  className: "btn btn-success mt-0 w-100",
                                                                  name: "button",
                                                                },
                                                                u.a.createElement(E.m, null)
                                                              )
                                                            : u.a.createElement(
                                                                f.a,
                                                                {
                                                                  onClick: function () {
                                                                    return t(n)
                                                                  },
                                                                  className: "btn btn-danger mt-0 w-100",
                                                                  name: "button",
                                                                },
                                                                u.a.createElement(E.s, null)
                                                              )
                                                        )
                                                      ),
                                                      u.a.createElement(b.b, {
                                                        name: "sections.".concat(n, ".services"),
                                                        render: function (t) {
                                                          var r = t.remove,
                                                            o = t.push
                                                          t.replace
                                                          return u.a.createElement(
                                                            u.a.Fragment,
                                                            null,
                                                            e.services.length > 0 &&
                                                              e.services.map(function (e, t) {
                                                                return u.a.createElement(
                                                                  i.Fragment,
                                                                  { key: t },
                                                                  u.a.createElement(
                                                                    v.a,
                                                                    { as: m.a },
                                                                    u.a.createElement(
                                                                      d.a,
                                                                      { lg: 10 },
                                                                      u.a.createElement(
                                                                        m.a,
                                                                        null,
                                                                        u.a.createElement(
                                                                          h.a,
                                                                          { column: !0, lg: "2" },
                                                                          "Service ",
                                                                          D[n].toUpperCase(),
                                                                          ".",
                                                                          t + 1
                                                                        ),
                                                                        u.a.createElement(
                                                                          d.a,
                                                                          { lg: "10" },
                                                                          u.a.createElement(
                                                                            b.a,
                                                                            {
                                                                              as: "select",
                                                                              name: "sections."
                                                                                .concat(n, ".services.")
                                                                                .concat(t, ".id"),
                                                                              className: "form-control ".concat(
                                                                                a.sections &&
                                                                                  a.sections[n] &&
                                                                                  a.sections[n].services &&
                                                                                  a.sections[n].services[t]
                                                                                  ? "is-invalid"
                                                                                  : ""
                                                                              ),
                                                                            },
                                                                            u.a.createElement(
                                                                              "option",
                                                                              null,
                                                                              "Select Service"
                                                                            ),
                                                                            c.map(function (e) {
                                                                              return u.a.createElement(
                                                                                "option",
                                                                                { key: e.id, value: e.id },
                                                                                e.name,
                                                                                " ",
                                                                                e.price,
                                                                                " \xa3"
                                                                              )
                                                                            })
                                                                          )
                                                                        )
                                                                      )
                                                                    ),
                                                                    u.a.createElement(
                                                                      d.a,
                                                                      { lg: 2 },
                                                                      0 === t
                                                                        ? u.a.createElement(
                                                                            f.a,
                                                                            {
                                                                              onClick: function () {
                                                                                return o({ id: null })
                                                                              },
                                                                              className: "btn btn-success mt-0 w-100",
                                                                              name: "button",
                                                                            },
                                                                            u.a.createElement(E.m, null)
                                                                          )
                                                                        : u.a.createElement(
                                                                            f.a,
                                                                            {
                                                                              onClick: function () {
                                                                                return r(t)
                                                                              },
                                                                              className: "btn btn-danger mt-0 w-100",
                                                                              name: "button",
                                                                            },
                                                                            u.a.createElement(E.s, null)
                                                                          )
                                                                    )
                                                                  )
                                                                )
                                                              })
                                                          )
                                                        },
                                                      })
                                                    )
                                                  })
                                              )
                                            },
                                          }),
                                          u.a.createElement(
                                            m.a,
                                            { className: "justify-content-end" },
                                            u.a.createElement(
                                              d.a,
                                              { lg: 9 },
                                              u.a.createElement(
                                                f.a,
                                                { variant: "primary", type: "submit", className: "w-25 float-right" },
                                                "Create/Update"
                                              )
                                            )
                                          )
                                        )
                                      },
                                    })
                                  )
                                )
                              ),
                              u.a.createElement(
                                d.a,
                                null,
                                Object.keys(T).length
                                  ? u.a.createElement(x.a, {
                                      alphabet: D,
                                      prepend: T,
                                      quoteTemplates: r,
                                      services: c,
                                      toggleModal: this.toggleModal,
                                      quoteName: I,
                                      onChange: this.onChange,
                                      addGeneratedQuote: j,
                                      addQuotePrices: C,
                                    })
                                  : null
                              )
                            )
                          )
                        ),
                        w &&
                          u.a.createElement(M.a, {
                            hideModal: this.toggleModal,
                            isModalOpen: w,
                            saveHtml: k.o,
                            getHtml: o,
                            htmltopdf: k.i,
                            addHistory: s,
                            alphabet: D,
                            addQuote: l,
                            quoteName: I,
                            templateName: P,
                            projectId: g.params.id,
                            quotesLength: n.length,
                          })
                      )
                },
              },
            ]),
            a
          )
        })(i.Component)
      t.default = Object(g.b)(
        function (e) {
          return {
            quotes: Object(y.d)(e),
            loading: Object(y.f)(e),
            error: Object(y.h)(e),
            servicesExercises: Object(y.e)(e),
          }
        },
        {
          getQuotes: j.j,
          getServices: j.k,
          getTemplates: j.l,
          getHtml: j.h,
          addHistory: C.b,
          addQuote: j.c,
          addGeneratedQuote: j.b,
          addQuotePrices: j.d,
        }
      )(I)
    },
  },
])
//# sourceMappingURL=14.4c317848.chunk.js.map
