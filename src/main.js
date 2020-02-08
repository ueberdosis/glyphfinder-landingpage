// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  Vue.mixin({
    data() {
      return {
        reducedMotion: process.isClient ? !!window.matchMedia('(prefers-reduced-motion)').matches : false,
        downloadLink: 'https://ueber.fra1.cdn.digitaloceanspaces.com/mouseless/mac/Mouseless-1.2.4-mac.dmg',
        gumroadLink: 'https://gum.co/Dwka',
      }
    },
  })

  Vue.component('Layout', DefaultLayout)
}
