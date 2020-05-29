
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import './FoodWeb.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const pages = [
  ({ style }) => <animated.div className="wholeSlide" style={{ ...style }}>
    <div className="contentContainer">
      <div className="txtContainer">
      <h2 className="titleText">PLASTIC ACCUMULATES THROUGH THE FOOD CHAIN</h2>
      </div>
      <div className="pictureofsardine"></div>
      <div className="StxtContainer">
      <h2 className="chainText">small fish eat plastic mistaking it for smaller fish </h2>
      </div>
        </div>
        </animated.div>,
  ({ style }) => <animated.div className="wholeSlide" style={{ ...style}}>
    <div className="contentContainer">
      <div className="pictureoffish"></div>
      <div className="StxtContainer">
      <h2 className="chainText">Bigger fish eat smaller fish as well as the plastic they have consumed</h2>
      </div>
        </div>
        </animated.div>,
  ({ style }) => <animated.div className="wholeSlide" style={{ ...style}}>
  <div className="contentContainer">
    <div className="pictureofwhale"></div>
    <div className="StxtContainer">
    <h2 className="chainText">Bigger marine animals eat the larger fish, and all the plastic they have accumulated.</h2>
    </div>
      </div>
      </animated.div>,
    ({ style }) => <animated.div className="wholeSlideSand" style={{ ...style}}>
    <div className="contentContainer">
    <div className="StxtContainer">
    <h2 className="chainText">Bigger marine animals eat the larger fish, and all the plastic they have accumulated.</h2>
    </div>
    <div className="pictureofDeath"></div>
      <Button className= "fishButton" startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Ocean">Continue</Nav.Link></Button>
        </div>
        </animated.div>,
 
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

