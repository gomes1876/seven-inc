import React from 'react';
import { FormRegister } from '../FormComponents/FormRegister';
import { Header } from '../Herader';
import { TableComponent } from '../TableComponent';

export const Home = () =>{

    return(
        <>
            <TableComponent funcionarios = {undefined} />
            <Header title="Cadastro de Funcionários" identify="cadastro de informações cruciais de funcionários"/>
            <FormRegister />
        </>
    );
}
