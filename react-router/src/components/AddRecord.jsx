import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddRecord() {

    let [data, setData] = useState({});
    let navigator = useNavigate()

    let handleInput = (e) => {
        let { name, value } = e.target;

        setData({ ...data, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(() => {
            toast.success('🦄 Wow so easy!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
            setTimeout(() => {
                navigator('/view');
            }, 3000)
        }).catch((error) => {
            console.error(error);
        })
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table border={1} align='center' >
                    <caption>
                        <h2>Add recode.</h2>
                        <Link to="/view" >View Record</Link>
                    </caption>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td><input type="text" name="username" id="" onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td><input type="text" name="password" id="" onChange={handleInput} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Add Recode." /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition:Bounce
            />
        </>
    )
}

export default AddRecord
