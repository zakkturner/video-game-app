<template>
  <header>
    <h2>Fire Games 🔥</h2>
    <nav>
      <ul class="link-list">
        <li class="item">
          <a href="#" class="link">All Games 🎮</a>
        </li>
        <li class="item">
          <a href="#" class="link">Most Popular 🏆</a>
        </li>
        <li class="item">
          <a href="#" class="link">Upcoming 📆 </a>
        </li>
      </ul>
      <h3>Genre</h3>
      <ul class="link-list">
        <li class="item">
          <a href="#" class="link">Sports 🏈</a>
        </li>
        <li class="item">
          <a href="#" class="link">Action 🦸‍♂️</a>
        </li>
        <li class="item">
          <a href="#" class="link">RPG 📚</a>
        </li>
        <li class="item">
          <a href="#" class="link">Shooter 🔫</a>
        </li>
        <li class="item">
          <a href="#" class="link">Puzzle 🧩</a>
        </li>
        <li class="item">
          <a href="#" class="link">Adventure ⛰️</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: #475f75;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 7px 0px 15px -7px rgba(0, 0, 0, 0.73);
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 24px;
  }
  h2,
  h3 {
    color: #fff;
    text-align: left;
  }
  nav {
    .link-list {
      padding: 0;
      text-align: left;
      .item {
        list-style-type: none;
        margin-bottom: 10px;
        .link {
          text-decoration: none;
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
