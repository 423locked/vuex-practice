<template>
	<div>

		<app-header></app-header>

		<app-content></app-content>

	</div>
</template>

<script>
	import AppContent from './components/ContentComponent'
	import AppHeader from './components/HeaderComponent'


	export default {
		components: {
			AppContent, 
			AppHeader
		},
		data(){
			return{
				  
			}
		}
	}
</script>