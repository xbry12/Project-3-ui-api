import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
                modalOn: false
            };
    };

    handleClick = (e) => {
        if (this.state.modalOn === true) {
            e.target.classList.remove("smallModal")
            e.target.classList.add("bigModal")

            this.setState({
                modalOn: false,
            })
        }

        else {
            e.target.classList.remove("bigModal")
            e.target.classList.add("smallModal")
            this.setState({
            modalOn: true
           })
    }
    }

    render() {
        console.log(this.props)
        return (
            <div  onClick={this.handleClick} className="flags">
                <h1> {this.props.name} </h1>
                {this.props.modalinfo}
                <img src={this.props.flag} height="120px"/>
            
            </div>

        );
    };

};
export default Modal;

// {/* props are used to RECEIVE information from other components */}
