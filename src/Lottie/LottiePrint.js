import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottiePrint({ Text }) {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../asset/Lottie/74215-printing.json')
    })
  }, [])

  return (
    <div style={{ width: '150px', height: ' 150px', marginTop: 10 }}>
      <div className="container" ref={container}></div>
    </div>
  )
}
