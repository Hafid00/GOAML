import React, { Component } from 'react'


export default class strMorale extends Component {
    onHomeClick(){
        let { history } = this.props;
        history.push({
         pathname: '/',
        });
       }
      
  render() {
    return (
        <div className="strMorale" class="container">
        <div>
            <nav class="navbar">
                <a class="goaml">STR Morale</a>
            </nav>
        </div>
              
        </div>
    )
  }
}

