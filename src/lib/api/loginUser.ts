import { BACKEND_STATE } from "$env/static/private";
import { api } from "$lib/config/api";

export async function loginUser({ code }: { code: string }) {
  return await api.get("/login", {
    params: {
      code,
      state: BACKEND_STATE,
    },
  });
}
