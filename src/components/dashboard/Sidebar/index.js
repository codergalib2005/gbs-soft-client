import React from 'react';
import styles from './sidebar.module.css';
import { sidebarMenu } from '../../../fakeData/dashboardmenu';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    return (
        <div className={styles.sidebar}>
            <ul>
                {
                    sidebarMenu.map((item, index) => {
                        return <li>
                            <Link to={`/dashboard/${item.link}`}><button className={`${pathname === "/dashboard/" + item.link && styles.active} ${styles.button}`} key={index}><span>{item.icon}</span> {item.name}</button></Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Sidebar;