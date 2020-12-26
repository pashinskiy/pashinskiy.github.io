<template>
  <div>
    <form @submit.prevent="pushUrl">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <p>Название</p>
          <input class="form-control" type="text" v-model="title" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <p>Автор</p>
          <input class="form-control" type="text" v-model="author" />
        </div>
        <div class="col-12 col-sm-12 col-md-4">
          <p>Жанр</p>
          <select class="form-control" v-model="genre">
            <option>Все</option>
            <option v-for="(genre, i) in genres" :key="i">
              {{ genre }}
            </option>
          </select>
        </div>
      </div>

      <div class="row justify-content-between">
        <div class="col-8 col-sm-4 text-left">
            <span>Сортировка:  </span>            
            <select v-model="sort" class="form-control d-inline w-auto">
              <option>нет</option>
              <option>автор</option>
              <option>название</option>
            </select>
        </div>

        <div class="col-4 col-sm text-right">
          <button class="btn btn-primary">найти</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "",
      author: "",
      genre: "Все",
      sort: "нет",
    };
  },
  computed: {
    ...mapGetters({
      genres: "genres",
    }),
  },
  methods: {
    pushUrl() {
      this.$router.push({
        path: "/library",
        query: {
          genre: this.genre,
          author: this.author,
          title: this.title,
          sort: this.sort,
        },
      });
    },
  },
  watch: {
    sort: function () {
      this.pushUrl();
    },
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 10px;
}
</style>