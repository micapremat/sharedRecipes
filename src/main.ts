import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from "./App.vue"
import PrimeVue from 'primevue/config';
import "./index.css"
import Home from './views/HomeView.vue';
import Recipes from './views/RecipesView.vue';
import Profile from './views/ProfileView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/recipes', component: Recipes },
      { path: '/profile', component: Profile },
    ]
  });

createApp(App).use(createPinia()).use(router).use(PrimeVue).mount('#app')
