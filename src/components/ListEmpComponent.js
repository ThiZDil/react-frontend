 import React, { Component } from 'react';
import EmpService from '../services/EmpService';
 
 class ListEmpComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
    }

    componentDidMount(){
        EmpService.getEmployees().then(res => {
            this.setState({employees:res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List </h2>
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