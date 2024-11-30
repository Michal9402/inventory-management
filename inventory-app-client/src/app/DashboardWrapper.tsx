'use client';

import React, { useEffect } from 'react';
import { Navbar } from '@/app/(components)/Navbar';
import { Sidebar } from '@/app/(components)/Sidebar';
import StoreProvider, { useAppSelector } from './redux';
import { useSidebar } from './(hooks)/useSidebar';
import { useDarkMode } from './(hooks)/useDarkMode';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const { isSidebarCollapsed } = useSidebar();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`${
        isDarkMode ? 'dark' : 'light'
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export const DashboardWrapper = ({ children }: Props) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
