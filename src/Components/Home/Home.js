import React from 'react';
import { FormRegister } from '../FormRegister';
import { Header } from '../Herader';
import { TableComponent } from '../TableComponent';
import axios from 'axios';

// const api = axios.create({
//     baseURL: `http://localhost:3000/employees/` 
// })

// var funcionarios = undefined;

export let Home = (props) =>{

    let funcionarios = [];

    // componentDidUpdate() {
    //     // Uso típico, (não esqueça de comparar as props):
    //     if (this.props.funcionarios !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }

    // render() {
        return(
            <div className="App">
             <Header title="Cadastro de Funcionários" identify="cadastro de informações cruciais de funcionários"/>
             
             <div className="row">
                     <TableComponent />
             </div>
         </div>
        );
    // }

}

// export const Home = () =>{

    
//     // getEmployees().promise
    
//     // console.log(a);
    
//     let funcionarios = [{
//         id: '124',
//         name: 'Gabriel Gomes de Oliveira',
//         bornDate: '21/04/99',
//         salary: '1236,68',
//         position: 'Dev Jr.'
        
//     }];
//     return(
//         <>
//             <Header title="Cadastro de Funcionários" identify="cadastro de informações cruciais de funcionários"/>

//             <div className="row">
//                 <div className="col-md-5">
//                     <FormRegister />
//                 </div>
//                 <div className="col-md-7">
//                     <TableComponent funcionarios = {funcionarios} />
//                 </div>
//             </div>
//         </>
//     );
// }