import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact" style={this.props.style}>
        <span>
          <a href="https://github.com/JSLinn727" target="_blank">
            <i className="fa fa-github fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>JSLinn727</p>
        </span>
        <span>
          <a href="#" target="_blank">
            <i className="fa fa-linkedin-square fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>LinkedIn</p>
        </span>
        <span>
          <a href="mailto:justinslinn727@gmail.com">
            <i className="fa fa-envelope fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>justinslinn727@gmail.com</p>
        </span>
        <span>
          <a href="tel:727-709-2806">
            <i className="fa fa-phone-square fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>(727) 709-2806</p>
        </span>
        <span>
          <a href="#" target="_blank">
            <i className="fa fa-address-card fa-2x devContact" aria-hidden="true" style={this.props.style} />
          </a>
          <p>Resume</p>
        </span>
      </div>
    )
  }
}

export default Contact
