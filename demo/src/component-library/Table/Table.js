import React from "react";
import { data } from "./Config";
import "./table.scss";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        data.title = this.props.data.title || null; //标题列表
        data.content = this.props.data.content || null;  //内容列表
        data.pageContent = JSON.parse(JSON.stringify(this.props.data.content)) || null; //分页内容列表
        return <table>{ this.props.children }</table>
    }
}