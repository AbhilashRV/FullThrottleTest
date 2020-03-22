import React, { Component } from 'react';   

const Input = props =>{
    return(
        <div className="form-group">
                    <label htmlFor={props.name}>{props.name}</label>
                    <input value={props.value} onChange={props.onChange} type={props.type} id={props.name} name={props.name} type="text" className="form-control"/>
                   {props.error && <div className="alert alert-danger">{props.error}</div>}
                </div>
    );
}

export default Input;