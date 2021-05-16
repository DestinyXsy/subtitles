import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VideoPlayer from 'vue-video-player'
import APlayer from 'vue-aplayer'

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(APlayer);
Vue.use(VideoPlayer);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
