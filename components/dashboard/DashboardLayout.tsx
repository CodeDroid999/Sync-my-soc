import Dashboard from '@/app/dashboard/page';
import React from 'react';
import DeployButton from '../DeployButton';
import SideNav from '../SideNav';
import AccountsCard from './AccountsCard';

const DashboardLayout: React.FC = () => {
  return (
    <div style={{ margin: 0 }}>
      <SideNav />
      <div className='p-2' style={{ height: '1000px' }}>
        <h2>Fixed Full-height Side Nav</h2>
        <div className="row flex ">
          <div className="column flex">
            <AccountsCard />
            <AccountsCard />
            <AccountsCard />
          </div>
        </div><div className="row flex">
          <div className="colum flex-col">
            <AccountsCard />
            <AccountsCard />
            <AccountsCard />
          </div>
        </div>
        <p></p>
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white  text-blue-900  space-x-2 align-center">
        <p className="text-lg pt-2">Powered by</p>
        <DeployButton />
      </footer>
    </div>
  );
};

export default DashboardLayout;