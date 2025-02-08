import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      ///we need it for initial render when there is no resize done so no event is bubbled on the windo
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
      //   if (media.matches !== matches) {
      //     setMatches(media.matches);
      //   }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
