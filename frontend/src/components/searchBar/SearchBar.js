import React from 'react'
import style from './searchBar.module.css'

function SearchBar() {
  return (
    <nav className={style.nav}>
      <div className={style['left-section']}>
        <i></i>
        <h3>Awesome Booking Site</h3>
      </div>

      <ul>
        <li className={style['input-item']}>
          <i></i>
          <div>Location</div>
          <span></span>
        </li>
        <li className={style['input-item']}>
          <i></i>
          <div>Check in</div>
          <span></span>
        </li>
        <li className={style['input-item']}>
          <i></i>
          <div>Check out</div>
          <span></span>
        </li>
        <li className={style['input-item']}>
            <button className={style['search-btn']}>Search</button>
        </li>
      </ul>

      <div className={style['right-section']}>
        <div>Become a Host</div>
        <div className={style['user-box']}>
            <i className='iconfont'></i>
        </div>
      </div>

      <div className={style.line}></div>
    </nav>
  )
}

export default SearchBar