import { Component } from 'react'


class Stud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Dhaval"
        }
    }

    componentDidMount() {
        console.log("Hello...");
    }

    componentDidUpdate() {
        console.log("State Change....");
    }

    changeState = () => {
        this.setState({
            name: "Red & White"
        })
    }

    render() {
        return (
            <>
                <h2>Hello From Class Component..</h2>
                <p>Name:- {this.state.name}</p>
                <button onClick={() => this.changeState()}>Change State</button>
            </>
        )
    }
}

export default Stud;