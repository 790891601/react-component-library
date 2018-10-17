import ReactDOM from "react-dom"
import { Component } from "react"
import Radio from "./component-library/Radio"

export default class RadioWay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Radio value="male" />
            <Radio value="remale" />
        </div>
    }
}