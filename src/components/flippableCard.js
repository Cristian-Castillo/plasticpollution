import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './clothes.css'


export default function Card(features, props) {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.div class={features.class1} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}><h2 className="fabrictitle">{features.title}</h2><h2 className="fabrictxt">{features.text}</h2></a.div>
      <a.div class={features.class2}  style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}><h2 className="fabrictitle">{features.title2}</h2><h2 className="fabrictxt">{features.text2}</h2></a.div>
    </div>
  )
}
