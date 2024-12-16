const getSinglePokemon = async (id) => {
  // console.log("id :>> ", id);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  // console.log("response :>> ", response);
  const result = await response.json();
  // console.log("result :>> ", result);
  return result.name;
};

const getAllPokemons = async (maxAmount) => {
  const allPokemons = [];
  console.time("timer1");
  for (let i = 0; i < maxAmount; i++) {
    const singlePokemon = await getSinglePokemon(i + 1);
    allPokemons.push(singlePokemon);
  }
  console.log("allPokemons :>> ", allPokemons);
  console.timeEnd("timer1");
};

const getAllPokemosFaster = (maxAmount) => {
  const allPokemonsPromises = [];
  console.time("timer2");
  for (let i = 0; i < maxAmount; i++) {
    const singlePokemonPromise = getSinglePokemon(i + 1);
    // console.log("singlePokemonPromise :>> ", singlePokemonPromise);

    allPokemonsPromises.push(singlePokemonPromise);
  }
  const allPokemons = Promise.all(allPokemonsPromises).then((result) => {
    console.log("result :>> ", result);
    return result;
  });

  console.timeEnd("timer2");
};

getAllPokemons(100);
getAllPokemosFaster(100);
