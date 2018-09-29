import React from 'react'
import PropTypes from "prop-types";
import "./Input.scss";

export default class Input extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  static get defaultProps() {
    return {
      value : "",
      type : "text",
      name : "",
      maxLength : 10,
      className : "",
      id : ""
    }
  }

  static get propTypes() {
    return {
      value : PropTypes.string || PropTypes.number,
      type : PropTypes.string,
      name : PropTypes.string,
      maxLength : PropTypes.number,
      className : PropTypes.string,
      id : PropTypes.string
    }
  }

  onChange (event) {
    const { value } = this.input_
    const { maxLength } = this.props;

    //最大长度
    if (value && value.length > maxLength) {
      return
    }

    this.setState({
      value
    })
  }

  render () {
    // 默认值 类型
    let { value: defaultValue, type, name, id, className } = this.props
    // 值(外部输入值， 只适合输入框)
    let { value } = this.state
    // 验证type合法性
    const types = ["radio", "date", "button", "checkbox", "color", "datetime", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
    type = types.includes(type) ? type : "text";

    let [ref, onchange] = [null, null];
    switch(type) {
      //只有类型是输入框才能输入
      case "text":
      case "email":
      case "number":
      case "search":
      case "password":
        ref = el => { this.input_ = el };
        onchange = this.onChange.bind(this);
        break;
      //类型不是text不能输入
      default :
        value = defaultValue;
        break;
    }

    return <input
      className = {className}
      id = {id}
      name={name}
      ref={ref}
      type={ type }
      defaultValue={defaultValue}
      value={value}
      onChange={onchange} />
  }
}
