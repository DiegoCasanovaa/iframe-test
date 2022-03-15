import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { RouteState } from '../../context/RoutesContext'

export const Comp3 = () => {

    const [state, setStateList] = useRecoilState(RouteState);

    console.log(state);
    useEffect(() => {
        setStateList(true);
    }, [state])  

    useEffect(() => {
      let frame = document.getElementById("MainIframe") as HTMLIFrameElement
      let info = { type:'contact', data:'Contacto'}
      window.parent.postMessage(info, "http://localhost:3000");
    }, [])
    


    return (
        <div>
        {
            !state &&
            <p>Comp3</p>
        }
        </div>
    )
}
