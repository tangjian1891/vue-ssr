import { createApp } from "./app";
export default (context) => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个Promise
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    // 设置服务器端的router的位置

    router.push(context.url);
    // 等到router将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 匹配不到的路由，执行reject函数，并返回404
      if (!matchedComponents.length) {
      }
      return reject({ code: 404 });
    });
    // 匹配后，返回app
    resolve(app);
  });
};
