import React, {Component} from 'react';

export default class Track extends Component {
  render() {
    return (
      <li>
        <audio src={this.props.track.preview_url} type="audio/mpeg" controls></audio>
        <p>{this.props.track.name}</p>
      </li>
    )
  }
}
