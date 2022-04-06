import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dc157618 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _9df1adae = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _7016445f = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _c6850dc2 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _e79c8926 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _f3b32992 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _f8f08728 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _dc157618,
    children: [{
      path: "",
      component: _9df1adae,
      name: "home"
    }, {
      path: "/login",
      component: _7016445f,
      name: "login"
    }, {
      path: "/register",
      component: _7016445f,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _c6850dc2,
      name: "profile"
    }, {
      path: "/settings",
      component: _e79c8926,
      name: "settings"
    }, {
      path: "/editor",
      component: _f3b32992,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _f8f08728,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
