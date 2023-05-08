interface ICookieOptions {
  maxAge?: number;
  domain?: string;
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export function createCookie(
  name: string,
  value: string,
  options: ICookieOptions = {
    maxAge: 36000,
    sameSite: "strict",
    path: "/",
  }
) {
  return `${name}=${value}; ${serialize(options)}`;
}

function serialize(options: ICookieOptions) {
  const cookie = [];

  for (let [key, value] of Object.entries(options)) {
    if (key === "expires" && typeof value === "number") {
      value = new Date(Date.now() + value * 1000).toUTCString();
    }
    cookie.push(`${key}=${value}`);
  }

  return cookie.join("; ");
}

export function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return undefined;
}
