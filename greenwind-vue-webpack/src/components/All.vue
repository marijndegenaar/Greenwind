<template lang="pug">
  #prismic
    .posts(v-if='posts && posts.length')
      article(v-for='post of posts', :key='post.id', :class='post.data.category').post
        h1.title {{ P.RichText.asText(post.data.title) }}
        .meta
          .category Category: {{ post.data.category }}
          .date Date: {{ post.last_publication_date | moment }}
        .content(v-html='P.RichText.asHtml(post.data.content)')
</template>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'
// import router from '../router'
// import Spinner from 'vue-simple-spinner'

export default {
  data: () => ({
    posts: [],
    loaderVisibility: true
  }),
  created () {
    this.P = PrismicDOM
    // fetch all posts from vuex store
    this.$store.dispatch('fetchStatePosts').then(response => {
      this.posts = response
      // console.log(response)
    })
  },
  methods: {
    moment: () => {
      return moment()
    }
  },
  filters: {
    moment: (date) => {
      return moment(date).format('l').split('/').join('.')
    }
  }
}
</script>


<style lang="sass" scoped>
  @import '../assets/config.sass'
  @import '../assets/Posts.sass'
</style>
