PokemonOption:
 
<template>
  <div class="options-container">
    <ul>
        <li>Pokemon1</li>
        <li>Pokemon2</li>
        <li>Pokemon3</li>
        <li>Pokemon4</li>
    </ul>
  </div>
</template>
 
<script>
export default {
 
}
</script>
 
<style scoped>
ul {
    list-style-type: none;
}
 
li {
    background: #46c37a;
    border-radius: 5px;
    border: 1px solid skyblue;
    cursor: pointer;
    margin-bottom: 10px;
    width: 150px;
}
 
.options-container {
    display: flex;
    justify-content: center;
}
 
li:hover {
    background: lemonchiffon;
}
</style>