import React, { useEffect, useState } from 'react'

function App() {

  let [emp, setEmp] = useState({});
  let [list, setList] = useState([]);

  // let list = JSON.parse(localStorage.getItem('empData'));

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem('empData'));
    setList(oldList);
  }, [setList])

  let handleInput = (e) => {
    let { name, value } = e.target;
    let newEmp = { ...emp, [name]: value };
    setEmp(newEmp);
    console.log(newEmp);
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    let newList = [...list, emp];
    setList(newList);
    localStorage.setItem('empData', JSON.stringify(newList));
    setEmp({});
  }

  let handleDelete = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    console.log(newList);
    localStorage.setItem('empData', JSON.stringify(newList));
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <table border={1} style={{ borderCollapse: "collapse" }} align='center' >
          <caption>
            <h2>Add Employee Data</h2>
          </caption>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" name="name" id="" value={emp.name || ""} onChange={handleInput} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" name="email" id="" value={emp.email || ""} onChange={handleInput} /></td>
            </tr>
            <tr>
              <td>password</td>
              <td><input type="text" name="password" id="" value={emp.password || ""} onChange={handleInput} /></td>
            </tr>
            <tr>
              <td>phone</td>
              <td><input type="text" name="phone" id="" value={emp.phone || ""} onChange={handleInput} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="add Emp Data" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <br /><br />

      <table border={1} style={{ borderCollapse: "collapse" }} align='center'>
        <caption>
          <h2>Employee Data</h2>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {/* { list.map(()=> {
            return (

            )
          } ) } */}

          {list.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>{value.phone}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  )
}

export default App
