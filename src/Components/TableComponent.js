import React, { useState, Component } from "react";
import { FiEdit2, FiTrash } from 'react-icons/fi'
import axios from 'axios';
import { FormRegister } from "./FormRegister";

let funcionarios = [];
let funcionarioSelecionado = null;
let buttonValue = 'Salvar';

const url = `http://localhost:8081/employees/`; 

const api = axios.create({
    baseURL: `http://localhost:8081/employees/` 
});

export class TableComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            funcionarios: [],
            funcionarioSelecionado: null,
            buttonValue: ''
        }

        this.setState({funcionarioSelecionado: []})
        api.get().then(res=>{
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

    // shouldComponentUpdate(){
    //     this.state({})
    // }

    render(){
        let alterDb = (funcionario) => {
            this.setState({buttonValue: 'Salvar'})
            console.log('ta passando');
            api.patch(`http://localhost:8081/employees/${funcionario.id}`, funcionario).then((respose)=>{
                console.log(respose);
            }).catch(err=>console.log(err));
        }
        let deleteItem = (id) => {
            console.log(id);
            axios.delete(`${url}/${id}`).then(val=>console.log(val)).catch(err=>console.log(err)).finally((stat)=>{
                console.log(stat);
                api.get().then(res=>{
                    funcionarios = {
                        ...
                        res.data,
                    }
                    this.setState({funcionarios:[... res.data]})
                }).catch(err=>console.log(err))
                
            })
        }
        let searchItem = (employee) => {
            this.setState({buttonValue: 'Editar', funcionarioSelecionado: employee});
            axios.get(`${url}/${employee.id}`).then((response) => {
                if(this.state.funcionarioSelecionado != response.data ){
                    this.setState({funcionarioSelecionado:response.data});
                }
            }).catch(err=>console.log(err));
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