<template>
  <div>
    <search></search>
    <button class="button" :disabled="!pagination.next" @click="next">Next</button>
    <button class="button" :disabled="!pagination.prev" @click="prev">Prev</button>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="character in characters" :key="character.id">
        <card :character="character"></card>
      </div>
    </div>

  </div>


</template>

<script>
import Joke from './Joke.vue';
import Search from "./Search";
import Card from "./Card";
import axios from "axios";
export default {
    components: {
      Card,
      Search,
        joke: Joke,

    },
    created(){
      axios.get('https://rickandmortyapi.com/api/character/').then(response => {
        console.log(response.data);
        this.characters = response.data.results;
        this.pagination = response.data.info;
      });
    },
    data(){
        return {
           characters: null,
           pagination: null
        }
    },
    methods: {
      next(){
        axios.get(this.pagination.next).then(response => {
          console.log(response.data);
          this.characters = response.data.results;
          this.pagination = response.data.info;
        });

      },
      prev() {
        axios.get(this.pagination.prev).then(response => {
          console.log(response.data);
          this.characters = response.data.results;
          this.pagination = response.data.info;
        });
      }
    }
}
</script>

<style>

</style>