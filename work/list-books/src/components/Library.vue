<template>
  <div class="library">
    <Search/>
    <ul v-if='books.length' class="list-group">
      <BookLi 
        v-for="(book, i) in books" 
        :key="i" :book="book" 
        class="list-group-item"
        />
    </ul>
    <div v-else class="alert alert-warning">
      Таких книг нет
    </div>
    <p>
      <span> Всего книг: {{ amountBooks }} </span>
      <span> Всего авторов: {{ amountAuthor }} </span>
    </p>
  </div>
</template>

<script>
import Search from "./Search.vue";
import BookLi from "./BookLi";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Search,
    BookLi,
  },
  computed: {
    ...mapGetters({
      books: "books",
      amountBooks: "amountBooks",
      amountAuthor: "amountAuthor",
    }),
  },
  methods: {
    ...mapActions({
      setFilter: "setFilter",
    }),
    updFilter() {
      this.setFilter(this.$route.query);
    },
  },
  mounted() {
    this.updFilter();
  },
  watch: {
    $route() {
      this.updFilter();
    },
  },
};
</script>

<style scoped>
  .library{
    padding: 5%;
  }
</style>