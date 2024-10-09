import React, { useEffect, useState } from 'react'

function Pagination() {
    const [data, setData] = useState({});
    const [dataList, setDataList] = useState([]);
    // const [search, setSearch] = useState('');
    const [symbol, setSymbol] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem('data')) || []
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
        localStorage.setItem('data', JSON.stringify(newList));
        setData({})
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

    let changePage = (page) => {
        setCurrentPage(page);
    }

    // Pagination Logic

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = dataList.slice(indexOfFirstItem, indexOfLastItem);
    const totalPage = Math.ceil(dataList.length / itemsPerPage);
    console.log(currentData);

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
                        currentData.map((val, idx) => (
                            <tr key={idx}>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={2}>

                            {
                                currentPage > 1 &&
                                <button onClick={() => setCurrentPage(currentPage - 1)}>prev</button>
                            }

                            {
                                [...Array(totalPage)].map((_, index) => {
                                    return (
                                        <button onClick={() => changePage(index + 1)}>{index + 1}</button>
                                    )
                                })
                            }
                            {
                                currentPage < totalPage &&
                                < button onClick={() => setCurrentPage(currentPage + 1)}>next</button>
                            }

                        </td>
                    </tr>
                </tbody>
            </table >

        </>
    )
}

export default Pagination
