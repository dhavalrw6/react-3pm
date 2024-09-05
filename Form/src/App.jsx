import { useState } from 'react';
import './App.css'

function App() {
  let [user, setUser] = useState({});
  let [list, setList] = useState([]);

  let handleInput = (e) => {
    let { name, value } = e.target;
    let newUser = { ...user, [name]: value }
    setUser(newUser);
    console.log(newUser);
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    let newList = [...list, user];

    setList(newList);
    setUser({});
  }

  return (
    <>
      <form method='post' onSubmit={handleSubmit}>
        <table>
          <caption>
            <h2>Add User Data</h2>
          </caption>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" name="name" id="" onChange={handleInput} value={user.name ? user.name : ""} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="text" name="email" id="" onChange={handleInput} value={user.email ? user.email : ""} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Add Data" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <br /> <br />
      <table border={1} align='center'>
        <tbody>
          <tr>
            <td>Name</td>
            <td>email</td>
          </tr>
          {list.map((v, i) => {
            return (
              <tr>
                <td>{v.name}</td>
                <td>{v.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
