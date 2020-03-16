import React from 'react'
import './microOcean.css'


/*
export default function NetFloat() {
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 20 },
    config: { duration: 350 },
    reset: true,
  })
  return items.map(i => <animated.div key={i} className="net_Micro" style={{ transform: radians.interpolate(interp(i)) }}/>
  )}
*/
  export default function NetFloat() {
    return <div className="net_Micro object"></div>
  }

  