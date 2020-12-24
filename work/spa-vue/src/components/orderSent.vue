<template>
  <div>
    <div v-if="show">
      <h1>The order has been sent</h1>
      <div>
        <div v-if="submitProcces">Loading...</div>
        <div v-else class="alert alert-success">
          <h1>Ok!</h1>
        </div>
      </div>
    </div>
    <div v-else class="alert alert-warning">
      Order not completed
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      submitProcces: "checkout/submitProcces",
      lengthCart: "cart/lengthCart",
      submited: "checkout/submited",
    }),
    show() {
      return this.submited;
    },
  },
};
</script>