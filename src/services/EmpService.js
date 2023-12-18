import axios from 'axios';

const EMP_LIST_API_URL="http://localhost:8090/api/v1/employees";
class EmpService{
    getEmployees(){
        return axios.get(EMP_LIST_API_URL);
    }
}

export default new EmpService()