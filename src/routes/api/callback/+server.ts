import { api } from "$lib/config/api";
import { BACKEND_STATE } from "$env/static/private";
import type { RequestHandler } from "./$types";
import { createCookie } from "$lib/utils/apihelpers";
import { loginUser } from "$lib/api/loginUser";

export const GET = (async ({ url }) => {
  const code = url.searchParams.get("code") ?? "";

  try {
    const result = await loginUser({ code });
    const cookies = result.headers["set-cookie"];
    cookies?.push(createCookie("logged", "true"));

    const headers = new Headers();
    headers.set("location", "/");
    headers.set("set-cookie", `${cookies ?? []}`);

    if (result.status === 200) {
      return new Response(null, {
        status: 302,
        headers: headers,
      });
    }

    return new Response(null, {
      status: 302,
      headers: headers,
    });
  } catch (e) {
    return new Response(null, {
      status: 500,
    });
  }
}) satisfies RequestHandler;
