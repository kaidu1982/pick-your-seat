import './styles/font-pretendard.scss';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const vuetify = createVuetify({
    defaults: {}
});

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app');
