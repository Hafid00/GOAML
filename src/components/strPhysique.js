import React, { Component } from 'react'


export default class strPhysique extends Component {
    onHomeClick(){
        let { history } = this.props;
        history.push({
         pathname: '/',
        });
       }
  render() {
    return (
        <div className="strPhysique" class="container">
        <div>
            <nav class="navbar">
                <a class="goaml">Str Physique</a>
            </nav>
        </div>
              
        </div>
    )
  }
}

