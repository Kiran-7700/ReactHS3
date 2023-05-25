import React, { Component } from "react";
import "./Form.css";
import Datadiv from "./Datadiv";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            Department: "",
            Rating: "",
            click: true,
            allEntry: []
        };
    }

    toggleFunction = () => {
        this.setState({ click: !this.state.click })
    }

    submitForm = (e) => {
        e.preventDefault();
        const newEntry = {
            Name: this.state.name,
            Department: this.state.Department,
            Rating: this.state.Rating
        };

        this.setState({
            allEntry: [...this.state.allEntry, newEntry],
            click: false
        })

    }

    render() {
        return (
            <div className="fullPage">
                {this.state.click ?

                    <div className="Form">
                        <h1 className="heading">EMPLOYEE &nbsp; FEEDBACK &nbsp; FORM</h1>
                        <br />
                        <label> Name :</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={this.state.name}
                            name="name"
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <br /> <br />
                        <label> Department :</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={this.state.Department}
                            name="Department"
                            onChange={(e) => this.setState({ Department: e.target.value })}
                        />
                        <br /> <br />
                        <label> Rating :</label>
                        <input
                            type="number"
                            autoComplete="off"
                            value={this.state.Rating}
                            name="number"
                            onChange={(e) => this.setState({ Rating: e.target.value })}
                        />
                        <br /> <br /> <br />
                        <button onClick={this.submitForm}>Submit</button>
                    </div>
                    :
                    <Datadiv value={this.state.allEntry} toggleFun={this.toggleFunction}/>
                }

            </div>
        );
    }
}

export default Form;
