import DeployButton from '@/components/DeployButton';
import SideNav from '@/components/SideNav';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div style={{ margin: 0 }}>
      <SideNav/>
      <div style={{ marginLeft: '25%', padding: '1px 16px', height: '1000px' }}>
        <h2>Fixed Full-height Side Nav</h2>
        <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
        <p>Notice that this div element has a left margin of 25%. This is because the side navigation is set to 25% width. If you remove the margin, the sidenav will overlay/sit on top of this div.</p>
        <p>Also notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
        <p>Some text..</p>
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white  text-blue-900  space-x-2 align-center">
          <p className="text-lg pt-2">Powered by</p>
                <DeployButton />
      </footer>
    </div>
  );
};

export default Dashboard;
