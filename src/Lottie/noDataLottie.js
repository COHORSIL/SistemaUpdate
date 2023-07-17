import React, { useEffect, useRef } from 'react' 
import lottie from 'lottie-web' 
 
export default function LottieNoData({ Text }) { 
  const container = useRef(null) 
 
  useEffect(() => { 
    lottie.loadAnimation({ 
      container: container.current, 
      renderer: 'svg', 
      loop: true, 
      autoplay: true, 
      animationData: require('../asset/Lottie/noData.json') 
    }) 
  }, []) 
 
  return ( 
    <div style={{ width: '400px', height: ' 400px', marginTop: '100px', marginLeft: 'auto', marginRight: 'auto'}}> 
      <div className="container" ref={container}></div> 
    </div> 
  ) 
}