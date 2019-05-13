import React, { Component } from 'react'


export default class aifphysique extends Component {
    onHomeClick(){
        let { history } = this.props;
        history.push({
         pathname: '/',
        });
       }
  render() {
    return (
        <div className="aifPhysique" class="container">
        <div>
            <nav class="navbar">
                <a class="goaml">Aif Physique</a>
            </nav>
        </div>
              
        </div>
    )
  }
}
