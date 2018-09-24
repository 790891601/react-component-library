import React from 'react'
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  static get defaultProps() {
    return {
      value : ""
    }
  }

  static get propTypes() {
    return {
      value : PropTypes.string || PropTypes.number
    }
  }

  onChange (event) {
    const t = this.input_.value

    if (t && t.length > 10) {
      return
    }

    this.setState({
      value: t
    })
  }

  render () {
    let { value: defaultValue, type } = this.props
    const { value } = this.state
    const types = ["radio", "date", "button", "checkbox", "color", "datetime", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
    type = types.includes(type) ? type : "text";

    return <input
      ref={c => { this.input_ = c }}
      type={ type }
      defaultValue={defaultValue}
      value={value}
      onChange={this.onChange.bind(this)} />
  }
}
