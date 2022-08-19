import React, { useState } from 'react';
import styles from './header.module.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { BiLogInCircle, BiLock } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

const menus = [
    {
        link: "home",
        name: "Home",
    },
    {
        link: "about",
        name: "About",
    },
    {
        link: "teams",
        name: "Teams",
    },
    {
        link: "support",
        name: "Support",
    },
    {
        link: "blogs",
        name: "Blogs",
    },
    {
        link: "courses",
        name: "Courses"
    }
]

const Header = () => {
    const [openToggle, setOpenToggle] = useState(false);
    return (
        <div className={styles.header + " no-select"}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="Images" />
                </div>
                <div className={styles.menus}>
                    <ul>
                        {
                            menus.map((menu, index) => {
                                return <li key={index}><Link to={`/${menu.link}`}>{menu.name}</Link></li>
                            })
                        }
                    </ul>
                    <div className={styles.buttons}>
                        <Link to="/login"><button className={styles.login}><BiLogInCircle /> Login</button></Link>
                        <Link to="/register"><button className={styles.login}><BiLock /> Register</button></Link>
                        <div className={styles.profile_button_parent}>
                            <motion.button
                                onClick={() => setOpenToggle(!openToggle)}
                                whileTap={{ scale: 0.9 }}
                                className={styles.profile_button}>
                                <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                            </motion.button>
                            <AnimatePresence>
                                {openToggle && <motion.div
                                    initial={{ opacity: 0.4, visibility: "hidden", transition: 0.5 }}
                                    animate={{ opacity: 1, visibility: "visible", transition: 0.5 }}
                                    exit={{ opacity: 0.4, visibility: "hidden", transition: 0.5 }}
                                    className={styles.menus} onClick={() => setOpenToggle(false)}>
                                    <div className={styles.toggle_buttons}>
                                        <div className={styles.toggle_button}>
                                            <Link to="/profile">Profile</Link>
                                        </div>
                                        <div className={styles.toggle_button}>
                                            <Link to="/user/dashboard">Dashboard</Link>
                                        </div>
                                        <div className={styles.toggle_button}>
                                            <Link to="/profile">My Courses</Link>
                                        </div>
                                        <div className={styles.toggle_button}>
                                            <Link to="/profile">Documents</Link>
                                        </div>
                                    </div>
                                </motion.div>}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}></div>
            </div>
        </div>
    );
};

export default Header;