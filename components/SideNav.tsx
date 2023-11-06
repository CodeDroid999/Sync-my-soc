import React from 'react';
import HeyUser from './HeyUser';
import Link from 'next/link';

const SideNav: React.FC = () => {
    return (
        <div style={{ margin: 0 }} className="bg-orange-400">
            <div className="bg-orange-100 " style={{ listStyleType: 'none', margin: 0, padding: 0, width: '25%', position: 'fixed', height: '100%', overflow: 'auto' }}>
                <div className="w-full">
                    <HeyUser />
                </div>
                <div className="bg-orange-100 w-100" >
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Accounts
                    </Link>
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Followers
                    </Link>
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Privacy policy                    </Link>
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="p-2 bg-blue-200   flex items-center group text-sm border-white hover:bg-orange-300 mb-1"
                    >
                        Home
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SideNav;
