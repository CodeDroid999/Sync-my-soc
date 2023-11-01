import React from 'react';
import HeyUser from './HeyUser';

const SideNav: React.FC = () => {
    return (
        <div style={{ margin: 0 }} className="bg-orange-400">
            <div className="bg-orange-100 " style={{ listStyleType: 'none', margin: 0, padding: 0, width: '25%', position: 'fixed', height: '100%', overflow: 'auto' }}>
                <div className="w-full">
                    <HeyUser />
                </div>
                <ul className="bg-orange-100 " style={{ listStyleType: 'none', margin: 0, padding: 0, position:'fixed'}}>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
