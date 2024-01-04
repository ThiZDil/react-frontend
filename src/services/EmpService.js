import axios from 'axios';

const EMP_LIST_API_URL="http://localhost:8090/api/v1/employees";
const EMP_CREATE_API_URL="http://localhost:8090/api/v1/addEmployee"
class EmpService{
    getEmployees(){
        return axios.get(EMP_LIST_API_URL);
    }
    createEmployee(employee){
        return axios.post(EMP_CREATE_API_URL,employee);
    }
}

export default new EmpService()