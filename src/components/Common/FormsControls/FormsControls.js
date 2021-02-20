import React from "react";
import cl from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={cl.formControl + " " + (hasError ? cl.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (component, validators, name, type, placeholder, text="") => (
    <div>
        <Field component={component}
               validate={validators}
               name={name}
               type={type}
               placeholder={placeholder}/> {text}
    </div>
)