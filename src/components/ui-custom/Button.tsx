
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full btn-hover-effect focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-purple text-white hover:bg-brand-purple/90 focus:ring-brand-purple",
    secondary: "bg-white text-brand-purple border border-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple",
    outline: "bg-transparent border border-brand-purple text-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple",
    ghost: "bg-transparent text-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
