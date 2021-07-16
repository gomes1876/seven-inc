import axios from "axios";
import React, { isValidElement, useState } from "react";
import { FormInput } from "./FormComponents/FormInput";
import { create } from '../features/create'
import { alter } from '../features/alter'

var initilValues = {
    id: '',
    name: '',
    bornDate: '',
    salary: '',
    position: ''
}   

export let FormRegister = ({clickEvent, buttonValue, employee}) => {

    let isValidField = {
        id: true,
        name: true,
        bornDate: true,
        salary: true,
        position: true
    }; 

    let [values, setValues] = useState(initilValues); 
    let [fields, setValuesFields] = useState(isValidField);

    // console.log(fields)
    
    // if(employee!= null && employee!=''){  
    //     setValues(employee);

    //     employee = {};

    // }
    if(buttonValue === ''){
        buttonValue = "Salvar"
    }
    let inputChange = (e) => {
        let {name, value} = e.target;
        
        setValues({
            ...values,
            [name]: value,
        }) 
    }

    let alterItem = (employee) => {
        alter(employee);
    }


    // let formEnvio = (employee) =>{
    //     if(employee.name ===''){
    //         setValuesFields({name: !fields.name});
    //     }
    //     if(employee.position ===''){
    //         setValuesFields({position:!fields.position});
    //     }
    //     if(employee.salary ===''){
    //         setValuesFields({salary:!fields.salary});
    //     }
    //     if(employee.bornDate ===''){
    //         setValuesFields({bornDate:!fields.bornDate});
    //     }

    //     if(employee.name && employee.position && employee.salary && employee.bornDate){
    //         createEmployee(employee);
    //     }

    // }


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
                    <input onClick={()=>(buttonValue==='Salvar' ? create(values) : alterItem(values))} type="submit" value={buttonValue} className={buttonValue !== 'Editar' ? "btn btn-primary btn-block" : "btn btn-success btn-block"}/>
                </div>
            </form>
            
        </>
    );
}
