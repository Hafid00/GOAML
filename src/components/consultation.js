import React, { Component } from 'react'


export default class consultation extends Component {
    onHomeClick(){
        let { history } = this.props;
        history.push({
         pathname: '/',
        });
       }
  render() {
    return (
        <div className="consultation" class="container">
        <div>
            <nav class="navbar">
                <a class="goaml">Consultation</a>
            </nav>
        </div>
              
        </div>
    )
  }
}

