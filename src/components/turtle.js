import React from 'react';
import turtleCSS from './turtle.css'

function Turtle(){
    return <main class="turtle"> 
  <div class="turtle head"></div>
  <div class="turtle legs -left"></div>
  <div class="turtle legs -right"></div>
  <div class="turtle tail"></div>
  
  <section class="turtle shell">
    <div></div>
  </section>
</main>
    }


export default Turtle;