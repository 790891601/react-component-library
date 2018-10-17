import { Component } from "react"
import PropTypes from "prop-types"
import "./TabNav.scss"

export default class TabNav extends Component {
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
            classPrefix : "tabNavPrefix",
            children : ""
        }
    }

    render() {
        const { children, className, classPrefix, clickToggleTab, activeIndex } = this.props

        const customeClassName = `${ classPrefix } ${ className }`;
        
        let index = 0;
        children.map(node => {
            node.props["clickToggleTab"] = clickToggleTab
            node.props["key"] = index++
            node.props["activeIndex"] = activeIndex 
        })

        return <ul className={ customeClassName } >{ children }</ul>
    }
}