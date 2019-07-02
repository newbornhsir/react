## 从零开始构建React应用

### 配置webpack
#### 安装webpack和react
1. 安装webpack4x和webpack-cli
2. 安装react
#### 配置webpack

1. 出入口

2. html模版
html-webpack-plugin
clean-webpack-plugin
3. 热重载
webpack-dev-server
contentBase目录中的index.html，如果文件名不是index.html。则需要指定openPage
4. es6
通过babel来使用es6
添加react支持 babel-preset-react react react-dom
5. npm script

### react基本知识
1. jsx
推荐使用jsx
2. ReactDom.render
将元素渲染到页面
3. state, props 生命周期
单向数据流， props传递数据到自组件，自组件不可修改props
props可以传递函数，子组件通过触发父组件传递的函数修改状态， 也可以props函数中传递参数

state保存组件状态，通过setState可以更新组件状态，从而导致页面更新。setState是异步的
4. 事件
小驼峰命名事件
5. 列表,key
jsx配合js实现列表渲染， key值用来提供react比较的key，要在兄弟层级唯一，设在最近的一层
6. 表单
受控表单
onChange可以监听到表单变动，参数e是合成事件，可以获取到dom元素，表单值可以和state或者props绑定，实现受控表单
7. 状态提升
状态提示， 自组件接受父组件的props进行展示，但是自组件不能修改props中属性，多个组件共享的时候，某个组件有修改属性的需求，其它组件也应该接收到变化，这时候就需要状态提升到公共的父组件
8. refs
9. context
10. Fragments

### 源码解读前准备
类型定义文件(*.d.ts)