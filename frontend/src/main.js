import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

axios.defaults.baseURL = "http://localhost:3000"

createApp(App).component("fa", FontAwesomeIcon).use(store).use(router).mount('#app')
