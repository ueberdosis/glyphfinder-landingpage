// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {

  const areClipPathShapesSupported = function () {
    const base = 'clipPath'
    const prefixes = ['webkit', 'moz', 'ms', 'o']
    const properties = [base]
    const testElement = document.createElement('testelement')
    const attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)'

    // Push the prefixed properties into the array of properties.
    for (let i = 0, l = prefixes.length; i < l; i += 1) {
      const prefixedProperty = prefixes[i] + base.charAt(0).toUpperCase() + base.slice(1) // remember to capitalize!
      properties.push(prefixedProperty)
    }

    // Interate over the properties and see if they pass two tests.
    for (let i = 0, l = properties.length; i < l; i += 1) {
      const property = properties[i]

      // First, they need to even support clip-path (IE <= 11 does not)...
      if (testElement.style[property] === '') {

        // Second, we need to see what happens when we try to create a CSS shape...
        testElement.style[property] = attribute
        if (testElement.style[property] !== '') {
          return true
        }
      }
    }

    return false
  }


  Vue.mixin({
    data() {
      return {
        clipPathSupported: isClient && areClipPathShapesSupported(),
        reducedMotion: isClient ? !!window.matchMedia('(prefers-reduced-motion)').matches : false,
        downloadLink: 'https://ueber.fra1.cdn.digitaloceanspaces.com/mouseless/mac/Mouseless-1.2.4-mac.dmg',
        gumroadLink: 'https://gum.co/Dwka',
      }
    },
  })

  Vue.component('Layout', DefaultLayout)
}
