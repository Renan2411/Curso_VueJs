<template>
    <div class="task">
        <input type="text" name="task" class="inputTask" placeholder="Nova Tarefa?">
        <button class="addTask" type="submit" @click="addTask">+</button>
    </div>
</template>

<script>
import barramento from '../barramento';

export default {
    
   methods:{
       addTask($event){
           let newTask = document.querySelector('.inputTask');
           barramento.addTask({
               task: newTask.value,
               class: 'notDone'
           });
           newTask.value = "";
       }
    }
}
</script>

<style scoped>

    .task{
        margin-bottom: 30px;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    .task{
        border: 2px solid #ccc;
        display: inline-block;
        border-radius: 5px;
    }

    .inputTask{
        font-size: 1.5em;
        width: 250px;
        height: 100%;
        border:none;
        text-decoration: none;
        background-color: rgba(128, 128, 128, 0.286);
        color: white;
        /* border-radius: 10px; */
    }

    .addTask{
        border: none;
        color: white;
        margin: 0;
        height: 100%;
        padding: 4px 10px;
        background-color: rgb(66, 66, 251);
    }
</style>