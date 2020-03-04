<template>
  <div class="testimonials">
    <div class="testimonials__header">
      <h2>
        Feedback
        <a href="https://www.producthunt.com/posts/glyphfinder" target="_blank">
          <g-image class="testimonials__ratings" src="~/assets/images/producthuntratings.svg" />
        </a>
      </h2>
      <p>
        It’s not just us being hyped about it. See what all those lovely Glyphfinder users are saying:
      </p>
    </div>
    <slider>
      <div
        class="testimonials__item"
        :key="index"
        v-for="(item, index) in items"
        slot="slide"
      >
        <g-image class="testimonials__image" :src="item.avatar" v-if="item.avatar" />
        <div class="testimonials__content">
          <div class="testimonials__text" :class="{ small: item.isSmall }">
            {{ item.text }}
          </div>
        </div>
        <div class="testimonials__title small">
          {{ item.title }}
        </div>
      </div>
    </slider>
  </div>
</template>

<script>
import collect from 'collect.js'
import Slider from '@/components/Slider'

export default {
  components: {
    Slider,
  },

  data() {
    return {
      items: collect([
        {
          avatar: require('~/assets/images/avatars/fallback.png'),
          text: 'Ooooh damn very nice',
          title: 'Julius Gehrig',
        },
        // {
        //   avatar: require('~/assets/images/avatars/fallback.png'),
        //   text: 'Just bought your wonderful app.',
        //   title: 'Emil S. Zakhariev',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/fallback.png'),
        //   text: 'Solllid.',
        //   title: 'Brian Roach',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/fallback.png'),
        //   text: "Just purchased Mouseless and am loving it so far, have already mastered a few of the Apple commands that I didn't know existed.",
        //   title: 'Crystal Lin',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/thomaschretien.jpg'),
        //   text: 'Mouseless.app looks so organic This is the way software should be designed. @_philippkuehn and @hanspagel are peaking in terms of product design. It seemed natural for me to feature them, one more time, in the Hall of Fame of pages.xyz',
        //   title: 'Thomas Chrétien, pages.xyz',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/davidhill.jpg'),
        //   text: "Snapped up a bunch of deals from independent creatives yesterday! One of my early faves is mouseless.app It's already taught me lots of new shortcuts and is always just there in the menu bar.",
        //   title: 'David Hill, Designer',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/temirlannugmanov.jpg'),
        //   text: 'Found on @producthunt & bought Mouseless by @hanspagel & @_philippkuehn on @Gumroad. Must train my meatsticks to never use the trackpad.',
        //   title: 'Temirlan Nugmanov',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/marckoehlbrugge.jpg'),
        //   text: 'This is such a great idea for an app. Instant buy 👍',
        //   title: 'Marc Köhlbrugge, WIP',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/brianlovin.jpg'),
        //   text: "I'm also very much into the design of mouseless.app + 1 for yellow + 1 for that custom scroll bar + 1 for that app icon + 1 for charging for useful software 👏 @juliusgehrig + @_philippkuehn ",
        //   title: 'Brian Lovin, GitHub',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/jamesm.jpg'),
        //   text: 'Such a great little app! Insta-buy. 🙌',
        //   title: 'James, wirefr.am',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/suryaanand.jpg'),
        //   text: 'Wow, such a great experience so far. I already learned a lot of shortcuts. It will be a game-changer!',
        //   title: 'Surya Anand, Design+Code',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/erikspiekermann.jpg'),
        //   text: 'Need this',
        //   title: 'Erik Spiekermann, Typomaniac',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/diogoredin.jpg'),
        //   text: 'I have been wanting to train keyboard shortcuts for so long. Congrats @hanspagel, great product 🎉 Will definitely buy it.',
        //   title: 'Diogo Redin, Talkdesk',
        // },
        // {
        //   avatar: require('~/assets/images/avatars/fallback.png'),
        //   text: "Really love the sets, I'm already learning and remembering new tricks after just a couple days.",
        //   title: 'Happy Customer',
        // },
      ])
        .map(item => ({
          ...item,
          isSmall: item.text.length > 100,
        }))
        .shuffle()
        .toArray(),
    }
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
