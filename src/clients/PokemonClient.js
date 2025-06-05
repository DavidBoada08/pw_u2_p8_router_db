import axios from 'axios';
const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(respuesta => respuesta.data)
    return respuesta;
}
const obtenerObjetoPokemon = async (id) => {
    const data = await consumirPokemon(id);
    console.log(data);
    const pokemon = {
        nombre: data.name,
        id: data.id
    }
    return pokemon;
}
const obtenerArregloNumerico = async (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = await obtenerPokemonAleatorio(1, 600);
    }
    return vector;
}
function obtenerPokemonAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const obtenerArregloPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        let pokemon = await obtenerObjetoPokemon(numero);
        vector.push(pokemon);
    }
    return vector;
}
const obtenerPokemon = async (id) => {
    const vector = await obtenerArregloNumerico(id);
    const vectorObjetos = await obtenerArregloPokemon(vector);
    return vectorObjetos;
}

// funciones fachada

export const obtenerOpcionesFachada = async (longitud) => {
    return await obtenerPokemon(longitud);
}

