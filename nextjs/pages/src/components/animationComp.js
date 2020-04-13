import React from 'react'
import { Keyframes, animated, config } from 'react-spring/renderprops'
import delay from 'delay'

const Content = Keyframes.Spring(async next => {
  // None of this will cause React to render, the component renders only once :-)
  while (true) {
    await next({
      from: { opacity: 0, width: 50, height: 50, background: 'black' },
      opacity: 1,
      width: 80,
      height: 80,
      background: 'tomato',
    })
    //await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
    await next({
      opacity: 0,
      width: 40,
      height: 40,
      background: 'black',
    })
  }
})

export default class AnimatedThing extends React.Component {
    render() {
      return (
          <Content native>
            {props => (
              <animated.div>
                
              </animated.div>
            )}
          </Content>
      )
    }
  }