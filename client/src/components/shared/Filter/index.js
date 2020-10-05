import React from "react"
import { Row, Col, Form, FormControl } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import styles from "./Filter.module.css"
import PropTypes from "prop-types"

const Filter = ({ onChange }) => {
  return (
    <Row className="justify-content-end">
      <Form as={Col} md="3">
        <div className={styles.column}>
          <FormControl
            type="text"
            name="query"
            placeholder="Find Project By: ID, Address, Post Code, Email"
            onChange={onChange}
          />
          <FaSearch />
        </div>
      </Form>
    </Row>
  )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Filter
