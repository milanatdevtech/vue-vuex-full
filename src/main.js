import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/index.js';

const app = createApp(App)

app.use(store);

app.mount('#app');