/*
    根据数据源生成多个TD
 */
import React from "react";
import Column from "./Column";
import { data } from "./Config";

export default class Columns extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const first = data.pageContent.shift() || []; //拿到数据第一项
        const firstHTML = first.map(value => <Column>{ value }</Column>); //每个数据添加td
        return <tr>{ firstHTML }</tr> 
    }
}
