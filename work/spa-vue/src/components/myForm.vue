<template>
  <transition
    name="form"
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__rollOut"
    mode="out-in"
    appear
  >
    <form @submit.prevent="onSubmit">
      <div class="progress">
        <div class="progress-bar" :style="progress"></div>
      </div>
      <div>
        <my-input
          class="form-group"
          v-for="(obj, i) in info"
          :key="i"
          :name="obj.name"
          :value="obj.value"
          :pattern="obj.pattern"
          @onInput="onInput({ val: $event, i })"
        >
        </my-input>
      </div>
      <hr />
      <button class="btn btn-primary" :disabled="disabled">Send data</button>
      <div v-if="disabled" class="d-inline alert alert-danger error">
        <span v-if="validValCnt!==info.length"> * Fill the form</span>
        <span v-if="!lengthCart"> * Add product to cart</span>
      </div>
    </form>
  </transition>
</template>

<script>
import myInput from "./myInput.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      info: "checkout/info",
      validValCnt: "checkout/validValCnt",
      lengthCart: "cart/lengthCart",
    }),
    progress() {
      return { width: (this.validValCnt / this.info.length) * 100 + "%" };
    },
    disabled() {
      return !(this.lengthCart && this.validValCnt === this.info.length);
    },
  },
  methods: {
    ...mapActions({
      submit: "checkout/onSubmit",
      onInput: "checkout/updValue",
      clear: "cart/clear",
    }),
    onSubmit() {
      this.submit();
      this.$router.push("/finish");
      this.clear();
    },
  },
  components: {
    myInput,
  },
};
</script>
    
<style scoped>
  .error{
    margin-left: 3%;
  }
</style>