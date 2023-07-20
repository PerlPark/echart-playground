'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

const LinkListItem = ({ href, children }: Props) => {
  const pathname = usePathname();

  return (
    <li
      className={
        pathname === href
          ? 'font-medium text-slate-900'
          : 'text-slate-600 hover:text-slate-900'
      }
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default LinkListItem;
