import React, { useEffect, useState } from 'react'

function AddRecode() {
    const [data, setData] = useState({});
    const [dataList, setDataList] = useState([]);
    const [search, setSearch] = useState('');
    const [symbol, setSymbol] = useState('');

    useEffect(() => {
        let oldData = JSON.parse(sessionStorage.getItem('data')) || []
        setDataList(oldData);
    }, [])

    let handleInput = (e) => {
        let { name, value } = e.target;

        setData({ ...data, [name]: value });
    }

    console.log(data);
    let handleSubmit = (e) => {
        e.preventDefault();

        let newList = [...dataList, data]
        setDataList(newList);
        sessionStorage.setItem('data', JSON.stringify(newList));
        setData({})
    }

    let handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    let sortBy = (type) => {
        console.log("sortData");

        let newList;
        if (type == 'uname') {
            if (symbol == '' || symbol == 'v') {
                newList = dataList.sort((a, b) => {
                    return a.username.toString().localeCompare(b.username.toString());
                })
                setSymbol('^');
            } else {
                newList = dataList.sort((a, b) => {
                    return b.username.localeCompare(a.username);
                })
                setSymbol('v')
            }
        } else {
            if (symbol == '' || symbol == 'v') {
                newList = dataList.sort((a, b) => {
                    return a.email.toString().localeCompare(b.email.toString());
                })
                setSymbol('^');
            } else {
                newList = dataList.sort((a, b) => {
                    return b.email.localeCompare(a.email);
                })
                setSymbol('v')
            }
        }
        setDataList([...newList]);
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <table align='center' border={1}>
                    <caption>
                        <h2>Add User Recode</h2>
                    </caption>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleInput}
                                    value={data.username || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handleInput}
                                    value={data.email || ''}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="submit"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <table align='center' border={1} width={400}>
                <caption>
                    <h2>User Recode</h2>
                    <div style={{ textAlign: "center", marginBottom: "10px" }}>
                        <input type="text" onChange={handleSearch} />
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th>
                            <button onClick={() => sortBy('uname')}>UserName {symbol}</button>
                        </th>
                        <th>
                            <button onClick={() => sortBy('email')}>Email {symbol}</button>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        dataList.filter((val, idx) => {
                            if (search == '') {
                                return val
                            } else {
                                if (val.username.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                    return val
                                }
                                else if (val.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                    return val
                                }
                            }
                        }).map((val, idx) => (
                            <tr key={idx}>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </>
    )
}

export default AddRecode
