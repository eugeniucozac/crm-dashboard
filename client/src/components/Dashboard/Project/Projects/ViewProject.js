import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import Sidebar from "@components/Dashboard/Sidebar"
import { Breadcrumb } from "@components/shared/Breadcrumb"
import { Loading } from "@components/shared/Loading"
import { getProjects } from "@actions/project"
import { selectProject, loadingProject } from "@selectors/project"
import Comments from "./Comments"
import Details from "./Details"
import History from "./History"
import Quotes from "../Quotes"

class ViewProject extends Component {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const { loading, project } = this.props

    if (loading) return <Loading />
    if (!project) return null
    return (
      <section className="main">
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col lg="11" className="container-left">
            <Breadcrumb />
            <div className="ms-panel">
              <Details project={project} />
            </div>
            <Row>
              <Col>
                <Quotes projectId={project.id} users={project.addressBook.users} />
              </Col>
              <Col>
                <History project={project} />
              </Col>
            </Row>
            <Comments projectId={project.id} />
          </Col>
        </Row>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  project: selectProject(state, props.computedMatch.params.id),
  loading: loadingProject(state),
})

export default connect(mapStateToProps, {
  getProjects,
})(ViewProject)
