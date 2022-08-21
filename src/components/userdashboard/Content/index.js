import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../ForgotPassword';
import MyCertifications from '../MyCertifications';
import MyCourses from '../MyCourses';
import MyDocuments from '../MyDocuments';
import MyProfile from '../MyProfile';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MyProfile />} />
                <Route path='myProfile' element={<MyProfile />} />
                <Route path='myCourse' element={<MyCourses />} />
                <Route path='myCertifications' element={<MyCertifications />} />
                <Route path='myDocuments' element={<MyDocuments />} />
                <Route path='forgotPassword' element={<ForgotPassword />} />
            </Routes>
        </div>
    );
};

export default Content;