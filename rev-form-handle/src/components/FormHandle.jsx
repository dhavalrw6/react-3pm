import React, { useState } from 'react'

function FormHandle() {
    let [user, setUser] = useState({});
    let [list, setList] = useState([]);

    let handleChange = (e) => {
        let { name, value } = e.target;
        let newUser = { ...user, [name]: value }
        console.log(newUser);
        setUser(newUser);

    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let newList = [...list, user];
        setList(newList);
        console.log(newList);
        setUser({});
    }

    let handleDelete = (pos) => {
        let newList = list.splice(pos, 1);
        setList(newList);
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table align='center'>
                    <caption>
                        <h2>Add User Data</h2>
                    </caption>
                    <tbody>
                        <tr>
                            <td>Name:- </td>
                            <td><input type="text" name="name" value={user.name || ''} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td>email:- </td>
                            <td><input type="text" name="email" value={user.email || ''} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Add Data" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <table align='center' border={1}>
                <caption>
                    <h2>User Data</h2>
                </caption>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>

                    {list.length > 0 ?
                        list.map((v, i) => (
                            <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={3} style={{ color: "red" }}>No Data Found.</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default FormHandle
