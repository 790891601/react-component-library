/*
    生成TD
 */
import React from "react";

export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return <td>{ this.props.children }</td>
    }
}
