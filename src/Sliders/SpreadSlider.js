import React, { Component } from "react";

class SpreadSlider extends Component {
  state = {
    spreadValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ spreadValue: value });
    this.props.SpreadSliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <label
        htmlFor="num-octaves-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrReference}: {this.state.spreadValue}
        </p>{" "}
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.spreadValue}
        />
      </label>
    );
  }
}

export default SpreadSlider;
