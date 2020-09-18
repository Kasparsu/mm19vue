<template>
    <h1>
        {{joke}}
    </h1>
</template>

<script>
const axios = require('axios').default;
export default {
    created(){
        axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
            console.log(response);
            this.joke = response.data.value;
        });
    },
    data(){
        return {
            joke: ''
        }
    }
}
</script>

<style>

</style>