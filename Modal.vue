<template>
          <div class="modal is-active">
            <div class="modal-background" @click="close"></div>
            <div class="modal-content">
                <div class="card" >
                    <slot/>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="close"></button>
        </div>
</template>

<script>
export default {

    methods: {
        close(){
            this.$emit('close');
        }
    }
}
</script>

<style>

</style>