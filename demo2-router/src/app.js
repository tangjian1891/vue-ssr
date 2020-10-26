const path = require("path");
const express = require("express");
const renderer = require("vue-server-renderer").createRenderer({
  template: require("fs").readFileSync(path.join(__dirname, "../view/index.html"), "utf-8"),
});

const app = express();
const Server = require("./entry-server");

app.get("*", async (req, res) => {
  // 创建一个vue示例. vue-renderer可以将vue转化为String
  const { url } = req;
  let vm = null;
  console.log("走了几次")
  try {
    vm = await Server({ url });
  } catch (error) {
    console.log("观察一下吧");
    res.send("ok");
  }

  renderer
    .renderToString(vm)
    .then((html) => {
      res.send(html);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("开启服务: http://localhost:3000");
});
