import React, { Component } from 'react';

class Ethos extends Component {
  render() {

    if(this.props.data){
      var ethos = this.props.data.ethos.map(function(ethos){
        return  <li key={ethos.user}>
            <blockquote>
               <p>{ethos.text}</p>
               <cite>{ethos.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="ethos">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Ethos</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {ethos}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Ethos;
