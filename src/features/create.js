
import axios from 'axios';
import * as apiLocal from './api'

export let create = (employee) => {
    axios.post(apiLocal.url, employee).
    then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    });
}