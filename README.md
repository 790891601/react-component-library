# react-component-library
This is React-component-library.

## 以下必读
1 className={string}  // className需要字符串的形式
2 text={|string} value={string|}   // text和{string|}任选一个传参，效果一样
3 data={2array}    // data是一个二维数组
4 style={int:default=1}  // style可选参数，默认为1

## Button
* help 
1 导入Button组件
    `var Button = require("./component-library/Button") `
2 传入相关props
    `<Button className={string} style={object} onClick={function} text={|string}>{string|}</Button>`
        
## Input
* help 
1 导入Input组件
    `var Input = require("./component-library/Input")`
2 传入相关props
    `<Input value={string:default=""} />`
## Select
* help 
    1 导入Select组件
        `var Select = require("./component-library/Select")`
    2 传入相关props
        `<Select text={string}  />`

## Table
* help 
1 导入Table组件
```
var Table = require("./component-library/Table").Table
var Columns = require("./component-library/Table").Columns
var TablePage = require("./component-library/Table").TablePage
var TableTitles = require("./component-library/Table").ColumnTitles
```

2 传入相关props
```
<Table data={2array} style={int:default=1}>
    <TablePage page={int} pageItems={int} />
    <ColumnTitles></ColumnTitles>
    <Columns></Columns>
    <Columns></Columns>
    <Columns></Columns>
    <Columns></Columns>
</Table>
```

/*
    Table组件已实现二维数组传值，分页，展示数据基本实现，默认样式

    缺：几种样式(系统自定样式)、自定义样式、数据源传入方式、
    传入数据合法性、生成Columns(两种方式：根据数据源自动生成，手动渲染组件)。
 */