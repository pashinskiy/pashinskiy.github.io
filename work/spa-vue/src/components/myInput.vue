<template>
    <div>
        <label>{{ name }} </label>	
                           
        <i v-if="inputCheck" class="fas animate__animated" style="margin-left:0.3em"
        :class="classValid">
        </i>

        <input type="text" class="form-control" 
                :value="value"
                @input='onInput'>
    </div>
</template>

<script>
export default {

    props: ['name','value','pattern'],

    data() {
        return {
            inputCheck: this.value != '',
            classTrueValid: 'fa-chevron-circle-down text-success animate__heartBeat',
            classFalseValid: 'fa-exclamation-circle text-danger animate__headShake',
        }
    },
    computed: {
        valid() {
            return this.pattern.test(this.value);
        },
        classValid(){
            return this.valid ? this.classTrueValid : this.classFalseValid;
        }
    },
    methods: {
        onInput(e) {
            if (!this.inputCheck) this.inputCheck = true
            this.$emit('onInput', e.target.value);
        }
    }
}
</script>