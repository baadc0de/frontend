import React from 'react';
import classNames from 'classnames';

type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  grayContent?: boolean;
};

export function ContentCard(props: React.PropsWithChildren<Props>) {
  const { header, footer, children } = props;
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      {header ? <div className="px-4 py-5 sm:px-6">{header}</div> : undefined}
      <div className={cardBodyStyle(props)}>{children}</div>
      {footer ? <div className="px-4 py-4 sm:px-6">{footer}</div> : undefined}
    </div>
  );
}

const cardBodyStyle = ({ grayContent }: Props) =>
  classNames('px-4 py-5 sm:p-6', grayContent && 'bg-gray-50');
