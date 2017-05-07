import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.userName}</div>
        <div>{this.props.commentValue}</div>
      </div>
    );
  }
}

CommentSection.PropTypes = {
  userName: PropTypes.string.isRequired,
  commentValue: PropTypes.string.isRequired,
};

export default CommentSection;
