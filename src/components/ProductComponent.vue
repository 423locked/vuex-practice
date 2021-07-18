<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{ price }}</div>
        <hr>
        <input type="text" :value="count" @change="onInput">
        <button class="btn btn-warning" @click="decrease">-1</button>
        <button class="btn btn-success" @click="increase">+1</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        computed: mapGetters(['price', 'count']),
        methods: {
            ...mapMutations(['increase', 'decrease', 'setCount']),
            onInput(e) {
                this.setCount(e.target.value);
            }
        }
    };
</script>
