import React, { PureComponent } from 'react';

export default class RecommendComponent extends React.Component {
  render () {
    return (
      <section
        style={{
          height: '2.6rem',
          background: '#ccc',
          padding: '.2rem .1rem'
        }}
      >
        <header
          style={{
            fontSize: '16px'
          }}
        >随机推荐</header>
        <p>碧玉妆成一树高，万条垂下绿丝绦</p>
      </section>
    )
  }
}