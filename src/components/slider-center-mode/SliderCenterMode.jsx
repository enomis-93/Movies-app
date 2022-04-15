import React from "react";
import Slider from "react-slick";

export default class SliderCenterMode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(props);
  }
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="my-3">
        <Slider {...settings}>
          {this.props.popular.map((movie) => {
            return (
              <div key={movie.id}>
                <img
                  className="mx-1"
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
