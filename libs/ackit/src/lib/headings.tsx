import React from 'react';

export function TitleHeading({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex md:ml-4 md:mt-0">{children}</div>
    </div>
  );
}
