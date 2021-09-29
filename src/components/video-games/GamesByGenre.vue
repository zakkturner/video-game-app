<template>
  <main>
    <h1 class="genre-title">Highest Rated {{ capitalizedGenre }} Games</h1>
    <p class="loading" v-if="games.length === 0">Loading...</p>
    <ul class="game-list genre" v-else>
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
        :id="game.id"
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
      return this.currentGenre === "role-playing-games-rpg"
        ? "Role Playing"
        : this.currentGenre.charAt(0).toUpperCase() +
            this.currentGenre.slice(1);
    },
  },
  methods: {
    getGameData() {
      axios
        .get(
          "https://api.rawg.io/api/games?key=" +
            process.env.VUE_APP_APIKEY +
            "&genres=" +
            this.currentGenre +
            "&ordering=-metacritic"
        )
        .then((response) => {
          console.log(response.data.results);
          this.games = response.data.results;
        });
    },
  },
  async created() {
    this.getGameData();
  },
  watch: {
    $route() {
      this.currentGenre = this.$route.params.genre;
      this.getGameData();
      console.log("watch called");
    },
  },
};
</script>

<style lang="scss" scoped>
.genre-title {
  color: #fff;
  font-size: 80px;
  margin: 50px 0 0 0;
}
.game-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding-left: 0;
  width: 95%;
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
