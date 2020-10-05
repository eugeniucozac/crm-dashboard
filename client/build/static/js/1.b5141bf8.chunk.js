;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [1],
  {
    134: function (t, n, e) {
      "use strict"
      e.d(n, "a", function () {
        return i
      })
      var r = e(0),
        a = e.n(r),
        u = e(332),
        c = e(294),
        o = e(126),
        i = function (t) {
          var n = t.id,
            e = t.hideModal,
            r = t.isModalOpen,
            i = t.deleteState,
            s = t.currentUser
          return a.a.createElement(
            u.a,
            { show: r === n, onHide: e, centered: !0 },
            a.a.createElement(
              c.a,
              { className: "swal2-header" },
              a.a.createElement(
                "div",
                { className: "swal2-icon swal2-warning swal2-animate-warning-icon" },
                a.a.createElement("span", { className: "swal2-icon-text" }, "!")
              ),
              a.a.createElement(
                "h2",
                { className: "swal2-title", id: "swal2-title" },
                s === n ? "You cannot Delete yourself" : "Are you sure?"
              ),
              s !== n && a.a.createElement("div", { id: "swal2-content" }, "You won't be able to revert this!"),
              a.a.createElement(
                "div",
                { className: "swal2-actions" },
                s !== n &&
                  a.a.createElement(
                    o.a,
                    { variant: "primary", className: "swal2-confirm swal2-styled", onClick: i },
                    "Yes, delete it!"
                  ),
                a.a.createElement(
                  o.a,
                  {
                    variant: "secondary",
                    className: "swal2-cancel swal2-styled",
                    onClick: function () {
                      return e(null)
                    },
                  },
                  "Cancel"
                )
              )
            )
          )
        }
    },
    137: function (t, n, e) {
      "use strict"
      var r = e(3),
        a = e.n(r),
        u = e(4),
        c = e(1),
        o = e(7),
        i = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/calibrationNotification", method: "POST", data: n })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        s = (function () {
          var t = Object(u.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/type", method: "GET" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        p = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/type", method: "POST", data: n })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        f = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/type/".concat(n), method: "DELETE" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        l = (function () {
          var t = Object(u.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/manufacture", method: "GET" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        d = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              var e
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/manufacture", method: "POST", data: n })
                    case 2:
                      return (e = t.sent), t.abrupt("return", e)
                    case 4:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        v = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              var e
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), Object(o.a)({ url: "/api/inventory/manufacture/".concat(n), method: "DELETE" })
                      )
                    case 2:
                      return (e = t.sent), t.abrupt("return", e)
                    case 4:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        E = (function () {
          var t = Object(u.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/model", method: "GET" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        y = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              var e
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/model", method: "POST", data: n })
                    case 2:
                      return (e = t.sent), t.abrupt("return", e)
                    case 4:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        h = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              var e
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/model/".concat(n), method: "DELETE" })
                    case 2:
                      return (e = t.sent), t.abrupt("return", e)
                    case 4:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        m = (function () {
          var t = Object(u.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/hardware", method: "GET" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        w = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/hardware", method: "POST", data: n })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        b = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n, e) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2), Object(o.a)({ url: "/api/inventory/hardware/".concat(n), method: "PUT", data: e })
                      )
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n, e) {
            return t.apply(this, arguments)
          }
        })(),
        S = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/hardware/".concat(n), method: "DELETE" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        x = (function () {
          var t = Object(u.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/kit", method: "GET" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })(),
        O = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/kit", method: "POST", data: n })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })(),
        _ = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n, e) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/kit/".concat(n), method: "PUT", data: e })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n, e) {
            return t.apply(this, arguments)
          }
        })(),
        T = (function () {
          var t = Object(u.a)(
            a.a.mark(function t(n) {
              return a.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), Object(o.a)({ url: "/api/inventory/kit/".concat(n), method: "DELETE" })
                    case 2:
                      return t.abrupt("return", t.sent)
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (n) {
            return t.apply(this, arguments)
          }
        })()
      e.d(n, "s", function () {
        return k
      }),
        e.d(n, "j", function () {
          return R
        }),
        e.d(n, "e", function () {
          return A
        }),
        e.d(n, "o", function () {
          return U
        }),
        e.d(n, "h", function () {
          return j
        }),
        e.d(n, "c", function () {
          return C
        }),
        e.d(n, "m", function () {
          return D
        }),
        e.d(n, "i", function () {
          return I
        }),
        e.d(n, "d", function () {
          return M
        }),
        e.d(n, "n", function () {
          return L
        }),
        e.d(n, "f", function () {
          return F
        }),
        e.d(n, "a", function () {
          return N
        }),
        e.d(n, "t", function () {
          return g
        }),
        e.d(n, "k", function () {
          return G
        }),
        e.d(n, "g", function () {
          return P
        }),
        e.d(n, "b", function () {
          return H
        }),
        e.d(n, "u", function () {
          return K
        }),
        e.d(n, "l", function () {
          return V
        }),
        e.d(n, "p", function () {
          return W
        }),
        e.d(n, "q", function () {
          return Y
        }),
        e.d(n, "r", function () {
          return Q
        })
      var k = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), i(t)
                        case 3:
                          e({ type: c.c.SEND_NOTIFICATION_SUCCESS }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.c.SEND_NOTIFICATION_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        R = function () {
          return (function () {
            var t = Object(u.a)(
              a.a.mark(function t(n) {
                var e
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: c.l.GET_TYPES_REQUEST }), (t.prev = 1), (t.next = 4), s()
                        case 4:
                          ;(e = t.sent), n({ type: c.l.GET_TYPES_SUCCESS, payload: e }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: c.l.GET_TYPES_FAILURE, payload: t.t0 })
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
            return function (n) {
              return t.apply(this, arguments)
            }
          })()
        },
        A = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                var r
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), p(t)
                        case 3:
                          ;(r = n.sent), e({ type: c.l.ADD_TYPE_SUCCESS, payload: r }), (n.next = 11)
                          break
                        case 7:
                          throw (
                            ((n.prev = 7), (n.t0 = n.catch(0)), e({ type: c.l.ADD_TYPE_FAILURE, payload: n.t0 }), n.t0)
                          )
                        case 11:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        U = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), f(t)
                        case 3:
                          e({ type: c.l.REMOVE_TYPE_SUCCESS, payload: t }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.l.REMOVE_TYPE_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        j = function () {
          return (function () {
            var t = Object(u.a)(
              a.a.mark(function t(n) {
                var e
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: c.h.GET_MANUFACTURES_REQUEST }), (t.prev = 1), (t.next = 4), l()
                        case 4:
                          ;(e = t.sent), n({ type: c.h.GET_MANUFACTURES_SUCCESS, payload: e }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: c.h.GET_MANUFACTURES_FAILURE, payload: t.t0 })
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
            return function (n) {
              return t.apply(this, arguments)
            }
          })()
        },
        C = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                var r
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), d(t)
                        case 3:
                          ;(r = n.sent), e({ type: c.h.ADD_MANUFACTURE_SUCCESS, payload: r }), (n.next = 11)
                          break
                        case 7:
                          throw (
                            ((n.prev = 7),
                            (n.t0 = n.catch(0)),
                            e({ type: c.h.ADD_MANUFACTURE_FAILURE, payload: n.t0 }),
                            n.t0)
                          )
                        case 11:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        D = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), v(t)
                        case 3:
                          e({ type: c.h.REMOVE_MANUFACTURE_SUCCESS, payload: t }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.h.REMOVE_MANUFACTURE_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        I = function () {
          return (function () {
            var t = Object(u.a)(
              a.a.mark(function t(n) {
                var e
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: c.i.GET_MODELS_REQUEST }), (t.prev = 1), (t.next = 4), E()
                        case 4:
                          ;(e = t.sent), n({ type: c.i.GET_MODELS_SUCCESS, payload: e }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: c.i.GET_MODELS_FAILURE, payload: t.t0 })
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
            return function (n) {
              return t.apply(this, arguments)
            }
          })()
        },
        M = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                var r
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), y(t)
                        case 3:
                          ;(r = n.sent), e({ type: c.i.ADD_MODEL_SUCCESS, payload: r }), (n.next = 11)
                          break
                        case 7:
                          throw (
                            ((n.prev = 7), (n.t0 = n.catch(0)), e({ type: c.i.ADD_MODEL_FAILURE, payload: n.t0 }), n.t0)
                          )
                        case 11:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        L = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), h(t)
                        case 3:
                          e({ type: c.i.REMOVE_MODEL_SUCCESS, payload: t }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.i.REMOVE_MODEL_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        F = function () {
          return (function () {
            var t = Object(u.a)(
              a.a.mark(function t(n) {
                var e
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: c.e.GET_HARDWARES_REQUEST }), (t.prev = 1), (t.next = 4), m()
                        case 4:
                          ;(e = t.sent), n({ type: c.e.GET_HARDWARES_SUCCESS, payload: e }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: c.e.GET_HARDWARES_FAILURE, payload: t.t0 })
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
            return function (n) {
              return t.apply(this, arguments)
            }
          })()
        },
        N = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                var r
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), w(t)
                        case 3:
                          ;(r = n.sent), e({ type: c.e.ADD_HARDWARE_SUCCESS, payload: r }), (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7), (n.t0 = n.catch(0)), e({ type: c.e.ADD_HARDWARE_FAILURE, payload: n.t0 })
                        case 10:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        g = function (t, n) {
          return (function () {
            var e = Object(u.a)(
              a.a.mark(function e(r) {
                var u
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), b(t, n)
                        case 3:
                          ;(u = e.sent),
                            r({ type: c.e.UPDATE_HARDWARE_SUCCESS, payload: { data: u, id: t } }),
                            (e.next = 10)
                          break
                        case 7:
                          ;(e.prev = 7), (e.t0 = e.catch(0)), r({ type: c.e.UPDATE_HARDWARE_FAILURE, payload: e.t0 })
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
        G = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), S(t)
                        case 3:
                          e({ type: c.e.REMOVE_HARDWARE_SUCCESS, payload: t }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.e.REMOVE_HARDWARE_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        P = function () {
          return (function () {
            var t = Object(u.a)(
              a.a.mark(function t(n) {
                var e
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: c.g.GET_KITS_REQUEST }), (t.prev = 1), (t.next = 4), x()
                        case 4:
                          ;(e = t.sent), n({ type: c.g.GET_KITS_SUCCESS, payload: e }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: c.g.GET_KITS_FAILURE, payload: t.t0 })
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
            return function (n) {
              return t.apply(this, arguments)
            }
          })()
        },
        H = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                var r
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), O(t)
                        case 3:
                          ;(r = n.sent), e({ type: c.g.ADD_KIT_SUCCESS, payload: r }), (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7), (n.t0 = n.catch(0)), e({ type: c.g.ADD_KIT_FAILURE, payload: n.t0 })
                        case 10:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 7]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        K = function (t, n) {
          return (function () {
            var e = Object(u.a)(
              a.a.mark(function e(r) {
                var u
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), _(t, n)
                        case 3:
                          ;(u = e.sent), r({ type: c.g.UPDATE_KIT_SUCCESS, payload: { data: u, id: t } }), (e.next = 10)
                          break
                        case 7:
                          ;(e.prev = 7), (e.t0 = e.catch(0)), r({ type: c.g.UPDATE_KIT_FAILURE, payload: e.t0 })
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
        V = function (t) {
          return (function () {
            var n = Object(u.a)(
              a.a.mark(function n(e) {
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), T(t)
                        case 3:
                          e({ type: c.g.REMOVE_KIT_SUCCESS, payload: t }), (n.next = 9)
                          break
                        case 6:
                          ;(n.prev = 6), (n.t0 = n.catch(0)), e({ type: c.g.REMOVE_KIT_FAILURE, payload: n.t0 })
                        case 9:
                        case "end":
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 6]]
                )
              })
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        },
        W = function () {
          return function (t) {
            t({ type: c.h.RESET_ERRORS_SUCCESS })
          }
        },
        Y = function () {
          return function (t) {
            t({ type: c.i.RESET_ERRORS_SUCCESS })
          }
        },
        Q = function () {
          return function (t) {
            t({ type: c.l.RESET_ERRORS_SUCCESS })
          }
        }
    },
    138: function (t, n, e) {
      "use strict"
      e.d(n, "e", function () {
        return r
      }),
        e.d(n, "k", function () {
          return a
        }),
        e.d(n, "n", function () {
          return u
        }),
        e.d(n, "c", function () {
          return c
        }),
        e.d(n, "i", function () {
          return o
        }),
        e.d(n, "l", function () {
          return i
        }),
        e.d(n, "d", function () {
          return s
        }),
        e.d(n, "j", function () {
          return p
        }),
        e.d(n, "m", function () {
          return f
        }),
        e.d(n, "b", function () {
          return l
        }),
        e.d(n, "g", function () {
          return d
        }),
        e.d(n, "a", function () {
          return v
        }),
        e.d(n, "h", function () {
          return E
        }),
        e.d(n, "f", function () {
          return y
        })
      var r = function (t) {
          return t.inventoryType.data
        },
        a = function (t) {
          return t.inventoryType.loading
        },
        u = function (t) {
          return t.inventoryType.error
        },
        c = function (t) {
          return t.inventoryManufacture.data
        },
        o = function (t) {
          return t.inventoryManufacture.loading
        },
        i = function (t) {
          return t.inventoryManufacture.error
        },
        s = function (t) {
          return t.inventoryModel.data
        },
        p = function (t) {
          return t.inventoryModel.loading
        },
        f = function (t) {
          return t.inventoryModel.error
        },
        l = function (t) {
          return t.inventoryKit.data
        },
        d = function (t) {
          return t.inventoryKit.error
        },
        v = function (t) {
          return t.inventoryHardware.data
        },
        E = function (t) {
          return t.inventoryHardware.loading
        },
        y = function (t) {
          return t.inventoryHardware.error
        }
    },
    140: function (t, n, e) {
      "use strict"
      var r = e(0),
        a = e.n(r),
        u = e(66),
        c = e(44),
        o = e(38),
        i = e(14),
        s = e(15),
        p = e(17),
        f = e(16),
        l = e(13),
        d = e(137),
        v = e(138),
        E = (function (t) {
          Object(p.a)(e, t)
          var n = Object(f.a)(e)
          function e() {
            var t
            Object(i.a)(this, e)
            for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u]
            return ((t = n.call.apply(n, [this].concat(a))).state = { newDate: new Date() }), t
          }
          return (
            Object(s.a)(e, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getKits()
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this,
                    n = this.props.kits,
                    e = []
                  return (
                    n &&
                      (e = n.filter(function (n) {
                        var e = (new Date(n.calibrationDueDate) - t.state.newDate) / 864e5
                        return e < 14 && e > 0
                      })),
                    e.length
                      ? a.a.createElement(
                          a.a.Fragment,
                          null,
                          e &&
                            a.a.createElement(
                              u.a,
                              null,
                              a.a.createElement(
                                c.a,
                                null,
                                a.a.createElement(
                                  "div",
                                  { className: "ms-panel" },
                                  a.a.createElement(
                                    "div",
                                    { className: "ms-panel-body ms-news-flash-container" },
                                    a.a.createElement(
                                      "div",
                                      { className: "ms-news-update" },
                                      a.a.createElement("span", null, "Calibration Alert")
                                    ),
                                    a.a.createElement(
                                      "ul",
                                      { id: "news-flash" },
                                      a.a.createElement(
                                        "li",
                                        null,
                                        a.a.createElement(
                                          "p",
                                          null,
                                          "We need to make calibration for next hardwares and kits:",
                                          " ",
                                          e
                                            .map(function (t) {
                                              return t.name
                                            })
                                            .join(", ")
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                        )
                      : null
                  )
                },
              },
            ]),
            e
          )
        })(r.Component),
        y = Object(l.b)(
          function (t) {
            return { kits: Object(v.b)(t) }
          },
          { getKits: d.g }
        )(E)
      e.d(n, "a", function () {
        return h
      })
      var h = function (t) {
        var n = t.children
        return a.a.createElement(
          "section",
          { className: "main" },
          a.a.createElement(
            u.a,
            null,
            a.a.createElement(c.a, null, a.a.createElement(o.a, null)),
            a.a.createElement(c.a, { lg: "11", className: "container-left" }, a.a.createElement(y, null), n)
          )
        )
      }
    },
  },
])
//# sourceMappingURL=1.b5141bf8.chunk.js.map
