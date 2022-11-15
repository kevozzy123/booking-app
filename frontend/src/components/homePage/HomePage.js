import React from 'react'
import axios from 'axios'
import style from './home.module.css'
import SearchBar from '../searchBar/SearchBar'

function HomePage() {
  return (
    <div className={style['home-page']}>
      <SearchBar />
    </div>
  )
}

export default HomePage