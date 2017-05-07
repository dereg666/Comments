import React, { Component } from 'react';
import CommentSection from './CommentSection';


class BoardApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      addCommentHolder: 'Type to add a comment',
      addCommentValue: '',
      addCommentUser: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.textBlur = this.textBlur.bind(this);
    this.textFocus = this.textFocus.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
  }
  // componentDidMount() {
  //   fetch('/api')
  //     .then(response => response.json())
  //     .then((data) => {
  //       this.setState({ comments: data });
  //     }).catch((error) => {
  //       console.log('request failed', error);
  //     });
  // }
  handleCommentChange(event, section) {
    if (section === 0) {
      this.setState({ addCommentUser: event.target.value });
    } else if (section === 1) {
      this.setState({ addCommentValue: event.target.value });
    }
  }
  textFocus() {
    this.setState({ addCommentHolder: '' });
  }
  textBlur() {
    this.setState({ addCommentHolder: 'Type to add a comment' });
  }
  submitFunction() {
    if (this.state.addCommentValue) {
      const addComment = {
        Name: this.state.addCommentUser ? this.state.addCommentUser : 'Anonymous',
        Value: this.state.addCommentValue,
        Time: Date.now(),
      };
      const temp = this.state.comments;
      temp.push(addComment);
      this.setState({ comments: temp });
      this.setState({ addCommentUser: '' });
      this.setState({ addCommentValue: '' });
    }
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1> Comment Board </h1>
        </div>
        <div className="App">
          <div className="InputBox">
            <input
              type="text"
              value={this.state.addCommentUser}
              placeholder={this.state.addCommentHolder}
              onChange={this.handleCommentChange}
              onFocus={this.textFocus}
              onBlur={this.textBlur}
            />
            <input
              type="text"
              value={this.state.addCommentUser}
              onChange={this.handleCommentChange}
              />
          </div>
          <div className="Comments">
            {this.state.comments.map(c => <CommentSection
              userName={c.Name}
              commentValue={c.Value}
            />)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoardApp;
