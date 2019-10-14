import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

class MessageList extends React.Component {

    constructor(props){
        super(props);

        this.logRender = this.logRender.bind(this);
    }

    logRender(){
        console.log('rerender!!');
    }

    render(){

        this.logRender();

        return (
            <div id='message-list-container'>
                <div>A messages list</div>
                <ul className='messages-list'>
                    {
                        this.props.messageList.map((message, index) => {

                            // const message = this.props.messageList[key];

                            return (
                                <li key={`message-index-${index}`} className={'message'}> {/*`*/}
                                    <span className={'message-author'}>{message.author} - </span>
                                    <span className={'message-title'}>{message.title}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

const messagesListSelector = createSelector(
    (messages) => messages.list,
    (messages) => messages.searchAuthor,
    (list, search) => {
        return list.filter((message) => message.author === search)
    }
);

function mapStateToProps(state){
    const { messages } = state;

    // const messageList = messages.list.filter((message) => message.author === messages.searchAuthor);

    return {
        messageList: messagesListSelector(messages),
    }
}

export default connect(mapStateToProps)(MessageList);
