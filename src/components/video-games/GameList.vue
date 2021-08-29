<template>
  <ul class="game-list">
    <game-item
      v-for="game in games"
      :key="game.id"
      :name="game.name"
      :img="game.background_image"
      :systems="game.parent_platforms"
      :metacritic="game.metacritic"
      :released="game.released"
      :genres="game.genres"
    ></game-item>
  </ul>
</template>

<script>
import axios from "axios";

import GameItem from "./GameItem";
export default {
  components: {
    GameItem,
  },
  data() {
    return {
      games: [],
    };
  },
  async created() {
    axios
      .get("https://api.rawg.io/api/games?key=" + process.env.VUE_APP_APIKEY)
      .then((response) => {
        console.log(response.data.results);
        this.games = response.data.results;
      });
  },
};
</script>

<style lang="scss" scoped>
.game-list {
  display: grid;
  grid-template-columns: repeat(4, 382.75px);
  grid-gap: 1rem;
}
</style>
