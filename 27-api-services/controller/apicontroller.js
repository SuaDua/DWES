import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (req, res) => {
    const { limit = 20, offset = 0 } = req.query;
    try {
        const response = await axios.get(`${BASE_URL}/pokemon`, {
            params: { limit, offset },
        });
        const names = response.data.results.map(pokemon => pokemon.name).join('\n');
        res.type('text/plain').send(names); // Enviar en texto plano
    } catch (error) {
        res.status(500).type('text/plain').send('Error al obtener la lista de Pokémon');
    }
};

export const getPokemonDetails = async (req, res) => {
    const { nameOrId } = req.params;
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${nameOrId}`);
        const details = `Name: ${response.data.name}\nHeight: ${response.data.height}\nWeight: ${response.data.weight}\nTypes: ${response.data.types.map(type => type.type.name).join(', ')}`;
        res.type('text/plain').send(details); // Enviar en texto plano
    } catch (error) {
        res.status(404).type('text/plain').send(`Pokémon no encontrado: ${nameOrId}`);
    }
};

export const getPokemonTypes = async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/type`);
        const types = response.data.results.map(type => type.name).join('\n');
        res.type('text/plain').send(types); // Enviar en texto plano
    } catch (error) {
        res.status(500).type('text/plain').send('Error al obtener los tipos de Pokémon');
    }
};