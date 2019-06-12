<template>
  <div class="hello">
    <!--标题/内容-->
    <div>
      <el-card class="box-card top">
        <div slot="header" class="clearfix">
          <span>编辑博客</span>
        </div>
        <div class="text item">
          <el-input placeholder="请输入标题" v-model="blog.title" class='input'>
            <template slot="prepend">标题</template>
          </el-input>
          <el-input
            type="textarea"
            :rows="10"
            placeholder="请输入内容"
            v-model="blog.textarea"
            class='input'
          >
          </el-input> 
        </div>
      </el-card>
      <!--分类-->
      <el-card class="box-card top">
        <div slot="header" class="clearfix">
          <span>分类</span>
        </div>
        <div class="text item">
          <template>
            <el-checkbox v-model="blog.checked" label="React">React</el-checkbox>
            <el-checkbox v-model="blog.checked" label="Vue">Vue</el-checkbox>
            <el-checkbox v-model="blog.checked" label="Javascript">Javascript</el-checkbox>
            <el-checkbox v-model="blog.checked" label="H5">H5</el-checkbox>
            <el-checkbox v-model="blog.checked" label="CSS3">CSS3</el-checkbox>
            <el-checkbox v-model="blog.checked" label="Python">Python</el-checkbox>
          </template>
        </div>
      </el-card>
      <!--作者/时间-->
      <el-card class="box-card top">
        <div class="text item">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <div class='select'>
                  <label>作者:</label>
                  <el-select v-model="blog.value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light">
                <div class="select">
                <span class="demonstration">时间:</span>
                  <el-date-picker
                    v-model="blog.time"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-button type="primary" v-on:click.prevent='postsub' class='sub'>编辑博客</el-button>
      <el-divider></el-divider>
    </div>
    <!-- <div v-if="fromshow">
      <h3>您的博客发布成功！</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Editblog',
  data () {
    return {
        id:this.$route.params.id,
        blog:{
          title:'',
          textarea:'',
          checked:[],
          value:'',
          time:''
        },
        options: [{
          value: '齐焕然',
          label: '齐焕然'
        }, {
          value: '董帅',
          label: '董帅'
        }],
        // fromshow:false
       loading: true
    }
  },
  methods:{
    fetchData:function(){
       //Bmob获取数据库
        const query = Bmob.Query('Addblog');
        query.get(this.id).then(res => {
            this.blog = res;
            this.loading = true
        }).catch(err => {
            this.$message({
            message: '获取失败！检查网络',
            type: 'error'
            });
        })
    },
    postsub:function(){
      //Bmob编辑数据库
      this.loading = false;
      const query = Bmob.Query('Addblog');
        query.get(this.id).then(res => {
        console.log(res)
        res.set("title", this.blog.title)
        res.set("textarea",this.blog.textarea)
        res.set("checked",this.blog.checked)
        res.set("value",this.blog.value)
        res.save()
        this.loading = true
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        });
        this.$router.push({path:'/'})
        }).catch(err => {
        this.$message({
          message: '编辑失败！检查网络',
          type: 'error'
          });
        })
    },
    
  },
  created(){
      this.fetchData();
    }
}
</script>
<style scoped>
.hello {
  width:50%;
  margin:20px auto;
}
.input {
  margin-bottom: 15px;
}
.select{
  width:100%;
  margin:25px 0px;
}
.sub{
  width:100%;
}
.top{
  margin-bottom: 5px;
}
</style>
