import { Router, Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { uniqueId } from "../services/uniqueId.ts";
import * as favsService from "../services/favs.service.ts";

function init(ctx: Context) {
  const id = ctx.request.headers.get("X-MID") ?? uniqueId();
  const favs = favsService.getFavs(id);
  ctx.response.body = { id, favs };
}

export const setupRoutes = new Router().get("/init", init);
