const path = require("path");
const express = require("express");
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync(path.join(__dirname, "../view/index.html"), "utf-8"),
});
const Vue = require("vue");
const app = express();

app.get("*", (req, res) => {
  // 创建一个vue示例. vue-renderer可以将vue转化为String

  const vm = new Vue({
    data: {
      message: "你好啊",
    },
    template: `<h1>{{message}}</h1>`,
  });
  renderer.renderToString(vm).then((html) => {
    console.log(html);
    res.send(html);
  });
});

app.listen(3000, () => {
  console.log("开启服务: http://localhost:3000");
});
