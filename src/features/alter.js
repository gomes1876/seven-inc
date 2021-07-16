import axios from 'axios';
import * as apiLocal from './api'

// api.deleteItem(funcionario.id, funcionarios, this.state);
export let alter = (employee)=>{
    let item = null;
    setTimeout(
    (axios.patch(`${apiLocal.url}/${employee.id}`, employee).
    then((respose)=>{
        console.log(respose);
        item = respose.data;
    }).catch(err=>{
        console.log(err)
    })),
    500)
    return item;
}   