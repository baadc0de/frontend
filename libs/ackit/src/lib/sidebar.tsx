import React from 'react';
import classNames from 'classnames';

export function SidebarContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
      {children}
    </div>
  );
}

type SidebarProps = {
  icon?: React.ReactNode;
  profile?: React.ReactNode;
  secondaryHeader?: React.ReactNode;
  secondary?: React.ReactNode;
};

export function DefaultSidebarIcon() {
  return (
    <img
      className="h-8 w-auto"
      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA4MC4zIDgwLjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwLjMgODAuMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlPi5zdDR7ZmlsbDojZmZmfS5zdDZ7ZmlsbDojMGMyYzQ4fS5zdDM3e2ZpbGw6Izc5ODI4N308L3N0eWxlPjxjaXJjbGUgY3g9IjQwLjIiIGN5PSI0MC4yIiByPSI0MC4yIiBzdHlsZT0iZmlsbDojZjhhMDZkIi8+PHBhdGggY2xhc3M9InN0NiIgZD0iTTM4LjYgMzQuMmgxLjNWNjBoLTEuM3oiLz48ZWxsaXBzZSBjbGFzcz0ic3Q0IiBjeD0iMjMuMSIgY3k9IjE4IiByeD0iMTAuMyIgcnk9IjQuOCIvPjxwYXRoIGQ9Ik00NiA1MS41YzAgLjQtLjQuOC0uOC44SDMzLjRjLS40IDAtLjgtLjQtLjgtLjh2LTkuOWMwLS40LjQtLjguOC0uOGgxMS45Yy40IDAgLjguNC44Ljh2OS45eiIgc3R5bGU9ImZpbGw6IzU1YWI5OSIvPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0zNC44IDQ2LjZjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xLS42LS4xLTEtLjUtMS0xLjF6TTM4LjMgNDYuNmMwLS42LjQtMS4xIDEtMS4xczEgLjQgMSAxLjFjMCAuNi0uNCAxLjEtMSAxLjEtLjYtLjEtMS0uNS0xLTEuMXpNNDEuOCA0Ni42YzAtLjYuNC0xLjEgMS0xLjFzMSAuNCAxIDEuMWMwIC42LS40IDEuMS0xIDEuMS0uNi0uMS0xLS41LTEtMS4xeiIvPjxwYXRoIGQ9Ik00NiAzNS41YzAgLjQtLjQuOC0uOC44SDMzLjRjLS40IDAtLjgtLjQtLjgtLjh2LTkuOWMwLS40LjQtLjguOC0uOGgxMS45Yy40IDAgLjguNC44Ljh2OS45eiIgc3R5bGU9ImZpbGw6I2VkNmI1YSIvPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0zNC44IDMwLjVjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xek0zOC4zIDMwLjVjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xek00MS44IDMwLjVjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xeiIvPjxwYXRoIGQ9Ik00NiA2Ny42YzAgLjQtLjQuOC0uOC44SDMzLjRjLS40IDAtLjgtLjQtLjgtLjh2LTkuOWMwLS40LjQtLjguOC0uOGgxMS45Yy40IDAgLjguNC44Ljh2OS45eiIgc3R5bGU9ImZpbGw6IzY5ODM5MSIvPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0zNC44IDYyLjZjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xek0zOC4zIDYyLjZjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xek00MS44IDYyLjZjMC0uNi40LTEuMSAxLTEuMXMxIC40IDEgMS4xYzAgLjYtLjQgMS4xLTEgMS4xcy0xLS41LTEtMS4xeiIvPjxnPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0zMC44IDMxLjFoLTVjLTIgMC0zLjctMS44LTMuNy00di0yLjdoMS40djIuN2MwIDEuNCAxIDIuNiAyLjMgMi42aDV2MS40eiIvPjwvZz48Zz48cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNjEuMyA1My4yaC0xLjR2LTNjMC0xLjMtMS0yLjMtMi4zLTIuM0g0OHYtMS40aDkuN2MyIDAgMy43IDEuNyAzLjcgMy43djN6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01My40IDU1aDE2LjN2MTBINTMuNHoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0NiIgZD0iTTU3LjYgNDUuNEg0OFY0NGg5LjdjMS4zIDAgMi4zLTEgMi4zLTIuM3YtM2gxLjR2M2MtLjEgMi0xLjcgMy43LTMuOCAzLjd6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0zMS40IDYzLjFIMTguOGMtMiAwLTMuNy0xLjgtMy43LTR2LTIuN2gxLjR2Mi43YzAgMS40IDEgMi42IDIuMyAyLjZoMTIuNnYxLjR6Ii8+PC9nPjxnPjxwYXRoIHN0eWxlPSJmaWxsOiNiZmQ5ZTYiIGQ9Ik02OC41IDM3LjZINTMuN1YyMi44aDEwbDQuOCA0LjV6Ii8+PHBhdGggY2xhc3M9InN0NCIgZD0iTTY4LjUgMjcuM2gtNC44di00LjV6Ii8+PHBhdGggY2xhc3M9InN0MzciIGQ9Ik01NS45IDI2LjJINjN2MS4yaC03LjF6TTU1LjkgMjkuNmgxMC40djEuMkg1NS45ek01NS45IDMzaDEwLjR2MS4ySDU1Ljl6Ii8+PC9nPjxnPjxwYXRoIGNsYXNzPSJzdDM3IiBkPSJNMTcuMSAxNS45aDEyLjV2MS4zSDE3LjF6TTE3LjEgMTguNGgxMi41djEuM0gxNy4xeiIvPjwvZz48Zz48cGF0aCBzdHlsZT0iZmlsbDojYTNiOWM0IiBkPSJNMjMuOCA1NS4xSDlWNDAuM2g5LjlsNC45IDQuNnoiLz48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjMuOCA0NC45SDE5di00LjZ6TTExLjIgNDMuN2g3LjF2MS4yaC03LjF6TTExLjIgNDcuMmgxMC40djEuMkgxMS4yek0xMS4yIDUwLjZoMTAuNHYxLjJIMTEuMnoiLz48L2c+PGc+PHBhdGggY2xhc3M9InN0MzciIGQ9Ik01NS44IDU3LjdoMTEuNXYxLjJINTUuOHpNNTUuOCA2MC40aDExLjV2MS4ySDU1Ljh6Ii8+PC9nPjwvc3ZnPg=="
      alt="Your Company"
    />
  );
}

