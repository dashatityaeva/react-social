import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postsElem = props.posts.map( p => <Post key={p.id} message={p.post} likeCount={p.likeCount}/> );
    let newPostElem = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div>
                {postsElem}
            </div>
        </div>
    );
}

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText"
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;