import React from 'react'
import style from './searchBar.module.css'

function SearchBar() {
  return (
      <ul className={style['nav-bar']}>
        <li className={style['input-item']}>
          <i></i>
          <div>Location</div>
          <span>asfsdf</span>
        </li>
        <li className={style['input-item']}>
          <i></i>
          <div>Check in</div>
          <span>sdffds</span>
        </li>
        <li className={style['input-item']}>
          <i></i>
          <div>Check out</div>
          <span>sdffasd</span>
        </li>
        <li className={style['btn-box']}>
          <button className={style['search-btn']}>Search</button>
        </li>
      </ul>
  )
}

export default SearchBar