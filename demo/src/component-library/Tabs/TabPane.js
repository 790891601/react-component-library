import { Component } from "react"
import PropTypes from "prop-types"
import "./TabPane.scss"

export default class TabPane extends Component {
    constructor(props) {
        super(props)
    }

    static get PropTypes() {
        return {
            className : PropTypes.string,
            classPrefix : PropTypes.string
        }
    }

    static get defaultProps() {
        return {
            className : "",
            classPrefix : "tabPanePrefix",
            children : ""
        }
    }

    render() {
        const { children, className, classPrefix, activeIndex, key } = this.props

        let activeIndexStyle = ""
        if(activeIndex === key) {
            activeIndexStyle = "toggleBlock"
        }

        const customeClassName = `${ classPrefix } ${ activeIndexStyle } ${ className }`

        return <div className={ customeClassName }>{ children }</div>
    }
}