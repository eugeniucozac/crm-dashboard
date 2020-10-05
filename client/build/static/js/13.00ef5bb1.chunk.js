;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [13],
  {
    134: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return s
      })
      var n = a(0),
        l = a.n(n),
        r = a(332),
        c = a(294),
        o = a(126),
        s = function (e) {
          var t = e.id,
            a = e.hideModal,
            n = e.isModalOpen,
            s = e.deleteState,
            i = e.currentUser
          return l.a.createElement(
            r.a,
            { show: n === t, onHide: a, centered: !0 },
            l.a.createElement(
              c.a,
              { className: "swal2-header" },
              l.a.createElement(
                "div",
                { className: "swal2-icon swal2-warning swal2-animate-warning-icon" },
                l.a.createElement("span", { className: "swal2-icon-text" }, "!")
              ),
              l.a.createElement(
                "h2",
                { className: "swal2-title", id: "swal2-title" },
                i === t ? "You cannot Delete yourself" : "Are you sure?"
              ),
              i !== t && l.a.createElement("div", { id: "swal2-content" }, "You won't be able to revert this!"),
              l.a.createElement(
                "div",
                { className: "swal2-actions" },
                i !== t &&
                  l.a.createElement(
                    o.a,
                    { variant: "primary", className: "swal2-confirm swal2-styled", onClick: s },
                    "Yes, delete it!"
                  ),
                l.a.createElement(
                  o.a,
                  {
                    variant: "secondary",
                    className: "swal2-cancel swal2-styled",
                    onClick: function () {
                      return a(null)
                    },
                  },
                  "Cancel"
                )
              )
            )
          )
        }
    },
    319: function (e, t, a) {
      e.exports = { column: "Filter_column__16h68" }
    },
    341: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(20),
        l = a(14),
        r = a(15),
        c = a(17),
        o = a(16),
        s = a(0),
        i = a.n(s),
        m = a(66),
        u = a(44),
        d = a(38),
        E = a(130),
        h = a(52),
        v = a(30),
        p = a(319),
        b = a.n(p),
        f = function (e) {
          var t = e.onChange
          return i.a.createElement(
            m.a,
            { className: "justify-content-end" },
            i.a.createElement(
              E.a,
              { as: u.a, md: "3" },
              i.a.createElement(
                "div",
                { className: b.a.column },
                i.a.createElement(h.a, {
                  type: "text",
                  name: "query",
                  placeholder: "Find Project By: ID, Address, Post Code, Email",
                  onChange: t,
                }),
                i.a.createElement(v.q, null)
              )
            )
          )
        },
        y = a(13),
        j = a(33),
        g = a(24),
        w = a(134),
        N = a(34),
        C = a(8),
        M = a(37),
        O = a.n(M),
        k = a(129),
        D = a(126),
        A = (function (e) {
          Object(c.a)(a, e)
          var t = Object(o.a)(a)
          function a() {
            var e
            Object(l.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { isModalOpen: !1 }),
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
                  this.props.getProjects()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.isModalOpen,
                    a = this.props,
                    n = a.projects
                  return a.loading
                    ? i.a.createElement(N.a, null)
                    : n.length
                    ? i.a.createElement(
                        k.a,
                        { striped: !0, bordered: !0, hover: !0 },
                        i.a.createElement(
                          "thead",
                          null,
                          i.a.createElement(
                            "tr",
                            null,
                            i.a.createElement("th", null, "Job ID"),
                            i.a.createElement("th", null, "Job Name"),
                            i.a.createElement("th", null, "Created"),
                            i.a.createElement("th", null, "Job Status"),
                            i.a.createElement("th", null, "Consultant"),
                            i.a.createElement("th", null, "Edit"),
                            i.a.createElement("th", null, "Delete ?")
                          )
                        ),
                        i.a.createElement(
                          "tbody",
                          null,
                          n.map(function (a) {
                            var n = a.id,
                              l = a.createdAt,
                              r = a.history,
                              c = a.consultant,
                              o = c.firstName,
                              s = c.lastName,
                              m = a.addressBook,
                              u = m.addressName,
                              d = m.postCode,
                              E = m.city,
                              h = m.country
                            return i.a.createElement(
                              "tr",
                              { key: n },
                              i.a.createElement(
                                "td",
                                null,
                                i.a.createElement(C.b, { to: "/dashboard/project/".concat(n) }, " ", n)
                              ),
                              i.a.createElement("td", null, u, ",\xa0", d, ",\xa0", E, ",\xa0", h),
                              i.a.createElement("td", null, O()(l).format("DD-MM-YYYY")),
                              i.a.createElement("td", null, r[0].status.name),
                              i.a.createElement("td", null, o.charAt(0), " ", s.charAt(0)),
                              i.a.createElement(
                                "td",
                                null,
                                i.a.createElement(
                                  C.b,
                                  { className: "btn btn-primary mt-0", to: "/dashboard/project/".concat(n, "/edit") },
                                  "Edit Item"
                                )
                              ),
                              i.a.createElement(
                                "td",
                                null,
                                i.a.createElement(
                                  D.a,
                                  {
                                    id: n,
                                    variant: "primary",
                                    onClick: function () {
                                      e.toggleModal(n)
                                    },
                                  },
                                  "Delete Item"
                                ),
                                i.a.createElement(w.a, {
                                  id: n,
                                  hideModal: e.toggleModal,
                                  deleteState: function () {
                                    return Object(j.f)(n)
                                  },
                                  isModalOpen: t,
                                })
                              )
                            )
                          })
                        )
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(s.Component),
        P = Object(y.b)(
          function (e, t) {
            return { projects: Object(g.d)(e, t.query), loading: Object(g.h)(e), error: Object(g.j)(e) }
          },
          { getProjects: j.e, removeProject: j.f }
        )(A),
        Y = (function (e) {
          Object(c.a)(a, e)
          var t = Object(o.a)(a)
          function a() {
            var e
            Object(l.a)(this, a)
            for (var r = arguments.length, c = new Array(r), o = 0; o < r; o++) c[o] = arguments[o]
            return (
              ((e = t.call.apply(t, [this].concat(c))).state = {
                loading: !0,
                currentProject: null,
                isModalOpen: !1,
                query: "",
              }),
              (e.onChange = function (t) {
                e.setState(Object(n.a)({}, t.target.name, t.target.value))
              }),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state.query
                  return i.a.createElement(
                    "section",
                    { className: "main" },
                    i.a.createElement(
                      m.a,
                      null,
                      i.a.createElement(u.a, null, i.a.createElement(d.a, null)),
                      i.a.createElement(
                        u.a,
                        { lg: "11", className: "container-left" },
                        i.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          i.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            i.a.createElement("h6", null, "Projects")
                          ),
                          i.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            i.a.createElement(
                              i.a.Fragment,
                              null,
                              i.a.createElement(f, { onChange: this.onChange }),
                              i.a.createElement(P, { query: e })
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
        })(s.Component)
      t.default = Y
    },
  },
])
//# sourceMappingURL=13.00ef5bb1.chunk.js.map
