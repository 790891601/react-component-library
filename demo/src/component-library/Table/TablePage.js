/*
    Table分页组件
 */
import React from "react";
import { data } from "./Config";

const { ceil, floor } = Math;

export default class TablePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //每一页几个数据、现在在第几页
        let { pageItem, page } = this.props;
        page = floor(page), 
        pageItem = floor(pageItem);
        //分页逻辑：1. 求当前数据总数 2. 计算页数 3.将后面的数据拿掉 4.分页
        const count = data.content.length; 
        const pageCount = ceil(count / pageItem); //页数
        const startPositon = (page-1)*pageItem; 
        const endPosition = startPositon + pageItem;
        data.pageContent = data.content.slice(startPositon, endPosition);

        return null
    }
}