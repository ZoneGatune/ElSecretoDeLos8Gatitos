import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6fe94d37 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _509e03c6 = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _53a9abc5 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */).then(m => m.default || m)
const _06464c00 = () => import('..\\pages\\admin\\settings.vue' /* webpackChunkName: "pages_admin_settings" */).then(m => m.default || m)
const _053743b3 = () => import('..\\pages\\admin\\items.vue' /* webpackChunkName: "pages_admin_items" */).then(m => m.default || m)
const _f2ec614a = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _b37cabc0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _6fe94d37,
			name: "login"
		},
		{
			path: "/admin",
			component: _509e03c6,
			children: [
				{
					path: "",
					component: _53a9abc5,
					name: "admin"
				},
				{
					path: "settings",
					component: _06464c00,
					name: "admin-settings"
				},
				{
					path: "items",
					component: _053743b3,
					name: "admin-items"
				}
			]
		},
		{
			path: "/about",
			component: _f2ec614a,
			name: "about"
		},
		{
			path: "/",
			component: _b37cabc0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
