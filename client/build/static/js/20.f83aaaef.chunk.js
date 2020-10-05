;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [20],
  {
    338: function (e, a, t) {
      "use strict"
      t.r(a)
      var n = t(14),
        r = t(15),
        l = t(17),
        o = t(16),
        s = t(0),
        c = t.n(s),
        m = t(129),
        u = t(66),
        i = t(44),
        d = t(13),
        p = t(47),
        h = t(46),
        b = t(22),
        E = t(3),
        f = t.n(E),
        v = t(2),
        N = t(4),
        g = t(20),
        C = t(52),
        w = t(126),
        j = (function (e) {
          Object(l.a)(t, e)
          var a = Object(o.a)(t)
          function t() {
            return Object(n.a)(this, t), a.apply(this, arguments)
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getRoles()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    a = e.roleId,
                    t = e.roles,
                    n = e.changeRole
                  return t.length
                    ? c.a.createElement(
                        C.a,
                        { as: "select", name: "roleId", onChange: n, defaultValue: a },
                        t.map(function (e) {
                          var a = e.id,
                            t = e.name
                          return c.a.createElement("option", { key: a, value: a }, t)
                        })
                      )
                    : null
                },
              },
            ]),
            t
          )
        })(s.Component),
        O = Object(d.b)(
          function (e) {
            return { roles: Object(h.d)(e) }
          },
          { getRoles: p.c }
        )(j),
        y = t(134),
        k = (function (e) {
          Object(l.a)(t, e)
          var a = Object(o.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++) l[o] = arguments[o]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = { password: "", roleId: "", isModalOpen: null }),
              (e.onChange = function (a) {
                e.setState(Object(g.a)({}, a.target.name, a.target.value))
              }),
              (e.toggleModal = function (a) {
                e.setState({ isModalOpen: a })
              }),
              (e.updateConsultant = (function () {
                var a = Object(N.a)(
                  f.a.mark(function a(t, n) {
                    var r, l, o, s, c, m, u
                    return f.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (r = {}),
                              (l = e.state),
                              (o = l.password),
                              (s = l.roleId),
                              (c = e.props),
                              (m = c.consultant),
                              (u = c.updateConsultant),
                              m.id === t &&
                                ("" !== s && (r = Object(v.a)(Object(v.a)({}, r), {}, { roleId: s })),
                                "" !== o && (r = Object(v.a)(Object(v.a)({}, r), {}, { password: o, password2: o }))),
                              (a.next = 7),
                              u(t, r)
                            )
                          case 7:
                            e.setState({ password: "" })
                          case 8:
                          case "end":
                            return a.stop()
                        }
                    }, a)
                  })
                )
                return function (e, t) {
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
                    a = this.state.isModalOpen,
                    t = this.props,
                    n = t.consultant,
                    r = n.id,
                    l = n.firstName,
                    o = n.lastName,
                    s = n.email,
                    m = n.role,
                    u = n.telNo,
                    i = n.mobNo,
                    d = t.roleName,
                    p = t.authorizedId,
                    h = t.removeConsultant
                  return c.a.createElement(
                    c.a.Fragment,
                    null,
                    c.a.createElement(
                      "tr",
                      { key: r },
                      c.a.createElement("td", null, l),
                      c.a.createElement("td", null, o),
                      c.a.createElement("td", null, s),
                      c.a.createElement("td", null, u),
                      c.a.createElement("td", null, i),
                      "admin" === d
                        ? c.a.createElement(
                            c.a.Fragment,
                            null,
                            c.a.createElement(
                              "td",
                              null,
                              c.a.createElement(O, { key: r, roleId: m.id, changeRole: this.onChange })
                            ),
                            c.a.createElement(
                              "td",
                              null,
                              c.a.createElement(C.a, {
                                onChange: this.onChange,
                                name: "password",
                                placeholder: "New Password",
                                type: "text",
                              })
                            ),
                            c.a.createElement(
                              "td",
                              null,
                              c.a.createElement(
                                w.a,
                                {
                                  variant: "primary",
                                  onClick: function (a) {
                                    return e.updateConsultant(r, a)
                                  },
                                },
                                "Update User"
                              )
                            ),
                            c.a.createElement(
                              "td",
                              null,
                              c.a.createElement(
                                w.a,
                                {
                                  id: r,
                                  variant: "primary",
                                  onClick: function () {
                                    return e.toggleModal(r)
                                  },
                                },
                                "Remove User"
                              )
                            )
                          )
                        : c.a.createElement("td", null, m.name)
                    ),
                    c.a.createElement(y.a, {
                      id: r,
                      hideModal: this.toggleModal,
                      isModalOpen: a,
                      deleteState: function () {
                        return h(r)
                      },
                      currentUser: p,
                    })
                  )
                },
              },
            ]),
            t
          )
        })(s.Component),
        M = t(140),
        I = t(130),
        P = t(21),
        S = (function (e) {
          Object(l.a)(t, e)
          var a = Object(o.a)(t)
          function t() {
            var e
            Object(n.a)(this, t)
            for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++) l[o] = arguments[o]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                firstName: "",
                lastName: "",
                email: "",
                telNo: "",
                mobNo: "",
                password: "",
                password2: "",
                roleId: 5,
              }),
              (e.onChange = function (a) {
                e.setState(Object(g.a)({}, a.target.name, a.target.value))
              }),
              (e.onSubmit = (function () {
                var a = Object(N.a)(
                  f.a.mark(function a(t) {
                    var n, r, l, o, s, c, m, u, i, d
                    return f.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (n = e.props.addConsultant),
                              (r = e.state),
                              (l = r.firstName),
                              (o = r.lastName),
                              (s = r.email),
                              (c = r.telNo),
                              (m = r.mobNo),
                              (u = r.password),
                              (i = r.password2),
                              (d = r.roleId),
                              (a.next = 5),
                              n({
                                firstName: l,
                                lastName: o,
                                email: s,
                                telNo: c,
                                mobNo: m,
                                password: u,
                                password2: i,
                                roleId: d,
                              })
                            )
                          case 5:
                            e.setState({
                              firstName: "",
                              lastName: "",
                              email: "",
                              telNo: "",
                              mobNo: "",
                              password: "",
                              password2: "",
                            })
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
                  this.props.resetErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    a = e.firstName,
                    t = e.lastName,
                    n = e.email,
                    r = e.telNo,
                    l = e.mobNo,
                    o = e.password,
                    s = e.password2,
                    m = this.props.error
                  return c.a.createElement(
                    I.a,
                    { noValidate: !0, onSubmit: this.onSubmit },
                    c.a.createElement(P.a, {
                      name: "firstName",
                      value: a,
                      label: "First Name",
                      placeholder: "First Name",
                      onChange: this.onChange,
                      error: m && m.data.firstName,
                    }),
                    c.a.createElement(P.a, {
                      name: "lastName",
                      value: t,
                      label: "Last Name",
                      placeholder: "Last Name",
                      onChange: this.onChange,
                      error: m && m.data.lastName,
                    }),
                    c.a.createElement(P.a, {
                      type: "email",
                      name: "email",
                      value: n,
                      label: "Email Address",
                      placeholder: "Email Address",
                      onChange: this.onChange,
                      error: m && m.data.email,
                    }),
                    c.a.createElement(P.a, {
                      name: "telNo",
                      value: r,
                      label: "Phone Number",
                      placeholder: "Phone Number",
                      onChange: this.onChange,
                      error: m && m.data.telNo,
                    }),
                    c.a.createElement(P.a, {
                      name: "mobNo",
                      value: l,
                      label: "Mobile Number",
                      placeholder: "Mobile Number",
                      onChange: this.onChange,
                      error: m && m.data.mobNo,
                    }),
                    c.a.createElement(P.a, {
                      type: "password",
                      name: "password",
                      value: o,
                      label: "Password",
                      placeholder: "Password",
                      onChange: this.onChange,
                      error: m && m.data.password,
                    }),
                    c.a.createElement(P.a, {
                      type: "password",
                      name: "password2",
                      value: s,
                      label: "Confirm Password",
                      placeholder: "Confirm Password",
                      onChange: this.onChange,
                      error: m && m.data.password2,
                    }),
                    c.a.createElement(
                      u.a,
                      null,
                      c.a.createElement(
                        i.a,
                        null,
                        c.a.createElement(
                          w.a,
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
        })(s.Component),
        A = t(34),
        F = (function (e) {
          Object(l.a)(t, e)
          var a = Object(o.a)(t)
          function t() {
            return Object(n.a)(this, t), a.apply(this, arguments)
          }
          return (
            Object(r.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getConsultants()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.roleName,
                    n = a.loading,
                    r = a.consultants
                  return n
                    ? c.a.createElement(A.a, null)
                    : r.length
                    ? c.a.createElement(
                        M.a,
                        null,
                        c.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          c.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            c.a.createElement("h6", null, "Consultants")
                          ),
                          c.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            c.a.createElement(
                              m.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              c.a.createElement(
                                "thead",
                                null,
                                c.a.createElement(
                                  "tr",
                                  null,
                                  c.a.createElement("th", null, "First Name"),
                                  c.a.createElement("th", null, "Last Name"),
                                  c.a.createElement("th", null, "Email"),
                                  c.a.createElement("th", null, "Phone Number"),
                                  c.a.createElement("th", null, "Mobile Number"),
                                  c.a.createElement("th", null, "Role"),
                                  "admin" === t &&
                                    c.a.createElement(
                                      c.a.Fragment,
                                      null,
                                      c.a.createElement("th", null, "Change Password"),
                                      c.a.createElement("th", null, "Update"),
                                      c.a.createElement("th", null, "Delete?")
                                    )
                                )
                              ),
                              c.a.createElement(
                                "tbody",
                                null,
                                r
                                  .sort(function (e, a) {
                                    return e.role.id - a.role.id
                                  })
                                  .map(function (a, t) {
                                    return c.a.createElement(k, Object.assign({ key: t, consultant: a }, e.props))
                                  })
                              )
                            )
                          )
                        ),
                        "admin" === t &&
                          c.a.createElement(
                            u.a,
                            null,
                            c.a.createElement(
                              i.a,
                              { lg: "6" },
                              c.a.createElement(
                                "div",
                                { className: "ms-panel" },
                                c.a.createElement(
                                  "div",
                                  { className: "ms-panel-header" },
                                  c.a.createElement("h6", null, "Add a consultant")
                                ),
                                c.a.createElement(
                                  "div",
                                  { className: "ms-panel-body" },
                                  c.a.createElement(S, this.props)
                                )
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
        })(s.Component)
      a.default = Object(d.b)(
        function (e) {
          return {
            consultants: Object(h.b)(e),
            loading: Object(h.e)(e),
            error: Object(h.a)(e),
            roleName: Object(b.f)(e),
            authorizedId: Object(b.d)(e),
          }
        },
        { getConsultants: p.b, removeConsultant: p.d, updateConsultant: p.f, addConsultant: p.a, resetErrors: p.e }
      )(F)
    },
  },
])
//# sourceMappingURL=20.f83aaaef.chunk.js.map
