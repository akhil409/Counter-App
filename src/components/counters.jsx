import React ,{ Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = {
    //     counters:[
    //         {id:1,value:5},
    //         {id:2,value:6},
    //         {id:3,value:7},
    //         {id:4,value:8}
    //     ]
    // };

    // handleIncrement = (counter) => {
    // //    console.log(counter);
    // const counters = [...this.state.counters]; //With this we get new array of counters
    // const index = counters.indexOf(counter); 
    // counters[index] = {...counter};             //THis is clone of the counter - read the below statement
    // counters[index].value++;   
    // this.setState({ counters })                  //Byt this we are modifying the actual or original data but we should do like that - to overcome that we can clomne that and chnage the value so we can change the clone value only not the original data
    // // console.log(this.state.counters[0]);
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(c=> {c.value = 0;
    //         return c;
    //     });
    //         this.setState({ counters });
    // }

    // handleDelete=(counterId)=> {
    //     // console.log("Delete Handle Event is Working..!",counterId);
    //      const counters = this.state.counters.filter(c => c.id!== counterId);  //New Array to store the new data
    //     this.setState({counters:counters});
    // }

    render () {
        console.log('Counters - Rendered');

        const {onReset,conters,onDelete,onIncrement} = this.props;
      return  (
          
      <div>

          <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
          {this.props.counters.map((counter)=>
           <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement = {onIncrement}
                counter={counter}>   {/* //value={counter.value} selected={true} id={counter.id}// */}
           
              {/* <h2>Counter #{counter.id}</h2> */}
          </Counter>)}
          
      </div>)
    }
}

export default Counters;