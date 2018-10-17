import { Component } from "react"
import PropTypes from "prop-types"
import "./TabHead.scss"

export default class TabHead extends Component {
    constructor(props) {
        super(props)
    }

    static get PropTypes() {
        return {
            className : PropTypes.string,
            classPrefix : PropTypes.string,
            activeIndex : PropTypes.number
        }
    }

    static get defaultProps() {
        return {
            className : "",
            classPrefix : "tabHeadPrefix",
            children : ""
        }
    }

    render() {
        const { children, classPrefix, className, clickToggleTab, key, activeIndex } = this.props
        
        let activeIndexStyle = ""
        if(activeIndex === key) {
            activeIndexStyle = "tabHeadActive";
        }

        const customeClassName = `${ classPrefix } ${ activeIndexStyle } ${ className }`;

        return <li className={ customeClassName } onClick={ _ => clickToggleTab(key) }>{ children }</li>
    }
}