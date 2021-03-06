import React, { Component } from 'react';

class Header extends Component {
  render() {

   //  The following props are passed, but are not used unless needed in the future.

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var occupation= this.props.data.occupation;
   //    var description= this.props.data.description;
   //    var city= this.props.data.address.city;
   //    var networks= this.props.data.social.map(function(network){
   //      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   //    })
   //  }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#gallery">Gallery</a></li>
            <li><a className="smoothscroll" href="#ethos">Ethos</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            
            <img src="images/logo.png" alt="Meraki Home Design Studio Nova Scotia"></img>
            
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
