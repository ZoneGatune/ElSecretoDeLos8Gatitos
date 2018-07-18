import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b37cabc0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _6fe94d37 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages\\login" */).then(m => m.default || m)
const _509e03c6 = () => import('..\\pages\\admin.vue' /* webpackChunkName: "pages\\admin" */).then(m => m.default || m)
const _53a9abc5 = () => import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages\\admin\\index" */).then(m => m.default || m)
const _06464c00 = () => import('..\\pages\\admin\\settings.vue' /* webpackChunkName: "pages\\admin\\settings" */).then(m => m.default || m)
const _053743b3 = () => import('..\\pages\\admin\\items.vue' /* webpackChunkName: "pages\\admin\\items" */).then(m => m.default || m)
const _f2ec614a = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages\\about" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _b37cabc0,
			name: "index"
		},
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
		}
    ],
    fallback: false
  })
}
