import React from 'react';
import Header from '../Component/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
