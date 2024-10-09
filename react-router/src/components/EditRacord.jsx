import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditRacord() {

    let [data, setData] = useState({});
    let navigator = useNavigate()
    let { id } = useParams();

    useEffect(() => {
        fetchUserRecord();
    }, [])

    let handleInput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    let fetchUserRecord = () => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'GET'
        }).then((res) => res.json())
            .then((user) => {
                setData(user);
            }).catch((error) => {
                console.error(error);
            })
    }


    let handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(() => {
            alert("Data added.");
            navigator('/view');
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table border={1} align='center' >
                    <caption>
                        <h2>Edit recode.</h2>
                    </caption>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    id=""
                                    onChange={handleInput}
                                    value={data.username}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>
                                <input
                                    type="text"
                                    name="password"
                                    id=""
                                    onChange={handleInput}
                                    value={data.password}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Update" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default EditRacord
