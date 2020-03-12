import React from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import Turtle from './turtle';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function TurtleMove() {
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    return (
      <>g
        <Turtle onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
          {trail.map((props, index) => (
            <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
          ))}
        </Turtle>
      </>
    )
  }
  