import React, { Component } from 'react'


export default class aifMorale extends Component {
    onHomeClick(){
        let { history } = this.props;
        history.push({
         pathname: '/',
        });
       }
  render() {
    return (
        <div className="aifMorale" class="container">
        <div>
            <nav class="navbar">
                <a class="goaml">Aif Morale</a>
            </nav>
        </div>
              
        </div>
    )
  }
}
