<template>
  <header>
    <h2>Fire Games 🔥</h2>
    <nav>
      <ul class="link-list">
        <li class="item">
          <router-link class="link" to="/">All Games 🎮</router-link>
        </li>
        <!-- <li class="item">
          <a href="#" class="link">Most Popular 🏆</a>
        </li>
        <li class="item">
          <a href="#" class="link">Upcoming 📆 </a>
        </li> -->
      </ul>
      <h3>Genre</h3>
      <ul class="link-list">
        <li class="item">
          <router-link to="/sports" class="link">Sports 🏈</router-link>
        </li>
        <li class="item">
          <router-link to="/action" class="link">Action 🦸‍♂️</router-link>
        </li>
        <li class="item">
          <router-link to="/role-playing-games-rpg" class="link"
            >RPG 📚</router-link
          >
        </li>
        <li class="item">
          <router-link to="/shooter" class="link">Shooter 🔫</router-link>
        </li>
        <li class="item">
          <router-link to="/puzzle" class="link">Puzzle 🧩</router-link>
        </li>
        <li class="item">
          <router-link to="/adventure" class="link">Adventure ⛰️</router-link>
        </li>
        <li class="item">
          <router-link to="/strategy" class="link">Strategy ♟️</router-link>
        </li>
        <li class="item">
          <router-link to="/simulation" class="link">Simulation 👪</router-link>
        </li>
        <li class="item">
          <router-link to="/indie" class="link">Indie 🧑‍💻</router-link>
        </li>
        <li class="item">
          <router-link to="/racing" class="link">Racing 🏎️</router-link>
        </li>
        <li class="item">
          <router-link to="/casual" class="link">Casual 🍹</router-link>
        </li>
        <li class="item">
          <router-link to="/massively-multiplayer" class="link"
            >Massively Multiplayer 🌎
          </router-link>
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
