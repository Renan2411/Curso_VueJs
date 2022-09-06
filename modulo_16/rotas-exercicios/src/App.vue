<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>

		<router-view name="menu"></router-view>

		<transition
			appear
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut"
			mode="out-in"
		>
			<router-view></router-view>
		</transition>

		<input type="text" :value="texto">
		<span>texto: {{texto}}</span>

	</div>
</template>

<script>
export default {
	data(){
		return {
			texto: 'renan'
		}
	}
};
</script>

<style>
#app {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
