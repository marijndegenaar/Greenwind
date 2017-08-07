<template>
  <div class='wrapper'>
    <el-row :gutter="40">

      <!-- <sidebar></sidebar> -->
      <div class="sidebar">
        <el-col :span="2">
          <el-menu default-active="2" @open="handleOpen" @close="handleClose" class="el-menu-vertical-demo">
            <el-menu-item index="1"><i class="el-icon-close"></i></el-menu-item>
            <el-menu-item index="2"><i class="el-icon-menu"></i></el-menu-item>
            <el-menu-item index="3"><i class="el-icon-menu"></i></el-menu-item>
            <el-menu-item index="4"><i class="el-icon-menu"></i></el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="5">
          <el-tabs type="border-card" class="year-filter">
            <el-tab-pane label="All">
              <section class='posts' v-if='posts && posts.length' v-cloak>
                <article class='post' v-for='post of posts'>
                  <h1 class='title'>{{ P.RichText.asText(post.data.title) }}</h1>
                  <div class="category">
                    Category: {{ post.data.category }}<br/>
                    <!-- Date: {{ P.Date(post.last_publication_date) | moment "YYYY" }}<br/> -->
                    Date: {{ post.last_publication_date | moment }}<br/>
                  </div>

                </article>
              </section>
            </el-tab-pane>
            <el-tab-pane label="2017">2017</el-tab-pane>
            <el-tab-pane label="2016">2016</el-tab-pane>
            <el-tab-pane label="2015">2015</el-tab-pane>
          </el-tabs>
        </el-col>
      </div>

      <el-col :span="12">

        <!-- <div class="loading" v-show='loaderVisibility'>
          <Spinner size='large' line-fg-color='#00F'></Spinner>
        </div> -->

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
      </el-col>

    </el-row>
  </div>
</template>

<script>
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import moment from 'moment'
import Spinner from 'vue-simple-spinner'
import Sidebar from '@/components/Sidebar'

export default {
  data: () => ({
    posts: [],
    loaderVisibility: true
  }),
  components: {
    Spinner, Sidebar
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
