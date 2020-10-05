import React, { lazy, Suspense, Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { restoreSession } from "@actions/authorization"
import { selectAuthorization } from "@selectors/authorization"

import Login from "@components/Authorization/Login"
import Reset from "@components/Authorization/Reset"
import Forgot from "@components/Authorization/Forgot"
import NotFound from "@components/NotFound"
import AddProject from "@components/Dashboard/Project/Projects/AddProject"
import ViewProject from "@components/Dashboard/Project/Projects/ViewProject"
import ViewInvoice from "@components/Dashboard/Invoices/ViewInvoice"
import AuthorizedRoute from "@components/Routes/AuthorizedRoute"
import EditProject from "components/Dashboard/Project/Projects/EditProject"
import { Loading } from "@components/shared/Loading"

const Consultants = lazy(() => import("@components/Dashboard/Consultants"))
const ChangePassword = lazy(() => import("@components/Dashboard/ChangePassword"))
const Type = lazy(() => import("@components/Dashboard/Inventory/Type"))
const Manufacture = lazy(() => import("@components/Dashboard/Inventory/Manufacture"))
const Model = lazy(() => import("@components/Dashboard/Inventory/Model"))
const Hardware = lazy(() => import("@components/Dashboard/Inventory/Hardware"))
const Kit = lazy(() => import("@components/Dashboard/Inventory/Kit"))
const Issues = lazy(() => import("@components/Dashboard/Issues"))
const ProjectQuotes = lazy(() => import("@components/Dashboard/Project/Quotes"))
const CreateQuote = lazy(() => import("@components/Dashboard/Project/Quotes/CreateQuote"))
const EditQuote = lazy(() => import("@components/Dashboard/Project/Quotes/EditQuote"))
const QuoteService = lazy(() => import("@components/Dashboard/Project/Services"))
const AdddressBook = lazy(() => import("@components/Dashboard/Project/AddressBook"))
const Projects = lazy(() => import("@components/Dashboard/Project/Projects"))
const Invoices = lazy(() => import("@components/Dashboard/Invoices"))
const Statistics = lazy(() => import("@components/Dashboard/Statistics"))

class App extends Component {
  state = {
    loading: true,
  }

  async componentDidMount() {
    await this.props.restoreSession()
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }

    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/reset" component={Reset} />
          <Route path="/forgot" component={Forgot} />
          <AuthorizedRoute path="/dashboard/change-password" component={ChangePassword} />
          <AuthorizedRoute path="/dashboard/consultants" component={Consultants} />
          <AuthorizedRoute path="/dashboard/inventory-kit" component={Kit} />
          <AuthorizedRoute path="/dashboard/inventory-hardware" component={Hardware} />
          <AuthorizedRoute path="/dashboard/inventory-type" roles={["admin", "technical-manager"]} component={Type} />
          <AuthorizedRoute
            path="/dashboard/inventory-manufacture"
            roles={["admin", "technical-manager"]}
            component={Manufacture}
          />
          <AuthorizedRoute path="/dashboard/inventory-model" roles={["admin", "technical-manager"]} component={Model} />
          <AuthorizedRoute path="/dashboard/issues" component={Issues} />
          <AuthorizedRoute path="/dashboard/projects" component={Projects} />
          <AuthorizedRoute path="/dashboard/project/add" component={AddProject} />
          <AuthorizedRoute path="/dashboard/project/:id" exact component={ViewProject} />
          <AuthorizedRoute path="/dashboard/project/:id/edit" component={EditProject} />
          <AuthorizedRoute path="/dashboard/project-services" component={QuoteService} />
          <AuthorizedRoute path="/dashboard/project-quotes" component={ProjectQuotes} />
          <AuthorizedRoute path="/dashboard/project/:id/create-quote" component={CreateQuote} />
          <AuthorizedRoute path="/dashboard/project/:projectId/quote/:quoteName" component={EditQuote} />
          <AuthorizedRoute path="/dashboard/address-book" component={AdddressBook} />
          <AuthorizedRoute path="/dashboard/statistics" component={Statistics} />
          <AuthorizedRoute path="/dashboard/invoices" component={Invoices} />
          <AuthorizedRoute path="/dashboard/invoice/:id" component={ViewInvoice} />
          <Redirect from="/dashboard" to="/dashboard/consultants" />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    )
  }
}

const mapStateToProps = state => ({
  authorization: selectAuthorization(state),
})

export default connect(mapStateToProps, { restoreSession })(App)
