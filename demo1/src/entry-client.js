// 客户端entry只需要创建应用程序，并且将其挂在到DOM中

import { createApp } from "./app";

const { app } = createApp();

app.$mount("#app");
