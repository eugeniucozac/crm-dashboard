import React, { Component } from "react"
import { FormGroup, FormControl, FormLabel, Col, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import styles from "./AutocompleteField.module.css"

export class AutocompleteField extends Component {
  state = {
    activeSuggestion: 0,
    filteredData: [],
    showData: false,
    value: "",
    error: this.props.error,
    disabled: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.disabled !== nextProps.disabled) {
      return {
        value: "",
      }
    }
    return null
  }

  onChange = e => {
    const { data, error } = this.props
    const { value } = e.target
    const filteredData = data.filter(item => item.companyName.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      activeSuggestion: 0,
      filteredData,
      showData: true,
      value,
    })

    if (value.length === 0) {
      this.setState({
        error,
      })
    }
  }

  onClick = e => {
    const { setAddressBookId, error } = this.props
    const { filteredData } = this.state
    this.setState({
      activeSuggestion: 0,
      filteredData: [],
      showData: false,
      value: e.target.innerText,
    })

    if (filteredData[0].id) {
      this.setState({
        error: "",
      })
    } else {
      this.setState({
        error,
      })
    }

    setAddressBookId(filteredData[0].id)
  }

  render() {
    const { label, placeholder, disabled, name } = this.props
    const { filteredData, showData, value, error } = this.state
    return (
      <Row className={styles.row}>
        <FormGroup as={Col}>
          <FormLabel>{label}</FormLabel>
          {error && !disabled && <div className="invalid-feedback">{error}</div>}
          <FormControl
            type="text"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={this.onChange}
            isInvalid={!!error && !disabled}
            disabled={disabled}
          />
        </FormGroup>
        {showData && value ? (
          <ul className={styles.suggestions}>
            {filteredData.length ? (
              filteredData.map(suggestion => (
                <li key={suggestion} onClick={this.onClick}>
                  {suggestion.companyName}
                </li>
              ))
            ) : (
              <li>No suggestions</li>
            )}
          </ul>
        ) : null}
      </Row>
    )
  }
}

AutocompleteField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setAddressBookId: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  activeSuggestion: PropTypes.bool.isRequired,
  filteredData: PropTypes.array.isRequired,
  showData: PropTypes.bool.isRequired,
}
