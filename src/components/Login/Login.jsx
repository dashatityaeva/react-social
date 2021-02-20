import React from 'react'
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import cl from "../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, [required], "email", "text", "Email")}
            {createField(Input, [required], "password", "password", "Password")}
            {createField(Input, [], "rememberMe", "checkbox", null, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField(Input, [required], "captcha", "text", "captcha")}
            {error &&  <div className={cl.formSummaryError}>{error}</div>}
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const  onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return  <Redirect to="/profile"/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);