;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [9],
  {
    132: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return u
      })
      var n = a(0),
        r = a.n(n),
        o = a(66),
        c = a(50),
        l = a(44),
        s = a(52),
        u = function (e) {
          var t = e.name,
            a = e.value,
            n = e.label,
            u = e.onChange
          e.row
          return r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              c.a,
              { as: l.a },
              r.a.createElement(
                "label",
                { className: "ms-checkbox-wrap" },
                r.a.createElement(s.a, {
                  type: "checkbox",
                  onChange: u,
                  className: "form-check-input ".concat(a ? "checked" : ""),
                  name: t,
                  value: a,
                }),
                r.a.createElement("i", { className: "ms-checkbox-check" })
              ),
              r.a.createElement("span", null, n)
            )
          )
        }
    },
    146: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return l
      })
      var n = a(0),
        r = a.n(n),
        o = a(155),
        c = a.n(o),
        l = function () {
          return r.a.createElement(
            "div",
            { className: c.a.spinner },
            r.a.createElement("div", null),
            r.a.createElement("div", { className: c.a.rect2 }),
            r.a.createElement("div", { className: c.a.rect3 }),
            r.a.createElement("div", { className: c.a.rect4 }),
            r.a.createElement("div", { className: c.a.rect5 })
          )
        }
    },
    155: function (e, t, a) {
      e.exports = {
        spinner: "Loading_spinner__7liJt",
        "ms-stretchdelay": "Loading_ms-stretchdelay__1MGkv",
        rect2: "Loading_rect2__cutuo",
        rect3: "Loading_rect3__28rOG",
        rect4: "Loading_rect4__2DiIa",
        rect5: "Loading_rect5__2Ui2-",
      }
    },
    157: function (e, t, a) {
      "use strict"
      a.d(t, "a", function () {
        return i
      })
      var n = a(0),
        r = a.n(n),
        o = a(66),
        c = a(50),
        l = a(44),
        s = a(51),
        u = a(131),
        i = function (e) {
          var t = e.type,
            a = e.name,
            n = e.label,
            i = e.placeholder,
            d = e.error
          return r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              c.a,
              { as: l.a },
              r.a.createElement(s.a, { htmlFor: a }, n),
              d && r.a.createElement("div", { className: "invalid-feedback" }, d),
              r.a.createElement(u.a, {
                type: t,
                name: a,
                className: "form-control ".concat(d ? "is-invalid" : ""),
                placeholder: i,
              })
            )
          )
        }
      i.defaultProps = { type: "text" }
    },
    237: function (e, t, a) {
      e.exports = { employee: "AddressBook_employee__1FUaQ", button: "AddressBook_button__1bWRm" }
    },
    313: function (e, t, a) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLatLng = t.geocodeByPlaceId = t.geocodeByAddress = void 0)
      var n,
        r = a(314),
        o = (n = r) && n.__esModule ? n : { default: n },
        c = a(317)
      ;(t.geocodeByAddress = c.geocodeByAddress),
        (t.geocodeByPlaceId = c.geocodeByPlaceId),
        (t.getLatLng = c.getLatLng),
        (t.default = o.default)
    },
    314: function (e, t, a) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      var n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t]
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
          },
        r = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }
          return function (t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t
          }
        })(),
        o = u(a(0)),
        c = u(a(35)),
        l = u(a(315)),
        s = a(316)
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          })(this, t)
          var a = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (a.init = function () {
              if (!window.google)
                throw new Error(
                  "[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
                )
              if (!window.google.maps.places)
                throw new Error(
                  "[react-places-autocomplete]: Google Maps Places library must be loaded. Please add `libraries=places` to the src URL. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
                )
              ;(a.autocompleteService = new window.google.maps.places.AutocompleteService()),
                (a.autocompleteOK = window.google.maps.places.PlacesServiceStatus.OK),
                a.setState(function (e) {
                  return e.ready ? null : { ready: !0 }
                })
            }),
            (a.autocompleteCallback = function (e, t) {
              if ((a.setState({ loading: !1 }), t === a.autocompleteOK)) {
                var n = a.props.highlightFirstSuggestion
                a.setState({
                  suggestions: e.map(function (e, t) {
                    return {
                      id: e.id,
                      description: e.description,
                      placeId: e.place_id,
                      active: !(!n || 0 !== t),
                      index: t,
                      formattedSuggestion:
                        ((a = e.structured_formatting), { mainText: a.main_text, secondaryText: a.secondary_text }),
                      matchedSubstrings: e.matched_substrings,
                      terms: e.terms,
                      types: e.types,
                    }
                    var a
                  }),
                })
              } else a.props.onError(t, a.clearSuggestions)
            }),
            (a.fetchPredictions = function () {
              var e = a.props.value
              e.length &&
                (a.setState({ loading: !0 }),
                a.autocompleteService.getPlacePredictions(
                  n({}, a.props.searchOptions, { input: e }),
                  a.autocompleteCallback
                ))
            }),
            (a.clearSuggestions = function () {
              a.setState({ suggestions: [] })
            }),
            (a.clearActive = function () {
              a.setState({
                suggestions: a.state.suggestions.map(function (e) {
                  return n({}, e, { active: !1 })
                }),
              })
            }),
            (a.handleSelect = function (e, t) {
              a.clearSuggestions(), a.props.onSelect ? a.props.onSelect(e, t) : a.props.onChange(e)
            }),
            (a.getActiveSuggestion = function () {
              return a.state.suggestions.find(function (e) {
                return e.active
              })
            }),
            (a.selectActiveAtIndex = function (e) {
              var t = a.state.suggestions.find(function (t) {
                return t.index === e
              }).description
              a.setActiveAtIndex(e), a.props.onChange(t)
            }),
            (a.selectUserInputValue = function () {
              a.clearActive(), a.props.onChange(a.state.userInputValue)
            }),
            (a.handleEnterKey = function () {
              var e = a.getActiveSuggestion()
              void 0 === e ? a.handleSelect(a.props.value, null) : a.handleSelect(e.description, e.placeId)
            }),
            (a.handleDownKey = function () {
              if (0 !== a.state.suggestions.length) {
                var e = a.getActiveSuggestion()
                void 0 === e
                  ? a.selectActiveAtIndex(0)
                  : e.index === a.state.suggestions.length - 1
                  ? a.selectUserInputValue()
                  : a.selectActiveAtIndex(e.index + 1)
              }
            }),
            (a.handleUpKey = function () {
              if (0 !== a.state.suggestions.length) {
                var e = a.getActiveSuggestion()
                void 0 === e
                  ? a.selectActiveAtIndex(a.state.suggestions.length - 1)
                  : 0 === e.index
                  ? a.selectUserInputValue()
                  : a.selectActiveAtIndex(e.index - 1)
              }
            }),
            (a.handleInputKeyDown = function (e) {
              switch (e.key) {
                case "Enter":
                  e.preventDefault(), a.handleEnterKey()
                  break
                case "ArrowDown":
                  e.preventDefault(), a.handleDownKey()
                  break
                case "ArrowUp":
                  e.preventDefault(), a.handleUpKey()
                  break
                case "Escape":
                  a.clearSuggestions()
              }
            }),
            (a.setActiveAtIndex = function (e) {
              a.setState({
                suggestions: a.state.suggestions.map(function (t, a) {
                  return n({}, t, a === e ? { active: !0 } : { active: !1 })
                }),
              })
            }),
            (a.handleInputChange = function (e) {
              var t = e.target.value
              a.props.onChange(t),
                a.setState({ userInputValue: t }),
                t ? a.props.shouldFetchSuggestions && a.debouncedFetchPredictions() : a.clearSuggestions()
            }),
            (a.handleInputOnBlur = function () {
              a.mousedownOnSuggestion || a.clearSuggestions()
            }),
            (a.getActiveSuggestionId = function () {
              var e = a.getActiveSuggestion()
              return e ? "PlacesAutocomplete__suggestion-" + e.placeId : void 0
            }),
            (a.getIsExpanded = function () {
              return a.state.suggestions.length > 0
            }),
            (a.getInputProps = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              if (e.hasOwnProperty("value"))
                throw new Error(
                  "[react-places-autocomplete]: getInputProps does not accept `value`. Use `value` prop instead"
                )
              if (e.hasOwnProperty("onChange"))
                throw new Error(
                  "[react-places-autocomplete]: getInputProps does not accept `onChange`. Use `onChange` prop instead"
                )
              var t = {
                type: "text",
                autoComplete: "off",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": a.getIsExpanded(),
                "aria-activedescendant": a.getActiveSuggestionId(),
                disabled: !a.state.ready,
              }
              return n({}, t, e, {
                onKeyDown: (0, s.compose)(a.handleInputKeyDown, e.onKeyDown),
                onBlur: (0, s.compose)(a.handleInputOnBlur, e.onBlur),
                value: a.props.value,
                onChange: function (e) {
                  a.handleInputChange(e)
                },
              })
            }),
            (a.getSuggestionItemProps = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = a.handleSuggestionMouseEnter.bind(a, e.index),
                o = a.handleSuggestionClick.bind(a, e)
              return n({}, t, {
                key: e.id,
                id: a.getActiveSuggestionId(),
                role: "option",
                onMouseEnter: (0, s.compose)(r, t.onMouseEnter),
                onMouseLeave: (0, s.compose)(a.handleSuggestionMouseLeave, t.onMouseLeave),
                onMouseDown: (0, s.compose)(a.handleSuggestionMouseDown, t.onMouseDown),
                onMouseUp: (0, s.compose)(a.handleSuggestionMouseUp, t.onMouseUp),
                onTouchStart: (0, s.compose)(a.handleSuggestionTouchStart, t.onTouchStart),
                onTouchEnd: (0, s.compose)(a.handleSuggestionMouseUp, t.onTouchEnd),
                onClick: (0, s.compose)(o, t.onClick),
              })
            }),
            (a.handleSuggestionMouseEnter = function (e) {
              a.setActiveAtIndex(e)
            }),
            (a.handleSuggestionMouseLeave = function () {
              ;(a.mousedownOnSuggestion = !1), a.clearActive()
            }),
            (a.handleSuggestionMouseDown = function (e) {
              e.preventDefault(), (a.mousedownOnSuggestion = !0)
            }),
            (a.handleSuggestionTouchStart = function () {
              a.mousedownOnSuggestion = !0
            }),
            (a.handleSuggestionMouseUp = function () {
              a.mousedownOnSuggestion = !1
            }),
            (a.handleSuggestionClick = function (e, t) {
              t && t.preventDefault && t.preventDefault()
              var n = e.description,
                r = e.placeId
              a.handleSelect(n, r),
                setTimeout(function () {
                  a.mousedownOnSuggestion = !1
                })
            }),
            (a.state = { loading: !1, suggestions: [], userInputValue: e.value, ready: !e.googleCallbackName }),
            (a.debouncedFetchPredictions = (0, l.default)(a.fetchPredictions, a.props.debounce)),
            a
          )
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          r(t, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.googleCallbackName
                e ? (window.google ? this.init() : (window[e] = this.init)) : this.init()
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var e = this.props.googleCallbackName
                e && window[e] && delete window[e]
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.children({
                  getInputProps: this.getInputProps,
                  getSuggestionItemProps: this.getSuggestionItemProps,
                  loading: this.state.loading,
                  suggestions: this.state.suggestions,
                })
              },
            },
          ]),
          t
        )
      })(o.default.Component)
      ;(i.propTypes = {
        onChange: c.default.func.isRequired,
        value: c.default.string.isRequired,
        children: c.default.func.isRequired,
        onError: c.default.func,
        onSelect: c.default.func,
        searchOptions: c.default.shape({
          bounds: c.default.object,
          componentRestrictions: c.default.object,
          location: c.default.object,
          offset: c.default.oneOfType([c.default.number, c.default.string]),
          radius: c.default.oneOfType([c.default.number, c.default.string]),
          types: c.default.array,
        }),
        debounce: c.default.number,
        highlightFirstSuggestion: c.default.bool,
        shouldFetchSuggestions: c.default.bool,
        googleCallbackName: c.default.string,
      }),
        (i.defaultProps = {
          onError: function (e, t) {
            return console.error(
              "[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",
              e
            )
          },
          searchOptions: {},
          debounce: 200,
          highlightFirstSuggestion: !1,
          shouldFetchSuggestions: !0,
        }),
        (t.default = i)
    },
    315: function (e, t, a) {
      ;(function (t) {
        var a = /^\s+|\s+$/g,
          n = /^[-+]0x[0-9a-f]+$/i,
          r = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          c = parseInt,
          l = "object" == typeof t && t && t.Object === Object && t,
          s = "object" == typeof self && self && self.Object === Object && self,
          u = l || s || Function("return this")(),
          i = Object.prototype.toString,
          d = Math.max,
          m = Math.min,
          p = function () {
            return u.Date.now()
          }
        function f(e) {
          var t = typeof e
          return !!e && ("object" == t || "function" == t)
        }
        function g(e) {
          if ("number" == typeof e) return e
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e
                })(e) &&
                  "[object Symbol]" == i.call(e))
              )
            })(e)
          )
            return NaN
          if (f(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e
            e = f(t) ? t + "" : t
          }
          if ("string" != typeof e) return 0 === e ? e : +e
          e = e.replace(a, "")
          var l = r.test(e)
          return l || o.test(e) ? c(e.slice(2), l ? 2 : 8) : n.test(e) ? NaN : +e
        }
        e.exports = function (e, t, a) {
          var n,
            r,
            o,
            c,
            l,
            s,
            u = 0,
            i = !1,
            h = !1,
            E = !0
          if ("function" != typeof e) throw new TypeError("Expected a function")
          function v(t) {
            var a = n,
              o = r
            return (n = r = void 0), (u = t), (c = e.apply(o, a))
          }
          function b(e) {
            return (u = e), (l = setTimeout(S, t)), i ? v(e) : c
          }
          function y(e) {
            var a = e - s
            return void 0 === s || a >= t || a < 0 || (h && e - u >= o)
          }
          function S() {
            var e = p()
            if (y(e)) return N(e)
            l = setTimeout(
              S,
              (function (e) {
                var a = t - (e - s)
                return h ? m(a, o - (e - u)) : a
              })(e)
            )
          }
          function N(e) {
            return (l = void 0), E && n ? v(e) : ((n = r = void 0), c)
          }
          function w() {
            var e = p(),
              a = y(e)
            if (((n = arguments), (r = this), (s = e), a)) {
              if (void 0 === l) return b(s)
              if (h) return (l = setTimeout(S, t)), v(s)
            }
            return void 0 === l && (l = setTimeout(S, t)), c
          }
          return (
            (t = g(t) || 0),
            f(a) &&
              ((i = !!a.leading),
              (o = (h = "maxWait" in a) ? d(g(a.maxWait) || 0, t) : o),
              (E = "trailing" in a ? !!a.trailing : E)),
            (w.cancel = function () {
              void 0 !== l && clearTimeout(l), (u = 0), (n = s = r = l = void 0)
            }),
            (w.flush = function () {
              return void 0 === l ? c : N(p())
            }),
            w
          )
        }
      }.call(this, a(55)))
    },
    316: function (e, t, a) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      ;(t.compose = function () {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]
        return function () {
          for (var e = arguments.length, a = Array(e), n = 0; n < e; n++) a[n] = arguments[n]
          t.forEach(function (e) {
            return e && e.apply(void 0, a)
          })
        }
      }),
        (t.pick = function (e) {
          for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n]
          return a.reduce(function (t, a) {
            return e.hasOwnProperty(a) && (t[a] = e[a]), t
          }, {})
        })
    },
    317: function (e, t, a) {
      "use strict"
      Object.defineProperty(t, "__esModule", { value: !0 })
      ;(t.geocodeByAddress = function (e) {
        var t = new window.google.maps.Geocoder(),
          a = window.google.maps.GeocoderStatus.OK
        return new Promise(function (n, r) {
          t.geocode({ address: e }, function (e, t) {
            t !== a && r(t), n(e)
          })
        })
      }),
        (t.getLatLng = function (e) {
          return new Promise(function (t, a) {
            try {
              t({ lat: e.geometry.location.lat(), lng: e.geometry.location.lng() })
            } catch (n) {
              a(n)
            }
          })
        }),
        (t.geocodeByPlaceId = function (e) {
          var t = new window.google.maps.Geocoder(),
            a = window.google.maps.GeocoderStatus.OK
          return new Promise(function (n, r) {
            t.geocode({ placeId: e }, function (e, t) {
              t !== a && r(t), n(e)
            })
          })
        })
    },
    318: function (e, t, a) {
      e.exports = {
        autocomplete: "AdressAutocomplete_autocomplete__1ysbT",
        description: "AdressAutocomplete_description__2K3hL",
      }
    },
    336: function (e, t, a) {
      "use strict"
      a.r(t)
      var n = a(14),
        r = a(15),
        o = a(17),
        c = a(16),
        l = a(0),
        s = a.n(l),
        u = a(129),
        i = a(126),
        d = a(66),
        m = a(44),
        p = a(13),
        f = a(32),
        g = a(18),
        h = a(3),
        E = a.n(h),
        v = a(4),
        b = a(1),
        y = a(7),
        S = (function () {
          var e = Object(v.a)(
            E.a.mark(function e() {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(y.a)({ url: "/api/addressbook", method: "GET" })
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
        N = (function () {
          var e = Object(v.a)(
            E.a.mark(function e(t) {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(y.a)({ url: "/api/addressbook", method: "POST", data: t })
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
        w = (function () {
          var e = Object(v.a)(
            E.a.mark(function e(t, a) {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(y.a)({ url: "/api/addressbook/".concat(t), method: "PUT", data: a })
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
        O = (function () {
          var e = Object(v.a)(
            E.a.mark(function e(t) {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(y.a)({ url: "/api/addressbook/".concat(t), method: "DELETE" })
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
        k = (function () {
          var e = Object(v.a)(
            E.a.mark(function e() {
              return E.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(y.a)({ url: "/api/addressbook/roles", method: "GET" })
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
        A = function (e) {
          return e.client.data
        },
        _ = function (e) {
          return e.client.loading
        },
        x = function (e) {
          return e.client.error
        },
        I = function (e) {
          return e.contactUserPosition.data
        },
        P = a(2),
        j = a(130),
        D = a(157),
        C = a(50),
        T = a(51),
        M = a(131),
        B = function (e) {
          var t = e.name,
            a = e.label,
            n = e.positions,
            r = e.error
          return s.a.createElement(
            d.a,
            null,
            s.a.createElement(
              C.a,
              { as: m.a },
              s.a.createElement(T.a, { htmlFor: t }, a),
              r && s.a.createElement("div", { className: "invalid-feedback" }, r),
              s.a.createElement(
                M.a,
                { component: "select", name: t, className: "form-control ".concat(r ? "is-invalid" : "") },
                s.a.createElement("option", { value: !0 }, a),
                n.map(function (e) {
                  var t = e.id,
                    a = e.name
                  return s.a.createElement("option", { value: t }, a)
                })
              )
            )
          )
        }
      B.defaultProps = { type: "text" }
      var U = a(313),
        R = a.n(U),
        L = a(52),
        F = a(146),
        K = a(318),
        G = a.n(K),
        V = function (e) {
          var t = e.formik,
            a = e.label,
            n = e.setAddress,
            r = e.addressName,
            o = e.error
          return s.a.createElement(
            d.a,
            null,
            s.a.createElement(
              C.a,
              { as: m.a },
              s.a.createElement(T.a, null, a),
              s.a.createElement(
                R.a,
                { value: r, onChange: n, onSelect: n, searchOptions: { componentRestrictions: { country: ["uk"] } } },
                function (e) {
                  var a = e.getInputProps,
                    n = e.suggestions,
                    r = e.getSuggestionItemProps,
                    c = e.loading
                  return s.a.createElement(
                    "div",
                    null,
                    o && s.a.createElement("div", { className: "invalid-feedback" }, o),
                    t
                      ? s.a.createElement(
                          M.a,
                          Object.assign(
                            { className: "form-control ".concat(o ? "is-invalid" : "") },
                            a({ placeholder: "Ex: 75 Pemberton Road, London" })
                          )
                        )
                      : s.a.createElement(L.a, a({ placeholder: "Ex: 75 Pemberton Road, London" })),
                    s.a.createElement(
                      "div",
                      { className: G.a.autocomplete },
                      c && s.a.createElement(F.a, null),
                      n.map(function (e) {
                        return s.a.createElement(
                          "div",
                          r(e),
                          s.a.createElement("p", { className: G.a.description }, e.description)
                        )
                      })
                    )
                  )
                }
              )
            )
          )
        },
        J = a(30),
        W = a(237),
        $ = a.n(W),
        q = (function (e) {
          Object(o.a)(a, e)
          var t = Object(c.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                companyName: "",
                users: [
                  {
                    firstName: "",
                    lastName: "",
                    email1: "",
                    email2: null,
                    phoneNumber1: "",
                    phoneNumber2: null,
                    roleId: null,
                  },
                ],
              }),
              (e.onSubmit = (function () {
                var t = Object(v.a)(
                  E.a.mark(function t(a, n, r) {
                    var o, c
                    return E.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (o = e.state.addressName),
                              (c = e.props.addAddressBook),
                              (t.next = 5),
                              c(Object(P.a)({ addressName: o }, n))
                            )
                          case 5:
                            r(), e.setState({ addressName: "" })
                          case 7:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, a, n) {
                  return t.apply(this, arguments)
                }
              })()),
              e
            )
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.resetAddressBooksErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.error,
                    n = t.positions,
                    r = this.state.addressName
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      s.a.createElement("h6", null, "Add a client")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      s.a.createElement(M.c, {
                        initialValues: this.state,
                        render: function (t) {
                          var o = t.values,
                            c = t.resetForm
                          return s.a.createElement(
                            j.a,
                            {
                              noValidate: !0,
                              onSubmit: function (t) {
                                return e.onSubmit(t, o, c)
                              },
                            },
                            s.a.createElement(D.a, {
                              name: "companyName",
                              label: "Company Name",
                              placeholder: "Ex: KP Acoustics",
                              error: a && a.data.companyName,
                            }),
                            s.a.createElement(V, {
                              formik: !0,
                              label: "Address",
                              addressName: r,
                              setAddress: function (t) {
                                return e.setState({ addressName: t })
                              },
                              error: a && a.data.addressName,
                            }),
                            s.a.createElement(M.b, {
                              name: "users",
                              render: function (e) {
                                var t = e.remove,
                                  r = e.push
                                return s.a.createElement(
                                  s.a.Fragment,
                                  null,
                                  o.users.length > 0 &&
                                    o.users.map(function (e, o) {
                                      return s.a.createElement(
                                        d.a,
                                        null,
                                        s.a.createElement(
                                          m.a,
                                          { lg: 10 },
                                          s.a.createElement(
                                            "div",
                                            { className: $.a.employee },
                                            s.a.createElement("h6", null, "Employee ", o + 1)
                                          )
                                        ),
                                        s.a.createElement(
                                          m.a,
                                          { lg: 2, className: $.a.button },
                                          0 === o
                                            ? s.a.createElement(
                                                i.a,
                                                {
                                                  onClick: function () {
                                                    return r({
                                                      firstName: "",
                                                      lastName: "",
                                                      email1: "",
                                                      email2: null,
                                                      phoneNumber1: "",
                                                      phoneNumber2: null,
                                                      roleId: null,
                                                    })
                                                  },
                                                  className: "btn btn-success",
                                                  name: "button",
                                                },
                                                s.a.createElement(J.m, null)
                                              )
                                            : s.a.createElement(
                                                i.a,
                                                {
                                                  onClick: function () {
                                                    return t(o)
                                                  },
                                                  className: "btn btn-danger",
                                                  name: "button",
                                                },
                                                s.a.createElement(J.s, null)
                                              )
                                        ),
                                        s.a.createElement(
                                          l.Fragment,
                                          { key: o },
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".firstName"),
                                              label: "First Name",
                                              placeholder: "Ex: John",
                                              error: a && a.data["firstName".concat(o)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".lastName"),
                                              label: "Last Name",
                                              placeholder: "Ex: Doe",
                                              error: a && a.data["lastName".concat(o)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".email1"),
                                              label: "Email 1",
                                              placeholder: "Ex: email@example.com",
                                              type: "email",
                                              error: a && a.data["email".concat(o)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".email2"),
                                              label: "Email 2 (Optional)",
                                              placeholder: "Ex: email@example.com",
                                              type: "email",
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".phoneNumber1"),
                                              label: "Phone Number 1",
                                              placeholder: "Ex: 020 8222 8778",
                                              error: a && a.data["phoneNumber".concat(o)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(o, ".phoneNumber2"),
                                              label: "Phone Number 2 (Optional)",
                                              placeholder: "Ex: 020 8222 8779",
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            null,
                                            s.a.createElement(B, {
                                              name: "users.".concat(o, ".roleId"),
                                              label: "Choose position name",
                                              positions: n,
                                              error: a && a.data["roleId".concat(o)],
                                            })
                                          )
                                        )
                                      )
                                    })
                                )
                              },
                            }),
                            s.a.createElement(
                              d.a,
                              null,
                              s.a.createElement(
                                m.a,
                                { className: "mt-3" },
                                s.a.createElement(
                                  i.a,
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
            a
          )
        })(l.Component),
        Q = a(10),
        z = a(132),
        H = (function (e) {
          Object(o.a)(a, e)
          var t = Object(c.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                companyName: e.props.clientId.companyName,
                addressName: e.props.clientId.addressName,
                existingUsers: e.props.clientId.users,
                users: [],
                usersToDelete: [],
              }),
              (e.onChange = function (t, a) {
                var n = e.state.usersToDelete
                t.target.checked
                  ? e.setState({ usersToDelete: [].concat(Object(Q.a)(n), [a]) })
                  : e.setState({
                      usersToDelete: n.filter(function (e) {
                        return e !== a
                      }),
                    })
              }),
              (e.onSubmit = (function () {
                var t = Object(v.a)(
                  E.a.mark(function t(a, n) {
                    var r, o, c, l, s, u, i, d, m
                    return E.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              a.preventDefault(),
                              (r = e.state),
                              (o = r.addressName),
                              (c = r.usersToDelete),
                              (l = n.companyName),
                              (s = n.users),
                              (u = e.props),
                              (i = u.updateAddressBook),
                              (d = u.clientId),
                              (m = u.hideAddressBook),
                              (t.next = 6),
                              i(d.id, { addressName: o, companyName: l, usersToDelete: c, users: s })
                            )
                          case 6:
                            m(null)
                          case 7:
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
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.resetAddressBooksErrors()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.error,
                    n = t.positions,
                    r = t.hideAddressBook,
                    o = this.state,
                    c = o.addressName,
                    u = o.companyName,
                    p = o.existingUsers
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      "div",
                      { className: "ms-panel-header" },
                      s.a.createElement("h6", null, "Edit client")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "ms-panel-body" },
                      s.a.createElement(M.c, {
                        initialValues: this.state,
                        render: function (t) {
                          var o = t.values
                          return s.a.createElement(
                            j.a,
                            {
                              noValidate: !0,
                              onSubmit: function (t) {
                                return e.onSubmit(t, o)
                              },
                            },
                            s.a.createElement(D.a, {
                              value: u,
                              name: "companyName",
                              label: "Company Name",
                              placeholder: "Ex: KP Acoustics",
                              error: a && a.data.companyName,
                            }),
                            s.a.createElement(V, {
                              formik: !0,
                              label: "Address",
                              addressName: c,
                              setAddress: function (t) {
                                return e.setState({ addressName: t })
                              },
                              error: a && a.data.addressName,
                            }),
                            s.a.createElement(
                              d.a,
                              null,
                              p.map(function (t, a) {
                                return s.a.createElement(
                                  s.a.Fragment,
                                  null,
                                  s.a.createElement(
                                    m.a,
                                    { lg: 10 },
                                    s.a.createElement(
                                      "div",
                                      { className: $.a.employee },
                                      s.a.createElement(
                                        "h6",
                                        null,
                                        "Employee ",
                                        a + 1,
                                        ":",
                                        s.a.createElement("a", null, "\xa0", t.firstName, " ", t.lastName),
                                        ", ",
                                        s.a.createElement("a", null, "\xa0", t.email1)
                                      )
                                    )
                                  ),
                                  0 !== a &&
                                    s.a.createElement(
                                      m.a,
                                      { lg: 2, className: $.a.button },
                                      s.a.createElement(z.a, {
                                        name: "userId",
                                        label: "Remove?",
                                        onChange: function (a) {
                                          return e.onChange(a, t.id)
                                        },
                                      })
                                    )
                                )
                              })
                            ),
                            s.a.createElement(M.b, {
                              name: "users",
                              render: function (e) {
                                var t = e.remove,
                                  r = e.push
                                return s.a.createElement(
                                  s.a.Fragment,
                                  null,
                                  s.a.createElement(
                                    d.a,
                                    null,
                                    s.a.createElement(
                                      m.a,
                                      { lg: 10 },
                                      s.a.createElement(
                                        "div",
                                        { className: $.a.employee },
                                        s.a.createElement("h6", null, "Add new employee")
                                      )
                                    ),
                                    s.a.createElement(
                                      m.a,
                                      { lg: 2, className: $.a.button },
                                      s.a.createElement(
                                        i.a,
                                        {
                                          onClick: function () {
                                            return r({
                                              firstName: "",
                                              lastName: "",
                                              email1: "",
                                              email2: null,
                                              phoneNumber1: "",
                                              phoneNumber2: null,
                                              roleId: null,
                                            })
                                          },
                                          className: "btn btn-success",
                                          name: "button",
                                        },
                                        s.a.createElement(J.m, null)
                                      )
                                    )
                                  ),
                                  o.users.length > 0 &&
                                    o.users.map(function (e, r) {
                                      return s.a.createElement(
                                        d.a,
                                        null,
                                        s.a.createElement(
                                          m.a,
                                          { lg: 10 },
                                          s.a.createElement(
                                            "div",
                                            { className: $.a.employee },
                                            s.a.createElement("h6", null, "Employee ", r + p.length + 1)
                                          )
                                        ),
                                        s.a.createElement(
                                          m.a,
                                          { lg: 2, className: $.a.button },
                                          s.a.createElement(
                                            i.a,
                                            {
                                              onClick: function () {
                                                return t(r)
                                              },
                                              className: "btn btn-danger",
                                              name: "button",
                                            },
                                            s.a.createElement(J.s, null)
                                          )
                                        ),
                                        s.a.createElement(
                                          l.Fragment,
                                          { key: r },
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".firstName"),
                                              label: "First Name",
                                              placeholder: "Ex: John",
                                              error: a && a.data["firstName".concat(r)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".lastName"),
                                              label: "Last Name",
                                              placeholder: "Ex: Doe",
                                              error: a && a.data["lastName".concat(r)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".email1"),
                                              label: "Email 1",
                                              placeholder: "Ex: email@example.com",
                                              type: "email",
                                              error: a && a.data["email".concat(r)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".email2"),
                                              label: "Email 2 (Optional)",
                                              placeholder: "Ex: email@example.com",
                                              type: "email",
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".phoneNumber1"),
                                              label: "Phone Number 1",
                                              placeholder: "Ex: 020 8222 8778",
                                              error: a && a.data["phoneNumber".concat(r)],
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            { lg: 6 },
                                            s.a.createElement(D.a, {
                                              name: "users.".concat(r, ".phoneNumber2"),
                                              label: "Phone Number 2",
                                              placeholder: "Ex: 020 8222 8779",
                                            })
                                          ),
                                          s.a.createElement(
                                            m.a,
                                            null,
                                            s.a.createElement(B, {
                                              name: "users.".concat(r, ".roleId"),
                                              label: "Choose position name",
                                              positions: n,
                                              error: a && a.data["roleId".concat(r)],
                                            })
                                          )
                                        )
                                      )
                                    })
                                )
                              },
                            }),
                            s.a.createElement(
                              d.a,
                              null,
                              s.a.createElement(
                                m.a,
                                { className: "mt-3" },
                                s.a.createElement(
                                  i.a,
                                  { variant: "primary", type: "submit", className: "w-25 float-right" },
                                  "Update"
                                ),
                                s.a.createElement(
                                  i.a,
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
                        },
                      })
                    )
                  )
                },
              },
            ]),
            a
          )
        })(l.Component),
        X = a(140),
        Y = a(134),
        Z = a(34),
        ee = (function (e) {
          Object(o.a)(a, e)
          var t = Object(c.a)(a)
          function a() {
            var e
            Object(n.a)(this, a)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = { loading: !0, clientId: null, isModalOpen: null }),
              (e.editAddressBook = function (t) {
                var a = e.props.clients
                e.setState({
                  clientId: a.find(function (e) {
                    return e.id === t
                  }),
                })
              }),
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
                  this.props.getAddressBooks(), this.props.getPositions()
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    a = (t.error, t.loading),
                    n = t.clients,
                    r = t.removeAddressBook,
                    o = (t.updateAddressBook, this.state),
                    c = o.isModalOpen,
                    l = o.clientId
                  return a
                    ? s.a.createElement(Z.a, null)
                    : n.length
                    ? s.a.createElement(
                        X.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "ms-panel" },
                          s.a.createElement(
                            "div",
                            { className: "ms-panel-header" },
                            s.a.createElement("h6", null, "Clients")
                          ),
                          s.a.createElement(
                            "div",
                            { className: "ms-panel-body" },
                            s.a.createElement(
                              u.a,
                              { striped: !0, bordered: !0, hover: !0 },
                              s.a.createElement(
                                "thead",
                                null,
                                s.a.createElement(
                                  "tr",
                                  null,
                                  s.a.createElement("th", null, "Company Name"),
                                  s.a.createElement("th", null, "Address"),
                                  s.a.createElement("th", null, "Email"),
                                  s.a.createElement("th", null, "Phone Number"),
                                  s.a.createElement("th", null, "Edit"),
                                  s.a.createElement("th", null, "Delete")
                                )
                              ),
                              s.a.createElement(
                                "tbody",
                                null,
                                n.map(function (t) {
                                  var a = t.users,
                                    n = t.id,
                                    o = t.companyName,
                                    l = t.addressName,
                                    u = a[0],
                                    d = u.email1,
                                    m = u.phoneNumber1
                                  return s.a.createElement(
                                    "tr",
                                    { key: n },
                                    s.a.createElement("td", null, o),
                                    s.a.createElement("td", null, l),
                                    s.a.createElement("td", null, d),
                                    s.a.createElement("td", null, m),
                                    s.a.createElement(
                                      "td",
                                      null,
                                      s.a.createElement(
                                        i.a,
                                        {
                                          id: n,
                                          onClick: function () {
                                            return e.editAddressBook(n)
                                          },
                                          variant: "primary",
                                        },
                                        "Edit Item"
                                      )
                                    ),
                                    s.a.createElement(
                                      "td",
                                      null,
                                      s.a.createElement(
                                        i.a,
                                        {
                                          id: n,
                                          variant: "primary",
                                          onClick: function () {
                                            e.toggleModal(n)
                                          },
                                        },
                                        "Delete Item"
                                      ),
                                      s.a.createElement(Y.a, {
                                        id: n,
                                        hideModal: e.toggleModal,
                                        isModalOpen: c,
                                        deleteState: function () {
                                          return r(n)
                                        },
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          )
                        ),
                        s.a.createElement(
                          d.a,
                          null,
                          s.a.createElement(
                            m.a,
                            { lg: "6" },
                            s.a.createElement(
                              "div",
                              { className: "ms-panel" },
                              l
                                ? s.a.createElement(
                                    H,
                                    Object.assign({}, this.props, {
                                      clientId: l,
                                      hideAddressBook: this.editAddressBook,
                                    })
                                  )
                                : s.a.createElement(q, this.props)
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
        })(l.Component)
      t.default = Object(f.compose)(
        g.g,
        Object(p.b)(
          function (e) {
            return { clients: A(e), loading: _(e), error: x(e), positions: I(e) }
          },
          {
            getAddressBooks: function () {
              return (function () {
                var e = Object(v.a)(
                  E.a.mark(function e(t) {
                    var a
                    return E.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return t({ type: b.a.GET_ADDRESS_BOOKS_REQUEST }), (e.prev = 1), (e.next = 4), S()
                            case 4:
                              ;(a = e.sent), t({ type: b.a.GET_ADDRESS_BOOKS_SUCCESS, payload: a }), (e.next = 11)
                              break
                            case 8:
                              ;(e.prev = 8),
                                (e.t0 = e.catch(1)),
                                t({ type: b.a.GET_ADDRESS_BOOKS_FAILURE, payload: e.t0 })
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
            removeAddressBook: function (e) {
              return (function () {
                var t = Object(v.a)(
                  E.a.mark(function t(a) {
                    return E.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), O(e)
                            case 3:
                              a({ type: b.a.REMOVE_ADDRESS_BOOK_SUCCESS, payload: e }), (t.next = 9)
                              break
                            case 6:
                              ;(t.prev = 6),
                                (t.t0 = t.catch(0)),
                                a({ type: b.a.REMOVE_ADDRESS_BOOK_FAILURE, payload: t.t0 })
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
            resetAddressBooksErrors: function () {
              return function (e) {
                e({ type: b.a.RESET_ERRORS_SUCCESS })
              }
            },
            addAddressBook: function (e) {
              return (function () {
                var t = Object(v.a)(
                  E.a.mark(function t(a) {
                    var n
                    return E.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), N(e)
                            case 3:
                              ;(n = t.sent), a({ type: b.a.ADD_ADDRESS_BOOK_SUCCESS, payload: n }), (t.next = 11)
                              break
                            case 7:
                              throw (
                                ((t.prev = 7),
                                (t.t0 = t.catch(0)),
                                a({ type: b.a.ADD_ADDRESS_BOOK_FAILURE, payload: t.t0 }),
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
            getPositions: function () {
              return (function () {
                var e = Object(v.a)(
                  E.a.mark(function e(t) {
                    var a
                    return E.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return t({ type: b.a.GET_POSITIONS_REQUEST }), (e.prev = 1), (e.next = 4), k()
                            case 4:
                              ;(a = e.sent), t({ type: b.a.GET_POSITIONS_SUCCESS, payload: a }), (e.next = 11)
                              break
                            case 8:
                              ;(e.prev = 8), (e.t0 = e.catch(1)), t({ type: b.a.GET_POSITIONS_FAILURE, payload: e.t0 })
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
            updateAddressBook: function (e, t) {
              return (function () {
                var a = Object(v.a)(
                  E.a.mark(function a(n) {
                    var r
                    return E.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (a.prev = 0), (a.next = 3), w(e, t)
                            case 3:
                              ;(r = a.sent),
                                n({ type: b.a.UPDATE_ADDRESS_BOOK_SUCCESS, payload: { data: r, id: e } }),
                                (a.next = 11)
                              break
                            case 7:
                              throw (
                                ((a.prev = 7),
                                (a.t0 = a.catch(0)),
                                n({ type: b.a.UPDATE_ADDRESS_BOOK_FAILURE, payload: a.t0 }),
                                a.t0)
                              )
                            case 11:
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
          }
        )
      )(ee)
    },
  },
])
//# sourceMappingURL=9.99c6f001.chunk.js.map
