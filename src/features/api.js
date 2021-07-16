import axios from 'axios';

// export const api = axios.create({
//     baseURL: `http://localhost:3000/employees` 
// })

export let url = `http://localhost:8081/employees/`;

// export async function getEmployees(){
//     let results = [];
//     setTimeout(
//         await axios.get(baseUrl)
//         .then(response => {results = {... response.data}}).finally(()=>{
//             return results
//     }), 5000);
// }

    // let deleteItem = (id, funcionarios, state) => {
    //     console.log(id, funcionarios, state)
    //     // let {id, funcionarios, state} = data;
    //     axios.delete(`${url}/${id}`).then(val=>console.log(val)).catch(err=>console.log(err)).finally((stat)=>{
    //         console.log(stat);
    //     }).then(error => console.log(error));
    // }

    // let getFuncionarios = (data) => {
    //     let {funcionarios, state} = data;
    //     axios.get(url).then(res=>{
    //         funcionarios = {
    //             ...
    //             res.data,
    //         }
    //         state.setState({funcionarios:[... res.data]})
    //     }).catch(err=>console.log(err))
    // }


// export default api;