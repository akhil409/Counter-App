import React, { Component } from 'react';

//Stateless Functional Components
const NavBar = props => {
    console.log('NavBar - Rendered');
    
    return ( 
        <nav className="navbar navbar-light bg-light">
                
                 <a className="navbar-brand" href="#">
                     Navbar{""}
                      <span className="badge badge-pill badge-secondary">
                          {props.totalCounters}
                          </span>
                     </a>
                 
            </nav>
     );
}
 
export default NavBar;

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
                
//                  <a class="navbar-brand" href="#">
//                      Navbar{""}
//                       <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                      </a>
                 
//             </nav>
//         );
//     }
// }