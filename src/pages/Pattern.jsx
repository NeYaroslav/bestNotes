import React, { useEffect, useRef } from 'react'
import { Outlet } from "react-router-dom";

const Pattern = () => {
  const header = useRef(null)
  useEffect(()=> {
    document.querySelector(':root').style.setProperty('--headerHeight', header.current.clientHeight + 'px')
  }, [])
  return (
    <>
      <header ref={header}>
        <div className="header__container container">
          <div className='header__logo'>
            <h2>best notes</h2>
            <p>created by Yaroslav Nazarenko</p>
          </div>
        </div>
      </header>
      <main>
        {/* <div className="main__container container"> */}
          {/* <a href="" className="btn">Log In</a>
          <a href="" className="btn btn_clear">Sign In</a> */}
          <Outlet/>
        {/* </div> */}
      </main>
      <footer>
        <div className="footer__container container">© {new Date().getFullYear() === 2022? 2022: `2022 - ${new Date().getFullYear()}`} BestNotes</div>
      </footer>
    </>
  )
}

export default Pattern