import React, { useEffect, useState } from 'react';
import Header from '../../components/shared/Header';
import styles from './Course.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getCourses = async () => {
            try {
                const response = await axios.get("/course/get_courses");
                setCourses(response.data.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getCourses();
    }, []);
    console.log(courses);
    return (
        <div>
            <Header />
            <div className='courses'>
                <div className="container">
                    <div className={styles.course_wrapper}>
                        {
                            courses.map((course, index) => {
                                return (
                                    <Link key={index} to={`/course/${course._id}`}>
                                        <div className={styles.course}>
                                            <img src="https://img.freepik.com/free-psd/online-courses-banner-template_23-2149109788.jpg?w=2000" alt={course?.fields?.course_description} />
                                            <div>
                                                <h2>{course?.fields?.course_title}</h2>
                                                <h4>{course?.fields?.course_subtitle || course?.fields?.course_instractor}</h4>
                                            </div>
                                            <div>
                                                <span>{course.paid === "free" && "Free" || course.paid === "paid" && course.fee}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;