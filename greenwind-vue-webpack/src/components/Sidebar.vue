<template lang="pug">
  .inner
    b-tabs(v-model='activeYearFilter' expanded)
      b-tab-item(label='2017')
      b-tab-item(label='2016')
      b-tab-item(label='2015')
    b-menu(v-if='posts && posts.length', v-model='activeFilter')
      b-menu-item(v-for='post of posts', :key='post.id', :class='post.data.category', :value='post.data.category').menu-item
        .title
          | {{ P.RichText.asText(post.data.title) }}
        .date
          | {{ post.last_publication_date | moment }}
        .link
          | Route: /{{ post.data.category }}/{{ post.uid }}
</template>

<style lang="sass" scoped>
  @import '../assets/config.sass'
  .tabs
    margin: 0
  .tab-content
    display: none

  .menu-item
    list-style: none
    padding: 1em
    div
      color: white
  .energy
    background: $energy
  .offshore
    background: $offshore
  .operations
    background: $operations
</style>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'

export default {
  name: 'sidebar',
  data: () => ({
    posts: [],
    activeYearFilter: 0,
    activeFilter: null
  }),
  watch: {
    activeYearFilter: (val) => {
      // val is numerical i
      console.log('activeYearFilter: ' + val)
    },
    activeFilter: (val) => {
      // val is numerical i
      console.log('activePost: ' + val)
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
