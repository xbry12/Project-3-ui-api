<p>Hello World

{/* components first */}
   {/* api al */}
 </p>
 {
   this.state.modalOn === true ? <Modal /> : ""
 }
 <div className="btn" onClick={this.handleClick} >
   The Button
</div>

 <div className="close-out">

   <Modal>
     {<button type="button" onClick={this.closeOut}> X </button>}
     {this.state.closeButton === false ? <Modal /> : ""}
   </Modal>

   // add in a way to close the modal ("x" button) => ODNE
            //  create that function in App.js => pass function down to modal FROM app, to close itself => DONE
            //  ex: handleClick Method => DONE 
            // *** Where should state live? *** => state lives in parent element because that decides when it opens or closes => DONE
            // 

              // closeOut = () => {
  //   console.log("closed")
  //   if (this.state.closeButton === false) this.setState({
  //     closeButton: true
  //   })
  //   else (this.setState({
  //     closeButton: false
  //   }))
  // }


    closeOut = () => {
        console.log("closed")
        if (this.state.closeButton === false) this.setState({
            closeButton: true
        })
        else (this.setState({
            closeButton: false
        }))
    }


     // let css = "modal-container";
        // if (props.showModal !== true) {
        //     css += " hideModal "
        // }
        // this.state = {
        //     css: css,
        //     showModal: props.showModal,
        //     modalOn: false
        // };
 
    // componentDidUpdate(props) {

    //     console.log(props, this.props)

    //     if (this.state.showModal !== this.props.showModal) {
    //         this.setState({
    //             showModal: this.props.showModal,
    //             css: this.getCss(this.props.showModal)
    //         })
    //     }

    // }

    // getCss(showModal) {
    //     let css = "modal-container";
    //     if (showModal !== true) {
    //         css += " hideModal "
    //     }
    //     return css
    // }

        // let currentState = this.modalOn
        // console.log("Hello")
  {/* <h1> This is the Modal2 </h1> */}
                {/*
               <div className="picture1" onChange={this.state.css}>
                    PICTURE TEST
                </div> */}

                {/* <div className={this.state.css}></div>    */}

                {/* <div className={this.state.css}></div>    */}

                       // if (props.showModal !== true) {
            // css += " hideModal "
        // }

          // for (let i = 0; i < modals.length; i++) {
    //   console.log(modals[i])
    //   modalKey.push(<Modal {...modals[i]} />)
    // }





/* .alert {
    background-color: white;
    border: none;
} */

/* .picture1 {
    height: 500px;
    width: 500px;
    background-color: tomato;
} */







/*  add functionality with position absolute */
/* feed modal with info required (send modal the props of the message you'd like) => finished */
/* pick api => send info from api for each specific item that you're clicking => need to add api */
/* componentDidMount => for api => App.js => populate w/ thumbnails => event listeners to each thumbnail */
/* event listener will show you the modal  */






/* .btn {
  border-radius: 5px;
  width: 200px;
  height: 150px;
  background-color: aqua;
} */

/* .App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */
