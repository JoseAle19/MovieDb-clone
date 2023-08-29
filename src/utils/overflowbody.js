/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

export const removeOverflow = ( value ) => {
  useEffect(() => {
    document.body.style.overflow = "scroll-visible";
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Asegúrate de restaurar el scroll cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [value]);
};
