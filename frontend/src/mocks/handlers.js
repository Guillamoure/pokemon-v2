import { rest } from "msw";
import { backend } from "../constants/urls";

export const handlers = [
  rest.get(backend("pokemon/132"), (req, res, ctx) => {
    return res(
      ctx.json({
        name: "Ditto",
        national_pokedex_num: 132
      })
    );
  }),
  rest.get(backend("pokemon/Ditto"), (req, res, ctx) => {
    return res(
      ctx.json({
        name: "Ditto",
        national_pokedex_num: 132
      })
    );
  })
];
