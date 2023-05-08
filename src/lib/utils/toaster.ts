import { THEME_COLORS } from "$lib/config/consts";
import { toast } from "@zerodevx/svelte-toast";

export function SuccessfullToast(msg: string) {
  toast.push(msg, {
    theme: {
      "--toastColor": THEME_COLORS.darkerblue,
      "--toastBackground": THEME_COLORS.greenprincipal,
      "--toastBarBackground": THEME_COLORS.darkerblue,
    },
  });
}
