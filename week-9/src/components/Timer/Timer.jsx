import React, { Component } from "react";
import "./Timer.scss";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancelId: null,
            minutes: 0,
            seconds: 0,
            timer: "00:00",
        };
    }

    componentDidMount() {
        let id = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
            if (this.state.seconds === 60) {
                this.setState({ seconds: 0, minutes: this.state.minutes + 1 });
            }
            let newSeconds = this.state.seconds.toString();
            let newMinutes = this.state.minutes.toString();
            if (this.state.seconds < 10) {
                newSeconds = `0${this.state.seconds}`;
            }
            if (this.state.minutes < 10) {
                newMinutes = `0${this.state.minutes}`;
            }
            this.setState({
                timer: `${newMinutes}:${newSeconds}`,
            });

            if (this.state.minutes === 5) {
                this.stopTimer();
            }
        }, 1000);
        this.setState({ cancelId: id });
    }

    stopTimer() {
        clearInterval(this.state.cancelId);
    }

    render() {
        return <div className='timer bold'>{this.state.timer}</div>;
    }
}
