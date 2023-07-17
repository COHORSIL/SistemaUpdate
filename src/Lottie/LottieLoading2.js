import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieLoading({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/890-loading-animation.json')
    })
  }, [])

  return (
    <div
      style={{
        width: '300px',
        height: ' 300px',

        marginLeft: 'auto',
        marginRight: 'auto'
        // marginTop: '200px'
      }}
    >
      <div className="container" ref={container}></div>
      <h3 style={{ marginLeft: 30, fontSize: '20px' }}>{Text}</h3>
    </div>
  )
}
