<template lang="pug">
  .inner
    .years
      .year(@click='setActiveYear', data-year='2017').is-active 2017
      .year(@click='setActiveYear', data-year='2016') 2016
      .year(@click='setActiveYear', data-year='2015') 2015

    .menu(v-if='posts && posts.length')
      .menu-item(v-for='post of posts', :key='post.id', :class='post.data.category', :value='post.uid')
        //- , v-model='activePost'
        router-link(:to='post.uid')
          .inner
            h3.title
              | {{ P.RichText.asText(post.data.title) }}
            .date
              //- b-icon(icon="schedule", size="is-small")
              //- | {{ post.last_publication_date | moment }}
              | {{ post.last_publication_date }}
</template>

<script>
import PrismicDOM from 'prismic-dom'
import $ from 'domtastic'
// import moment from 'moment'
// import router from '../router'
import { mapGetters } from 'vuex'

export default {
  name: 'sidebar',
  data () {
    return {
      posts: [],
      filterYear: null,
      activePost: null
    }
  },
  watch: {
    '$route': 'setActivePost',
    activeFilter () {
      const category = this.activeFilter
      if (category !== 'all') {
        $('.menu-item:not(.' + category + ')').addClass('hidden')
        $('.menu-item.hidden.' + category).removeClass('hidden')
      } else {
        $('.hidden').removeClass('hidden')
      }
    }
  },
  computed: {
    ...mapGetters({
      activeFilter: 'getActiveFilter'
    })
  },
  methods: {
    setActivePost () {
      const uid = this.$route.params.id
      $('.menu-item').removeClass('is-active')
      $('.menu-item[value="' + uid + '"]').addClass('is-active')
    },
    setActiveYear (e) {
      const t = $(e.currentTarget)
      const year = t.attr('data-year')
      $('.years .is-active').removeClass('is-active')
      t.addClass('is-active')
      this.filterYear = year
    }
  },
  created () {
    this.$store.dispatch('fetchStatePosts').then(response => {
      this.posts = response
      setTimeout(() => {
        this.setActivePost()
      }, 10)
    })
    this.P = PrismicDOM
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/config.sass'
  .years
    position: fixed
    width: 35vw
    height: 40px
    background: $grey-lighter
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25)
    display: flex
    text-align: center
    z-index: 7
    .year
      padding: .5em 1em
      flex-grow: 1
      border-left: 1px solid darken($grey-lighter, 4)
      &:hover
        background: darken($grey-lighter, 5)
        cursor: pointer
      &.is-active
        background: $white

  .menu
    margin-top: 40px
  .menu-item *
    cursor: pointer
  .menu-item.hidden
    opacity: 0
    max-height: 0
  .menu-item
    transition: 500ms all
    transform: scaleY(1)
    cursor: pointer
    border-bottom: 2px $white solid
    overflow: hidden
    opacity: 1
    max-height: 50vh
    &.is-active
      .inner
        background: white
        transform: translateX(35px)
      .title
        color: black
    .inner
      padding: 25px 35px
      transition: 300ms all
    .title
      transition: 300ms all
      font-weight: normal
      font-size: 1.5rem
      color: $white
      margin-bottom: .5em
    .date
      display: flex
      align-items: center
      padding-bottom: 0
      color: $black
      .icon
        margin-right: 0.5em
    div
      cursor: pointer
      color: white
  .energy
    background: $energy
    &:hover
      background: lighten($energy, 10)
    &.is-active

  .offshore
    background: $offshore
    &:hover
      background: lighten($offshore, 10)
  .operations
    background: $operations
    &:hover
      background: lighten($operations, 10)

</style>
