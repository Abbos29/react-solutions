import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="/"><img src="/logo.svg" alt="logo" /></a>

          <div className="nav__inner">
            <button>
              <span>Регистрация</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="Login"><path d="M14 10 8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z" fill="#ffffff"></path></svg>
            </button>

            <button>
              Вход
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header