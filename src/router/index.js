import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const home=()=>import('../views/home/home');
const cart=()=>import('../views/cart/cart');
const category=()=>import('../views/category/category');
const profile=()=>import('../views/profile/profile');
const Detail=()=>import('../views/detail/Detail')

const route=[
   {
    path:'',
    redirect:"/home"  
},
   {
    path:"/home",
    component:home
},
    {
     path:"/profile",
     component:profile
},
    {
     path:"/cart",
     component:cart
},
    {
     path:"/category",
     component:category
},
{
    path: '/detail/:iid',
    component: Detail
  }
]

const router=new VueRouter({
    routes:route,
    mode:"history"
    
})
export default router