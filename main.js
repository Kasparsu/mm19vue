import Vue from 'vue/dist/vue.common.js';

import ToDo from './ToDo.vue';
import ModalExample from './ModalExample.vue';
Vue.component('to-do', ToDo);
Vue.component('modal-example', ModalExample);

let App = new Vue({
    el: '#app',
})