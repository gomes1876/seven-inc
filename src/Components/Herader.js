import React from 'react';

export const Header = ({title, identify}) =>{

    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{identify}</p>
            </div>
        </div>
    );
}