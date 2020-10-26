const createVue = require("./createVue");
const getData = function () {
  return new Promise((resolve, reject) => {
    let str = "this is a async data";
    resolve(str);
  });
};

module.exports = (context) => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个Promise
  return new Promise(async (resolve, reject) => {
    const { vm, router } = createVue();
    let { url } = context;
    console.log(url)
    // 设置服务器端的router的位置
    // 数据传递
    // context.propsData = 'this is a data from props!'

    // context.asyncData = await getData();
    router.push(url);
    // 等到router将可能的异步组件和钩子函数解析完
    router.onReady(
      () => {
        const matchedComponents = router.getMatchedComponents();
        // 匹配不到的路由，执行reject函数，并返回404
        if (!matchedComponents.length) {
          reject({ code: 404 });
        }
        resolve(vm);
      },
      (error) => {
        console.log("捕获了错误了");
        reject(error);
      }
    );
    // 匹配后，返回app
  });
};
