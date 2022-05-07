import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/administration",
    name: "administration",
    component: () =>
      import(
        /* webpackChunkName: "administration" */ "../views/AdministrationView.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edition",
    name: "edition",
    component: () =>
      import(
        /* webpackChunkName: "edition" */
        "../views/EditionView.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/checkin",
    name: "checkin",
    component: () =>
      import(/* webpackChunkName: "checkin" */ "../views/CheckinView.vue"),
    meta: {
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = store.state.isAuth;
  console.log(to.meta.requiresAuth);
  if (to.meta.requiresAuth && !isAuth) next("/login");
  else next();
});

export default router;
