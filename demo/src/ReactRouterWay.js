import React from "react"; 
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Form, Input, Select, Table, Columns, ColumnTitles, TablePage } from "./component-library";

export default class ReactRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            position: "fixed",
            left : "20%",
            top : "45%"
        }
        const texts = [
            "option1",
            "option2",
            "option3",
            "option4",
            "option5",
        ]
        return <Router>
            <div>
                <Switch>
                    <Route path="/Button" component={Button}></Route>
                    <Route path="/Input" component={Input}></Route>
                    <Route path="/Form" component={Form}></Route>
                    <Route path="/Select" component={_ => <Select texts={texts} />}></Route>
                    <Route path="/Table" component={TableWay}></Route>
                    <Route path="/" component={Hi}></Route>
                </Switch>
                <div style={style}>
                    <Link to="/Button"><Button>按钮</Button></Link> 
                    <Link to="/Input"><Button>输入框</Button></Link>
                    <Link to="/Form"><Button>表单</Button></Link>
                    <Link to="/Select"><Button>下拉框</Button></Link>
                    <Link to="/Table"><Button>表格</Button></Link>
                </div>
            </div>
        </Router>
       
    }
}

class TableWay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = {
            title : [
                "标题1",
                "标题2",
                "标题3"
            ],
            content : [[
                "1",
                "哈喽",
                "吴"
            ],[
                "2",
                "哈喽2",
                "吴2"
            ],[
                "13",
                "哈喽3",
                "吴3"]]
        };
        return <Table data={data}>
            <ColumnTitles></ColumnTitles>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
            <Columns></Columns>
        </Table>
    }
}

class Hi extends React.Component {
    render() {
        return <div>Hi, React Router</div>
    }
}