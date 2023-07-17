import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieSinImagen2({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/5856-image-picture.json')
    })
  }, [])

  return (
    <div style={{ width: '100px', height: ' 100px' }}>
      <div className="container" ref={container}></div>
      <h3 style={{ marginLeft: 30, fontSize: '20px' }}>{Text}</h3>
    </div>
  )
}
