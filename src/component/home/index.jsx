import React from 'react'
import HeaderWrapper from '../common/header-wrapper.jsx'
import SearchComponent from './home-search.jsx'
import RecommendComponent from './home-recommend.jsx'
import PoetryCardComponent from '../common/poetry-card.jsx'

const styles = {
  mainWrapper: {
    display: 'flex',
    position: 'absolute',
    left: '-35vw',
    top: 0,
    right: 0,
    bottom: 0,
    transitionProperty: 'width',
    transitionDuration: '3s',
    paddingTop: '.86rem'
  },
  collapsedActive: {
    left: 0
  },
  siderWrapper: {
    width: '35vw'
  },
  articleWrapper: {
    flex: 1
  }
}

class SiderComponent extends React.Component {
  render () {
    return (
      <aside style={styles.siderWrapper}>
        i am sider
      </aside>
    )
  }
}

class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  render () {
    let cards = [1, 2, 3, 4, 5, 6].map(item => {
      return (
        <PoetryCardComponent key={item}></PoetryCardComponent>
      )
    })
    return (
      <article style={styles.articleWrapper}>
        <HeaderWrapper
          {...this.props}
        ></HeaderWrapper>
        <SearchComponent onSearch={this.props.onSearch}></SearchComponent>
        <RecommendComponent></RecommendComponent>
        <section
          style={{
            padding: '.3rem'
          }}
        >
          <header style={{lineHeight: '.6rem'}}>精品推荐</header>
          {cards}
        </section>
      </article>
    )
  }
}

export default class HomeComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      collapsed: false,
      title: '古诗词典',
      searchText: ''
    }
  }
  render () {
    // TODO: 目前动画效果不生效，所以没有显示抽屉菜单
    let collapsedStyle = Object.assign({}, styles.mainWrapper)
    return (
      <main style={collapsedStyle} collapsed={this.state.collapsed ? 1 : 0}>
        <SiderComponent></SiderComponent>
        <MainComponent
          onCollapsed={()=>this.collapsedDrawer()}
          onSearch={val => this.onSearch(val)}
          {...this.state}
        ></MainComponent>
      </main>
    )
  }
  collapsedDrawer () {
    let collapsed = this.state.collapsed
    this.setState(state => ({
      collapsed: !state.collapsed
    }))
  }
  onSearch (text) {
    console.log(text)
  }
}