<template>
	<div id="app">
		<h1>Tarefas</h1>

		<task-progress :progress="progress" />
		<new-task @taskAdded="addTask"/>
		<task-grid :tasks="tasks" 
			@taskDeleted="deleteTask"
			@taskStateChanged="toggleTaskState"/>

	</div>
</template>

<script>
import TaskGrid from './components/TaskGrid.vue'
import NewTask from './components/NewTask.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {
  components: { TaskGrid, NewTask, TaskProgress },
	data(){
		return{
			tasks:[]
		}
	},
	watch:{
		tasks:{
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	},
	computed:{
		progress(){
			const TOTAL_TASKS = this.tasks.length;
			const DONE_TASKS = this.tasks.filter(t => !t.pending).length;

			return Math.round(DONE_TASKS / TOTAL_TASKS * 100) || 0;
		}
	},
	methods:{
		addTask(task){
			const SAME_NAME = t => t.name === task.name;

			const REALLY_NEW = this.tasks.filter(SAME_NAME).length === 0;

			if(REALLY_NEW){
				this.tasks.push({
					name: task.name,
					pending: task.pending || true,
				});
			}
		},
		deleteTask(i){
			this.tasks.splice(i, 1);
		},
		toggleTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	created(){
		const TASKS = localStorage.getItem('tasks');
		const ARRAY = JSON.parse(TASKS);

		if(Array.isArray(ARRAY)){
			this.tasks = ARRAY || [];
		}

	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>