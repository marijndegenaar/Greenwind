<template>
  <div>
    <h1>Axios REST API</h1>
    <ul v-if='posts && posts.length'>
      <li v-for='post of posts'>
        <h2>{{ post.data.title[0].text }}</h2>
        <p>{{ post.data.content }}</p>
      </li>
    </ul>

    <ul v-if='errors && errors.length'>
      <li v-for='error of errors'>
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    posts: [],
    errors: []
  }),
  async created () {
    try {
      const prismic = {
        endPoint: 'http://greenwind.prismic.io/api/v2/documents/search',
        ref: 'WYMf7ScAACgAT-Gv'
      }
      const response = await axios.get(prismic.endPoint, {
        params: {
          ref: prismic.ref
        }
      })

      this.posts = response.data.results
      console.log(this.posts)
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>
