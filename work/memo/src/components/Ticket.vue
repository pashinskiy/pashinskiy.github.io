<template>
  <div>
    <transition name="images" appear mode="out-in">
      <img v-if="open"
          key='open'
          :src="images" 
          :alt="val" 
          class="elem">
      <img v-else
        key='close'
        src="../images/question.png" 
        @click='click'
        class="elem">
    </transition>
  </div>
</template>

<script>
export default {
  props: ["val", "open"],
  computed:{
    images() {
      return require(`../images/ticket (${this.val}).png`);
    }
  },
  methods:{
    click(){
      if (this.open) return;
      this.$emit('show');
    }
  }
};
</script>

<style scoped>
.elem {
  width: 100%;  
  height: 100%;
}
.images-enter-active{
	animation: slideIn 0.2s;
}
.images-leave-active{
	animation: slideOut 0.2s;
}
@keyframes slideIn{
	from{transform: rotateY(90deg);}
	to{transform: rotateY(0deg);}
}
@keyframes slideOut{
	from{transform: rotateY(0deg);}
	to{transform: rotateY(90deg);}
}
</style>
