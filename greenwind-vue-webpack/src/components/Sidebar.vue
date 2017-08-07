<template lang="pug">
  .sidebar
    b-tabs(v-model='activeTab', position='is-center', type='is-toggle' expanded).year
      b-tab-item(label='2017')
      b-tab-item(label='2016')
      b-tab-item(label='2015')
    b-menu(v-if='posts && posts.length').menu
      b-menu-list(label="News")
        b-menu-item(v-for='post of posts', :key='post.id', :class='post.data.category')
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
