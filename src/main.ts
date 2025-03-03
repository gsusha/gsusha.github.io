import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import hintDirective from "@/directives/v-hint";

const app = createApp(App);
app.directive("hint", hintDirective);
app.mount("#app");