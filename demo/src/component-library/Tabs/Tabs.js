import { Component } from "react"
import PropTypes from "prop-types"

export default class Tabs extends Component {
    constructor(props) {
        super(props)
    }

    static get defaultProps() {
        return {
            classPrefix : "",
            defaultActiveIndex : 0,
            className : ""
        }
    }

    static get PropTypes() {
        return {
            classPrefix : PropTypes.string,
            defaultActiveIndex : PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            className : PropTypes.string
        }
    }

    render() {
        const { classPrefix, defaultActiveIndex, className, children, activeIndex, clickToggleTab } = this.props

        const customeClassName = `${ classPrefix } ${ className }` 

        children.map(node => {
            if(node.type.name === "TabNav") {
                node.props["clickToggleTab"] = clickToggleTab
            }
            
            node.props["activeIndex"] = activeIndex
        })

        return <div className={ customeClassName }>{ children }</div>
    }
}