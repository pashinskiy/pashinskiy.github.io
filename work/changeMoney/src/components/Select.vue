<template>
    <div>

        <p 
            :class="classes" 
            @click="toogle_show"
        >
            {{ valute }}
        </p>

        <div 
            v-if="show_option"
            class="options none_scroll"
        >
            <p 
                v-for="(valute,code) in valutes" 
                :key="code" 
                @click="choiceValute(valute,code)"
                class="p_8_16"
            >
                {{ valute.Name }}({{ code }})
            </p>
         </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    props:[''],
    data() {
        return {
            valute: '-',
            show_option: false,
        };
    },
    computed: {
        ...mapGetters(["valutes"]),
        classes(){
            return this.show_option ? 'select  big_f p_8_16 show_option' : 'select big_f p_8_16';
        },
    },
    methods: {
        toogle_show() {
            this.show_option = !this.show_option;
        },
        choiceValute(valute,code){
            this.valute = `${valute.Name}(${code})`;
            this.toogle_show();
            this.$emit('choiceValute', code);
        }
    },
};
</script>


<style scoped>
    p {
        margin-top: 8px;
    }
    .select {
    position: relative;
    background: white;
    border: 1px solid #D8D8D8;
    padding-right: 32px;
    }
    .select::before {
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translate(0, -50%) rotate(180deg);
        background: url("../assets/Mask.png") no-repeat center;
    }
    .options{
        width: calc(100% - 32px);
        height: 152px;
        position: absolute;
        background: white;
        box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.36);
    }
    .options p:first-child {
        margin-top: 0;
    }
    .options p:hover {
        background: #EDEDED;
    }
    .show_option::before {
        transform: translate(0, -50%) rotate(0deg);
    }
</style>