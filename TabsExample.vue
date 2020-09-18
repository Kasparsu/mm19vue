<template>
    <tabs :titles="headers"></tabs>
</template>

<script>
import Tabs from './Tabs.vue';
export default {
    components: {
        tabs: Tabs
    }, 
    data() {
        return {
            headers: ['Games', 'Books', 'Shows', 'Music'],
        }
    }
}
</script>

<style>

</style>