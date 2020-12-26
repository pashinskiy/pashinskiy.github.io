<template>
  <div class="col-12 col-sm-7 m-auto">
    <form @submit.prevent="change">
      <div class="row">
        <div class="col-12">
          <p>Название:</p>
          <input type="text" v-model="newBook.title" class="form-control" />
        </div>
        <div class="col-12">
          <p>Автор:</p>
          <input type="text" v-model="newBook.author" class="form-control" />
        </div>
        <div class="col-12">
          <p>Жанры:</p>
          <p v-for="(genre, i) in newBook.genres" :key="i">
            <input
              v-model="newBook.genres[i]"
              type="text"
              class="form-control"
            />
            <span @click="delGenre(i)" class="btn btn-danger btn-sm"
              >удалить</span
            >
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <span class="btn btn-primary" @click="addGenre">+</span>
        </div>
      </div>
      <hr />
      <button :disabled="!validForm" class="btn btn-success">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      newBook: {},
    };
  },
  created() {
    this.copyBook();
  },
  computed: {
    ...mapGetters({
      getbook: "book",
    }),
    book() {
      return this.getbook(this.$route.params.id);
    },
    validForm() {
      let rez = true;
      if (!/[\S]+/.test(this.newBook.title)) rez = false;
      if (!/[\S]+/.test(this.newBook.author)) rez = false;
      for (let genre of this.newBook.genres)
        if (!/[\S]+/.test(genre)) rez = false;
      return rez;
    },
  },
  watch: {
    book() {
      this.copyBook();
    },
  },
  methods: {
    ...mapActions({
      changeBook: "changeBook",
    }),
    copyBook() {
      if (!this.book) {
        this.$router.push({name: 'E404'});
        return;
      }
      this.newBook = { ...this.book };
    },
    addGenre() {
      this.newBook.genres.push("");
    },
    delGenre(index) {
      if (this.newBook.genres.length > 1) this.newBook.genres.splice(index, 1);
    },
    change() {
      this.changeBook(this.newBook);
      this.$router.push({
        path: `/${this.$route.params.id}`,
        query: this.$route.query,
      });
    },
  },
};
</script>

<style scoped>
.btn {
  margin-top: 5px;
}
</style>