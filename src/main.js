import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import BaseCard from "./components/ui/BaseCard";
import TheHeader from "./components/layout/TheHeader";
import GameList from "./components/video-games/GameList";
import GamesByGenre from "./components/video-games/GamesByGenre";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: GameList },
    { path: "/:genre", component: GamesByGenre },
  ],
});

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-card", BaseCard);
app.use(router);

app.mount("#app");
