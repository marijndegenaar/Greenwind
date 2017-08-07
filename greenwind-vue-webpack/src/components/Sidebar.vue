<template lang="pug">
  .sidebar
    b-tabs(v-model='activeYearFilter', position='is-center', type='is-toggle' expanded).year
      b-tab-item(label='2017')
      b-tab-item(label='2016')
      b-tab-item(label='2015')
    b-menu(v-if='posts && posts.length', v-model='activePost').menu
      b-menu-list(label="News")
        b-menu-item(v-for='post of posts', :key='post.data.category', :class='post.data.category')
          .title
            | {{ P.RichText.asText(post.data.title) }}
          .date
            | {{ post.last_publication_date | moment }}
          .link
            | Route: /{{ post.data.category }}/{{ post.uid }}
</template>

<style lang="sass" scoped>
</style>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'

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

<style lang="sass" scoped>
  @import '../assets/config.sass'

  .energy
    background: $energy
  .offshore
    background: $offshore
  .operations
    background: $operations
</style>
