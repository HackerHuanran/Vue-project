<template>
    <div class='headertop'>
      <div class='headerauto'>
          <div class='headerimg'>
            <img src="../../src/assets/user.jpeg" class="img" width="150px"/>
            <p>博主: Hacker-QHR</p>
            <p>职业: Web前端</p>
            <p>标签: 通过博客分享学习经验，过程中提高技术水平</p>
          </div>
          <div class='headerbtn'>
            <router-link to='/'>
              <el-button icon="el-icon-collection-tag" round>博客</el-button>
            </router-link>
            <router-link to='/add'>
              <el-button type="primary" icon="el-icon-edit" round>写博客</el-button>
            </router-link>
          </div>
      </div>
      <div class='headernav'>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">每日分享</el-menu-item>
          <el-menu-item index="2">个人分享</el-menu-item>
          <el-menu-item index="3">网盘资源</el-menu-item>
        </el-menu>
      </div>
    </div>
</template>
<script>
export default {
    name:'blog-header',
    data() {
      return {
        activeIndex: '1',
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      };
    },
    methods: {
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>
.headertop{
  width:100%;
  height:400px;
  background:url(../../src/assets/headeri.jpg);
  padding:0;
  margin-bottom:80px;
}
.headerauto{
  width:300px;
  height:400px;
  margin:0 auto;
  text-align: center;
}
.headerimg{
  width:100%;
  height:300px;
  vertical-align:middle;
}
.img{
  border-radius:100px;
  margin-top:40px;
}
.headerbtn{
  width:100%;
  height:100px;
  line-height: 130px;
}
.headernav{
 width:80%;
 margin:0 auto;
}
p{
  color:#fff;
}

.btntop{
  margin-top:30px;
}
</style>
