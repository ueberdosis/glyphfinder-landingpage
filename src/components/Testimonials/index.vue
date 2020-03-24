<template>
  <div class="testimonials">
    <div class="testimonials__header">
      <h2>
        Feedback
        <a href="https://www.producthunt.com/posts/glyphfinder" target="_blank">
          <g-image class="testimonials__ratings" src="~/assets/images/ratings.svg" />
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
          avatar: require('~/assets/images/avatars/juliusgehrig.jpg'),
          text: 'Ooooh damn very nice',
          title: 'Julius Gehrig, Pitch',
        },
        // https://twitter.com/leanderlenzing/status/1238038002426884096
        {
          avatar: require('~/assets/images/avatars/leanderlenzing.png'),
          text: 'instant-buy',
          title: 'Leander Lenzing, Studio Lenzing',
        },
        // https://twitter.com/moorstas/status/1238034872985358336
        {
          avatar: require('~/assets/images/avatars/stasmoor.png'),
          text: 'Wow, another one. Congrats guys! You are really rocking this!',
          title: 'Stas Moor, Klokki',
        },
        // https://twitter.com/svenewers/status/1238097201915670529
        {
          avatar: require('~/assets/images/avatars/sven.jpg'),
          text: 'Congrats on the launch! The folks at @_ueberdosis are ridiculously good at finding  and executing well on little quality of life improvements like this. It’s almost a little frustrating to watch 😅',
          title: 'Sven, Exporteur',
        },
        // https://twitter.com/HckmstrRahul/status/1238126551067025408
        {
          avatar: require('~/assets/images/avatars/hckmstrrahul.jpg'),
          text: 'This is so great! I have been using Ctrl+Cmd+Space for the native Character Viewer. This one will be a level upgrade.',
          title: 'Rahul Chakraborty, Swiggy',
        },
        // https://twitter.com/TravisTop/status/1238378635221860358
        {
          avatar: require('~/assets/images/avatars/travistopham.jpg'),
          text: 'Thank you for taking the time to build this. Finding glyphs has always been a struggle for me too.',
          title: 'Travis Topham, Smartcare',
        },
        // https://twitter.com/rsms/status/1238124248796823553
        {
          avatar: require('~/assets/images/avatars/rasmusandersson.jpg'),
          text: 'Looks like a great little app for Windows users where there’s no built-in Unicode browser.',
          title: 'Rasmus Andersson, Figma',
        },
        // https://twitter.com/mds/status/1238208495872327687
        {
          avatar: require('~/assets/images/avatars/mds.jpg'),
          text: 'App and site look great 👏',
          title: 'Matt, Flowkit',
        },
        // https://twitter.com/allanwhite/status/1238178139336933377
        {
          avatar: require('~/assets/images/avatars/allanwhite.jpg'),
          text: 'Do want!',
          title: 'Allan White, Contentful',
        },
        // https://twitter.com/greg00r/status/1240603853722091520
        {
          avatar: require('~/assets/images/avatars/gregorweichbrodt.jpg'),
          text: 'They tagged ~34K glyphs manually (!), so the search for glyphs (emojis included) becomes a breeze. Well done and thank you!!👏',
          title: 'Gregor Weichbrodt, FragDenStaat',
        },
        // https://twitter.com/justin_schueler/status/1240586673165160448
        {
          avatar: require('~/assets/images/avatars/justinschueler.jpg'),
          text: 'soo good and useful 🙏🏻',
          title: 'Justin Schueler, Freelance Digital Designer',
        },
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
