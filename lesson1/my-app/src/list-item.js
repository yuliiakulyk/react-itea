import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrived: false
        }

        this.markArrived = this.markArrived.bind(this);
    }

    markArrived() {
        this.setState({ arrived: !this.state.arrived });
    }

    render() {
        const { guest } = this.props;
        const arrived = "Прибыл";
        const line1 = <p>Гость <b>{guest.name}</b> работает в компании <b>"{guest.company}"</b>.</p>;
        const line2 = <p>Его контакты:</p>;
        const line3 = <p><b>{guest.phone};</b></p>;
        const line4 = <p><b>{guest.address}</b></p>;

        return (
            <div className={this.state.arrived ? "list-item done" : "list-item"}>
                <div className="inline">
                    {line1}
                    {line2}
                    {line3}
                    {line4}
                </div>
                <div className="inline">
                    <button className="btn btn-success" onClick={this.markArrived}>{arrived}</button>
                </div>
            </div>
        );
    }
}

export default ListItem;