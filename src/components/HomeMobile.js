import React from "react";
import { Link } from "react-router-dom";

import banana from "../media/img-1-mobile.png";
import mango from "../media/img-2-mobile.png";
import lime from "../media/img-3-mobile.png";

export default function Home() {
  return (
    <div className="home-mobile">
      <div className="section-1-mobile">
        <Link to="/fruits-mobile" className="fruits-link-mobile">
          fruits
        </Link>

        <div className="welcome-text-mobile">
          <div className="title-mobile">
            <p>
              We’re a digital agency that helps businesses and projects to
              succeed.
            </p>
          </div>

          <p>
            Sometimes we also do our own projects. For example MotiDay has over
            300,000 downloads in Russia and is growing internationally.
          </p>
          <a href="mailto:nesborudi@gmail.com">nesborudi@gmail.com</a>
        </div>
        <div className="pink-box-mobile">
          <p className="text-section-mobile">
            We’re currently working on our full website with works, testimonials
            and other typical stuff that will help us get cool clients.
            <br />
            <br /> Meanwhile, take a look at these peaceful artworks of fruits
            by Mike Dorner.
          </p>
        </div>
      </div>

      <div className="img-mobile pink-background">
        <img src={banana} alt="a beautiful banana" />
      </div>

      <div className="img-mobile blue-background">
        <img src={mango} alt="a magnificent mango" />
      </div>
      <div className="img-mobile yellow-background">
        <img src={lime} alt="a lucious lime" />
      </div>
      <footer className="footer-mobile">
        <p className="footer-text-mobile">
          We don’t do unnecessary bullshit — there’s nothing more to read about
          us on this pre-version of the website.
        </p>
        <div className="footer-links-mobile">
          <a href="mailto:nesborudi@gmail.com" className="contact-us-mobile">
            Contact us
          </a>
          <span
            style={{
              color: "#bebebe",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            /
          </span>
          <Link to="/fruits">See fruits</Link>
        </div>
      </footer>
    </div>
  );
}
