<template>
  <div class="container">
    <div v-show="mostar">
       <h1 >Estudiante Guardado</h1> 
    </div>
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
    
    
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Genero</th>
          <th>Edad</th>
          <th>Curso</th>
          <th class="action">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ nombre, apellido, genero, edad, curso } in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ genero }}</td>
          <td>{{ edad }}</td>
          <td>{{ curso }}</td>
          <th><button class="bVER">Ver</button></th>
        </tr>
      </tbody>

    </table>
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
      mostar: false,
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
      this.mostar = true;
      //this.nombre=null;     

      setTimeout(()=>{
        this.mostar = false;
      }, 3000);
    },
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
table {
    margin: 15px;
  width: 100%;
  border-collapse: collapse;
}
tbody {
  background: #d0e6fd;
  padding: 15px;
  margin-top: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 25px;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.bVER {
  background: #78aae0;
  padding: auto;
  margin:5px 0px;
  color: #333;
  font-size: 15px;
  width: auto;
}

</style>