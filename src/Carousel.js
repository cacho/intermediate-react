import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="pet" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //eslint-disable-next-line
            <img
              src={photo}
              key={photo}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="pet thumbnail"
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
