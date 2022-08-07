import React from 'react';
import styles from './Enroll.module.css';
import saly3 from '../../assets/saly-3.gif';


const EnrollCourse = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.card_parent}>
                        <div className={styles.card}>
                            <div className={styles.image_cropper}>
                                Asadullah Hil Galib
                            </div>
                            <div className={styles.enroll}>
                                <button >
                                    Enroll now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image_parent}>
                        <img src={saly3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollCourse;