import React, { Component } from 'react';
import fs from 'fs';

class Footer extends Component {
  render() {
    let copy = fs.readFileSync('./src/api/copyright.txt', 'utf8');
    return (
      <section className="footer container">
        <p>Find me on social media.</p>
        <a href= 'http://facebook.com/ns562117'><i className="fa fa-facebook-official fa--opacity"></i></a>
        <a href= 'https://www.instagram.com/navi562117/'><i className="fa fa-instagram fa--opacity"></i></a>
        <a href= 'https://github.com/Naveen562117/'><i className="fa fa-github fa--opacity"></i></a>
        <a href= 'https://twitter.com/navi_appu'><i className="fa fa-twitter fa--opacity"></i></a>
        <a href= 'https://www.linkedin.com/in/naveen-kumar-p-530859134/'><i className="fa fa-linkedin fa--opacity"></i></a> 
      </section>
    );
  }
}

export default Footer;