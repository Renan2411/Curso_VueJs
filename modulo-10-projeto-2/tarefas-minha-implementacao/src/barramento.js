import Vue from 'vue';

export default new Vue({
    methods:{
        addTask(task){
            this.$emit('addTask', task);
        },
        whenAddTask(callback){
            this.$on('addTask', callback);
        },
        progressChange(progress){
            this.$emit('progressChange', progress);
        },
        whenProgressChange(callback){
            this.$on('progressChange', callback);
        }
    }
})