<template>
  <li class="game">
    <base-card>
      <template v-slot:picture>
        <div class="game-img" :style="{ backgroundImage: 'url(' + img + ')' }">
          <p v-if="metacritic !== '' || null" class="mc-score">
            {{ metacritic }}
          </p>
        </div>
      </template>
      <div class="description">
        <div class="systems">
          <div v-for="system in systems" :key="system.id" class="system-icon">
            <!-- {{ system.platform.name }} -->

            <i v-if="system.platform.slug === 'pc'" class="fab fa-windows"></i>
            <div
              v-else-if="system.platform.slug === 'nintendo'"
              class="nintendo"
            ></div>
            <i class="fab" :class="'fa-' + system.platform.slug"></i>
          </div>
        </div>
        <div class="game-title">
          <h3 class="title">{{ name }}</h3>
        </div>
        <div class="game-released">
          <p class="release-date">
            Released: <span class="info">{{ formatDate(released) }}</span>
          </p>
          <hr />
        </div>
        <div class="game-genre">
          <div class="genre">
            Genre:
            <div class="genre-container">
              <span
                class="info"
                href="#"
                v-for="(genre, index) in genres"
                :key="genre.id"
                >{{ genre.name
                }}<span v-if="index != genres.length - 1">, </span>
              </span>
            </div>
          </div>
          <hr />
        </div>
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
    metacritic: Number,
    released: String,
    genres: Array,
  },

  methods: {
    formatDate(date) {
      const dateObj = new Date(date + "T00:00:00");
      return new Intl.DateTimeFormat("en-US").format(dateObj);
    },
  },
  mounted() {
    console.log(this.genres);
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
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .mc-score {
      margin-top: 0px;
      margin-bottom: 0px;
      border: 5px green solid;
      border-radius: 5%;
      padding: 10px;
      color: green;
      background: #fffffe;
      font-size: 20px;
      font-weight: 600;
    }
  }
  .description {
    .systems {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 50%;
      margin: 0 auto;
      .system-icon {
        color: #fff;
        display: flex;
        align-items: center;
        margin: 0 5px;
        .nintendo {
          background: url("../../assets/nintendo.png") no-repeat center center;
          background-size: contain;
          height: 2em;
          width: 3em;
        }
      }
    }

    .title {
      color: #fff;
      font-size: 22px;
      font-weight: 700;
    }
    .game-released,
    .game-genre {
      color: #c9c9c9;
      .release-date,
      .genre {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        .info {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
