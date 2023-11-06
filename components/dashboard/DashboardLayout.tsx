import Dashboard from '@/app/dashboard/page';
import React from 'react';
import DeployButton from '../DeployButton';
import SideNav from '../SideNav';
import AccountsCard from './AccountsCard';
import MainCore from './MainCore';

const DashboardLayout: React.FC = () => {
  return (
    <div className="w-full flex  border-b bg-blue-800">
      <div className='h-full'>
        <SideNav />
      </div>
      <div className="flex-grow h-full bg-red"> {/* Adjust the width as needed */}
        <MainCore />
      </div>
    </div>
  );
};

export default DashboardLayout;
