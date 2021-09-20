import Vue from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import fullCalendar from 'vue-fullcalendar';
import swatches from 'vue-swatches';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AudioRecorder from 'vue-audio-recorder';
import App from './App.vue';
import router from './router';

import './registerServiceWorker';

import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';

import './styles/global.css';

import setupComponents from './components/config/setup-components';

Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);
Vue.use(VueAxios, axios);
Vue.use(AudioRecorder);

setupComponents(Vue);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: (h) => h(App),
  data: {
    themeColor: '#444444',
    userEmail: 'admin@yopmail.com',
    userPassword: '123456',
  },
}).$mount('#app');
