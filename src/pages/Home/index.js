import React from 'react';
import Banner from '../../components/home/Banner';
import Header from '../../components/shared/Header';
import styles from './home.module.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
        </div>
    );
};

export default Home;