import React, { Component } from "react";

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    };

    changeValueHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    submitHandler = () => {
        alert(
            "First name: " + this.state.firstname + "." + " Last name: " + this.state.lastname + "."
        );
    };

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" onChange={this.changeValueHandler} name="firstname"></input>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" onChange={this.changeValueHandler} name="lastname"></input>
                    </div>
                    <input type="submit" value="send"></input>
                </form>
                <p>First Name: {this.state.firstname}</p>
                <p>Last Name: {this.state.lastname}</p>
            </>
        );
    }
}

export default Form;