import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieCardProdu({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/47779-product-delivery-and-sign-in-the-paper.json')
    })
  }, [])

  return (
    <div style={{ width: '150px', height: ' 150px', marginTop: 5 }}>
      <div className="container" ref={container}></div>
    </div>
  )
}
