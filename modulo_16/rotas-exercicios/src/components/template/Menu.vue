<template>
	<div>
		<nav class="menu">
			<ul>
				<router-link
					to="/"
					tag="li"
					active-class="active"
                    exact
				>
					<a>Início</a>
				</router-link>

				<router-link
					to="/usuario"
					tag="li"
					active-class="active"
				>
					<a>Usuário</a>
				</router-link>


			</ul>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>