import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript' // REST API

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    activeFilter: null
  },
  mutations: {
    FETCH_POSTS (state, posts) {
      state.posts = posts
    },
    ACTIVE_FILTER (state, category) {
      state.activeFilter = category
    }
  },

  getters: {
    getActiveFilter: state => state.activeFilter
  },
  actions: {
    setActiveFilter ({ commit, self, dispatch }, category) {
      commit('ACTIVE_FILTER', category)
    },
    async fetchPrismicPosts ({ commit, self, dispatch }) {
      return new Promise((resolve, reject) => {
        Prismic.getApi('https://greenwind.prismic.io/api/v2')
          .then(api => api.query(''))
          .then(response => {
            // change 'Greenwind Energy' to just 'energy', etc.
            response.results.forEach((post) => {
              post.data.category = post.data.category.replace(/Greenwind /i, '').toLowerCase()
            })
            // save it to store
            commit('FETCH_POSTS', response.results)
            resolve()
          }, error => {
            // get posts from store without another API call
            console.log('store > Error: ', error)
          })
      })
    },
    async fetchStatePosts ({ self, dispatch, state }) {
      // only fetchPrismicPosts() if it's not done already
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      return state.posts
    },
    async fetchStatePost ({ self, dispatch, state }, uid) {
      // only fetchPrismicPosts() if it's not done already
      if (state.posts.length === 0) {
        await dispatch('fetchPrismicPosts')
      }
      const posts = state.posts
      const post = posts.filter(x => x.uid === uid)
      return post
    }
  }
})
