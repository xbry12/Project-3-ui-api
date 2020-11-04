import { Component } from 'react';
import './App.css';
import Modal from './Modal.js'

class App extends Component {

  constructor(props) {
    super(props)


    this.state = {
      linkJson: [],
      modalOn: true
    }
  }

  componentDidMount(e){
    let link = 'https://restcountries.eu/rest/v2/all';
    fetch(link)
      .then(response => response.json())
      .then(output => this.setState({linkJson:output}));
    //  the place you use to store variables which needs to be sent to render is state*** 
  }
 

  handleClick = () => {
    if (this.state.modalOn === true) this.setState({
      modalOn: false
    })
    else (this.setState({
      modalOn: true
    }))
  }

  render() {
    console.log(this.state.linkJson)
    const modals = this.state.linkJson

  
    let id = 0;
    const modalCollection = modals.map((modals) => (
      <Modal key={(id += 1)} {...modals} />
    ));

    // console.log(this.state.modalOn)
    return (
      <div className="App" >
        {modalCollection}
        {/* entity that has all my modals */}
        <h1>Modal is above</h1>
        <Modal showModal={this.state.modalOn}/>
        {/* <button onClick={this.handleClick}>toggle Modal</button> */}
      </div>
    );
  }
}

export default App;
