import React from 'react';

export function TextBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
      {children}
    </div>
  );
}
