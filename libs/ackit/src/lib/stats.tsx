import React from 'react';

type StatProps = {
  name: string;
  value: number;
  unit?: string;
};

export function Stat(props: StatProps) {
  return (
    <div key={props.name} className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
      <p className="text-sm font-medium leading-6 text-gray-400">
        {props.name}
      </p>
      <p className="mt-2 flex items-baseline gap-x-2">
        <span className="text-4xl font-semibold tracking-tight text-white">
          {props.value}
        </span>
        {props.unit ? (
          <span className="text-sm text-gray-400">{props.unit}</span>
        ) : null}
      </p>
    </div>
  );
}

export function StatsRow(props: React.PropsWithChildren) {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
