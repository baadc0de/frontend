import React from 'react';
import { horizontalPaddingStyle } from '../common';
import classNames from 'classnames';
import { textStyle } from './typography';

type StatProps = {
  name: string;
  value: number;
  unit?: string;
};

export function Stat(props: StatProps) {
  return (
    <div
      key={props.name}
      className={classNames(
        'bg-gray-950 py-6 rounded',
        horizontalPaddingStyle()
      )}
    >
      <p className={classNames('text-sm font-medium', textStyle())}>
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
    <div className={horizontalPaddingStyle()}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
