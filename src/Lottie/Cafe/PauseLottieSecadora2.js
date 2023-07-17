import React, { useEffect, useRef } from 'react' 
import lottie from 'lottie-web' 
 
export default function PauseLottieSecadora2({ Text }) { 
  const container = useRef(null) 
 
  useEffect(() => { 
    lottie.loadAnimation({ 
      container: container.current, 
      renderer: 'svg', 
      loop: false, 
      autoplay: false, 
      animationData: require('../../asset/Lottie/sandClock.json') 
    }) 
  }, []) 
 
  return ( 
    <div style={{ width: '60px', height: ' 60px', marginLeft: 'auto', marginRight: 'auto', opacity: 1, transform: "rotate(180deg)" }}> 
      <div className="container" ref={container}></div> 
    </div> 
  ) 
}