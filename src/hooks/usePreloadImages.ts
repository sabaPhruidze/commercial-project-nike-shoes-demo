import { useEffect } from "react";

export const usePreloadImages = (urls: string[]) => {
  useEffect(() => {
    if (!urls?.length) return;
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [urls]);
};
