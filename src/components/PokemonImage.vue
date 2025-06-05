<template>
  <!-- <h1>Pokemon Image</h1> -->
  <div class="container-image">
    <img
      v-if="!mostrar"
      class="ocultar"
      :src="imagenfuente"
      alt="No se puede renderizar la imagen del pokemon"
    />
    <img
      v-if="mostrar"
      :src="imagenfuente"
      alt="No se puede renderizar la imagen del pokemon"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarImagen: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      mostrar: this.mostrarImagen,
    };
  },
  computed: {
    imagenfuente(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  },
};
</script>

<style>
.container-image {
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
img {
  height: 200px;
  margin: 0;
  display: block;
  position: static; /* Elimina el posicionamiento absoluto */
}
.ocultar {
  filter: brightness(0);
}
</style>