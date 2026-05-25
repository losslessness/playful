import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useLayoutEffect, useState } from "react";

const getMatches = (query: string): boolean => {
  if(global?.window && typeof window !== undefined) {
    return window.matchMedia(query).matches;
  }
  return false;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mediaQueryHandler(query: string): boolean | undefined {
  const [hasMatch, setHasMatches] = useState<boolean>(getMatches(query));
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  function handleChange() {
    setHasMatches(getMatches(query));
  }

  useLayoutEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, []);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();
    matchMedia.addEventListener("change", handleChange);
  
    return() => {
      matchMedia.removeEventListener("change", handleChange);
    }
  }, [query]);

  return initialLoad ? undefined : hasMatch;
}