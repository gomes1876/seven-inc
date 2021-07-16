import axios from "axios";
import * as apiLocal from '../features/api'

export let searchOne = (employee) =>{
    let item = null
    axios.get(`${apiLocal.url}/${employee.id}`).then((response) => {
        item = response.data;
    }).catch(err=>console.log(err));

    return item;

}