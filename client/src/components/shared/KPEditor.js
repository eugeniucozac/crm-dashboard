import React, { Component } from "react"
import PropTypes from "prop-types"
import "ckeditor4/ckeditor.js"

export default class KPEditor extends Component {
  constructor(props) {
    super(props)
    this.ckeditorTextarea = React.createRef()
  }

  componentDidMount() {
    const { data, addContentEditor } = this.props
    this.initCkeditor(addContentEditor)
    this.setState({ data })
  }

  initCkeditor(addContentEditorRedux) {
    const ckeditor = window.CKEDITOR

    ckeditor.replace("ckeditor", {
      allowedContent: true,
      removePlugins: "sourcearea",
      height: 650,
    })
    ckeditor.addCss(
      ".cke_editable{ zoom: 1.4; margin: 0 } .cke_editable .hide{display: none!important} .cke_editable .head{margin-top: 1rem} .cke_editable .head h2{display:none}"
    )
    ckeditor.instances.ckeditor.on("change", function () {
      addContentEditorRedux(this.getData())
    })
  }

  render() {
    return (
      <div>
        <textarea cols="80" name="ckeditor" rows="30" ref={this.ckeditorTextarea} value={this.props.data} />
      </div>
    )
  }
}

KPEditor.propTypes = {
  addContentEditor: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
