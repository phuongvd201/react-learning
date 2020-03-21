import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sidebar = (
    <ul>
      {this.props.posts.map(post => (
        <li key={[post.id]}>
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );

  content = (
    <ul>
      {this.props.posts.map(post => (
        <li key={[post.id]}>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        {this.sidebar}
        <hr></hr>
        {this.content}
      </div>
    );
  }
}

export default Blog;
