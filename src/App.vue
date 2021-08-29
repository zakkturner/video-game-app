<template>
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
body {
  background: #253442;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #253442; */
  margin-top: 60px;
}
</style>
