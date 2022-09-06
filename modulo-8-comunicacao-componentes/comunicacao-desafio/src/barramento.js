import Vue from 'vue';

export default new Vue({
    methods: {
        selecionarUsuario(usuario){
            this.$emit('usuarioSelecionado', usuario);
        },
        monstrarUsuario(callback){
            this.$on('usuarioSelecionado', callback);
        }
    }
})