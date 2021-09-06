import React, { useEffect } from "react";
import oranges from "../media/img-4.png";
import bananas from "../media/img-5.png";
import grapes from "../media/img-6.png";

export default function Fruits() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fruit-gallery">
      <div className="fruit-big-pic">
        <img src={oranges} alt="fresh, dewy oranges" />
        <p className="signature">
          By <u>Keilidh Evan</u>
        </p>
      </div>
      <div className="fruit-big-pic">
        <img src={bananas} alt="glowing yellow and green bananas" />
        <p className="signature">
          By <u>Scott Webb</u>
        </p>
      </div>
      <div className="fruit-big-pic">
        <img src={grapes} alt="irresistible crunchy grapes" />
        <p className="signature">
          By <u>Neven Krcmarek</u>
        </p>
      </div>
    </div>
  );
}
