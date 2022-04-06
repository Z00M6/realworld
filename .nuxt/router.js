import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d075260c = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _f2a4caa2 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4f3e0399 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _50f251d9 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5e97f9f3 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _e812d986 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _37bc9526 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _d075260c,
    children: [{
      path: "",
      component: _f2a4caa2,
      name: "home"
    }, {
      path: "/login",
      component: _4f3e0399,
      name: "login"
    }, {
      path: "/register",
      component: _4f3e0399,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _50f251d9,
      name: "profile"
    }, {
      path: "/settings",
      component: _5e97f9f3,
      name: "settings"
    }, {
      path: "/editor",
      component: _e812d986,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _37bc9526,
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
