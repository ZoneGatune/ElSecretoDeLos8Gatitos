<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\css\\main.css'

import '..\\assets\\css\\app.styl'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts\\default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"Nuxt Firebase Auth","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-title","content":"elsecretodelos8gatitos"},{"name":"theme-color","content":"#3f51b5"},{"name":"og:type","content":"website"},{"name":"og:title","content":"elsecretodelos8gatitos"},{"name":"og:description","content":"Nuxt.js with Firebase Auth project"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"manifest","href":"/_nuxt/manifest.683594d2.json"},{"rel":"shortcut icon","href":"/_nuxt/icons/icon_64.d00bMwo0t0c.png"},{"rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512.d00bMwo0t0c.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

