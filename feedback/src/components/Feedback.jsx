import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Feedback() {

    let [star, setStar] = useState(0);
    let [feedback, setFeedback] = useState({});
    let [feedData, setFeedData] = useState([]);

    let handleStar = (star) => {
        setStar(star);
        let feed = { ...feedback, ['star']: star }
        setFeedback(feed);
    }

    let handleChange = (e) => {
        let { name, value } = e.target;

        let feed = { ...feedback, [name]: value }
        setFeedback(feed);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setFeedData([...feedData, feedback])
    }

    console.log(feedData);

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Feedback</h2>

                    {
                        [...Array(5)].map((v, i) => (
                            <FaStar

                                key={i}
                                color={star >= i + 1 ? "gold" : "gray"}
                                onMouseOver={() => handleStar(i + 1)}
                            />
                        ))
                    }
                    <br />
                    <textarea
                        name="feedback"
                        value={feedback.feedback || ''}
                        id=""
                        placeholder='Add your feedback.'
                        onChange={handleChange}
                    />
                    <br />
                    <input type="submit" value="submit" className='btn btn-danger' />
                </div>
            </form>
        </>
    )
}

export default Feedback
