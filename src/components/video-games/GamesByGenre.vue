<template>
  <main>
    <h1>Popular {{ capitalizedGenre }} Games</h1>
    <ul class="game-list genre">
      <game-item
        v-for="game in games"
        :key="game.id"
        :name="game.name"
        :img="game.background_image"
        :systems="game.parent_platforms"
        :metacritic="game.metacritic"
        :released="game.released"
        :genres="game.genres"
        :esrb="game.esrb_rating"
      ></game-item>
    </ul>
  </main>
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
      currentGenre: this.$route.params.genre,
    };
  },
  computed: {
    capitalizedGenre() {
      return (
        this.currentGenre.charAt(0).toUpperCase() + this.currentGenre.slice(1)
      );
    },
  },

  async created() {
    const genre = this.$route.params;
    console.log(genre);
    axios
      .get(
        "https://api.rawg.io/api/games?key=" +
          process.env.VUE_APP_APIKEY +
          "&genres=" +
          genre.genre +
          "&ordering=-rating"
      )
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
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-left: 0;
  margin: 0 auto;
  padding: 50px 0;
}
@media screen and (min-width: 768px) {
  .game-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 1280px) {
  .game-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 1600px) {
  .game-list {
    grid-template-columns: repeat(4, 382.75px);
  }
}
</style>
