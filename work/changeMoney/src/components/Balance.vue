<template>
  <div>
      <h1 class="big_f">
        Баланс
      </h1>
      
      <table>
        <tbody>
          <tr
            v-for="(value,code) in balance"
            :key='code'
          >
            <td >{{ code }}</td>
            <td>{{ form_00(value) }}</td>

          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'balance'
    ]),
  },
  methods: {
    form_00(value) {
      return (Math.trunc(value*100)/100).toFixed(2);
    }
  }
};
</script>


<style scoped>
  div{
    background: #F6F6F6;
    padding: 32px 16px;
  }
  table{
    margin-top: 16px;
    width: 100%;
  }
  td{
    width: 50%;
    padding: 8px 0;
  }
  td:last-child{
    text-align: right;
  }

</style>
