<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />

    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />

    <label for="id_edad">Edad:</label>
    <input v-model="nuevoEdad" id="id_edad" type="number" />

    <label for="id_curso">Curso:</label>
    <input v-model="nuevoCurso" id="id_curso" type="text" />

    <button v-on:click="agregarEstudiante()">Agregar</button>
    <div>
      <button v-on:click="obtenerPathVariable()">Obtener</button>

    </div>
    
    
    <ul>
      <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
      <li
        v-for="{ nombre, apellido, genero, edad, curso } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Genero: {{ genero }} -
        Edad {{ edad }} - Curso {{ curso }}
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      lista: [
        {
          nombre: "David",
          apellido: "Boada",
          genero: "M",
          edad: 25,
          curso: "Vue",
        },
        {
          nombre: "Juan",
          apellido: "Pérez",
          genero: "M",
          edad: 30,
          curso: "React",
        },
        {
          nombre: "Pedro",
          apellido: "Gómez",
          genero: "M",
          edad: 28,
          curso: "Angular",
        },
        {
          nombre: "María",
          apellido: "López",
          genero: "F",
          edad: 22,
          curso: "Vue",
        },
        {
          nombre: "Ana",
          apellido: "Martínez",
          genero: "F",
          edad: 27,
          curso: "React",
        },
        {
          nombre: "Luis",
          apellido: "Fernández",
          genero: "M",
          edad: 35,
          curso: "Angular",
        },
        {
          nombre: "Jose",
          apellido: "Ramirez",
          genero: "M",
          edad: 40,
          curso: "Vue",
        },
      ],
    };
  },
  //metodos
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        genero: this.nuevoGenero,
        edad: this.nuevoEdad,
        curso: this.nuevoCurso,
      };
      //agregar un nuevo estudiante a la lista
      this.lista.unshift(nuevo);
      // this.lista.push(nuevo);
    },
    obtenerPathVariable(){
       const apellido = this.$route.params.apellido;
      console.log("Apellido: " + apellido);

      const anio = this.$route.query.anio;
      console.log("Año: " + anio);
      const mes = this.$route.query.mes;
      console.log("Mes: " + mes);
    }
  },
};
</script>
 
<style scoped >
.container {
  background: white;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px 50px;
  padding: 35px 80px 40px 40px;
  display: flex;
  flex-direction: column;
}

label {
  display: block;
  text-align: left;
  padding: 5px;
}
input {
  background: #4e91f9;
  color: #fff;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;

  border: 1px solid #ddd;
  padding: 10px 15px;
}

button {
  background: #4e91f9;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  width: 200px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  margin-top: 50px;
}

li {
  background: #d0e6fd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 25px;
}
</style>