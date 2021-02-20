import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

// данные с сервера

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi, i'm Dima", likeCount: 2},
                {id: 2, post: "Hi, i`m gegi", likeCount: 25},
                {id: 2, post: "Hi, peace", likeCount: 205},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Great!"},
                {id: 3, message: "Good job"}
            ],
            newMessageText: '',
            dialogsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Diana"},
                {id: 3, name: "Dina"},
                {id: 4, name: "Dinara"},
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state is change')},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
