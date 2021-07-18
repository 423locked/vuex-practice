<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product></app-product>
				</div>
			</div>
			<hr>
			<button class="btn btn-primary" type="button" @click="SendOrder">Submit Order</button>
			<hr>
			<div v-if="showAlert" class="alert" :class="alertClasses">
				{{ alertText }}
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from './ProductComponent'
	import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			AppProduct
		},
		computed: {
			...mapGetters(['status']),
			showAlert() {
				return this.status !== 'none';
			},
			alertText() {
				return (this.status === 'pending') ? 'Loading' : 'Order done';
			},
			alertClasses() {
				return {
					'alert-warning': this.status === 'pending',
					'alert-success': this.status === 'done'
				}
			}
		},
		methods: {
			...mapActions(['SendOrder'])
		}
	};
</script>