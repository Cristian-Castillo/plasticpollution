
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import './FoodWeb.css'

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'blue' }}><div className="contentContainer"><h2 className="chainText">Small fish mistakenly consume microplastics for food. Accumulating plastic.</h2><div className="pictureofsardine"></div></div></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'blue' }}><div className="contentContainer"><h2 className="chainText">Bigger fish eat smaller fish as well as the plastic they have consumed</h2><div className="pictureoffish"></div></div></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'blue' }}><div className="contentContainer"><h2 className="chainText">Bigger marine animals eat the larger fish, and all the plastic they have accumulated.</h2><div className="pictureofwhale"></div></div></animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'blue' }}><div className="contentContainer"><h2 className="chainText">The consumption and accumulation of microplastics through the foodchain can lead to death and a disruption to the food chain.</h2><div className="pictureofDeath"></div>
  <Button className=""><Nav.Link href="/Ocean">Go Back to Ocean</Nav.Link></Button></div></animated.div>,
]

export default function App() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div className="simple-trans-main" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

