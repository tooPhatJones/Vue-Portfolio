import Vue from 'vue'
import App from './App.vue'
import about from './components/about.vue'
import books from './components/books.vue'
import contact from './components/contact.vue'



import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '', component: about },
  { path: '/about', component: about },
  { path: '/books', component: books },
  { path: '/contact', component: contact },

]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
