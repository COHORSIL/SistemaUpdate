import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieSinImagen({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/68374-animation-image.json')
    })
  }, [])

  return (
    <div style={{ width: '300px', height: ' 300px' }}>
      <div className="container" ref={container}></div>
      <h3 style={{ marginLeft: 30, fontSize: '20px' }}>{Text}</h3>
    </div>
  )
}
