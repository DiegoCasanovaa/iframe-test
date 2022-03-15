import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { RouteState } from '../../context/RouteAtom'

export const Iframe = () => {
  
  const routeState = useRecoilValue(RouteState);
  const [ eventData, setEventData ] = useState<any>('')

  useEffect(() => {
    window.addEventListener('message', event => {
      setEventData(event.data)
    })
  }, [])
  
  const { data } = eventData

  console.log( data );

  return (
    <div style={{ display: routeState ? 'block' : 'none'}} >
        <iframe id='MainIframe'src="javascript:document.body.innerHTML = (new Date().toISOString())" title="W3Schools Free Online Web Tutorials">
        </iframe>
        { eventData &&
            <p>data</p> 
        }
    </div>
  )
}
