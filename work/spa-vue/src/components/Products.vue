<template>
  <div>
    <h1>Products</h1>
    <hr />
    <div class="row">
      <div
        v-for="(obj, i) in products"
        :key="i"
        class="col col-6 col-sm-4 text-center product"
      >
        <router-link tag="h4" :to="'/products/' + obj.id_product">
          <a>
            <img :src="obj.img" />
            <p class="title">{{ obj.title }}</p>
          </a>
        </router-link>
        <p>Price: {{ obj.price }}₽</p>
        <button
          v-if="!productsInCart(obj.id_product)"
          @click="addProduct(obj.id_product)"
          class="btn btn-primary"
        >
          Add to cart
        </button>
        <button
          v-else
          @click="removeProduct(obj.id_product)"
          class="btn btn-warning"
        >
          Remove to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "products/items",
      productsInCart: "cart/inCart",
    }),
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
a {
  text-decoration: none;
  color: #000;
}
img {
  max-height: 150px;
}
.product {
  margin-bottom: 5%;
}
</style>