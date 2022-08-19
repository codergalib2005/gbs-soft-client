import React from 'react';
import Content from '../../components/userdashboard/Content';
import Menus from '../../components/userdashboard/Menus';
import styles from './UserDashboard.module.css';
import Header from '../../components/userdashboard/Header';
const UserDashboard = () => {
    return (
        <div>
            <Header />
            <div className={styles.user_dashboard_wrapper}>
                <div className={styles.menu_side}>
                    <Menus />
                </div>
                <div className={styles.content_side}>
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;