import { Component } from "react"

export default class Radio extends Component {
    constructor(props) {
        super(props)
    }

    onChange(e) {
        console.log(e.target)
    }

    render() {
        const { value } = this.props
        return <input type="radio" value={ value } onChange={this.onChange.bind(this)} />
    }
}