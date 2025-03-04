import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import popoverDirective from "@/directives/v-popover";

const app = createApp(App);
app.directive("popover", popoverDirective);
app.mount("#app");