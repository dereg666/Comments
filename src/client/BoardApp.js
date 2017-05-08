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
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.textBlur = this.textBlur.bind(this);
    this.textFocus = this.textFocus.bind(this);
    this.submitFunction = this.submitFunction.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.update();
  }
  update() {
    fetch('/api/loading')
      .then(response => response.json())
      .then((data) => {
        this.setState({ comments: data });
      }).catch((error) => {
        console.log('request failed', error);
      });
  }
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
      fetch ('/api/posting', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(temp);
      }).then(res => {
        if (res.ok) {
          temp.push(addComment);
          this.setState({ comments: temp });
          this.setState({ addCommentUser: '' });
          this.setState({ addCommentValue: '' });
        } else {
          let err = new Error(res.statusText);
          err.response = res;
          throw err;
        }
      }).catch(err => {
        console.error(err);
        this.update();
      });
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
              onChange={e => this.handleCommentChange(e, 0)}
            />
            <input
              type="text"
              value={this.state.addCommentValue}
              placeholder={this.state.addCommentHolder}
              onChange={e => this.handleCommentChange(e, 1)}
              onFocus={this.textFocus}
              onBlur={this.textBlur}
            />
            <input
              type="submit"
              value="Save"
              onClick={this.submitFunction}
            />
          </div>
          <div className="Comments">
            {this.state.comments.map(c => <CommentSection
              userName={c.Name}
              commentValue={c.Value}
              postTime={c.Time}
            />)}
          </div>
          <div>end</div>
        </div>
      </div>
    );
  }
}

export default BoardApp;
