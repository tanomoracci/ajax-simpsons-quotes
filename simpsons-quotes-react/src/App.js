import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Quote from './Quote'

const quote = {
  character: 'Homero',
  quote: `For once maybe someone will call me "sir" without adding, "You're making a scene."`,
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quote
    }
  this.getQuote = this.getQuote.bind(this);    
  }

  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data =>
      this.setState({
        quote: data[0],
      }) );
    };

  render() {
  
    return (
      <>
      <div className='jumbotron jumbotron-fluid bg-primary'> 
      
      <h1 className='display-4 text-center warning'> Simpsons Quotes </h1>
      
      </div>

      <div className='d-flex justify-content-center'> 
        <div className='card'> 
        <button type='button' className='btn btn-large btn-warning m-3' onClick={this.getQuote}> Get a new Quote</button>
        <Quote className='align-self-center' quote={this.state.quote}/> 
        </div>
        
      
      </div>
      
      </>
    );
  }
}
export default App;
