import React from 'react';
import Header from '../Component/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
