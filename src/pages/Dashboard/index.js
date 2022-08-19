import React from 'react';
import Body from '../../components/dashboard/Body';
import Sidebar from '../../components/dashboard/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Sidebar />
                <Body />
            </div>
        </div>
    );
};

export default Dashboard;