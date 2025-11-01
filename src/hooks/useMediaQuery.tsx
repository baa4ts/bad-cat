import * as React from 'react';

/**
 * Hook para detectar si la pantalla es menor a un ancho dado.
 */
export function useMediaQuery(breakpoint: number = 768) {
  const [matches, setMatches] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const query = `(max-width: ${breakpoint - 1}px)`;
    const mql = window.matchMedia(query);

    const onChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mql.matches);

    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);

  return !!matches;
}
