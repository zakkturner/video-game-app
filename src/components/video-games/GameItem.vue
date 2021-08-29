<template>
  <base-card>
    <li class="game">
      <div
        class="game-img"
        :style="{ backgroundImage: 'url(' + img + ')' }"
      ></div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
.game {
  list-style-type: none;
  height: 100%;
  width: 100%;
  .game-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
