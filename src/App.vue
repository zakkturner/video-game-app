<template>
  <ul>
    <li v-for="game in games" :key="game.id">{{ game.name }}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      games: [],
    };
  },
  async created() {
    axios
      .get("https://api.rawg.io/api/games?key=" + process.env.VUE_APP_APIKEY)
      .then((response) => {
        console.log(response.data.result);
        this.games = response.data.results;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
