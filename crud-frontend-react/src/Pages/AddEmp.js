import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function AddEmp() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
   
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmployee(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(employee);
        console.log(JSON.parse(demo));
        fetch("https://localhost:7255/api/Employee", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/ListEmp');

        
    }

    return (
        <form onSubmit={handleSubmit} className='gcontainer form-addemp' >
         
            <br />
            <label>name:</label><br />
            <input
                type="text"
                name="name"
                value={employee.name || ""}
                onChange={handleChange}
            />
            <br />
            <label>Email:</label><br />
            <input
                type="text"
                name="email"
                value={employee.email || ""}
                onChange={handleChange}
            />
            <br />
            <label>Department:</label><br />
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
}