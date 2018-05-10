import Vue from 'vue';
import Router from 'vue-router';

import test from './test';
import vuetify from './vuetify';

import HomeView from '../home/views/HomeView.vue';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior,
        routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        }, ...test, ...vuetify, {
            path: '*',
            redirect: '/'
        }]
    });
};
