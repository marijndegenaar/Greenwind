<template lang="pug">
  #prismic.column.is-7.is-offset-1
    .posts(v-if='posts && posts.length')
      b-panel(v-for='post of posts', :key='post.id')
        strong(slot='header') {{ P.RichText.asText(post.data.title) }}
        .content
          .meta
            .category Category: {{ post.data.category }}
            .date Date: {{ post.last_publication_date | moment }}
          .richtext(v-html='P.RichText.asHtml(post.data.content)')
</template>

<style lang="sass" scoped>
  .meta
    border-bottom: 1px #eee solid
    padding-bottom: 0.5em
    margin-bottom: 0.5em
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
