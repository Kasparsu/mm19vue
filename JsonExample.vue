<template>
  <div>
    <search></search>
    <pagination :info="pagination" :currentpage="1"></pagination>
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
import Pagination from "./Pagination";
export default {
    components: {
      Pagination,
      Card,
      Search,
        joke: Joke,

    },
    created(){
      this.getPage('https://rickandmortyapi.com/api/character/');
    },
    data(){
        return {
           characters: null,
           pagination: null
        }
    },
    methods: {
      next(){
        this.getPage(this.pagination.next);
      },
      prev(){
        this.getPage(this.pagination.prev);
      },
      getPage(url){
        axios.get(url).then(response => {
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