import Vue from 'vue'

export default new Vue({
    methods: {
        clicarLista(usuario){
            this.$emit('selecionado', usuario)
        },

        quandoSelecionado(callback){
            this.$on('selecionado', callback)
        }
    }


})