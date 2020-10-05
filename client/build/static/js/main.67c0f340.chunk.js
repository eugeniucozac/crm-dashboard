;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [6],
  {
    1: function (e, t, a) {
      "use strict"
      a.d(t, "b", function () {
        return n
      }),
        a.d(t, "d", function () {
          return r
        }),
        a.d(t, "l", function () {
          return c
        }),
        a.d(t, "h", function () {
          return o
        }),
        a.d(t, "i", function () {
          return E
        }),
        a.d(t, "e", function () {
          return u
        }),
        a.d(t, "g", function () {
          return s
        }),
        a.d(t, "c", function () {
          return i
        }),
        a.d(t, "f", function () {
          return l
        }),
        a.d(t, "j", function () {
          return S
        }),
        a.d(t, "k", function () {
          return d
        }),
        a.d(t, "a", function () {
          return _
        })
      var n = {
          CONSULTANT_LOGIN_SUCCESS: "CONSULTANT_LOGIN_SUCCESS",
          CONSULTANT_LOGIN_FAILURE: "CONSULTANT_LOGIN_FAILURE",
          CONSULTANT_LOGOUT_SUCCESS: "CONSULTANT_LOGOUT_SUCCESS",
          CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
          CHANGE_PASSWORD_FAILURE: "CHANGE_PASSWORD_FAILURE",
          SENT_PASSWORD_SUCCESS: "SENT_PASSWORD_SUCCESS",
          SENT_PASSWORD_FAILURE: "SENT_PASSWORD_FAILURE",
          RESET_TOKEN_SUCCESS: "RESET_TOKEN_SUCCESS",
          RESET_TOKEN_FAILURE: "RESET_TOKEN_FAILURE",
          RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
          RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        r = {
          GET_CONSULTANTS_REQUEST: "GET_CONSULTANTS_REQUEST",
          GET_CONSULTANTS_SUCCESS: "GET_CONSULTANTS_SUCCESS",
          GET_CONSULTANTS_FAILURE: "GET_CONSULTANTS_FAILURE",
          ADD_CONSULTANT_SUCCESS: "ADD_CONSULTANT_SUCCESS",
          ADD_CONSULTANT_FAILURE: "ADD_CONSULTANT_FAILURE",
          REMOVE_CONSULTANT_SUCCESS: "REMOVE_CONSULTANT_SUCCESS",
          REMOVE_CONSULTANT_FAILURE: "REMOVE_CONSULTANT_FAILURE",
          UPDATE_CONSULTANT_SUCCESS: "UPDATE_CONSULTANT_SUCCESS",
          UPDATE_CONSULTANT_FAILURE: "UPDATE_CONSULTANT_FAILURE",
          GET_ROLES_SUCCESS: "GET_ROLES_SUCCESS",
          GET_ROLES_FAILURE: "GET_ROLES_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        c = {
          GET_TYPES_REQUEST: "GET_TYPES_REQUEST",
          GET_TYPES_SUCCESS: "GET_TYPES_SUCCESS",
          GET_TYPES_FAILURE: "GET_TYPES_FAILURE",
          ADD_TYPE_SUCCESS: " ADD_TYPE_SUCCESS",
          ADD_TYPE_FAILURE: "ADD_TYPE_FAILURE",
          REMOVE_TYPE_SUCCESS: "REMOVE_TYPE_SUCCESS",
          REMOVE_TYPE_FAILURE: "REMOVE_TYPE_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        o = {
          GET_MANUFACTURES_REQUEST: "GET_MANUFACTURES_REQUEST",
          GET_MANUFACTURES_SUCCESS: "GET_MANUFACTURES_SUCCESS",
          GET_MANUFACTURES_FAILURE: "GET_MANUFACTURES_FAILURE",
          ADD_MANUFACTURE_SUCCESS: "ADD_MANUFACTURE_SUCCESS",
          ADD_MANUFACTURE_FAILURE: "ADD_MANUFACTURE_FAILURE",
          REMOVE_MANUFACTURE_SUCCESS: "REMOVE_MANUFACTURE_SUCCESS",
          REMOVE_MANUFACTURE_FAILURE: "REMOVE_MANUFACTURE_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        E = {
          GET_MODELS_REQUEST: "GET_MODELS_REQUEST",
          GET_MODELS_SUCCESS: "GET_MODELS_SUCCESS",
          GET_MODELS_FAILURE: "GET_MODELS_FAILURE",
          ADD_MODEL_SUCCESS: "ADD_MODEL_SUCCESS",
          ADD_MODEL_FAILURE: "ADD_MODEL_FAILURE",
          REMOVE_MODEL_SUCCESS: "REMOVE_MODEL_SUCCESS",
          REMOVE_MODEL_FAILURE: "REMOVE_MODEL_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        u = {
          GET_HARDWARES_REQUEST: "GET_HARDWARES_REQUEST",
          GET_HARDWARES_SUCCESS: "GET_HARDWARES_SUCCESS",
          GET_HARDWARES_FAILURE: "GET_HARDWARES_FAILURE",
          ADD_HARDWARE_SUCCESS: "ADD_HARDWARE_SUCCESS",
          ADD_HARDWARE_FAILURE: "ADD_HARDWARE_FAILURE",
          REMOVE_HARDWARE_SUCCESS: "REMOVE_HARDWARE_SUCCESS",
          REMOVE_HARDWARE_FAILURE: "REMOVE_HARDWARE_FAILURE",
          UPDATE_HARDWARE_SUCCESS: "UPDATE_HARDWARE_SUCCESS",
          UPDATE_HARDWARE_FAILURE: "UPDATE_HARDWARE_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        s = {
          GET_KITS_REQUEST: "GET_KITS_REQUEST",
          GET_KITS_SUCCESS: "GET_KITS_SUCCESS",
          GET_KITS_FAILURE: "GET_KITS_FAILURE",
          ADD_KIT_SUCCESS: "ADD_KIT_SUCCESS",
          ADD_KIT_FAILURE: "ADD_KIT_FAILURE",
          REMOVE_KIT_SUCCESS: "REMOVE_KIT_SUCCESS",
          REMOVE_KIT_FAILURE: "REMOVE_KIT_FAILURE",
          UPDATE_KIT_SUCCESS: "UPDATE_KIT_SUCCESS",
          UPDATE_KIT_FAILURE: "UPDATE_KIT_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        i = {
          SEND_NOTIFICATION_SUCCESS: "SEND_NOTIFICATION_SUCCESS",
          SEND_NOTIFICATION_FAILURE: "SEND_NOTIFICATION_FAILURE",
        },
        l = {
          GET_ISSUES_REQUEST: "GET_ISSUES_REQUEST",
          GET_ISSUES_SUCCESS: "GET_ISSUES_SUCCESS",
          GET_ISSUES_FAILURE: "GET_ISSUES_FAILURE",
          ADD_ISSUE_SUCCESS: "ADD_ISSUE_SUCCESS",
          ADD_ISSUE_FAILURE: "ADD_ISSUE_FAILURE",
          CHANGE_STATUS_SUCCESS: "CHANGE_STATUS_SUCCESS",
          CHANGE_STATUS_FAILURE: "CHANGE_STATUS_FAILURE",
          GET_MESSAGES_REQUEST: "GET_MESSAGES_REQUEST",
          GET_MESSAGES_SUCCESS: "GET_MESSAGES_SUCCESS",
          GET_MESSAGES_FAILURE: "GET_MESSAGES_FAILURE",
          ADD_MESSAGE_SUCCESS: "ADD_MESSAGE_SUCCESS",
          ADD_MESSAGE_FAILURE: "ADD_MESSAGE_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        S = {
          GET_PROJECTS_REQUEST: "GET_PROJECTS_REQUEST",
          GET_PROJECTS_SUCCESS: "GET_PROJECTS_SUCCESS",
          GET_PROJECTS_FAILURE: "GET_PROJECTS_FAILURE",
          ADD_PROJECT_SUCCESS: "ADD_PROJECT_SUCCESS",
          ADD_PROJECT_FAILURE: "ADD_PROJECT_FAILURE",
          UPDATE_PROJECT_SUCCESS: "UPDATE_PROJECT_SUCCESS",
          UPDATE_PROJECT_FAILURE: "UPDATE_PROJECT_FAILURE",
          REMOVE_PROJECT_SUCCESS: "REMOVE_PROJECT_SUCCESS",
          REMOVE_PROJECT_FAILURE: "REMOVE_PROJECT_FAILURE",
          GET_COMMENTS_REQUEST: "GET_COMMENTS_REQUEST",
          GET_COMMENTS_SUCCESS: "GET_COMMENTS_SUCCESS",
          GET_COMMENTS_FAILURE: "GET_COMMENTS_FAILURE",
          ADD_COMMENT_SUCCESS: "ADD_COMMENT_SUCCESS",
          ADD_COMMENT_FAILURE: "ADD_COMMENT_FAILURE",
          REMOVE_COMMENT_SUCCESS: "REMOVE_COMMENT_SUCCESS",
          REMOVE_COMMENT_FAILURE: "REMOVE_COMMENT_FAILURE",
          GET_SITES_REQUEST: "GET_SITES_REQUEST",
          GET_SITES_SUCCESS: "GET_SITES_SUCCESS",
          GET_SITES_FAILURE: "GET_SITES_FAILURE",
          ADD_SITE_SUCCESS: "ADD_SITE_SUCCESS",
          ADD_SITE_FAILURE: "ADD_SITE_FAILURE",
          REMOVE_SITE_SUCCESS: "REMOVE_SITE_SUCCESS",
          REMOVE_SITE_FAILURE: "REMOVE_SITE_FAILURE",
          GET_PROJECT_HISTORY_REQUEST: "GET_PROJECT_HISTORY_REQUEST",
          GET_PROJECT_HISTORY_SUCCESS: "GET_PROJECT_HISTORY_SUCCESS",
          GET_PROJECT_HISTORY_FAILURE: "GET_PROJECT_HISTORY_FAILURE",
          POST_PROJECT_HISTORY_REQUEST: "POST_PROJECT_HISTORY_REQUEST",
          POST_PROJECT_HISTORY_SUCCESS: "POST_PROJECT_HISTORY_SUCCESS",
          POST_PROJECT_HISTORY_FAILURE: "POST_PROJECT_HISTORY_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        d = {
          GET_QUOTES_REQUEST: "GET_QUOTES_REQUEST",
          GET_QUOTES_SUCCESS: "GET_QUOTES_SUCCESS",
          GET_QUOTES_FAILURE: "GET_QUOTES_FAILURE",
          ADD_QUOTE_SUCCESS: "ADD_QUOTE_SUCCESS",
          ADD_QUOTE_FAILURE: "ADD_QUOTE_FAILURE",
          REMOVE_QUOTE_SUCCESS: "REMOVE_QUOTE_SUCCESS",
          REMOVE_QUOTE_FAILURE: "REMOVE_QUOTE_FAILURE",
          GET_SECTIONS_REQUEST: "GET_SECTIONS_REQUEST",
          GET_SECTIONS_SUCCESS: "GET_SECTIONS_SUCCESS",
          GET_SECTIONS_FAILURE: "GET_SECTIONS_FAILURE",
          ADD_SECTION_SUCCESS: "ADD_SECTION_SUCCESS",
          ADD_SECTION_FAILURE: "ADD_SECTION_FAILURE",
          REMOVE_SECTION_SUCCESS: "REMOVE_SECTION_SUCCESS",
          REMOVE_SECTION_FAILURE: "REMOVE_SECTION_FAILURE",
          GET_EXERCISES_REQUEST: "GET_EXERCISES_REQUEST",
          GET_EXERCISES_SUCCESS: "GET_EXERCISES_SUCCESS",
          GET_EXERCISES_FAILURE: "GET_EXERCISES_FAILURE",
          ADD_EXERCISE_SUCCESS: "ADD_EXERCISE_SUCCESS",
          ADD_EXERCISE_FAILURE: "ADD_EXERCISE_FAILURE",
          REMOVE_EXERCISE_SUCCESS: "REMOVE_EXERCISE_SUCCESS",
          REMOVE_EXERCISE_FAILURE: "REMOVE_EXERCISE_FAILURE",
          GET_SERVICEPRICES_REQUEST: "GET_SERVICEPRICES_REQUEST",
          GET_SERVICEPRICES_SUCCESS: "GET_SERVICEPRICES_SUCCESS",
          GET_SERVICEPRICES_FAILURE: "GET_SERVICEPRICES_FAILURE",
          ADD_SERVICEPRICE_SUCCESS: "ADD_SERVICEPRICE_SUCCESS",
          ADD_SERVICEPRICE_FAILURE: "ADD_SERVICEPRICE_FAILURE",
          REMOVE_SERVICEPRICE_SUCCESS: "REMOVE_SERVICEPRICE_SUCCESS",
          REMOVE_SERVICEPRICE_FAILURE: "REMOVE_SERVICEPRICE_FAILURE",
          UPDATE_SERVICEPRICE_SUCCESS: "UPDATE_SERVICEPRICE_SUCCESS",
          UPDATE_SERVICEPRICE_FAILURE: "UPDATE_SERVICEPRICE_FAILURE",
          ADD_GENERATED_QUOTE: "ADD_GENERATED_QUOTE",
          GET_GENERATED_QUOTE: "GET_GENERATED_QUOTE",
          RESET_GENERATED_QUOTE: "RESET_GENERATED_QUOTE",
          ADD_CONTENT_EDITOR: "ADD_CONTENT_EDITOR",
          GET_CONTENT_EDITOR: "GET_CONTENT_EDITOR",
          ADD_QUOTE_PRICES: "ADD_QUOTE_PRICES",
          GET_QUOTE_PRICES: "GET_QUOTE_PRICES",
          RESET_QUOTE_PRICES: "RESET_QUOTE_PRICES",
          RESET_CONTENT_EDITOR: "RESET_CONTENT_EDITOR",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        },
        _ = {
          GET_ADDRESS_BOOKS_REQUEST: "GET_ADDRESS_BOOKS_REQUEST",
          GET_ADDRESS_BOOKS_SUCCESS: "GET_ADDRESS_BOOKS_SUCCESS",
          GET_ADDRESS_BOOKS_FAILURE: "GET_ADDRESS_BOOKS_FAILURE",
          ADD_ADDRESS_BOOK_SUCCESS: "ADD_ADDRESS_BOOK_SUCCESS",
          ADD_ADDRESS_BOOK_FAILURE: "ADD_ADDRESS_BOOK_FAILURE",
          UPDATE_ADDRESS_BOOK_SUCCESS: "UPDATE_ADDRESS_BOOK_SUCCESS",
          UPDATE_ADDRESS_BOOK_FAILURE: "UPDATE_ADDRESS_BOOK_FAILURE",
          REMOVE_ADDRESS_BOOK_SUCCESS: "REMOVE_ADDRESS_BOOK_SUCCESS",
          REMOVE_ADDRESS_BOOK_FAILURE: "REMOVE_ADDRESS_BOOK_FAILURE",
          GET_USERS_REQUEST: "GET_USERS_REQUEST",
          GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
          GET_USERS_FAILURE: "GET_USERS_FAILURE",
          ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
          ADD_USER_FAILURE: "ADD_USER_FAILURE",
          REMOVE_USER_SUCCESS: "REMOVE_USER_SUCCESS",
          REMOVE_USER_FAILURE: "REMOVE_USER_FAILURE",
          GET_POSITIONS_REQUEST: "GET_POSITIONS_REQUEST",
          GET_POSITIONS_SUCCESS: "GET_POSITIONS_SUCCESS",
          GET_POSITIONS_FAILURE: "GET_POSITIONS_FAILURE",
          ADD_POSITION_SUCCESS: "ADD_POSITION_SUCCESS",
          ADD_POSITION_FAILURE: "ADD_POSITION_FAILURE",
          RESET_ERRORS_SUCCESS: "RESET_ERRORS_SUCCESS",
        }
    },
    12: function (e, t, a) {
      e.exports = {
        form: "Projects_form__J9hPa",
        href: "Projects_href__2CXdc",
        header: "Projects_header__3qByy",
        headermini: "Projects_headermini__1WMh2",
        invoiceaddress: "Projects_invoiceaddress__26nGD",
        byconsultant: "Projects_byconsultant__26O-p",
        categoriesconsultants: "Projects_categoriesconsultants__2efzk",
        barier: "Projects_barier__16e5M",
        user: "Projects_user__mMOAj",
        row: "Projects_row__3V_05",
        btn: "Projects_btn__22x78",
        mschatimg: "Projects_mschatimg__2nKcO",
        mschattime: "Projects_mschattime__3KQOF",
        mschattext: "Projects_mschattext__DZl1J",
        msimground: "Projects_msimground__GeULY",
        messages: "Projects_messages__X51aX",
      }
    },
    122: function (e, t, a) {},
    123: function (e, t, a) {},
    124: function (e, t, a) {},
    125: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(0),
        r = a.n(n),
        c = a(48),
        o = a(13),
        E = a(8),
        u = a(14),
        s = a(15),
        i = a(17),
        l = a(16),
        S = a(18),
        d = a(28),
        _ = a(3),
        p = a.n(_),
        m = a(4),
        O = a(20),
        C = a(130),
        f = a(51),
        R = a(126),
        A = a(22),
        T = a(21),
        b = a(32),
        U = a(66),
        h = a(44),
        j = a(128),
        I = a(82),
        v = a.n(I),
        D = a(127),
        y = a(83),
        N = a.n(y),
        g = a(62),
        L = a.n(g),
        P = Object(o.b)(
          function (e) {
            return { isAuthorized: Object(A.g)(e) }
          },
          { logout: d.e }
        )(function (e) {
          var t = e.isAuthorized,
            a = e.logout
          return r.a.createElement(
            "header",
            { className: L.a.header },
            r.a.createElement(
              D.a,
              { fluid: !0 },
              r.a.createElement(
                U.a,
                null,
                r.a.createElement(
                  h.a,
                  null,
                  r.a.createElement(
                    "h1",
                    null,
                    r.a.createElement(E.b, { to: "/" }, r.a.createElement(j.a, { src: N.a }))
                  )
                ),
                r.a.createElement(
                  h.a,
                  null,
                  t && r.a.createElement(R.a, { variant: "primary", className: L.a.logout, onClick: a }, "Logout")
                )
              )
            )
          )
        }),
        G = a(36),
        w = a.n(G),
        k = function (e) {
          var t = e.children
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(P, null),
            r.a.createElement(
              "section",
              { className: w.a.authorization },
              r.a.createElement(
                U.a,
                null,
                r.a.createElement(h.a, null, r.a.createElement(j.a, { src: v.a, fluid: !0 })),
                r.a.createElement(h.a, null, r.a.createElement("div", { className: w.a.formWrapper }, t))
              )
            )
          )
        },
        x = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { email: "", password: "" }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
              }),
              (e.onSubmit = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r, c, o, E, u
                    return p.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                a.preventDefault(),
                                (n = e.state),
                                (r = n.email),
                                (c = n.password),
                                (o = e.props),
                                (E = o.login),
                                (u = o.history),
                                (t.prev = 3),
                                (t.next = 6),
                                E({ email: r, password: c })
                              )
                            case 6:
                              u.push("/dashboard/consultants"), (t.next = 12)
                              break
                            case 9:
                              ;(t.prev = 9), (t.t0 = t.catch(3)), console.error(t.t0)
                            case 12:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[3, 9]]
                    )
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
                key: "render",
                value: function () {
                  var e = this.props.error,
                    t = this.state,
                    a = t.email,
                    n = t.password
                  return r.a.createElement(
                    k,
                    null,
                    r.a.createElement(
                      C.a,
                      { className: w.a.form, noValidate: !0, onSubmit: this.onSubmit },
                      r.a.createElement("h2", null, "Login to Account"),
                      r.a.createElement("p", null, "Please enter your email and password to continue"),
                      r.a.createElement(T.a, {
                        type: "email",
                        name: "email",
                        value: a,
                        label: "Email Address",
                        placeholder: "Email Address",
                        onChange: this.onChange,
                        error: e && e.data.email,
                      }),
                      r.a.createElement(T.a, {
                        type: "password",
                        name: "password",
                        value: n,
                        label: "Password",
                        placeholder: "Password",
                        onChange: this.onChange,
                        error: e && e.data.password,
                      }),
                      r.a.createElement(f.a, null, r.a.createElement(E.b, { to: "/forgot" }, "Forgot Password?")),
                      r.a.createElement(R.a, { variant: "primary", type: "submit", size: "lg", block: !0 }, "Sign In")
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        F = Object(b.compose)(
          S.g,
          Object(o.b)(
            function (e) {
              return { error: Object(A.a)(e) }
            },
            { login: d.d }
          )
        )(x),
        M = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { email: "", password: "", password2: "" }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
              }),
              (e.onSubmit = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r, c, o, E, u
                    return p.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                a.preventDefault(),
                                (n = e.props),
                                (r = n.resetPassword),
                                (c = n.resetToken),
                                (o = e.state),
                                (E = o.password),
                                (u = o.password2),
                                (t.prev = 3),
                                (t.next = 6),
                                r(c, {
                                  password: E,
                                  password2: u,
                                  resetPasswordToken: null,
                                  resetPasswordExpires: null,
                                })
                              )
                            case 6:
                              t.next = 11
                              break
                            case 8:
                              ;(t.prev = 8), (t.t0 = t.catch(3)), console.error(t.t0)
                            case 11:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[3, 8]]
                    )
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
                    t = e.location
                  ;(0, e.checkToken)(t.pathname.split("/").pop(-1))
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.resetErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.error,
                    t = this.state,
                    a = t.password,
                    n = t.password2
                  return r.a.createElement(
                    k,
                    null,
                    r.a.createElement(
                      C.a,
                      { className: w.a.form, noValidate: !0, onSubmit: this.onSubmit },
                      r.a.createElement("h2", null, "Password reset"),
                      r.a.createElement("p", null, "Please enter your new password to continue"),
                      r.a.createElement(T.a, {
                        type: "password",
                        name: "password",
                        value: a,
                        label: "New Password",
                        placeholder: "New Password",
                        onChange: this.onChange,
                        error: e && e.data.password,
                      }),
                      r.a.createElement(T.a, {
                        type: "password",
                        name: "password2",
                        value: n,
                        label: "Repeat Password",
                        placeholder: "Repeat Password",
                        onChange: this.onChange,
                        error: e && e.data.password2,
                      }),
                      r.a.createElement(
                        R.a,
                        { variant: "primary", type: "submit", size: "lg", block: !0 },
                        "Change Password"
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        Q = Object(o.b)(
          function (e) {
            return { error: Object(A.a)(e), userId: Object(A.d)(e) }
          },
          { resetPassword: d.g, checkToken: d.b, resetErrors: d.f }
        )(M),
        V = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { email: "" }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
              }),
              (e.onSubmit = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r
                    return p.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.state.email),
                              (r = e.props.forgotPassword),
                              (t.next = 5),
                              r({ email: n })
                            )
                          case 5:
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
                key: "componentWillUnmount",
                value: function () {
                  this.props.resetErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.error,
                    a = e.passwordRecovery,
                    n = this.state.email
                  return r.a.createElement(
                    k,
                    null,
                    r.a.createElement(
                      C.a,
                      { className: w.a.form, noValidate: !0, onSubmit: this.onSubmit },
                      r.a.createElement("h2", null, "Password recover"),
                      a
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "p",
                              { className: "green-text text-left" },
                              "Password was send Successfully to your Email!"
                            ),
                            r.a.createElement(f.a, null, r.a.createElement(E.b, { to: "/" }, "Go to Login Page"))
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement("p", null, "Please enter your email to continue"),
                            r.a.createElement(T.a, {
                              type: "email",
                              name: "email",
                              value: n,
                              label: "Email Address",
                              placeholder: "Email Address",
                              onChange: this.onChange,
                              error: t && t.data.email,
                            }),
                            r.a.createElement(f.a, null, r.a.createElement(E.b, { to: "/" }, "Go to Home")),
                            r.a.createElement(
                              R.a,
                              { variant: "primary", type: "submit", size: "lg", block: !0 },
                              "Send Password"
                            )
                          )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        J = Object(o.b)(
          function (e) {
            return { passwordRecovery: Object(A.h)(e), error: Object(A.a)(e) }
          },
          { forgotPassword: d.c, resetErrors: d.f }
        )(V),
        K = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.authorization,
                    a = e.component
                  e.roles, e.roleName
                  return t.isAuthorized
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(P, null),
                        r.a.createElement(a, this.props)
                      )
                    : r.a.createElement(S.a, { to: "/login" })
                },
              },
            ]),
            a
          )
        })(S.b),
        H = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.component
                  if (e.authorization.isAuthorized) return r.a.createElement(S.a, { to: "/dashboard/consultants" })
                  var a = t
                  return r.a.createElement(a, this.props)
                },
              },
            ]),
            a
          )
        })(S.b),
        z = a(34),
        B = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return ((e = t.call.apply(t, [this].concat(r))).state = { roleName: "admin" }), e
          }
          return (
            Object(s.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.authorized,
                    t = this.state.roleName
                  return e
                    ? r.a.createElement(
                        n.Suspense,
                        { fallback: r.a.createElement(z.a, null) },
                        r.a.createElement(K, Object.assign({}, this.props, { roleName: t }))
                      )
                    : r.a.createElement(
                        n.Suspense,
                        { fallback: r.a.createElement(z.a, null) },
                        r.a.createElement(H, this.props)
                      )
                },
              },
            ]),
            a
          )
        })(S.b),
        Y = Object(o.b)(function (e) {
          return { authorization: Object(A.c)(e) }
        })(B),
        W = a(30),
        Z = a(45),
        X = a.n(Z),
        q = function () {
          return r.a.createElement(
            "section",
            { className: X.a.error },
            r.a.createElement(
              "div",
              { className: X.a.wrapper },
              r.a.createElement(W.j, { className: X.a.alert }),
              r.a.createElement("h1", null, "Error 404"),
              r.a.createElement("h3", null, "Oops! Page Not Found!"),
              r.a.createElement("p", null, "The link you followed may be broken, or the page has been removed"),
              r.a.createElement(
                E.b,
                { to: "/dashboard/consultants", className: X.a.btn },
                r.a.createElement(W.b, null),
                "Back Dashboard"
              )
            )
          )
        },
        $ = a(10),
        ee = a(39),
        te = a(50),
        ae = a(52),
        ne = a(40),
        re = a(33),
        ce = a(47),
        oe = a(46),
        Ee = a(24),
        ue = a(38),
        se = a(12),
        ie = a.n(se),
        le = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                loading: !0,
                siteAddressName: "",
                sitePhoneNumber: "",
                description: "",
                companyName: "",
                addressName: "",
                selectedConsultants: [],
              }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
                var a = e.state.selectedConsultants
                "checkbox" === t.target.type &&
                  (t.target.checked
                    ? e.setState({ selectedConsultants: [].concat(Object($.a)(a), [parseInt(t.target.value)]) })
                    : e.setState({
                        selectedConsultants: a.filter(function (e) {
                          return e !== parseInt(t.target.value)
                        }),
                      }))
              }),
              (e.onSubmit = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r, c, o, E, u, s, i, l, S, d
                    return p.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.state),
                              (r = n.siteAddressName),
                              (c = n.sitePhoneNumber),
                              (o = n.description),
                              (E = n.selectedConsultants),
                              (u = e.props),
                              (s = u.updateProject),
                              (i = u.project),
                              (l = i.customId),
                              (S = i.id),
                              (d = u.history),
                              (t.next = 5),
                              s(l, { consultants: E, description: o, sitePhoneNumber: c, siteAddressName: r })
                            )
                          case 5:
                            d.push("/dashboard/project/".concat(S))
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
            Object(s.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getProjects(), this.props.getConsultants()
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.consultants,
                    c = a.nextProjectId,
                    o = this.state,
                    E = o.siteAddressName,
                    u = o.sitePhoneNumber,
                    s = o.description,
                    i = o.selectedConsultants,
                    l = o.companyName,
                    S = o.addressName
                  return r.a.createElement(
                    "section",
                    { className: "main" },
                    r.a.createElement(
                      U.a,
                      null,
                      r.a.createElement(h.a, null, r.a.createElement(ue.a, null)),
                      r.a.createElement(
                        h.a,
                        { lg: "11", className: "container-left" },
                        r.a.createElement(ne.a, null),
                        r.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          r.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            r.a.createElement(
                              "h6",
                              null,
                              "Project ",
                              ((e = c + 1), Array(Math.max(5 - String(e).length + 1, 0)).join(0) + e),
                              r.a.createElement("a", { className: ie.a.href }, "\xa0 by Eugeniu Cozac")
                            ),
                            r.a.createElement(
                              C.a,
                              { className: ie.a.form, noValidate: !0, onSubmit: this.onSubmit },
                              r.a.createElement(T.a, {
                                name: "companyName",
                                label: "Company Name",
                                value: l,
                                placeholder: "Ex: Intel",
                                onChange: this.onChange,
                                disabled: !0,
                              }),
                              r.a.createElement(T.a, {
                                name: "addressName",
                                label: "Address Name",
                                value: S,
                                placeholder: "Ex: 33 Holborn, London, UK",
                                onChange: this.onChange,
                                disabled: !0,
                              }),
                              r.a.createElement(
                                U.a,
                                null,
                                r.a.createElement(
                                  te.a,
                                  { as: h.a },
                                  r.a.createElement(f.a, null, "Consultants"),
                                  n.map(function (e) {
                                    var a = e.id,
                                      n = e.firstName,
                                      c = e.lastName,
                                      o = i.find(function (e) {
                                        return e === a
                                      }),
                                      E = "".concat(n, " ").concat(c)
                                    return r.a.createElement(
                                      U.a,
                                      null,
                                      r.a.createElement(
                                        te.a,
                                        { as: h.a },
                                        r.a.createElement(
                                          "label",
                                          { className: "ms-checkbox-wrap" },
                                          r.a.createElement(ae.a, {
                                            type: "checkbox",
                                            onChange: t.onChange,
                                            className: "form-check-input ".concat(o ? "checked" : ""),
                                            name: E,
                                            value: a,
                                            checked: o,
                                          }),
                                          r.a.createElement("i", { className: "ms-checkbox-check" })
                                        ),
                                        r.a.createElement("span", null, E)
                                      )
                                    )
                                  })
                                )
                              ),
                              r.a.createElement(T.a, {
                                name: "siteAddressName",
                                label: "Site Address",
                                value: E,
                                placeholder: "Ex: 33 Holborn, London, UK",
                                onChange: this.onChange,
                              }),
                              r.a.createElement(T.a, {
                                name: "sitePhoneNumber",
                                label: "Site Phone Number",
                                value: u,
                                placeholder: "Ex: 7869382393",
                                onChange: this.onChange,
                              }),
                              r.a.createElement(ee.a, {
                                name: "description",
                                label: "Description",
                                value: s,
                                onChange: this.onChange,
                              }),
                              r.a.createElement(
                                U.a,
                                { className: "justify-content-end" },
                                r.a.createElement(
                                  h.a,
                                  { lg: 6, className: "mt-3" },
                                  r.a.createElement(
                                    R.a,
                                    { variant: "primary", type: "submit", className: "w-25 float-right" },
                                    "Update"
                                  )
                                )
                              )
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
        })(n.Component),
        Se = Object(S.g)(
          Object(o.b)(
            function (e) {
              return { nextProjectId: Object(Ee.e)(e), consultants: Object(oe.b)(e) }
            },
            { getProjects: re.e, getConsultants: ce.b, addProject: re.c }
          )(le)
        ),
        de = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                loading: !0,
                siteAddressName: "",
                sitePhoneNumber: "",
                description: "",
                selectedConsultants: [],
              }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
                var a = e.state.selectedConsultants
                "checkbox" === t.target.type &&
                  (t.target.checked
                    ? e.setState({ selectedConsultants: [].concat(Object($.a)(a), [parseInt(t.target.value)]) })
                    : e.setState({
                        selectedConsultants: a.filter(function (e) {
                          return e !== parseInt(t.target.value)
                        }),
                      }))
              }),
              (e.onSubmit = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r, c, o, E, u, s, i, l, S, d
                    return p.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (n = e.state),
                              (r = n.siteAddressName),
                              (c = n.sitePhoneNumber),
                              (o = n.description),
                              (E = n.selectedConsultants),
                              (u = e.props),
                              (s = u.updateProject),
                              (i = u.project),
                              (l = i.customId),
                              (S = i.id),
                              (d = u.history),
                              (t.next = 5),
                              s(l, { consultants: E, description: o, sitePhoneNumber: c, siteAddressName: r })
                            )
                          case 5:
                            d.push("/dashboard/project/".concat(S))
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
            Object(s.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getProjects(), this.props.getConsultants()
                  var e = this.props.project,
                    t = e.description,
                    a = e.site,
                    n = e.consultants
                  this.setState({
                    siteAddressName: a.addressName,
                    sitePhoneNumber: a.phoneNumber,
                    description: t,
                    selectedConsultants: n.map(function (e) {
                      return e.id
                    }),
                  })
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.loading,
                    n = t.project,
                    c = n.id,
                    o = n.consultant,
                    E = o.firstName,
                    u = o.lastName,
                    s = n.addressBook,
                    i = s.addressName,
                    l = s.companyName,
                    S = t.project,
                    d = t.consultants,
                    _ = this.state,
                    p = _.siteAddressName,
                    m = _.sitePhoneNumber,
                    O = _.description,
                    A = _.selectedConsultants
                  return a
                    ? r.a.createElement(z.a, null)
                    : S
                    ? r.a.createElement(
                        "section",
                        { className: "main" },
                        r.a.createElement(
                          U.a,
                          null,
                          r.a.createElement(h.a, null, r.a.createElement(ue.a, null)),
                          r.a.createElement(
                            h.a,
                            { lg: "11", className: "container-left" },
                            r.a.createElement(ne.a, null),
                            r.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              r.a.createElement(
                                "div",
                                { className: "ms-panel-header" },
                                r.a.createElement(
                                  "h6",
                                  null,
                                  "Project ",
                                  c,
                                  r.a.createElement("a", { className: ie.a.href }, "\xa0 by ", E, " ", u)
                                ),
                                r.a.createElement(
                                  C.a,
                                  { className: ie.a.form, noValidate: !0, onSubmit: this.onSubmit },
                                  r.a.createElement(T.a, {
                                    name: "companyName",
                                    label: "Company Name",
                                    value: l,
                                    placeholder: "Ex: Intel",
                                    onChange: this.onChange,
                                    disabled: !0,
                                  }),
                                  r.a.createElement(T.a, {
                                    name: "addressName",
                                    label: "Address Name",
                                    value: i,
                                    placeholder: "Ex: 33 Holborn, London, UK",
                                    onChange: this.onChange,
                                    disabled: !0,
                                  }),
                                  r.a.createElement(
                                    U.a,
                                    null,
                                    r.a.createElement(
                                      te.a,
                                      { as: h.a },
                                      r.a.createElement(f.a, null, "Consultants"),
                                      d.map(function (t) {
                                        var a = t.id,
                                          n = t.firstName,
                                          c = t.lastName,
                                          o = A.find(function (e) {
                                            return e === a
                                          }),
                                          E = "".concat(n, " ").concat(c)
                                        return r.a.createElement(
                                          U.a,
                                          null,
                                          r.a.createElement(
                                            te.a,
                                            { as: h.a },
                                            r.a.createElement(
                                              "label",
                                              { className: "ms-checkbox-wrap" },
                                              r.a.createElement(ae.a, {
                                                type: "checkbox",
                                                onChange: e.onChange,
                                                className: "form-check-input ".concat(o ? "checked" : ""),
                                                name: E,
                                                value: a,
                                                checked: o,
                                              }),
                                              r.a.createElement("i", { className: "ms-checkbox-check" })
                                            ),
                                            r.a.createElement("span", null, E)
                                          )
                                        )
                                      })
                                    )
                                  ),
                                  r.a.createElement(T.a, {
                                    name: "siteAddressName",
                                    label: "Site Address",
                                    value: p,
                                    placeholder: "Ex: 33 Holborn, London, UK",
                                    onChange: this.onChange,
                                  }),
                                  r.a.createElement(T.a, {
                                    name: "sitePhoneNumber",
                                    label: "Site Phone Number",
                                    value: m,
                                    placeholder: "Ex: 7869382393",
                                    onChange: this.onChange,
                                  }),
                                  r.a.createElement(ee.a, {
                                    name: "description",
                                    label: "Description",
                                    value: O,
                                    onChange: this.onChange,
                                  }),
                                  r.a.createElement(
                                    U.a,
                                    { className: "justify-content-end" },
                                    r.a.createElement(
                                      h.a,
                                      { lg: 6, className: "mt-3" },
                                      r.a.createElement(
                                        R.a,
                                        { variant: "primary", type: "submit", className: "w-25 float-right" },
                                        "Update"
                                      )
                                    )
                                  )
                                )
                              )
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
        })(n.Component),
        _e = Object(S.g)(
          Object(o.b)(
            function (e, t) {
              return {
                project: Object(Ee.c)(e, t.computedMatch.params.id),
                consultants: Object(oe.b)(e),
                loading: Object(Ee.g)(e),
                error: Object(Ee.i)(e),
              }
            },
            { getProjects: re.e, getConsultants: ce.b, updateProject: re.g }
          )(de)
        ),
        pe = a(37),
        me = a.n(pe),
        Oe = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { loading: !0, comment: "" }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
              }),
              (e.addNewComment = (function () {
                var t = Object(m.a)(
                  p.a.mark(function t(a) {
                    var n, r, c, o, E
                    return p.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                a.preventDefault(),
                                (n = e.state.comment),
                                (r = e.props),
                                (c = r.addComment),
                                (o = r.projectId),
                                (E = r.consultantId),
                                (t.prev = 3),
                                (t.next = 6),
                                c(o, { content: n, consultantId: E })
                              )
                            case 6:
                              e.setState({ comment: "" }), (t.next = 12)
                              break
                            case 9:
                              ;(t.prev = 9), (t.t0 = t.catch(3)), console.error(t.t0)
                            case 12:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[3, 9]]
                    )
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
                  this.props.getComments(this.props.projectId)
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.loading,
                    a = e.comments
                  return t
                    ? r.a.createElement(z.a, null)
                    : r.a.createElement(
                        "div",
                        { className: "ms-panel" },
                        r.a.createElement(
                          "div",
                          { className: "ms-panel-header ".concat(ie.a.headermini) },
                          r.a.createElement(
                            "div",
                            { className: "d-flex justify-content-between ".concat(ie.a.header) },
                            r.a.createElement("h6", null, "Comments")
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "ms-panel-body" },
                          a.length
                            ? a
                                .sort(function (e, t) {
                                  return new Date(e.createdAt) - new Date(t.createdAt)
                                })
                                .map(function (e) {
                                  var t = e.createdAt,
                                    a = e.content,
                                    n = e.consultant,
                                    c = n.firstName,
                                    o = n.lastName
                                  return r.a.createElement(
                                    "div",
                                    {
                                      className: "ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix ".concat(
                                        ie.a.messages
                                      ),
                                    },
                                    r.a.createElement(
                                      "div",
                                      { class: ie.a.mschatimg },
                                      r.a.createElement(
                                        "div",
                                        { class: ie.a.msimground },
                                        c.charAt(0),
                                        " ",
                                        o.charAt(0)
                                      )
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { class: "media-body" },
                                      r.a.createElement(
                                        "div",
                                        { className: ie.a.mschattext },
                                        r.a.createElement("p", null, a)
                                      ),
                                      r.a.createElement("p", { className: ie.a.mschattime }, me()(t).format("LLLL"))
                                    )
                                  )
                                })
                            : r.a.createElement("p", null, "No comments!"),
                          r.a.createElement(
                            C.a,
                            { noValidate: !0, onSubmit: this.addNewComment },
                            r.a.createElement(ee.a, { name: "comment", label: "", onChange: this.onChange }),
                            r.a.createElement(
                              U.a,
                              null,
                              r.a.createElement(
                                h.a,
                                null,
                                r.a.createElement(R.a, { type: "submit", className: "w-25 float-right" }, "Add Comment")
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
        })(n.Component),
        Ce = Object(o.b)(
          function (e) {
            return {
              comments: Object(Ee.b)(e),
              loading: Object(Ee.f)(e),
              error: Object(Ee.a)(e),
              consultantId: Object(A.d)(e),
            }
          },
          { getComments: re.d, addComment: re.a }
        )(Oe),
        fe = a(129),
        Re = function (e) {
          var t = e.project
          return r.a.createElement(
            "div",
            { className: "ms-panel" },
            r.a.createElement(
              "div",
              { className: "ms-panel-header ".concat(ie.a.headermini) },
              r.a.createElement(
                "div",
                { className: "d-flex justify-content-between ".concat(ie.a.header) },
                r.a.createElement("h6", null, "History")
              )
            ),
            r.a.createElement(
              "div",
              { className: "ms-panel-body" },
              r.a.createElement(
                "div",
                { className: "table-responsive" },
                r.a.createElement(
                  fe.a,
                  { striped: !0, bordered: !0, hover: !0 },
                  r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", { scope: "col" }, "Date"),
                      r.a.createElement("th", { scope: "col" }, "Consultant"),
                      r.a.createElement("th", { scope: "col" }, "Action")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    t.history
                      .sort(function (e, t) {
                        return new Date(e.createdAt) - new Date(t.createdAt)
                      })
                      .map(function (e) {
                        var t = e.createdAt,
                          a = e.status,
                          n = e.consultant,
                          c = n.firstName,
                          o = n.lastName
                        return r.a.createElement(
                          "tr",
                          null,
                          r.a.createElement("td", null, me()(t).format("LLLL")),
                          r.a.createElement("td", null, c, " ", o),
                          r.a.createElement("td", null, a.name)
                        )
                      })
                  )
                )
              )
            )
          )
        },
        Ae = a(87),
        Te = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            var e
            Object(u.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { loading: !0, isModalOpen: null }),
              (e.onChange = function (t) {
                e.setState(Object(O.a)({}, t.target.name, t.target.value))
              }),
              (e.padId = function (e) {
                return Array(Math.max(5 - String(e).length + 1, 0)).join(0) + e
              }),
              e
            )
          }
          return (
            Object(s.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getProjects()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.loading,
                    a = e.project,
                    n = a.id,
                    c = a.description,
                    o = a.addressBook,
                    u = o.addressName,
                    s = o.companyName,
                    i = o.users,
                    l = a.site,
                    S = a.consultants,
                    d = a.servicePrices,
                    _ = a.consultant,
                    p = _.firstName,
                    m = _.lastName,
                    O = a.createdAt,
                    C = a.history,
                    f = e.project
                  return t
                    ? r.a.createElement(z.a, null)
                    : f
                    ? r.a.createElement(
                        "section",
                        { className: "main" },
                        r.a.createElement(
                          U.a,
                          null,
                          r.a.createElement(h.a, null, r.a.createElement(ue.a, null)),
                          r.a.createElement(
                            h.a,
                            { lg: "11", className: "container-left" },
                            r.a.createElement(ne.a, null),
                            r.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              r.a.createElement(
                                "div",
                                { className: "ms-panel-header ".concat(ie.a.headermini) },
                                r.a.createElement(
                                  "div",
                                  { className: "d-flex justify-content-between ".concat(ie.a.header) },
                                  r.a.createElement("h6", null, "Project"),
                                  r.a.createElement("h6", null, "#", this.padId(n))
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { class: "ms-panel-body" },
                                r.a.createElement(
                                  "div",
                                  { class: "row align-items-center" },
                                  r.a.createElement(
                                    "div",
                                    { class: "col-md-6" },
                                    r.a.createElement(
                                      "div",
                                      { className: ie.a.invoiceaddress },
                                      r.a.createElement("h5", null, s),
                                      r.a.createElement("p", null, u)
                                    )
                                  ),
                                  r.a.createElement(
                                    "div",
                                    { class: "col-md-6 text-md-right" },
                                    r.a.createElement(
                                      "ul",
                                      { class: "invoice-date" },
                                      r.a.createElement("li", null, "Created Date: ", me()(O).format("LLLL")),
                                      r.a.createElement(
                                        "li",
                                        null,
                                        r.a.createElement("h5", { className: ie.a.byconsultant }, p, " ", m)
                                      )
                                    )
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.categoriesconsultants },
                                  r.a.createElement("h2", null, "Consultants"),
                                  r.a.createElement(
                                    "ul",
                                    null,
                                    S.map(function (e) {
                                      var t = e.firstName,
                                        a = e.lastName
                                      return r.a.createElement("li", null, t, " ", a)
                                    })
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.categoriesconsultants },
                                  r.a.createElement("h2", null, "Services"),
                                  r.a.createElement(
                                    "ul",
                                    null,
                                    d.map(function (e) {
                                      var t = e.name
                                      return r.a.createElement("li", null, t)
                                    })
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.barier },
                                  r.a.createElement("h2", null, "Site Address"),
                                  r.a.createElement("p", null, l.addressName)
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.barier },
                                  r.a.createElement("h2", null, "Site Phone Number"),
                                  r.a.createElement("p", null, l.phoneNumber)
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.barier },
                                  r.a.createElement("h2", null, "Users"),
                                  r.a.createElement(
                                    "div",
                                    { class: "row" },
                                    i.map(function (e) {
                                      var t = e.firstName,
                                        a = e.lastName,
                                        n = e.role,
                                        c = e.email1,
                                        o = e.phoneNumber1
                                      return r.a.createElement(
                                        "div",
                                        { class: "col-xl-4 col-md-6 col-sm-12" },
                                        r.a.createElement(
                                          "div",
                                          { className: "media ms-profile-experience ".concat(ie.a.user) },
                                          r.a.createElement(
                                            "div",
                                            { class: "mr-2 align-self-center" },
                                            r.a.createElement("img", {
                                              src: "https://via.placeholder.com/270x270",
                                              class: "ms-img-round ms-img-small",
                                              alt: "people",
                                            })
                                          ),
                                          r.a.createElement(
                                            "div",
                                            { class: "media-body" },
                                            r.a.createElement("h4", null, t, " ", a, " - ", n.name),
                                            r.a.createElement("p", null, c),
                                            r.a.createElement("p", null, o)
                                          )
                                        )
                                      )
                                    })
                                  )
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.barier },
                                  r.a.createElement("h2", null, "Status"),
                                  r.a.createElement("p", null, C[0].status.name)
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: ie.a.barier },
                                  r.a.createElement("h2", null, "Description"),
                                  r.a.createElement("p", null, c)
                                ),
                                r.a.createElement(
                                  "div",
                                  { class: "invoice-buttons text-right" },
                                  r.a.createElement(
                                    E.b,
                                    {
                                      to: "/dashboard/project/".concat(n, "/create-quote"),
                                      className: "btn btn-primary mr-2 ".concat(ie.a.btn),
                                    },
                                    "Create a Quote"
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              U.a,
                              null,
                              r.a.createElement(h.a, null, r.a.createElement(Ae.default, { projectId: n, users: i })),
                              r.a.createElement(h.a, null, r.a.createElement(Re, this.props))
                            ),
                            r.a.createElement(Ce, { projectId: n })
                          )
                        )
                      )
                    : null
                },
              },
            ]),
            a
          )
        })(n.Component),
        be = Object(o.b)(
          function (e, t) {
            return {
              project: Object(Ee.c)(e, t.computedMatch.params.id),
              loading: Object(Ee.g)(e),
              error: Object(Ee.i)(e),
            }
          },
          { getProjects: re.e }
        )(Te),
        Ue = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(20)]).then(a.bind(null, 338))
        }),
        he = Object(n.lazy)(function () {
          return a.e(19).then(a.bind(null, 342))
        }),
        je = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(22)]).then(a.bind(null, 343))
        }),
        Ie = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(21)]).then(a.bind(null, 344))
        }),
        ve = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(18)]).then(a.bind(null, 345))
        }),
        De = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(4), a.e(1), a.e(3), a.e(17)]).then(a.bind(null, 339))
        }),
        ye = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(4), a.e(1), a.e(3), a.e(10)]).then(a.bind(null, 337))
        }),
        Ne = Object(n.lazy)(function () {
          return a.e(11).then(a.bind(null, 334))
        }),
        ge = Object(n.lazy)(function () {
          return Promise.resolve().then(a.bind(null, 87))
        }),
        Le = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(5), a.e(16), a.e(14)]).then(a.bind(null, 330))
        }),
        Pe = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(5), a.e(15)]).then(a.bind(null, 331))
        }),
        Ge = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(1), a.e(12)]).then(a.bind(null, 340))
        }),
        we = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(1), a.e(9)]).then(a.bind(null, 336))
        }),
        ke = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(13)]).then(a.bind(null, 341))
        }),
        xe = Object(n.lazy)(function () {
          return Promise.all([a.e(24), a.e(23)]).then(a.bind(null, 335))
        }),
        Fe = (function (e) {
          Object(i.a)(a, e)
          var t = Object(l.a)(a)
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(s.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.restoreSession()
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    S.d,
                    null,
                    r.a.createElement(Y, { exact: !0, path: "/", component: F, authorized: !1 }),
                    r.a.createElement(Y, { path: "/login", component: F, authorized: !1 }),
                    r.a.createElement(Y, { path: "/reset", component: Q, authorized: !1 }),
                    r.a.createElement(Y, { path: "/forgot", component: J, authorized: !1 }),
                    r.a.createElement(Y, { path: "/dashboard/change-password", component: he, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/consultants", component: Ue, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/inventory-kit", component: ye, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/inventory-hardware", component: De, authorized: !0 }),
                    r.a.createElement(Y, {
                      path: "/dashboard/inventory-type",
                      roles: ["admin", "technical-manager"],
                      component: je,
                      authorized: !0,
                    }),
                    r.a.createElement(Y, {
                      path: "/dashboard/inventory-manufacture",
                      roles: ["admin", "technical-manager"],
                      component: Ie,
                      authorized: !0,
                    }),
                    r.a.createElement(Y, {
                      path: "/dashboard/inventory-model",
                      roles: ["admin", "technical-manager"],
                      component: ve,
                      authorized: !0,
                    }),
                    r.a.createElement(Y, { path: "/dashboard/issues", component: Ne, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/projects", component: ke, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/project/add", component: Se, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/project/:id", exact: !0, component: be, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/project/:id/edit", component: _e, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/project-services", component: Ge, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/project-quotes", component: ge, authorized: !0 }),
                    r.a.createElement(Y, {
                      path: "/dashboard/project/:id/create-quote",
                      component: Le,
                      authorized: !0,
                    }),
                    r.a.createElement(Y, {
                      path: "/dashboard/project/:projectId/quote/:quoteName",
                      component: Pe,
                      authorized: !0,
                    }),
                    r.a.createElement(Y, { path: "/dashboard/address-book", component: we, authorized: !0 }),
                    r.a.createElement(Y, { path: "/dashboard/statistics", component: xe, authorized: !0 }),
                    r.a.createElement(S.a, { from: "/dashboard", to: "/dashboard/consultants" }),
                    r.a.createElement(S.b, { component: q })
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        Me = Object(S.g)(Object(o.b)(null, { restoreSession: d.h })(Fe)),
        Qe = a(85),
        Ve = a(86),
        Je = (a(120), a(2)),
        Ke = a(1),
        He = { data: {}, loading: !1, error: !1, success: !1, isAuthorized: !1, passwordRecovery: !1 },
        ze = function (e, t, a) {
          return e.map(function (e, n) {
            return n !== t ? e : Object(Je.a)(Object(Je.a)({}, e), a)
          })
        },
        Be = { data: [], loading: !1, error: !1 },
        Ye = { data: [], loading: !1, error: !1 },
        We = { data: [], loading: !1, error: !1 },
        Ze = { data: [], loading: !1, error: !1 },
        Xe = { data: [], loading: !1, error: !1 },
        qe = { data: [], loading: !1, error: !1 },
        $e = { data: [], loading: !1, error: !1 },
        et = { data: [], loading: !1, error: !1 },
        tt = { data: [], loading: !1, error: !1 },
        at = { data: [], loading: !1, error: !1 },
        nt = { data: [], loading: !1, error: !1 },
        rt = { data: [], loading: !1, error: !1 },
        ct = { data: [], loading: !1, error: !1 },
        ot = { data: [], loading: !1, error: !1 },
        Et = { data: [], loading: !1, error: !1 },
        ut = { data: [], loading: !1, error: !1 },
        st = { data: [], loading: !1, error: !1 },
        it = { data: [], loading: !1, error: !1 },
        lt = { data: [], loading: !1, error: !1 },
        St = { data: [], loading: !1, error: !1 },
        dt = { data: [] },
        _t = { data: "" },
        pt = { data: {} },
        mt = Object(b.combineReducers)({
          authorization: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.b.CONSULTANT_LOGIN_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: t.payload, isAuthorized: !0 })
              case Ke.b.CONSULTANT_LOGIN_FAILURE:
              case Ke.b.CHANGE_PASSWORD_FAILURE:
              case Ke.b.SENT_PASSWORD_FAILURE:
              case Ke.b.RESET_PASSWORD_FAILURE:
              case Ke.b.RESET_TOKEN_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.b.CONSULTANT_LOGOUT_SUCCESS:
                return He
              case Ke.b.CHANGE_PASSWORD_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, success: !0 })
              case Ke.b.SENT_PASSWORD_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, passwordRecovery: !0 })
              case Ke.b.RESET_ERRORS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1 })
              default:
                return e
            }
          },
          consultant: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.d.GET_CONSULTANTS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.d.GET_CONSULTANTS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.d.GET_CONSULTANTS_FAILURE:
              case Ke.d.ADD_CONSULTANT_FAILURE:
              case Ke.d.UPDATE_CONSULTANT_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.d.ADD_CONSULTANT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.d.UPDATE_CONSULTANT_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.d.REMOVE_CONSULTANT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              case Ke.d.RESET_ERRORS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1 })
              default:
                return e
            }
          },
          role: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.d.GET_ROLES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.d.GET_ROLES_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              default:
                return e
            }
          },
          inventoryHardware: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.e.GET_HARDWARES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.e.GET_HARDWARES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.e.ADD_HARDWARE_FAILURE:
              case Ke.e.GET_HARDWARES_FAILURE:
              case Ke.e.REMOVE_HARDWARE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.e.ADD_HARDWARE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.e.UPDATE_HARDWARE_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.e.REMOVE_HARDWARE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          inventoryType: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.l.GET_TYPES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.l.GET_TYPES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.l.ADD_TYPE_FAILURE:
              case Ke.l.GET_TYPES_FAILURE:
              case Ke.l.REMOVE_TYPE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.l.ADD_TYPE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.l.REMOVE_TYPE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          inventoryManufacture: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.h.GET_MANUFACTURES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.h.GET_MANUFACTURES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.h.ADD_MANUFACTURE_FAILURE:
              case Ke.h.GET_MANUFACTURES_FAILURE:
              case Ke.h.REMOVE_MANUFACTURE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.h.ADD_MANUFACTURE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.h.REMOVE_MANUFACTURE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          inventoryModel: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.i.GET_MODELS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.i.GET_MODELS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.i.ADD_MODEL_FAILURE:
              case Ke.i.GET_MODELS_FAILURE:
              case Ke.i.REMOVE_MODEL_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.i.ADD_MODEL_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.i.REMOVE_MODEL_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          inventoryKit: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.g.GET_KITS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.g.GET_KITS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.g.ADD_KIT_FAILURE:
              case Ke.g.GET_KITS_FAILURE:
              case Ke.g.REMOVE_KIT_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.g.ADD_KIT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.g.UPDATE_KIT_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.g.REMOVE_KIT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          issue: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.f.GET_ISSUES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.f.GET_ISSUES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.f.ADD_ISSUE_FAILURE:
              case Ke.f.GET_ISSUES_FAILURE:
              case Ke.f.REMOVE_ISSUE_FAILURE:
              case Ke.f.CHANGE_STATUS_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.f.ADD_ISSUE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.f.CHANGE_STATUS_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.f.REMOVE_ISSUE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          issueMessage: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.f.GET_MESSAGES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.f.GET_MESSAGES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.f.GET_MESSAGES_FAILURE:
              case Ke.f.ADD_MESSAGE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.f.ADD_MESSAGE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              default:
                return e
            }
          },
          project: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.j.GET_PROJECTS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.j.GET_PROJECTS_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    loading: !1,
                    error: !1,
                    data: t.payload.map(function (e) {
                      return Object(Je.a)(
                        Object(Je.a)({}, e),
                        {},
                        { id: Array(Math.max(5 - String(e.id).length + 1, 0)).join(0) + e.id, customId: e.id }
                      )
                    }),
                  }
                )
              case Ke.j.ADD_PROJECT_FAILURE:
              case Ke.j.GET_PROJECTS_FAILURE:
              case Ke.j.REMOVE_PROJECT_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.j.REMOVE_PROJECT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          projectSite: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.j.GET_SITES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.j.GET_SITES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.j.ADD_SITE_FAILURE:
              case Ke.j.GET_SITES_FAILURE:
              case Ke.j.REMOVE_SITE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.j.ADD_SITE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.j.REMOVE_SITE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          projectComment: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.j.GET_COMMENTS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.j.GET_COMMENTS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.j.ADD_COMMENT_FAILURE:
              case Ke.j.GET_COMMENTS_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.j.ADD_COMMENT_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              default:
                return e
            }
          },
          projectHistory: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.j.GET_PROJECT_HISTORY_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.j.GET_PROJECT_HISTORY_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.j.GET_PROJECT_HISTORY_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              default:
                return e
            }
          },
          quote: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_QUOTES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.k.GET_QUOTES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.k.ADD_QUOTE_FAILURE:
              case Ke.k.GET_QUOTES_FAILURE:
              case Ke.k.REMOVE_QUOTE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.k.ADD_QUOTE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.k.REMOVE_QUOTE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          generatedQuote: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_GENERATED_QUOTE:
                return e
              case Ke.k.ADD_GENERATED_QUOTE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: t.payload })
              case Ke.k.RESET_GENERATED_QUOTE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: [] })
              default:
                return e
            }
          },
          quoteSection: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_SECTIONS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.k.GET_SECTIONS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.k.ADD_SECTION_FAILURE:
              case Ke.k.GET_SECTIONS_FAILURE:
              case Ke.k.REMOVE_SECTION_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.k.ADD_SECTION_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.k.REMOVE_SECTION_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          quoteExercise: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_EXERCISES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.k.GET_EXERCISES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.k.ADD_EXERCISE_FAILURE:
              case Ke.k.GET_EXERCISES_FAILURE:
              case Ke.k.REMOVE_EXERCISE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.k.ADD_EXERCISE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.k.REMOVE_EXERCISE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          quoteService: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_SERVICEPRICES_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.k.GET_SERVICEPRICES_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.k.ADD_SERVICEPRICE_FAILURE:
              case Ke.k.GET_SERVICEPRICES_FAILURE:
              case Ke.k.REMOVE_SERVICEPRICE_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.k.ADD_SERVICEPRICE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.k.UPDATE_SERVICEPRICE_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.k.REMOVE_SERVICEPRICE_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              default:
                return e
            }
          },
          quotePrices: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_QUOTE_PRICES:
                return e
              case Ke.k.ADD_QUOTE_PRICES:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: t.payload })
              case Ke.k.RESET_QUOTE_PRICES:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: [] })
              default:
                return e
            }
          },
          client: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : at,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.a.GET_ADDRESS_BOOKS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.a.GET_ADDRESS_BOOKS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.a.GET_ADDRESS_BOOKS_FAILURE:
              case Ke.a.ADD_ADDRESS_BOOK_FAILURE:
              case Ke.a.REMOVE_ADDRESS_BOOK_FAILURE:
              case Ke.a.UPDATE_ADDRESS_BOOK_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.a.ADD_ADDRESS_BOOK_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.a.UPDATE_ADDRESS_BOOK_SUCCESS:
                var a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id
                })
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1, data: ze(e.data, a, t.payload.data) })
              case Ke.a.REMOVE_ADDRESS_BOOK_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              case Ke.a.RESET_ERRORS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1 })
              default:
                return e
            }
          },
          contactUser: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.a.GET_USERS_REQUEST:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !0 })
              case Ke.a.GET_USERS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.a.GET_USERS_FAILURE:
              case Ke.a.ADD_USER_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.a.ADD_USER_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              case Ke.a.REMOVE_USER_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  {
                    error: !1,
                    data: e.data.filter(function (e) {
                      return e.id !== t.payload
                    }),
                  }
                )
              case Ke.a.RESET_ERRORS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { error: !1 })
              default:
                return e
            }
          },
          contentEditor: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.k.GET_CONTENT_EDITOR:
                return e
              case Ke.k.ADD_CONTENT_EDITOR:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: t.payload })
              case Ke.k.RESET_CONTENT_EDITOR:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { data: "" })
              default:
                return e
            }
          },
          contactUserPosition: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rt,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case Ke.a.GET_POSITIONS_SUCCESS:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: !1, data: t.payload })
              case Ke.a.GET_POSITIONS_FAILURE:
              case Ke.a.ADD_POSITION_FAILURE:
                return Object(Je.a)(Object(Je.a)({}, e), {}, { loading: !1, error: t.payload })
              case Ke.a.ADD_POSITION_SUCCESS:
                return Object(Je.a)(
                  Object(Je.a)({}, e),
                  {},
                  { error: !1, data: [].concat(Object($.a)(e.data), [t.payload]) }
                )
              default:
                return e
            }
          },
        }),
        Ot = [Qe.a],
        Ct = Object(Ve.composeWithDevTools)(b.applyMiddleware.apply(void 0, Ot)),
        ft = Object(b.createStore)(mt, Ct)
      a(121), a(122), a(123), a(124)
      Object(c.render)(
        r.a.createElement(o.a, { store: ft }, r.a.createElement(E.a, null, r.a.createElement(Me, null))),
        document.getElementById("root")
      )
    },
    21: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return i
      })
      var n = a(0),
        r = a.n(n),
        c = a(66),
        o = a(50),
        E = a(44),
        u = a(51),
        s = a(52),
        i = function (e) {
          var t = e.type,
            a = e.name,
            n = e.value,
            i = e.label,
            l = e.placeholder,
            S = e.onChange,
            d = e.error,
            _ = e.disabled,
            p = e.success
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              o.a,
              { as: E.a },
              r.a.createElement(u.a, null, i),
              d && r.a.createElement("div", { className: "invalid-feedback" }, d),
              p && r.a.createElement("div", { className: "valid-feedback" }, p),
              r.a.createElement(s.a, {
                type: t,
                name: a,
                value: n,
                placeholder: l,
                onChange: S,
                isValid: p,
                isInvalid: !!d,
                disabled: _,
              })
            )
          )
        }
      i.defaultProps = { type: "text" }
    },
    22: function (e, t, a) {
      "use strict"
      a.d(t, "g", function () {
        return n
      }),
        a.d(t, "c", function () {
          return r
        }),
        a.d(t, "f", function () {
          return c
        }),
        a.d(t, "e", function () {
          return o
        }),
        a.d(t, "d", function () {
          return E
        }),
        a.d(t, "a", function () {
          return u
        }),
        a.d(t, "b", function () {
          return s
        }),
        a.d(t, "h", function () {
          return i
        })
      var n = function (e) {
          return e.authorization.isAuthorized
        },
        r = function (e) {
          return e.authorization
        },
        c = function (e) {
          return e.authorization.data.roleName
        },
        o = function (e) {
          return e.authorization.data.email
        },
        E = function (e) {
          return e.authorization.data.id
        },
        u = function (e) {
          return e.authorization.error
        },
        s = function (e) {
          return e.authorization.success
        },
        i = function (e) {
          return e.authorization.passwordRecovery
        }
    },
    23: function (e, t, a) {
      "use strict"
      a.d(t, "f", function () {
        return E
      }),
        a.d(t, "b", function () {
          return u
        }),
        a.d(t, "l", function () {
          return s
        }),
        a.d(t, "g", function () {
          return i
        }),
        a.d(t, "m", function () {
          return l
        }),
        a.d(t, "d", function () {
          return S
        }),
        a.d(t, "a", function () {
          return d
        }),
        a.d(t, "k", function () {
          return _
        }),
        a.d(t, "h", function () {
          return p
        }),
        a.d(t, "c", function () {
          return m
        }),
        a.d(t, "n", function () {
          return O
        }),
        a.d(t, "p", function () {
          return C
        }),
        a.d(t, "o", function () {
          return f
        }),
        a.d(t, "e", function () {
          return R
        }),
        a.d(t, "i", function () {
          return A
        }),
        a.d(t, "j", function () {
          return T
        })
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(7),
        E = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/project/".concat(t, "/quote"), method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        u = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(o.a)({ url: "/api/project/".concat(t, "/quote"), method: "POST", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        s = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/".concat(t), method: "DELETE" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        i = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/".concat(t, "/section"), method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(o.a)({ url: "/api/quote/".concat(t, "/section/").concat(a), method: "DELETE" })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        S = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(o.a)({ url: "/api/quote/".concat(t, "/section/").concat(a, "/exercise"), method: "GET" })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        d = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a, n) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(o.a)({
                          url: "/api/quote/".concat(a, "/section/").concat(n, "/exercise"),
                          method: "POST",
                          data: t,
                        })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a, n) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(o.a)({
                          url: "/api/quote/".concat(t, "/section/").concat(a, "/exercise/").concat(n),
                          method: "DELETE",
                        })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        p = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/serviceprice", method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        m = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/serviceprice", method: "POST", data: t })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        O = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/serviceprice/".concat(t), method: "DELETE" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        C = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(o.a)({ url: "/api/quote/serviceprice/".concat(t), method: "PUT", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        f = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(o.a)({ url: "/api/quote/savehtml/".concat(t), method: "POST", data: { content: a } })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        R = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/gethtml/".concat(t), method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        A = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(o.a)({ url: "/api/quote/htmltopdf/".concat(t), method: "POST", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        T = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o.a)({ url: "/api/quote/templates", method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })()
    },
    24: function (e, t, a) {
      "use strict"
      a.d(t, "e", function () {
        return n
      }),
        a.d(t, "h", function () {
          return r
        }),
        a.d(t, "j", function () {
          return c
        }),
        a.d(t, "c", function () {
          return o
        }),
        a.d(t, "g", function () {
          return E
        }),
        a.d(t, "i", function () {
          return u
        }),
        a.d(t, "b", function () {
          return s
        }),
        a.d(t, "f", function () {
          return i
        }),
        a.d(t, "a", function () {
          return l
        }),
        a.d(t, "d", function () {
          return S
        })
      var n = function (e) {
          return e.project.data.length
        },
        r = function (e) {
          return e.project.loading
        },
        c = function (e) {
          return e.project.error
        },
        o = function (e, t) {
          return e.project.data.find(function (e) {
            return e.id == t
          })
        },
        E = function (e) {
          return e.project.loading
        },
        u = function (e) {
          return e.project.error
        },
        s = function (e) {
          return e.projectComment.data
        },
        i = function (e) {
          return e.projectComment.loading
        },
        l = function (e) {
          return e.projectComment.error
        },
        S = function (e, t) {
          var a = t.toLowerCase()
          return e.project.data.filter(function (e) {
            return (
              e.id.includes(a) ||
              e.addressBook.addressName.toLowerCase().includes(a) ||
              e.addressBook.postCode.toLowerCase().includes(a) ||
              e.addressBook.users.filter(function (e) {
                return e.email1.toLowerCase().includes(a)
              }).length > 0
            )
          })
        }
    },
    28: function (e, t, a) {
      "use strict"
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(60),
        E = a.n(o),
        u = a(1),
        s = a(7),
        i = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/consultants/login", method: "POST", data: t }, !1)
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/consultants/".concat(t), method: "PUT", data: a })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        S = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/forgot", method: "POST", data: t }, !1)
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        d = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(s.a)(
                          { url: "/api/reset", method: "GET", data: { params: { resetPasswordToken: t } } },
                          !1
                        )
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(s.a)({ url: "/api/consultants/".concat(t), method: "PUT", data: a }, !1)
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })()
      a.d(t, "d", function () {
        return p
      }),
        a.d(t, "f", function () {
          return m
        }),
        a.d(t, "e", function () {
          return O
        }),
        a.d(t, "h", function () {
          return C
        }),
        a.d(t, "a", function () {
          return f
        }),
        a.d(t, "c", function () {
          return R
        }),
        a.d(t, "b", function () {
          return A
        }),
        a.d(t, "g", function () {
          return T
        })
      var p = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), i(e)
                        case 3:
                          return (n = t.sent), (t.next = 6), localStorage.setItem("authToken", n.token)
                        case 6:
                          a({ type: u.b.CONSULTANT_LOGIN_SUCCESS, payload: E()(n.token) }), (t.next = 12)
                          break
                        case 9:
                          ;(t.prev = 9), (t.t0 = t.catch(0)), a({ type: u.b.CONSULTANT_LOGIN_FAILURE, payload: t.t0 })
                        case 12:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        m = function () {
          return function (e) {
            e({ type: u.b.RESET_ERRORS_SUCCESS })
          }
        },
        O = function () {
          return function (e) {
            localStorage.removeItem("authToken"), e({ type: u.b.CONSULTANT_LOGOUT_SUCCESS })
          }
        },
        C = function () {
          return function (e) {
            var t = localStorage.getItem("authToken")
            t && e({ type: u.b.CONSULTANT_LOGIN_SUCCESS, payload: E()(t) })
          }
        },
        f = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), l(e, t)
                        case 3:
                          ;(c = a.sent), n({ type: u.b.CHANGE_PASSWORD_SUCCESS, payload: c }), (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7), (a.t0 = a.catch(0)), n({ type: u.b.CHANGE_PASSWORD_FAILURE, payload: a.t0 })
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        R = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), S(e)
                        case 3:
                          ;(n = t.sent), a({ type: u.b.SENT_PASSWORD_SUCCESS, payload: n }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a({ type: u.b.SENT_PASSWORD_FAILURE, payload: t.t0 })
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        A = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), d(e)
                        case 3:
                          ;(n = t.sent), a({ type: u.b.RESET_TOKEN_SUCCESS, payload: n }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a({ type: u.b.RESET_TOKEN_FAILURE, payload: t.t0 })
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        T = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), _(e, t)
                        case 3:
                          ;(c = a.sent), n({ type: u.b.RESET_PASSWORD_SUCCESS, payload: c }), (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7), (a.t0 = a.catch(0)), n({ type: u.b.RESET_PASSWORD_FAILURE, payload: a.t0 })
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        }
    },
    33: function (e, t, a) {
      "use strict"
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(1),
        E = a(7),
        u = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/project", method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        s = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/project", method: "POST", data: t })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        i = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/project/".concat(t), method: "PUT", data: a })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/project/".concat(t), method: "DELETE" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        S = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/project/".concat(t, "/comment"), method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        d = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(E.a)({ url: "/api/project/".concat(t, "/comment"), method: "POST", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(E.a)({ url: "/api/project/".concat(t, "/history"), method: "POST", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })()
      a.d(t, "e", function () {
        return p
      }),
        a.d(t, "c", function () {
          return m
        }),
        a.d(t, "g", function () {
          return O
        }),
        a.d(t, "f", function () {
          return C
        }),
        a.d(t, "d", function () {
          return f
        }),
        a.d(t, "a", function () {
          return R
        }),
        a.d(t, "b", function () {
          return A
        })
      var p = function () {
          return (function () {
            var e = Object(c.a)(
              r.a.mark(function e(t) {
                var a
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: o.j.GET_PROJECTS_REQUEST }), (e.prev = 1), (e.next = 4), u()
                        case 4:
                          ;(a = e.sent), t({ type: o.j.GET_PROJECTS_SUCCESS, payload: a }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: o.j.GET_PROJECTS_FAILURE, payload: e.t0 })
                        case 11:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        m = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), s(e)
                        case 3:
                          ;(n = t.sent), a({ type: o.j.ADD_PROJECT_SUCCESS, payload: n }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a({ type: o.j.ADD_PROJECT_FAILURE, payload: t.t0 })
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        O = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), i(e, t)
                        case 3:
                          n({ type: o.j.UPDATE_PROJECT_SUCCESS, payload: e }), (a.next = 9)
                          break
                        case 6:
                          ;(a.prev = 6), (a.t0 = a.catch(0)), n({ type: o.j.UPDATE_PROJECT_FAILURE, payload: a.t0 })
                        case 9:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        C = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), l(e)
                        case 3:
                          a({ type: o.j.REMOVE_PROJECT_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), a({ type: o.j.REMOVE_PROJECT_FAILURE, payload: t.t0 })
                        case 9:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        f = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return a({ type: o.j.GET_COMMENTS_REQUEST }), (t.prev = 1), (t.next = 4), S(e)
                        case 4:
                          ;(n = t.sent), a({ type: o.j.GET_COMMENTS_SUCCESS, payload: n }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), a({ type: o.j.GET_COMMENTS_FAILURE, payload: t.t0 })
                        case 11:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        R = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), d(e, t)
                        case 3:
                          ;(c = a.sent), n({ type: o.j.ADD_COMMENT_SUCCESS, payload: c }), (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7), (a.t0 = a.catch(0)), n({ type: o.j.ADD_COMMENT_FAILURE, payload: a.t0 })
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        A = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return n({ type: o.j.POST_PROJECT_HISTORY_REQUEST }), (a.prev = 1), (a.next = 4), _(e, t)
                        case 4:
                          ;(c = a.sent), n({ type: o.j.POST_PROJECT_HISTORY_SUCCESS, payload: c }), (a.next = 11)
                          break
                        case 8:
                          ;(a.prev = 8),
                            (a.t0 = a.catch(1)),
                            n({ type: o.j.POST_PROJECT_HISTORY_FAILURE, payload: a.t0 })
                        case 11:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        }
    },
    34: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return E
      })
      var n = a(0),
        r = a.n(n),
        c = a(65),
        o = a.n(c),
        E = function () {
          return r.a.createElement(
            "section",
            { className: o.a.preloaderWrap },
            r.a.createElement("div", { className: o.a.spinner })
          )
        }
    },
    36: function (e, t, a) {
      e.exports = {
        authorization: "Authorization_authorization__3KaTm",
        formWrapper: "Authorization_formWrapper__2Racc",
        form: "Authorization_form__3kakF",
      }
    },
    38: function (e, t, a) {
      "use strict"
      var n = a(0),
        r = a.n(n),
        c = a(30),
        o = a(8),
        E = a(13),
        u = a(22)
      t.a = Object(E.b)(function (e) {
        return { roleName: Object(u.f)(e) }
      })(function (e) {
        var t = e.roleName
        return r.a.createElement(
          "aside",
          { className: "side-nav fixed" },
          r.a.createElement(
            "ul",
            null,
            r.a.createElement(
              "li",
              { className: "menu-item" },
              r.a.createElement(o.c, { to: "" }, r.a.createElement(c.a, null), "My Account"),
              r.a.createElement(
                "ul",
                { id: "form-elements" },
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    o.c,
                    { to: "/dashboard/change-password", activeClassName: "selected" },
                    "Change Password"
                  )
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "menu-item" },
              r.a.createElement(o.b, { to: "/dashboard/consultants" }, r.a.createElement(c.p, null), "Consultants")
            ),
            ("technical-manager" === t || "admin" === t || "director" === t) &&
              r.a.createElement(
                "li",
                { className: "menu-item" },
                r.a.createElement(o.b, { to: "" }, r.a.createElement(c.a, null), "Inventory"),
                r.a.createElement(
                  "ul",
                  { id: "form-elements" },
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement(
                      o.c,
                      { to: "/dashboard/inventory-hardware", activeClassName: "selected" },
                      "Hardware"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    null,
                    r.a.createElement(o.c, { to: "/dashboard/inventory-kit", activeClassName: "selected" }, "Kit")
                  ),
                  "admin" === t &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          o.c,
                          { to: "/dashboard/inventory-manufacture", activeClassName: "selected" },
                          "Manufacture"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          o.c,
                          { to: "/dashboard/inventory-model", activeClassName: "selected" },
                          "Model"
                        )
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(o.c, { to: "/dashboard/inventory-type", activeClassName: "selected" }, "Type")
                      )
                    )
                )
              ),
            ("technical-manager" === t || "admin" === t) &&
              r.a.createElement(
                "li",
                { className: "menu-item" },
                r.a.createElement(
                  o.c,
                  { to: "/dashboard/issues", activeClassName: "selected" },
                  r.a.createElement(c.f, null),
                  "Issues"
                )
              ),
            r.a.createElement(
              "li",
              { className: "menu-item" },
              r.a.createElement(o.b, { to: "" }, r.a.createElement(c.k, null), "Project"),
              r.a.createElement(
                "ul",
                { id: "form-elements" },
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(o.c, { to: "/dashboard/projects", activeClassName: "selected" }, "Projects")
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    o.c,
                    { to: "/dashboard/project/add", activeClassName: "selected" },
                    "Add New Project"
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(
                    o.c,
                    { to: "/dashboard/project-services", activeClassName: "selected" },
                    "Service Price List"
                  )
                ),
                r.a.createElement(
                  "li",
                  null,
                  r.a.createElement(o.c, { to: "/dashboard/address-book", activeClassName: "selected" }, "Address Book")
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "menu-item" },
              r.a.createElement(
                o.c,
                { to: "/dashboard/statistics", activeClassName: "selected" },
                r.a.createElement(c.c, null),
                "Statistics"
              )
            )
          )
        )
      })
    },
    39: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return i
      })
      var n = a(0),
        r = a.n(n),
        c = a(66),
        o = a(50),
        E = a(44),
        u = a(51),
        s = a(52),
        i = function (e) {
          var t = e.name,
            a = e.value,
            n = e.label,
            i = e.onChange,
            l = e.error,
            S = e.rows,
            d = void 0 === S ? 3 : S
          return r.a.createElement(
            c.a,
            null,
            r.a.createElement(
              o.a,
              { as: E.a },
              r.a.createElement(u.a, null, n),
              l && r.a.createElement("div", { className: "invalid-feedback" }, l),
              r.a.createElement(s.a, {
                as: "textarea",
                rows: d,
                name: t,
                value: a,
                placeholder: n,
                onChange: i,
                isInvalid: !!l,
              })
            )
          )
        }
    },
    40: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return l
      })
      var n = a(0),
        r = a.n(n),
        c = a(30),
        o = a(66),
        E = a(44),
        u = a(8),
        s = a(84),
        i = a.n(s),
        l = function () {
          return r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              E.a,
              null,
              r.a.createElement(
                "nav",
                null,
                r.a.createElement(
                  "ol",
                  { className: "".concat(i.a.breadcrumb, " pl-0") },
                  r.a.createElement(
                    "li",
                    { className: "breadcrumb-item" },
                    r.a.createElement(
                      "a",
                      null,
                      r.a.createElement(c.k, null),
                      r.a.createElement(u.b, { to: "/dashboard/projects" }, " Projects")
                    )
                  ),
                  r.a.createElement("li", { className: "breadcrumb-item active" }, "Single")
                )
              )
            )
          )
        }
    },
    45: function (e, t, a) {
      e.exports = {
        error: "NotFound_error__20GFk",
        wrapper: "NotFound_wrapper__3zbUA",
        alert: "NotFound_alert__12A0E",
        btn: "NotFound_btn__3rWuZ",
      }
    },
    46: function (e, t, a) {
      "use strict"
      a.d(t, "b", function () {
        return n
      }),
        a.d(t, "c", function () {
          return r
        }),
        a.d(t, "e", function () {
          return c
        }),
        a.d(t, "a", function () {
          return o
        }),
        a.d(t, "d", function () {
          return E
        })
      var n = function (e) {
          return e.consultant.data
        },
        r = function (e) {
          return e.consultant.data
            .filter(function (e) {
              return "Technical manager" == e.role.name
            })
            .map(function (e) {
              return e.id
            })
        },
        c = function (e) {
          return e.consultant.loading
        },
        o = function (e) {
          return e.consultant.error
        },
        E = function (e) {
          return e.role.data
        }
    },
    47: function (e, t, a) {
      "use strict"
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(1),
        E = a(7),
        u = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/consultants", method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        s = (function () {
          var e = Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/roles", method: "GET" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        i = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/consultants/register", method: "POST", data: t })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        l = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(E.a)({ url: "/api/consultants/".concat(t), method: "DELETE" })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        S = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t, a) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Object(E.a)({ url: "/api/consultants/".concat(t, "/role"), method: "PUT", data: a })
                      )
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })()
      a.d(t, "b", function () {
        return d
      }),
        a.d(t, "c", function () {
          return _
        }),
        a.d(t, "a", function () {
          return p
        }),
        a.d(t, "d", function () {
          return m
        }),
        a.d(t, "f", function () {
          return O
        }),
        a.d(t, "e", function () {
          return C
        })
      var d = function () {
          return (function () {
            var e = Object(c.a)(
              r.a.mark(function e(t) {
                var a
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: o.d.GET_CONSULTANTS_REQUEST }), (e.prev = 1), (e.next = 4), u()
                        case 4:
                          ;(a = e.sent), t({ type: o.d.GET_CONSULTANTS_SUCCESS, payload: a }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: o.d.GET_CONSULTANTS_FAILURE, payload: e.t0 })
                        case 11:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        _ = function () {
          return (function () {
            var e = Object(c.a)(
              r.a.mark(function e(t) {
                var a
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), s()
                        case 3:
                          ;(a = e.sent), t({ type: o.d.GET_ROLES_SUCCESS, payload: a }), (e.next = 10)
                          break
                        case 7:
                          ;(e.prev = 7), (e.t0 = e.catch(0)), t({ type: o.d.GET_ROLES_FAILURE, payload: e.t0 })
                        case 10:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        p = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), i(e)
                        case 3:
                          ;(n = t.sent), a({ type: o.d.ADD_CONSULTANT_SUCCESS, payload: n }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a({ type: o.d.ADD_CONSULTANT_FAILURE, payload: t.t0 })
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        m = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), l(e)
                        case 3:
                          a({ type: o.d.REMOVE_CONSULTANT_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), a({ type: o.d.REMOVE_CONSULTANT_FAILURE, payload: t.t0 })
                        case 9:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        O = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), S(e, t)
                        case 3:
                          n({ type: o.d.UPDATE_CONSULTANT_SUCCESS, payload: e }), (a.next = 10)
                          break
                        case 6:
                          throw (
                            ((a.prev = 6),
                            (a.t0 = a.catch(0)),
                            n({ type: o.d.UPDATE_CONSULTANT_FAILURE, payload: a.t0 }),
                            a.t0)
                          )
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        C = function () {
          return function (e) {
            e({ type: o.d.RESET_ERRORS_SUCCESS })
          }
        }
    },
    53: function (e, t, a) {
      "use strict"
      a.d(t, "j", function () {
        return u
      }),
        a.d(t, "c", function () {
          return s
        }),
        a.d(t, "m", function () {
          return i
        }),
        a.d(t, "k", function () {
          return l
        }),
        a.d(t, "e", function () {
          return S
        }),
        a.d(t, "n", function () {
          return d
        }),
        a.d(t, "r", function () {
          return _
        }),
        a.d(t, "q", function () {
          return p
        }),
        a.d(t, "l", function () {
          return m
        }),
        a.d(t, "h", function () {
          return O
        }),
        a.d(t, "b", function () {
          return C
        }),
        a.d(t, "g", function () {
          return f
        }),
        a.d(t, "p", function () {
          return R
        }),
        a.d(t, "a", function () {
          return A
        }),
        a.d(t, "f", function () {
          return T
        }),
        a.d(t, "o", function () {
          return b
        }),
        a.d(t, "d", function () {
          return U
        }),
        a.d(t, "i", function () {
          return h
        })
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(1),
        E = a(23),
        u = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return a({ type: o.k.GET_QUOTES_REQUEST }), (t.prev = 1), (t.next = 4), E.f(e)
                        case 4:
                          ;(n = t.sent), a({ type: o.k.GET_QUOTES_SUCCESS, payload: n }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), a({ type: o.k.GET_QUOTES_FAILURE, payload: t.t0 })
                        case 11:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        s = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), E.b(e, t)
                        case 3:
                          ;(c = a.sent), n({ type: o.k.ADD_QUOTE_SUCCESS, payload: c }), (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7), (a.t0 = a.catch(0)), n({ type: o.k.ADD_QUOTE_FAILURE, payload: a.t0 })
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        i = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), E.l(e)
                        case 3:
                          a({ type: o.k.REMOVE_QUOTE_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), a({ type: o.k.REMOVE_QUOTE_FAILURE, payload: t.t0 })
                        case 9:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        l = function () {
          return (function () {
            var e = Object(c.a)(
              r.a.mark(function e(t) {
                var a
                return r.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: o.k.GET_SERVICEPRICES_REQUEST }), (e.prev = 1), (e.next = 4), E.h()
                        case 4:
                          ;(a = e.sent), t({ type: o.k.GET_SERVICEPRICES_SUCCESS, payload: a }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: o.k.GET_SERVICEPRICES_FAILURE, payload: e.t0 })
                        case 11:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                )
              })
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        S = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), E.c(e)
                        case 3:
                          ;(n = t.sent), a({ type: o.k.ADD_SERVICEPRICE_SUCCESS, payload: n }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), a({ type: o.k.ADD_SERVICEPRICE_FAILURE, payload: t.t0 })
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        d = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), E.n(e)
                        case 3:
                          a({ type: o.k.REMOVE_SERVICEPRICE_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6),
                            (t.t0 = t.catch(0)),
                            a({ type: o.k.REMOVE_SERVICEPRICE_FAILURE, payload: t.t0 })
                        case 9:
                        case "end":
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        _ = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (a.prev = 0), (a.next = 3), E.p(e, t)
                        case 3:
                          ;(c = a.sent),
                            n({ type: o.k.UPDATE_SERVICEPRICE_SUCCESS, payload: { data: c, id: e } }),
                            (a.next = 10)
                          break
                        case 7:
                          ;(a.prev = 7),
                            (a.t0 = a.catch(0)),
                            n({ type: o.k.UPDATE_SERVICEPRICE_FAILURE, payload: a.t0 })
                        case 10:
                        case "end":
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        },
        p = function () {
          return function (e) {
            e({ type: o.k.RESET_ERRORS_SUCCESS })
          }
        },
        m = function () {
          return Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), E.j()
                      case 3:
                        return e.abrupt("return", e.sent)
                      case 6:
                        ;(e.prev = 6), (e.t0 = e.catch(0)), console.error(e.t0)
                      case 9:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 6]]
              )
            })
          )
        },
        O = function (e) {
          return Object(c.a)(
            r.a.mark(function t() {
              return r.a.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), E.e(e)
                      case 3:
                        return t.abrupt("return", t.sent)
                      case 6:
                        ;(t.prev = 6), (t.t0 = t.catch(0)), console.error(t.t0)
                      case 9:
                      case "end":
                        return t.stop()
                    }
                },
                t,
                null,
                [[0, 6]]
              )
            })
          )
        },
        C = function (e) {
          return function (t) {
            t({ type: o.k.ADD_GENERATED_QUOTE, payload: e })
          }
        },
        f = function () {
          return function (e) {
            e({ type: o.k.GET_GENERATED_QUOTE })
          }
        },
        R = function () {
          return function (e) {
            e({ type: o.k.RESET_GENERATED_QUOTE })
          }
        },
        A = function (e) {
          return function (t) {
            t({ type: o.k.ADD_CONTENT_EDITOR, payload: e })
          }
        },
        T = function () {
          return function (e) {
            e({ type: o.k.GET_CONTENT_EDITOR })
          }
        },
        b = function () {
          return function (e) {
            e({ type: o.k.RESET_CONTENT_EDITOR })
          }
        },
        U = function (e) {
          return function (t) {
            t({ type: o.k.ADD_QUOTE_PRICES, payload: e })
          }
        },
        h = function () {
          return function (e) {
            e({ type: o.k.GET_QUOTE_PRICES })
          }
        }
    },
    54: function (e, t, a) {
      "use strict"
      a.d(t, "d", function () {
        return n
      }),
        a.d(t, "f", function () {
          return r
        }),
        a.d(t, "h", function () {
          return c
        }),
        a.d(t, "e", function () {
          return o
        }),
        a.d(t, "g", function () {
          return E
        }),
        a.d(t, "i", function () {
          return u
        }),
        a.d(t, "b", function () {
          return s
        }),
        a.d(t, "a", function () {
          return i
        }),
        a.d(t, "c", function () {
          return l
        })
      var n = function (e) {
          return e.quote.data
        },
        r = function (e) {
          return e.quote.loading
        },
        c = function (e) {
          return e.quote.error
        },
        o = function (e) {
          return e.quoteService.data
        },
        E = function (e) {
          return e.quoteService.loading
        },
        u = function (e) {
          return e.quoteService.error
        },
        s = function (e) {
          return e.generatedQuote.data
        },
        i = function (e) {
          return e.contentEditor.data
        },
        l = function (e) {
          return e.quotePrices.data
        }
    },
    56: function (e, t, a) {
      e.exports = {
        form: "Quotes_form__1Z7sR",
        href: "Quotes_href__4GkSE",
        header: "Quotes_header__1FnTX",
        headermini: "Quotes_headermini__x8Sch",
        invoiceaddress: "Quotes_invoiceaddress__1P9HM",
        byconsultant: "Quotes_byconsultant__179CQ",
        categoriesconsultants: "Quotes_categoriesconsultants__1yHKR",
        barier: "Quotes_barier__1Rds8",
        user: "Quotes_user__3aY7c",
        row: "Quotes_row__3YzNk",
        btn: "Quotes_btn__2IanV",
        mschatimg: "Quotes_mschatimg__I3a9c",
        mschattime: "Quotes_mschattime__3Gvx5",
        mschattext: "Quotes_mschattext__QVt0_",
        msimground: "Quotes_msimground__1p7lP",
        messages: "Quotes_messages__peL0e",
        sign: "Quotes_sign__sYY9Y",
      }
    },
    62: function (e, t, a) {
      e.exports = { header: "Header_header__xynkl", logout: "Header_logout__2FYpT" }
    },
    65: function (e, t, a) {
      e.exports = {
        preloaderWrap: "Loading_preloaderWrap__2Vje8",
        spinner: "Loading_spinner__2XOiL",
        "ms-rotateplane": "Loading_ms-rotateplane__Adpku",
      }
    },
    7: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return u
      })
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(61),
        E = a.n(o),
        u = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              var a,
                n,
                c,
                o = arguments
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = !(o.length > 1 && void 0 !== o[1]) || o[1]),
                        E.a.interceptors.request.use(function (e) {
                          if (a) {
                            var t = localStorage.getItem("authToken")
                            e.headers.common.Authorization = t
                          }
                          return e
                        }),
                        (n = function (e) {
                          return e.data
                        }),
                        (c = function (e) {
                          return Promise.reject(e.response || e.message)
                        }),
                        e.abrupt("return", E()(t).then(n).catch(c))
                      )
                    case 5:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })()
    },
    82: function (e, t, a) {
      e.exports = a.p + "static/media/accoustics.a710cd70.jpg"
    },
    83: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABDCAYAAADZL0qFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABKMSURBVHhe7d1PqCVXEQbwBwHBRVaBgAjZZBEQV2ajq3GRjUFEhKCCCEFdiBgcEAIjwiwURoUgBByVkIWoIaKCIdnEmEUExz8QlIkKJgYEJwuF6MasBlp+l/keJ013v+57u+/zTxUUp/ucqjqnb3/fqTr9BuakKykpGZUiSEnJhBRBSkompAhSUjIhRZCSkgkpgpSUTEgRpKRkQoogG8q/3nije+3v/+x+df3V7rvPXOuuPP5M97mvfr/7xOXHu49d+vZOXeszxub3f76x8+Fbcv5SBNlAABzYgf9dH7ncve2+i90dFz47S9m+5+Nf6j795e90P/zpb4oo5yxFkJXk5s2bu0yBFHe//+FTwLv+4MVHT7PEYz9+YUce4Keu9SW7vO8zj7zJ/x0f+kJ36dEf7WKbo+S4UgQ5UIaIAdTKJ6D/+vee3QEcSd77ya/sCEDda/XJGNr4IAw/94mplVWUYEWU40kR5AB5/fV/dJe/+ZMdIUKMZAqEQYIPP3x1dy9b/PzFP+3I1OovfvvKrt84Oz4Igzzun37hd93nH3nydA4l2zd+8Pxu7pLtpQiyp9jJgbnd3ZEFsJFC6fTqX/+2s3Mti8gIySTJGuz1I4HMwZ66jh3yIBNb8zmnmEP8km2lCLKHAGx2dKANMVICAbM+AKf6lUz8ZIwX//iXU3322kunBEIeZEMK9gggW5hLDPeIYV6qX/apkms7KYIsEEAEWCDOLm73V0797Nd/2JVDyRLKI0QJCWQEpGHLLwr4bJEE2NmzTamVfgTUh4B9kiBekWQbKYLMFAAEVsRAECAFWDs9ADt76ANWIGebcwgNEYDfGHWtjx0C5OwhJnIhozNHyJYsJQvJTEWS7aUIMlNkhzZzAKs+IHettbuntJJJkECf0giJ3AM/G+panzE2yR45e4gv+yCJEkwsZOBnzFpakohTsq4UQWaI3RsAATEZwS7uYG1HB1ygBWq7fQgRsgA4H5mCj36A54ts/JCPrTg5e+hzL5YYIYZrffxDkJDEHylL1pMTnwtfun59lr5248Ytt2nx198h/7X0lZdfPlVrMt9W5QXAyRB2awAGdLs6sCODsweQA3xKKzb6UhohkDbnFDZKIteAzi/Zw1zmMcYe6PWzd83O3NR1m0WoeesT8Hpy8uQTT3R333XXLP3Ugw/echsXYL340EOD/mvqO++551Tffe+93Qfuv38377euXu1+ee3aKXEOFbs9EAIn4AItcNrhQ4aAPQd21whh3D0bwKeuo+JF3csQyIRYsoq4YrhOxqAIqg9B+LUkcY1QdR5ZR04A6q233da95eTkTAXCKfFSkGhuvDXUXP353COOtSDLvkQBVoCjAAmsAIocQAicQJpPtIjh3oEd6HMOUY4pm2QjbTT3wC9myIKE7pHSGtqMoexCvmQo69BHQxIlGL+Sw2U1gkjrADnkdx6aZ9Jat9JsiSAVUAIc8CGBHR4ogdcYoMoK+oDX+QLAgTbAN4Y8QAvw2lyL6xrYc/Ywjz6xkzEQJhnDfGxDKH2Jqw1JkLTkcFmFIMqZjz7wwOw456HKMuXkXLHrJ3sAZbJHWtkiWUOfa6AFWADmk12ejR0dAbStIhF7/gCvLxnDNRKJmfjiyUzWZ0wWQg4EokhizVp+JYfJwQTZhxzKn7ffeefg2JZqzjmZRKloB7YTAxtgIoXaH+idDYAU8J1RgNkuL3MghizgHkDZuucH5MZbFZcfWzEzD7AjSEo7MUJMfuyRgI24SKJln3KLT8lhchBBlFX6lpDjvgsXducCB+uh8a3Ves/6ygN0AAdkQGfXtssjQr5gBfjUbp5dH3DZADOwAj1f9kjDVtZgow/B2LFXVmXnR4LMZf6cefjLNNqUYubgh4T8xLN2fWt8qPh/lr0J4hMrsA/ZDak5ZBovDEDPiyDW8fxzz916imEBRgCjroE35Y3Mkh0duLOjAzuwAjGgslFSGecnhrEoUDuzsNOKwT4llXu+5jMXO33GEATJECEE4YdMIYnMZ/1IVrK/7EUQZcoSgN9x++3dFy9dOt3NlhIEsZ5+6qlBtX5EXZLFfA4eE+UVwAGXHToHYgAPMQBeixTADqzI4hqoKXv+wAy4xpEtKi5ihDB89AG37BDwG9NvTuCXhdgYEx9h9MsW5gxJ3HsGBKtPvvvLYoK05JjjhxzmaFP9UoIg15Q4By35guY5xkqPHHqBC4CBDjiBFHECfuQAROQASoSxW7NJycQWkHM+EUdMtuKJgQwUCYFanzHESkbhH5IhKdKIm0M6W3Mig3mtQZ9n0J5VUv63iufqf8b/2pUrb9qMD5VFBAHqJcB2KPblqL+DrU0QgrjIOOTfV3OPgQZYAU+JkkwRkgA58AGxli2wAjdQZxcHXsQBWMDVb9cH8oAYuRDRmJYd8CczJNMAuD5tzjZiWAM7JNKKH0Kbx7o8g2dh878osNX/8GKjnNoAl8oigixRX6qwe0i2IIgs4lPukH9fzc1+SIA0n0kBLuUN4LlOuZUMonUPpK6VPMgTsgC1Xd7B3zUbikCA2ypC8JMpkMK19ZgTQcQBeHFCNFnK3Obkp58iCf+55xCbmN8E2OjYBgJ4zp9sxn5DsWKj7W+Q7vt9ZKg/axKnXRM7BLEpGo+f9fXJYaxdc38OMjbPpgQx2ZBsQRAH77nP4cwyBgAgS2kCaO4RhAJdSqWUSUhi90aMlEn83GfHB2AZgp2dnYqf/lxrQx62fPOp17whSjIKcpjLNTJbK5+oGJ6F75R4T855+Sc8+ec8zmoBWwCZT/TGtXbslijOhX7f1sZ9+2HEXPxaEd98xrwbMdn01wSvxmQJsb3P2Jg7MbJufbDWrsd4sGmu/jxapZoYmxFEzLFUtw9B/IB9FduPlR9hyHdI/SD8hwSwgCo7MuBRpEAI/QCXnRoIAZZtskjOJYAtHiDnrNEqu2QU5wxxkCB+sgoyiWVMfBnFOpDCOEJak/WFINal5etZ9I+J38HvEYBlpwUQ7zDANma3Bi59bGAH4Ph7FyoGNgjBng1SeTeAl4rCOGy0wl/sbF7mF4u/OBQO9IltDchgjWzZwUIbg08ImvVYs7UEm3zd68884vITczOCRC2gD8alBGHrJfTVQxrzow35jalnHhMZAaiAErBCBAqYNGPAaYcPOWQMAHYdUCMBgiES4PNJtjCXTESB3HiyRUo1fq7FA/g2o1BxkCFZzTpDav6exfWYBCQAlE2HAmDAGPACknfXit8SoBDLO2EDZK0ghn4xyByCiAWk4mZN1HwhGgBbYztfGyNA76+Hn/hZs81BzMzB1zx+g80Jkh+5laUEWVO9qKTXIcmuC3SABXABsT47vH4gRQYgDTmMOSPoD8Dd85MlgNs5ws6POHzFFQ/xxDAujpgIxJa/+VyLScVn0xKCtkQJQVxPiZ0XDoAFuAAGsODCuzPufQXgQ5J3ygbIWnGfuGQOQYDTGuCHn37rA+7EnyKINWee/npaMQ9MjM2zOUGoiduHOE+CeN6x8oogiEM6UFLgkiEAj9rJAVcL8DICQlDXSiVkAF7+bJRYQCsb6Ad2McSLbzKTcXbIw9d63CvJ2BtHDrGN8UGokMJalxAk4KfJJHZTCqAtQfqgJsbYtjZ9QHrfgGecBLit9AniHYkJqNYlGxiD1ZTccwiSeK1kzVPziIsoRyEI9YNkoVo/1pDdVuoZh3a3vgAVgmiBz64McBRAARvA7fYBIfDqA1RkcA3wgBx7sYDeOAKJxRf4KTtzGG/PImzchxwIKHbmyNpcpyS0Zq2YZ5VYKaUAJAI0wQWCuAeWlDyRFtT6U9KIyYdoxdBvnLD3/tt3wT87OMCybctzrX67fUg4RRAYE8N4ux5++s2fNffnyVroXgRhb+KhsTHlE+YfmyAhhx/4LLEzIwhwhSABnNauHdAqn7R82CejAKsSKsTIWQTIk5UQQB8fygZxjPFztkgW4aMPeWQbRDGHtfCxrpBEKwY1jiDmHRPgAjqgAmQKNPr8bojBxo6rz3uDGeAMAJOVW2ABXXZl9wEkyWHbO+HLxvz6Au7YaAHcutLHnuizRuswl/gtQdxbc7setsgaLLb3mSd92r0IgsGCmXhofEzNYwHHJIgfyDOelTkiwARUdvUQJKDWAieQsmOTs0CbUfTl06tzA/Igjnj8gBh4+SFZ/u4SH0Tgh0T6+YuJMOz1WwtymM96QopkEnMglWcxPiXeiXcacCOFvgAXsAiiAGDsMpbdlwAlYHm/bLTuQw7i/YsdG3G8o5DFu6KZv52vfZfadj3W3MYg1ux5+nO1MabmWUSQsNUDEiRZSi6A5bcVQawH+71wzyZrtC/wLAE6gAVe4APEEMU9wAIrgAMswANwMooxPmyBPFlEJlAeATfAJnuwibZZxPwI4z4xzZ3xEMEajGn1W6c1GfMcCKIEPEuAIZrfS9vek/RFh6Rv0/pHhuLoa237NrGLxD5juaettDb9GKQ/3tosIghQt84CI8xSkmAoogyNDal57QJTah12AruI3SokXirAmF0dCYA7BMl5AeCAF6DdAyt1DfRIkYwS8oihX0x2/Mc02cFaxOUnjsxiDAFaYiRjJJNYq3vkQCpfxkr2k0UEsSv3BRABfsh+LVUfHkOyk6Q00coEySTJKsBvLP/0QzZAgAAXCYAbOJEDaJHCNQJR1zIK0FMxk1X0AziymEdMNuImA1kHO8QJMfiw1bL1DNp2UytZJgcThOQAN+Szhh6LIBFkyO4LgBQBkMHubHcHXmVRyioE0G+cAjRCpcxCgJQ9fPiLay4K8GIYM6/52vLKGALJKPxc60MSvmzZIUfOLp4BafslR8l8WYUgxGFtaak1V49NEOAGZAqEdmEgBF4gt2Pr7xOEX5tJ9MkUyKBNNpAlEMZ1yjOgDiGMuxaLLzv+CCBTIAeSZD7rCaFigxxUvJL9ZTWCSOPOAUN+h+qxCaJ0AkwAA+qQxK48lkGM6x/LIO6RK/EAGZFCENeALQ4N8BEDeRBCi1iujYnHL8rfGpI9rLGyx2GyGkG8COcRn8mGfA/RYxPEswAckCFAQJ3SZ+kZJCWSPiURG+DWz0+rNEIURGJH3fNL1kAKsdmYi1+yhjExkNO6ZT+EKjlMViNIxCdcf8wZ8t9Xj00QYufPThyS5NPr0FcsYHStPGKHRMkI+hBBHKUacAM0G7GAH+jF4CO2+ZAoh3ZZQwz3CBHSmJOvuOIhhjVbQ329OlxWJwjxuXXN88h5EKTNIjlYA502JRVAI0cyhjGkCTGQDNiBGxGMsQdwfWwAXAvg/GQXsfjKDsbYAn8IYV6kcK2Pb+6tobLHerIJQZRa/sI5FGMfPQ+CEDswUiBJMgnwATHyACQw2+0BWHkDzIiAGEoe43Z+NsYCbsBGmlbFQCD2iKGNbT7dujd/SMPGvbmzVuuq7LGOnPjDmr9jzNElQPXHOoQairNUkfi8RCmUsiXZJCRozxj6Ul4BubIIKYwhCTAjFZDrp0jUKmAjgjnF5Qf4+vnmHinEFztZTDwEpuYqWUfq/wc5Q5RagBiC0IBQSaS8AWYATXZAHNcIgxA53AM+kNvdo0oprazrmr+zB1KICfzi8EUi9+ZDSJmD6k/24FtfrtaTIsgMAWBAb0niPgd5IHVeQBwAp8CNPMDdlkiAzIeyofpofGQLJBBfbGRBMOTKvTmQJUTKmooc60oRZKYAeoBIcxaxs+sHWPeArgVwoDYmAyFQDuqA3p490qd1LyYf4JelZKucN9yzCeFkD+thi1Al60oRZIEAsJ0/JJEx9AErIgBuSALgxgDbuQGQ2QCy8ihgp671GWPnPiSTfdggA+KYQ5ah7K2DD4KVrC9FkIUCtAgQkgScSII8MgkbgEcg4NaX84bDtWyCAEokLeAjkizlLMI/5RM1zjdfzhAu2cz8/Eq2kSLIHgKsCBCSAKudHpCRJNmDIggQIws72QGZgD2av6oDP/LJFvr4Az8bMcRip7yjsghClWwnRZA9RUYAXMBHEsBGEBkCCZABmJNRqMwhMyBIwC4bIINMIovkLMLWOLKwTRlnLiQ0d/0z9u2lCHKA+GKEAHb+7OoADewADthAbfeXcYDcGB9EknWQIsRBlpxF8jWLD/82Pr/6WnUcKYKsIMocwM8On4wiA8gqOXPIFLILkCMBdZ2yC0nYa/W1HwSQxFhljeNKEWRFAV5kyAE94Lbz52yRkkp2oK5lGmMtIagYiCLLFDHOR4ogGwgwO1zLGgBu9wd+RGkJEE35xCaHcdnCx4AixvlKEWRjcVZwoEcYf8Nw9pARWtVnLJ9563zxnyNFkJKSCSmClJRMSBGkpGRCiiAlJRNSBCkpmZAiSEnJqHTdvwEWqm/WVm9KNAAAAABJRU5ErkJggg=="
    },
    84: function (e, t, a) {
      e.exports = { breadcrumb: "Dashboard_breadcrumb__3SvNo" }
    },
    87: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(3),
        r = a.n(n),
        c = a(4),
        o = a(20),
        E = a(14),
        u = a(15),
        s = a(17),
        i = a(16),
        l = a(0),
        S = a.n(l),
        d = a(129),
        _ = a(126),
        p = a(13),
        m = a(8),
        O = a(53),
        C = a(54),
        f = a(22),
        R = a(7),
        A = (function () {
          var e = Object(c.a)(
            r.a.mark(function e(t) {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(R.a)({ url: "/api/mailer/quote", method: "POST", data: t })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        T = a(37),
        b = a.n(T),
        U = a(56),
        h = a.n(U),
        j = (function (e) {
          Object(s.a)(a, e)
          var t = Object(i.a)(a)
          function a() {
            var e
            Object(E.a)(this, a)
            for (var n = arguments.length, u = new Array(n), s = 0; s < n; s++) u[s] = arguments[s]
            return (
              ((e = t.call.apply(t, [this].concat(u))).state = {
                isModalOpen: null,
                fileName: "",
                to: e.props.users
                  .map(function (e) {
                    return e.email1
                  })
                  .join(", "),
              }),
              (e.toggleEmail = function (t) {
                e.setState({ isModalOpen: t })
              }),
              (e.onChange = function (t) {
                e.setState(Object(o.a)({}, t.target.name, t.target.value))
              }),
              (e.onSend = (function () {
                var t = Object(c.a)(
                  r.a.mark(function t(a, n) {
                    var c, o, E, u, s
                    return r.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (c = e.state),
                              (o = c.subject),
                              (E = c.text),
                              (u = c.to),
                              (s = e.props.from),
                              (t.next = 5),
                              A({ to: u, from: s, subject: o, text: E, filename: n })
                            )
                          case 5:
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
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getQuotes(this.props.projectId)
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.quotes,
                    a = e.removeQuote,
                    n = this.state
                  n.isModalOpen, n.to, n.fileName
                  return S.a.createElement(
                    "div",
                    { className: "ms-panel" },
                    S.a.createElement(
                      "div",
                      { className: "ms-panel-header ".concat(h.a.headermini) },
                      S.a.createElement(
                        "div",
                        { className: "d-flex justify-content-between ".concat(h.a.header) },
                        S.a.createElement("h6", null, "Quote")
                      )
                    ),
                    S.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      S.a.createElement(
                        "div",
                        { className: "table-responsive" },
                        S.a.createElement(
                          d.a,
                          { striped: !0, bordered: !0, hover: !0 },
                          S.a.createElement(
                            "thead",
                            null,
                            S.a.createElement(
                              "tr",
                              null,
                              S.a.createElement("th", { scope: "col" }, "Number"),
                              S.a.createElement("th", { scope: "col" }, "Date"),
                              S.a.createElement("th", { scope: "col" }, "Edit"),
                              S.a.createElement("th", { scope: "col" }, "File"),
                              S.a.createElement("th", { scope: "col" }, "Delete")
                            )
                          ),
                          S.a.createElement(
                            "tbody",
                            null,
                            t
                              .sort(function (e, t) {
                                return new Date(e.createdAt) - new Date(t.createdAt)
                              })
                              .map(function (e, t) {
                                var n = e.id,
                                  r = e.createdAt,
                                  c = e.projectId,
                                  o = e.name,
                                  E = e.converted
                                return S.a.createElement(
                                  "tr",
                                  null,
                                  S.a.createElement("td", null, t + 1),
                                  S.a.createElement("td", null, b()(r).format("LLLL")),
                                  S.a.createElement(
                                    "td",
                                    null,
                                    S.a.createElement(
                                      m.b,
                                      {
                                        to: "/dashboard/project/".concat(c, "/quote/").concat(o),
                                        className: "btn-primary btn mt-0",
                                      },
                                      "Edit Quote"
                                    )
                                  ),
                                  S.a.createElement(
                                    "td",
                                    null,
                                    E
                                      ? S.a.createElement(
                                          "a",
                                          {
                                            href: "https://kp-admin-stg.herokuapp.com/api/quote/files/".concat(o),
                                            target: "_blank",
                                          },
                                          o,
                                          ".pdf"
                                        )
                                      : S.a.createElement("p", null, "You need to convert to PDF")
                                  ),
                                  S.a.createElement(
                                    "td",
                                    null,
                                    S.a.createElement(
                                      _.a,
                                      {
                                        variant: "primary",
                                        onClick: function () {
                                          return a(n)
                                        },
                                      },
                                      "Delete"
                                    )
                                  )
                                )
                              })
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
        })(l.Component)
      t.default = Object(p.b)(
        function (e) {
          return { from: Object(f.e)(e), quotes: Object(C.d)(e), error: Object(C.h)(e) }
        },
        { getQuotes: O.j, removeQuote: O.m }
      )(j)
    },
    89: function (e, t, a) {
      e.exports = a(125)
    },
  },
  [[89, 7, 8]],
])
//# sourceMappingURL=main.67c0f340.chunk.js.map
