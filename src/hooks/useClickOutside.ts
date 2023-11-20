import { createRef, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = createRef<T>();
  useEffect(() => {
    function handleOutsideClick(ev: Event) {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, ref]);

  return ref;
}

export default useClickOutside;
