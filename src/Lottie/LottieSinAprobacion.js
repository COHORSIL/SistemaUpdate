import React, { useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import './sass.scss'

export default function LottieSinAprobacion({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/91172-solidark.json')
    })
  }, [])

  return (
    <div style={{ width: '350px', height: ' 200px' }}>
      <div className="container" ref={container}></div>
      <h3 style={{ marginLeft: 30, fontSize: '25px' }} className="letraEstilo">
        {Text}
      </h3>
    </div>
  )
}
