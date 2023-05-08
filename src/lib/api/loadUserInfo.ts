import { api } from "$lib/config/api";

export async function loadUserInfo(cookies: string[]): Promise<IUserInfo> {
  return await api
    .get("/user/info", {
      withCredentials: true,
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data.user);
}
