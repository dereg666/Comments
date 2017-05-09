import React, { Component } from 'react';
import PropTypes from 'prop-types';

const showDate = (ms) => {
  const past = new Date(ms);
  // const now = new Date();
  // console.log(ms);
  // if (now.getSeconds() - past.getSeconds() < 60) {
  //   return 'Just now';
  // } else if (now.getMinutes() - past.getMinutes() < 60) {
  //   return (now.getMinutes() - past.getMinutes()).toString() + ' mins';
  // } else if (now.getHours() - past.getHours() < 24) {
  //   return (now.getHours() - past.getHours()).toString() + ' hrs';
  // }
  return past.toLocaleDateString() + ' at ' + past.toLocaleTimeString();
};

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.userName}</div>
        <div>{this.props.commentValue}</div>
        <div>{showDate(this.props.postTime)}</div>
        <div>{this.props.ip}</div>
        <br />
        <br />
      </div>
    );
  }
}

CommentSection.PropTypes = {
  userName: PropTypes.string.isRequired,
  commentValue: PropTypes.string.isRequired,
  postTime: PropTypes.number.isRequired,
  ip: PropTypes.string.isRequired,
};

export default CommentSection;
