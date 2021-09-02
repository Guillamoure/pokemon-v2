const pokemon = [
  {
    name: "Cutiefly",
    national_pokedex_num: "742",
    base_hp: 40,
    base_attack: 45,
    base_defense: 40,
    base_special_attack: 55,
    base_special_defense: 40,
    base_speed: 84,
    height: "0'04\"",
    weight: 0.4,
    custom: false,
    growth_rate: "Medium Fast",
    genus: "Bee Fly Pokemon",
    base_experience: 61,
    type1: "Bug",
    type2: "Fairy",
    type3: null,
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    back_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/742.png",
    front_sprite_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/742.png",
    back_sprite_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/742.png",
    official_artwork:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png",
    icon: "https://archives.bulbagarden.net/media/upload/3/3d/742MS6.png"
  }
];

const species = [
  {
    name: "Cutiefly",
    base_happiness: 70,
    catch_rate: 190,
    gender_rate: 4,
    evolves_from_species: null
  }
];

module.exports = { pokemon, species };
