import {
  Archive,
  Layout,
  Clipboard,
  User,
  SlidersHorizontal,
  CircleDollarSign,
} from 'lucide-react';

export const links = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Layout,
  },
  {
    label: 'Inventory',
    href: '/inventory',
    icon: Archive,
  },
  {
    label: 'Products',
    href: '/products',
    icon: Clipboard,
  },
  {
    label: 'Users',
    href: '/users',
    icon: User,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: SlidersHorizontal,
  },
  {
    label: 'Expenses',
    href: '/expenses',
    icon: CircleDollarSign,
  },
] as const;
