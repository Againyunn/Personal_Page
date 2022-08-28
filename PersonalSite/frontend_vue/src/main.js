import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// window.$ = window.jQuery = require('jquery');

const app = createApp(App)
app.use(VueSweetalert2)
app.use(router).mount('#app')





