<template>
  <div class='wrapper'>

    <h1>Prismic (official) JS API</h1>

    <div class="loading" v-show='loaderVisibility'>
      <Spinner size='large' line-fg-color='#00F'></Spinner>
    </div>

    <section class='posts' v-if='posts && posts.length' v-cloak>
      <article class='post' v-for='post of posts'>
        <h1 class='title'>{{ P.RichText.asText(post.data.title) }}</h1>
        <div class="category">
          Category: {{ post.data.category }}<br/>
          <!-- Date: {{ P.Date(post.last_publication_date) | moment "YYYY" }}<br/> -->
          Date: {{ post.last_publication_date | moment }}<br/>
        </div>
        <div class="content" v-html="P.RichText.asHtml(post.data.content)">
        </div>
        <!-- pageContent.data.image.url -->
      </article>
    </section>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import moment from 'moment'
import Spinner from 'vue-simple-spinner'

export default {
  data: () => ({
    posts: [],
    loaderVisibility: true
  }),
  components: {
    Spinner
  },
  methods: {
    moment: () => {
      return moment()
    },
    hideSpinner: () => {
      console.log('hide spinner')
      // this.set(this.loaderVisibility, isVisible, false)
      // console.log(this.loaderVisibility)
    }
  },
  filters: {
    moment: (date) => {
      return moment(date).format('l').split('/').join('.')
    }
  },
  created () {
    const prismic = {
      endPoint: 'https://greenwind.prismic.io/api/v2',
      ref: 'WYMf7ScAACgAT-Gv'
    }
    Prismic.getApi(prismic.endPoint)
      .then(api => api.query(''))
      .then(response => {
        this.posts = response.results
        this.P = PrismicDOM
        this.hideSpinner()
      }, err => {
        console.log('Error: ', err)
      })
  }
}
</script>

<style lang="sass" scoped>
  section.posts
    text-align: left
    width: 768px
    margin: 0 auto 3rem
  article
    border-bottom: 1px #ddd solid
    padding-bottom: 1.5em
    &:last-child
      border: 0
</style>

<style scoped>
  [v-cloak] {
    background: red;
  }
</style>
