import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { RouteState } from '../../context/RouteAtom'

export const Comp2 = () => {
    const [state, setStateList] = useRecoilState(RouteState);

    console.log(state);
    
  useEffect(() => {
    setStateList(false);
  }, [state])
  

  return (
    <div>
        {
            !state &&
            <p>Comp2</p>
        }
    </div>
  )
}
