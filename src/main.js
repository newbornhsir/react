import React from 'react'
import ReactDom  from 'react-dom'
import HomeComponent from './component/home/index.jsx'
const root = document.getElementById('app')
const element = <div style={{flex: 1}}><HomeComponent /></div>
ReactDom.render(element,root)