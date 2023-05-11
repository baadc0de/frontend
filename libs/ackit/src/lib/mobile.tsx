import { Bars3Icon } from '@heroicons/react/20/solid';

interface MobileHamburgerButtonProps {
  setSidebarOpen: (open: boolean) => void;
}

export function MobileHamburgerButton(props: MobileHamburgerButtonProps) {
  return (
    <button
      type="button"
      className="-m-2.5 p-2.5 text-white xl:hidden"
      onClick={() => props.setSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
