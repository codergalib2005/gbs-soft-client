import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyCertifications from '../MyCertifications';
import MyCourses from '../MyCourses';
import MyProfile from '../MyProfile';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MyProfile />} />
                <Route path='myProfile' element={<MyProfile />} />
                <Route path='myCourse' element={<MyCourses />} />
                <Route path='myCertifications' element={<MyCertifications />} />
            </Routes>
        </div>
    );
};

export default Content;