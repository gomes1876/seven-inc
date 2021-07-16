import axios from 'axios';
import * as apiLocal from './api'

export let searchAll = () => {
    let result = null
    let status = null
    setTimeout(
    axios.get(apiLocal.url).then( 
        response =>{
            result = {
                ...
                response.data
            }
            status = response.status
        }
    ), 500);
    if(status == 200){
        // console.log('result')
        // console.log(result)
        return result;
    }
    return null;
}