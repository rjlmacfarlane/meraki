import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bioLineOne = this.props.data.bioLineOne;
      var bioLineTwo = this.props.data.bioLineTwo;
      // The following variables can be passed in as props, but aren't needed now (see siteData.json)
      // var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Iris Chanterelle Profile" />
            
         </div>
         <div className="nine columns main-col">

            <h2>Meet Iris Chanterelle, Designer</h2>

            <p>{bioLineOne}</p>
            <p>{bioLineTwo}</p>

            <img className="signature" src="images/signature.png" alt="Iris Chanterelle"></img>
         </div>
      </div>

   </section>
    );
  }
}

export default About;