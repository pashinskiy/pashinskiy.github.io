<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-9">
            <h1>Logo</h1>
          </div>
          <div class="col-3 text-warning">
            <svg
              @click='onCart'
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-cart4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
            <span v-if="lengthCart"
                  class="badge badge-danger">
              {{ lengthCart }}
            </span>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <menu class="col col-sm-3 col-12 menu">
            <ul class="list-group">
              <router-link
                v-for="(obj, i) in menu"
                :key="i"
                :to="obj.url"
                tag="li"
                class="list-group-item"
                active-class="active"
              >
                <a>{{ obj.text }}</a>
              </router-link>
            </ul>
          </menu>
          <main class="col col-sm-9 col-12">
            <transition enter-active-class="animate__animated animate__flipInY" 
                        leave-active-class="animate__animated animate__flipOutY"
                        mode="out-in">
            <router-view></router-view>
            </transition>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      menu: "menu/items",
      lengthCart: 'cart/lengthCart'
    }),
  },
  methods: {
    onCart() {
      this.$router.push('/cart');
    }
  }
};
</script>

<style scoped>
.list-group-item a {
  text-decoration: none;
}
.list-group-item.active a {
  color: inherit;
}
</style>