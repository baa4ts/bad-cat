import { useEffect } from 'react';

/**
 * Hook para establecer el titulo de la pag.
 */
export function useTitulo(titulo: string) {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
}
