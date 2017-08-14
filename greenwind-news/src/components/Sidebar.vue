<template lang="pug">
  .inner
    //- b-tabs(v-model='activeYearFilter', expanded).years
    //-   b-tab-item(label='2017')
    //-   b-tab-item(label='2016')
    //-   b-tab-item(label='2015')
    ul(v-model='activeYearFilter', expanded).years
      li 2017
      li 2016
      li 2015
    b-menu(v-if='posts && posts.length', v-model='activePost', router=true)
      b-menu-item(v-for='post of posts', :key='post.id', :class='post.data.category', :value='post.uid').menu-item
        .inner
          h3.title
            | {{ P.RichText.asText(post.data.title) }}
          .date
            b-icon(icon="schedule", size="is-small")
            | {{ post.last_publication_date | moment }}
</template>

<script>
import PrismicDOM from 'prismic-dom'
import moment from 'moment'
import router from '../router'

export default {
  name: 'sidebar',
  data: () => ({
    posts: [],
    activeYearFilter: 0,
    activePost: null
  }),
  watch: {
    activeYearFilter: (val) => {
      // val is numerical i
      console.log('activeYearFilter: ' + val)
    },
    activePost: (val) => {
      router.push({
        path: '/' + val
        // params: { id: val }
      })
    }
  },
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
  @import '../assets/config.sass'
  ul.years
    position: fixed
    width: 35vw
    height: 40px
    background: $grey-lighter
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25)
    display: flex
    text-align: center
    li
      padding: .5em 1em
      flex-grow: 1
      border-left: 1px solid darken($grey-lighter, 4)
      &:hover
        background: darken($grey-lighter, 5)
        cursor: pointer
      &.is-active
        background: $white

  .menu
    margin-top: 40px
  .menu-item
    list-style: none
    padding: 2em 3em
    cursor: pointer
    border-bottom: 1px $white solid
    &.active-item
      h3.title
        color: $black
    h3.title
      font-size: 1.5rem
      color: $white
      margin-bottom: .5em
    .date
      display: flex
      align-items: center
      padding-bottom: 0
      color: $black
      .icon
        margin-right: 0.5em
    div
      cursor: pointer
      color: white
  .energy
    background: linear-gradient(to top, darken($energy, 15), $energy)
    &:hover
      background: linear-gradient(to top, darken($energy, 10), $energy)
    &.active-item
      background: linear-gradient(to right, $energy 6%, $white 0%)
  .offshore
    background: linear-gradient(to top, darken($offshore, 15), $offshore)
    &:hover, &:active
      background: linear-gradient(to top, darken($offshore, 10), $offshore)
    &.active-item
      background: linear-gradient(to right, $offshore 6%, $white 0%)
  .operations
    background: linear-gradient(to top, darken($operations, 15), $operations)
    &:hover, &:active
      background: linear-gradient(to top, darken($operations, 10), $operations)
    &.active-item
      background: linear-gradient(to right, $operations 6%, $white 0%)


</style>
