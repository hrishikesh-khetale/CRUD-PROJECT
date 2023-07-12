import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function ListEmpNode() {
    let navigate = useNavigate();
    const [employees, setEmployee] = useState([]);
    const [err, setErr] = useState(false);
    useEffect(() => {
        fetch("http://localhost:6969/api/emp")
            .then(res => res.json())
            .then((result) => {
                setEmployee(result);
                console.warn(result)
            })
            .catch((err) => {
                setErr(true);
                console.warn(err)
            });
    }, []);

    const handelDelete = (id) => {
        console.log(id)
        const confirmed = window.confirm('Are you sure you want to proceed?');
        if (confirmed) {
            console.log('Confirmed');
            fetch("http://localhost:6969/api/emp/" + id, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
            }).then(r => { console.log(r) })

            navigate(0);
        } else {
            console.log('Cancelled');
        }
    }

    if (err) return (<><p className='gcontainer' >Error</p></>)
    return (<div className='gcontainer'>
        <div className='gcontainer-scr'>
            <h2>Employees Data...</h2>
            <table>
                <thead>
                    <tr className='crud-tr'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.data?.map(emp => (
                        <tr className='crud-tr' key={emp._id}>
                            <td>{emp._id}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.email}</td>
                            <td>{emp.empDepartment}</td>
                            <td className='crud-btn'> <a href={'/emp/' + emp._id}>display</a></td>
                            <td className='crud-btn'> <a href={'/emp/' + emp._id}>Edit</a></td>
                            <td className='crud-btn'> <button onClick={()=>handelDelete(emp._id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}