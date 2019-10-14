import React from 'react';
import {connect} from 'react-redux';
import {increaseTimer} from "./timer-actions";

class Timer extends React.Component {

    constructor(props){
        super(props);

        this.increaseTime = this.increaseTime.bind(this);
        this.getFormattedSeconds = this.getFormattedSeconds.bind(this);

        this.timerInterval = 0;
    }

    componentDidMount() {
        // when component is mounted, start counting
        this.timerInterval = setInterval(this.increaseTime, 1000);
    }

    increaseTime(){
        this.props.dispatch(increaseTimer(this.props.time));
    }

    getFormattedSeconds(time){
        return new Date(time * 1000).toISOString().substr(11, 8);
    }

    render(){
        return (
            <div id='timer-container'>
               <span className={'timer-title'}>Current Time is - </span>
               <span className={'timer-time'}>{this.getFormattedSeconds(this.props.time)}</span>
            </div>
        );
    }
}

function mapStateToProps(state){
    const { timer } = state;

    return {
        time: timer.currentTime
    }
}

export default connect(mapStateToProps)(Timer);
