const Vue = require("vue");
const Router = require("vue-router");

Vue.use(Router);

module.exports = () => {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: {
          template: `<h1>this is home page</h1>`,
        },
        name: "home",
      },
      {
        path: "/about",
        component: {
          template: `<h1>this is  about page</h1>`,
        },
        name: "about",
      },
    ],
  });
};
