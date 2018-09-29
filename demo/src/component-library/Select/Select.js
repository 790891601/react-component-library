import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Select.less'

let currentId = 0 //唯一id
export default class Select extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      expending: false
    }
  }

  static get defaultProps() {
    return {
      text : "",
      id : "", 
    }
  }

  static get propTypes() {
    return {
      text : PropTypes.string,
      id : PropTypes.string
    }
  }

  componentDidMount () {
    const div = this.dropWrap_ = document.createElement('div')

    div.className = 'type-error-drop-wrap'
    div.id = 'drop-wrap-' + currentId++
    document.body.appendChild(div)
  }

  componentWillUnmount () {
    document.body.removeChild(this.dropWrap_)
    delete this.dropWrap_
  }

  renderDrop () {
    try {
      const root = this.root_

      //定义样式对象
      const style = {
        left: root.offsetLeft,
        top: root.offsetTop + root.offsetHeight,
        display: this.state.expending ? 'block' : 'none'
      }

      //获取下拉文本数组
      const { texts } = this.props;
      let height = root.offsetHeight;

      const drop = texts.map(value => {
        //深复制
        const customeStyle = Object.assign({}, style);
        //递增
        style.top += height;
        return <div className='type-error-drop' style={customeStyle} >
          {value}
        </div>
      })
                  
      return ReactDOM.createPortal(drop, this.dropWrap_)
    } catch (err) {

    }
  }

  onMainClick () {
    this.setState({
      expending: !this.state.expending
    })
  }

  render () {
    const { text, id } = this.props   
    const { expending } = this.state
    const imgURL = expending ? 'assets/fold.svg' : 'assets/unfold.svg'

    return <div ref={c => { this.root_ = c }} id={id} className='type-error-select' onClick={this.onMainClick.bind(this)}>
      <div className='main-wrap'>
        <div className='left-text'>
          { text }
        </div>
        <div className='right-btn'>
          <img src={ imgURL } />
        </div>
      </div>
      { this.renderDrop() }
    </div>
  }
}
