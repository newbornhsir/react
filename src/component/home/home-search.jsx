import React from 'react';

export default class SearchComponent extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {
      focus: false,
      searchText: ''
    }
  }
  render () {
    return (
      <div
        style={{
          border: '1px solid #ccc',
          display: 'flex'
        }}
      >
        <input 
          type="text" 
          placeholder="搜索"
          style={{
            height: '.8rem',
            textAlign: this.state.focus ? 'left' : 'center',
            flex: 1
          }}
          value={this.state.searchText}
          onFocus={() => this.onFocus()}
          onChange={(e) => this.onInput(e)}
        />
        {
          this.state.focus &&
          <button
            style={{
              width: '1rem',
              height: '.8rem',
              lineHeight: '.8rem'
            }}
            onClick={()=>this.onSubmit()}
          >
            search
          </button>
        }
      </div>
    )
  }
  onFocus () {
    this.setState({focus: true, keepText: false})
  }
  /**TODO:
   * input添加blur的事件的话，button的点击事件来不及触发，先触发的是失去焦点事件
   * 这里用事件委托？先取消失去焦点事件
   */
  onBlur (keepText) {
    this.setState(state => ({focus: false, searchText: keepText ? state.searchText : ''}))
  }
  onSubmit () {
    this.props.onSearch(this.state.searchText)
    this.onBlur(true)
  }
  onInput (e) {
    this.setState({searchText: e.target.value})
  }
}