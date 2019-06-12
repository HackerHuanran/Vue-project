<template>
    <div id="single-blog" v-loading="!loading">
        <h1>{{blog.title}}</h1>
        <el-breadcrumb separator="/" >
            <el-breadcrumb-item>作者:{{blog.value}}</el-breadcrumb-item>
            <el-breadcrumb-item>
                <div class='floatleft'>分类:
                    <div class='floatright' v-for='category in blog.checked'>
                        {{category}}
                    </div>
                </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item>时间:{{blog.updatedAt}}</el-breadcrumb-item>
        </el-breadcrumb>
        <article>{{blog.textarea}}</article>
        <el-button-group class='btntop'>
            <el-button type="primary" icon="el-icon-delete" @click='deleteSingleBlog()'></el-button>
            <router-link :to="'/edit/' + id">
                <el-button type="primary" icon="el-icon-edit"></el-button>
            </router-link>
        </el-button-group>
    </div>
</template>
<script>
export default {
    name:'single-blog',
    data(){
        return{
            id:this.$route.params.id,
            blog:{},
            loading: false
        }
    },
    created(){
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
    methods:{
        //删除本条数据
        deleteSingleBlog(){
            this.loading = false
            const query = Bmob.Query('Addblog');
            query.destroy(this.id).then(res => {
                this.loading = true
                this.$message({
                message: '删除成功',
                type: 'success'
                });
                this.$router.push({path:'/'})
            }).catch(err => {
                this.$message({
                message: '删除失败！检查网络',
                type: 'error'
                });
            })
        }
    }
}
</script>
<style>
    #single-blog{
        max-width: 960px;
        margin:20px auto;
        padding:20px;
        background: #f1f1f1;
    }
    article{
        margin-top:30px;
    }
    .floatleft{
        float: left;
    }
    .leftfenlei{
        float: left;
    }
    .floatright{
        float:right;
    }
    .btntop{
        margin: 20px 0px;
    }
</style>

