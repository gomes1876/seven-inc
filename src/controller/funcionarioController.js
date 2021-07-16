import {novoFuncionario} from '../actios/funcionario';
import axios from 'axios';

const url = `http://localhost:8081/employees/`

class formController {
    getUsers(){
        axios.get(url).then(res=>{
            funcionarios = {
                ...
                res.data,
            }
        }
    }
}