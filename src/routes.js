import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import CarDetail from './components/CarDetail.vue';
import Cars from './components/Cars.vue';
import NotFound from './components/NotFound.vue';
import CarCreate from './components/CarCreate.vue';
import SignUp from './components/SignUp.vue';
import store from './store.js'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token)
            {next()}
            else{next('/signin')}
    }},
    {path: '/signin', component: Login},
    {path: '/cars', component: Cars},
    {path: '/cars/:pk', component: CarDetail,
        children:[
            {path: 'car', component: CarCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})