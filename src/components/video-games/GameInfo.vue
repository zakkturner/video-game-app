<template>
  <div>{{ name }}</div>
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

<style></style>
