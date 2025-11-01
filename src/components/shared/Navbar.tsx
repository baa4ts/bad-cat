import { Link } from 'react-router';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu';

export const Navbar = () => {
  const movil = useMediaQuery(800); // true si es movil (<800px)

  return (
    <NavigationMenu className="fixed top-0 left-0 w-full z-50 px-6 py-3">
      <NavigationMenuList className="flex items-center justify-center mx-auto max-w-7xl gap-4">
        {/* Contenedor de botones */}
        <div className="flex gap-6 bg-slate-400/30 font-gl font-semibold backdrop-blur-md rounded-lg shadow-md px-6 py-2">
          <NavigationMenuItem>
            <Link to={'/'}>BAD CAT</Link>
          </NavigationMenuItem>

          {/* Solo se muestran en PC */}
          {!movil && (
            <>
              <NavigationMenuItem>
                <Link to={'/'}>BAD CAT</Link>
              </NavigationMenuItem>{' '}
              <NavigationMenuItem>
                <Link to={'/'}>BAD CAT</Link>
              </NavigationMenuItem>{' '}
              <NavigationMenuItem>
                <Link to={'/'}>BAD CAT</Link>
              </NavigationMenuItem>
            </>
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
