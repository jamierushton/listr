import React, { Component } from "react";

interface IProps {
  value: number;
}

class ProgressBar extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className="progress mt-2 mb-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: this.props.value + '%' }}
        >

        {this.props.value > 0 && (
          <span>{this.props.value}%</span>
        )}

        </div>
      </div>
    );
  }
}

export default ProgressBar;
