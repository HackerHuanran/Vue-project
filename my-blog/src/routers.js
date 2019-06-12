import Blogshow from './components/Blogshow'
import AddBlog from './components/Add-blog'
import SingleBlogs from './components/SingleBlog'
import EditBlogs from './components/EditBlog'

export default[
    {path:'/',component:Blogshow},
    {path:'/add',component:AddBlog},
    //跳转详情页传递参数
    {path:'/blog/:id',component:SingleBlogs},
    {path:'/edit/:id',component:EditBlogs}
]