import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { store } from "@store"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "@assets/css/colors.css"
import "@assets/scss/style.scss"
import "@assets/scss/Dashboard.scss"

const renderApp = () =>
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  )

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp)
}

renderApp()
