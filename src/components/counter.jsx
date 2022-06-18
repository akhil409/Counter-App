import React, { Component,createContext } from 'react';

class Counter extends Component {
    //Removing this state for single sourse of truth
    // state = { 
    //           value:this.props.counter.value,
    //           tags:['Tag1','Tag2','Tag3'] 
    //         };
    // // Rendering Lists & Conditional Rendering
    // // Render tags to use a if,else statements        
    // renderTags() {
    //     if(this.state.tags.length === 0)
    //         return <p>There are no Tags...!</p>
            
    //     return  <ul>
    //                  {this.state.tags.map((tag)=><li key={tag}>{tag}</li>)}
    //             </ul>
    // }

    //Binding Event Handlers
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    //Removing this handleIncrement for single sourse of truth
   //Binding Event Handlers & Updating the State
//    handleIncrement = (product) => {
//     //console.log('Increment is Clicked',this);
//        console.log(product);
//        this.setState({value: this.state.value + 1})
//    }
    
     componentDidUpdate(prevProps,prevState){
         console.log("prevProps",prevProps);
         console.log("prevState",prevState);
         if(prevProps.counter.value !== this.props.counter.value){
             //Ajax call and get new data from the server
           }
         }

         componentWillUnmount(){
             console.log('Counter - Unmount')
         }

    render() {  
        //React Property
        console.log('props',this.props);
        console.log('Counter - Rendered');

        return (
        <React.Fragment>
            {/* <h2>{this.props.id}</h2> */}
            <span  className={this.getBadgeClasses()}>
                {this.formateCount()}
            </span>
            
            <button onClick = {()=>this.props.onIncrement(this.props.counter)} 
                    className='btn btn-success btn-sm'>Increment
            </button>  
             
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m2">Delete
             </button> 
             
             <br></br>
            {/*Rendering Lists & Conditional Rendering */}
                {/* {this.state.tags.map((tag)=>
                  <li key={tag}>{tag}</li>
                )} */}

                {/* {this.state.tags.length === 0 && "Create a New Tags"}
                {this.renderTags()} */}
            
        </React.Fragment> 
        );
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
            classes+= this.props.counter.value === 1 ? 'danger' : 'primary';
            return classes;
    }

    formateCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;

