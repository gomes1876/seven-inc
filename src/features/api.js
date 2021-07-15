import axios from 'axios';

const url = "http://localhost:3000/employees";

export async function getEmployees(){
    let result = [];

    await axios
    .get(url)
    .then(response => {console.log(response); result = response.data});

    return result;
}