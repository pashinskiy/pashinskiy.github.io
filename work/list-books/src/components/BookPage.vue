<template>
  <div class="col-12 col-sm-7 m-auto p-3">
    <button @click="exit" class="btn btn-primary btn-sm">назад</button>
    <button @click.prevent="openCreate" class="btn btn-danger btn-sm float-right">
      редактировать
    </button>
    <div>
      <h1>{{ book.title }}</h1>
      <div class="list-group">
      <p class="list-group-item"><b>Автор:</b> {{ book.author }}</p>
      <p class="list-group-item">
        <b>Жанр:</b>
        <i> {{ book.genres }} </i>
      </p>
      </div>
      <div class="btn-group w-100" role="group">
      <button @click="pushUrl('last')" class="btn btn-warning btn-sm">предыдущая</button>
      <button @click="pushUrl('next')" class="btn btn-success btn-sm">следующая</button></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      bookIndex: "bookIndex",
      getbook: "book",
      books: "books",
    }),
    id() {
      return this.$route.params.id;
    },
    index() {
      return this.bookIndex(this.id);
    },
    book() {
      return this.getbook(this.id);
    },
  },
  methods: {
    ...mapActions({
      setFilter: "setFilter",
    }),
    updFilter() {
      if (!this.book) {
        this.$router.push({name: 'E404'});
        return;
      }
      this.setFilter(this.$route.query);
    },
    pushUrl(str) {
      if (str == "next") {
        if (this.index < this.books.length - 1)
          this.$router.push({
            path: `${this.getbook(this.books[this.index + 1].id).id}`,
            query: this.$route.query,
          });
      } else {
        if (this.index > 0)
          this.$router.push({
            path: `${this.getbook(this.books[this.index - 1].id).id}`,
            query: this.$route.query,
          });
      }
    },
    exit(){
      this.$router.push({
            name: 'library',
            query: this.$route.query,
          });
    },    
    openCreate() {
      this.$router.push({
        path: `/change/${this.book.id}`,
        query: this.$route.query, 
      });
    },
  },
  mounted() {
    this.updFilter();
  },
  watch: {
    $route: function () {
      this.updFilter();
    },
  },
};
</script>