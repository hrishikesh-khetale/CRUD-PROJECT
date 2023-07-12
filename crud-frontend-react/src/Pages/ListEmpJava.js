import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function ListEmp() {
    let navigate = useNavigate();
    const [employees, setEmployee] = useState([]);
    const [err,setErr] = useState(false);
    useEffect(() => {
        fetch("http://localhost:8080/api/emp")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            ).catch((err)=>(setErr(true)));
    }, []);

    const handelDelete = (id) => {
        console.log(id)
        const confirmed = window.confirm('Are you sure you want to proceed?');
        if (confirmed) {
            console.log('Confirmed');
            fetch("http://localhost:8080/api/emp/" + id, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
            }).then(r => { console.log(r) })
            
            navigate(0);
        } else {
            console.log('Cancelled');
        }
    }

    if(err) return(<><p className='gcontainer' >Error</p></>)
    return (<div className='gcontainer'>
        <div className='gcontainer-scr'>
            <h2>Employees Data...</h2>
            <table>
                <thead>
                    <tr className='crud-tr'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr className='crud-tr' key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.employName}</td>
                            <td>{emp.employDept}</td>
                            <td className='crud-btn'> <a href={'/emp/' + emp.id}>display</a></td>
                            <td className='crud-btn'> <a href={'/emp/' + emp.id}>Edit</a></td>
                            <td className='crud-btn'> <button onClick={()=>handelDelete(emp.id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}