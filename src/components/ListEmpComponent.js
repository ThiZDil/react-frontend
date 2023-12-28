import React, { Component } from 'react';
import EmpService from '../services/EmpService';
import { Link } from 'react-router-dom'; 

class ListEmpComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
    }



    componentDidMount() {
        EmpService.getEmployees().then(res => {
            this.setState({ employees: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List </h2>
                <div className='row'>
                    <Link to='/addEmployee' className='btn btn-primary'>Add Employee</Link>
                </div>
                <div className='row'>
                    <table className='table table-striped table bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.fname}</td>
                                        <td>{employee.lname}</td>
                                        <td>{employee.emailId}</td>
                                        <td><button>Edit</button>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmpComponent;
