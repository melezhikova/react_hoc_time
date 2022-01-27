import React from "react";

function DateTimePretty (Component) {
    return class extends React.Component {

        state = {};

        componentDidMount() {
            const duration = new Date() - new Date(`${this.props.date}`);
            let time, newprop;

            if ((duration / (1000 * 60 * 60)) < 1) {
                time = Math.floor(duration / (1000 * 60));
                newprop = `${time} минут назад`;
            } else if ((duration / (1000 * 60 * 60 * 24)) < 1) {
                time = Math.floor(duration / (1000 * 60 * 60));
                newprop = `${time} часов назад`;
            } else {
                time = Math.floor(duration / (1000 * 60 * 60 * 24));
                newprop = `${time} дней назад`;
            }

            this.setState ({ newprop: newprop });
        }

        render() {
            return (
                <Component date={this.state.newprop} />
            )
        }
    }
}

export default DateTimePretty;