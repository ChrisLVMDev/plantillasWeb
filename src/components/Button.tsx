import React from 'react';

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  // Usamos nombres de colores de Tailwind para que sea fácil de mapear
  color?: 'black' | 'blue' | 'red' | 'green';
  isloading?: boolean;
}

export const Button = ({ name, color = 'black', isloading, children, className = '', ...props }: buttonProps) => {
  
  // Mapeo de colores: Tailwind necesita las clases completas para detectarlas
  const colorVariants = {
    black: 'bg-gray-900 hover:bg-gray-800 focus:ring-gray-900',
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600',
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-600',
    green: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-600',
  };

  return (
    <button 
      className={`
        inline-flex items-center justify-center font-medium rounded-md 
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
        disabled:opacity-50 disabled:pointer-events-none text-white 
        text-sm px-4 py-2 sm:text-base sm:px-5 sm:py-2.5 md:px-6 md:py-3
        ${colorVariants[color]} ${className}
      `}
      disabled={isloading || props.disabled}
      {...props}
    >
      {children || name}
    </button>
  );
};