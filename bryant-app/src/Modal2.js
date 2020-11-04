import React, { Component } from 'react';
import './Modal.css';

class Modal2 extends Component {

    constructor(props) {
        super(props)
        let css = "modal-container";
 
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

    handleClick = () => {
        // let currentState = this.modalOn
        console.log("button clicked")
        if (this.state.modalOn === true) this.setState({
          modalOn: false
        })
        else (this.setState({
          modalOn: true
        }))
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
            <div className="modal-container1" >
               {/* <h1> {this.props.css }</h1> */}
                {this.modalOn}
               <button onClick={this.handleClick}>Modal 2</button>

            </div>
            
            );
    };

};
export default Modal2;