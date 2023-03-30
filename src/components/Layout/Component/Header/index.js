import React from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
    return (
        <header className={clsx(styles.header)}>
            <div className={clsx(styles.container)}>Header</div>
        </header>
    );
}

export default Header;
