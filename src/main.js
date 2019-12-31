import Vue from 'vue';
import App from './App.vue';
import store from './store';
import 'nprogress/nprogress.css';
import router from '@/router/index';

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
