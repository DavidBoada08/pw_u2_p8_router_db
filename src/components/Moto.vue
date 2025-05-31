<template>
  <div>
    <h1>Motos List</h1>

    <div class="container">
      <div v-show="mostar">
        <h1>{{mensajeFinal}}</h1>
      </div>
      <label for="id_marca">Marca:</label>
      <input v-model="nuevaMarca" id="id_marca" type="text" />
      <span v-if="mensaje.marca"> {{ mensaje.marca }}</span>
      <label for="id_modelo">Modelo:</label>
      <input v-model="nuevoModelo" id="id_modelo" type="text" />
      <span v-if="mensaje.modelo">{{ mensaje.modelo }}</span>

      <label for="id_anio">Año:</label>
      <input v-model="nuevoAnio" id="id_anio" type="text" />

      <label for="id_cilindraje">Cilindraje:</label>
      <input v-model="nuevoCilindraje" id="id_cilindraje" type="number" />

      <label for="id_color">Color:</label>
      <input v-model="nuevoColor" id="id_color" type="text" />

      <button v-on:click="agregarMoro()">Agregar</button>

      <table border="1" class="moto-table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Cilindraje</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ marca, modelo, anio, cilindraje, color } in lista"
            :key="marca + modelo + anio"
          >
            <td>{{ marca }}</td>
            <td>{{ modelo }}</td>
            <td>{{ anio }}</td>
            <td>{{ cilindraje }}</td>
            <td>{{ color }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lista: [
        {
          marca: "Yamaha",
          modelo: "FZ",
          anio: 2020,
          cilindraje: 150,
          color: "Rojo",
        },
        {
          marca: "Honda",
          modelo: "CBR500R",
          anio: 2022,
          cilindraje: 500,
          color: "Negro",
        },
        {
          marca: "Suzuki",
          modelo: "GSX-R600",
          anio: 2019,
          cilindraje: 600,
          color: "Azul",
        },
        {
          marca: "Kawasaki",
          modelo: "Ninja 400",
          anio: 2021,
          cilindraje: 400,
          color: "Verde",
        },
        {
          marca: "BMW",
          modelo: "G310R",
          anio: 2023,
          cilindraje: 310,
          color: "Blanco",
        },
      ],
      mostar: false,
      marcaMensaje: false,
      modeloMensaje: false,
      mensaje: {
        marca: null,
        modelo: null,
      },
      nuevaMarca: "",
      nuevoModelo: "",
      nuevoAnio: "",
      nuevoCilindraje: "",
      nuevoColor: "",
    };
    mensajeFinal:null;
  },
  methods: {
    agregarMoro() {
      if (!this.validarEntradas()) {
        const nuevo = {
          marca: this.nuevaMarca,
          modelo: this.nuevoModelo,
          anio: this.nuevoAnio,
          cilindraje: this.nuevoCilindraje,
          color: this.nuevoColor,
        };

        return;
      }

      const nuevaMoto = {
        marca: this.nuevaMarca,
        modelo: this.nuevoModelo,
        anio: this.nuevoAnio,
        cilindraje: this.nuevoCilindraje,
        color: this.nuevoColor,
      };
      this.lista.unshift(nuevaMoto);

      this.nuevaMarca = "";
      this.nuevoModelo = "";
      this.nuevoAnio = "";
      this.nuevoCilindraje = "";
      this.nuevoColor = "";
    },
    validarEntradas() {
      try {
        let  validar = this.mensaje.primero;
      let numero= 0;
      if (this.nuevaMarca === "") {
        this.mensaje.marca = "Marca es obligatorio";
        
      } else {
        numero ++;
      }
      if (this.nuevoModelo === "") {
        this.mensaje.modelo = "Modelo es obligatorio";
        return false;
      } else {
       numero ++;
      }
      if(numero === 2) {
        return true;
      }
      return false;
    }catch(error) {
      console.error("Error al agregar la moto:");
      console.error(error);
      this.mostrar = true;
      this.mensajeFinal = "Error al agregar la moto. Por favor, inténtelo de nuevo más tarde.";
    }
  },
}
};
</script>

<style>
body {
  background: #f4f7fa;
}

.container {
  background: #fff;
  border: none;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-radius: 18px;
  max-width: 900px;
  margin: 50px auto;
  padding: 40px 50px 50px 50px;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  color: #2d6cdf;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

label {
  display: block;
  text-align: left;
  padding: 5px 0 2px 2px;
  font-weight: 600;
  color: #2d6cdf;
  letter-spacing: 1px;
}
input {
  background: #f0f4fa;
  color: #222;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 18px;
  border: 1.5px solid #b3c6e7;
  padding: 12px 18px;
  font-size: 16px;
  transition: border 0.2s;
}
input:focus {
  border: 2px solid #4e91f9;
  outline: none;
  background: #eaf2fb;
}

button {
  background: linear-gradient(90deg, #4e91f9 0%, #2d6cdf 100%);
  color: #fff;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  width: 220px;
  margin: 10px auto 30px auto;
  box-shadow: 0 2px 8px rgba(46, 91, 255, 0.08);
  transition: background 0.2s, transform 0.2s;
}
button:hover {
  background: linear-gradient(90deg, #2d6cdf 0%, #4e91f9 100%);
  transform: translateY(-2px) scale(1.03);
}

.moto-table {
  width: 100%;
  margin-top: 30px;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 19px;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.09);
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
}
.moto-table th,
.moto-table td {
  padding: 16px 12px;
  text-align: center;
}
.moto-table th {
  background: linear-gradient(90deg, #4e91f9 0%, #2d6cdf 100%);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-bottom: 3px solid #b3c6e7;
  letter-spacing: 1px;
}
.moto-table tr {
  transition: background 0.2s;
}
.moto-table tr:nth-child(even) {
  background: #f7faff;
}
.moto-table tr:nth-child(odd) {
  background: #eaf2fb;
}
.moto-table tr:hover {
  background: #d0e6fd;
}

.bVER {
  background: linear-gradient(90deg, #2d6cdf 0%, #4e91f9 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 2px 8px rgba(46, 91, 255, 0.08);
  transition: background 0.2s, transform 0.2s;
}
.bVER:hover {
  background: linear-gradient(90deg, #4e91f9 0%, #2d6cdf 100%);
  transform: scale(1.07);
}
</style>