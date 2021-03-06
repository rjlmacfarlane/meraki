import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
          <br/>
          <img src="images/brand-mark.png" alt="Local Interior Home Designs by Meraki"></img>
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Meraki Home Design Studio and Associated Content &copy; 2021 Iris Chanterelle</li>
              <li>Developed by <a title="Ryan MacFarlane" href="https://github.com/rjlmacfarlane">Ryan MacFarlane</a></li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
