import { Component } from "react"
import { Tabs, TabPane, TabNav, TabHead, TabContent } from "./Tabs"

export default class TabsWay extends Component {
    constructor(props) {
        super(props);

        this.clickToggleTab = this.clickToggleTab.bind(this)

        this.state = {
            activeIndex : 0
        }
    }

    clickToggleTab(index) {
        console.log("click", index)
        this.setState({
            activeIndex : index
        })
    }

    render() {
        return <div>
            <Tabs clickToggleTab={ this.clickToggleTab } activeIndex={ this.state.activeIndex }>
                <TabNav>
                    <TabHead>Tab 1</TabHead>
                    <TabHead>Tab 2</TabHead>
                    <TabHead>Tab 3</TabHead>
                </TabNav>
                <TabContent>
                    <TabPane>Tab Content 1</TabPane>
                    <TabPane>Tab Content 2</TabPane>
                    <TabPane>Tab Content 3</TabPane>
                </TabContent>
            </Tabs>
        </div>
    }
}

/*
    点击TabHead一个元素，获取当前索引,
    更新activeIndex状态
    触发事件
    更新TabPane样式
 */