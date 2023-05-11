import React from 'react';
import classNames from 'classnames';

export function TextBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={classNames(textStyle(), 'mt-1 text-sm sm:col-span-2 sm:mt-0')}
    >
      {children}
    </div>
  );
}

export function textStyle() {
  return 'leading-6 text-gray-400';
}
