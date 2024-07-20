
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/css/main.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// ..
AOS.init({
  once: true 
});

const app = createApp(App)
app.use(ElementPlus)

app.use(router)

app.mount('#app')
