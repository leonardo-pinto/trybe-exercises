import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <p>Want to know about me? I'm the About Page.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}
