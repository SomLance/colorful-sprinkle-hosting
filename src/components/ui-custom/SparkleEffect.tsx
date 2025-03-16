
import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: string;
  color: string;
  size: number;
  style: React.CSSProperties;
}

const colors = [
  '#9b26f0', // purple
  '#0ea5e9', // cyan
  '#f97316', // orange
  '#ef4444', // red
  '#f59e0b', // yellow
  '#10b981', // green
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const generateSparkle = (): Sparkle => {
  return {
    id: Math.random().toString(36).substring(2),
    color: randomColor(),
    size: Math.random() * 20 + 10,
    style: {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 2 + 1}s`,
      animationDelay: `${Math.random()}s`,
    },
  };
};

interface SparkleEffectProps {
  count?: number;
  className?: string;
}

const SparkleEffect = ({ count = 15, className = '' }: SparkleEffectProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const initialSparkles = Array.from({ length: count }, () => generateSparkle());
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles(prevSparkles => {
        const newSparkle = generateSparkle();
        return [...prevSparkles.slice(1), newSparkle];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            ...sparkle.style,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: '50%',
            backgroundColor: sparkle.color,
            opacity: 0,
            boxShadow: `0 0 10px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
