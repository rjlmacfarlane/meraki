import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Ethos from './Components/Ethos';
import PhotoGallery from './Components/Gallery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      siteData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getSiteData(){
    $.ajax({
      url:'/siteData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({siteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getSiteData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.siteData.main}/>
        <About data={this.state.siteData.main}/>
        <PhotoGallery data={this.state.siteData.gallery}/>
        <Ethos data={this.state.siteData.ethos}/>
        <Contact data={this.state.siteData.main}/>
        <Footer data={this.state.siteData.main}/>
      </div>
    );
  }
}

export default App;