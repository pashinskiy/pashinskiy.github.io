<template>
  <div class="container">
    <Change/>
    <Course/>
    <Balance/>
  </div>
</template>

<script>
import Change from './components/Change'
import Course from './components/Course'
import Balance from './components/Balance'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Change,
    Course,
    Balance
  },
  methods:{
    ...mapActions({
      loadData: 'loadData',
    }),
  },
  mounted(){
    this.loadData();
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');  
  *{
    font-family: 'PT Sans', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  h1,h2,p,td{
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;
  }
  .container{
    width: 100%;
    max-width: 928px;
    margin: 32px auto;
    display: flex;
    align-items: flex-start;
  }
  .container > *{
    width: 288px;
  }
  .container > *:nth-child(2){
    width: 320px;
    margin: 0 16px;
  }
  .big_f{
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
  .p_8_16{
    padding: 8px 16px;
  }
  .secondary {
    color: rgba(51, 51, 51, 0.5);
  }
  .none_scroll{
    overflow: auto;
    -ms-overflow-style: none;  /* IE 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .none_scroll::-webkit-scrollbar { /* chrome based */
    width: 0px;  /* ширина scrollbar'a */
  }
</style>
