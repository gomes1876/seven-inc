import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { getEmployees } from '../../features/api'

export const FormRegister = () => {


    var initilValues = {
        id: '',
        name: '',
        bornDate: '',
        salary: '',
        position: ''
    }

    let [values, setValues] = useState(initilValues);

    let inputChange = (e) => {
        console.log(e.target.value);
        let {name, value} = e.target;
        
        setValues({
            ...values,
            [name]: value,
        }) 
    }


    return(
        <>
            <form autoComplete="off">
                <div className="form-group input-group">
                        <FormInput identify="Nome" name="name" value={values.name} placeholder="Nome e Sobrenome" type="text" onChange={inputChange} />
                </div>
                <div>
                    <div className="row">
                        <div className="form-group input-group col-md-6">
                            <FormInput identify="Dada te Nasc." onChange={inputChange} placeholder="00/00/00" name="bornDate" value={values.bornDate}/>
                        </div>
                        <div className="form-group input-group col-md-6">
                            <FormInput identify="Salário" onChange={inputChange} placeholder="2568,98" name="salary" value={values.salary}/>
                        </div>
                    </div>
                </div>
                <div className="form-group input-group">
                        <FormInput identify="Posição" value={values.position} placeholder="Posição" type="text"  name="position" onChange={inputChange} />
                </div>

                <div className="form-group">
                    <input onClick={()=>console.log('envio')} type="submit" value={initilValues.id === '' ? "Salvar" : "Editar"} className={initilValues.id === '' ? "btn btn-primary btn-block" : "btn btn-success btn-block"}/>
                </div>
            </form>
        </>
    );
}