<template lang="pug">
  .post
    .loading(v-if='loading')
      img(src="../assets/img/spinner.svg")
    .error(v-if='error') {{ error }}
    transition(name="slide-fade", mode="out-in")
      article(v-if='post', :class='post.data.category').post
        h1.title {{ P.RichText.asText(post.data.title) }}
        hr
        //- .date {{ post.last_publication_date | moment }}
        .date {{ post.last_publication_date }}
        .content(v-html='P.RichText.asHtml(post.data.content)')
        .media_embed(v-if='post.data.media_embed.html')
          .media(v-html='post.data.media_embed.html')
</template>

<script>
import PrismicDOM from 'prismic-dom'
// import moment from 'moment'

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
        const res = response[0]
        this.loading = false
        this.post = res
        // console.log(res.data)
      })
    }
    // ,
    // moment: () => {
    //   return moment()
    // }
  }
  // ,
  // filters: {
  //   moment: (date) => {
  //     return moment(date).format('l').split('/').join('.')
  //   }
  // }
}
</script>

<style lang="sass">
  @import '../assets/config.sass'
  @import '../assets/animation.sass'
  // @import '../assets/Posts.sass'

  article
    margin: 2rem 5vw
    max-width:
  hr
    height: 4px
    width: 55px
    margin: 1.3rem 0
  .energy hr
    background-color: $energy
  .offshore hr
    background-color: $offshore
  .operations hr
    background-color: $operations
  .date
    padding-bottom: 1em
    font-size: 0.9rem
    opacity: 0.8

  // .energy
  //   .block-img img
  //     background: lighten($energy, 30)
  // .operations
  //   .block-img img
  //     background: lighten($operations, 30)
  // .offshore
  //   .block-img img
  //     background: lighten($offshore, 30)

  .block-img img
    background: #f3f3f3

  .loading
    height: 90vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    img
      width: 10vw
      height: 10vw
</style>
