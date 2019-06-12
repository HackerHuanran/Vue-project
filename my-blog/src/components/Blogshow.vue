<template>
  <div id="blogshow">
    <div style="margin: 15px 0px;">
        <el-input placeholder="请输入要搜索的内容" v-model="search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <div v-loading="!loading">
        <el-row :gutter="20">
            <el-col :span="12" v-for="blogs in filteredBlogs" >
                <router-link v-bind:to="'/blog/' + blogs.objectId">
                    <el-card class="box-card" shadow="hover" >
                        <div slot="header" class="clearfix">
                            <span v-colorshow>{{blogs.title}}</span>
                        </div>
                        <div class="text item">
                            {{blogs.textarea | sizelen}}
                        </div>
                    </el-card>
                </router-link>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'blogshow',
  data(){
      return{
        bloglist:[],
        search:'',
        loading: false
      }
  },
  created(){
    //Bmob数据库
    const query = Bmob.Query("Addblog");
    query.find().then(res => {
       var blogArray = [];
       for(let key in res){
           res[key].id = key;
           blogArray.push(res[key])
       }
       this.bloglist = blogArray;
        this.loading = true;
    }).catch(err => {
        this.$message({
        message: '获取失败！检查网络',
        type: 'error'
        });
    });
  
  },
  computed:{
      filteredBlogs:function(){
          return this.bloglist.filter((blog)=>{
              return blog.title.match(this.search)
          })
      }
  }
  
}
</script>

<style>
#blogshow{
    width:80%;
    margin:20px auto;
}
.box-card{
    margin-bottom: 5px;
}
.title{
    font-size: 25px;
    margin-bottom: 10px;
}
</style>
