import React from 'react';
import turtleCSS from './turtle.css'

const Turtle = () => {
    return <div className="turtle"> 
  <div className="turtle head"></div>
  <div className="turtle legs -left"></div>
  <div className="turtle legs -right"></div>
  <div className="turtle tail"></div>
  <section className="turtle shell">
    <div></div>
  </section>
</div>
    }


export default Turtle;