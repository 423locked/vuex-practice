<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{ price }}</div>
        <hr>
        <input type="text" :value="count" @change="onInput">
        <button class="btn btn-warning" @click="Decrease">-1</button>
        <button class="btn btn-success" @click="Increase">+1</button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['price', 'count'])
        },
        methods: {
            ...mapActions(['Increase', 'Decrease', 'SetCount', 'SendOrder']),
            onInput(e) {
                this.SetCount(e.target.value);
            }
        }
    };
</script>
