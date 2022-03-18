import React from 'react';
import { AppNavbar, AppFooter } from '@/components/App';

type BasicLayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div>
      <AppNavbar />
      {children}
      <AppFooter />
    </div>
  );
}

export default BasicLayout;
