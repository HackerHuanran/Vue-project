<template>
  <div id="app">
    <BlogHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/Add-blog'
import Blogshow from './components/Blogshow'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    AddBlog,Blogshow,BlogHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
