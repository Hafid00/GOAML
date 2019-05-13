import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom';


class home extends Component {
  
  render() {
    return (

    
      <div className="home" class="container">
     
                <div>
                  <div class="homeButton">
                         <Link to="/strPhysique" className="btn btn-primary mb-3">STRPhysique</Link>                     
                          <Link to="/strMorale" className="btn btn-primary mb-3">STRMorale</Link>
                </div>
                <div class="homeButton">
                      <Link to="/aifPhysique" className="btn btn-primary mb-3">AIFPhysique</Link>   
                      <Link to="/aifMorale" className="btn btn-primary mb-3">AIFMorale</Link>   
                </div>
                <div class="homeButtonLast"> 
                <Link to="/addProjectTask" className="btn btn-primary mb-3">Consultation
                <i className="far fa-sign-out">LogOut</i></Link>                </div>
                </div>
      </div> 
    )
  }
}
export default withRouter(home);
// function strPhysique() {
//   return (
//     <strPhysique/>
//   );
// }