import React from 'react';

export const FormInput = ({placeholder, name, onChange, type, value, identify}) =>{

    return(
        <>
            <div className="input-group-prepend">
                <span className="input-group-text">{identify}</span>
            </div>
            <input value={value} type={type} onChange={onChange} className="form-control" placeholder={placeholder} name={name} />
        </>
    )
}