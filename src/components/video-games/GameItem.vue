<template>
  <li class="game">
    <base-card>
      <template v-slot:picture>
        <div
          class="game-img"
          :style="{ backgroundImage: 'url(' + img + ')' }"
        ></div>
      </template>
      <div class="description">
        <div class="systems">
          <p v-for="system in systems" :key="system.id">
            {{ system.platform.name }}
          </p>
        </div>
        <div class="game-title"></div>
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
    systems: Array,
  },

  // mounted() {
  //   console.log(
  //     this.systems.forEach((system) => {
  //       console.log(system.platform.name);
  //     })
  //   );
  // },
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
