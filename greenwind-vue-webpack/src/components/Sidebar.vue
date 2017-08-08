<template lang="pug">
  .inner
    b-tabs(v-model='activeYearFilter', expanded).years
      b-tab-item(label='2017')
      b-tab-item(label='2016')
      b-tab-item(label='2015')
    b-menu(v-if='posts && posts.length', v-model='activePost', router=true)
      b-menu-item(v-for='post of posts', :key='post.id', :class='post.data.category', :value='post.uid').menu-item
        .inner
          .title
            | {{ P.RichText.asText(post.data.title) }}
          .date
            | {{ post.last_publication_date | moment }}
</template>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'
import router from '../router'

export default {
  name: 'sidebar',
  data: () => ({
    posts: [],
    activeYearFilter: 0,
    activePost: null
  }),
  watch: {
    activeYearFilter: (val) => {
      // val is numerical i
      console.log('activeYearFilter: ' + val)
    },
    activePost: (val) => {
      router.push({
        path: '/' + val
        // params: { id: val }
      })
    }
  },
  methods: {
    moment: () => {
      return moment()
    }
  },
  filters: {
    moment: (date) => {
      // format date string here... look up moment.js
      // return moment(date).format('l').split('/').join('.')
      return moment(date).format('ll')
    }
  },
  created () {
    this.$store.dispatch('fetchStatePosts').then(response => {
      this.posts = response
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
    background: $white
  .menu
    margin-top: 40px
  .menu-item
    list-style: none
    padding: 1em
    cursor: pointer
    border-bottom: 1px $white solid
    div
      cursor: pointer
      color: white
  .energy
    background: $energy
  .offshore
    background: $offshore
  .operations
    background: $operations
</style>
