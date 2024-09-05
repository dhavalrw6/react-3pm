import React, { useState } from 'react'
import './User.css';
function User() {
    // let name = "Red & white";

    // let [name, setName] = useState(0);
    let [status, setStatus] = useState({
        name: "Dhaval",
        age: 26

    });
    let [color, setColor] = useState(true);

    return (
        <div>

            <h2>Hide, Show And Toggle</h2>
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(!status)}>Toggle</button>
            {status ?
                <div className='box' style={color ? { backgroundColor: "red" } : { backgroundColor: "yellow" }}>
                    <button onClick={() => setColor(!color)}>Chnage Theme Color..</button>
                </div> : null}
            <h2>Name:- {status.name} age :- {status.age}</h2>
        </div>
    )
}

export default User
