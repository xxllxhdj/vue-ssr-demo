import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';

import directives from './test/directives'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

import 'material-design-icons/iconfont/material-icons.css';

Vue.use(Vuetify, {
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});

Vue.config.productionTip = false;

Vue.use(directives);

export function createApp () {
    const store = createStore();
    const router = createRouter();

    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store };
};
