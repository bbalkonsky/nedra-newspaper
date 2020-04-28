import Vue from 'vue'
import App from './App.vue'

import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

import 'framework7/css/framework7.bundle.css';
import './css/app.css';
import './css/icons.css';
import './registerServiceWorker'

Framework7.use(Framework7Vue);


new Vue({
  render: h => h(App),
}).$mount('#app')
