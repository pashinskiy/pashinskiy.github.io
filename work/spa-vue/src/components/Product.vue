<template>
  <div class="row">
    <div class="col col-12 col-sm-4 text-center">
      <img :src="product(id).img" />
    </div>
    <div class="col col-12 col-sm-8">
      <h1>{{ product(id).title }}</h1>
      <router-link :to="{ name: 'products' }"> Back to product </router-link>
      <hr />
      <h3>{{ product(id).price }}₽</h3>
      <button
        v-if="!productsInCart(id)"
        @click="addProduct(id)"
        class="btn btn-primary"
      >
        Add to cart
      </button>
      <button v-else @click="removeProduct(id)" class="btn btn-warning">
        Remove to cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      product: "products/item",
      productsInCart: "cart/inCart",
    }),
    id() {
      return +this.$route.params.id;
    },
  },
  methods: {
    ...mapActions({
      addProduct: "cart/add",
      removeProduct: "cart/remove",
    }),
  },
};
</script>

<style scoped>
  img {
    width:100%;
  }
  @media (max-width: 576px) {
    img {
    width: 50%;
  }
  }
</style>