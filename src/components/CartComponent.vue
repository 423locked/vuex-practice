<template>
    <div>
        <div>In cart: {{ count }}</div>
        <div>Total: {{ total }}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['count', 'total'])
    }
</script>