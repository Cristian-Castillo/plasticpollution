import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './MacroAsia'


const pages = [
  ({ style }) => <animated.div  style={{ ...style }}>
    <div className="trans_old_bottle"></div>
        </animated.div>,
  ({ style }) => <animated.div style={{ ...style}}>
    <div className="trans_recyc_fact"></div>
        </animated.div>,
  ({ style }) => <animated.div  style={{ ...style}}>
  <div className="trans_packaged_bottle"></div>
      </animated.div>
 
]

export default function Trans() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="trans-china" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}