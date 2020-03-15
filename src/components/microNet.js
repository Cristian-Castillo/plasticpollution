import React from 'react'
import { useSpring, animated } from 'react-spring'
import './microOcean.css'
import range from 'lodash-es/range'

const items = range(1)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

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