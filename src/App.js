import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import  Counters from './components/counters';
import practise from './components/practise'

class App extends Component { 

  state = {
        counters:[
            {id:1,value:1},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    };

    constructor() {
      super();
      console.log('App - Constructor');
      // this.state = this.props.something;
    }

    //This method us called after our componet is rendered into the DOM
    componentDidMount() {
      // // Ajax Call
      // this.setState({})
      console.log('App - Mounted')

    }

    handleIncrement = (counter) => {
    //    console.log(counter);
    const counters = [...this.state.counters]; //With this we get new array of counters
    const index = counters.indexOf(counter); 
    counters[index] = {...counter};             //THis is clone of the counter - read the below statement
    counters[index].value++;   
    this.setState({ counters })                  //Byt this we are modifying the actual or original data but we should do like that - to overcome that we can clomne that and chnage the value so we can change the clone value only not the original data
    // console.log(this.state.counters[0]);
    }

    handleReset = () => {
        const counters = this.state.counters.map(c=> {c.value = 0;
            return c;
        });
            this.setState({ counters });
    }

    handleDelete=(counterId)=> {
        // console.log("Delete Handle Event is Working..!",counterId);
         const counters = this.state.counters.filter(c => c.id!== counterId);  //New Array to store the new data
        this.setState({counters});
    }

  render() { 

    console.log('App - Rendered');

    return (
      <React.Fragment>
        <NavBar 
        totalCounters ={this.state.counters.filter(c => c.value>0).length} 
        />
    <main className='container'>
      <Counters 
       counters = {this.state.counters}
       onReset={this.handleReset}
       onIncrement={this.handleIncrement}
       onDelete={this.handleDelete}  
      />

    </main>
      </React.Fragment>
    );
  }
}

export default App;
