import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewCourse from '../NewCourse';
import NewSection from '../NewSection';
import NewVideo from '../NewVideo';
import styles from './styles.module.css';

const Body = () => {
    return (
        <div className={styles.body}>
            <Routes>
                <Route path='newCourse' element={<NewCourse />} />
                <Route path='newSection' element={<NewSection />} />
                <Route path='newVideo' element={<NewVideo />} />
            </Routes>
        </div>
    );
};

export default Body;