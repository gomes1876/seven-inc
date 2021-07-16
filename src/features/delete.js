import axios from 'axios';

import * as apiLocal from './api';

export let delelte = (id) =>{
    let status = null
    axios.delete(`${apiLocal.url}/${id}`).
    then(response => {
        // console.log(response);
        status = response.status;
    }).
    catch(error => {
        console.log(error);
    }).
    finally(success => {
        console.log(success);
    });
    if(status === 200)
        return 'success'
    return null;
} 