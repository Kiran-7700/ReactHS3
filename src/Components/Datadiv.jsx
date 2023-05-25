import React, { Component } from 'react';
import "./Datadiv.css";

class Datadiv extends Component {
    render() {
        return (
            <div>
                <h1>EMPLOYEE &nbsp; FEEDBACK &nbsp; DATA</h1>
                <div className="container">
                    {
                        this.props.value.map((curr) => {
                            return (
                                <div className="show">
                                    <p>Name: <span>{curr.Name} |  &nbsp;</span> </p>
                                    <p>Department : <span>{curr.Department} |  &nbsp;</span>
                                    </p>
                                    <p> Rating : <span>{curr.Rating}  &nbsp;</span></p>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='goBackBtn' onClick={this.props.toggleFun}> Go Back </button>
            </div>

        )
    }
}
export default Datadiv;