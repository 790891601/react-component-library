import ReactDOM from "react-dom";
import React from "react";
import { Table, Columns, ColumnTitles, TablePage } from "./component-library/Table";

class TableWay extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Table data={this.props.data}>
            <TablePage page="1" pageItem="2" />
            <ColumnTitles></ColumnTitles>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns> 
        </Table>
    }
}

export default function(data) {
    ReactDOM.render(<TableWay data={data} /> , 
        document.querySelector("#react"));
}