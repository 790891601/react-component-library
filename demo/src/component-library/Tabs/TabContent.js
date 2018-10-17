import { Component } from "react"

export default class TabContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, activeIndex } = this.props

        let key = 0 
        children.map(node => {
            node.props["activeIndex"] = activeIndex 
            node.props["key"] = key++
        })
        
        return <div>{ children }</div>
    }
}