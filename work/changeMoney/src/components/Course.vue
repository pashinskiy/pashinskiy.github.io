<template>
  <div>
      <h1 class="big_f">
        Курс валют на {{date}}
      </h1>

      <div class="t_header secondary">
        <p class="p_8_16">Код</p>
        <p class="p_8_16">Единиц</p>
        <p class="p_8_16">Курс</p>
      </div>

      <div class="t_body none_scroll">
        <table>
          <tbody>
            <Row 
              v-for="valute in valutes"
              :key='valute.ID'
              :valute='valute'
            />
          </tbody>
        </table>
      </div>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Row from './Row'

export default {
  components:{
    Row,
  },
  computed:{
    ...mapGetters([
      'getDate',
      'valutes'
    ]),
    date() {
      let date = new Date(Date.parse(this.getDate));

      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let mounth = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
      let year = date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear();

      return day + '.' + mounth + '.' + year;
    }
  }
};
</script>


<style scoped>
  h1{
    margin-left: 16px;
    margin-top: 32px;
  }
  .t_header{
    width: 100%;
    margin-top: 16px;
    box-shadow: 0px 1px 0px #D8D8D8;
  }
  .t_header p{
    display: inline-block;
    width: 40%;
    text-align: center;
  }
  .t_header p:first-child{
    width: 20%;
  }
  .t_body{
    height: 295px;
  }
  table{
    width: 100%;
    margin-bottom: 32px;
  }

</style>
