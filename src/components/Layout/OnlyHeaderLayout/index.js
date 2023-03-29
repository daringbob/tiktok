import React from 'react';
import Header from '../Component/Header';

function OnlyHeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default OnlyHeaderLayout;
