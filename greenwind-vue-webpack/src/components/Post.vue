<template lang="pug">
  .post
    .loading(v-if='loading') Loading...
    .error(v-if='error') {{ error }}
    article(v-if='post', :class='post.data.category').post
      h1 {{ P.RichText.asText(post.data.title) }}
      .meta
        .category Category: {{ post.data.category }}
        .date Date: {{ post.last_publication_date | moment }}
      .content(v-html='P.RichText.asHtml(post.data.content)')
</template>
<!--
/*.content(v-html='P.RichText.asHtml(post.data.content)')*/ -->
<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'

export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    this.$store.dispatch('fetchPrismicPosts', { self: this })
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.P = PrismicDOM
      const uid = this.$route.params.id
      this.error = this.post = null
      this.loading = true
      this.$store.dispatch('fetchStatePost', uid).then(response => {
        this.loading = false
        // console.log(response[0])
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
  @import '../assets/Posts.sass'
</style>
