;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [11],
  {
    137: function (e, t, n) {
      "use strict"
      var r = n(3),
        a = n.n(r),
        c = n(4),
        u = n(1),
        s = n(7),
        i = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/calibrationNotification", method: "POST", data: t })
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
        o = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/type", method: "GET" })
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
        l = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/type", method: "POST", data: t })
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
        p = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/type/".concat(t), method: "DELETE" })
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
        f = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/manufacture", method: "GET" })
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
            a.a.mark(function e(t) {
              var n
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/manufacture", method: "POST", data: t })
                    case 2:
                      return (n = e.sent), e.abrupt("return", n)
                    case 4:
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
            a.a.mark(function e(t) {
              var n
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(s.a)({ url: "/api/inventory/manufacture/".concat(t), method: "DELETE" })
                      )
                    case 2:
                      return (n = e.sent), e.abrupt("return", n)
                    case 4:
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
        E = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/model", method: "GET" })
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
        v = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var n
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/model", method: "POST", data: t })
                    case 2:
                      return (n = e.sent), e.abrupt("return", n)
                    case 4:
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
        h = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              var n
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/model/".concat(t), method: "DELETE" })
                    case 2:
                      return (n = e.sent), e.abrupt("return", n)
                    case 4:
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
        y = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/hardware", method: "GET" })
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
        b = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/hardware", method: "POST", data: t })
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
        g = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t, n) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(s.a)({ url: "/api/inventory/hardware/".concat(t), method: "PUT", data: n })
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
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        S = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/hardware/".concat(t), method: "DELETE" })
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
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/kit", method: "GET" })
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
        w = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/kit", method: "POST", data: t })
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
            a.a.mark(function e(t, n) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/kit/".concat(t), method: "PUT", data: n })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        x = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/inventory/kit/".concat(t), method: "DELETE" })
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
        })()
      n.d(t, "s", function () {
        return j
      }),
        n.d(t, "j", function () {
          return T
        }),
        n.d(t, "e", function () {
          return k
        }),
        n.d(t, "o", function () {
          return C
        }),
        n.d(t, "h", function () {
          return A
        }),
        n.d(t, "c", function () {
          return I
        }),
        n.d(t, "m", function () {
          return N
        }),
        n.d(t, "i", function () {
          return U
        }),
        n.d(t, "d", function () {
          return R
        }),
        n.d(t, "n", function () {
          return M
        }),
        n.d(t, "f", function () {
          return D
        }),
        n.d(t, "a", function () {
          return L
        }),
        n.d(t, "t", function () {
          return G
        }),
        n.d(t, "k", function () {
          return F
        }),
        n.d(t, "g", function () {
          return P
        }),
        n.d(t, "b", function () {
          return H
        }),
        n.d(t, "u", function () {
          return K
        }),
        n.d(t, "l", function () {
          return V
        }),
        n.d(t, "p", function () {
          return W
        }),
        n.d(t, "q", function () {
          return Y
        }),
        n.d(t, "r", function () {
          return Q
        })
      var j = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), i(e)
                        case 3:
                          n({ type: u.c.SEND_NOTIFICATION_SUCCESS }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.c.SEND_NOTIFICATION_FAILURE, payload: t.t0 })
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
        T = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.l.GET_TYPES_REQUEST }), (e.prev = 1), (e.next = 4), o()
                        case 4:
                          ;(n = e.sent), t({ type: u.l.GET_TYPES_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.l.GET_TYPES_FAILURE, payload: e.t0 })
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
        k = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), l(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.l.ADD_TYPE_SUCCESS, payload: r }), (t.next = 11)
                          break
                        case 7:
                          throw (
                            ((t.prev = 7), (t.t0 = t.catch(0)), n({ type: u.l.ADD_TYPE_FAILURE, payload: t.t0 }), t.t0)
                          )
                        case 11:
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
        C = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), p(e)
                        case 3:
                          n({ type: u.l.REMOVE_TYPE_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.l.REMOVE_TYPE_FAILURE, payload: t.t0 })
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
        A = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.h.GET_MANUFACTURES_REQUEST }), (e.prev = 1), (e.next = 4), f()
                        case 4:
                          ;(n = e.sent), t({ type: u.h.GET_MANUFACTURES_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.h.GET_MANUFACTURES_FAILURE, payload: e.t0 })
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
        I = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), m(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.h.ADD_MANUFACTURE_SUCCESS, payload: r }), (t.next = 11)
                          break
                        case 7:
                          throw (
                            ((t.prev = 7),
                            (t.t0 = t.catch(0)),
                            n({ type: u.h.ADD_MANUFACTURE_FAILURE, payload: t.t0 }),
                            t.t0)
                          )
                        case 11:
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
        N = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), d(e)
                        case 3:
                          n({ type: u.h.REMOVE_MANUFACTURE_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.h.REMOVE_MANUFACTURE_FAILURE, payload: t.t0 })
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
        U = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.i.GET_MODELS_REQUEST }), (e.prev = 1), (e.next = 4), E()
                        case 4:
                          ;(n = e.sent), t({ type: u.i.GET_MODELS_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.i.GET_MODELS_FAILURE, payload: e.t0 })
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
        R = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), v(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.i.ADD_MODEL_SUCCESS, payload: r }), (t.next = 11)
                          break
                        case 7:
                          throw (
                            ((t.prev = 7), (t.t0 = t.catch(0)), n({ type: u.i.ADD_MODEL_FAILURE, payload: t.t0 }), t.t0)
                          )
                        case 11:
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
        M = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), h(e)
                        case 3:
                          n({ type: u.i.REMOVE_MODEL_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.i.REMOVE_MODEL_FAILURE, payload: t.t0 })
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
        D = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.e.GET_HARDWARES_REQUEST }), (e.prev = 1), (e.next = 4), y()
                        case 4:
                          ;(n = e.sent), t({ type: u.e.GET_HARDWARES_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.e.GET_HARDWARES_FAILURE, payload: e.t0 })
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
        L = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), b(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.e.ADD_HARDWARE_SUCCESS, payload: r }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), n({ type: u.e.ADD_HARDWARE_FAILURE, payload: t.t0 })
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
        G = function (e, t) {
          return (function () {
            var n = Object(c.a)(
              a.a.mark(function n(r) {
                var c
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), g(e, t)
                        case 3:
                          ;(c = n.sent),
                            r({ type: u.e.UPDATE_HARDWARE_SUCCESS, payload: { data: c, id: e } }),
                            (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7), (n.t0 = n.catch(0)), r({ type: u.e.UPDATE_HARDWARE_FAILURE, payload: n.t0 })
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
            return function (e) {
              return n.apply(this, arguments)
            }
          })()
        },
        F = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), S(e)
                        case 3:
                          n({ type: u.e.REMOVE_HARDWARE_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.e.REMOVE_HARDWARE_FAILURE, payload: t.t0 })
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
        P = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.g.GET_KITS_REQUEST }), (e.prev = 1), (e.next = 4), O()
                        case 4:
                          ;(n = e.sent), t({ type: u.g.GET_KITS_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.g.GET_KITS_FAILURE, payload: e.t0 })
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
        H = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), w(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.g.ADD_KIT_SUCCESS, payload: r }), (t.next = 10)
                          break
                        case 7:
                          ;(t.prev = 7), (t.t0 = t.catch(0)), n({ type: u.g.ADD_KIT_FAILURE, payload: t.t0 })
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
        K = function (e, t) {
          return (function () {
            var n = Object(c.a)(
              a.a.mark(function n(r) {
                var c
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), _(e, t)
                        case 3:
                          ;(c = n.sent), r({ type: u.g.UPDATE_KIT_SUCCESS, payload: { data: c, id: e } }), (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7), (n.t0 = n.catch(0)), r({ type: u.g.UPDATE_KIT_FAILURE, payload: n.t0 })
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
            return function (e) {
              return n.apply(this, arguments)
            }
          })()
        },
        V = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), x(e)
                        case 3:
                          n({ type: u.g.REMOVE_KIT_SUCCESS, payload: e }), (t.next = 9)
                          break
                        case 6:
                          ;(t.prev = 6), (t.t0 = t.catch(0)), n({ type: u.g.REMOVE_KIT_FAILURE, payload: t.t0 })
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
        W = function () {
          return function (e) {
            e({ type: u.h.RESET_ERRORS_SUCCESS })
          }
        },
        Y = function () {
          return function (e) {
            e({ type: u.i.RESET_ERRORS_SUCCESS })
          }
        },
        Q = function () {
          return function (e) {
            e({ type: u.l.RESET_ERRORS_SUCCESS })
          }
        }
    },
    138: function (e, t, n) {
      "use strict"
      n.d(t, "e", function () {
        return r
      }),
        n.d(t, "k", function () {
          return a
        }),
        n.d(t, "n", function () {
          return c
        }),
        n.d(t, "c", function () {
          return u
        }),
        n.d(t, "i", function () {
          return s
        }),
        n.d(t, "l", function () {
          return i
        }),
        n.d(t, "d", function () {
          return o
        }),
        n.d(t, "j", function () {
          return l
        }),
        n.d(t, "m", function () {
          return p
        }),
        n.d(t, "b", function () {
          return f
        }),
        n.d(t, "g", function () {
          return m
        }),
        n.d(t, "a", function () {
          return d
        }),
        n.d(t, "h", function () {
          return E
        }),
        n.d(t, "f", function () {
          return v
        })
      var r = function (e) {
          return e.inventoryType.data
        },
        a = function (e) {
          return e.inventoryType.loading
        },
        c = function (e) {
          return e.inventoryType.error
        },
        u = function (e) {
          return e.inventoryManufacture.data
        },
        s = function (e) {
          return e.inventoryManufacture.loading
        },
        i = function (e) {
          return e.inventoryManufacture.error
        },
        o = function (e) {
          return e.inventoryModel.data
        },
        l = function (e) {
          return e.inventoryModel.loading
        },
        p = function (e) {
          return e.inventoryModel.error
        },
        f = function (e) {
          return e.inventoryKit.data
        },
        m = function (e) {
          return e.inventoryKit.error
        },
        d = function (e) {
          return e.inventoryHardware.data
        },
        E = function (e) {
          return e.inventoryHardware.loading
        },
        v = function (e) {
          return e.inventoryHardware.error
        }
    },
    142: function (e, t, n) {
      "use strict"
      n.d(t, "b", function () {
        return u
      }),
        n.d(t, "i", function () {
          return s
        }),
        n.d(t, "f", function () {
          return i
        }),
        n.d(t, "d", function () {
          return o
        }),
        n.d(t, "c", function () {
          return l
        }),
        n.d(t, "e", function () {
          return f
        }),
        n.d(t, "a", function () {
          return m
        }),
        n.d(t, "h", function () {
          return d
        }),
        n.d(t, "g", function () {
          return E
        }),
        n.d(t, "j", function () {
          return v
        })
      var r = n(20),
        a = n(2),
        c = n(10),
        u = function (e) {
          return e.issue.data
        },
        s = function (e) {
          return e.issue.loading
        },
        i = function (e) {
          return e.issue.error
        },
        o = function (e, t) {
          return t
            ? e.issue.data.filter(function (e) {
                return e.status.id === t
              })
            : e.issue.data
        },
        l = function (e, t, n) {
          return (function (e, t) {
            return e.issue.data.filter(function (e) {
              return e.category.id === t
            })
          })(e, n).filter(function (e) {
            return e.hardwareId == t
          })
        },
        p = function (e, t, n) {
          return (function (e, t) {
            return e.issue.data.filter(function (e) {
              return e.category.name === t
            })
          })(e, n).filter(function (e) {
            return e.hardwareId == t
          })
        },
        f = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
          n && r ? p(e, n, r) : o(e, t)
        },
        m = function (e) {
          return e.issueMessage.data
        },
        d = function (e) {
          return e.issueMessage.loading
        },
        E = function (e) {
          return e.issueMessage.error
        },
        v = function (e) {
          return e.issue.data.reduce(function (e, t, n) {
            var u = e[t.category.name],
              s = []
            if (Array.isArray(u)) {
              if (
                u.find(function (e) {
                  return e.id === t.hardwareId
                })
              )
                return e
              s = [].concat(Object(c.a)(u), [{ id: t.hardwareId, name: t.hardwareName }])
            } else s = [{ id: t.hardwareId, name: t.hardwareName }]
            return Object(a.a)(Object(a.a)({}, e), {}, Object(r.a)({}, t.category.name, s))
          }, {})
        }
    },
    146: function (e, t, n) {
      "use strict"
      n.d(t, "a", function () {
        return s
      })
      var r = n(0),
        a = n.n(r),
        c = n(155),
        u = n.n(c),
        s = function () {
          return a.a.createElement(
            "div",
            { className: u.a.spinner },
            a.a.createElement("div", null),
            a.a.createElement("div", { className: u.a.rect2 }),
            a.a.createElement("div", { className: u.a.rect3 }),
            a.a.createElement("div", { className: u.a.rect4 }),
            a.a.createElement("div", { className: u.a.rect5 })
          )
        }
    },
    150: function (e, t, n) {
      "use strict"
      var r = n(3),
        a = n.n(r),
        c = n(4),
        u = n(1),
        s = n(7),
        i = (function () {
          var e = Object(c.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/issue", method: "GET" })
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
        o = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/issue", method: "POST", data: t })
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
            a.a.mark(function e(t, n) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/issue/".concat(t), method: "PUT", data: n })
                    case 2:
                      return e.abrupt("return", e.sent)
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        p = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(s.a)({ url: "/api/issue/".concat(t, "/message"), method: "GET" })
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
        f = (function () {
          var e = Object(c.a)(
            a.a.mark(function e(t, n) {
              return a.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Object(s.a)({ url: "/api/issue/".concat(t, "/message"), method: "POST", data: n })
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
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })()
      n.d(t, "e", function () {
        return m
      }),
        n.d(t, "a", function () {
          return d
        }),
        n.d(t, "c", function () {
          return E
        }),
        n.d(t, "d", function () {
          return v
        }),
        n.d(t, "b", function () {
          return h
        }),
        n.d(t, "f", function () {
          return y
        })
      var m = function () {
          return (function () {
            var e = Object(c.a)(
              a.a.mark(function e(t) {
                var n
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return t({ type: u.f.GET_ISSUES_REQUEST }), (e.prev = 1), (e.next = 4), i()
                        case 4:
                          ;(n = e.sent), t({ type: u.f.GET_ISSUES_SUCCESS, payload: n }), (e.next = 11)
                          break
                        case 8:
                          ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: u.f.GET_ISSUES_FAILURE, payload: e.t0 })
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
        d = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), o(e)
                        case 3:
                          ;(r = t.sent), n({ type: u.f.ADD_ISSUE_SUCCESS, payload: r }), (t.next = 11)
                          break
                        case 7:
                          throw (
                            ((t.prev = 7), (t.t0 = t.catch(0)), n({ type: u.f.ADD_ISSUE_FAILURE, payload: t.t0 }), t.t0)
                          )
                        case 11:
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
        E = function (e, t) {
          return (function () {
            var n = Object(c.a)(
              a.a.mark(function n(r) {
                var c
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), l(e, t)
                        case 3:
                          ;(c = n.sent),
                            r({ type: u.f.CHANGE_STATUS_SUCCESS, payload: { data: c, id: e } }),
                            (n.next = 10)
                          break
                        case 7:
                          ;(n.prev = 7), (n.t0 = n.catch(0)), r({ type: u.f.CHANGE_STATUS_FAILURE, payload: n.t0 })
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
            return function (e) {
              return n.apply(this, arguments)
            }
          })()
        },
        v = function (e) {
          return (function () {
            var t = Object(c.a)(
              a.a.mark(function t(n) {
                var r
                return a.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return n({ type: u.f.GET_MESSAGES_REQUEST }), (t.prev = 1), (t.next = 4), p(e)
                        case 4:
                          ;(r = t.sent), n({ type: u.f.GET_MESSAGES_SUCCESS, payload: r }), (t.next = 11)
                          break
                        case 8:
                          ;(t.prev = 8), (t.t0 = t.catch(1)), n({ type: u.f.GET_MESSAGES_FAILURE, payload: t.t0 })
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
        h = function (e, t) {
          return (function () {
            var n = Object(c.a)(
              a.a.mark(function n(r) {
                var c
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.prev = 0), (n.next = 3), f(e, t)
                        case 3:
                          ;(c = n.sent), r({ type: u.f.ADD_MESSAGE_SUCCESS, payload: c }), (n.next = 11)
                          break
                        case 7:
                          throw (
                            ((n.prev = 7),
                            (n.t0 = n.catch(0)),
                            r({ type: u.f.ADD_MESSAGE_FAILURE, payload: n.t0 }),
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
            return function (e) {
              return n.apply(this, arguments)
            }
          })()
        },
        y = function () {
          return function (e) {
            e({ type: u.f.RESET_ERRORS_SUCCESS })
          }
        }
    },
    155: function (e, t, n) {
      e.exports = {
        spinner: "Loading_spinner__7liJt",
        "ms-stretchdelay": "Loading_ms-stretchdelay__1MGkv",
        rect2: "Loading_rect2__cutuo",
        rect3: "Loading_rect3__28rOG",
        rect4: "Loading_rect4__2DiIa",
        rect5: "Loading_rect5__2Ui2-",
      }
    },
    334: function (e, t, n) {
      "use strict"
      n.r(t)
      var r = n(78)
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                a = !1,
                c = void 0
              try {
                for (
                  var u, s = e[Symbol.iterator]();
                  !(r = (u = s.next()).done) && (n.push(u.value), !t || n.length !== t);
                  r = !0
                );
              } catch (i) {
                ;(a = !0), (c = i)
              } finally {
                try {
                  r || null == s.return || s.return()
                } finally {
                  if (a) throw c
                }
              }
              return n
            }
          })(e, t) ||
          Object(r.a)(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      var c = n(14),
        u = n(15),
        s = n(17),
        i = n(16),
        o = n(0),
        l = n.n(o),
        p = n(66),
        f = n(44),
        m = n(13),
        d = n(38),
        E = n(30),
        v = n(137),
        h = n(138),
        y = n(47),
        b = n(46),
        g = n(150),
        S = n(142),
        O = n(34),
        w = n(126),
        _ = n(37),
        x = n.n(_),
        j = function (e) {
          var t = e.filteredIssues,
            n = e.openIssue
          return l.a.createElement(
            "ul",
            { className: "ms-scrollable ps ps--active-y mb-0" },
            t.length
              ? t
                  .sort(function (e, t) {
                    return new Date(t.createdAt) - new Date(e.createdAt)
                  })
                  .map(function (e, t) {
                    var r = e.id,
                      a = e.title,
                      c = e.createdAt,
                      u = e.message,
                      s = e.consultant,
                      i = s.firstName,
                      o = s.lastName
                    return l.a.createElement(
                      "li",
                      {
                        key: t,
                        className: "media ms-email clearfix",
                        onClick: function () {
                          return n(r)
                        },
                      },
                      l.a.createElement(
                        "div",
                        { className: "ms-email-img mr-3 " },
                        l.a.createElement("div", { className: "ms-img-round" }, i.charAt(0), " ", o.charAt(0))
                      ),
                      l.a.createElement(
                        "div",
                        { className: "media-body ms-email-details" },
                        l.a.createElement("span", { className: "ms-email-sender" }, i, " ", o),
                        l.a.createElement("h6", { className: "ms-email-subject bold" }, a),
                        l.a.createElement("span", { className: "ms-email-time" }, x()(c).format("LLL")),
                        l.a.createElement("p", { className: "ms-email-msg" }, u.slice(0, 190), " ...")
                      )
                    )
                  })
              : null
          )
        },
        T = n(3),
        k = n.n(T),
        C = n(4),
        A = n(20),
        I = n(21),
        N = n(39),
        U = n(130),
        R = n(50),
        M = n(51),
        D = n(52),
        L = function (e) {
          var t = e.consultants,
            n = e.replyTo,
            r = e.addMessage,
            a = e.onChange,
            c = e.issue,
            u = e.error
          return l.a.createElement(
            U.a,
            {
              noValidate: !0,
              onSubmit: function (e) {
                return r(e, c)
              },
            },
            l.a.createElement(
              p.a,
              null,
              l.a.createElement(
                R.a,
                { as: f.a },
                l.a.createElement(M.a, null, "Cc: (Optional)"),
                l.a.createElement(
                  D.a,
                  { as: "select", multiple: !0, name: "consultants", onChange: a },
                  t.map(function (e) {
                    var t = e.id,
                      n = e.firstName,
                      r = e.lastName
                    return l.a.createElement("option", { key: t, value: t }, n, " ", r)
                  })
                )
              )
            ),
            l.a.createElement(I.a, {
              name: "title",
              label: "Title",
              placeholder: "Title",
              onChange: a,
              error: u && u.data.title,
            }),
            l.a.createElement(N.a, {
              name: "message",
              label: "Describe your issue:",
              onChange: a,
              error: u && u.data.message,
            }),
            l.a.createElement(
              R.a,
              { as: f.a, className: "text-right" },
              l.a.createElement(
                "a",
                {
                  className: "btn btn-primary w-25 mr-1",
                  onClick: function () {
                    return n(null)
                  },
                },
                "Cancel"
              ),
              l.a.createElement("input", {
                type: "submit",
                className: "btn btn-primary w-25",
                name: "btn25",
                value: "Send Message",
              })
            )
          )
        },
        G = (function (e) {
          Object(s.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e
            Object(c.a)(this, n)
            for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = { selectConsultants: [], reply: null }),
              (e.onChange = function (t) {
                "consultants" === t.target.name
                  ? e.setState({
                      selectConsultants: Array.from(t.target.selectedOptions, function (e) {
                        return e.value
                      }),
                    })
                  : e.setState(Object(A.a)({}, t.target.name, t.target.value))
              }),
              (e.replyTo = function (t) {
                e.setState({ reply: t })
              }),
              (e.addMessage = (function () {
                var t = Object(C.a)(
                  k.a.mark(function t(n) {
                    var r, a, c, u, s, i, o, l, p
                    return k.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (r = e.props),
                              (a = r.addIssueMessage),
                              (c = r.consultantId),
                              (u = r.messageId.issueId),
                              (s = r.openMessage),
                              (i = e.state),
                              (o = i.selectConsultants),
                              (l = i.title),
                              (p = i.message),
                              (t.next = 5),
                              a(u, { fromConsultantId: c, title: l, message: p, statusId: 1, consultants: o })
                            )
                          case 5:
                            e.setState({ reply: null }), s(null)
                          case 7:
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
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.messageId,
                    n = t.fromConsultant,
                    r = n.firstName,
                    a = n.lastName,
                    c = t.toConsultants,
                    u = t.message,
                    s = t.title,
                    i = t.issueId,
                    o = e.consultants,
                    p = e.error,
                    m = this.state.reply
                  return l.a.createElement(
                    "div",
                    { className: "ms-scrollable ps ps--active-y" },
                    l.a.createElement(
                      "div",
                      { className: "media ms-email clearfix" },
                      l.a.createElement(
                        "div",
                        { className: "ms-email-img mr-3 " },
                        l.a.createElement("div", { className: "ms-img-round" }, r.charAt(0), " ", a.charAt(0))
                      ),
                      l.a.createElement(
                        "div",
                        { className: "media-body ms-email-details issue-details" },
                        l.a.createElement(
                          "span",
                          { className: "ms-email-sender" },
                          "From:",
                          " ",
                          l.a.createElement("strong", null, r, " ", a),
                          l.a.createElement("br", null),
                          "To:",
                          " ",
                          l.a.createElement(
                            "strong",
                            null,
                            c.length &&
                              c
                                .map(function (e) {
                                  var t = e.firstName,
                                    n = e.lastName
                                  return "".concat(t, " ").concat(n)
                                })
                                .join(", ")
                          ),
                          l.a.createElement("br", null),
                          "Title: ",
                          l.a.createElement("i", null, s)
                        ),
                        l.a.createElement("p", null, u),
                        m
                          ? l.a.createElement(
                              f.a,
                              null,
                              l.a.createElement(L, {
                                replyTo: this.replyTo,
                                consultants: o,
                                addMessage: this.addMessage,
                                onChange: this.onChange,
                                issueId: i,
                                error: p,
                              })
                            )
                          : l.a.createElement(
                              w.a,
                              {
                                className: "btn ms-btn-icon bg-primary add-issue mt-2",
                                onClick: this.replyTo,
                                name: "button",
                              },
                              l.a.createElement(E.o, null)
                            )
                      )
                    )
                  )
                },
              },
            ]),
            n
          )
        })(o.Component),
        F = n(22),
        P = n(146),
        H = (function (e) {
          Object(s.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e
            Object(c.a)(this, n)
            for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = { messageNumber: null, reply: null }),
              (e.openMessage = function (t) {
                e.setState({ message: t })
              }),
              (e.replyTo = function (t) {
                e.setState({ reply: t })
              }),
              (e.toggleMessage = function (t) {
                e.setState({ createMessage: t })
              }),
              (e.onChange = function (t) {
                "consultants" === t.target.name
                  ? e.setState({
                      selectConsultants: Array.from(t.target.selectedOptions, function (e) {
                        return e.value
                      }),
                    })
                  : e.setState(Object(A.a)({}, t.target.name, t.target.value))
              }),
              (e.addMessage = (function () {
                var t = Object(C.a)(
                  k.a.mark(function t(n) {
                    var r, a, c, u, s, i, o, l
                    return k.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              n.preventDefault(),
                              (r = e.props),
                              (a = r.addIssueMessage),
                              (c = r.consultantId),
                              (u = r.issueNumber),
                              (s = e.state),
                              (i = s.selectConsultants),
                              (o = s.title),
                              (l = s.message),
                              (t.next = 5),
                              a(u, { fromConsultantId: c, title: o, message: l, statusId: 1, consultants: i })
                            )
                          case 5:
                            e.setState({ reply: null }), e.openMessage(null)
                          case 7:
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
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getIssueMessages(this.props.issueNumber)
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.messages,
                    r = t.backToMainMessages,
                    a = t.loading,
                    c = t.error,
                    u = t.issueNumber,
                    s = t.consultants,
                    i = this.state,
                    o = i.message,
                    p = i.reply
                  return a
                    ? l.a.createElement(P.a, null)
                    : l.a.createElement(
                        "ul",
                        { className: "ms-scrollable ps ps--active-y mb-0" },
                        l.a.createElement(
                          "div",
                          { className: "media ms-email clearfix" },
                          l.a.createElement("a", { onClick: r }, l.a.createElement(E.b, null))
                        ),
                        n.length
                          ? n.map(function (t, n) {
                              var r = t.title,
                                a = t.createdAt,
                                c = t.fromConsultant,
                                u = c.firstName,
                                s = c.lastName
                              return l.a.createElement(
                                "li",
                                {
                                  className: "media ms-email clearfix messages",
                                  key: n,
                                  onClick: function () {
                                    return e.openMessage(o)
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "ms-email-img mr-3 " },
                                  l.a.createElement("div", { className: "ms-img-round" })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "media-body ms-email-details" },
                                  l.a.createElement(
                                    l.a.Fragment,
                                    null,
                                    l.a.createElement(
                                      "h6",
                                      { className: "ms-email-subject" },
                                      r,
                                      " \xa0[",
                                      l.a.createElement("strong", null, "\xa0", u, " ", s, "\xa0"),
                                      "]"
                                    ),
                                    l.a.createElement("span", { className: "ms-email-time" }, x()(a).format("LLL"))
                                  )
                                )
                              )
                            })
                          : l.a.createElement(
                              l.a.Fragment,
                              null,
                              l.a.createElement(
                                "div",
                                { className: "media ms-email no-messages" },
                                l.a.createElement("p", null, "There are no messages, but you can add one")
                              ),
                              p
                                ? l.a.createElement(
                                    f.a,
                                    { className: "replyMessage" },
                                    l.a.createElement(L, {
                                      replyTo: this.replyTo,
                                      consultants: s,
                                      addMessage: this.addMessage,
                                      onChange: this.onChange,
                                      issueId: u,
                                      error: c,
                                    })
                                  )
                                : l.a.createElement(
                                    f.a,
                                    null,
                                    l.a.createElement(
                                      w.a,
                                      {
                                        className: "add-issue mt-2",
                                        onClick: function () {
                                          return e.replyTo(u)
                                        },
                                        name: "button",
                                      },
                                      l.a.createElement(E.m, null)
                                    )
                                  )
                            ),
                        o &&
                          l.a.createElement(
                            G,
                            Object.assign({ messageId: o, openMessage: this.openMessage }, this.props)
                          )
                      )
                },
              },
            ]),
            n
          )
        })(o.Component),
        K = Object(m.b)(
          function (e) {
            return {
              loading: Object(S.h)(e),
              messages: Object(S.a)(e),
              error: Object(S.g)(e),
              consultantId: Object(F.d)(e),
            }
          },
          { getIssueMessages: g.d, addIssueMessage: g.b }
        )(H),
        V = (function (e) {
          Object(s.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e
            Object(c.a)(this, n)
            for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                category: null,
                currentPage: 1,
                status: 1,
                issueNumber: null,
              }),
              (e.listIssues = function (t) {
                e.setState({ status: t })
              }),
              (e.pageSwitcher = function (t) {
                "next" === t
                  ? e.setState({ currentPage: e.state.currentPage + 1 })
                  : e.setState({ currentPage: e.state.currentPage - 1 })
              }),
              (e.openIssue = function (t) {
                e.setState({ issueNumber: t })
              }),
              (e.backToMainMessages = function () {
                e.setState({ issueNumber: null })
              }),
              e
            )
          }
          return (
            Object(u.a)(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this,
                    n = this.state,
                    r = n.currentPage,
                    a = n.issueNumber,
                    c = this.props,
                    u = c.filteredIssues,
                    s = (c.loading, c.kits, c.hardwares, c.consultants),
                    i = c.countIssues,
                    o = 10 * r,
                    p = o - 10
                  e =
                    u.length &&
                    u
                      .sort(function (e, t) {
                        return new Date(t.createdAt) - new Date(e.createdAt)
                      })
                      .slice(p, o)
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    l.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      l.a.createElement("h6", { className: "smaller" }, "Issues"),
                      l.a.createElement("p", null, "You have in total ", i, " Issues"),
                      !a &&
                        l.a.createElement(
                          "ul",
                          { className: "ms-email-pagination" },
                          l.a.createElement(
                            "li",
                            null,
                            p + 1,
                            "-",
                            u.length > p && u.length < o ? u.length : o,
                            " ",
                            "of ",
                            u && u.length
                          ),
                          l.a.createElement(
                            "li",
                            { className: "ms-email-pagination-item" },
                            l.a.createElement(
                              w.a,
                              {
                                onClick: function () {
                                  return t.pageSwitcher("prev")
                                },
                                disabled: 0 == p,
                                className: "ms-email-pagination-link",
                              },
                              l.a.createElement(E.d, null)
                            )
                          ),
                          l.a.createElement(
                            "li",
                            { className: "ms-email-pagination-item " },
                            l.a.createElement(
                              w.a,
                              {
                                onClick: function () {
                                  return t.pageSwitcher("next")
                                },
                                disabled: o >= u.length,
                                className: "ms-email-pagination-link",
                              },
                              l.a.createElement(E.e, null)
                            )
                          )
                        )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "ms-email-content" },
                      a
                        ? l.a.createElement(
                            K,
                            Object.assign({ issueNumber: a, backToMainMessages: this.backToMainMessages }, this.props)
                          )
                        : u && l.a.createElement(j, { filteredIssues: e, consultants: s, openIssue: this.openIssue })
                    )
                  )
                },
              },
            ]),
            n
          )
        })(o.Component),
        W = Object(m.b)(function (e, t) {
          return { filteredIssues: Object(S.e)(e, t.status, t.hardwareId, t.categoryName) }
        }, null)(V),
        Y = (function (e) {
          Object(s.a)(n, e)
          var t = Object(i.a)(n)
          function n() {
            var e
            Object(c.a)(this, n)
            for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++) a[u] = arguments[u]
            return (
              ((e = t.call.apply(t, [this].concat(a))).state = {
                loading: !0,
                statusId: !1,
                categoryName: null,
                hardwareId: null,
              }),
              (e.byStatus = function (t) {
                e.setState({ statusId: t, categoryName: null, hardwareId: null })
              }),
              (e.byCategoryAndId = function (t, n) {
                e.setState({ categoryName: t, hardwareId: n })
              }),
              e
            )
          }
          return (
            Object(u.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.getIssues(), this.props.getKits(), this.props.getHardwares()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.issues,
                    r = t.loading,
                    c = t.selectSidebarCategories,
                    u = t.openIssues,
                    s = t.closedIssues,
                    i = (t.hardwares, t.kits, this.state),
                    o = i.statusId,
                    m = i.categoryName,
                    v = i.hardwareId
                  if (r) return l.a.createElement(O.a, null)
                  if (!n.length) return null
                  return l.a.createElement(
                    "section",
                    { className: "main" },
                    l.a.createElement(
                      p.a,
                      null,
                      l.a.createElement(f.a, null, l.a.createElement(d.a, null)),
                      l.a.createElement(
                        f.a,
                        { lg: "11", className: "container-left issues-dashboard" },
                        l.a.createElement(
                          "div",
                          { className: "ms-panel ms-email-panel" },
                          l.a.createElement(
                            p.a,
                            null,
                            l.a.createElement(
                              f.a,
                              { lg: "3", className: "pr-0" },
                              l.a.createElement(
                                "div",
                                { className: "ms-email-aside" },
                                l.a.createElement(
                                  "ul",
                                  { className: "ms-list ms-email-list" },
                                  l.a.createElement("li", { className: "ms-list-item ms-email-label" }, " Main "),
                                  l.a.createElement(
                                    "li",
                                    { className: "ms-list-item" },
                                    l.a.createElement(
                                      "a",
                                      {
                                        onClick: function () {
                                          return e.byStatus()
                                        },
                                      },
                                      l.a.createElement(E.h, null),
                                      "All Issues ",
                                      l.a.createElement("span", null, n.length)
                                    )
                                  ),
                                  l.a.createElement(
                                    "li",
                                    { className: "ms-list-item" },
                                    l.a.createElement(
                                      "a",
                                      {
                                        onClick: function () {
                                          return e.byStatus(1)
                                        },
                                      },
                                      l.a.createElement(E.i, null),
                                      "Open Issues ",
                                      l.a.createElement("span", null, u.length)
                                    )
                                  ),
                                  l.a.createElement(
                                    "li",
                                    { className: "ms-list-item" },
                                    l.a.createElement(
                                      "a",
                                      {
                                        onClick: function () {
                                          return e.byStatus(2)
                                        },
                                      },
                                      l.a.createElement(E.t, null),
                                      "Closed Issues ",
                                      l.a.createElement("span", null, s.length)
                                    )
                                  )
                                ),
                                (function () {
                                  for (
                                    var t = [],
                                      n = function () {
                                        var n = a(u[r], 2),
                                          c = n[0],
                                          s = n[1]
                                        t.push(
                                          l.a.createElement(
                                            "ul",
                                            { className: "ms-list ms-email-list" },
                                            l.a.createElement("li", { className: "ms-list-item ms-email-label" }, c),
                                            s.map(function (t) {
                                              var n = t.id,
                                                r = t.name
                                              return l.a.createElement(
                                                "li",
                                                { className: "ms-list-item" },
                                                l.a.createElement(
                                                  "a",
                                                  {
                                                    onClick: function () {
                                                      return e.byCategoryAndId(c, n)
                                                    },
                                                  },
                                                  l.a.createElement(E.l, null),
                                                  r
                                                )
                                              )
                                            })
                                          )
                                        )
                                      },
                                      r = 0,
                                      u = Object.entries(c);
                                    r < u.length;
                                    r++
                                  )
                                    n()
                                  return t
                                })()
                              )
                            ),
                            l.a.createElement(
                              f.a,
                              { lg: "9", className: "pl-0 issue-block" },
                              l.a.createElement(
                                W,
                                Object.assign({ countIssues: n.length }, this.props, {
                                  status: o,
                                  categoryName: m,
                                  hardwareId: v,
                                })
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
            n
          )
        })(o.Component)
      t.default = Object(m.b)(
        function (e) {
          return {
            loading: Object(S.i)(e),
            error: Object(S.f)(e),
            issues: Object(S.b)(e),
            kits: Object(h.b)(e),
            hardwares: Object(h.a)(e),
            consultants: Object(b.b)(e),
            selectSidebarCategories: Object(S.j)(e),
            openIssues: Object(S.d)(e, 1),
            closedIssues: Object(S.d)(e, 2),
          }
        },
        { getConsultants: y.b, getIssues: g.e, getKits: v.g, getHardwares: v.f, getIssueMessages: g.d }
      )(Y)
    },
  },
])
//# sourceMappingURL=11.6ffb8854.chunk.js.map
