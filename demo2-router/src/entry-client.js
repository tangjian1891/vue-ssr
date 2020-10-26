// 客户端entry只需要创建应用程序，并且将其挂在到DOM中

const createApp = require("./app");

const { vm, router } = createApp();
router.onReady(() => {
  vm.$mount("#app");
});
