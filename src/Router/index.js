import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../View/Home.vue";
import Produk from "../View/Produk.vue";
import Detail from "../View/Detail.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const routes =[
    {
        path: "/",
        name: "LoginPage",
        component: Login
    },
    {
        path:"/register",
        name: "Registerpage",
        component: Register
    },
    
    {
        path: "/home",
    component:Home
},
{
    path: "/produk",
    name: "ProdukPage",
    component: Produk
},
{
    path: "/detail",
    name: "DetailPage",
    component: Detail
}
]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;