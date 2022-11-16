import React, { useEffect } from 'react'
import axios from 'axios'
import style from './home.module.css'
import SearchBar from '../searchBar/SearchBar'

function HomePage() {
  useEffect(() => {
    axios({
      url: 'http://localhost:4000/hotel',
      method: 'get'
    }).then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className={style['home-page']}>
      <SearchBar />
    </div>
  )
}

export default HomePage