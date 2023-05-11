import React from 'react';

export function DefaultLayout({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}

export function PaddedLayout({ children }: React.PropsWithChildren) {
  return <div className="px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function ConstrainedPaddedLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

export function NarrowLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  );
}

export function MainContentLayout({ children }: React.PropsWithChildren) {
  return <div className="xl:pl-72">{children}</div>;
}

export function FunctionRowHeader({ children }: React.PropsWithChildren) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
