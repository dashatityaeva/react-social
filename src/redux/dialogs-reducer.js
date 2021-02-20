const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Great!"},
        {id: 3, message: "Good job"}
    ],
    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Diana"},
        {id: 3, name: "Dina"},
        {id: 4, name: "Dinara"},
    ]
};

const dialogsReducer = (state = initialState, action) => {



    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;