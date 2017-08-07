<template lang="pug">
  #prismic.column.is-7.is-offset-1
    .posts(v-if='posts && posts.length')
      article(v-for='post of posts', :key='post.id', :class='post.data.category').post
        h1.title {{ P.RichText.asText(post.data.title) }}
        .meta
          .category Category: {{ post.data.category }}
          .date Date: {{ post.last_publication_date | moment }}
</template>

<style lang="sass" scoped>
  @import '../assets/config.sass'

  .meta
    border-bottom: 1px #eee solid
    padding-bottom: 0.5em
    margin-bottom: 0.5em
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
// import Spinner from 'vue-simple-spinner'

export default {
  data: () => ({
    posts: [],
    loaderVisibility: true
  }),
  methods: {
    moment: () => {
      return moment()
    }
  },
  filters: {
    moment: (date) => {
      return moment(date).format('l').split('/').join('.')
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
