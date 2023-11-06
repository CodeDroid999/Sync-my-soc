import DeployButton from '@/components/DeployButton';
import SideNav from '@/components/SideNav';
import AccountsCard from '@/components/dashboard/AccountsCard';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-blue-700">
      <DashboardLayout/>
    </div>
  );
};

export default Dashboard;
