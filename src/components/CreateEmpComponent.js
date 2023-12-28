import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateEmpComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            emailId: '',
        };

        this.changeFNameHandler = this.changeFNameHandler.bind(this);
        this.changeLNameHandler = this.changeLNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeFNameHandler(event) {
        this.setState({ fName: event.target.value });
    }

    changeLNameHandler(event) {
        this.setState({ lName: event.target.value });
    }

    changEmailIdHandler(event) {
        this.setState({ emailId: event.target.value });
    }

    saveEmployee(e) {
        e.preventDefault();
        let employee = {
            fName: this.state.fName,
            lName: this.state.lName,
            emailId: this.state.emailId,
        };
        console.log('employee=>', JSON.stringify(employee));
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: '10px' }}>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First Name: </label>
                                        <input
                                            placeholder='First Name'
                                            name='fName'
                                            className='form-control'
                                            value={this.state.fName}
                                            onChange={this.changeFNameHandler}
                                        ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Last Name: </label>
                                        <input
                                            placeholder='Last Name'
                                            name='lName'
                                            className='form-control'
                                            value={this.state.lName}
                                            onChange={this.changeLNameHandler}
                                        ></input>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email Id: </label>
                                        <input
                                            placeholder='Email Id'
                                            name='emailId'
                                            className='form-control'
                                            value={this.state.emailId}
                                            onChange={this.changEmailIdHandler.bind(this)}
                                        ></input>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>
                                        Save
                                    </button>
                                    <Link to='/employees' className='btn btn-danger'>
                                        Cancel
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmpComponent;
