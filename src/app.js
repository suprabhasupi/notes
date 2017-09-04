import Vue from 'vue';
// import vueResource from 'vue-resource'
import App from './app.vue';

// Vue.use(vueResource);

new Vue({
  data(){
    return {
      // hostname: apiHostname
    }
  },
  render: h => h(App)
}).$mount('#app');
