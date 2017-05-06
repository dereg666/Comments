import React, { Component } from 'react';
import CommentSection from './CommentSection';


class BoardApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      addCommentHolder: 'Type to add a comment',
      addValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
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
    const tempValue = this.state.addValue;
    tempValue[section] = event.target.value;
    this.setState({ addValue: tempValue });
  }
  textFocus() {
    this.setState({ addCommentHolder: '' });
  }
  textBlur() {
    this.setState({ addCommentHolder: 'Type to add a comment' });
  }
  submitFunction() {
    if (this.state.addCommentValue) {
      const addList = {
        todoName: this.state.lists.length.toString() + ' ' + this.state.addListValue,
        todoItems: [],
      };
      const temp = this.state.lists;
      temp.push(addList);
      this.setState({ showMode: (temp.length + 2) });
      this.setState({ lists: temp });
      this.setState({ addListValue: '' });
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
            <input />
          </div>
          <div className="Comments">
            {this.state.comments.map(c => <CommentSection />)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoardApp;
