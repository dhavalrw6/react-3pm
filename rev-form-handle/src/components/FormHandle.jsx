import React, { useEffect, useState } from 'react'
import './FormHandle.css'
function FormHandle() {
    let [user, setUser] = useState({});
    let [list, setList] = useState([]);
    let [index, setIndex] = useState(-1);
    let [error, setError] = useState({});
    let [hobby, setHobby] = useState([]);

    useEffect(() => {
        let oldList = JSON.parse(localStorage.getItem('user')) || [];
        setList(oldList);
    }, [])

    let handleChange = (e) => {
        let { name, value } = e.target;

        // console.log(newUser);
        let ho1 = [...hobby];

        if (name == 'hobby') {
            if (e.target.checked) {
                ho1.push(value);
            } else {
                let pos = ho1.findIndex((val) => val == value)
                console.log(pos);

                ho1.splice(pos, 1);

            }
            value = ho1
            console.log(value);
        }
        setHobby(ho1);

        let newUser = { ...user, [name]: value }

        setUser(newUser);

    }


    let validationData = () => {
        let tempError = {};

        if (!user.name) tempError.name = "Name is required";
        if (!user.email) tempError.email = "email is required";
        if (!user.password) tempError.password = "password is required";
        if (!user.phone) tempError.phone = "phone is required";
        if (!user.gender) tempError.gender = "gender is required";
        if (!user.city) tempError.city = "city is required";
        if (!user.address) tempError.address = "address is required";

        setError(tempError);
        console.log(Object.keys(tempError));

        return Object.keys(tempError).length == 0;
    }


    let handleSubmit = (e) => {
        e.preventDefault();

        if (!validationData()) return false;

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
        setHobby([]);
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
        setHobby(editUser.hobby);
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
                            <td>
                                <input type="text" name="name" value={user.name || ''} onChange={handleChange} />
                                <span className="error">{error.name || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>email:- </td>
                            <td>
                                <input type="text" name="email" value={user.email || ''} onChange={handleChange} />
                                <span className="error">{error.email || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>password:- </td>
                            <td>
                                <input type="text" name="password" value={user.password || ''} onChange={handleChange} />
                                <span className="error">{error.password || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>phone:- </td>
                            <td>
                                <input type="text" name="phone" value={user.phone || ''} onChange={handleChange} />
                                <span className="error">{error.phone || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Hobby:- </td>
                            <td>
                                <input type="checkbox" name="hobby" value="Coding" checked={hobby.includes('Coding') ? "checked" : ''} onChange={handleChange} />Coding
                                <input type="checkbox" name="hobby" value="Writing" checked={hobby.includes('Writing') ? "checked" : ''} onChange={handleChange} />Writing
                                <input type="checkbox" name="hobby" value="Drawing" checked={hobby.includes('Drawing') ? "checked" : ''} onChange={handleChange} />Drawing
                                <span className="error">{error.hobby || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>gender:- </td>
                            <td>
                                <input type="radio" name="gender" value="male" checked={user.gender == 'male' ? "checked" : ''} onChange={handleChange} />Male
                                <input type="radio" name="gender" value="female" checked={user.gender == 'female' ? "checked" : ''} onChange={handleChange} />Female
                                <span className="error">{error.gender || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>City:- </td>
                            <td>
                                <select name="city" id="" onChange={handleChange} value={user.city || ''}>
                                    <option value="" selected disabled>--select-City--</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                </select>
                                <span className="error">{error.city || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Addess</td>
                            <td>
                                <textarea name="address" id="" value={user.address || ''} onChange={handleChange}></textarea>
                                <span className="error">{error.address || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value={index != -1 ? "Update" : "Add Data"} /></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <table align='center' border={1} width={800}>
                <caption>
                    <h2>User Data</h2>
                </caption>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>password</td>
                        <td>Phone</td>
                        <td>Hobby</td>
                        <td>Gender</td>
                        <td>City</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>

                    {list.length > 0 ?
                        list.map((v, i) => (
                            <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.email}</td>
                                <td>{v.password}</td>
                                <td>{v.phone}</td>
                                <td>{v.hobby.toString()}</td>
                                <td>{v.gender}</td>
                                <td>{v.city}</td>
                                <td>{v.address}</td>
                                <td>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                    <button onClick={() => handleEdit(i)}>Edit</button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={7} style={{ color: "red", textAlign: 'center' }}>No Data Found.</td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default FormHandle
