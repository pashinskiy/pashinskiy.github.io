<template>
  <li class="book">
    <p @click="openBook" class="d-inline">
      <span>
        <big>"{{ book.title }}"; </big>
        <b> Автор: {{ book.author }}; </b>
        Жанр: <i> {{ book.genres }}. </i>
      </span>
    </p>
    <button @click.prevent="del(book.id)" class="btn btn-danger btn-sm float-right">
      удалить
    </button>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["book"],

  methods: {
    ...mapActions({
      del: "delBook",
    }),
    openBook() {
      this.$router.push({ path: `${this.book.id}`, query: this.$route.query });
    },
  },
};
</script>

<style scoped>
.btn {
  margin-right: 5px;
}
.book {
  cursor: pointer;
}
.book:hover span {
  border-bottom: 1px solid #000;
}
</style>