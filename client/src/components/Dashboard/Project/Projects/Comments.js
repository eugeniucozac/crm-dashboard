import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"
import { Col, Row, Button, Form } from "react-bootstrap"
import { Loading } from "@components/shared/Loading"
import { TextareaField } from "@components/shared/Fields/TextareaField"
import { getComments, addComment } from "@actions/project"
import { selectComments, loadingComments, commentErrors } from "@selectors/project"
import { selectAuthorizationId } from "@selectors/authorization"
import PropTypes from "prop-types"
import styles from "./Projects.module.css"

class Comments extends Component {
  state = {
    comment: "",
  }

  componentDidMount() {
    this.props.getComments(this.props.projectId)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  addNewComment = async e => {
    e.preventDefault()
    const { comment } = this.state
    const { addComment, projectId, consultantId } = this.props

    try {
      await addComment(projectId, { content: comment, consultantId })
      this.setState({
        comment: "",
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { loading, comments } = this.props
    if (loading) return <Loading />
    return (
      <div className="ms-panel">
        <div className={`ms-panel-header ${styles.headermini}`}>
          <div className={`d-flex justify-content-between ${styles.header}`}>
            <h6>Comments</h6>
          </div>
        </div>
        <div className="ms-panel-body">
          {comments.length ? (
            comments.map(({ createdAt, content, consultant: { firstName, lastName } }) => (
              <div className={`ms-chat-bubble ms-chat-message media ms-chat-incoming clearfix ${styles.messages}`}>
                <div class={styles.mschatimg}>
                  <div class={styles.msimground}>
                    {firstName.charAt(0)} {lastName.charAt(0)}
                  </div>
                </div>
                <div class="media-body">
                  <div className={styles.mschattext}>
                    <p>{content}</p>
                  </div>
                  <p className={styles.mschattime}>{moment(createdAt).format("LLLL")}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No comments!</p>
          )}
          <Form noValidate onSubmit={this.addNewComment}>
            <TextareaField name="comment" label="" onChange={this.onChange} />
            <Row>
              <Col>
                <Button type="submit" className="w-25 float-right">
                  Add Comment
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  comment: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  consultantId: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  addComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  comments: selectComments(state),
  loading: loadingComments(state),
  error: commentErrors(state),
  consultantId: selectAuthorizationId(state),
})

export default connect(mapStateToProps, {
  getComments,
  addComment,
})(Comments)
