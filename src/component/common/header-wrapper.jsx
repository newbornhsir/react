import React from 'react'

/**FIXME: flex中的align-items不生效 */
const styles = {
  headerWrapper: {
    height: '0.86rem',
    background: '#ccc',
    color: '#fff',
    display: 'flex',
    alignItems: 'cneter',
    lineHeight: '0.86rem',
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0
  }
}

export default class HeaderWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  render () {
    return (
      <div style={styles.headerWrapper}>
        <span 
          style={{float: 'left', padding: '0 .1rem'}} 
          onClick={this.props.onCollapsed}
        >
          {this.props.collapsed ? 'close' : 'open'}
        </span>
        <div
          style={{
            flex: 1
          }}
        >{this.props.title || '古诗词典'}</div>
        <div style={{
          float: 'right',
          width: '1.2rem',
          textAlign: 'center',
        }}>
          筛选
        </div>
      </div>
    )
  }
}