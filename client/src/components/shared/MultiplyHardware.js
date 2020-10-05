import React, { Component } from "react"
import { FaTimes, FaPlus } from "react-icons/fa"
import { FormControl, FormGroup, Col, Row, FormLabel, Button } from "react-bootstrap"
import shortid from "shortid"
import PropTypes from "prop-types"

export class MultiplyHardware extends Component {
  state = {
    rows: { [shortid.generate()]: "" },
  }

  onAdd = () => {
    let { rows } = this.state
    if (Object.keys(rows).length < 3) {
      this.setState({ rows: { ...rows, [shortid.generate()]: "" } })
    }
  }

  onRemove = key => {
    const state = { ...this.state.rows }
    const { onChange } = this.props
    delete state[key]
    this.setState({ rows: state })
    onChange(this.output(state))
  }

  onSelect = e => {
    e.persist()
    const { onChange } = this.props
    const data = { ...this.state.rows, [e.target.name]: e.target.value }
    this.setState({ rows: data })
    onChange(this.output(data))
  }

  output = data => {
    return Object.values(data).filter(value => !!value)
  }

  render() {
    const { optionsData, label, error } = this.props
    const { rows } = this.state

    if (!optionsData || !optionsData.length) return null
    const options = optionsData.map(hardware => ({
      id: hardware.id,
      name: `${hardware.type.name} ${hardware.model.manufacture.name} ${hardware.model.name} ${hardware.serialNumber}`,
    }))
    options.sort((a, b) => a.name.localeCompare(b.name))

    return (
      <>
        <FormLabel>{label}</FormLabel>
        {Object.keys(rows).map((rowKey, index) => (
          <FormGroup key={rowKey}>
            {error && <div className="invalid-feedback select">{error}</div>}
            <Row className="hardware margin-label">
              <Col lg={10}>
                <FormControl
                  as="select"
                  name={rowKey}
                  value={rows[rowKey]}
                  onChange={this.onSelect}
                  isInvalid={!!error}
                >
                  <option value="">Select Hardware Name</option>
                  {options.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </FormControl>
              </Col>
              <Col lg={2}>
                {index === 0 ? (
                  <Button onClick={this.onAdd} className="btn btn-success" name="button">
                    <FaPlus />
                  </Button>
                ) : (
                  <Button onClick={() => this.onRemove(rowKey)} className="btn btn-danger" name="button">
                    <FaTimes />
                  </Button>
                )}
              </Col>
            </Row>
          </FormGroup>
        ))}
      </>
    )
  }
}

MultiplyHardware.propTypes = {
  rows: PropTypes.object.isRequired,
  optionsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
}
