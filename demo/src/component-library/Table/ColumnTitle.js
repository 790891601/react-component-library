/*
    生成TH
 */
import React from "react";

export default class Th extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <th>{ this.props.children }</th>
    }
}