import Vue from 'vue'
import App from './App.vue'

// import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
// import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue';
import Tabs from "framework7/components/tabs/tabs.js";
import Toggle from "framework7/components/toggle/toggle.js";
import Popup from "framework7/components/popup/popup.js";
import Popover from "framework7/components/popover/popover.js";
import Preloader from "framework7/components/preloader/preloader.js";
import Dialog from "framework7/components/dialog/dialog";


import 'framework7/css/framework7.bundle.css';
import './css/app.css';
import './css/icons.css';

import './registerServiceWorker'

Framework7.use([Framework7Vue, Tabs, Toggle, Popup, Popover, Preloader, Dialog]);


new Vue({
  render: h => h(App),
}).$mount('#app')
