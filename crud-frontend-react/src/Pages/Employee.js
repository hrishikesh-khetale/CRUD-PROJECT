import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import EmpCard from '../Components/EmpCard';


export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams()
    useEffect(() => {
        fetch("https://localhost:7255/api/Employee/" + id)
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, {});
    return (
        <div className="gcontainer">
           <EmpCard props={employee}/> 
        </div>
    );
}
export default Employee;