import { rest } from "msw";
import { getPokemonListMock } from "../utils/utils" 

export const handlers = [
  /**
   * Example of a request handler—function that captures a request
   * and declares which mocked response to return upon match.
   * @see https://mswjs.io/docs/basics/request-handler
   */
  rest.get(`${process.env.URL_SERVICE}?idAuthor=1`, (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json(getPokemonListMock)
    )
  }),

];