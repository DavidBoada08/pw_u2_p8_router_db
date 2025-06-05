<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
li {
  background: white;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}
li:hover {
  background-color: #4ef3a1;
}
.options-container {
  width: 300px;
  margin: 0 auto;
}
</style>