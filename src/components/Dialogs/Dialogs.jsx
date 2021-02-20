import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElem = state.messagesData.map( m => <Message message={ m.message} key={m.id} /> );
    let newMessageText = state.newMessageText;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    if (!props.isAuth ) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElem }
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage} />

        </div>
    )
};

const  AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}  validate={[required, maxLength50]} name="newMessageText" placeholder="Enter your message"/>
            <button>Send</button>
        </form>
    )
}

const  AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;