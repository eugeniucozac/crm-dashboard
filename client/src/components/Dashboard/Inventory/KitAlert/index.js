import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import { getKits } from "@actions/inventory"
import { selectKits } from "@selectors/inventory"

class KitAlert extends Component {
  state = {
    newDate: new Date(),
  }

  componentDidMount() {
    this.props.getKits()
  }

  render() {
    const { kits } = this.props
    const { newDate } = this.state
    let kitsAr = []

    if (kits) {
      kitsAr = kits.filter(x => {
        const toDays = (new Date(x.calibrationDueDate) - newDate) / (60 * 60 * 24 * 1000)
        return toDays < 14 && toDays > 0
      })
    }

    if (!kitsAr.length) return null
    return (
      <>
        {kitsAr && (
          <Row>
            <Col>
              <div className="ms-panel">
                <div className="ms-panel-body ms-news-flash-container">
                  <div className="ms-news-update">
                    <span>Calibration Alert</span>
                  </div>
                  <ul id="news-flash">
                    <li>
                      <p>
                        We need to make calibration for next hardwares and kits:{" "}
                        {kitsAr.map(item => item.name).join(", ")}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </>
    )
  }
}

KitAlert.propTypes = {
  kits: PropTypes.array.isRequired,
  kitsAr: PropTypes.array.isRequired,
  newDate: PropTypes.instanceOf(Date),
}

const mapStateToProps = state => ({
  kits: selectKits(state),
})

export default connect(mapStateToProps, { getKits })(KitAlert)
