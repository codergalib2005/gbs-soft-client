import React from 'react';
import styles from './Style.module.css';
import { BiMessageRounded } from 'react-icons/bi';
import { AiFillHeart, AiOutlineGift } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='container'>
            <div className={styles.header_wrapper}>
                <div></div>
                <div className={styles.header_ride_side}>
                    <div className={styles.icon_buttons}>
                        <motion.button
                            whileTap={{ opacity: 0.7, scale: 0.9, transition: 0.5 }}
                        ><AiFillHeart />
                        </motion.button>
                        <motion.button
                            whileTap={{ opacity: 0.7, scale: 0.9, transition: 0.5 }}
                        ><AiOutlineGift />
                        </motion.button>
                        <motion.button
                            whileTap={{ opacity: 0.7, scale: 0.9, transition: 0.5 }}
                        ><BiMessageRounded />
                        </motion.button>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9, opacity: 0.5, transition: 0.5 }}
                        className={styles.profile_image_button}>
                        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Header;