import React from 'react'
import { useSpring, animated } from 'react-spring'
import './microOcean.css'

/*
export default function BagFloat() {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
  })
  return items.map(i => <animated.div key={i} className="water_bot" style={{ transform: radians.interpolate(interp(i)) }} />)
}
*/
export default function BagFloat() {
  return <div className="water_bot object"></div>
}

