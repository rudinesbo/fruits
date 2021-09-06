import React from "react";
import { Link } from "react-router-dom";

import banana from "../media/img-1.png";
import mango from "../media/img-2.png";
import lime from "../media/img-3.png";

export default function Home() {
  return (
    <div className="home">
      <Link to="/fruits">
        <li className="fruits">fruits</li>
      </Link>

      <div className="welcome-text">
        <h1 className="title">
          We’re a digital agency that helps businesses and projects to succeed.
        </h1>
        <p>
          Sometimes we also do our own projects. For example MotiDay has over
          300,000 downloads in Russia and is growing internationally.
          <br />
          <br />
          <a href="mailto:nesborudi@gmail.com">nesborudi@gmail.com</a>
        </p>
      </div>
      <div className="blue-box"></div>
      <p className="current-work">
        We’re currently working on our full website with works, testimonials and
        other typical stuff that will help us get cool clients.
        <br />
        <br /> Meanwhile, take a look at these peaceful artworks of fruits by
        Mike Dorner.
      </p>
      <div className="img-1">
        <img src={banana} alt="a beautiful banana" />
      </div>

      <div className="img-2">
        <img src={mango} alt="a delicious ripe mango" />
      </div>

      <div className="yellow-box">
        <div className="pink-box"></div>
      </div>
      <div className="img-3">
        <img src={lime} alt="a lucious lime" />
      </div>
      <footer className="footer-desktop">
        <p className="footer-text">
          We don’t do unnecessary bullshit — there’s nothing more to read about
          us on this pre-version of the website.
          <br /> <br />
          <a href="mailto:nesborudi@gmail.com" className="contact-us">
            Contact us
          </a>
          <span className="slash">/</span>
          <Link to="/fruits">
            <li className="see-fruits">See fruits</li>
          </Link>
        </p>
      </footer>
    </div>
  );
}
