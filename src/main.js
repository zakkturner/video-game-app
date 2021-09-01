import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/ui/BaseCard";
import TheHeader from "./components/layout/TheHeader";
const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-card", BaseCard);

app.mount("#app");
