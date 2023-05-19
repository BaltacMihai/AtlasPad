import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tabs, Tab } from "vue3-tabs-component";
import App from "./App.vue";
import VueCodemirror from "vue-codemirror";

const app = createApp(App).component("tabs", Tabs).component("tab", Tab);

app.use(createPinia()).use(VueCodemirror);

app.mount("#app");
