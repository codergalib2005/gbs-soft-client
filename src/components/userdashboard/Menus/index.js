import React from 'react';
import styles from './Menus.module.css';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const Menus = () => {
    const menus = [
        {
            link: "myProfile",
            icon: <CgProfile />,
            name: "My Profile"
        },
        {
            link: "myCourse",
            icon: <CgProfile />,
            name: "My Courses"
        },
        {
            link: "myCertifications",
            icon: <CgProfile />,
            name: "Certifications"
        }
    ]
    return (
        <div className={styles.sidebar}>
            {
                menus.map((menu, index) => {
                    return (
                        <Link key={index} to={`/user/dashboard/${menu.link}`}> <span>{menu.icon}</span> {menu.name}</Link>
                    )
                })
            }
        </div>
    );
};

export default Menus;