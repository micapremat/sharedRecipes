import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from "./App.vue"
import "./index.css"
import Home from './views/HomeView.vue';
import Recipes from './views/RecipesView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/recipes', component: Recipes },
    ]
  });

createApp(App).use(createPinia()).use(router).mount('#app')
