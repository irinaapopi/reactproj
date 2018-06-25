import React, { Component } from 'react';
//import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      error: null,
      isLoaded: false,
      data: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount()
  {
    fetch('https://raw.githubusercontent.com/mspanish/playground/master/jessica.json')
    .then((response) => response.json())
    .then(
      (findresponse)=>{
        console.log(findresponse)
        this.setState({
          isLoaded: true,
          data: findresponse.basket.productList,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
    }

  render()
  {
    const {error, isLoaded, data} = this.state;

    if(error){
      return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading...</div>;
    }else{
      return(
          <div>
            {data.map(item => (
            <li key={item.product}>
              {item.product.name} {item.price}
            </li>
          ))} 
          </div> 
      )
    }
  }
}

export default App;
