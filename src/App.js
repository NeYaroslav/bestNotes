import React from 'react'
import { Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import Pattern from './pages/Pattern';

 const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Pattern/>} path=''>
          <Route element={<Registration/>} path=''/>
          <Route element={<LogIn/>} path='login'/>
        </Route>
      </Routes>
    </>
  )
}
export default App