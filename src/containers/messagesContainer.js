import { connect } from 'react-redux';

import { sendMessage as sendMessageAction } from '../actions/messages.js';

import Chat from '../components/Chat.jsx';

const statesMap = state => {
    console.log('statesMap', state);
    return {
        messages: state.messagesReducer.messages
    }
};

const dispatches = dispatch => {
    console.log('dispatch', dispatch);
    return {
        message: (data) => dispatch( sendMessageAction(data) )
    }
};

const messagesContainer = connect(statesMap, dispatches);
export default messagesContainer;