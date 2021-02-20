import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import cl from "../../Common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error &&  <div className={cl.formSummaryError}>{error}</div>}

            <div>
                <b>Full name:</b> {createField(Input, [], "fullName", "text", "Full name")}
            </div>

            <div>
                <b>Looking for a job:</b> {createField(Input, [], "lookingForAJob", "checkbox", "")}
            </div>
            <div>
                <b>My professional skills:</b> {createField( Textarea,  [], "lookingForAJobDescription", "text", "My professional skills")}
            </div>
            <div>
                <b>About me:</b>{createField( Textarea,  [], "aboutMe", "text", "About me")}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(Input, [], "contacts."+key, "text", key)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm