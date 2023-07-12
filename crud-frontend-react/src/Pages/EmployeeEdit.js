import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export function EmployeeEdit(props) {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:7255/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
            }
            );
    }, {});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7255/api/Employee/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/home');

        // alert(employee);
    }
    return (
        <form onSubmit={handleSubmit} className='gcontainer form-addemp'>
            <label>code:</label>
            <input
                type="text"
                name="id"
            value={employee.id || ""}
            onChange={handleChange}
                    />
            <br />            <label>name:</label>
            <input
                type="text"
                name="name"
                value={employee.name || ""}
                onChange={handleChange}
            />
            <br />            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={employee.email || ""}
                onChange={handleChange}
            />
            <br />            <label>Department:</label>
            <input
                type="text"
                name="department"
                value={employee.department || ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
    );
} export default EmployeeEdit