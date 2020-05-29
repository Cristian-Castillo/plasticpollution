import React from 'react'
import { useTrail, animated } from 'react-spring'
import Turtle from './turtle';
import './turtleAnim.css'

const fast = { tension: 40, friction: 20 }
const slow = { mass: 100, tension: 200, friction: 0 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(0%,-50%,0)`


export default function TurtleMove() {
  const [trail, set] = useTrail(1, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
  return (
    <>
      <div className="hooks-main2" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }}></animated.div>
        ))}
      </div>
    </>
  )
}
  