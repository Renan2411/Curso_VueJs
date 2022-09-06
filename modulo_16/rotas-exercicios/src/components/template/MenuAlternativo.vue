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
					<a>Start</a>
				</router-link>

				<router-link
					to="/usuario"
					tag="li"
					active-class="active"
				>
					<a>User</a>
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