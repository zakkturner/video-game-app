<template>
  <div class="card">
    <div class="game-picture">
      <slot name="picture"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  //   margin: 2rem auto;
  width: 20rem;
  height: 30rem;
  background: #2c3e50;
  display: grid;
  grid-template-columns: 1fr;
  .game-picture {
    width: 100%;
    height: 100%;
  }
}
</style>
