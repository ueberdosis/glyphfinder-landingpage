export default {
  render(createElement) {
    if (!this.$scopedSlots.default) {
      return null
    }

    return createElement(
      'div',
      {
        class: 'grid__item',
        attrs: {
          ...this.attrs,
        },
      },
      this.$scopedSlots.default(),
    )
  },
  props: {
    options: {
      default: () => ({}),
    },
  },
  computed: {
    attrs() {
      if (!this.options) {
        return null
      }

      const attrs = {}

      Object.keys(this.options).forEach(option => {
        attrs[option === 'default' ? 'data-grid' : `data-grid--${option}`] = this.options[option]
      })

      return attrs
    },
  },
}
