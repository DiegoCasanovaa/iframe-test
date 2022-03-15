import React from 'react'
import { useRecoilValue } from 'recoil';
import { RouteState } from '../../context/RoutesContext';
import { IFrameProp } from './IframeProps.interface';

export const IframeVisibilityContainer = ({children}:IFrameProp) => {
    
    const routeState = useRecoilValue(RouteState);

    console.log(routeState);
    
    return (
        <>
            {!routeState && children}
        </>
        );
}
