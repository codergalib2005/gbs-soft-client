import React from 'react';
import styles from './Menus.module.css';
import { CgProfile,CgFileDocument } from 'react-icons/cg';
import { AiOutlineWeibo } from 'react-icons/ai';
import { MdOutlineExposure } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
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
            icon: <MdOutlineExposure />,
            name: "My Courses"
        },
        {
            link: "myCertifications",
            icon: <TbCertificate />,
            name: "Certifications"
        },
        {
            link: "myDocuments",
            icon: <CgFileDocument />,
            name: "My Documents"
        },
        {
            link: "forgotPassword",
            icon: <AiOutlineWeibo />,
            name: "Forgot Password"
        }
    ]
    return (
        <div className={styles.sidebar}>
            <div>
                <div className={styles.image_box}>
                    <div className={styles.profile_image_cover}>
                        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="Profile Images Cover" />
                    </div>
                </div>
                <div></div>
            </div>
            <div>
                {
                    menus.map((menu, index) => {
                        return (
                            <Link key={index} to={`/user/dashboard/${menu.link}`}> <span>{menu.icon}</span> {menu.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Menus;