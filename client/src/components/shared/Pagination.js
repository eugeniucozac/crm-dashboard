import React, { Component } from "react"
import { Button, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

class Pagination extends Component {
  state = {
    inventoryId: this.props.inventoryId,
  }

  pageSwitcher = val => {
    const { currentPage, goNext, goPrev } = this.props
    val === "next" ? goNext(currentPage) : goPrev(currentPage)
  }

  render() {
    const { items, type, limit, currentPage } = this.props
    const totalPages = Math.ceil(items.length / limit)

    return (
      <Row className={`pagination ${type}`}>
        {type !== "issues" && (
          <Col lg="9">
            <p>
              Showing {currentPage * limit - limit + 1}-
              {items.length > currentPage * limit - limit && items.length < currentPage * limit
                ? items.length
                : currentPage * limit}{" "}
              of {items && items.length} entries
            </p>
          </Col>
        )}
        <Col>
          <div className="arrows d-flex justify-content-end">
            <Button onClick={() => this.pageSwitcher("prev")} disabled={currentPage === 1}>
              <FaChevronLeft />
            </Button>
            <Button onClick={() => this.pageSwitcher("next")} disabled={currentPage >= totalPages}>
              <FaChevronRight />
            </Button>
          </div>
        </Col>
      </Row>
    )
  }
}

Pagination.propTypes = {
  inventoryId: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
  items: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
}

export default Pagination
