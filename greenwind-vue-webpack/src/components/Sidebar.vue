<template>
  <div class="sidebar">
    <el-col :span="1">
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
              <div class="content" v-html="P.RichText.asHtml(post.data.content)">
              </div>
              <!-- pageContent.data.image.url -->
            </article>
          </section>
        </el-tab-pane>
        <el-tab-pane label="2017">
          <div class="post-list">
            <div class="post">
              <h2 class="title">Wir sind Umgezogen</h2><span class="date">13/03/2017</span>
            </div>
            <div class="post">
              <h2 class="title">20 Jahre Windenergie</h2><span class="date">13/02/2017</span>
            </div>
            <div class="post">
              <h2 class="title">Suk ma dieeek</h2><span class="date">18/06/2017</span>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="2016">
          <div class="post-list">
            <div class="post">
              <h2 class="title">kasjfhksdj</h2><span class="date">13/03/2016</span>
            </div>
            <div class="post">
              <h2 class="title">fdsf</h2><span class="date">13/02/2016</span>
            </div>
            <div class="post">
              <h2 class="title">sdfsfds</h2><span class="date">18/06/2016</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2015">
          <div class="post-list">
            <div class="post">
              <h2 class="title">asgsassadgsg</h2><span class="date">13/03/2015</span>
            </div>
            <div class="post">
              <h2 class="title">dsfdfgfds dfhdf</h2><span class="date">13/02/2015</span>
            </div>
            <div class="post">
              <h2 class="title">hdfhdf dfhsdh hfdh</h2><span class="date">18/06/2015</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: 'homepage text...'
    }
  }
}
</script>

<style lang="sass" scoped>
  h1
    color: blue
</style>
