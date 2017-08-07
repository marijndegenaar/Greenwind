import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript' // REST API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    viewPost: null,
    posts: []
  },
  mutations: {
    FETCH_POSTS (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPrismicPosts ({ commit, self, dispatch }) {
      return new Promise((resolve, reject) => {
        Prismic.getApi('https://greenwind.prismic.io/api/v2')
          .then(api => api.query(''))
          .then(response => {
            commit('FETCH_POSTS', response.results)
            resolve()
          }, error => {
            console.log('store > Error: ', error)
          })
      })
    },
    async fetchStatePosts ({ self, dispatch, state }) {
      await dispatch('fetchPrismicPosts')
      return state.posts
    }
  }
})
