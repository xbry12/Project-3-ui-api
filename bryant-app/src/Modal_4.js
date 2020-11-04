import React, { Component } from 'react';
import './Modal.css';

class Modal4 extends Component {

    constructor(props) {
        super(props)
        let css = "modal-container";
        if (props.showModal !== true) {
            css += " hideModal "
        }
        this.state = {
            css: css,
            showModal: props.showModal
        };
    };

    componentDidUpdate(props) {

        console.log(props, this.props)

        if (this.state.showModal !== this.props.showModal) {
            this.setState({
                showModal: this.props.showModal,
                css: this.getCss(this.props.showModal)
            })
        }
    }

    getCss(showModal) {
        let css = "modal-container";
        if (showModal !== true) {
            css += " hideModal "
        }
        return css
    }

    render() {
        // console.log("Hello")
        return (
            <div className= {this.props.css}>
               <h1>  {this.props.css} </h1>
                
                {/*
               <div className="picture1" onChange={this.state.css}>
                    PICTURE TEST
                </div> */}

            </div>
            
            );
    };

};
export default Modal4;