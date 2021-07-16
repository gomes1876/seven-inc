import React, { useState, Component } from "react";
import { FiEdit2, FiTrash } from 'react-icons/fi'
import axios from 'axios';
import { FormRegister } from "./FormRegister";
import { delelte } from "../features/delete"; 
import {searchAll} from '../features/searchAll';
import {searchOne} from '../features/searchOne';


let funcionarios = [];
let funcionarioSelecionado = null;
let buttonValue = 'Salvar';

const url = `http://localhost:8081/employees/`; 

// const api = axios.create({
//     baseURL: `http://localhost:8081/employees/` 
// });

export class TableComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            funcionarios: [],
            funcionarioSelecionado: null,
            buttonValue: ''
        }

        this.setState({funcionarioSelecionado: []})
        axios.get(url).then(res=>{
        funcionarios = {
            ...
            res.data,
        }
        this.setState({funcionarios:[... res.data]})
        }).catch(err=>console.log(err))

    }
    componentWillMount(){
        this.setState({funcionarioSelecionado: null})
    }
    
    render(){
        let alterDb = (funcionario) => {
            this.setState({buttonValue: 'Salvar'});
        }
        let deleteItem = (id) => {
            let any = setTimeout(delelte(id), 1000);
            if(any === 1){
                // funcionarios = {
                //                 ...
                //                 res.data,
                //             }
                //             state.setState({funcionarios:[... res.data]})

                let result = setTimeout(searchAll(), 1000);
                console.log('resul')
                console.log(result)
                if (result != null){
                    document.location.reload(true)
                }

            }

        }
        let searchItem = (employee) => {
            console.log(employee.id)
            // this.setState({buttonValue: 'Editar', funcionarioSelecionado: employee});
            let verify = null;
            verify = setTimeout(searchOne(employee.id), 500);
            if(verify!=null && (this.state.funcionarioSelecionado != verify )){
                console.log(verify)
                this.setState({buttonValue: 'Editar', funcionarioSelecionado:verify});
            }   
        }
        return(
            <>
                <div className="col-md-5">
                    <FormRegister buttonValue={this.state.buttonValue} clickEvent={alterDb} employee={this.state.funcionarioSelecionado}/>
                </div>
                <div className="col-md-7">
                    <div>
                        <span className="lead">Tabela de funcionários Cadastrados</span>
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <td>Nome Completo</td>
                                    <td>Data de Nasc.</td>
                                    <td>Salário</td>
                                    <td>Posição</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.funcionarios.map(funcionario => {
                                        return (
                                            <tr key={funcionario.id}>
                                                <td>{funcionario.name}</td>
                                                <td>{funcionario.bornDate}</td>
                                                <td>{funcionario.salary}</td>
                                                <td>{funcionario.position}</td>
                                                <td>
                                                    <a style={{borderRadius: '8px 0px 0px 8px' }} className="btn btn-primary" onClick={() => (searchItem(funcionario))}>
                                                        <FiEdit2 color="white" />
                                                    </a>

                                                    <a style={{borderRadius: '0px 8px 8px 0px' }} className="btn btn-danger" onClick={() => (deleteItem(funcionario.id))}>
                                                        <FiTrash color="white" />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}