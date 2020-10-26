const Vue = require("vue");
const createRouter = require("./router");

module.exports = (context) => {
  const router = createRouter(); //每次生成router
  // 每次生成vue
  const vm = new Vue({
    router,
    data: {
      message: "Hello,Vue SSR!",
    },
    template: `
            <div>
                <ul>
                    <li>
                        <router-link to="/">home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">about</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        `,
  });
  return {
    vm,
    router,
  };
};
