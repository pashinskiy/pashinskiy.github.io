<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div v-if="empty" class="alert alert-warning">Your cart is empty</div>
    <template v-else>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(obj, i) in products" :key="i">
            <td>{{ obj.title }}</td>
            <td class="">
              {{ obj.price }}
              <svg
                @click='remove(obj.id_product)'
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-x-circle-fill text-danger float-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                />
              </svg>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <th>{{ totalPrice }}</th>
          </tr>
        </tbody>
      </table>
      <button @click="onOrder" class="btn btn-success">Order Now</button>
      <button @click="clear" class="btn btn-danger float-right">Clear cart</button>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cart/productsInCart",
      totalPrice: "cart/totalPrice",
    }),
    empty() {
      return this.products.length === 0;
    },
  },
  methods: {
    ...mapActions('cart',{
        remove: 'remove',
        clear: 'clear'
    }),
    onOrder() {
      this.$router.push("/checkout");
    },
  },
};
</script>