const express = require("express")

const app = express()

// 创建渲染器
const renderer = require("vue-server-renderer").createRenderer

const page = new Vue({
  data: {
    title: '开课吧'
  },
  template: 
  `
    <div>
      <h1>{{ title }}</h1>
      hello, vue ssr
    </div>
  `
})

app.get("/", async (req, res) => {
  try {
    const html = await renderer.renderToString(page)

    res.send(html)
  } catch (error) {
    res.status(500).send('服务器错误')
  }
})

app.listen