<template>
  <form @submit.prevent="submit">
    <h2 class="secondary">Валюта</h2>
    
    <Select
        @choiceValute='choiceValute'
    />

    <h2 class="secondary">Доступно</h2>
    <p class="big_f">
        {{ form_00(have) }} {{ code }}
    </p>

    <h2 class="secondary">Хочу</h2>

    <div 
        @click="operationBuy = true"
        :class="`btn p_8_16 ${classBuy}`"
    >
        Купить
    </div>
    <div 
        @click="operationBuy = false"
        :class="`btn p_8_16 ${classSell}`"
    >
        Продать
    </div>

    <input 
        @input="onInput"
        :value="value"
        class="p_8_16" 
        placeholder="0.000"
    />

    <h2 class="secondary">Заплачу</h2>
    <p class="big_f">
        {{ form_00(summ) }} ₽
    </p>

    <button class="btn submit p_8_16">{{ operation }}</button>
  </form>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Select from "./Select";

export default {
    components:{
        Select,
    },
    data() {
        return {
            code: null,
            operationBuy: true,
            value: '',
            posInput: null
        };
    },
    computed: {
        ...mapGetters([
            'valutes',
            'valBalance'
        ]),
        have(){
            let value = this.valBalance(this.code);
            return value;
        },
        summ(){
            let summ = 0;

            if (this.operationBuy && this.code) {
                summ = this.value/this.valutes[this.code].Nominal*this.valutes[this.code].Value;
            }
            return summ;
        },
        

        //классы и настройки html элементов
        operation(){
            return this.operationBuy ? 'Купить' : 'Продать';
        },
        classBuy(){
            return this.operationBuy ? 'active' : '';
        },
        classSell(){
            return this.operationBuy ? '' : 'active';
        },
    },
    methods: {
        ...mapActions([
            'changeBalans',
        ]),
        choiceValute(code){
            this.code = code;
        },
        form_00(value) {
            return (Math.trunc(value*100)/100).toFixed(2);
        },
        //обработка input
        onInput(e){
            this.posInput = e.target.selectionEnd;
            let prev = this.value;
            this.value = e.target.value == '.' ? '0.' : e.target.value;
            if (this.value == '0.') this.posInput++;

            if (isNaN(this.value) || /[\s,e]+/.test(this.value)) {
                this.value = prev;
                this.posInput--;
                if (this.value[this.posInput] == '.') {
                    this.posInput++;
                }
            }

            this.value = this.form_00(this.value);
            setTimeout(() => {
                e.target.setSelectionRange(this.posInput,this.posInput);
            }, 0);
        },

        //обработка submit
        submit(){
            // проверка заполненых полей
            if (+this.value == 0 || !this.code) {
                alert('Ошибка ввода данных'); 
                return;
            }

            //проверка номинала

            if (this.value % this.valutes[this.code].Nominal) {
                alert(`Введите другое количество. \nНоминал валюты: ${ this.valutes[this.code].Nominal}`); 
                return;
            }

            // проверка достаточности средств
            if (this.operationBuy) {
                if (this.summ > this.valBalance('RUR')) {
                    alert('Недостаточно средств'); 
                    return;
                }

                this.changeBalans({
                    inCode: this.code,
                    inValue: this.value,
                    outCode: 'RUR',
                    outValue: this.summ,
                });
            }
            else{
                // проверка достаточности средств
                if (this.value > this.have) {
                    alert('Недостаточно средств'); 
                    return;
                }

                this.changeBalans({
                    inCode: 'RUR',
                    inValue: this.value/this.valutes[this.code].Nominal*this.valutes[this.code].Value,
                    outCode: this.code,
                    outValue: this.value,
                });                
            }
        }
    },
};
</script>


<style scoped>
form {
    padding: 16px;
    background: #f6f6f6;
    position: relative;
}
h2 {
     margin-top: 16px;
}
p {
     margin-top: 8px;
}
.btn{
    width: 50%;
    display: inline-block;
    margin-top: 8px;
    text-align: center;
    background: white;
    border: 1px solid #D8D8D8;
    font-weight: 700;
}
.active{
    color: #34AAF2;
}
input{
    width: 100%;
    margin-top: 8px;
    border: 1px solid #D8D8D8;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
input:focus{
    outline: none;
}
.submit{
    width: 100%;
    background: #00B956;
    color: white;
    margin: 16px 0;
}
.submit:focus{
    outline: none;
}
</style>
