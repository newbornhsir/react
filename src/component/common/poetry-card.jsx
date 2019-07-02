import React, { PureComponent } from 'react';

export default class PoetryComponent extends React.Component {
  render () {
    return (
      <section
        style={{
          height: '2rem',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
          padding: '.3rem',
          marginBottom: '.2rem'
        }}
      >
        <header style={{fontSize: '18px', fontWeight: 500}}>水调歌头</header>
        <div style={{lineHeight: '0.8rem'}}>/现代/毛泽东</div>
        <p>北国风光，千里冰村，万里雪牌哦</p>
      </section>
    )
  }
}