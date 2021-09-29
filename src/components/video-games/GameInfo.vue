<template>
  <section class="game-details">
    <div
      class="hero"
      :style="{ 'background-image': 'url(' + game.background_image + ')' }"
    ></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      game: null,
    };
  },

  async created() {
    axios
      .get(
        `https://api.rawg.io/api/games/${this.$route.params.id}?key=` +
          process.env.VUE_APP_APIKEY
      )
      .then((response) => {
        console.log(response.data);
        this.game = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.game-details {
  .hero {
    width: 100%;
    height: 400px;
    background: no-repeat center center/cover;
    position: fixed;
    -webkit-box-shadow: inset 0px 0px 37px 40px rgba(0, 0, 0, 0.65);
    box-shadow: inset 0px 0px 37px 40px rgba(0, 0, 0, 0.65);
  }
}
</style>
