import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bioLineOne = this.props.data.bioLineOne;
      var bioLineTwo = this.props.data.bioLineTwo;
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
            <h2>About Me</h2>

            <p>{bioLineOne}</p>
            <p>{bioLineTwo}</p>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
