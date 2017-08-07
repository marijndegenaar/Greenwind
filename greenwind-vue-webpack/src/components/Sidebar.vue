<template lang="pug">
  aside.sidebar
    b-tabs(v-model='activeTab', position='is-center')
      b-tab-item(label='2017')
      b-tab-item(label='2016')
    b-menu(v-if='posts && posts.length')
      b-menu-list(label="News")
        b-menu-item(v-for='post of posts', :key='post.id') {{ P.RichText.asText(post.data.title) }}
</template>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'

export default {
  name: 'sidebar',
  data: () => ({
    posts: [],
    activeTab: 0
  }),
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
  h1
    color: blue
</style>
