import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

class PhotoGallery extends Component {
  
  render () {
    
    const images = this.props.data ? this.props.data : []

    return (
      <section id="gallery">
        {/* <h2>Gallery</h2> */}
        <div style={{
            display: "block",
            background:"floralwhite",
            minHeight: "1px",
            width: "100%",
            border: "0px solid #ddd",
            padding: "42px",
            overflow: "auto"}}>
            <div style={{
                 color: "#666"
                }}>
            </div>
            <h2>Photo Gallery</h2>
            <Gallery
                images={images}
                enableLightbox={true}
                enableImageSelection={false}
                currentImageWillChange={this.onCurrentImageChange}
            />
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
