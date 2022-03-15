import { ChildProcess } from 'child_process';
import React, { useContext } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { Iframe } from '../components/IFrame/Iframe';
import { IframeVisibilityContainer } from '../components/iframeContainer/IframeVisibilityContainer';
import { NavBar } from '../components/nav-bar/NavBar';
import { Comp1 } from '../components/TestComp/comp1';
import { Comp2 } from '../components/TestComp/comp2';
import { Comp3 } from '../components/TestComp/comp3';
import { RouteState } from '../context/RouteAtom';

export const AppRouter = () => {

  return (
    <>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/home" element={<Comp1 />} />
            <Route path="/dashboard" element={<Comp2 />} />
            <Route path="/contactos" element={<Comp3 />} />
        </Routes>
    </BrowserRouter>
            <Iframe />
    </>
  )
}
