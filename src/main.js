import Bowser from 'bowser'
import VueResize from 'vue-resize'
import DefaultLayout from '~/layouts/Default.vue'
import 'vue-resize/dist/vue-resize.css'

export default function (Vue, { router, head, isClient }) {
  head.meta.push({
    name: 'description',
    content: 'Glyphfinder is the missing character search for designers, developers and writers.',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Glyphfinder',
  })

  head.meta.push({
    property: 'og:url',
    content: 'https://glyphfinder.com',
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://glyphfinder.com/opengraph.png',
  })

  head.meta.push({
    property: 'og:description',
    content: 'Glyphfinder is the missing character search for designers, developers and writers.',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary',
  })

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

  Vue.use(VueResize)

  Vue.filter('uppercase', value => {
    const ignoredCharacters = ['ß']

    if (ignoredCharacters.includes(value)) {
      return value
    }

    return value.toUpperCase()
  })

  Vue.mixin({
    data() {
      return {
        os: isClient ? Bowser.parse(window.navigator.userAgent).os.name.toLowerCase() : '',
        clipPathSupported: isClient && areClipPathShapesSupported(),
        reducedMotion: isClient ? !!window.matchMedia('(prefers-reduced-motion)').matches : false,
        downloadLinkMac: 'https://ueber.fra1.cdn.digitaloceanspaces.com/glyphfinder/mac/Glyphfinder-1.1.1-mac.dmg',
        downloadLinkWin: 'https://ueber.fra1.cdn.digitaloceanspaces.com/glyphfinder/win/Glyphfinder-1.1.1-win.exe',
        gumroadLink: 'https://gum.co/ZaEQz',
      }
    },
  })

  Vue.component('Layout', DefaultLayout)
}
