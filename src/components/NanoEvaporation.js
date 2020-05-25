import React from 'react';
import {useTrail, animated} from 'react-spring'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 300, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-5%,320%,0)`


function NanoEvaporation() {
  const [trail, set] = useTrail(2, () => ({ xy: [0, 0], config: i => (i === 8 ? fast : slow) }))
  return (
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
  )
}

export default NanoEvaporation;
