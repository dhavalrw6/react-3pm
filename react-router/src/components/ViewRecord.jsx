import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ViewRecord() {

    let [users, setUsers] = useState([]);
    let navigator = useNavigate();
    useEffect(() => {
        fetchRecord();
    }, [])

    let fetchRecord = () => {
        fetch('http://localhost:3000/user', {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            setUsers(data);
        }).catch((error) => {
            console.error(error);
        })
    }

    let handleDelete = (id) => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        }).then(() => {
            console.log("Data Deleted");
            fetchRecord();
        }).catch((err) => {
            console.error(err);
        })
    }

    let handleEdit = (id) => {
        navigator(`/edit/${id}`);
    }

    return (
        <>
            <table border={1} align='center'>
                <caption>
                    <h2>View Record</h2>
                    <Link to="/">Add Record</Link>
                </caption>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button> {" || "}
                                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ViewRecord
