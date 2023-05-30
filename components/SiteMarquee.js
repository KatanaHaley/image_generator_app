import React from 'react'
import Marquee from "react-fast-marquee";

const SiteMarquee = () => {
  return (
    <div className="marquee-width">
      <Marquee gradientWidth={400} delay="0" pauseOnHover="true" direction="right" gradientColor={[0, 0, 0]}>
      <p className="manrope">
      <span> Mykonos </span>     
      </p>
      <p className="garamond">
      <span >Bahamas </span>     
      </p>
      <p className="calligrapher">
      <span> London </span>     
      </p>
      <p className="manrope">
      <span>Bora Bora</span>     
      </p>
      <p className="garamond">
      <span>Monaco</span>     
      </p>
      <p className="manrope">
      <span>Japan</span>     
      </p>
      <p className="cursive">
      <span>Costa Rica</span>     
      </p>
      <p className="calligrapher">
      <span>Bali</span>     
      </p>
      <p className="manrope">
      <span>Vail</span>     
      </p>
      <p className="cursive">
      <span>Rome</span>     
      </p>
      <p className="garamond">
      <span>Barcelona</span>     
      </p>  
      <p className="calligrapher">
      <span>British Virgin Islands</span>     
      </p>  
      <p className="manrope">
      <span>Turtle Island</span>     
      </p>  
      <p className="manrope">
      <span>Whitsunday Islands</span>     
      </p>  
      <p className="calligrapher">
      <span>Sumba Isand</span>     
      </p>
      </Marquee>
    </div>
  )
}

export default SiteMarquee