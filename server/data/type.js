const types = [
  { name: "Normal", color: "168 168 120" },
  { name: "Fire", color: "240 128 48" },
  { name: "Fighting", color: "192 48 40" },
  { name: "Water", color: "104 144 240" },
  { name: "Flying", color: "168 144 240" },
  { name: "Grass", color: "120 200 80" },
  { name: "Poison", color: "160 64 160" },
  { name: "Electric", color: "240 208 48" },
  { name: "Ground", color: "224 192 104" },
  { name: "Psychic", color: "248 88 136" },
  { name: "Rock", color: "184 160 56" },
  { name: "Ice", color: "152 216 216" },
  { name: "Bug", color: "168 184 32" },
  { name: "Dragon", color: "112 56 248" },
  { name: "Ghost", color: "112 88 152" },
  { name: "Dark", color: "139 137 137" },
  { name: "Steel", color: "184 184 208" },
  { name: "Fairy", color: "238 153 172" }
];

const weaknesses = [
  { type: "Normal", weakness: "Fighting" },
  { type: "Fire", weakness: "Ground" },
  { type: "Fire", weakness: "Rock" },
  { type: "Fire", weakness: "Water" },
  { type: "Fighting", weakness: "Fairy" },
  { type: "Fighting", weakness: "Flying" },
  { type: "Fighting", weakness: "Psychic" },
  { type: "Water", weakness: "Electric" },
  { type: "Water", weakness: "Grass" }
];

const resistances = [
  { type: "Fire", resistance: "Bug" },
  { type: "Fire", resistance: "Fairy" },
  { type: "Fire", resistance: "Fire" },
  { type: "Fire", resistance: "Grass" },
  { type: "Fire", resistance: "Ice" },
  { type: "Fire", resistance: "Steel" },
  { type: "Fighting", resistance: "Bug" },
  { type: "Fighting", resistance: "Dark" },
  { type: "Fighting", resistance: "Rock" },
  { type: "Water", resistance: "Fire" },
  { type: "Water", resistance: "Ice" },
  { type: "Water", resistance: "Steel" },
  { type: "Water", resistance: "Water" }
];

const immunities = [{ type: "Normal", immunity: "Ghost" }];

module.exports = {
  types,
  weaknesses,
  resistances,
  immunities
};
