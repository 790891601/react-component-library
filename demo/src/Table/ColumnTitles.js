/*
    根据数据源生成标题
 */
import React from "react";
import ColumnTitle from "./ColumnTitle";
import { data } from "./modelConst";

export default class Ths extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titlesHTML = data.title.map(value => <ColumnTitle>{ value }</ColumnTitle>);
        return <tr>{ titlesHTML }</tr>
    }
}