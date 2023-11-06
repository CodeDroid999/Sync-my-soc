import Dashboard from '@/app/dashboard/page';
import React from 'react';
import DeployButton from '../DeployButton';
import SideNav from '../SideNav';
import AccountsCard from './AccountsCard';
import MainCore from './MainCore';

const DashboardLayout: React.FC = () => {
  return (
    <div style={{ margin: 0 }}>
      <SideNav />
      <div className='p-2' style={{ height: '1000px' }}>
        <MainCore />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white  text-blue-900  space-x-2 align-center">
        <p className="text-lg pt-2">Powered by</p>
        <DeployButton />
      </footer>
    </div>
  );
};

export default DashboardLayout;
