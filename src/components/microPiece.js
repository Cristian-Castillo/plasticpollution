import React from 'react'
import { useSpring, animated } from 'react-spring'
import './microOcean.css'

/*
export default function MicroFloat(props) {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 20 },
    config: { duration: 3500 },
    reset: true,
  })
  return items.map(i => <animated.div key={i} className="water_micro" style={{ transform: radians.interpolate(interp(i)) }}><div className={props.color} id={props.shape}></div></animated.div>) 
}*/
export default function MicroFloat(props) {
  return <div className="water_micro object">
      </div>
}