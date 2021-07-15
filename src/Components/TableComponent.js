import React, { useState } from "react";
import { FiEdit2, FiTrash } from 'react-icons/fi'

export const TableComponent = ({funcionarios}) => {
    <div className="col-md-7">
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
                    Object.keys(funcionarios).map(funcionario => {
                        return (
                            <tr key={funcionario.id}>
                                <td>{funcionario.name}</td>
                                <td>{funcionario.salary}</td>
                                <td>{funcionario.position}</td>
                                <td>
                                    <a className="btn btn-primary" onClick={() => (console.log(funcionario.id))}>
                                        <FiEdit2 />
                                    </a>

                                    <a className="btn btn-danger" onClick={() => (console.log(funcionario.id))}>
                                        <FiTrash />
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
}