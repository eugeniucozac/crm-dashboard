;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [17],
  {
    163: function (e, a, t) {
      "use strict"
      t.d(a, "a", function () {
        return m
      })
      var r = t(0),
        n = t.n(r),
        l = t(66),
        c = t(50),
        d = t(44),
        u = t(51),
        o = t(52),
        i = t(126),
        s = t(30),
        m = function (e) {
          var a = e.name,
            t = e.label,
            r = e.onChange,
            m = e.isModalOpen,
            p = e.hardwares,
            h = e.showModal,
            f = e.add,
            g = e.error
          return p.length
            ? n.a.createElement(
                l.a,
                null,
                n.a.createElement(
                  c.a,
                  { as: d.a },
                  n.a.createElement(u.a, null, t, " Name"),
                  g && n.a.createElement("div", { className: "invalid-feedback ".concat(f && "add") }, g),
                  n.a.createElement(
                    l.a,
                    { className: "hardware margin-label" },
                    n.a.createElement(
                      d.a,
                      { lg: f ? 10 : null },
                      n.a.createElement(
                        o.a,
                        { as: "select", name: a, onChange: r, disabled: m, isInvalid: !!g },
                        n.a.createElement("option", { value: m }, "Select ", t, " Name"),
                        p.map(function (e) {
                          var a = e.id,
                            t = e.name
                          return n.a.createElement("option", { key: a, value: a }, t)
                        })
                      )
                    ),
                    f &&
                      n.a.createElement(
                        d.a,
                        { lg: 2 },
                        n.a.createElement(
                          i.a,
                          {
                            onClick: function () {
                              return h(t, f)
                            },
                            className: "btn btn-success",
                            name: "button",
                          },
                          n.a.createElement(s.m, null)
                        )
                      )
                  )
                )
              )
            : null
        }
    },
    339: function (e, a, t) {
      "use strict"
      t.r(a)
      var r = t(14),
        n = t(15),
        l = t(17),
        c = t(16),
        d = t(0),
        u = t.n(d),
        o = t(66),
        i = t(44),
        s = t(126),
        m = t(129),
        p = t(13),
        h = t(140),
        f = t(137),
        g = t(138),
        E = t(22),
        v = t(30),
        b = t(3),
        w = t.n(b),
        y = t(4),
        M = t(20),
        N = t(130),
        S = t(21),
        I = t(163),
        C = t(332),
        j = t(294),
        O = t(295),
        k = function (e) {
          var a,
            t = e.isModalOpen,
            r = e.hideModal,
            n = e.title,
            l = e.onChange,
            c = e.addState,
            d = e.manufactures,
            o = e.errorType,
            i = e.errorManufacture,
            m = e.errorModel
          return (
            i ? (a = i) : o ? (a = o) : m && (a = m),
            u.a.createElement(
              C.a,
              { show: t, onHide: r, centered: !0 },
              u.a.createElement(
                N.a,
                { noValidate: !0, onSubmit: c },
                u.a.createElement(
                  C.a.Header,
                  { className: "bg-primary", closeButton: !0 },
                  u.a.createElement(
                    "h5",
                    { className: "modal-title has-icon text-white" },
                    u.a.createElement(v.r, null),
                    n
                  )
                ),
                u.a.createElement(
                  j.a,
                  null,
                  u.a.createElement(S.a, {
                    name: n.toLowerCase(),
                    label: "Add your new:",
                    placeholder: "".concat(n, " Name"),
                    onChange: l,
                    error: a && a.data.name,
                  }),
                  "Model" === t &&
                    u.a.createElement(I.a, {
                      name: "manufactureId",
                      label: "Manufacture",
                      onChange: l,
                      hardwares: d,
                      error: a && a.data.manufactureId,
                    })
                ),
                u.a.createElement(
                  O.a,
                  null,
                  u.a.createElement(
                    s.a,
                    { variant: "secondary", className: "swal2-styled btn-light", onClick: r },
                    "Cancel"
                  ),
                  u.a.createElement(
                    s.a,
                    { variant: "primary", type: "submit", className: "swal2-confirm swal2-styled" },
                    "Add"
                  )
                )
              )
            )
          )
        },
        x = (function (e) {
          Object(l.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(r.a)(this, t)
            for (var n = arguments.length, l = new Array(n), c = 0; c < n; c++) l[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                isModalOpen: "",
                getState: "",
                typeName: "",
                manufactureName: "",
                modelName: "",
                filterModel: 0,
              }),
              (e.onChange = function (a) {
                var t
                "typeId" === a.target.name && e.setState({ type: a.target.options[a.target.selectedIndex].text }),
                  "manufactureId" === a.target.name &&
                    e.setState({ manufacture: a.target.options[a.target.selectedIndex].text }),
                  "modelId" === a.target.name && e.setState({ model: a.target.options[a.target.selectedIndex].text }),
                  e.setState(
                    ((t = {}),
                    Object(M.a)(t, a.target.name, a.target.value),
                    Object(M.a)(t, "filterModel", e.state.manufactureId),
                    t)
                  )
              }),
              (e.toggleModal = function (a, t) {
                e.setState(function (e) {
                  return e.isModalOpen ? { isModalOpen: "", getState: "" } : { isModalOpen: a, getState: t }
                })
              }),
              (e.addNewType = (function () {
                var a = Object(y.a)(
                  w.a.mark(function a(t) {
                    var r, n
                    return w.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (r = e.state.type),
                                (n = e.props.addType),
                                (a.prev = 3),
                                (a.next = 6),
                                n({ name: r })
                              )
                            case 6:
                              e.setState({ isModalOpen: "" }), (a.next = 12)
                              break
                            case 9:
                              ;(a.prev = 9), (a.t0 = a.catch(3)), console.error(a.t0)
                            case 12:
                            case "end":
                              return a.stop()
                          }
                      },
                      a,
                      null,
                      [[3, 9]]
                    )
                  })
                )
                return function (e) {
                  return a.apply(this, arguments)
                }
              })()),
              (e.addNewModel = (function () {
                var a = Object(y.a)(
                  w.a.mark(function a(t) {
                    var r, n, l, c
                    return w.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (r = e.state),
                                (n = r.model),
                                (l = r.manufactureId),
                                (c = e.props.addModel),
                                (a.prev = 3),
                                (a.next = 6),
                                c({ name: n, manufactureId: l })
                              )
                            case 6:
                              e.setState({ isModalOpen: "" }), (a.next = 12)
                              break
                            case 9:
                              ;(a.prev = 9), (a.t0 = a.catch(3)), console.error(a.t0)
                            case 12:
                            case "end":
                              return a.stop()
                          }
                      },
                      a,
                      null,
                      [[3, 9]]
                    )
                  })
                )
                return function (e) {
                  return a.apply(this, arguments)
                }
              })()),
              (e.addNewManufacture = (function () {
                var a = Object(y.a)(
                  w.a.mark(function a(t) {
                    var r, n
                    return w.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (r = e.state.manufacture),
                                (n = e.props.addManufacture),
                                (a.prev = 3),
                                (a.next = 6),
                                n({ name: r })
                              )
                            case 6:
                              e.setState({ isModalOpen: "" }), (a.next = 12)
                              break
                            case 9:
                              ;(a.prev = 9), (a.t0 = a.catch(3)), console.error(a.t0)
                            case 12:
                            case "end":
                              return a.stop()
                          }
                      },
                      a,
                      null,
                      [[3, 9]]
                    )
                  })
                )
                return function (e) {
                  return a.apply(this, arguments)
                }
              })()),
              (e.onSubmit = (function () {
                var a = Object(y.a)(
                  w.a.mark(function a(t) {
                    var r, n, l, c, d, u, o, i, s
                    return w.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (r = e.state),
                              (n = r.typeId),
                              (l = r.modelId),
                              (c = r.serialNumber),
                              (d = r.manufactureId),
                              (u = r.typeName),
                              (o = r.manufactureName),
                              (i = r.modelName),
                              (s = e.props.addHardware),
                              (a.next = 5),
                              s(
                                { typeId: n, manufactureId: d, modelId: l, serialNumber: c, isFaulty: !1 },
                                { typeName: u, manufactureName: o, modelName: i }
                              )
                            )
                          case 5:
                            e.setState({ serialNumber: "" })
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
            Object(n.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    a = e.serialNumber,
                    t = e.isModalOpen,
                    r = e.getState,
                    n = this.props,
                    l = n.error,
                    c = n.types,
                    d = n.manufactures,
                    m = n.models,
                    p = n.errorType,
                    h = n.errorManufacture,
                    f = n.errorModel
                  return u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      u.a.createElement("h6", null, "Add Hardware")
                    ),
                    u.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      u.a.createElement(
                        N.a,
                        { noValidate: !0, onSubmit: this.onSubmit },
                        u.a.createElement(I.a, {
                          name: "typeId",
                          label: "Type",
                          onChange: this.onChange,
                          isModalOpen: t,
                          hardwares: c,
                          showModal: this.toggleModal,
                          add: this.addNewType,
                          error: l && l.data.typeId,
                        }),
                        u.a.createElement(I.a, {
                          name: "manufactureId",
                          label: "Manufacture",
                          onChange: this.onChange,
                          isModalOpen: t,
                          hardwares: d,
                          showModal: this.toggleModal,
                          add: this.addNewManufacture,
                          error: l && l.data.manufactureId,
                        }),
                        u.a.createElement(I.a, {
                          name: "modelId",
                          label: "Model",
                          onChange: this.onChange,
                          isModalOpen: t,
                          hardwares: m,
                          showModal: this.toggleModal,
                          add: this.addNewModel,
                          error: l && l.data.modelId,
                        }),
                        u.a.createElement(S.a, {
                          name: "serialNumber",
                          value: a,
                          label: "Serial Number",
                          placeholder: "Ex: 8932",
                          onChange: this.onChange,
                          error: l && l.data.serialNumber,
                        }),
                        u.a.createElement(
                          o.a,
                          null,
                          u.a.createElement(
                            i.a,
                            null,
                            u.a.createElement(
                              s.a,
                              { variant: "primary", type: "submit", className: "w-25 float-right" },
                              "Add"
                            )
                          )
                        )
                      )
                    ),
                    u.a.createElement(k, {
                      title: t,
                      hideModal: this.toggleModal,
                      addState: r,
                      isModalOpen: t,
                      onChange: this.onChange,
                      manufactures: d,
                      errorType: p,
                      errorManufacture: h,
                      errorModel: f,
                    })
                  )
                },
              },
            ]),
            t
          )
        })(d.Component),
        H = (function (e) {
          Object(l.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(r.a)(this, t)
            for (var n = arguments.length, l = new Array(n), c = 0; c < n; c++) l[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                id: e.props.hardwareToEdit.id,
                serialNumber: e.props.hardwareToEdit.serialNumber,
              }),
              (e.onChange = function (a) {
                e.setState(Object(M.a)({}, a.target.name, a.target.value))
              }),
              (e.onSubmit = (function () {
                var a = Object(y.a)(
                  w.a.mark(function a(t) {
                    var r, n, l, c, d, u
                    return w.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (r = e.props),
                              (n = r.updateHardware),
                              (l = r.hideHardware),
                              (c = e.state),
                              (d = c.id),
                              (u = c.serialNumber),
                              (a.next = 5),
                              n(d, { serialNumber: u })
                            )
                          case 5:
                            return (a.next = 7), l(null)
                          case 7:
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
            Object(n.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state.serialNumber,
                    a = this.props,
                    t = a.error,
                    r = a.hideHardware
                  return u.a.createElement(
                    u.a.Fragment,
                    null,
                    u.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      u.a.createElement("h6", null, "Edit hardware")
                    ),
                    u.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      u.a.createElement(
                        N.a,
                        { noValidate: !0, onSubmit: this.onSubmit },
                        u.a.createElement(S.a, {
                          name: "serialNumber",
                          value: e,
                          label: "Serial Number",
                          placeholder: "Ex: 8932",
                          onChange: this.onChange,
                          error: t && t.data.serialNumber,
                        }),
                        u.a.createElement(
                          o.a,
                          null,
                          u.a.createElement(
                            i.a,
                            null,
                            u.a.createElement(
                              s.a,
                              { variant: "primary", type: "submit", className: "w-25 float-right" },
                              "Update"
                            ),
                            u.a.createElement(
                              s.a,
                              {
                                className: "btn btn-primary w-25 mr-1 float-right",
                                onClick: function () {
                                  return r(null)
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
            t
          )
        })(d.Component),
        T = t(238),
        D = t(134),
        A = t(34),
        V = t(164),
        P = (function (e) {
          Object(l.a)(t, e)
          var a = Object(c.a)(t)
          function t() {
            var e
            Object(r.a)(this, t)
            for (var n = arguments.length, l = new Array(n), c = 0; c < n; c++) l[c] = arguments[c]
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                isModalOpen: null,
                currentDate: new Date(),
                inventoryData: null,
                hardwareId: null,
                currentPage: 1,
              }),
              (e.toggleModal = function (a) {
                e.setState({ isModalOpen: a })
              }),
              (e.addViewIssue = function (a, t) {
                e.setState({ inventoryData: { id: a, name: t } })
              }),
              (e.editHardware = function (a) {
                e.setState({
                  hardwareId: e.props.hardwares.find(function (e) {
                    return e.id === a
                  }),
                })
              }),
              (e.pageSwitcher = function (a) {
                "next" === a
                  ? e.setState({ currentPage: e.state.currentPage + 1 })
                  : e.setState({ currentPage: e.state.currentPage - 1 })
              }),
              e
            )
          }
          return (
            Object(n.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getManufactures(), this.props.getModels(), this.props.getTypes(), this.props.getHardwares()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    a = this.props,
                    t = a.error,
                    r = a.errorType,
                    n = a.errorManufacture,
                    l = a.roleName,
                    c = a.hardwares,
                    d = a.addHardware,
                    p = a.types,
                    f = a.manufactures,
                    g = a.models,
                    E = a.addType,
                    b = a.addManufacture,
                    w = a.addModel,
                    y = a.updateHardware,
                    M = a.loading,
                    N = a.removeHardware,
                    S = this.state,
                    I = S.isModalOpen,
                    C = S.inventoryData,
                    j = S.hardwareId,
                    O = 10 * S.currentPage,
                    k = O - 10,
                    P = []
                  P =
                    c.length &&
                    c
                      .sort(function (e, a) {
                        return new Date(a.createdAt) - new Date(e.createdAt)
                      })
                      .slice(k, O)
                  return M
                    ? u.a.createElement(A.a, null)
                    : u.a.createElement(
                        h.a,
                        null,
                        u.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          u.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            u.a.createElement("h6", null, "Hardwares")
                          ),
                          u.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            u.a.createElement(
                              m.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              u.a.createElement(
                                "thead",
                                null,
                                u.a.createElement(
                                  "tr",
                                  null,
                                  u.a.createElement("th", null, "Type"),
                                  u.a.createElement("th", null, "Manufacture"),
                                  u.a.createElement("th", null, "Model"),
                                  u.a.createElement("th", null, "Serial Number"),
                                  u.a.createElement("th", null, "Issues"),
                                  ("admin" === l || "technical-manager" === l) &&
                                    u.a.createElement(
                                      u.a.Fragment,
                                      null,
                                      u.a.createElement("th", null, "Edit"),
                                      u.a.createElement("th", null, "Delete?")
                                    )
                                )
                              ),
                              u.a.createElement(
                                "tbody",
                                null,
                                P.length
                                  ? P.map(function (a) {
                                      var t = a.id,
                                        r = a.serialNumber,
                                        n = a.type,
                                        c = a.model
                                      return u.a.createElement(
                                        "tr",
                                        { key: t },
                                        u.a.createElement("td", null, n.name),
                                        u.a.createElement("td", null, c.manufacture.name, " "),
                                        u.a.createElement("td", null, c.name),
                                        u.a.createElement("td", null, r),
                                        u.a.createElement(
                                          "td",
                                          null,
                                          u.a.createElement(
                                            s.a,
                                            {
                                              id: t,
                                              variant: "primary",
                                              onClick: function () {
                                                return e.addViewIssue(
                                                  t,
                                                  "".concat(c.manufacture.name, " ").concat(c.name)
                                                )
                                              },
                                            },
                                            "Add/View"
                                          )
                                        ),
                                        ("admin" === l || "technical-manager" === l) &&
                                          u.a.createElement(
                                            u.a.Fragment,
                                            null,
                                            u.a.createElement(
                                              "td",
                                              null,
                                              u.a.createElement(
                                                s.a,
                                                {
                                                  id: t,
                                                  variant: "primary",
                                                  onClick: function () {
                                                    return e.editHardware(t)
                                                  },
                                                },
                                                "Edit/Add Item"
                                              )
                                            ),
                                            u.a.createElement(
                                              "td",
                                              null,
                                              u.a.createElement(
                                                s.a,
                                                {
                                                  id: t,
                                                  variant: "primary",
                                                  onClick: function () {
                                                    return e.toggleModal(t)
                                                  },
                                                },
                                                "Delete Item"
                                              ),
                                              u.a.createElement(D.a, {
                                                id: t,
                                                hideModal: e.toggleModal,
                                                deleteState: function () {
                                                  return N(t)
                                                },
                                                isModalOpen: I,
                                              })
                                            )
                                          )
                                      )
                                    })
                                  : null
                              )
                            ),
                            u.a.createElement(
                              o.a,
                              { className: "pagination" },
                              u.a.createElement(
                                i.a,
                                { lg: "9" },
                                u.a.createElement(
                                  "p",
                                  null,
                                  "Showing ",
                                  k + 1,
                                  "-",
                                  c.length > k && c.length < O ? c.length : O,
                                  " of",
                                  " ",
                                  c.length,
                                  " entries"
                                )
                              ),
                              u.a.createElement(
                                i.a,
                                null,
                                u.a.createElement(
                                  "div",
                                  { className: "arrows d-flex justify-content-end" },
                                  u.a.createElement(
                                    s.a,
                                    {
                                      onClick: function () {
                                        return e.pageSwitcher("prev")
                                      },
                                      disabled: 0 === k,
                                    },
                                    u.a.createElement(v.d, null)
                                  ),
                                  u.a.createElement(
                                    s.a,
                                    {
                                      onClick: function () {
                                        return e.pageSwitcher("next")
                                      },
                                      disabled: O >= c.length,
                                    },
                                    u.a.createElement(v.e, null)
                                  )
                                )
                              )
                            )
                          )
                        ),
                        u.a.createElement(
                          o.a,
                          null,
                          ("admin" === l || "technical-manager" === l) &&
                            u.a.createElement(
                              i.a,
                              { lg: "5" },
                              u.a.createElement(
                                "div",
                                { className: "ms-panel" },
                                j
                                  ? u.a.createElement(H, {
                                      hardwareToEdit: j,
                                      hideHardware: this.editHardware,
                                      updateHardware: y,
                                      error: t,
                                    })
                                  : u.a.createElement(x, {
                                      addHardware: d,
                                      addType: E,
                                      addManufacture: b,
                                      addModel: w,
                                      types: p,
                                      manufactures: f,
                                      models: g,
                                      error: t,
                                      errorType: r,
                                      errorManufacture: n,
                                    })
                              )
                            ),
                          u.a.createElement(
                            i.a,
                            { lg: "7" },
                            C &&
                              u.a.createElement(T.a, {
                                inventory: C,
                                addViewIssue: this.addViewIssue,
                                category: V.b.find(function (e) {
                                  return "Hardware" === e.name
                                }),
                              })
                          )
                        )
                      )
                },
              },
            ]),
            t
          )
        })(d.Component)
      a.default = Object(p.b)(
        function (e) {
          return {
            hardwares: Object(g.a)(e),
            loading: Object(g.h)(e),
            error: Object(g.f)(e),
            errorType: Object(g.n)(e),
            errorManufacture: Object(g.l)(e),
            roleName: Object(E.f)(e),
            types: Object(g.e)(e),
            manufactures: Object(g.c)(e),
            models: Object(g.d)(e),
          }
        },
        {
          getHardwares: f.f,
          removeHardware: f.k,
          getManufactures: f.h,
          addHardware: f.a,
          getTypes: f.j,
          getModels: f.i,
          updateHardware: f.t,
          addType: f.e,
          addManufacture: f.c,
          addModel: f.d,
        }
      )(P)
    },
  },
])
//# sourceMappingURL=17.c98d835c.chunk.js.map
