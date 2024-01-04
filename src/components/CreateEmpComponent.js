import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmpService from '../services/EmpService';

function CreateEmpComponent() {
    const [employee, setEmployee] = useState({fname: '', lname: '', emailId: ''});
    const navigate = useNavigate();

    const changeFNameHandler = (event) => setEmployee({...employee, fname: event.target.value});
    const changeLNameHandler = (event) => setEmployee({...employee, lname: event.target.value});
    const changeEmailIdHandler = (event) => setEmployee({...employee, emailId: event.target.value});

    const saveEmployee = async (e) => {
        e.preventDefault();
        await EmpService.createEmployee(employee);
        navigate(-1); 
    }

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
                                    <input placeholder='First Name' name='fName' className='form-control' value={employee.fname} onChange={changeFNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Last Name: </label>
                                    <input placeholder='Last Name' name='lName' className='form-control' value={employee.lname} onChange={changeLNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Email Id: </label>
                                    <input placeholder='Email Id' name='emailId' className='form-control' value={employee.emailId} onChange={changeEmailIdHandler} />
                                </div>
                                <button className='btn btn-success' onClick={saveEmployee}> Save </button>
                                <button className='btn btn-danger' onClick={() => navigate('/employees')}> Cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmpComponent;
