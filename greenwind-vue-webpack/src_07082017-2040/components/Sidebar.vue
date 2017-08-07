<<<<<<< Updated upstream
<template lang="pug">
  .sidebar
    b-tabs(v-model='activeTab', position='is-center').year
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
=======
<template>
  <aside class="sidebar">
      <div class="tabs is-boxed is-fullwidth is-small">
        <ul>
          <li><a>2017</a></li>
          <li><a>2016</a></li>
          <li><a>2015</a></li>
        </ul>
      </div>
      <div class="menu post-menu">
        <ul class="menu-list post-list">
          <li class="energy">
            <h3 class="title">Post 1 lorum osiofisdof</h3>
            <span class="date">23/07/2017</span>
          </li>
          <li class="offshore">
            <h3 class="title">Post 2</h3>
            <span class="date">20/04/2017</span>
          </li>
          <li class="operations">
            <h3 class="title">Post 3</h3>
            <span class="date">12/03/2017</span>
          </li>
          <li class="energy">
            <h3 class="title">Post 4</h3>
            <span class="date">26/02/2017</span>
          </li>
        </ul>
      </div>
  </aside>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

<style lang="sass" scoped>
  $white: #fafafa
  $black: #222
  $energy: #93be6e
  $offshore: #286aa6
  $operations: #9e9f9e

  h1
    color: blue

  .post-list
    li
      border-bottom: 2px solid #fff
    li.energy
      background: $energy
    li.offshore
      background: $offshore
    li.operations
      background: $operations
</style>
>>>>>>> Stashed changes
