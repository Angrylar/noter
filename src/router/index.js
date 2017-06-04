import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index/index.vue'
import login from '@/components/login/login.vue'
import newNote from '@/components/newNote/newNote.vue'
import notePreview from '@/components/notePreview/notePreview.vue'
import register from '@/components/register/register.vue'
import userCenter from '@/components/userCenter/userCenter.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/index',
    name: 'index',
    component: index
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/newNote',
    name: 'newNote',
    component: newNote
  }, {
    path: '/notePreview',
    name: 'notePreview',
    component: notePreview
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/userCenter',
    name: 'userCenter',
    component: userCenter
  }]
})
