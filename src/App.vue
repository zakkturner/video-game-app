<template>
  <the-header></the-header>
  <game-list></game-list>
</template>

<script>
import GameList from "./components/video-games/GameList";
export default {
  name: "App",
  components: {
    GameList,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Teko&display=swap");
body {
  background: #253442;
  margin: 0;
}
#app {
  font-family: "Teko", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #253442; */
  /* margin-top: 60px; */
  display: grid;
  grid-template-columns: 14% 1fr;
}
</style>