export function DefaultProfile() {
  return (
    <>
      <img
        className="h-8 w-8 rounded-full bg-gray-800"
        src="https://s.gravatar.com/avatar/c4a8b90a6292e44219db14c13d1825b2?s=80&r=g"
        alt=""
      />
      <span className="sr-only">Your profile</span>
      <span aria-hidden="true">Bojan Šernek</span>
    </>
  );
}

export function Sidebar(props: React.PropsWithChildren<SidebarProps>) {
  const {
    icon = DefaultSidebarIcon(),
    profile = DefaultProfile(),
    secondaryHeader,
    secondary,
    children,
  } = props;
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
      {icon ? (
        <div className="flex h-16 shrink-0 items-center">{icon}</div>
      ) : undefined}
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {children}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              {secondaryHeader}
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {secondary}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              {profile}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

type SidebarLinkProps = {
  name: string;
  href?: string;
  current?: boolean;
  icon?: any;
};

export function SidebarLink(props: SidebarLinkProps) {
  return (
    <li key={props.name}>
      <a
        href={props.href}
        className={classNames(
          props.current
            ? 'bg-gray-800 text-white'
            : 'text-gray-400 hover:text-white hover:bg-gray-800',
          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
        )}
      >
        {props.icon ? (
          <props.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        ) : undefined}
        {props.name}
      </a>
    </li>
  );
}
