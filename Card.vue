<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="character.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <ul>
          <li>Name: {{character.name}}</li>
          <li>Gender: {{character.gender}}</li>
          <li>Species: {{character.species}}</li>
          <li>Origin: {{character.origin.name}}</li>
          <li>Location: {{character.location.name}}</li>
          <li>Status: {{character.status}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Card",
  props: ['character']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
}
</style>