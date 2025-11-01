import { type ReactNode } from 'react';

interface PropsContenedor {
  children: ReactNode;
  className?: string;
}

export const Contenedor = ({ children, className }: PropsContenedor) => {
  return (
    <section className={['w-full sm:w-[98%] lg:w-[90%]', className].filter(Boolean).join(' ')}>
      {children}
    </section>
  );
};
