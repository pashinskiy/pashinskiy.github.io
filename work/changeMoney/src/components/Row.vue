<template>
  <tr>
    <td>{{ valute.CharCode }}</td>
    <td>{{ valute.Nominal }}</td>
    <td :style='`color: ${color}`'>
      {{ value }}({{ diff }})
    </td>
  </tr>
</template>

<script>
export default {
    props:['valute'],
    computed: {
      value(){
        return this.form_00(this.valute.Value);
      },
      diff(){
        return this.form_00(this.valute.Value - this.valute.Previous);
      },
      color() {
        return this.diff > 0 ? 'green' : (this.diff < 0 ? 'red' : '');
      }
    },
    methods:{
      form_00(value) {
        return (Math.trunc(value*100)/100).toFixed(2);
      }
    }
};
</script>


<style scoped>
  td{
    width: 40%;   
    padding: 8px 16px;
    text-align: center; 
  }
  td:first-child{
    width: 20%;
  }
</style>