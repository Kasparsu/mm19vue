<template>
    <div>
        <button class="button is-warning" @click="isActive=true">Kitten 1</button>
        <button class="button is-warning" @click="isActive2=true">Kitten 2</button>
        <modal v-show="isActive" @close="isActive=false">
            <img src="http://placekitten.com/g/200/300">
        </modal>
         <modal v-show="isActive2" @close="isActive2=false">
            <img src="http://placekitten.com/g/300/400">
        </modal>
    </div>
</template>

<script>
import Modal from './Modal.vue';
export default {
    components: {
        'modal': Modal
    },
    data(){
        return {
            isActive: false,
            isActive2: false
        }
    }
}
</script>

<style>

</style>