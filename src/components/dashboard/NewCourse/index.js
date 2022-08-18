import React, { useState } from 'react';
import styles from './newcourse.module.css';
import { IoMdAdd } from 'react-icons/io';
import axios from 'axios';

const NewCourse = () => {
    const [paid, setPaid] = useState("paid");
    const [requirements, setRequirements] = useState([]);
    const [requirement, setRequirement] = useState("");
    const [learns, setLearns] = useState([]);
    const [learn, setLearn] = useState("");
    const [data, setData] = useState({})
    // Requirements ============
    const deleteRequirement = e => {
        const filtered = requirements.filter(item => item !== e);
        setRequirements(filtered)
    }
    function addRequirment(e) {
        if (!requirement || requirements.includes(requirement)) {
            return alert("Requirement can't same or empty");
        }
        setRequirements([...requirements, requirement])
        setRequirement("");
    }
    // What you'll learn ============
    const deleteLearn = e => {
        const filtered = learns.filter(item => item !== e);
        setLearns(filtered)
    }
    function addLearn(e) {
        if (!learn || learns.includes(requirement)) {
            return alert("What you learn. can't same or empty");
        }
        setLearns([...learns, learn])
        setLearn("");
    }
    // ===================Handle Change Field
    const changeField = e => {
        const field = e.target.name;
        const value = e.target.value;
        setData({ ...data, [field]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log({
                learns,
                requirements,
                fields: data,
                paid
            })
            const response = await axios.post("/course/add_course", {
                learns,
                requirements,
                fields: data,
                paid
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={styles.add_page}>
            <form onSubmit={handleSubmit}>
                <div className={styles.input_group}>
                    <textarea onChange={changeField} name="course_title"
                        id="title" rows="3"
                        placeholder='Course title'>
                    </textarea>
                </div>
                <div className={styles.input_group}>
                    <textarea onChange={changeField} name="course_instractor"
                        id="instractor" rows="3"
                        placeholder='Course instractor'>
                    </textarea>
                </div>
                <div className={styles.input_group}>
                    <textarea onChange={changeField} name="course_description"
                        id="description"
                        rows="8" placeholder='Course Description'>
                    </textarea>
                </div>
                <div className={styles.three_col}>
                    <div className={"card " + styles.card}>
                        <select onChange={e => setPaid(e.target.value)} >
                            <option value="paid">Paid</option>
                            <option value="free">Free</option>
                        </select>
                        <input type="number" min={10} disabled={paid === "free" ?
                            true : false} placeholder='Price' name="course_price" onChange={changeField} />
                    </div>
                    <div className={"card " + styles.card}>
                        <span className={paid === "free" && styles.disabled}>Cupon Code</span>
                        <input type="number" min={10} disabled={paid === "free" ?
                            true : false} placeholder='Coupon Code' name="course_coupon_code" onChange={changeField} />
                    </div>
                    <div className={"card " + styles.card}>
                        <span className={paid === "free" && styles.disabled}>Free Price</span>
                        <input onBlur={changeField} type="number" min={10} disabled={paid === "free" ?
                            true : false} placeholder='Offer Price' name="course_offer_price" />
                    </div>
                </div>
                <div className={styles.two_col}>
                    <div className={"card " + styles.requirements}>
                        <strong>Requirements</strong>
                        <ul className={styles.requirement}>
                            {requirements.map((item, index) => {
                                return (
                                    <li onClick={() => deleteRequirement(item)} key={index}>{item}</li>
                                )
                            })}
                        </ul>
                        <div className={styles.requirement_form}>
                            <input onChange={e => setRequirement(e.target.value)} type="text" name='requirement' value={requirement} placeholder="Requirements" />
                            <button onClick={addRequirment}><IoMdAdd /></button>
                        </div>
                    </div>
                    <div className={"card " + styles.requirements}>
                        <strong>What new learn</strong>
                        <ul className={styles.requirement}>
                            {learns.map((item, index) => {
                                return (
                                    <li onClick={() => deleteLearn(item)} key={index}>{item}</li>
                                )
                            })}
                        </ul>
                        <div className={styles.requirement_form}>
                            <input onChange={e => setLearn(e.target.value)} type="text" name='requirement' value={learn} placeholder="New Learn" />
                            <button onClick={addLearn}><IoMdAdd /></button>
                        </div>
                    </div>
                </div>
                <button type="submit" className={styles.course_add}>Add Course</button>
            </form>
        </div>
    );
};

export default NewCourse;