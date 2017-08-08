<template lang="pug">
  .post
    .loading(v-if='loading') Loading...
    .error(v-if='error') {{ error }}
    transition(name="slide-fade", mode="out-in")
      article(v-if='post', :class='post.data.category').post
        h1.title {{ P.RichText.asText(post.data.title) }}
        hr
        .date {{ post.last_publication_date | moment }}
        .content(v-html='P.RichText.asHtml(post.data.content)')
</template>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'

export default {
  data () {
    return {
      loading: false,
      load: true,
      post: null,
      error: null
    }
  },
  created () {
    this.P = PrismicDOM
    // get all posts from prismic and save in vuex store
    this.$store.dispatch('fetchPrismicPosts', { self: this })
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const uid = this.$route.params.id
      this.error = this.post = null
      this.loading = true
      // get post from vuexstore loaded in created()
      this.$store.dispatch('fetchStatePost', uid).then(response => {
        this.loading = false
        this.post = response[0]
      })
    },
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

<style lang="sass">
  @import '../assets/config.sass'
  @import '../assets/animation.sass'
  @import '../assets/Posts.sass'

  .loading
    text-align: center
    margin: 20px
</style>
