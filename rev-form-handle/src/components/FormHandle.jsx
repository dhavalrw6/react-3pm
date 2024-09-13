import React, { useEffect, useState } from 'react'

function FormHandle() {
    let [user, setUser] = useState({});
    let [list, setList] = useState([]);
    let [index, setIndex] = useState(-1);

    useEffect(() => {
        let oldList = JSON.parse(localStorage.getItem('user')) || [];
        setList(oldList);
    }, [])

    let handleChange = (e) => {
        let { name, value } = e.target;
        let newUser = { ...user, [name]: value }
        // console.log(newUser);
        setUser(newUser);

    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let newList = [];

        if (index != -1) {
            list[index] = user;
            newList = [...list]
        } else {
            newList = [...list, user];
        }

        setList(newList);
        localStorage.setItem('user', JSON.stringify(newList));
        setUser({});
        setIndex(-1)
    }

    let handleDelete = (pos) => {
        list.splice(pos, 1)
        let newList = [...list];
        localStorage.setItem('user', JSON.stringify(newList));
        setList(newList);
    }

    let handleEdit = (pos) => {
        let editUser = list[pos];
        setUser(editUser);
        setIndex(pos);
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
                            <td><input type="submit" value={index != -1 ? "Update" : "Add Data"} /></td>
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
                                    <button onClick={() => handleEdit(i)}>Edit</button>
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
